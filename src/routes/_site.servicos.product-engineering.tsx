import { pageHead } from "@/lib/seo";
import { SiteCtaButton } from "@/components/site/SiteCtaButton";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScanSearch, Code2, Target, Gauge, BrainCircuit } from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/pe/hero.jpg.asset.json";
import overview from "@/assets/pe/overview.jpg.asset.json";

export const Route = createFileRoute("/_site/servicos/product-engineering")({
  head: () =>
    pageHead({ social: "Gargalo da operação virando sistema que funciona.",
      title: "Product Engineering: desenvolvimento sob medida | Allied IT",
      description: "Sistemas, aplicativos, dashboards e automações sob medida para tirar gargalos da sua operação.",
      path: "/servicos/product-engineering",
    }),
  component: ProductEngineeringPage,
});

const COMO = [
  { icon: ScanSearch, title: "Diagnóstico profundo do gargalo", text: "Mapeamos a fundo o problema antes de propor qualquer solução." },
  { icon: Code2, title: "Desenvolvimento personalizado", text: "Construção sob medida, sem pacote pronto que não encaixa na sua operação." },
  { icon: Target, title: "Implementação orientada a resultados", text: "Cada entrega é pensada para gerar impacto mensurável no negócio." },
  { icon: Gauge, title: "Ganho de eficiência, agilidade e controle", text: "O resultado final aparece na rotina: menos retrabalho, mais visibilidade e controle." },
];
const FAQ = [
  { q: "Vocês desenvolvem qualquer tipo de solução sob medida?", a: "Sim. Pode ser um sistema, aplicativo, dashboard, automação ou integração entre ferramentas que você já usa." },
  { q: "Como funciona o diagnóstico inicial?", a: "Mapeamos o processo atual, identificamos o gargalo real e só depois desenhamos a solução, evitando entregar algo que não resolve o problema de verdade." },
  { q: "A solução de IA substitui um sistema já existente?", a: "Não necessariamente. Muitas vezes a IA é integrada ao que você já usa, otimizando um processo específico dentro da operação atual." },
  { q: "Quanto tempo leva um projeto de desenvolvimento sob medida?", a: "Depende da complexidade do problema. Isso é definido junto com você logo após o diagnóstico inicial." },
];

const btnSolid =
  "font-inter inline-flex h-12 items-center justify-center whitespace-nowrap bg-[var(--site-yellow)] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1418] transition-colors hover:bg-white";
const btnOutline =
  "font-inter inline-flex h-11 items-center justify-center whitespace-nowrap border px-7 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors";
const eyebrow = "font-inter text-[11px] font-semibold uppercase tracking-[0.22em]";
const h2 = "font-chillax text-[1.8rem] font-bold leading-tight tracking-tight sm:text-[2.4rem]";

function ProductEngineeringPage() {
  return (
    <>
      <section className="relative -mt-[72px] flex min-h-[80vh] items-center overflow-hidden bg-[var(--site-ink)] pt-[72px] text-white">
        <img src={hero.url} alt="" aria-hidden fetchPriority="high" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <span className={`${eyebrow} text-[var(--site-yellow)]`}>Serviços · Desenvolvimento</span>
          <h1 className="font-chillax mt-5 text-5xl font-bold tracking-tight sm:text-7xl">Product Engineering</h1>
          <p className="font-inter mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
            Desenvolvimento sob medida para transformar gargalos em soluções digitais personalizadas.
          </p>
          <SiteCtaButton  className={`${btnSolid} mt-10`}>Falar sobre o meu projeto</SiteCtaButton>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#08131A] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-[480px]">
                <img src={overview.url} alt="Desenvolvedor programando em notebook" loading="lazy" className="absolute inset-0 size-full object-cover" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#08131A] via-[#08131A]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#08131A]/30 lg:to-[#08131A]" />
              </div>
              <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <span aria-hidden className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
                <div className="relative">
                  <span className={`${eyebrow} text-[var(--site-yellow)]`}>Visão geral</span>
                  <h2 className="font-chillax mt-3 text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]">Transformamos gargalos em soluções personalizadas</h2>
                  <p className="font-inter mt-5 max-w-[48ch] text-pretty text-[15px] leading-relaxed text-white/70">
                    Na sua operação existe uma dor, um desafio ou um processo ineficiente? Nós mapeamos esse cenário, entendemos a fundo o problema e desenvolvemos uma solução digital sob medida, seja um sistema, aplicativo, dashboard, automação ou integração, totalmente alinhada à realidade e necessidade da sua empresa.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F4F7F9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={`${eyebrow} text-[var(--site-blue)]`}>Método</span>
            <h2 className={`${h2} mt-3`}>Como funciona</h2>
          </Reveal>
          <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
            {COMO.map((c, i) => (
              <li key={c.title} className="relative pl-16 md:pl-0">
                {i < COMO.length - 1 && (
                  <>
                    <span aria-hidden className="absolute left-[23px] top-12 h-[calc(100%+2.5rem-3rem)] w-px bg-[var(--site-blue)]/30 md:hidden" />
                    <span aria-hidden className="absolute left-[60px] right-[-1.5rem] top-6 hidden h-px bg-[var(--site-blue)]/30 md:block" />
                    <span aria-hidden className="absolute right-[-1.5rem] top-[19px] hidden size-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-[var(--site-blue)]/50 md:block" />
                  </>
                )}
                <span className="absolute left-0 top-0 grid size-12 place-items-center rounded-full bg-[var(--site-blue)] text-white md:relative">
                  <c.icon className="size-5" strokeWidth={1.7} />
                </span>
                <span className="font-inter mt-0 block text-[11px] font-semibold tracking-[0.2em] text-[var(--site-blue)] md:mt-5">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-chillax mt-1.5 text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="font-inter mt-2 text-[14px] leading-relaxed text-[var(--site-muted)]">{c.text}</p>
              </li>
            ))}
          </ol>
          <SiteCtaButton  className={`${btnOutline} mt-10 border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-white`}>Solicitar diagnóstico</SiteCtaButton>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#046E8B] py-24 text-white sm:py-28">
        <div aria-hidden className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="mx-auto grid size-20 place-items-center rounded-full border border-white/30 bg-white/10">
              <BrainCircuit className="size-10 text-[var(--site-yellow)]" strokeWidth={1.3} />
            </span>
            <h2 className={`${h2} mt-8`}>IA integrada ao seu negócio</h2>
            <p className="font-inter mx-auto mt-5 max-w-[58ch] text-[16px] leading-relaxed text-white/80">
              Desenvolvemos e implementamos soluções personalizadas de Inteligência Artificial integradas ao seu negócio, com foco no aumento da eficiência operacional e da competitividade das organizações.
            </p>
            <SiteCtaButton  className={`${btnSolid} mt-10`}>Falar sobre IA na minha operação</SiteCtaButton>
          </Reveal>
        </div>
      </section>

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
