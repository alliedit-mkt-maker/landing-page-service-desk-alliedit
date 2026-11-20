import { useState } from "react";
import { ThankYouDialog } from "./ThankYouDialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LeadForm } from "@/components/forms/LeadForm";

export function ContactModal({ open, onOpenChange, source, title = "Vamos falar de Service Desk.", formId, description = "Formulário de contato Allied IT Service Desk", product, returnFocusRef }: { open: boolean; onOpenChange: (v: boolean) => void; source?: string; title?: string; formId?: string; description?: string; product?: string; captureAttribution?: boolean; returnFocusRef?: { current: HTMLElement | null } }) {
  const [thanks, setThanks] = useState(false);
  const [submittedPageUrl, setSubmittedPageUrl] = useState("");

  return (
    <>
      <ThankYouDialog open={thanks} onOpenChange={setThanks} submittedPageUrl={submittedPageUrl} />
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="max-w-lg max-h-[90vh] overflow-y-auto"
          onCloseAutoFocus={(e) => {
            const el = returnFocusRef?.current;
            if (el && el.isConnected) {
              e.preventDefault();
              el.focus();
            }
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-extrabold tracking-tight text-petrol">{title}</DialogTitle>
            <DialogDescription className="sr-only">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="pt-2 hubspot-form-wrapper">
            <LeadForm
              formId={formId}
              product={product}
              source={source}
              onSubmitted={(pageUrl) => {
                setSubmittedPageUrl(pageUrl);
                setTimeout(() => {
                  onOpenChange(false);
                  setThanks(true);
                }, 300);
              }}
            />
            <p className="text-[11px] text-petrol/50 text-center font-mono mt-4">
              Seus dados são tratados conforme a LGPD. Sem SPAM.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
