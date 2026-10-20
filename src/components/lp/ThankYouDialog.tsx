import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { pushEvent } from "./LpProvider";

const WA_NUMBER = "5511943319875";
const WA_MESSAGE = "Olá! Acabei de enviar o formulário no site da Allied IT e gostaria de falar com um especialista.";
export const THANK_YOU_WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

function WhatsappIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.31l-.35-.21-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.69C5.78.69.68 5.79.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.31l5.7-1.5a11.33 11.33 0 0 0 5.77 1.46c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.89-3.33-8.04" />
    </svg>
  );
}

/** Pop-up único de agradecimento exibido após envio bem-sucedido de qualquer formulário HubSpot. */
export function ThankYouDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-none font-inter sm:rounded-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold tracking-tight text-[#046E8B]">Obrigado!</DialogTitle>
          <DialogDescription className="pt-2 text-[15px] leading-relaxed text-foreground/75">
            Recebemos o seu contato. Em breve nossa equipe entrará em contato com você por WhatsApp ou e-mail.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex flex-col gap-3">
          <a
            href={THANK_YOU_WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale com um especialista por WhatsApp (abre em nova aba)"
            onClick={() =>
              pushEvent("cta_click", {
                button_name: "whatsapp",
                source: "thank_you_modal",
                cta_location: "thank_you_modal",
                page_location: typeof window !== "undefined" ? window.location.href : "",
              })
            }
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-none bg-[#046E8B] px-6 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
          >
            <WhatsappIcon />
            Fale com um especialista por WhatsApp
          </a>
          <DialogClose asChild>
            <button
              type="button"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-none border border-[#046E8B] bg-transparent px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#046E8B] transition-colors hover:bg-[#046E8B]/5"
            >
              Fechar
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
