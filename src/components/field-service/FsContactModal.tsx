import { useEffect, useState } from "react";
import { ThankYouDialog } from "@/components/lp/ThankYouDialog";
import { X } from "lucide-react";
import { captureUtms } from "@/components/field-service/fs-tracking";
import { LeadForm } from "@/components/forms/LeadForm";

type Props = { open: boolean; onClose: () => void };

const FORM_ID = "850c4f3f-e264-4cad-920d-26f30bf93cf6";

export function ContactModal({ open, onClose }: Props) {
  const [thanks, setThanks] = useState(false);
  const [submittedPageUrl, setSubmittedPageUrl] = useState("");

  useEffect(() => {
    if (!open) return;
    captureUtms();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      <ThankYouDialog open={thanks} onOpenChange={setThanks} submittedPageUrl={submittedPageUrl} />
      {open && (
        <div
          className="fade-up fixed inset-0 z-[100] flex items-center justify-center bg-brand-deep/70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <div
            className="fade-up relative w-full max-w-xl bg-white p-8 md:p-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-5 top-5 text-foreground/50 hover:text-brand-deep transition"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">
              Falar com especialista
            </p>
            <h3 className="mb-2 text-2xl font-black tracking-tight text-brand-deep md:text-3xl">
              Conte sobre sua operação.
            </h3>
            <p className="mb-8 text-sm text-foreground/70">
              Em até 24h úteis um especialista entra em contato.
            </p>

            <div className="hubspot-form-wrapper hubspot-form min-h-[280px]">
              <LeadForm
                formId={FORM_ID}
                source="field_service"
                onSubmitted={(pageUrl) => {
                  setSubmittedPageUrl(pageUrl);
                  setTimeout(() => {
                    onClose();
                    setThanks(true);
                  }, 300);
                }}
              />
            </div>

            <p className="pt-6 text-center text-[11px] text-foreground/50">
              Seus dados são tratados conforme a LGPD. Sem SPAM.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
