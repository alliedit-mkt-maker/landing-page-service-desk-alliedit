import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Serviços", to: "/site/servicos" },
  { label: "Produtos", to: "/site/produtos" },
  { label: "Sobre", to: "/site/sobre" },
  { label: "Blog", to: "/site/blog" },
] as const;

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "font-inter relative text-[13px] font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-[var(--site-yellow)] after:transition-all after:duration-200 hover:after:w-full";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div
        className={`pointer-events-auto mx-auto flex h-[80px] max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border border-white/10 bg-[#232A2F]/95 shadow-[0_10px_34px_-16px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <Link
          to="/site"
          aria-label="Allied IT, ir para a página inicial"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <span
            className={`relative z-10 flex items-center justify-center rounded-full transition-all duration-500 ${
              scrolled ? "bg-white p-1.5 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.5)]" : "bg-transparent p-0"
            }`}
          >
            <img
              src="/logo-allied-symbol.png"
              alt="Allied IT"
              className="site-logo-mustard h-10 w-auto"
            />
          </span>
          <span
            aria-hidden="true"
            className={`relative z-0 overflow-hidden transition-all duration-500 ease-in-out ${
              scrolled ? "ml-0 w-0 opacity-0" : "ml-2 w-[114px] opacity-100"
            }`}
          >
            <img
              src="/logo-allied-wordmark.png"
              alt=""
              className={`site-logo-mustard h-8 w-auto max-w-none transition-transform duration-500 ease-in-out ${
                scrolled ? "-translate-x-full" : "translate-x-0"
              }`}
            />
          </span>
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

        <Link
          to="/site/contato"
          className="font-inter hidden h-11 items-center justify-center rounded-full border border-white/35 bg-transparent px-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:border-white hover:text-white lg:inline-flex"
        >
          Contato
        </Link>

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
                className="font-inter border-b border-white/10 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/site/contato"
              onClick={() => setOpen(false)}
              className="font-inter mt-4 inline-flex h-11 items-center justify-center rounded-full border border-white/35 px-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Contato
            </Link>
          </nav>
        </div>
      ) : null}

    </header>
  );
}
