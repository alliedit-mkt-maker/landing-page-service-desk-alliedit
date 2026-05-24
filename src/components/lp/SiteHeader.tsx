import { Link } from "@tanstack/react-router";
import logoAlliedIt from "@/assets/logo-alliedit.png";

export function SiteHeader() {
  return (
    <header className="bg-surface/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center">
        <Link to="/" aria-label="AlliedIT — voltar para o início" className="flex items-center">
          <img src={logoAlliedIt} alt="AlliedIT" className="h-[2.6rem] w-auto" />
        </Link>
      </div>
    </header>
  );
}