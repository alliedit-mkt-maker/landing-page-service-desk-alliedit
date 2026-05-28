import { useEffect, useId, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { pushEvent } from "./LpProvider";
import { getUtms, UTM_KEYS } from "@/lib/utm";

const HS_PORTAL_ID = (import.meta.env.VITE_HUBSPOT_PORTAL_ID as string) || "47388409";
const HS_FORM_ID = (import.meta.env.VITE_HUBSPOT_FORM_ID as string) || "087109f4-f093-404c-aec9-b4a3f6d763a4";
const HS_REGION = (import.meta.env.VITE_HUBSPOT_REGION as string) || "na1";
const HS_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: Record<string, unknown>) => void;
      };
    };
  }
}

function loadHubspotScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return resolve();
    if (window.hbspt) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${HS_SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("HubSpot script failed")), { once: true });
      return;
    }
    const s = document.createElement("script");
    s.src = HS_SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("HubSpot script failed"));
    document.head.appendChild(s);
  });
}

export function ContactModal({ open, onOpenChange, source }: { open: boolean; onOpenChange: (v: boolean) => void; source?: string }) {
  const navigate = useNavigate();
  const targetId = useId().replace(/:/g, "_");
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      renderedRef.current = false;
      if (containerRef.current) containerRef.current.innerHTML = "";
      return;
    }
    if (renderedRef.current) return;
    if (!HS_PORTAL_ID || !HS_FORM_ID) {
      setError("Formulário não configurado. Defina VITE_HUBSPOT_PORTAL_ID e VITE_HUBSPOT_FORM_ID.");
      return;
    }

    let cancelled = false;
    loadHubspotScript()
      .then(() => {
        if (cancelled || !window.hbspt) return;
        renderedRef.current = true;
        window.hbspt.forms.create({
          portalId: HS_PORTAL_ID,
          formId: HS_FORM_ID,
          region: HS_REGION,
          target: `#${targetId}`,
          onFormReady: ($form: unknown) => {
            try {
              const utms = getUtms();
              const root = containerRef.current;
              if (!root) return;
              UTM_KEYS.forEach((k) => {
                const v = utms[k];
                if (!v) return;
                const input = root.querySelector<HTMLInputElement>(`input[name="${k}"]`);
                if (input) {
                  input.value = v;
                  input.dispatchEvent(new Event("input", { bubbles: true }));
                  input.dispatchEvent(new Event("change", { bubbles: true }));
                }
              });
            } catch {
              /* noop */
            }
            void $form;
          },
          onFormSubmitted: () => {
            pushEvent("lead_form_submit", {
              form_name: "landing_modal",
              source: source ?? "unknown",
              page_location: typeof window !== "undefined" ? window.location.href : "",
            });
            setTimeout(() => {
              onOpenChange(false);
              navigate({ to: "/obrigado" });
            }, 600);
          },
        });
      })
      .catch(() => setError("Não foi possível carregar o formulário. Atualize a página."));

    return () => {
      cancelled = true;
    };
  }, [open, navigate, onOpenChange, source, targetId]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold tracking-tight text-petrol">Vamos falar de Service Desk.</DialogTitle>
          <DialogDescription className="sr-only">
            Formulário de contato AlliedIT Service Desk
          </DialogDescription>
        </DialogHeader>
        <div className="pt-2 hubspot-form-wrapper">
          {error ? (
            <p className="text-sm text-destructive font-medium">{error}</p>
          ) : (
            <div ref={containerRef} id={targetId} />
          )}
          <p className="text-[11px] text-petrol/50 text-center font-mono mt-4">
            Seus dados são tratados conforme a LGPD. Sem SPAM.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}