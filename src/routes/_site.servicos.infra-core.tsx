import { pageHead } from "@/lib/seo";
import { SiteCtaButton } from "@/components/site/SiteCtaButton";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Wifi, Radar, Cctv, Gem } from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/infra/hero.jpg.asset.json";
import rack from "@/assets/infra/rack.jpg.asset.json";
import team from "@/assets/infra/team.jpg.asset.json";

export const Route = createFileRoute("/_site/servicos/infra-core")({
  head: () =>
    pageHead({
      title: "Infra Core: redes, cabeamento estruturado e data center | Allied IT",
      description:
        "Infraestrutura de TI de ponta a ponta: redes Wi-Fi, heatmap, cabeamento estruturado, CFTV e data center, do projeto à certificação.",
      path: "/servicos/infra-core",
    }),
  component: InfraCorePage,
});

const REDES = [
  { icon: Wifi, title: "Modernização de rede Wi-Fi", text: "Modernização completa do sistema de infraestrutura e equipamentos de rede Wi-Fi." },
  { icon: Radar, title: "Mapeamento de Calor (Heatmap)", text: "Utilizamos mapeamento de calor para Wi-Fi a fim de otimizar a cobertura e a intensidade do sinal, garantindo conectividade robusta em todo o ambiente." },
];
const CABO = [
  { title: "Execução de projetos ponta a ponta", text: "Do projeto à execução, cuidamos de toda a implantação do cabeamento estruturado." },
  { title: "Visita diagnóstica no local", text: "Visita técnica para detalhar gargalos de infraestrutura de forma visual, antes de qualquer execução." },
];
const DC = [
  { icon: Cctv, title: "Monitoramento com CFTV", text: "Instalação e configuração completa de sistemas de CFTV com acesso remoto e monitoramento em tempo real." },
  { icon: Gem, title: "Equipamentos de alta qualidade", text: "Equipamentos modernos e de alta qualidade em toda a infraestrutura instalada." },
];
const SEGMENTOS = ["Hotéis", "Centros corporativos", "Varejo", "Operações de alta densidade"];
const FAQ = [
  { q: "Vocês fazem só o projeto ou também a execução?", a: "Fazemos o ciclo completo: projeto, execução e certificação da infraestrutura, com visita diagnóstica antes de começar." },
  { q: "O mapeamento de calor (heatmap) é feito em qualquer ambiente?", a: "Sim. É recomendado principalmente em ambientes grandes ou de alta densidade, onde a cobertura de Wi-Fi precisa ser otimizada com precisão." },
  { q: "Vocês atendem ambientes já em operação, sem parar o funcionamento?", a: "Sim. Planejamos a execução para minimizar impacto na operação, especialmente em hotéis, varejo e centros corporativos." },
  { q: "A equipe é certificada para trabalho em altura e rede elétrica?", a: "Sim. Nossos técnicos seguem as NRs referentes a trabalho em altura e energia em todas as execuções." },
];

const btnSolid =
  "font-inter inline-flex h-12 items-center justify-center whitespace-nowrap bg-[var(--site-yellow)] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1418] transition-colors hover:bg-white";
const btnOutline =
  "font-inter inline-flex h-11 items-center justify-center whitespace-nowrap border px-7 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors";
const eyebrow = "font-inter text-[11px] font-semibold uppercase tracking-[0.22em]";
const h2 = "font-chillax text-[1.8rem] font-bold leading-tight tracking-tight sm:text-[2.4rem]";

function InfraCorePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[72px] flex min-h-[80vh] items-center overflow-hidden bg-[var(--site-ink)] pt-[72px] text-white">
        <img src={hero.url} alt="" aria-hidden fetchPriority="high" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <span className={`${eyebrow} text-[var(--site-yellow)]`}>Serviços · Infraestrutura</span>
          <h1 className="font-chillax mt-5 text-5xl font-bold tracking-tight sm:text-7xl">Infra Core</h1>
          <p className="font-inter mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
            Infraestrutura de TI que sustenta a operação: redes, cabeamento estruturado e data center, projetados e executados de ponta a ponta.
          </p>
          <SiteCtaButton  className={`${btnSolid} mt-10`}>Solicitar diagnóstico técnico</SiteCtaButton>
        </div>
      </section>

      {/* Visão geral */}
      <section className="bg-[#F4F8F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#08131A] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-[480px]">
                <img src={rack.url} alt="Racks de servidores em data center" loading="lazy" className="absolute inset-0 size-full object-cover" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#08131A] via-[#08131A]/55 to-[#08131A]/20 lg:bg-gradient-to-r lg:from-[#08131A]/30 lg:via-[#08131A]/55 lg:to-[#08131A]" />
              </div>
              <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <span aria-hidden className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
                <div className="relative">
                  <h2 className="font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]">Visão geral</h2>
                  <p className="font-inter mt-5 max-w-[46ch] text-pretty text-[15px] leading-relaxed text-white/70">
                    Soluções completas em infraestrutura de TI para garantir conectividade, desempenho e escalabilidade a soluções corporativas. Nossos serviços abrangem desde o projeto até a execução e certificação de redes estruturadas, elétricas e ambientes de TI.
                  </p>
                  <div className="mt-10 grid w-full gap-6 sm:grid-cols-3">
                    {["Redes", "Cabeamento Estruturado", "Data Center"].map((p) => (
                      <div key={p} className="border-t border-white/15 pt-5">
                        <p className="font-chillax text-base font-semibold text-white">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Redes: barras empilhadas */}
      <section className="bg-[#F4F7F9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={`${eyebrow} text-[var(--site-blue)]`}>Pilar 01</span>
            <h2 className={`${h2} mt-3`}>Redes</h2>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-black/10">
            {REDES.map((r, i) => (
              <div key={r.title} className={`flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:gap-8 sm:p-9 ${i === 0 ? "bg-white" : "border-t border-black/10 bg-[#046E8B]/[0.05]"}`}>
                <span className="grid size-16 shrink-0 place-items-center rounded-full bg-[var(--site-blue)] text-white">
                  <r.icon className="size-7" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-chillax text-xl font-semibold">{r.title}</h3>
                  <p className="font-inter mt-2 max-w-3xl text-[15px] leading-relaxed text-[var(--site-muted)]">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
          <SiteCtaButton  className={`${btnOutline} mt-10 border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-white`}>Falar sobre minha rede</SiteCtaButton>
        </div>
      </section>

      {/* Cabeamento: ficha técnica */}
      <section className="relative overflow-hidden bg-[#046E8B] py-20 text-white sm:py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={`${eyebrow} text-[var(--site-yellow)]`}>Pilar 02</span>
            <h2 className={`${h2} mt-3`}>Cabeamento Estruturado</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-white/20 md:grid-cols-2">
            {CABO.map((c, i) => (
              <div key={c.title} className="bg-[#046E8B] p-8 sm:p-10">
                <div className="flex items-baseline justify-between border-b border-white/20 pb-4">
                  <span className="font-chillax text-6xl font-extralight leading-none text-white/90 sm:text-7xl">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-white/50">Ficha técnica</span>
                </div>
                <h3 className="font-chillax mt-6 text-xl font-semibold">{c.title}</h3>
                <p className="font-inter mt-3 text-[15px] leading-relaxed text-white/75">{c.text}</p>
              </div>
            ))}
          </div>
          <SiteCtaButton  className={`${btnSolid} mt-12`}>Agendar visita diagnóstica</SiteCtaButton>
        </div>
      </section>

      {/* Data Center: cards outline */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#046E8B_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <span className={`${eyebrow} text-[var(--site-blue)]`}>Pilar 03</span>
            <h2 className={`${h2} mt-3`}>Data Center & Segurança Física</h2>
            <img src={rack.url} alt="Racks de servidores em data center" loading="lazy" className="mt-8 aspect-[16/10] w-full rounded-2xl object-cover" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {DC.map((d) => (
              <div key={d.title} className="rounded-2xl border-2 border-[var(--site-blue)]/25 bg-white/70 p-8 backdrop-blur-sm">
                <d.icon className="size-9 text-[var(--site-blue)]" strokeWidth={1.4} />
                <h3 className="font-chillax mt-6 text-lg font-semibold">{d.title}</h3>
                <p className="font-inter mt-3 text-[14px] leading-relaxed text-[var(--site-muted)]">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-[var(--site-ink)] py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-chillax max-w-xl text-[1.6rem] font-bold leading-tight sm:text-[2rem]">Expertise comprovada em ambientes complexos</h2>
          <div className="flex flex-wrap gap-3">
            {SEGMENTOS.map((s) => (
              <span key={s} className="font-inter rounded-full bg-[var(--site-yellow)] px-5 py-2.5 text-[13px] font-semibold text-[var(--site-ink)]">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <img src={team.url} alt="Técnico da Allied IT em data center" loading="lazy" className="aspect-[16/10] w-full rounded-2xl object-cover" />
          <div>
            <Reveal>
              <span className={`${eyebrow} text-[var(--site-blue)]`}>Equipe</span>
              <h2 className={`${h2} mt-3`}>Equipe especializada e certificada em tecnologias de ponta</h2>
            </Reveal>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <p className="font-inter border-l-2 border-[var(--site-blue)] pl-5 text-[15px] leading-relaxed text-[var(--site-muted)]">Suporte de técnicos de segurança do trabalho em todas as execuções.</p>
              <p className="font-inter border-l-2 border-[var(--site-blue)] pl-5 text-[15px] leading-relaxed text-[var(--site-muted)]">Atuação alinhada às NRs referentes a trabalho em altura e energia.</p>
            </div>
            <SiteCtaButton  className={`${btnOutline} mt-10 border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-white`}>Falar com um especialista</SiteCtaButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-[#0B1B23] to-[#08131A] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className={`${h2} text-white`}>Perguntas frequentes</h2>
          <Reveal variant="fade-up" delay={120} className="mt-10">
            <Accordion type="single" collapsible className="w-full border-t border-white/12">
              {FAQ.map((item, i) => (
                <AccordionItem key={i} value={`q-${i}`} className="border-b border-white/12">
                  <AccordionTrigger className="font-chillax py-5 text-left text-[16px] font-semibold text-white hover:text-[var(--site-yellow)] hover:no-underline sm:py-6 sm:text-[17px]">{item.q}</AccordionTrigger>
                  <AccordionContent className="font-inter pb-6 text-[14px] leading-relaxed text-white/60">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <SiteCta modal />
      <SiteFooter />
    </>
  );
}
