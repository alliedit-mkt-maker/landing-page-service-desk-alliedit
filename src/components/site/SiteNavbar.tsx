import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ChevronDown,
  Cloud,
  Cpu,
  Headset,
  Menu,
  Monitor,
  Server,
  ShieldCheck,
  Sparkles,
  Video,
  X,
} from "lucide-react";

const SERVICES = [
  {
    icon: Headset,
    title: "Digital Workspace",
    text: "Suporte ao usuário, remoto e presencial",
    to: "/servicos/digital-workspace",
  },
  { icon: Cloud, title: "Smart Cloud Ops", text: "Gestão de nuvem e bancos de dados" },
  { icon: ShieldCheck, title: "Cyber Shield 360°", text: "SOC, NOC e cibersegurança 24x7" },
  { icon: Server, title: "Infra Core", text: "Redes, cabeamento e data center" },
  { icon: Cpu, title: "Product Engineering", text: "Automação e desenvolvimento sob medida" },
  { icon: Sparkles, title: "Inteligência Artificial", text: "Soluções de IA aplicadas à operação" },
] as const;

const PRODUCTS = [
  { icon: Video, title: "Videoconferência" },
  { icon: Headset, title: "Headsets" },
  { icon: Monitor, title: "Microsoft 365" },
  { icon: Cloud, title: "AWS" },
  { icon: ShieldCheck, title: "Firewall" },
] as const;

const SIMPLE_ITEMS = [
  { label: "Sobre", to: "/sobre" },
  { label: "Blog", to: "/blog" },
] as const;

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<"servicos" | "produtos" | null>(null);
  const [acc, setAcc] = useState<"servicos" | "produtos" | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const threshold = isHome ? window.innerHeight * 0.7 : 8;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMenu(null);
    setOpen(false);
  }, [pathname]);

  const openMenu = (key: "servicos" | "produtos") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };

  const solid = scrolled || !isHome;
  const hero = isHome && !scrolled;

  const linkBase =
    "font-inter relative inline-flex items-center gap-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-[var(--site-yellow)] after:transition-all after:duration-200 hover:after:w-full";
  const panelBase =
    "absolute top-full mt-2 origin-top rounded-2xl border border-black/5 bg-white shadow-[0_18px_44px_-24px_rgba(0,0,0,0.45)] transition-all duration-200";

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-3 z-50 transition-[padding] duration-500 ease-out ${
        solid ? "px-4 sm:px-6" : "px-5 sm:px-8"
      }`}
      onMouseLeave={scheduleClose}
    >
      <div
        className={`pointer-events-auto relative mx-auto flex h-[60px] items-center justify-between transition-all duration-500 ease-out ${
          solid
            ? "max-w-5xl rounded-full border border-white/10 bg-[#232A2F]/95 px-4 shadow-[0_10px_34px_-16px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-5"
            : "max-w-7xl rounded-full border border-transparent bg-transparent px-0 shadow-none"
        }`}
      >

        <Link
          to="/"
          aria-label="Allied IT, ir para a página inicial"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <span
            className={`relative z-10 flex items-center justify-center rounded-full transition-all duration-500 ${
              scrolled ? "bg-white p-1 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.5)]" : "bg-transparent p-0"
            }`}
          >
            <img
              src="/logo-allied-symbol.png"
              alt="Allied IT"
              className={`site-logo-mustard w-auto transition-all duration-500 ease-out ${
                hero ? "h-[46px]" : "h-9"
              }`}
            />
          </span>
          <span
            aria-hidden="true"
            className={`relative z-0 overflow-hidden transition-all duration-500 ease-in-out ${
              scrolled ? "ml-0 w-0 opacity-0" : hero ? "ml-3 w-[152px] opacity-100" : "ml-2 w-[118px] opacity-100"
            }`}
          >
            <img
              src="/logo-allied-wordmark.png"
              alt=""
              className={`site-logo-mustard w-auto max-w-none transition-all duration-500 ease-in-out ${
                hero ? "h-[38px]" : "h-8"
              } ${scrolled ? "-translate-x-full" : "translate-x-0"}`}
            />
          </span>

        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <nav aria-label="Navegação principal" className="flex items-center gap-7">
            {/* Serviços — mega menu */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("servicos")}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/servicos"
                aria-expanded={menu === "servicos"}
                onClick={() => setMenu(null)}
                className={`${linkBase} ${menu === "servicos" ? "text-white after:w-full" : ""}`}
              >
                Serviços
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${menu === "servicos" ? "rotate-180" : ""}`}
                />
              </Link>

              <div
                className={`${panelBase} left-1/2 w-[640px] -translate-x-1/2 p-5 ${
                  menu === "servicos"
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-1.5">
                  {SERVICES.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.title}
                        to={"to" in s ? s.to : "/servicos"}
                        onClick={() => setMenu(null)}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#046E8B]/[0.06]"
                      >
                        <Icon
                          className="mt-0.5 h-4 w-4 shrink-0 stroke-[1.25] text-[#046E8B]"
                          aria-hidden="true"
                        />
                        <span>
                          <span className="font-chillax block text-[14px] font-semibold text-[var(--site-ink)]">
                            {s.title}
                          </span>
                          <span className="font-inter mt-0.5 block text-[12px] leading-snug text-[var(--site-muted)]">
                            {s.text}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  to="/servicos"
                  onClick={() => setMenu(null)}
                  className="font-inter mt-4 flex items-center justify-between border-t border-black/5 pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#046E8B]"
                >
                  Ver todos os serviços <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Produtos — dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("produtos")}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/produtos"
                aria-expanded={menu === "produtos"}
                onClick={() => setMenu(null)}
                className={`${linkBase} ${menu === "produtos" ? "text-white after:w-full" : ""}`}
              >
                Produtos
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${menu === "produtos" ? "rotate-180" : ""}`}
                />
              </Link>

              <div
                className={`${panelBase} left-1/2 w-[260px] -translate-x-1/2 p-3 ${
                  menu === "produtos"
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <div className="flex flex-col">
                  {PRODUCTS.map((p) => {
                    const Icon = p.icon;
                    return (
                      <Link
                        key={p.title}
                        to="/produtos"
                        onClick={() => setMenu(null)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#046E8B]/[0.06]"
                      >
                        <Icon
                          className="h-4 w-4 shrink-0 stroke-[1.25] text-[#046E8B]"
                          aria-hidden="true"
                        />
                        <span className="font-chillax text-[14px] font-semibold text-[var(--site-ink)]">
                          {p.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  to="/produtos"
                  onClick={() => setMenu(null)}
                  className="font-inter mt-2 flex items-center justify-between border-t border-black/5 px-3 pt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#046E8B]"
                >
                  Ver todos <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {SIMPLE_ITEMS.map((item) => (
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
            to="/contato"
            className="font-inter inline-flex h-9 items-center justify-center rounded-full border border-white/35 bg-transparent px-5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors hover:border-white hover:text-white"
          >
            Contato
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-3 max-h-[75vh] max-w-5xl overflow-y-auto rounded-3xl border border-white/15 bg-[#0A0E12]/95 p-4 backdrop-blur-md lg:hidden">
          <nav aria-label="Navegação principal" className="flex flex-col">
            {/* Acordeão Serviços */}
            <button
              type="button"
              onClick={() => setAcc((v) => (v === "servicos" ? null : "servicos"))}
              aria-expanded={acc === "servicos"}
              className="font-inter flex items-center justify-between border-b border-white/10 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Serviços
              <ChevronDown
                className={`h-4 w-4 transition-transform ${acc === "servicos" ? "rotate-180" : ""}`}
              />
            </button>
            {acc === "servicos" ? (
              <div className="flex flex-col border-b border-white/10 py-2">
                {SERVICES.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.title}
                      to={"to" in s ? s.to : "/servicos"}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-2.5"
                    >
                      <Icon className="h-4 w-4 shrink-0 stroke-[1.25] text-[var(--site-yellow)]" />
                      <span className="font-chillax text-[14px] font-semibold text-white">
                        {s.title}
                      </span>
                    </Link>
                  );
                })}
                <Link
                  to="/servicos"
                  onClick={() => setOpen(false)}
                  className="font-inter mt-1 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--site-yellow)]"
                >
                  Ver todos os serviços →
                </Link>
              </div>
            ) : null}

            {/* Acordeão Produtos */}
            <button
              type="button"
              onClick={() => setAcc((v) => (v === "produtos" ? null : "produtos"))}
              aria-expanded={acc === "produtos"}
              className="font-inter flex items-center justify-between border-b border-white/10 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Produtos
              <ChevronDown
                className={`h-4 w-4 transition-transform ${acc === "produtos" ? "rotate-180" : ""}`}
              />
            </button>
            {acc === "produtos" ? (
              <div className="flex flex-col border-b border-white/10 py-2">
                {PRODUCTS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Link
                      key={p.title}
                      to="/produtos"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 py-2.5"
                    >
                      <Icon className="h-4 w-4 shrink-0 stroke-[1.25] text-[var(--site-yellow)]" />
                      <span className="font-chillax text-[14px] font-semibold text-white">
                        {p.title}
                      </span>
                    </Link>
                  );
                })}
                <Link
                  to="/produtos"
                  onClick={() => setOpen(false)}
                  className="font-inter mt-1 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--site-yellow)]"
                >
                  Ver todos os produtos →
                </Link>
              </div>
            ) : null}

            {SIMPLE_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-inter border-b border-white/10 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="font-inter mt-4 inline-flex h-11 items-center justify-center rounded-full border border-white/35 px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Contato
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
