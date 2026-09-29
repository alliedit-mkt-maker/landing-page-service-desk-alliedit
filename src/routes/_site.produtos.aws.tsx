import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Compass,
  PiggyBank,
  BadgeCheck,
  TrendingUp,
  Users,
  Workflow,
  Check,
  X,
} from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/aws/hero.jpg.asset.json";
import oqueE from "@/assets/aws/oque-e.png.asset.json";

export const Route = createFileRoute("/_site/produtos/aws")({
  head: () => {
    const h = pageHead({
      title: "AWS para empresas: migração e gestão de nuvem | Allied IT",
      description:
        "Migração, implantação e monitoramento contínuo de ambientes AWS com a Allied IT, seguindo as melhores práticas de mercado.",
      path: "/produtos/aws",
    });
    return { ...h, meta: [...h.meta, { name: "robots", content: "index, follow" }] };
  },
  component: AwsPage,
});

const BEFORE = [
  "Alto investimento inicial em hardware",
  "Custo fixo de manutenção, mesmo com pouco uso",
  "Capacidade de armazenamento limitada",
  "Escala lenta, depende de comprar mais equipamento",
];
const AFTER = [
  "Sem investimento inicial em hardware",
  "Você paga só pelo que usa",
  "Armazenamento praticamente ilimitado",
  "Escala sob demanda, em minutos",
];
const INCLUDED = [
  "Redução de custos com hardware",
  "Escalabilidade sob demanda",
  "Armazenamento praticamente ilimitado",
  "Monitoramento contínuo",
  "Segurança gerenciada",
];
const STEPS = [
  { title: "Diagnóstico", text: "Avaliamos sua infraestrutura atual e os benefícios reais da migração pro seu caso específico." },
  { title: "Migração e implantação", text: "Executamos a migração seguindo as melhores práticas de mercado pra cada projeto AWS." },
  { title: "Monitoramento contínuo", text: "Acompanhamos o ambiente depois de no ar, otimizando custo e performance." },
];
const VALUE = [
  { icon: Compass, title: "Visão consultiva", text: "Assumimos o papel principal na implantação, preservando as melhores práticas em cada projeto." },
  { icon: PiggyBank, title: "Redução de custos", text: "Menos investimento em hardware e infraestrutura física: sua empresa paga só pelo que realmente usa." },
  { icon: BadgeCheck, title: "Melhores práticas AWS", text: "Seguimos os padrões recomendados pela própria Amazon em cada projeto." },
  { icon: TrendingUp, title: "Escala sob demanda", text: "Do ambiente pequeno ao de grandes empresas, com armazenamento praticamente ilimitado." },
  { icon: Users, title: "Consultoria especializada", text: "Assumimos o papel principal na implantação, seguindo as melhores práticas de mercado em cada projeto AWS." },
  { icon: Workflow, title: "Da migração ao dia a dia", text: "Ajudamos a avaliar os benefícios da AWS e executamos algumas ou todas as etapas, dependendo da necessidade da sua empresa." },
];
const FAQ = [
  { q: "Minha empresa é pequena, vale a pena migrar pra AWS?", a: "Sim, a AWS escala junto com o negócio, então você paga proporcional ao que usa." },
  { q: "Quanto tempo leva uma migração para a nuvem?", a: "Varia conforme a complexidade do ambiente atual. Fazemos um diagnóstico antes pra dar um prazo realista." },
  { q: "Preciso migrar tudo de uma vez para a AWS?", a: "Não, dá pra migrar algumas ou todas as etapas, dependendo da necessidade da sua empresa." },
];

const btnSolid =
  "font-inter inline-flex h-12 items-center justify-center whitespace-nowrap bg-[var(--site-yellow)] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--site-ink)] transition hover:brightness-105";
const eyebrow = "font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-blue)]";
const h2 = "font-chillax text-[1.8rem] font-bold leading-tight tracking-tight sm:text-[2.4rem]";

function AwsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-[var(--site-ink)] text-white">
        <img
          src={hero.url}
          alt=""
          aria-hidden
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[65%_30%]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">
            Produtos · Cloud
          </span>
          <h1 className="font-chillax mt-5 text-5xl font-bold tracking-tight sm:text-6xl">AWS</h1>
          <p className="font-inter mt-6 max-w-xl text-[17px] leading-relaxed text-white/80">
            Gerenciamento de nuvem contínuo para garantir um ambiente cloud de alta performance.
          </p>
          <Link to="/contato" className={`${btnSolid} mt-10`}>Solicite um orçamento</Link>
        </div>
      </section>

      {/* O que é */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid overflow-hidden bg-[var(--site-ink)] text-white lg:grid-cols-2">
              <img src={oqueE.url} alt="Mão segurando uma nuvem com o logo da AWS" loading="lazy" className="h-full min-h-[280px] w-full object-cover" />
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <h2 className={h2}>O que é a AWS e quais vantagens oferece?</h2>
                <p className="font-inter mt-6 text-[15px] leading-relaxed text-white/75">
                  Amazon Web Services (AWS) é um serviço de computação em nuvem que oferece hospedagem para cargas de trabalho em larga escala, de ambientes pequenos a estruturas de grandes empresas, com armazenamento praticamente ilimitado, capaz de hospedar desde sites simples até sistemas complexos como ERPs. Isso permite reduzir custos com hardware e infraestrutura física, pagando apenas pelo que sua empresa realmente usa. A Allied IT assume o papel principal na implantação, seguindo as melhores práticas de mercado.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Antes x depois */}
      <section className="bg-[#F4F7F9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={eyebrow}>O antes e o depois</span>
            <h2 className={`${h2} mt-3`}>Infraestrutura própria x Nuvem AWS</h2>
            <p className="font-inter mt-4 text-[15px] text-[var(--site-muted)]">
              Por que tantas empresas estão trocando o servidor físico pela nuvem.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="border border-black/10 bg-white p-8">
              <h3 className="font-chillax text-xl font-semibold">Infraestrutura própria</h3>
              <ul className="mt-6 space-y-4">
                {BEFORE.map((b) => (
                  <li key={b} className="font-inter flex items-start gap-3 text-[15px] text-[var(--site-muted)]">
                    <X className="mt-0.5 size-5 shrink-0 text-red-500" strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--site-ink)] p-8 text-white">
              <h3 className="font-chillax text-xl font-semibold">Nuvem AWS</h3>
              <ul className="mt-6 space-y-4">
                {AFTER.map((a) => (
                  <li key={a} className="font-inter flex items-start gap-3 text-[15px] text-white/80">
                    <Check className="mt-0.5 size-5 shrink-0 text-[var(--site-yellow)]" strokeWidth={2.5} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O que vem incluso */}
      <section className="bg-[var(--site-ink)] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <h2 className={h2}>O que vem incluso</h2>
          </Reveal>
          <ul className="border-t border-white/15">
            {INCLUDED.map((item, i) => (
              <li key={item} className="font-inter flex items-center justify-between gap-6 border-b border-white/15 py-5 text-[16px]">
                <span className="flex items-center gap-5">
                  <span className="font-chillax w-8 text-[13px] font-semibold text-[var(--site-yellow)]">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </span>
                <Check className="size-5 shrink-0 text-[var(--site-yellow)]" strokeWidth={2.5} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={eyebrow}>Como funciona</span>
            <h2 className={`${h2} mt-3`}>Da avaliação ao monitoramento contínuo</h2>
            <p className="font-inter mt-4 text-[15px] text-[var(--site-muted)]">
              Um processo guiado, sem deixar sua equipe sozinha em nenhuma etapa.
            </p>
          </Reveal>
          <div className="relative mt-14 grid gap-10 md:grid-cols-3">
            <div aria-hidden className="absolute left-[16.66%] right-[16.66%] top-6 hidden h-[2px] bg-[var(--site-blue)]/25 md:block" />
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="relative text-center">
                  <span className="font-chillax relative mx-auto grid size-12 place-items-center rounded-full bg-[var(--site-blue)] text-lg font-bold text-white ring-8 ring-white">
                    {i + 1}
                  </span>
                  <h3 className="font-chillax mt-6 text-lg font-semibold">{s.title}</h3>
                  <p className="font-inter mx-auto mt-3 max-w-[34ch] text-[14px] leading-relaxed text-[var(--site-muted)]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-[#F4F7F9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={eyebrow}>Diferenciais</span>
            <h2 className={`${h2} mt-3`}>Por que contar com a Allied IT</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 90}>
                <div className="h-full border-t-2 border-[var(--site-blue)] bg-white p-7">
                  <span className="grid size-14 place-items-center rounded-full bg-[var(--site-blue)]/10">
                    <v.icon className="size-6 text-[var(--site-blue)]" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-chillax mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="font-inter mt-3 text-[14px] leading-relaxed text-[var(--site-muted)]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link to="/contato" className={`${btnSolid} mt-12`}>Solicite um orçamento</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className={h2}>Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-10 w-full border-t border-black/10">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="border-b border-black/10">
                <AccordionTrigger className="font-chillax py-5 text-left text-[16px] font-semibold hover:text-[var(--site-blue)] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-inter pb-6 text-[14px] leading-relaxed text-[var(--site-muted)]">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Chamada final */}
      <section className="bg-[var(--site-ink)] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className={h2}>Quer entender se a AWS faz sentido pra sua empresa?</h2>
          <p className="font-inter mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed text-white/70">
            A gente avalia sua infraestrutura atual e mostra onde a nuvem pode ajudar.
          </p>
          <Link to="/contato" className={`${btnSolid} mt-9`}>Solicite um orçamento</Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
