import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Compass, FlaskConical, Rocket, Plug, Layers } from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/ia/hero.jpg";
import overview from "@/assets/ia/overview.jpg";

export const Route = createFileRoute("/_site/servicos/inteligencia-artificial")({
  head: () =>
    pageHead({
      title: "Inteligência Artificial para empresas | Allied IT",
      description:
        "Consultoria, POC, MVP, integrações e soluções completas de IA que aumentam a produtividade e geram resultado real no negócio.",
      path: "/servicos/inteligencia-artificial",
    }),
  component: IAPage,
});

const SMALL = [
  { icon: Compass, title: "Consultoria", text: "Mapeamento e recomendação de oportunidades de uso de IA, prontas ou sob medida para o seu negócio." },
  { icon: FlaskConical, title: "POC (Prova de Conceito)", text: "Implementação de provas de conceito com escopo reduzido para validar a solução antes de um investimento maior." },
  { icon: Rocket, title: "MVP", text: "Construção de um MVP com projeto fechado ou squad dedicado exclusivamente ao seu produto." },
  { icon: Plug, title: "Integrações", text: "Middlewares e integração entre sistemas legados e soluções de IA, sem precisar substituir o que já funciona." },
];

const STEPS = [
  { title: "Objetivos", text: "Entendimento de metas, prazos e contexto do negócio." },
  { title: "Assessment", text: "Análise de processos, sistemas e requisitos técnicos envolvidos." },
  { title: "Funcionalidades", text: "Mapeamento funcional e definição da arquitetura da solução." },
  { title: "Priorização", text: "Definição de sprints e entregáveis junto com o time." },
  { title: "Squad", text: "Alocação de time multidisciplinar dedicado ao projeto." },
  { title: "Sustentação", text: "Manutenção e suporte contínuo após a entrega." },
];

const FAQ = [
  { q: "Preciso já ter uma ideia definida de onde usar IA?", a: "Não. A etapa de consultoria existe justamente para mapear onde a IA gera mais valor para o seu negócio." },
  { q: "Vocês fazem só o protótipo ou entregam a solução completa?", a: "Os dois. Trabalhamos desde uma prova de conceito reduzida até a construção de uma solução proprietária completa, dependendo da necessidade." },
  { q: "A IA substitui os sistemas que já uso hoje?", a: "Não necessariamente. Muitas vezes a solução é integrada ao que já existe, via middleware, sem precisar trocar sistemas legados." },
  { q: "Como funciona a alocação de squad?", a: "Montamos um time multidisciplinar dedicado ao projeto, dimensionado conforme a complexidade e o prazo definidos na etapa de priorização." },
];

const btnSolid =
  "font-inter inline-flex h-12 items-center justify-center whitespace-nowrap bg-[var(--site-yellow)] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1418] transition-colors hover:bg-white";
const eyebrow = "font-inter text-[11px] font-semibold uppercase tracking-[0.22em]";
const h2 = "font-chillax text-[1.8rem] font-bold leading-tight tracking-tight sm:text-[2.4rem]";

function IAPage() {
  return (
    <>
      <section className="relative -mt-[72px] flex min-h-[80vh] items-center overflow-hidden bg-[var(--site-ink)] pt-[72px] text-white">
        <img src={hero} alt="" aria-hidden width={1920} height={1088} fetchPriority="high" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <span className={`${eyebrow} text-[var(--site-yellow)]`}>Serviços · IA aplicada</span>
          <h1 className="font-chillax mt-5 text-5xl font-bold tracking-tight sm:text-7xl">Inteligência Artificial</h1>
          <p className="font-inter mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
            Construímos soluções de IA que aumentam a produtividade dos times, melhoram a experiência dos usuários e geram resultado real no negócio.
          </p>
          <Link to="/contato" className={`${btnSolid} mt-10`}>Falar sobre IA para o meu negócio</Link>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#08131A] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] lg:grid-cols-2">
              <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <span aria-hidden className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
                <div className="relative">
                  <span className={`${eyebrow} text-[var(--site-yellow)]`}>Visão geral</span>
                  <h2 className="font-chillax mt-3 text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]">Transforme rotinas repetitivas em processos de alta escala</h2>
                  <p className="font-inter mt-5 max-w-[48ch] text-pretty text-[15px] leading-relaxed text-white/70">
                    Nossas equipes de dados, engenharia e produto trabalham lado a lado com o seu time de negócio, marketing ou operações para identificar onde a IA gera mais impacto e construir a solução certa para cada cenário.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-[480px]">
                <img src={overview} alt="Equipe analisando painéis de inteligência artificial" width={1200} height={1008} loading="lazy" className="absolute inset-0 size-full object-cover" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#08131A] via-[#08131A]/30 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#08131A]/30 lg:to-[#08131A]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={`${eyebrow} text-[var(--site-blue)]`}>O que entregamos</span>
            <h2 className={`${h2} mt-3`}>Soluções em IA</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-4 md:grid-rows-2">
            <div className="relative overflow-hidden rounded-3xl bg-[#046E8B] p-8 text-white sm:p-10 md:col-span-2 md:row-span-2">
              <span aria-hidden className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:40px_40px]" />
              <Layers aria-hidden className="absolute -bottom-10 -right-10 size-64 text-white/10" strokeWidth={1} />
              <div className="relative flex h-full flex-col">
                <span className={`${eyebrow} text-[var(--site-yellow)]`}>Destaque</span>
                <Layers className="mt-6 size-10 text-[var(--site-yellow)]" strokeWidth={1.4} />
                <h3 className="font-chillax mt-6 text-3xl font-bold sm:text-4xl">Solução completa</h3>
                <p className="font-inter mt-4 max-w-md text-[16px] leading-relaxed text-white/85">
                  Arquitetura, planejamento e construção de soluções proprietárias de ponta a ponta, feitas sob medida para a operação da sua empresa.
                </p>
                <Link to="/contato" className={`${btnSolid} mt-10 w-fit`}>Quero uma solução completa</Link>
              </div>
            </div>
            {SMALL.map((s, i) => (
              <div key={s.title} className={`rounded-3xl p-7 ${i === 0 || i === 3 ? "bg-[#08131A] text-white" : "bg-[#EAF3F6] text-[var(--site-ink)]"}`}>
                <s.icon className={`size-7 ${i === 0 || i === 3 ? "text-[var(--site-yellow)]" : "text-[var(--site-blue)]"}`} strokeWidth={1.6} />
                <h3 className="font-chillax mt-5 text-lg font-semibold">{s.title}</h3>
                <p className={`font-inter mt-2 text-[14px] leading-relaxed ${i === 0 || i === 3 ? "text-white/70" : "text-[var(--site-muted)]"}`}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7F9] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="text-center">
            <span className={`${eyebrow} text-[var(--site-blue)]`}>Metodologia</span>
            <h2 className={`${h2} mt-3`}>Como atuamos</h2>
          </Reveal>
          <ol className="relative mt-14">
            <span aria-hidden className="absolute bottom-0 left-5 top-0 w-px bg-[var(--site-blue)]/30 md:left-1/2" />
            {STEPS.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.title} className="relative grid pb-12 pl-16 last:pb-0 md:grid-cols-2 md:gap-16 md:pl-0">
                  <span className="font-chillax absolute left-0 top-0 grid size-10 place-items-center rounded-full bg-[var(--site-blue)] text-sm font-bold text-white ring-8 ring-[#F4F7F9] md:left-1/2 md:-translate-x-1/2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={left ? "md:pr-4 md:text-right" : "md:col-start-2 md:pl-4"}>
                    <h3 className="font-chillax text-xl font-semibold">{s.title}</h3>
                    <p className="font-inter mt-2 text-[15px] leading-relaxed text-[var(--site-muted)]">{s.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
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

      <SiteCta />
      <SiteFooter />
    </>
  );
}
