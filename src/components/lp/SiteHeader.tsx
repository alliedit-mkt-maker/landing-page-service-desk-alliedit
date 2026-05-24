import { Link } from "@tanstack/react-router";
import { useLp } from "./LpProvider";
import logoAlliedIt from "@/assets/logo-alliedit.png";

export function SiteHeader() {
  const { openModal } = useLp();
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" aria-label="AlliedIT — voltar para o início" className="flex items-center gap-2">
          <img src={logoAlliedIt} alt="AlliedIT" className="h-8 w-auto" />
        </Link>
        <button
          onClick={() => openModal("header")}
          className="hidden sm:inline-flex h-10 px-5 bg-petrol text-white text-xs font-bold uppercase tracking-wider hover:bg-petrol-light transition-colors"
        >
          Falar com especialista
        </button>
      </div>
    </header>
  );
}