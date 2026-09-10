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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkBase =
    "font-chillax relative text-[15px] font-medium tracking-tight text-[var(--site-ink)] transition-colors hover:text-[var(--site-blue)] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-[var(--site-yellow)] after:transition-all after:duration-200 hover:after:w-full";

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_16px_-6px_rgba(16,26,31,0.25)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/site"
          aria-label="Allied IT, ir para a página inicial"
          onClick={() => setOpen(false)}
          className="font-chillax text-xl font-semibold tracking-tight text-[var(--site-ink)]"
        >
          Allied<span className="text-[var(--site-blue)]">IT</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
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

        <div className="hidden lg:block">
          <Link
            to="/site/contato"
            className="font-chillax inline-flex h-11 items-center rounded-md bg-[var(--site-blue)] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[var(--site-blue-dark)]"
          >
            Falar com especialista
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--site-ink)] transition-colors hover:bg-[#F4F6F7] lg:hidden"
        >
          {open ? <Menu className="hidden" /> : null}
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--site-line)] bg-white lg:hidden">
          <nav aria-label="Navegação principal" className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-chillax border-b border-[var(--site-line)] py-4 text-[17px] font-medium text-[var(--site-ink)]"
                activeProps={{
                  className:
                    "font-chillax border-b border-[var(--site-line)] py-4 text-[17px] font-medium text-[var(--site-ink)] shadow-[inset_3px_0_0_0_var(--site-yellow)] pl-3",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/site/contato"
              onClick={() => setOpen(false)}
              className="font-chillax mt-5 inline-flex h-12 items-center justify-center rounded-md bg-[var(--site-blue)] px-6 text-[15px] font-medium text-white"
            >
              Falar com especialista
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
