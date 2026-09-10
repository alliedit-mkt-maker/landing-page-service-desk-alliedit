import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Cpu, Headset, Server, ShieldCheck, Sparkles } from "lucide-react";

const SERVICES = [
  {
    icon: Headset,
    title: "Digital Workspace",
    text: "Suporte ao usuário, remoto e presencial, com SLA garantido e gestão centralizada.",
    to: "/site/servicos",
  },
  {
    icon: Cloud,
    title: "Smart Cloud Ops",
    text: "Gestão de nuvem com foco em FinOps, SecOps e bancos de dados escaláveis.",
    to: "/site/servicos",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Shield 360°",
    text: "SOC e NOC 24x7, proteção de endpoints, firewall, LGPD e cultura de segurança.",
    to: "/site/servicos",
  },
  {
    icon: Server,
    title: "Infra Core",
    text: "Projetos de rede, cabeamento, data center e modernização de ambientes físicos.",
    to: "/site/servicos",
  },
  {
    icon: Cpu,
    title: "Product Engineering",
    text: "Ferramentas sob medida: automação, integração de sistemas e desenvolvimento.",
    to: "/site/servicos",
  },
  {
    icon: Sparkles,
    title: "Inteligência Artificial",
    text: "Soluções de IA aplicadas à operação, da automação inteligente à análise de dados.",
    to: "/site/servicos",
  },
] as const;

export function SiteServices() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(max-width: 1023px)").matches) {
      setRevealed(SERVICES.length);
      return;
    }
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        const p = Math.min(1, Math.max(0, -rect.top / total));
        setRevealed(Math.min(SERVICES.length, Math.ceil(p * (SERVICES.length + 0.6))));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section aria-labelledby="site-servicos" className="relative z-10 bg-white">
      <div ref={wrapRef} className="lg:h-[320vh]">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-0">
            <h2
              id="site-servicos"
              className="font-chillax max-w-[20ch] text-[1.7rem] font-bold leading-tight tracking-tight text-[var(--site-ink)] sm:text-[2.1rem]"
            >
              Soluções completas para toda a sua operação de TI
            </h2>
            <p className="font-inter mt-4 max-w-[62ch] text-[15px] leading-relaxed text-[var(--site-muted)]">
              Da porta de entrada do usuário ao core da infraestrutura, cobrimos cada camada da sua
              tecnologia.
            </p>

            <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                const on = i < revealed;
                return (
                  <Link
                    key={s.title}
                    to={s.to}
                    className="group flex w-[78vw] shrink-0 snap-start flex-col border border-[var(--site-line)] p-6 transition-[transform,opacity,border-color] duration-500 ease-out hover:border-[var(--site-blue)] sm:w-[42vw] lg:w-auto"
                    style={{
                      opacity: on ? 1 : 0,
                      transform: on ? "translateX(0)" : "translateX(48px)",
                    }}
                  >
                    <Icon
                      className="h-7 w-7 stroke-[1.25]"
                      style={{ color: "var(--site-blue)" }}
                      aria-hidden="true"
                    />
                    <h3 className="font-chillax mt-6 text-[17px] font-semibold leading-snug text-[var(--site-ink)]">
                      {s.title}
                    </h3>
                    <p className="font-inter mt-3 flex-1 text-[13.5px] leading-relaxed text-[var(--site-muted)]">
                      {s.text}
                    </p>
                    <span className="font-inter mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--site-blue)]">
                      Saiba mais
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
