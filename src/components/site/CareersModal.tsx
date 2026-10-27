import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { pushEvent } from "@/components/lp/LpProvider";
import { formatBrPhone } from "@/lib/whatsapp-mask";
import {
  ACCEPT_ATTR,
  CAREERS_EMAIL,
  CAREERS_ENDPOINT,
  CAREER_AREAS,
  MAX_ABOUT_CHARS,
  validateCareer,
  validateFile,
  type CareerErrors,
} from "@/lib/careers-ui";

type Status = "idle" | "sending" | "fallback" | "error" | "success";

const input =
  "font-inter w-full rounded-none border border-foreground/20 bg-background px-3 py-2.5 text-[14px] text-foreground outline-none transition-colors focus:border-[#046E8B]";
const label = "font-inter mb-1.5 block text-[13px] font-semibold text-foreground/80";
const errCls = "font-inter mt-1 text-[12px] text-destructive";

export function CareersModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [area, setArea] = useState("");
  const [sobre, setSobre] = useState("");
  const [aceite, setAceite] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [hp, setHp] = useState("");
  const [errors, setErrors] = useState<CareerErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      pushEvent("modal_open", { modal_name: "career_form", page_location: window.location.href });
      if (status === "success") resetAll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function resetAll() {
    setNome(""); setEmail(""); setWhatsapp(""); setArea(""); setSobre(""); setAceite(false);
    setFile(null); setHp(""); setErrors({}); setStatus("idle");
    if (fileRef.current) fileRef.current.value = "";
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    const errs = validateCareer({ nome, email, whatsapp, area, sobre, aceite });
    const fe = validateFile(file);
    if (fe) errs.curriculo = fe;
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus("idle");
      return;
    }
    setStatus("sending");
    const fd = new FormData();
    fd.set("nome", nome); fd.set("email", email); fd.set("whatsapp", whatsapp); fd.set("area", area);
    fd.set("sobre", sobre); fd.set("aceite", aceite ? "sim" : ""); fd.set("empresa_site", hp);
    fd.set("curriculo", file!);
    try {
      const res = await fetch(CAREERS_ENDPOINT, { method: "POST", body: fd });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; code?: string; errors?: CareerErrors };
      if (res.ok && body.ok) {
        pushEvent("career_form_submit", { career_area: area, page_location: window.location.href });
        setStatus("success");
        return;
      }
      if (body.code === "validation" && body.errors) {
        setErrors(body.errors);
        setStatus("idle");
        return;
      }
      setStatus(body.code === "not_configured" ? "fallback" : "error");
    } catch {
      setStatus("error");
    }
  }

  const success = status === "success";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-lg overflow-y-auto rounded-none font-inter sm:rounded-none">
        {success ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-extrabold tracking-tight text-[#046E8B]">Obrigado!</DialogTitle>
              <DialogDescription className="pt-2 text-[15px] leading-relaxed text-foreground/75">
                Recebemos a sua candidatura. Se o seu perfil combinar com uma vaga, nossa equipe entrará em contato.
              </DialogDescription>
            </DialogHeader>
            <DialogClose className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-none border border-foreground/20 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:bg-foreground/5">
              Fechar
            </DialogClose>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-extrabold tracking-tight text-[#046E8B]">Trabalhe Conosco</DialogTitle>
              <DialogDescription className="pt-1 text-[14px] leading-relaxed text-foreground/70">
                Envie o seu currículo e conte um pouco sobre você.
              </DialogDescription>
            </DialogHeader>
            <form noValidate onSubmit={onSubmit} className="mt-2 space-y-4">
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>Site da empresa<input tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} name="empresa_site" /></label>
              </div>
              <div>
                <label htmlFor="cr-nome" className={label}>Nome completo *</label>
                <input id="cr-nome" className={input} value={nome} maxLength={120} autoComplete="name" onChange={(e) => setNome(e.target.value)} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "cr-nome-e" : undefined} />
                {errors.nome && <p id="cr-nome-e" className={errCls}>{errors.nome}</p>}
              </div>
              <div>
                <label htmlFor="cr-email" className={label}>E-mail *</label>
                <input id="cr-email" type="email" className={input} value={email} maxLength={200} autoComplete="email" onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cr-email-e" : undefined} />
                {errors.email && <p id="cr-email-e" className={errCls}>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="cr-wa" className={label}>WhatsApp *</label>
                <input id="cr-wa" type="tel" inputMode="numeric" placeholder="(11) 98765-4321" className={input} value={whatsapp} autoComplete="tel-national" onChange={(e) => setWhatsapp(formatBrPhone(e.target.value))} aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? "cr-wa-e" : undefined} />
                {errors.whatsapp && <p id="cr-wa-e" className={errCls}>{errors.whatsapp}</p>}
              </div>
              <div>
                <label htmlFor="cr-area" className={label}>Área de interesse *</label>
                <select id="cr-area" className={input} value={area} onChange={(e) => setArea(e.target.value)} aria-invalid={!!errors.area} aria-describedby={errors.area ? "cr-area-e" : undefined}>
                  <option value="">Selecione</option>
                  {CAREER_AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
                {errors.area && <p id="cr-area-e" className={errCls}>{errors.area}</p>}
              </div>
              <div>
                <label htmlFor="cr-cv" className={label}>Currículo (PDF, DOC ou DOCX, até 5 MB) *</label>
                <input
                  id="cr-cv"
                  ref={fileRef}
                  type="file"
                  accept={ACCEPT_ATTR}
                  className="font-inter block w-full text-[13px] text-foreground/80 file:mr-3 file:rounded-none file:border-0 file:bg-[#046E8B] file:px-4 file:py-2 file:text-[12px] file:font-semibold file:uppercase file:tracking-[0.12em] file:text-white"
                  onChange={(e) => {
                    const f = e.target.files?.[0] ?? null;
                    setFile(f);
                    setErrors((p) => ({ ...p, curriculo: f ? validateFile(f) : undefined }));
                  }}
                  aria-invalid={!!errors.curriculo}
                  aria-describedby={errors.curriculo ? "cr-cv-e" : undefined}
                />
                {errors.curriculo && <p id="cr-cv-e" className={errCls}>{errors.curriculo}</p>}
              </div>
              <div>
                <label htmlFor="cr-sobre" className={label}>Conte um pouco sobre você</label>
                <textarea id="cr-sobre" rows={4} className={input} value={sobre} maxLength={MAX_ABOUT_CHARS} onChange={(e) => setSobre(e.target.value.slice(0, MAX_ABOUT_CHARS))} aria-describedby="cr-sobre-c" />
                <p id="cr-sobre-c" className="font-inter mt-1 text-right text-[12px] text-foreground/55">{sobre.length}/{MAX_ABOUT_CHARS}</p>
              </div>
              <div>
                <label className="font-inter flex items-start gap-2 text-[13px] leading-snug text-foreground/75">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#046E8B]" checked={aceite} onChange={(e) => setAceite(e.target.checked)} aria-invalid={!!errors.aceite} />
                  <span>
                    Li e aceito a{" "}
                    <Link to="/politica-de-privacidade" target="_blank" className="font-semibold text-[#046E8B] underline">Política de Privacidade</Link>{" "}
                    e autorizo o uso dos meus dados para processos seletivos da Allied IT. *
                  </span>
                </label>
                {errors.aceite && <p className={errCls}>{errors.aceite}</p>}
              </div>

              {status === "fallback" && (
                <p role="alert" className="font-inter border-l-4 border-[#D4A017] bg-[#D4A017]/10 px-3 py-2 text-[13.5px] text-foreground">
                  Não foi possível enviar agora. Envie o seu currículo diretamente para{" "}
                  <a href={`mailto:${CAREERS_EMAIL}`} className="font-semibold text-[#046E8B] underline">{CAREERS_EMAIL}</a>.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="font-inter border-l-4 border-destructive bg-destructive/10 px-3 py-2 text-[13.5px] text-foreground">
                  Não foi possível enviar agora. Tente novamente em instantes ou envie o seu currículo para{" "}
                  <a href={`mailto:${CAREERS_EMAIL}`} className="font-semibold text-[#046E8B] underline">{CAREERS_EMAIL}</a>.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-none bg-[#D4A017] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0A0E12] transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar candidatura"}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
