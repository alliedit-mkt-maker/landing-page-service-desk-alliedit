import { useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { serviceSchema } from "@/lib/service-schema";
import { SiteCtaButton } from "@/components/site/SiteCtaButton";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/lp/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { ThankYouDialog } from "@/components/lp/ThankYouDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroPhoto from "@/assets/dw/field.jpg.asset.json";

const DW_FORM_ID = "aaf63884-47ee-489c-b70f-103f806e0c60";
const PATH = "/field-service-engineer-sp";
const DESCRIPTION =
  "Técnicos de campo em São Paulo e em todo o Brasil: manutenção, troca de equipamentos, rollout e smart hands, residente ou volante, com SLA por unidade.";

const FAQ = [
  { q: "O que é um field service engineer?", a: "É o técnico de TI que atende no local: instala e troca equipamentos, faz manutenção preventiva e corretiva, prepara novas unidades e resolve o que não dá para resolver remotamente." },
  { q: "Qual a diferença entre service desk e field service?", a: "O service desk atende o usuário de forma remota, por telefone, portal, WhatsApp, Teams ou e-mail. O field service é a equipe presencial. Na Allied IT as duas frentes trabalham juntas, com o mesmo chamado do início ao fim." },
  { q: "Vocês atendem fora de São Paulo?", a: "Sim. O atendimento presencial é feito em todo o território nacional, inclusive em filiais fora das capitais." },
  { q: "Como é cobrado o field service?", a: "Depende do modelo. O técnico residente tem valor fixo mensal. No modelo volante, o custo acompanha o volume de atendimentos e de unidades. Os dois podem ser combinados no mesmo contrato." },
  { q: "Os técnicos usam o meu equipamento ou o de vocês?", a: "Os dois funcionam. Trabalhamos com o hardware do seu inventário ou fornecemos os equipamentos; muda só o modelo financeiro." },
];

const linkCls = "font-semibold text-[var(--site-blue)] underline underline-offset-4 hover:text-[var(--site-ink)]";

const TASKS: ReactNode[] = [
  "Manutenção preventiva e corretiva de redes, servidores, computadores, PDVs e periféricos.",
  "Instalação e troca de equipamentos, com hardware da sua empresa ou fornecido pela Allied IT.",
  "Rollout de novas unidades: TI pronta antes da inauguração, do cabeamento ao PDV.",
  <Link key="infra" to="/servicos/infra-core" className={linkCls}>Cabeamento estruturado, Wi-Fi corporativo e CFTV</Link>,
  "Inventário e auditoria de ativos.",
  "Smart hands: o braço presencial do seu time remoto, do seu NOC ou do seu service desk, seja da Allied IT ou não.",
];

const SIGNS = [
  "Deslocamento caro: técnico viajando é hora parada, diária e combustível para atender uma unidade distante.",
  "Rollout travado: cada unidade nova depende de TI no local e a equipe interna não cobre todos os endereços.",
  "Venda parada: PDV ou rede fora do ar e o técnico mais próximo a horas de distância.",
  "Profissional sênior preso em campo, trocando peça em vez de cuidar de projetos.",
];

export const Route = createFileRoute("/_site/field-service-engineer-sp")({
  head: () => {
    const h = pageHead({
      title: "Field Service Engineer em SP | Técnicos de TI | Allied IT",
      description: DESCRIPTION,
      social: DESCRIPTION,
      path: PATH,
    });
    return {
      ...h,
      scripts: [
        serviceSchema({ path: PATH, name: "Field service engineer em São Paulo", serviceType: "Field service", description: DESCRIPTION, sectionName: "Serviços", sectionPath: "/servicos", faq: FAQ }),
      ],
    };
  },
  component: FieldServiceEngineerPage,
});

const H2 = "font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem]";
const P = "font-inter mt-5 text-pretty text-[15px] leading-relaxed";
const BTN =
  "font-inter inline-flex min-h-11 items-center justify-center px-8 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

function FieldServiceEngineerPage() {
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-[#050D12] pt-[72px]">
        <img src={heroPhoto.url} alt="Técnico de campo atendendo equipamentos de TI no local" className="absolute inset-0 size-full object-cover object-[65%_center]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-black/10" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <div className="max-w-[60ch]">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">Field Service São Paulo</p>
            <h1 className="font-chillax mt-4 max-w-[24ch] text-balance text-[2.2rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[3.2rem]">
              Field service engineer em SP: técnico de TI onde a sua operação está
            </h1>
            <p className="font-inter mt-6 max-w-[56ch] text-pretty text-[16px] leading-relaxed text-white/75">
              Há problema de TI que só se resolve com alguém no local: PDV fora do ar, rede caída, equipamento para trocar, loja nova para abrir. A Allied IT coloca técnicos de campo qualificados na sua empresa em São Paulo e na Grande SP e nas suas unidades em todo o Brasil, com chamado registrado, prazo combinado e relatório do que foi feito.
            </p>
            <SiteCtaButton formId={DW_FORM_ID} title="Falar com um especialista" className={`${BTN} mt-9 bg-[var(--site-yellow)] text-[#0B1418] hover:bg-white`}>
              Falar com um especialista em field service
            </SiteCtaButton>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>O que o nosso técnico de campo faz</h2>
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

      <section className="bg-[var(--site-blue)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <h2 className={`${H2} text-white`}>Técnico residente ou volante</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal variant="fade-up" className="rounded-2xl border border-white/20 bg-white/5 p-7">
              <p className="font-inter text-[15px] leading-relaxed text-white/85"><strong className="text-white">Técnico residente:</strong> fixo, todos os dias úteis, dentro da sua operação. Indicado para matriz, centro de distribuição e unidades de alto volume, onde o técnico já conhece a equipe, o parque e o ritmo do lugar.</p>
            </Reveal>
            <Reveal variant="fade-up" delay={110} className="rounded-2xl border border-white/20 bg-white/5 p-7">
              <p className="font-inter text-[15px] leading-relaxed text-white/85"><strong className="text-white">Técnico volante:</strong> técnicos que circulam entre as suas unidades conforme a demanda e a rota. Indicado para redes de lojas, academias e hotéis em que o volume não justifica um técnico fixo, mas a presença é crítica.</p>
            </Reveal>
          </div>
          <p className={`${P} text-white/80`}>Os dois modelos podem ser combinados no mesmo contrato e o desenho muda quando a operação muda.</p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Quando terceirizar o field service vale a pena</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {SIGNS.map((s, i) => (
              <Reveal key={s} as="li" variant="fade-up" delay={i * 90} className="rounded-2xl border border-[var(--site-line)] bg-[#F4F8F9] p-7">
                <p className="font-inter text-[15px] leading-relaxed text-[var(--site-ink)]">{s}</p>
              </Reveal>
            ))}
          </ul>
          <p className={`${P} max-w-[70ch] text-[var(--site-muted)]`}>Com a Allied IT, você paga pelo volume que usa, sem técnico ocioso na folha nos meses de baixo movimento, e a sua equipe interna volta para o que é estratégico.</p>
        </div>
      </section>

      <section className="bg-[#F4F8F9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="mx-auto max-w-[64ch] text-center">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Field service integrado ao service desk</h2>
            <p className={`${P} text-[var(--site-muted)]`}>
              O monitoramento detecta, o <Link to="/service-desk-sao-paulo" className={linkCls}>service desk</Link> faz a triagem remota e o técnico de campo resolve no local, tudo no mesmo chamado. Um fornecedor só, sem jogo de empurra entre empresas. Você acompanha em um painel quem atendeu, o quê, quando e em qual unidade.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#08131A] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[64ch]">
            <h2 className={`${H2} text-white`}>Resultados em operações com muitas unidades</h2>
            <p className={`${P} text-white/75`}>O grupo Lojas Mel tinha custo alto com equipe própria, falhas frequentes em microinformática e PDVs e precisava de atendimento padronizado em várias cidades. A Allied IT assumiu a operação completa de field services em todo o Brasil, em mais de 55 lojas.</p>
            <p className={`${P} text-white/75`}>Também atendemos mais de 10 unidades do Louvre Hotels Group e 7 da Body Tech, com equipes que conhecem as particularidades de varejo, hotelaria, saúde, farma e logística.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="mx-auto max-w-[64ch] text-center">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Field service em São Paulo e em todo o Brasil</h2>
            <p className={`${P} text-[var(--site-muted)]`}>A partir de Alphaville, Barueri, atendemos a capital paulista e a Grande SP com técnicos residentes e volantes. Para empresas com filiais, o atendimento presencial é feito em todo o território nacional, inclusive fora das capitais, com o mesmo padrão e o mesmo SLA por unidade.</p>
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

      <FinalCta />
      <SiteFooter />
    </>
  );
}

function FinalCta() {
  const [thanks, setThanks] = useState(false);
  const [pageUrl, setPageUrl] = useState("");
  return (
    <section aria-labelledby="site-cta" className="relative z-10 bg-white py-20 sm:py-28">
      <ThankYouDialog open={thanks} onOpenChange={setThanks} submittedPageUrl={pageUrl} />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 id="site-cta" className="font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-[var(--site-ink)] sm:text-[2.1rem]">
          Vamos conversar sobre a sua operação de campo?
        </h2>
        <p className="font-inter mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed text-[var(--site-muted)]">
          Em 30 minutos entendemos quantas unidades você tem e qual a frequência de chamados, e mostramos quanto dá para ganhar em eficiência e reduzir em custo.
        </p>
        <SiteCtaButton
          formId={DW_FORM_ID}
          title="Falar com um especialista"
          className={`${BTN} mt-9 border border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-white`}
        >
          Falar com especialista
        </SiteCtaButton>
        <div className="hubspot-form-wrapper mx-auto mt-12 max-w-lg rounded-2xl border border-[var(--site-line)] bg-[#F4F8F9] p-6 text-left sm:p-8">
          <p className="font-chillax text-xl font-semibold text-[var(--site-ink)]">Falar com um especialista</p>
          <div className="mt-4">
            <LeadForm
              formId={DW_FORM_ID}
              source={PATH}
              onSubmitted={(url) => {
                setPageUrl(url);
                setThanks(true);
              }}
            />
          </div>
          <p className="font-inter mt-4 text-center text-[11px] text-[var(--site-muted)]">Seus dados são tratados conforme a LGPD. Sem SPAM.</p>
        </div>
      </div>
    </section>
  );
}
