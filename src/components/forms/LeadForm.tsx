import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { buildLeadPayload, DEFAULT_LEAD_FORM_ID, getLeadForm, LEAD_WEBHOOK_URL } from "@/lib/lead-forms";
import { formatBrPhone, normalizeBrDigits, setupWhatsappMask } from "@/lib/whatsapp-mask";
import { getUtms } from "@/lib/utm";
import { pushEvent } from "@/components/lp/LpProvider";

const DEFAULT_FORM_ID = (import.meta.env.VITE_HUBSPOT_FORM_ID as string) || DEFAULT_LEAD_FORM_ID;
const SUBMIT_ERROR = "Não foi possível enviar agora. Tente de novo em instantes ou fale com a gente por WhatsApp.";

type LeadFormProps = {
  formId?: string;
  product?: string;
  source?: string;
  formName?: string;
  onSubmitted: (pageUrl: string) => void;
};

export function LeadForm({ formId, product, source, formName, onSubmitted }: LeadFormProps) {
  const activeFormId = formId || DEFAULT_FORM_ID;
  const definition = getLeadForm(activeFormId);
  const formRef = useRef<HTMLFormElement>(null);
  const submittedRef = useRef(onSubmitted);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const id = useId().replace(/:/g, "_");
  submittedRef.current = onSubmitted;

  useEffect(() => setupWhatsappMask(formRef.current), [activeFormId]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const whatsappInput = form.elements.namedItem("hs_whatsapp_phone_number");
    const whatsapp = String(data.get("hs_whatsapp_phone_number") ?? "");
    if (whatsappInput instanceof HTMLInputElement) whatsappInput.value = formatBrPhone(whatsapp);
    if (String(data.get("website") ?? "")) {
      setError(SUBMIT_ERROR);
      return;
    }

    const pageUrl = window.location.href;
    const respostas = Object.fromEntries(
      definition.questions.map((question) => [question.label, String(data.get(question.name) ?? "")]),
    );
    const payload = buildLeadPayload({
      submissionId: crypto.randomUUID(),
      nome: String(data.get("firstname") ?? ""),
      empresa: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      whatsapp: normalizeBrDigits(whatsapp),
      produto: product ?? definition.product,
      formulario: formName ?? definition.formulario,
      pagina: pageUrl,
      utms: getUtms(),
      respostas,
    });

    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Lead webhook returned ${response.status}`);
      pushEvent("lead_form_submit", {
        form_name: formName ?? "landing_modal",
        source: source ?? "unknown",
        page_location: pageUrl,
      });
      try {
        sessionStorage.setItem("lp_origin_path", `${window.location.hostname}${window.location.pathname}`);
      } catch { /* noop */ }
      form.reset();
      submittedRef.current(pageUrl);
    } catch {
      setError(SUBMIT_ERROR);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form key={activeFormId} ref={formRef} className="hs-form" onSubmit={onSubmit}>
      <div className="hs-form-field">
        <label htmlFor={`${id}-firstname`}>Primeiro nome<span className="hs-form-required" aria-hidden="true">*</span></label>
        <input id={`${id}-firstname`} name="firstname" type="text" autoComplete="given-name" required />
      </div>
      <div className="hs-form-field">
        <label htmlFor={`${id}-email`}>E-MAIL CORPORATIVO<span className="hs-form-required" aria-hidden="true">*</span></label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" required />
      </div>
      <div className="hs-form-field">
        <label htmlFor={`${id}-whatsapp`}>WHATSAPP<span className="hs-form-required" aria-hidden="true">*</span></label>
        <input id={`${id}-whatsapp`} name="hs_whatsapp_phone_number" type="tel" autoComplete="tel" required />
      </div>
      <div className="hs-form-field">
        <label htmlFor={`${id}-company`}>NOME DA EMPRESA<span className="hs-form-required" aria-hidden="true">*</span></label>
        <input id={`${id}-company`} name="company" type="text" autoComplete="organization" required />
      </div>
      {definition.questions.map((question) => (
        <div className="hs-form-field" key={question.name}>
          <label htmlFor={`${id}-${question.name}`}>
            {question.label}
            {question.required && <span className="hs-form-required" aria-hidden="true">*</span>}
          </label>
          <select id={`${id}-${question.name}`} name={question.name} required={question.required} defaultValue="">
            <option value="" disabled>Selecione</option>
            {question.options.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
      ))}
      <div aria-hidden="true" className="absolute left-[-10000px] top-auto size-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {error && <p role="alert" className="mt-3 text-sm font-medium text-destructive">{error}</p>}
      <div className="hs-submit">
        <button type="submit" className="hs-button disabled:cursor-not-allowed disabled:opacity-60" disabled={submitting}>
          {submitting ? "ENVIANDO..." : "ENVIAR E AGENDAR  CONVERSA"}
        </button>
      </div>
    </form>
  );
}
