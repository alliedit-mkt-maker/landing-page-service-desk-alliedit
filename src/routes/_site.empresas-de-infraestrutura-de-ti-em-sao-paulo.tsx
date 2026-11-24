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
import heroPhoto from "@/assets/dw/noc.jpg.asset.json";

const CONTACT_FORM = { formId: "e7c97bc8-1dbd-44a7-ba36-2bcec71e97a3", description: "Formulário de contato Allied IT Infra Core", product: "Infra Core" };
const PATH = "/empresas-de-infraestrutura-de-ti-em-sao-paulo";
const DESCRIPTION =
  "Redes, Wi-Fi, cabeamento estruturado, data center e gestão da infraestrutura de TI em São Paulo, do projeto à operação. Peça uma visita técnica.";

const FAQ = [
  { q: "Vocês atendem empresas em São Paulo e em outras cidades?", a: "Sim. Atendemos São Paulo e a Grande SP a partir da nossa sede em Alphaville, Barueri, e executamos projetos de redes, cabeamento e data center em todo o Brasil." },
  { q: "Vocês fazem só o projeto ou também a execução?", a: "O ciclo completo: visita diagnóstica, projeto, execução e certificação, e, se você quiser, a gestão do ambiente depois." },
  { q: "Conseguem trabalhar com a empresa funcionando?", a: "Sim. Planejamos a execução para minimizar o impacto na operação, especialmente em hotéis, varejo e centros corporativos." },
  { q: "O que entra na certificação da rede?", a: "O teste de cada ponto com equipamento certificador, o laudo ponto a ponto e a documentação as-built com planta e etiquetagem." },
  { q: "Dá para terceirizar a gestão da infraestrutura de TI?", a: "Sim. Além do projeto, assumimos monitoramento, manutenção e suporte da infraestrutura, junto com service desk e field service se a sua empresa precisar." },
];

const linkCls = "font-semibold text-[var(--site-blue)] underline underline-offset-4 hover:text-[var(--site-ink)]";

const TASKS: ReactNode[] = [
  "Redes e Wi-Fi corporativo: modernização de equipamentos e mapeamento de calor (heatmap) para otimizar cobertura e sinal.",
  <><Link to="/servicos/infra-core" className={linkCls}>Cabeamento estruturado Cat5e, Cat6 e Cat6A</Link> e fibra óptica monomodo e multimodo, com certificação ponto a ponto.</>,
  "Organização de racks, com mapeamento, identificação de cada ponto e documentação as-built.",
  "Data center e segurança física, com CFTV IP em alta definição e acesso remoto.",
  "Gestão e monitoramento do ambiente depois da implantação, com NOC e suporte técnico.",
];

const STEPS = [
  { t: "Visita diagnóstica", d: "avaliamos o local e mostramos os gargalos da infraestrutura antes de qualquer execução." },
  { t: "Projeto", d: "planta, dimensionamento e orçamento fechado, aprovados por você antes de passar qualquer cabo." },
  { t: "Execução", d: "equipe própria, cronograma definido e cuidado com o ambiente, em obra nova ou com a operação funcionando." },
  { t: "Certificação e documentação", d: "teste de cada ponto, laudo, etiquetagem e as-built entregues no fim." },
];

const CHOOSE = [
  "Faz visita técnica antes de orçar e entrega orçamento fechado.",
  "Certifica cada ponto e entrega laudo e documentação as-built.",
  "Tem equipe própria e segue as NRs de segurança.",
  "Consegue trabalhar com a sua operação funcionando.",
  "Continua disponível depois da obra, para suporte e manutenção.",
];

export const Route = createFileRoute("/_site/empresas-de-infraestrutura-de-ti-em-sao-paulo")({
  head: () => {
    const h = pageHead({
      title: "Empresa de Infraestrutura de TI em São Paulo | Allied IT",
      description: DESCRIPTION,
      social: DESCRIPTION,
      path: PATH,
    });
    return {
      ...h,
      scripts: [
        serviceSchema({ path: PATH, name: "Infraestrutura de TI em São Paulo", serviceType: "Infraestrutura de TI", description: DESCRIPTION, sectionName: "Serviços", sectionPath: "/servicos", faq: FAQ }),
      ],
    };
  },
  component: InfraSaoPauloPage,
});

const H2 = "font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem]";
const P = "font-inter mt-5 text-pretty text-[15px] leading-relaxed";
const BTN =
  "font-inter inline-flex min-h-11 items-center justify-center px-8 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

function InfraSaoPauloPage() {
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-[#050D12] pt-[72px]">
        <img src={heroPhoto.url} alt="Ambiente de infraestrutura de TI corporativa" className="absolute inset-0 size-full object-cover object-[65%_center]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-black/10" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <div className="max-w-[60ch]">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">Infraestrutura de TI São Paulo</p>
            <h1 className="font-chillax mt-4 max-w-[24ch] text-balance text-[2.2rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[3.2rem]">
              Empresa de infraestrutura de TI em São Paulo, do projeto à operação
            </h1>
            <p className="font-inter mt-6 max-w-[56ch] text-pretty text-[16px] leading-relaxed text-white/75">
              A Allied IT projeta, implanta e mantém a infraestrutura de TI de empresas de médio e grande porte em São Paulo e na Grande SP: redes e Wi-Fi corporativo, cabeamento estruturado, data center e CFTV. Diferente de quem só executa a obra, também operamos e damos suporte ao ambiente depois da entrega.
            </p>
            <SiteCtaButton {...CONTACT_FORM} className={`${BTN} mt-9 bg-[var(--site-yellow)] text-[#0B1418] hover:bg-white`}>
              Agendar visita técnica
            </SiteCtaButton>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>O que fazemos na sua infraestrutura de TI</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TASKS.map((t, i) => (
              <Reveal key={i} as="li" variant="fade-up" delay={i * 80} className="rounded-2xl border border-[var(--site-line)] bg-white p-7">
                <span className="font-chillax text-sm font-bold tracking-[0.18em] text-[var(--site-yellow)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-inter mt-3 text-[15px] leading-relaxed text-[var(--site-ink)]">{t}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Como trabalhamos: da visita ao laudo</h2>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} as="li" variant="fade-up" delay={i * 90} className="rounded-2xl border border-[var(--site-line)] bg-[#F4F8F9] p-7">
                <span className="font-chillax text-sm font-bold tracking-[0.18em] text-[var(--site-yellow)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-inter mt-3 text-[15px] leading-relaxed text-[var(--site-ink)]"><strong>{s.t}:</strong> {s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--site-blue)] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal variant="fade-up">
            <h2 className={`${H2} text-white`}>Infraestrutura pensada por quem também opera TI</h2>
            <p className={`${P} text-white/80`}>
              A Allied IT faz <Link to="/service-desk-sao-paulo" className="font-semibold text-white underline underline-offset-4 hover:text-[var(--site-yellow)]">service desk</Link>, <Link to="/field-service-engineer-sp" className="font-semibold text-white underline underline-offset-4 hover:text-[var(--site-yellow)]">field service</Link>, NOC e SOC para empresas em todo o Brasil. Por isso projetamos a infraestrutura pensando em quem vai dar suporte depois: rede documentada, pontos identificados e um só fornecedor responsável pelo ambiente.
            </p>
            <p className={`${P} text-white/80`}>
              Se a sua empresa prefere <a href="/outsourcing-de-ti" className="font-semibold text-white underline underline-offset-4 hover:text-[var(--site-yellow)]">terceirizar também a gestão da infraestrutura</a>, assumimos o monitoramento e a sustentação, com indicadores e relatórios periódicos.
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h2 className={`${H2} text-white`}>Segurança na execução</h2>
            <p className={`${P} text-white/80`}>Todas as execuções contam com técnicos de segurança do trabalho, e a equipe atua conforme as NRs de trabalho em altura e de energia. Em hotéis, varejo e centros corporativos, planejamos o trabalho para minimizar o impacto na operação.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#08131A] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[64ch]">
            <h2 className={`${H2} text-white`}>Projetos em ambientes que não podem parar</h2>
            <p className={`${P} text-white/75`}>Na planta da Nestlé Puravida, projetamos e executamos o cabeamento estruturado e o Wi-Fi das áreas de produção, expedição e administrativo, uma rede para sustentar operação 24/7 com interferência de maquinário.</p>
            <p className={`${P} text-white/75`}>Também entregamos a infraestrutura do novo centro de distribuição de um cliente em Extrema (MG), do projeto à certificação.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Como escolher uma empresa de infraestrutura de TI em São Paulo</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHOOSE.map((c, i) => (
              <Reveal key={c} as="li" variant="fade-up" delay={i * 80} className="rounded-2xl border border-[var(--site-line)] bg-[#F4F8F9] p-7">
                <p className="font-inter text-[15px] leading-relaxed text-[var(--site-ink)]">{c}</p>
              </Reveal>
            ))}
          </ul>
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
                <AccordionItem key={i} value={`q-${i}`} className="border-b border-white/12">
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

      <section aria-labelledby="site-cta" className="relative z-10 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 id="site-cta" className="font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-[var(--site-ink)] sm:text-[2.1rem]">
            Vamos falar sobre a infraestrutura da sua empresa?
          </h2>
          <p className="font-inter mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed text-[var(--site-muted)]">
            Obra nova, reforma, ampliação ou uma rede que vive caindo: fazemos o levantamento e voltamos com projeto e orçamento fechado. Sem compromisso.
          </p>
          <SiteCtaButton
            {...CONTACT_FORM}
            className={`${BTN} mt-9 border border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-white`}
          >
            Agendar visita técnica
          </SiteCtaButton>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
