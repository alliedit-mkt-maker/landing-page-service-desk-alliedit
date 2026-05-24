import { Link } from "@tanstack/react-router";
import logoAlliedIt from "@/assets/logo-alliedit.png";

export function SiteHeader() {
  return (
    <header className="bg-petrol sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-center">
        <Link to="/" aria-label="AlliedIT — voltar para o início" className="flex items-center">
          <img src={logoAlliedIt} alt="AlliedIT" className="h-8 sm:h-[2.6rem] w-auto brightness-0 invert" />
        </Link>
      </div>
    </header>
  );
}