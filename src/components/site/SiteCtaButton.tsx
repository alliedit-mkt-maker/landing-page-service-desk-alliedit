import { useState, type ReactNode } from "react";
import { ContactModal } from "@/components/lp/ContactModal";

/**
 * Botão de CTA das páginas de produtos e serviços: abre o formulário em modal.
 * Por enquanto usa o formulário HubSpot de exemplo (padrão); passe `formId`
 * para trocar pelo formulário específico de cada página.
 */
export function SiteCtaButton({
  children,
  className,
  formId,
  description,
  product,
  title = "Vamos conversar sobre a TI da sua empresa?",
  source,
}: {
  children: ReactNode;
  className?: string;
  formId?: string;
  description?: string;
  product?: string;
  title?: string;
  source?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      <ContactModal
        open={open}
        onOpenChange={setOpen}
        title={title}
        formId={formId}
        description={description}
        product={product}
        source={source ?? (typeof window !== "undefined" ? window.location.pathname : "site")}
      />
    </>
  );
}
