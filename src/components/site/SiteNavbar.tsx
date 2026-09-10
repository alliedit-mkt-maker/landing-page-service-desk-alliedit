import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Serviços", to: "/site/servicos" },
  { label: "Produtos", to: "/site/produtos" },
  { label: "Sobre", to: "/site/sobre" },
  { label: "Blog", to: "/site/blog" },
  { label: "Contato", to: "/site/contato" },
] as const;

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkBase =
    "font-inter relative text-[14px] font-medium tracking-tight text-white/85 transition-colors hover:text-white after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-[var(--site-yellow)] after:transition-all after:duration-200 hover:after:w-full";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="pointer-events-auto mx-auto flex h-[68px] max-w-6xl items-center justify-between px-1 sm:px-2">
        <Link
          to="/site"
          aria-label="Allied IT, ir para a página inicial"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <img src="/logo-allied-it.png" alt="Allied IT" className="h-8 w-auto" />
        </Link>


        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkBase}
              activeProps={{ className: `${linkBase} after:w-full` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-3 max-w-6xl rounded-3xl border border-white/15 bg-[#0A0E12]/90 p-4 backdrop-blur-md lg:hidden">
          <nav aria-label="Navegação principal" className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-inter border-b border-white/10 py-4 text-[16px] font-medium text-white last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}

    </header>
  );
}
