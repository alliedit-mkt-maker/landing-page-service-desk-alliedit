import { Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Cpu, Headset, Server, ShieldCheck, Sparkles } from "lucide-react";

const STEPS = [
  {
    label: "Estudo do cenário",
    text: "Mapeamos ambiente, riscos e prioridades antes de propor qualquer solução.",
  },
  {
    label: "Implementação",
    text: "Execução com plano, cronograma e time dedicado, sem parar sua operação.",
  },
  {
    label: "Resultados",
    text: "Indicadores, SLA e evolução contínua com relatórios claros de performance.",
  },
] as const;

const SERVICES = [
  {
    icon: Headset,
    title: "Digital Workspace",
    text: "Suporte ao usuário, remoto e presencial, com SLA garantido e gestão centralizada.",
  },
  {
    icon: Cloud,
    title: "Smart Cloud Ops",
    text: "Gestão de nuvem com foco em FinOps, SecOps e bancos de dados escaláveis.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Shield 360°",
    text: "SOC e NOC 24x7, proteção de endpoints, firewall, LGPD e cultura de segurança.",
  },
  {
    icon: Server,
    title: "Infra Core",
    text: "Projetos de rede, cabeamento, data center e modernização de ambientes físicos.",
  },
  {
    icon: Cpu,
    title: "Product Engineering",
    text: "Ferramentas sob medida: automação, integração de sistemas e desenvolvimento.",
  },
  {
    icon: Sparkles,
    title: "Inteligência Artificial",
    text: "Soluções de IA aplicadas à operação, da automação inteligente à análise de dados.",
  },
] as const;


export function SiteServices() {
  return (
    <section aria-labelledby="site-servicos" className="relative z-10 bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <h2
          id="site-servicos"
          className="font-chillax max-w-[22ch] text-[2rem] font-bold leading-[1.1] tracking-tight text-[var(--site-ink)] sm:text-[2.8rem]"
        >
          Soluções completas para toda a sua operação de TI
        </h2>

        {/* Timeline de metodologia */}
        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-[var(--site-line)] pt-8 sm:grid-cols-3 sm:gap-10">
          {STEPS.map((s, i) => (
            <div key={s.label} className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-[41px] left-0 h-[7px] w-[7px] bg-[var(--site-blue)]"
              />
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-ink)]">
                {String(i + 1).padStart(2, "0")} — {s.label}
              </p>
              <p className="font-inter mt-3 max-w-[40ch] text-[13.5px] leading-relaxed text-[var(--site-muted)]">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* Cards das soluções */}
        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                to="/site/servicos"
                className="group relative flex h-full min-h-[210px] flex-col justify-between overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(160deg, #E9EDEF 0%, #9FB6BF 22%, #076F8C 58%, #0A1E27 88%, #05090C 100%)",
                }}
              >
                <span aria-hidden="true" className="site-noise" />
                <div className="relative">
                  <Icon className="h-5 w-5 stroke-[1.25] text-white" aria-hidden="true" />
                  <h3 className="font-chillax mt-4 text-[18px] font-semibold leading-snug text-white">
                    {s.title}
                  </h3>
                </div>

                <div className="relative mt-6 flex items-end justify-between gap-3">
                  <p className="font-inter text-[12.5px] leading-relaxed text-white/75">
                    {s.text}
                  </p>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--site-yellow)] transition-transform group-hover:translate-x-1" />
                </div>


              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
