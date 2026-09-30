import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";
import { pushDataLayer, readUtms, UTM_KEYS } from "@/components/field-service/fs-tracking";
import { setupWhatsappMask } from "@/lib/whatsapp-mask";

type Props = { open: boolean; onClose: () => void };

const HUBSPOT_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";
const PORTAL_ID = "47388409";
const FORM_ID =
  "850c4f3f-e264-4cad-920d-26f30bf93cf6";
const REGION = "na1";

function loadHubspotScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.hbspt?.forms) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${HUBSPOT_SCRIPT_SRC}"]`,
  );
  if (existing) {
    return new Promise((resolve) => {
      if (window.hbspt?.forms) return resolve();
      existing.addEventListener("load", () => resolve(), { once: true });
    });
  }
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = HUBSPOT_SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("HubSpot script failed to load"));
    document.head.appendChild(s);
  });
}

export function ContactModal({ open, onClose }: Props) {
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  const targetId = "hubspot-form-target";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setReady(false);
      return;
    }
    let cancelled = false;
    let stopMask: (() => void) | undefined;
    setReady(false);

    loadHubspotScript()
      .then(() => {
        if (cancelled || !window.hbspt?.forms || !targetRef.current) return;
        // Clear any prior render
        targetRef.current.innerHTML = "";
        const utms = readUtms();

        window.hbspt.forms.create({
          portalId: PORTAL_ID,
          formId: FORM_ID,
          region: REGION,
          target: `#${targetId}`,
          onFormReady: (form: HTMLFormElement) => {
            setReady(true);
            // Máscara + validação do WhatsApp (utilitário compartilhado)
            setupWhatsappMask(form);
            // Prefill hidden UTM fields
            for (const key of UTM_KEYS) {
              const val = utms[key];
              if (!val) continue;
              const input = form.querySelector<HTMLInputElement>(
                `input[name="${key}"]`,
              );
              if (input) {
                input.value = val;
                input.dispatchEvent(new Event("input", { bubbles: true }));
                input.dispatchEvent(new Event("change", { bubbles: true }));
              }
            }
          },
          onFormSubmitted: () => {
            pushDataLayer({
              event: "lead_form_submit",
              form_name: "landing_modal",
              page_location:
                typeof window !== "undefined" ? window.location.href : "",
            });
            setTimeout(() => {
              onClose();
              navigate({ to: "/lp/field-service/obrigado" });
            }, 400);
          },
        });

        // Fallback: observa o container caso o onFormReady não dispare
        stopMask = setupWhatsappMask(targetRef.current);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      cancelled = true;
      stopMask?.();
    };
  }, [open, navigate, onClose]);

  return (
    <>
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

            <div
              id={targetId}
              ref={targetRef}
              className="hubspot-form min-h-[280px]"
            />
            {!ready && (
              <p className="mt-4 text-center text-xs text-foreground/50">
                Carregando formulário...
              </p>
            )}

            <p className="pt-6 text-center text-[11px] text-foreground/50">
              Seus dados são tratados conforme a LGPD. Sem SPAM.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
