import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { serviceSchema } from "@/lib/service-schema";
import { SiteCtaButton } from "@/components/site/SiteCtaButton";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/lp/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroPhoto from "@/assets/dw/hero.jpg.asset.json";

const DW_FORM_ID = "aaf63884-47ee-489c-b70f-103f806e0c60";
const PATH = "/outsourcing-de-ti";
const DESCRIPTION =
  "Outsourcing de TI para médias e grandes empresas: serviços gerenciados por escopo e SLA ou profissionais alocados. Custo previsível e operação 24x7.";

const FAQ = [
  {
    q: "O que é outsourcing de TI?",
    a: "É a contratação de uma empresa especializada para operar parte da tecnologia da sua empresa, como suporte ao usuário, infraestrutura, segurança ou nuvem, com escopo, SLA e indicadores definidos em contrato.",
  },
  {
    q: "Qual a diferença entre outsourcing de TI e alocação de profissionais?",
    a: "No outsourcing por serviços gerenciados, o fornecedor responde pelo resultado da frente terceirizada. Na alocação, o profissional trabalha sob a gestão da sua equipe. A Allied IT oferece os dois modelos.",
  },
  {
    q: "Quais são as vantagens da terceirização de TI?",
    a: "Custo previsível, cobertura 24x7, equipe sempre completa, processos e indicadores desde o início e acesso a especialistas sem contratar cada um.",
  },
  {
    q: "Qual o prazo de contrato?",
    a: "Trabalhamos principalmente com contratos de médio e longo prazo, desenhados para cada cliente. Também atendemos projetos pontuais.",
  },
  {
    q: "Vocês atendem em todo o Brasil?",
    a: "Sim. A sede fica em Alphaville, Barueri (SP), o suporte remoto cobre qualquer unidade e o atendimento presencial é feito em todo o território nacional.",
  },
];

const linkCls = "font-semibold text-[var(--site-blue)] underline underline-offset-4 hover:text-[var(--site-ink)]";

const OUTSOURCED: ReactNode[] = [
  <><Link to="/servicos/digital-workspace" className={linkCls}>Digital Workspace</Link>: service desk e field service, remoto e presencial.</>,
  <><Link to="/servicos/infra-core" className={linkCls}>Infra Core</Link>: redes, Wi-Fi, cabeamento estruturado e data center.</>,
  <><Link to="/servicos/cyber-shield-360" className={linkCls}>Cyber Shield 360°</Link>: SOC e NOC 24x7, firewall, EDR e XDR, pentest e LGPD.</>,
  <><Link to="/servicos/smart-cloud-ops" className={linkCls}>Smart Cloud Ops</Link>: sustentação de nuvem, FinOps, SecOps e bancos de dados.</>,
  <><Link to="/servicos/product-engineering" className={linkCls}>Product Engineering e Inteligência Artificial</Link>: automação, integração de sistemas e desenvolvimento sob medida.</>,
];

const ADVANTAGES = [
  "Custo previsível: mensalidade fixa por escopo, que cresce em degraus claros junto com a empresa.",
  "Cobertura 24x7 sem montar plantão interno.",
  "Equipe sempre completa: férias, afastamentos e substituições ficam por conta do fornecedor.",
  "Processos ITIL e indicadores desde o primeiro mês.",
  "Acesso a especialistas (segurança, nuvem, redes) sem contratar cada um deles.",
  "Equipe interna livre para os projetos que fazem a empresa crescer.",
];

const SIGNS = [
  "A empresa cresceu e a TI interna não acompanha o volume de chamados.",
  "Há unidades em várias cidades e o suporte presencial não chega a todas.",
  "O custo da TI varia muito de um mês para outro.",
  "O fornecedor atual não cumpre SLA ou não mostra indicadores.",
  "A diretoria precisa de visibilidade e governança sobre a operação de TI.",
];

const STEPS = [
  "Conversa inicial de 30 minutos para entender a operação atual.",
  "Levantamento de usuários, ativos, sistemas, unidades e volume de chamados.",
  "Proposta com escopo, modelo de equipe, SLA e valor mensal.",
  "Transição em etapas, com período de sobreposição e sem deixar os usuários sem suporte.",
  "Operação com relatórios executivos e reuniões periódicas de resultado.",
];

export const Route = createFileRoute("/_site/outsourcing-de-ti")({
  head: () => {
    const h = pageHead({
      title: "Outsourcing de TI: serviços gerenciados com SLA | Allied IT",
      description: DESCRIPTION,
      social: DESCRIPTION,
      path: PATH,
    });
    return {
      ...h,
      scripts: [
        serviceSchema({
          path: PATH,
          name: "Outsourcing de TI",
          serviceType: "Outsourcing de TI e serviços gerenciados",
          description: DESCRIPTION,
          sectionName: "Serviços",
          sectionPath: "/servicos",
          faq: FAQ,
        }),
      ],
    };
  },
  component: OutsourcingPage,
});

const H2 = "font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem]";
const P = "font-inter mt-5 text-pretty text-[15px] leading-relaxed";
const BTN =
  "font-inter inline-flex min-h-11 items-center justify-center px-8 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

function OutsourcingPage() {
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-[#050D12] pt-[72px]">
        <img src={heroPhoto.url} alt="Equipe de tecnologia responsável pela operação de TI de empresas" className="absolute inset-0 size-full object-cover object-[65%_center]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-black/10" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <div className="max-w-[60ch]">
            <h1 className="font-chillax max-w-[24ch] text-balance text-[2.2rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[3.2rem]">
              Outsourcing de TI com previsibilidade de custo e de entrega
            </h1>
            <p className="font-inter mt-6 max-w-[56ch] text-pretty text-[16px] leading-relaxed text-white/75">
              Outsourcing de TI é entregar a uma empresa especializada parte da operação de tecnologia, com escopo, prazos e indicadores definidos em contrato. A Allied IT faz isso desde 2018 para empresas de médio e grande porte <a href="/empresas-de-outsourcing-em-sp" className="font-semibold text-white underline underline-offset-4 hover:text-[var(--site-yellow)]">em todo o Brasil</a>, em dois modelos: serviços gerenciados e alocação de profissionais.
            </p>
            <SiteCtaButton formId={DW_FORM_ID} title="Falar com um especialista" className={`${BTN} mt-9 bg-[var(--site-yellow)] text-[#0B1418] hover:bg-white`}>
              Falar com um especialista
            </SiteCtaButton>
          </div>
        </div>
      </section>

      <section className="bg-[var(--site-blue)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <h2 className={`${H2} text-white`}>Dois modelos de outsourcing de TI</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal variant="fade-up" className="rounded-2xl border border-white/20 bg-white/5 p-7">
              <p className="font-inter text-[15px] leading-relaxed text-white/85"><strong className="text-white">Serviços gerenciados:</strong> a Allied IT assume uma frente inteira (service desk, campo, infraestrutura, segurança ou nuvem) e responde pelo resultado, com SLA, processos e relatórios. Você paga por escopo, não por pessoa.</p>
            </Reveal>
            <Reveal variant="fade-up" delay={110} className="rounded-2xl border border-white/20 bg-white/5 p-7">
              <p className="font-inter text-[15px] leading-relaxed text-white/85"><strong className="text-white">Alocação de profissionais:</strong> técnicos, analistas e especialistas da Allied IT trabalham na sua equipe, sob a sua gestão, por projeto ou por período. O prazo mínimo é combinado no início e depende do perfil e da senioridade.</p>
            </Reveal>
          </div>
          <p className={`${P} text-white/80`}>Os dois modelos podem ser combinados no mesmo contrato.</p>
        </div>
      </section>

      <section className="bg-[#F4F8F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>O que pode ser terceirizado</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OUTSOURCED.map((item, i) => (
              <Reveal key={i} as="li" variant="fade-up" delay={i * 80} className="rounded-2xl border border-[var(--site-line)] bg-white p-7">
                <span className="font-chillax text-sm font-bold tracking-[0.18em] text-[var(--site-yellow)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-inter mt-3 text-[15px] leading-relaxed text-[var(--site-ink)]">{item}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Vantagens da terceirização de TI</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((item, i) => (
              <Reveal key={item} as="li" variant="fade-up" delay={i * 80} className="rounded-2xl border border-[var(--site-line)] bg-[#F4F8F9] p-7">
                <p className="font-inter text-[15px] leading-relaxed text-[var(--site-ink)]">{item}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F4F8F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Quando o outsourcing de TI faz sentido</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {SIGNS.map((item, i) => (
              <Reveal key={item} as="li" variant="fade-up" delay={i * 90} className="rounded-2xl border border-[var(--site-line)] bg-white p-7">
                <p className="font-inter text-[15px] leading-relaxed text-[var(--site-ink)]">{item}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Como funciona a contratação</h2>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((item, i) => (
              <Reveal key={item} as="li" variant="fade-up" delay={i * 80} className="rounded-2xl border border-[var(--site-line)] bg-[#F4F8F9] p-7">
                <span className="font-chillax text-sm font-bold tracking-[0.18em] text-[var(--site-yellow)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-inter mt-3 text-[15px] leading-relaxed text-[var(--site-ink)]">{item}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#08131A] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal variant="fade-up">
            <h2 className={`${H2} text-white`}>Quem já terceiriza a TI com a Allied IT</h2>
            <p className={`${P} text-white/75`}>Empresas de hotelaria, saúde, varejo com muitas unidades, farma, indústria e logística, como Louvre Hotels Group, Body Tech, Mundial, Lojas Mel, Ipanema Queijos e Apsen Farmacêutica.</p>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <figure className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <blockquote className="font-chillax text-balance text-[1.35rem] font-semibold leading-snug text-white sm:text-[1.6rem]">
                "Notamos uma economia de mais de 30% e um aumento de 50% na qualidade percebida dos nossos serviços."
              </blockquote>
              <figcaption className="font-inter mt-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--site-yellow)]">CIO, Apsen Farmacêutica</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0B1B23] to-[#08131A] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <h2 className={`${H2} text-white`}>Perguntas frequentes</h2>
          </Reveal>
          <Reveal variant="fade-up" delay={120} className="mt-10">
            <Accordion type="single" collapsible className="w-full border-t border-white/12">
              {FAQ.map((item, i) => (
                <AccordionItem key={item.q} value={`q-${i}`} className="border-b border-white/12">
                  <AccordionTrigger className="font-chillax py-5 text-left text-[16px] font-semibold text-white hover:text-[var(--site-yellow)] hover:no-underline sm:py-6 sm:text-[17px]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent seoForceMount className="font-inter pb-6 text-[14px] leading-relaxed text-white/60">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <FinalCta />
      <SiteFooter />
    </>
  );
}

function FinalCta() {
  return (
    <section aria-labelledby="site-cta" className="relative z-10 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 id="site-cta" className="font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-[var(--site-ink)] sm:text-[2.1rem]">
          Vamos desenhar o outsourcing de TI da sua empresa?
        </h2>
        <p className="font-inter mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed text-[var(--site-muted)]">
          Conte como funciona a sua TI hoje. Em 30 minutos mostramos o que faz sentido terceirizar e em qual modelo. Sem compromisso.
        </p>
        <SiteCtaButton
          formId={DW_FORM_ID}
          title="Falar com um especialista"
          className={`${BTN} mt-9 border border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-white`}
        >
          Falar com especialista
        </SiteCtaButton>
      </div>
    </section>
  );
}
