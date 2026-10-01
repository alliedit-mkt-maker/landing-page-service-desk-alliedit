import { Suspense, lazy, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  MapPin,
  Wrench,
  Users,
  Gauge,
  XCircle,
  Quote,
} from "lucide-react";

import { Reveal, useInViewOnce } from "@/components/field-service/FsReveal";

const ContactModal = lazy(() =>
  import("@/components/field-service/FsContactModal").then((m) => ({ default: m.ContactModal })),
);
import { captureUtms, pushDataLayer } from "@/components/field-service/fs-tracking";
import alliedLogo from "@/assets/field-service/allied-it-branco.png.asset.json";
import lojasMelLogo from "@/assets/field-service/lojas-mel.png.asset.json";

// Import all 33 client logos
import l01 from "@/assets/field-service/clients/logo-01.webp.asset.json";
import l02 from "@/assets/field-service/clients/logo-02.webp.asset.json";
import l03 from "@/assets/field-service/clients/logo-03.webp.asset.json";
import l04 from "@/assets/field-service/clients/logo-04.webp.asset.json";
import l05 from "@/assets/field-service/clients/logo-05.webp.asset.json";
import l06 from "@/assets/field-service/clients/logo-06.webp.asset.json";
import l07 from "@/assets/field-service/clients/logo-07.webp.asset.json";
import l08 from "@/assets/field-service/clients/logo-08.webp.asset.json";
import l09 from "@/assets/field-service/clients/logo-09.webp.asset.json";
import l10 from "@/assets/field-service/clients/logo-10.webp.asset.json";
import l11 from "@/assets/field-service/clients/logo-11.webp.asset.json";
import l12 from "@/assets/field-service/clients/logo-12.webp.asset.json";
import l13 from "@/assets/field-service/clients/logo-13.webp.asset.json";
import l14 from "@/assets/field-service/clients/logo-14.webp.asset.json";
import l15 from "@/assets/field-service/clients/logo-15.webp.asset.json";
import l17 from "@/assets/field-service/clients/logo-17.webp.asset.json";
import l18 from "@/assets/field-service/clients/logo-18.webp.asset.json";
import l19 from "@/assets/field-service/clients/logo-19.webp.asset.json";
import l20 from "@/assets/field-service/clients/logo-20.webp.asset.json";
import l21 from "@/assets/field-service/clients/logo-21.webp.asset.json";
import l22 from "@/assets/field-service/clients/logo-22.webp.asset.json";
import l23 from "@/assets/field-service/clients/logo-23.webp.asset.json";
import l24 from "@/assets/field-service/clients/logo-24.webp.asset.json";
import l25 from "@/assets/field-service/clients/logo-25.webp.asset.json";
import l26 from "@/assets/field-service/clients/logo-26.webp.asset.json";
import l27 from "@/assets/field-service/clients/logo-27.webp.asset.json";
import l28 from "@/assets/field-service/clients/logo-28.webp.asset.json";
import l29 from "@/assets/field-service/clients/logo-29.webp.asset.json";
import l30 from "@/assets/field-service/clients/logo-30.webp.asset.json";
import l31 from "@/assets/field-service/clients/logo-31.webp.asset.json";
import l32 from "@/assets/field-service/clients/logo-32.webp.asset.json";
import l33 from "@/assets/field-service/clients/logo-33.webp.asset.json";

const CLIENT_LOGOS = [
  l01, l02, l03, l04, l05, l06, l07, l08, l09, l10, l11,
  l12, l13, l14, l15, l17, l18, l19, l20, l21, l22,
  l23, l24, l25, l26, l27, l28, l29, l30, l31, l32, l33,
];

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand text-brand-foreground">
      <div className="mx-auto flex h-[3.85rem] max-w-7xl items-center justify-center px-6">
        <a href="#top" aria-label="AlliedIT" className="flex items-center">
          <img src={alliedLogo.url} alt="AlliedIT" className="h-[2.625rem] w-auto" />
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero({ onCTA }: { onCTA: () => void }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-3.85rem)] items-center justify-center overflow-hidden bg-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">
          Operação terceirizada de Field Service
        </p>
        <h1 className="max-w-4xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-brand-deep md:text-6xl">
          Manutenção e suporte de TI presencial onde você estiver
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70">
          Quem opera 5, 20 ou 100 endereços não resolve TI com técnico avulso. A AlliedIT coloca o técnico certo, no lugar certo, com SLA medido por unidade.
        </p>
        <ul className="mt-10 grid max-w-3xl gap-3 text-left text-base text-brand-deep sm:grid-cols-1">
          {[
            "Técnicos posicionados por região, residentes ou volantes conforme o volume de cada unidade",
            "Equipes que conhecem o seu setor: varejo, hotelaria, saúde, farma, logística",
            "Dashboard em tempo real: quem fez o quê, quando e em qual unidade",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-accent-amber" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onCTA}
            className="btn-shine inline-flex items-center gap-2 bg-brand px-7 py-4 text-sm font-semibold uppercase tracking-wider text-brand-foreground transition hover:bg-brand-deep"
          >
            Falar com especialista
          </button>
          <a
            href="#dor"
            className="inline-flex items-center gap-2 border border-brand/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-brand transition hover:border-brand hover:bg-brand hover:text-brand-foreground"
          >
            Ver como funciona
          </a>
        </div>
      </div>

    </section>
  );
}


/* ---------- Clients (marquee) ---------- */
function Clients() {
  // Logos are only requested once the strip approaches the viewport,
  // keeping them out of the initial page load.
  const { ref, inView } = useInViewOnce<HTMLDivElement>("200px");
  const loop = inView ? [...CLIENT_LOGOS, ...CLIENT_LOGOS] : [];
  return (
    <section className="border-y border-foreground/10 bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.25em] text-foreground/50">
            Alguns dos nossos clientes
          </p>
        </Reveal>
      </div>
      <div ref={ref} className="relative min-h-16">
        <div className="marquee-track flex gap-16 w-max">
          {loop.map((logo, i) => (
            <div key={i} className="flex items-center justify-center h-16 w-32 flex-shrink-0">
              <img
                src={logo.url}
                alt=""
                loading="lazy"
                decoding="async"
                className="max-h-12 max-w-full object-contain grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pain Scenarios with selector ---------- */
export type SelectedPath = "interno" | "fornecedor" | null;

function PainScenarios({
  selected,
  onSelect,
}: {
  selected: SelectedPath;
  onSelect: (key: Exclude<SelectedPath, null>) => void;
}) {
  const scenarios = [
    {
      key: "interno" as const,
      label: "TENHO SUPORTE INTERNO",
      cards: [
        { n: "01", title: "Deslocamento caro", text: "Técnico viajando é dinheiro parado. Deslocamento, diária e hora improdutiva pra atender uma loja a 300 km." },
        { n: "02", title: "Rollout que trava", text: "Cada unidade nova depende de TI no local antes da inauguração. Seu time não tem braço pra cobrir todos os endereços." },
        { n: "03", title: "Venda parada", text: "PDV fora do ar, rede caída, fila crescendo. E o técnico mais próximo está a horas dali." },
        { n: "04", title: "Sênior preso em campo", text: "Quem deveria estar em projeto está trocando peça e apagando incêndio em loja." },
      ],
    },
    {
      key: "fornecedor" as const,
      label: "TENHO UM FORNECEDOR",
      cards: [
        { n: "01", title: "SLA que não cumpre", text: "A matriz é bem atendida, a loja do interior espera 5 dias. Chamado aberto, resposta automática, sem ação." },
        { n: "02", title: "Cobertura de mentira", text: "O fornecedor diz que atende o Brasil, mas terceiriza o técnico e você não sabe quem entra na sua loja." },
        { n: "03", title: "Sem rastreabilidade", text: "Chamado fechado sem evidência. Causa raiz nunca tratada. Mesmo problema se repetindo." },
        { n: "04", title: "Relacionamento desgastado", text: "Reuniões viraram cobrança. Você gerencia o fornecedor em vez do seu negócio." },
      ],
    },
  ];
  const active = scenarios.find((s) => s.key === selected) ?? scenarios[0];

  return (
    <section id="dor" className="bg-[#fafafa] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-black tracking-tight text-brand-deep md:text-5xl">
              Como funciona o seu suporte hoje?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/70">
              Escolha o seu cenário pra ver o que costuma travar a operação.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mb-14 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            {scenarios.map((s) => {
              const isActive = active?.key === s.key;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => onSelect(s.key)}
                  className={`btn-shine flex-1 px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider transition ${
                    isActive
                      ? "border border-brand bg-brand text-brand-foreground"
                      : "border border-foreground/20 bg-white text-brand-deep hover:border-brand hover:text-brand"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-foreground/45">
          Você pode estar reconhecendo alguns destes sinais.
        </p>
        <div
          key={active.key}
          className="fade-up grid gap-px bg-foreground/15 sm:grid-cols-2 lg:grid-cols-4"
        >
          {active.cards.map((c) => (
            <div key={c.n} className="card-hover flex h-full flex-col gap-4 bg-white p-8">
              <div className="text-xs font-bold tracking-wider text-accent-amber">{c.n}</div>
              <h3 className="text-lg font-bold leading-snug text-brand-deep">{c.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pillars ---------- */
function Pillars({ onCTA, selected }: { onCTA: () => void; selected: SelectedPath }) {
  const defaultPillars = [
    {
      n: "01",
      title: "Cobertura geográfica real",
      text: "Técnicos posicionados por região, sem dependência de deslocamento longo. SLA medido por unidade, não pela média da conta.",
    },
    {
      n: "02",
      title: "Equipes especializadas por setor",
      text: "Hotelaria, saúde, varejo, farma, logística. O técnico que entra na sua loja conhece PDV; o que entra no seu hotel conhece a operação de recepção.",
    },
    {
      n: "03",
      title: "Rastreabilidade total",
      text: "Dashboard em tempo real com chamado, técnico, evidência e resultado por unidade.",
    },
    {
      n: "04",
      title: "Custo proporcional ao uso",
      text: "Paga pelo que usa. Escala no pico, enxuga na calmaria, sem técnico ocioso na folha.",
    },
  ];

  const internoPillars = [
    {
      n: "01",
      title: "Cobertura onde seu time não cobre",
      text: "Técnicos posicionados por região atendem as unidades distantes. Seu time interno foca nas operações críticas, sem deslocamento caro.",
    },
    {
      n: "02",
      title: "Rollout sem depender de headcount",
      text: "Novas unidades entram no ar com TI pronta. A AlliedIT absorve o pico de expansão sem você precisar contratar.",
    },
    {
      n: "03",
      title: "Sênior de volta ao estratégico",
      text: "Quem deveria estar em projeto para de apagar incêndio em loja. O campo fica com a gente.",
    },
    {
      n: "04",
      title: "Custo proporcional ao volume",
      text: "Paga pelo que usa. Sem técnico ocioso na folha nos meses de baixo movimento.",
    },
  ];

  const variant =
    selected === "interno"
      ? {
          key: "interno",
          eyebrow: "Pra quem tem equipe interna",
          headline: "O que muda quando você para de depender só do seu time interno",
          sub: "Cobertura onde seu time não chega, custo só quando precisar e seu sênior de volta ao que importa.",
          pillars: internoPillars,
        }
      : selected === "fornecedor"
        ? {
            key: "fornecedor",
            eyebrow: "Pra quem já tem um fornecedor",
            headline: "O que muda quando você troca seu fornecedor pela AlliedIT",
            sub: "SLA que chega na ponta, rastreabilidade real e cobertura sem pingue-pongue de responsabilidade.",
            pillars: defaultPillars,
          }
        : {
            key: "default",
            eyebrow: null as string | null,
            headline: "O que muda quando o Field Service é da AlliedIT",
            sub: "Quatro coisas que mudam de patamar quando a operação é nossa.",
            pillars: defaultPillars,
          };

  return (
    <section id="solucao" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div key={`head-${variant.key}`} className="fade-up mb-16 max-w-3xl">
          {variant.eyebrow && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">
              {variant.eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-black tracking-tight text-brand-deep md:text-5xl">
            {variant.headline}
          </h2>
          <p className="mt-5 text-lg text-foreground/70">{variant.sub}</p>
        </div>

        <div
          key={`grid-${variant.key}`}
          className="fade-up grid gap-px bg-foreground/15 md:grid-cols-2 lg:grid-cols-4"
        >
          {variant.pillars.map((p) => (
            <div key={p.n} className="card-hover relative flex h-full flex-col gap-4 bg-white p-8">
              <span className="absolute left-8 top-0 h-[3px] w-12 bg-accent-amber" />
              <div className="text-xs font-bold tracking-wider text-accent-amber">{p.n}</div>
              <h3 className="text-lg font-bold leading-snug text-brand-deep">{p.title}</h3>
              <div className="h-px w-10 bg-foreground/20" />
              <p className="text-sm leading-relaxed text-foreground/70">{p.text}</p>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <button
              onClick={onCTA}
              className="btn-shine bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-foreground transition hover:bg-brand-deep"
            >
              Falar com especialista
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Residente x Volante ---------- */
function ResidenteVolante({ onCTA }: { onCTA: () => void }) {
  const cards = [
    {
      tag: "Field residente",
      title: "Técnico fixo, todos os dias úteis, dentro da sua operação",
      text: "Pra matriz, centro de distribuição e unidade de alto volume. Quem opera ali já conhece a equipe, o parque e o ritmo.",
      icon: Building2,
    },
    {
      tag: "Field volante",
      title: "Técnicos girando entre as suas unidades conforme demanda e rota",
      text: "Pra rede de lojas, academias e hotéis onde o volume não justifica técnico fixo, mas a presença é crítica.",
      icon: MapPin,
    },
  ];
  return (
    <section id="modelos" className="bg-brand py-24 text-brand-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">
              Residente ou volante. Sua operação decide.
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Técnico fixo onde o volume exige, volante onde não precisa
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-px bg-white/15 md:grid-cols-2">
          {cards.map((c, idx) => (
            <Reveal key={c.tag} delay={idx * 0.08}>
              <div className="card-hover flex h-full flex-col gap-5 bg-brand p-10 transition hover:bg-brand-deep">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 text-white">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">
                  {c.tag}
                </p>
                <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">
                  {c.title}
                </h3>
                <p className="text-white/80">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 max-w-3xl text-lg text-white/85">
            Dá pra combinar os dois no mesmo contrato. E mudar o desenho quando a operação mudar.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex justify-center">
            <button
              onClick={onCTA}
              className="btn-shine inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-deep transition hover:bg-white/90"
            >
              Falar com especialista
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Escopo ---------- */
function Escopo() {
  const items = [
    {
      icon: Wrench,
      title: "Manutenção preventiva e corretiva",
      text: "Redes, servidores, computadores, PDVs e periféricos.",
    },
    {
      icon: Gauge,
      title: "Troca e instalação de equipamentos",
      text: "Hardware do cliente ou fornecido pela AlliedIT.",
    },
    {
      icon: Building2,
      title: "Rollout de novas unidades",
      text: "TI pronta antes da inauguração, do cabeamento ao PDV.",
    },
    {
      icon: MapPin,
      title: "Cabeamento estruturado e infra física",
      text: "Projeto, passagem de cabo, Wi-Fi corporativo, CFTV.",
    },
    {
      icon: Users,
      title: "Smart hands",
      text: "Braço presencial pro seu time remoto, NOC ou Service Desk, seja da AlliedIT ou não.",
    },
  ];
  return (
    <section id="servicos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-5xl text-left">
            <h2 className="whitespace-nowrap text-2xl font-black tracking-tight text-brand-deep sm:text-3xl md:text-4xl lg:text-5xl">
              O que nosso time faz em campo
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-px overflow-hidden bg-foreground/15 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="card-hover flex h-full flex-col gap-4 bg-white p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 text-brand">
                  <it.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="text-lg font-bold leading-snug text-brand-deep">{it.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}


/* ---------- Why Us ---------- */
function WhyUs({ onCTA }: { onCTA: () => void }) {
  const reasons = [
    { n: "01", title: "+7 anos operando Field em TI corporativa", text: "Operação madura, processos parametrizados, equipe que já viu de tudo." },
    { n: "02", title: "Especialização vertical real", text: "Hotelaria, saúde, varejo multi-unidade, farma, logística. Sabemos a particularidade de cada setor." },
    { n: "03", title: "Field integrado com NOC, SOC e Service Desk", text: "O monitoramento detecta, o remoto tria, o campo resolve. Um fornecedor só, sem pingue-pongue de responsabilidade." },
    { n: "04", title: "Crescemos com você", text: "Mais de 10 unidades de Louvre Hotels Group, 7 de Body Tech, multi-CNPJ na Mundial. Você expande, a gente acompanha." },
    { n: "05", title: "Foco no que não é seu core", text: "Você cuida do que faz a empresa única. A gente cuida da operação técnica." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-5xl">
            <h2 className="text-3xl font-black tracking-tight text-brand-deep md:text-4xl lg:text-5xl">
              Empresas que não podem<br /> errar escolhem a AlliedIT
            </h2>
            <p className="mt-5 text-lg text-foreground/70">
              Operação madura, especialização vertical e relação de longo prazo.
            </p>
          </div>
        </Reveal>
        <div className="grid border border-foreground/15 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.06}>
              <div className="card-hover flex h-full flex-col bg-white p-8 border-foreground/15 md:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r lg:[&:nth-child(3n)]:border-r-0 [&:not(:last-child)]:border-b lg:[&:nth-child(-n+3)]:border-b">
                <div className="mb-6 text-xs font-bold tracking-wider text-accent-amber">{r.n}</div>
                <h3 className="mb-3 text-lg font-bold leading-snug text-brand-deep">{r.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.36}>
            <div className="flex h-full flex-col justify-center bg-brand p-8 text-brand-foreground">
              <h3 className="mb-4 text-lg font-bold leading-snug">Falar com especialista</h3>
              <button
                onClick={onCTA}
                className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-amber hover:text-white transition"
              >
                → Iniciar conversa
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured Case ---------- */
function FeaturedCase({ onCTA }: { onCTA: () => void }) {
  return (
    <section id="cases" className="bg-[#f7fafb] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-brand-deep md:text-5xl leading-[1.1]">
              Centenas de unidades atendidas
            </h2>
            <p className="mt-5 text-lg text-foreground/70">
              O melhor termômetro não é o que falamos. É o tempo que cada cliente fica conosco.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid border border-foreground/15 bg-white md:grid-cols-2">
            <div
              className="relative flex flex-col justify-between p-10 text-brand-foreground min-h-[460px]"
              style={{
                background:
                  "linear-gradient(135deg, #024558 0%, #026e8c 60%, #1a8aaa 100%)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-amber text-center">
                Case em destaque
              </p>
              <div className="flex flex-1 items-center justify-center">
                <img
                  src={lojasMelLogo.url}
                  alt="Lojas Mel"
                  className="h-28 w-auto md:h-36 object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                  loading="lazy"

                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-wider text-white/80">
                <span>Varejo multi-unidade</span>
                <span className="text-accent-amber">·</span>
                <span>Microinformática e PDVs</span>
                <span className="text-accent-amber">·</span>
                <span>Field Services</span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-10">
              <h3 className="text-2xl font-bold text-brand-deep md:text-3xl leading-tight">
                Field Services Allied IT: eficiência e economia para mais de 55 lojas
              </h3>
              <p className="mt-5 text-base text-foreground/75 leading-relaxed">
                O grupo Lojas Mel enfrentava altos custos com equipe própria, falhas frequentes em microinformática e PDVs e necessidade de atendimento ágil e padronizado em múltiplas localidades. A Allied IT assumiu a operação completa de Field Services em todo o Brasil, com modelo flexível, escalável e foco nos sistemas críticos do varejo.
              </p>

              <hr className="my-8 border-foreground/15" />

              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: "-40%", l: "Custo com suporte em campo" },
                  { v: "+5%", l: "SLA acima da meta contratual" },
                  { v: "96%", l: "Satisfação dos usuários" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-black text-brand-deep">{s.v}</div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-foreground/55 leading-snug">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={onCTA}
                className="btn-shine mt-10 w-fit bg-brand px-7 py-4 text-xs font-bold uppercase tracking-wider text-brand-foreground transition hover:bg-brand-deep"
              >
                Quero ser o próximo case
              </button>
            </div>
          </div>
        </Reveal>

        {/* Testimonials */}
        <div className="mt-12 grid gap-px bg-foreground/10 md:grid-cols-3">
          {[
            {
              quote:
                "Notamos uma economia de mais de 30% e um aumento de 50% na qualidade percebida dos nossos serviços. Essas mudanças foram fundamentais para o crescimento e sucesso da nossa empresa.",
              role: "CIO",
              company: "Apsen Farmacêutica",
              photo: "/__l5e/assets-v1/fc612926-a379-44a2-90e9-fd2c30c22b0a/fs-APSEN-2.jpg",
              objectPosition: "50% 35%",
            },
            {
              quote:
                "A operação melhorou significativamente com constante aumento de chamados atendidos aos usuários e elevação no nível de satisfação. Tem sido uma empresa que não mede esforços em atender com agilidade e qualidade.",
              role: "Gerente de TI",
              company: "HortiFruti Natural da Terra",
              photo: "/__l5e/assets-v1/2285ee16-59b5-43b0-9d92-7624db8d896f/fs-HortiFruti-2.jpeg",
              objectPosition: "50% 30%",
            },
            {
              quote:
                "Sempre fui atendido com muita rapidez e comprometimento com o resultado. Hoje, posso afirmar que essa parceria foi de grande sucesso para nós. Profissionais gabaritados, que nos atendem com muita dedicação.",
              role: "Gerente de TI",
              company: "Queijos Ipanema",
              photo: "/__l5e/assets-v1/291d3950-efca-45eb-9b1f-4c2e8fce3831/fs-Ipanema-2.jpg",
              objectPosition: "50% 30%",
            },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col bg-white p-8">
                <Quote className="mb-5 h-5 w-5 text-accent-amber" />
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/80">
                  {t.quote}
                </blockquote>
                <hr className="my-6 border-foreground/15" />
                <figcaption className="flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.company}
                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    style={{ objectPosition: t.objectPosition }}
                    loading="lazy"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-deep">{t.role}</span>
                    <span className="text-xs text-foreground/55">{t.company}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ({ onCTA }: { onCTA: () => void }) {
  const faqs = [
    {
      q: "Qual o tempo médio de resposta?",
      a: "Parametrizado por contrato e por unidade, conforme a criticidade. Incidente crítico tem prioridade de rota. O número exato é desenhado com você no escopo.",
    },
    {
      q: "Vocês levam peças de reposição ou o cliente fornece?",
      a: "Os dois modelos existem: equipamento do seu inventário ou fornecido pela AlliedIT. Muda só o modelo financeiro.",
    },
    {
      q: "Preciso começar com todas as unidades ou posso testar em uma?",
      a: "Pode começar com um piloto em uma unidade ou uma região e expandir por degraus. A maioria dos clientes multi-unidade começou assim.",
    },
    {
      q: "Qual a diferença de custo entre técnico próprio e Field da AlliedIT?",
      a: "Técnico próprio é custo fixo: salário, encargos, deslocamento e ociosidade. Field é proporcional ao uso. Em redes como a Lojas Mel a troca reduziu 40% do custo de suporte em campo.",
    },
    {
      q: "Vocês atendem 24h ou têm horário?",
      a: "Operação padrão em horário comercial, com plantão 24/7 disponível para missão crítica. Definimos junto o que faz sentido para o seu negócio.",
    },
    {
      q: "Qual o SLA garantido?",
      a: "Trabalhamos com SLAs contratuais por categoria de chamado, com multa em caso de descumprimento. O nível exato é definido conforme criticidade e cobertura.",
    },
    {
      q: "E se for um equipamento que vocês não conhecem?",
      a: "Mapeamos seu parque na fase de onboarding. Para equipamentos muito específicos, treinamos nossos técnicos com o fabricante ou trazemos um especialista do nosso pool.",
    },
    {
      q: "Como funciona o agendamento de preventiva?",
      a: "Cronograma definido em conjunto, com calendário compartilhado. Você aprova as janelas, a gente executa e registra tudo no dashboard.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="mb-12">
            <h2 className="text-3xl font-black tracking-tight text-brand-deep md:text-5xl">
              Perguntas frequentes
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-foreground/15">
                <AccordionTrigger className="text-left text-base font-semibold text-brand-deep hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-foreground/70">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <Reveal>
          <div className="mt-12 flex justify-center">
            <button
              onClick={onCTA}
              className="btn-shine border border-brand px-8 py-4 text-xs font-bold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-brand-foreground"
            >
              Tirar dúvida com um especialista
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA({ onCTA }: { onCTA: () => void }) {
  return (
    <section id="contato" className="bg-brand py-24 text-brand-foreground">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">
            Próximo passo
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Vamos conversar sobre sua operação de Field?
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Em 30 minutos a gente entende quantas unidades você tem, qual a frequência de chamados e mostra quanto você pode ganhar em eficiência e reduzir em custo.
          </p>
        </Reveal>
        <Reveal>
          <button
            onClick={onCTA}
            className="btn-shine mt-10 inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-deep transition hover:bg-white/90"
          >
            Falar com especialista
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-white py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-foreground/60 md:flex-row">
        <p>© 2026 AlliedIT. Todos os direitos reservados.</p>
        <p className="flex gap-4">
          <a href="https://alliedit.com.br/politica-de-privacidade/" target="_blank" rel="noreferrer" className="hover:text-brand transition">Política de Privacidade</a>
          <a href="https://alliedit.com.br/termos-de-uso/" target="_blank" rel="noreferrer" className="hover:text-brand transition">Termos e Condições</a>
        </p>
      </div>
    </footer>
  );
}

export function FieldServicePage() {
  const [open, setOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState<SelectedPath>("interno");
  const openModal = () => {
    pushDataLayer({ event: "cta_click", button_name: "primary_cta" });
    pushDataLayer({ event: "modal_open", modal_name: "lead_form" });
    setOpen(true);
  };

  useEffect(() => {
    captureUtms();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-foreground">
      <Header />
      <main>
        <Hero onCTA={openModal} />
        <Clients />
        <PainScenarios selected={selectedPath} onSelect={setSelectedPath} />
        <Pillars onCTA={openModal} selected={selectedPath} />
        <ResidenteVolante onCTA={openModal} />
        <Escopo />

        <WhyUs onCTA={openModal} />
        <FeaturedCase onCTA={openModal} />
        <FAQ onCTA={openModal} />
        <FinalCTA onCTA={openModal} />
      </main>
      <Footer />
      {open && (
        <Suspense fallback={null}>
          <ContactModal open={open} onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
