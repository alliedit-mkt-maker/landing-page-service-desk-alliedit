import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { ContactModal } from "./ContactModal";
import { captureUtms } from "@/lib/utm";

type Path = "internal" | "external" | null;

type LpCtx = {
  selectedPath: Path;
  setPath: (p: Exclude<Path, null>) => void;
  openModal: (source?: string) => void;
};

const Ctx = createContext<LpCtx | null>(null);

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function pushEvent(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

export function LpProvider({ children, modalTitle, formId }: { children: ReactNode; modalTitle?: string; formId?: string }) {
  const [selectedPath, setSelectedPath] = useState<Path>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<string | undefined>();

  const setPath = useCallback((p: Exclude<Path, null>) => {
    setSelectedPath(p);
    pushEvent(p === "internal" ? "path_internal_selected" : "path_external_selected");
  }, []);

  const openModal = useCallback((source?: string) => {
    setModalSource(source);
    setModalOpen(true);
    pushEvent("cta_click", { button_name: "primary_cta", source: source ?? "unknown" });
    pushEvent("modal_open", { modal_name: "lead_form", source: source ?? "unknown" });
  }, []);

  useEffect(() => {
    captureUtms();
    pushEvent("lp_view");
    let s50 = false, s90 = false;
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop + window.innerHeight) / h.scrollHeight;
      if (!s50 && pct >= 0.5) { s50 = true; pushEvent("scroll_50"); }
      if (!s90 && pct >= 0.9) { s90 = true; pushEvent("scroll_90"); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Ctx.Provider value={{ selectedPath, setPath, openModal }}>
      {children}
      <ContactModal open={modalOpen} onOpenChange={setModalOpen} source={modalSource} title={modalTitle} formId={formId} />
    </Ctx.Provider>
  );
}

export function useLp() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLp must be used inside LpProvider");
  return v;
}