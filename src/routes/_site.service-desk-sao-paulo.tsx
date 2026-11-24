import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { serviceSchema } from "@/lib/service-schema";
import { SiteCtaButton } from "@/components/site/SiteCtaButton";
import { useState } from "react";
import { LeadForm } from "@/components/forms/LeadForm";
import { ThankYouDialog } from "@/components/lp/ThankYouDialog";
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
const PATH = "/service-desk-sao-paulo";
const DESCRIPTION =
  "Service desk terceirizado em São Paulo: N1, N2 e N3 na mesma equipe, 12x5 ou 24x7, SLA em contrato e relatórios mensais. Fale com a Allied IT.";

const FAQ = [
  { q: "Quanto custa um service desk terceirizado em São Paulo?", a: "Depende do número de usuários, dos níveis de atendimento (N1, N2, N3), do horário (12x5 ou 24x7) e de a equipe ser dedicada ou compartilhada. O valor é uma mensalidade fixa por escopo, que cresce em degraus claros conforme a sua empresa cresce. Fazemos o levantamento e enviamos a proposta sem compromisso." },
  { q: "Qual a diferença entre service desk e help desk?", a: "O help desk resolve o problema pontual do usuário. O service desk vai além: concentra todos os pedidos de TI, segue processos (incidentes, problemas e mudanças), mede resultados e atua na causa dos chamados que se repetem." },
  { q: "Existe SLA garantido em contrato?", a: "Sim. Os prazos de resposta e de solução são definidos por categoria de chamado e ficam formalizados em contrato, com acompanhamento em relatórios executivos e reuniões periódicas." },
  { q: "Vou ficar sem suporte durante a troca de fornecedor?", a: "Não. A transição é feita em etapas, com período de sobreposição: mapeamos ativos, usuários e processos, montamos o catálogo de serviços e a base de conhecimento e só então assumimos a operação." },
  { q: "Dá para começar com um piloto?", a: "Em casos específicos, sim: com escopo reduzido em uma unidade ou em um grupo de usuários, para avaliação mútua antes da expansão." },
  { q: "O service desk funciona junto com NOC, SOC e field service?", a: "Sim. Se você já tem NOC ou SOC, próprio ou de terceiros, desenhamos os fluxos de escalonamento com esse time. Se preferir concentrar tudo, a Allied IT assume monitoramento, segurança e atendimento presencial na mesma operação." },
];

const LEVELS = [
  { tag: "N1", text: "primeiro atendimento, senhas e acessos, dúvidas de sistemas e e-mail, abertura e triagem de chamados." },
  { tag: "N2", text: "incidentes que pedem análise técnica, como estações de trabalho, impressoras, rede local, Microsoft 365 e aplicativos corporativos." },
  { tag: "N3", text: "servidores, infraestrutura e problemas que se repetem, com análise da causa para o chamado não voltar." },
  { tag: "Gestão", text: "Gestão de incidentes, problemas e mudanças, com catálogo de serviços e base de conhecimento montados para a sua operação." },
];

const STEPS = [
  { t: "Levantamento", d: "mapeamos usuários, ativos, sistemas, volume de chamados e o SLA atual." },
  { t: "Desenho", d: "definimos escopo, canais, horários e os prazos de resposta e solução por categoria de chamado." },
  { t: "Preparação", d: "montamos o catálogo de serviços e a base de conhecimento da sua empresa." },
  { t: "Operação", d: "assumimos o atendimento e acompanhamos os resultados em relatórios executivos e reuniões periódicas." },
];

export const Route = createFileRoute("/_site/service-desk-sao-paulo")({
  head: () => {
    const h = pageHead({
      title: "Service Desk em São Paulo 24x7 com N1 a N3 | Allied IT",
      description: DESCRIPTION,
      social: DESCRIPTION,
      path: PATH,
    });
    return {
      ...h,
      scripts: [
        serviceSchema({ path: PATH, name: "Service desk em São Paulo", serviceType: "Service desk terceirizado", description: DESCRIPTION, sectionName: "Serviços", sectionPath: "/servicos", faq: FAQ }),
      ],
    };
  },
  component: ServiceDeskSaoPauloPage,
});

const H2 = "font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem]";
const P = "font-inter mt-5 text-pretty text-[15px] leading-relaxed";

function ServiceDeskSaoPauloPage() {
  const btn =
    "font-inter inline-flex h-11 items-center justify-center px-8 text-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-[#050D12] pt-[72px]">
        <img src={heroPhoto.url} alt="Profissional de service desk atendendo usuários em São Paulo" className="absolute inset-0 size-full object-cover object-[65%_center]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-black/10" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <div className="max-w-[60ch]">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">Service Desk São Paulo</p>
            <h1 className="font-chillax mt-4 max-w-[24ch] text-balance text-[2.2rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[3.2rem]">
              Service desk em São Paulo para empresas que não podem parar
            </h1>
            <p className="font-inter mt-6 max-w-[56ch] text-pretty text-[16px] leading-relaxed text-white/75">
              A Allied IT opera o service desk de empresas de médio e grande porte em São Paulo e na Grande SP, a partir da nossa sede em Alphaville, Barueri. Atendimento N1, N2 e N3 na mesma equipe, pelos canais que seus usuários já usam, com prazos de resposta e de solução definidos em contrato.
            </p>
            <SiteCtaButton formId={DW_FORM_ID} title="Falar com um especialista" className={`${btn} mt-9 min-h-11 h-auto py-3 bg-[var(--site-yellow)] text-[#0B1418] hover:bg-white`}>
              Falar com um especialista em service desk
            </SiteCtaButton>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>O que o nosso service desk resolve</h2>
            <p className={`${P} text-[var(--site-muted)]`}>É a porta de entrada da TI da sua empresa: todo pedido do usuário chega a um só lugar, é registrado, priorizado e acompanhado até a solução.</p>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {LEVELS.map((l, i) => (
              <Reveal key={l.tag} as="li" variant="fade-up" delay={i * 90} className="rounded-2xl border border-[var(--site-line)] bg-white p-7">
                <span className="font-chillax text-sm font-bold tracking-[0.18em] text-[var(--site-yellow)]">{l.tag}</span>
                <p className="font-inter mt-3 text-[15px] leading-relaxed text-[var(--site-ink)]">
                  {l.tag === "Gestão" ? l.text : <><strong>{l.tag}:</strong> {l.text}</>}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--site-blue)] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal variant="fade-up">
            <h2 className={`${H2} text-white`}>Canais e horários de atendimento</h2>
            <p className={`${P} text-white/80`}>Seus usuários abrem chamado por telefone, portal, WhatsApp, Microsoft Teams ou e-mail. Todos os canais caem na mesma fila, com o mesmo registro.</p>
            <p className={`${P} text-white/80`}>O horário acompanha a sua operação: horário comercial (12x5), cobertura estendida ou operação contínua 24x7, com atendimento humano todos os dias do ano.</p>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h2 className={`${H2} text-white`}>Equipe dedicada, compartilhada, na sua sede ou remota</h2>
            <p className={`${P} text-white/80`}>Cada contrato é desenhado para a operação do cliente. A equipe pode ser exclusiva da sua empresa ou compartilhada na nossa estrutura de Alphaville, trabalhar dentro da sua sede, de forma remota ou no modelo híbrido, com equipamentos seus ou nossos.</p>
            <p className={`${P} text-white/80`}>O escopo é modular: dá para começar pelo N1 e incluir N2, N3, NOC, SOC ou field service conforme a empresa cresce, sem fechar um pacote engessado.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Como é a troca para a Allied IT</h2>
            <p className={`${P} text-[var(--site-muted)]`}>A transição é feita em etapas e com período de sobreposição, para que seus usuários não fiquem sem suporte em nenhum momento.</p>
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

      <section className="bg-[#F4F8F9] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal variant="fade-up">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Service desk medido por indicadores</h2>
            <p className={`${P} text-[var(--site-muted)]`}>Você acompanha tempo de resposta, tempo de solução, volume por categoria e satisfação dos usuários. Os números mostram onde estão os problemas que se repetem, e a equipe atua na causa para reduzir chamados, e não só para atendê-los.</p>
            <p className={`${P} text-[var(--site-muted)]`}>Na Ipanema Queijos, indústria de alimentos muito dependente de TI, a Allied IT implantou uma operação de service support orientada por indicadores e com governança ITIL para resolver incidentes recorrentes, custo alto com equipe própria e SLA abaixo do esperado.</p>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <figure className="rounded-2xl bg-[#08131A] p-8 sm:p-10">
              <blockquote className="font-chillax text-balance text-[1.35rem] font-semibold leading-snug text-white sm:text-[1.6rem]">
                "Notamos uma economia de mais de 30% e um aumento de 50% na qualidade percebida dos nossos serviços."
              </blockquote>
              <figcaption className="font-inter mt-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--site-yellow)]">CIO, Apsen Farmacêutica</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="mx-auto max-w-[64ch] text-center">
            <h2 className={`${H2} text-[var(--site-ink)]`}>Service desk em São Paulo e em todo o Brasil</h2>
            <p className={`${P} text-[var(--site-muted)]`}>Com sede em Alphaville, Barueri, atendemos empresas da capital e da Grande SP com equipe remota e presencial. Quando a sua empresa tem filiais, o mesmo service desk cobre todas as unidades: o suporte remoto alcança qualquer endereço com internet, e o atendimento presencial é feito em todo o território nacional.</p>
            <p className={`${P} text-[var(--site-muted)]`}>Clientes como Louvre Hotels Group (mais de 10 unidades), Body Tech (7 unidades) e Mundial (vários CNPJs) usam a mesma operação em várias cidades.</p>
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

      <FinalCta btn={btn} />
      <SiteFooter />
    </>
  );
}

function FinalCta({ btn }: { btn: string }) {
  const [thanks, setThanks] = useState(false);
  const [pageUrl, setPageUrl] = useState("");
  return (
    <section aria-labelledby="site-cta" className="relative z-10 bg-white py-20 sm:py-28">
      <ThankYouDialog open={thanks} onOpenChange={setThanks} submittedPageUrl={pageUrl} />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 id="site-cta" className="font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-[var(--site-ink)] sm:text-[2.1rem]">
          Vamos conversar sobre o seu service desk?
        </h2>
        <p className="font-inter mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed text-[var(--site-muted)]">
          Em 30 minutos entendemos a sua operação atual e mostramos onde dá para ganhar previsibilidade, reduzir custo e tirar peso da equipe interna. Sem compromisso.
        </p>
        <SiteCtaButton
          formId={DW_FORM_ID}
          title="Falar com um especialista"
          className={`${btn} mt-9 border border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-white`}
        >
          Falar com especialista
        </SiteCtaButton>
        <div className="hubspot-form-wrapper mx-auto mt-12 max-w-lg rounded-2xl border border-[var(--site-line)] bg-[#F4F8F9] p-6 text-left sm:p-8">
          <p className="font-chillax text-xl font-semibold text-[var(--site-ink)]">Falar com um especialista</p>
          <div className="mt-4">
            <LeadForm
              formId={DW_FORM_ID}
              source="/service-desk-sao-paulo"
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
