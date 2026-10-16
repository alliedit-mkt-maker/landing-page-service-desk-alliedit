import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

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
        <DialogClose asChild>
          <button
            type="button"
            className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-none bg-[#046E8B] px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            Fechar
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
