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
const PATH = "/empresas-de-outsourcing-em-sp";
const DESCRIPTION =
  "Outsourcing de TI em São Paulo para médias e grandes empresas: service desk, field service, infraestrutura, segurança e nuvem com SLA e sede em Alphaville.";

const FAQ = [
  { q: "O que uma empresa de outsourcing de TI faz?", a: "Assume parte ou toda a operação de tecnologia da sua empresa (suporte ao usuário, atendimento em campo, infraestrutura, segurança, nuvem) com equipe, processos e SLA próprios, cobrando por escopo." },
  { q: "Terceirizar a TI sai mais caro que manter equipe própria?", a: "Na maior parte dos casos, não: você troca salários, encargos, cobertura de férias e treinamento por uma mensalidade fixa por escopo. Cada caso é diferente, e o levantamento inicial mostra a comparação para a sua empresa." },
  { q: "Preciso terceirizar toda a TI?", a: "Não. Você pode terceirizar só uma frente, como o service desk, e manter o restante interno. O escopo é modular e pode crescer depois." },
  { q: "Como fica a minha equipe de TI atual?", a: "A equipe interna pode continuar responsável pelo que é estratégico, enquanto a Allied IT assume a operação do dia a dia. Desenhamos juntos quem faz o quê." },
  { q: "Vocês atendem empresas fora de São Paulo?", a: "Sim. O suporte remoto cobre qualquer unidade e o atendimento presencial é feito em todo o território nacional." },
];

const linkCls = "font-semibold text-[var(--site-blue)] underline underline-offset-4 hover:text-[var(--site-ink)]";

const OUTSOURCED: ReactNode[] = [
  <><Link to="/service-desk-sao-paulo" className={linkCls}>Suporte ao usuário</Link>: service desk N1, N2 e N3, remoto, presencial ou híbrido, em horário comercial ou 24x7.</>,
  <><Link to="/field-service-engineer-sp" className={linkCls}>Atendimento em campo</Link>: técnicos residentes ou volantes na matriz e nas filiais.</>,
  <><Link to="/empresas-de-infraestrutura-de-ti-em-sao-paulo" className={linkCls}>Infraestrutura</Link>: redes, Wi-Fi, cabeamento estruturado e data center, do projeto à sustentação.</>,
  <><strong>Segurança</strong>: NOC e SOC 24x7, firewall, proteção de endpoints, pentest e adequação à LGPD.</>,
  <><strong>Nuvem</strong>: sustentação de ambientes em nuvem, FinOps, SecOps e bancos de dados.</>,
  <>Profissionais de TI alocados na sua equipe, por projeto ou por período.</>,
];

const REASONS = [
  "Custo previsível: uma mensalidade por escopo, em vez de folha, encargos, substituições e treinamento.",
  "Cobertura que a equipe interna não alcança: plantão 24x7, férias e filiais em outras cidades.",
  "Processos e indicadores: chamados medidos, problemas que se repetem tratados na causa e relatórios para a diretoria.",
  "Equipe interna focada no que é estratégico, e não em apagar incêndio.",
];

const CHECKS = [
  "SLA em contrato, com prazos por categoria de chamado e relatórios periódicos.",
  "Transição sem interrupção: plano em etapas e período de sobreposição com o fornecedor ou a equipe atual.",
  "Presença local e nacional: equipe em São Paulo e atendimento presencial nas suas filiais.",
  "Experiência no seu setor e clientes com contratos longos.",
  "Flexibilidade para começar por uma frente e ampliar depois, sem pacote fechado.",
];

export const Route = createFileRoute("/_site/empresas-de-outsourcing-em-sp")({
  head: () => {
    const h = pageHead({
      title: "Empresa de Outsourcing de TI em SP | Allied IT",
      description: DESCRIPTION,
      social: DESCRIPTION,
      path: PATH,
    });
    return {
      ...h,
      scripts: [
        serviceSchema({
          path: PATH,
          name: "Outsourcing de TI em São Paulo",
          serviceType: "Outsourcing de TI e serviços gerenciados",
          description: DESCRIPTION,
          sectionName: "Serviços",
          sectionPath: "/servicos",
          faq: FAQ,
        }),
      ],
    };
  },
  component: OutsourcingSpPage,
});

const H2 = "font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem]";
const P = "font-inter mt-5 text-pretty text-[15px] leading-relaxed";
const BTN =
  "font-inter inline-flex min-h-11 items-center justify-center px-8 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

function OutsourcingSpPage() {
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-[#050D12] pt-[72px]">
        <img src={heroPhoto.url} alt="Equipe de tecnologia responsável pela operação de TI de empresas em São Paulo" className="absolute inset-0 size-full object-cover object-[65%_center]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-black/10" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <div className="max-w-[60ch]">
            <h1 className="font-chillax max-w-[24ch] text-balance text-[2.2rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[3.2rem]">
              Empresa de outsourcing de TI em São Paulo
            </h1>
            <p className="font-inter mt-6 max-w-[56ch] text-pretty text-[16px] leading-relaxed text-white/75">
              A Allied IT é uma <Link to="/outsourcing-de-ti" className="font-semibold text-white underline underline-offset-4 hover:text-[var(--site-yellow)]">empresa de outsourcing de TI</Link> com sede em Alphaville, Barueri, que desde 2018 assume a operação de tecnologia de empresas de médio e grande porte em São Paulo e em todo o Brasil. Você escolhe o que terceirizar; nós operamos com processos, indicadores e SLA em contrato.
            </p>
            <SiteCtaButton formId={DW_FORM_ID} title="Falar com um especialista" className={`${BTN} mt-9 bg-[var(--site-yellow)] text-[#0B1418] hover:bg-white`}>
              Falar com um especialista
            </SiteCtaButton>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>O que a sua empresa pode terceirizar com a Allied IT</h2>
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

      <section className="bg-[var(--site-blue)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <h2 className={`${H2} text-white`}>Por que empresas de São Paulo terceirizam a TI</h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {REASONS.map((item, i) => (
              <Reveal key={item} as="li" variant="fade-up" delay={i * 80} className="rounded-2xl border border-white/20 bg-white/5 p-7">
                <p className="font-inter text-[15px] leading-relaxed text-white/85">{item}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Como escolher uma empresa de outsourcing em SP</h2>
            <p className={`${P} text-[var(--site-muted)]`}>Antes de assinar, vale conferir cinco pontos em qualquer fornecedor:</p>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHECKS.map((item, i) => (
              <Reveal key={item} as="li" variant="fade-up" delay={i * 80} className="rounded-2xl border border-[var(--site-line)] bg-[#F4F8F9] p-7">
                <span className="font-chillax text-sm font-bold tracking-[0.18em] text-[var(--site-yellow)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-inter mt-3 text-[15px] leading-relaxed text-[var(--site-ink)]">{item}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#F4F8F9] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Como é o contrato com a Allied IT</h2>
            <p className={`${P} text-[var(--site-muted)]`}>Trabalhamos com contratos de médio e longo prazo, desenhados para cada cliente. A equipe pode ser dedicada ou compartilhada, na sua sede, remota ou híbrida, com equipamentos seus ou nossos. O escopo é modular: dá para começar pelo service desk e incluir campo, infraestrutura, segurança ou nuvem conforme a necessidade. Projetos pontuais também são atendidos.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#08131A] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal variant="fade-up">
            <h2 className={`${H2} text-white`}>Empresas que terceirizam a TI com a Allied IT</h2>
            <p className={`${P} text-white/75`}>Atendemos empresas de hotelaria, saúde, varejo com muitas unidades, farma, indústria e logística, como Louvre Hotels Group (mais de 10 unidades), Body Tech (7 unidades), Mundial (vários CNPJs), Lojas Mel (mais de 55 lojas) e Ipanema Queijos.</p>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h2 className={`${H2} text-white`}>Outsourcing de TI em São Paulo e na Grande SP</h2>
            <p className={`${P} text-white/75`}>Da sede em Alphaville, Barueri, atendemos a capital, o ABC, Osasco, Barueri, Santana de Parnaíba e as demais cidades da Grande São Paulo com equipe remota e presencial. A mesma operação cobre filiais em todo o Brasil.</p>
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
          Vamos conversar sobre a TI da sua empresa?
        </h2>
        <p className="font-inter mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed text-[var(--site-muted)]">
          Em 30 minutos entendemos a sua operação atual e mostramos o que faz sentido terceirizar, com quanto de previsibilidade e economia. Sem compromisso.
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
