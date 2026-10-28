import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { ContactModal } from "@/components/lp/ContactModal";
import { pushEvent } from "@/components/lp/LpProvider";
import { GENERAL_CONTACT_FORM } from "@/lib/general-contact-form";

const OPEN_EVENT = "allied:open-general-contact";

/** Single general HubSpot modal per page; links dispatch an event so the modal survives menus unmounting. */
export function GeneralContactHost() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const onOpen = (e: Event) => {
      triggerRef.current = (e as CustomEvent<HTMLElement | null>).detail ?? null;
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);
  return (
    <ContactModal
      open={open}
      onOpenChange={setOpen}
      title="Vamos conversar sobre a TI da sua empresa?"
      formId={GENERAL_CONTACT_FORM.formId}
      description={GENERAL_CONTACT_FORM.description}
      product={GENERAL_CONTACT_FORM.product}
      source={typeof window !== "undefined" ? window.location.pathname : "site"}
      returnFocusRef={triggerRef}
    />
  );
}

/** Link to /contato that opens the general form in place; modified clicks follow the link. */
export function GeneralContactLink({
  children,
  className,
  buttonName,
  onActivate,
  fallbackFocus,
}: {
  children: ReactNode;
  className?: string;
  buttonName: string;
  onActivate?: () => void;
  fallbackFocus?: () => HTMLElement | null;
}) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const source = window.location.pathname;
    pushEvent("cta_click", { button_name: buttonName, source });
    pushEvent("modal_open", { modal_name: "lead_form", source });
    const target = e.currentTarget;
    onActivate?.();
    window.dispatchEvent(
      new CustomEvent(OPEN_EVENT, { detail: target.isConnected ? target : fallbackFocus?.() ?? null }),
    );
  };
  return (
    <a href="/contato" className={className} onClick={onClick}>
      {children}
    </a>
  );
}
