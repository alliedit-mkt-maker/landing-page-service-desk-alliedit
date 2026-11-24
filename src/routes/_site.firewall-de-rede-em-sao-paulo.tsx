import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { serviceSchema } from "@/lib/service-schema";
import { PRODUCT_FORMS } from "@/lib/product-forms";
import { SiteCtaButton } from "@/components/site/SiteCtaButton";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/lp/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import hero from "@/assets/firewall/hero.png.asset.json";

const PATH = "/firewall-de-rede-em-sao-paulo";
const TITLE = "Firewall de Rede em São Paulo, monitorado 24h | Allied IT";
const DESCRIPTION = "Firewall de rede para empresas em São Paulo: equipamento fornecido, instalação, configuração, monitoramento 24 horas e suporte sem limite de chamados.";
const FAQ = [
  { q: "Preciso comprar o firewall ou a Allied IT fornece?", a: "A Allied IT fornece o equipamento como parte do serviço, com licenças e suporte inclusos." },
  { q: "O que está incluso no monitoramento?", a: "Acompanhamento contínuo da rede, identificação de tentativas de acesso indevido e relatórios periódicos de segurança." },
  { q: "O suporte técnico tem limite de chamados?", a: "Não. O suporte ao equipamento está incluso no serviço, sem limite de acionamentos." },
  { q: "Vocês atendem empresas fora de São Paulo?", a: "Sim. O monitoramento 24 horas e o suporte são remotos, então atendemos empresas e filiais em todo o Brasil." },
  { q: "Firewall substitui antivírus e SOC?", a: "Não. O firewall controla o tráfego da rede; antivírus e EDR protegem os dispositivos; o SOC monitora e responde a incidentes. As camadas se complementam, e a Allied IT pode cuidar de todas." },
];
const INCLUDED = [
  "Equipamento fornecido pela Allied IT, dimensionado para a sua rede.",
  "Licenças do firewall inclusas no serviço.",
  "Instalação e configuração das regras de segurança e de acesso.",
  "Atualização contínua das regras.",
  "Monitoramento 24 horas, com identificação de tentativas de acesso indevido.",
  "Relatórios periódicos de segurança.",
  "Suporte técnico ao equipamento sem limite de chamados.",
];
const STEPS = [
  "Avaliação: analisamos a sua rede (links, unidades, usuários, acessos remotos) antes de recomendar o equipamento.",
  "Projeto de regras: definimos políticas de acesso, segmentação da rede e VPN conforme a sua operação.",
  "Instalação: configuramos e colocamos o firewall no ar planejando a troca para não parar a empresa.",
  "Operação: monitoramento 24 horas, ajustes de regras e relatórios periódicos.",
];
const SIGNS = [
  "O firewall atual foi instalado há anos e ninguém revisa as regras.",
  "Funcionários acessam a rede de casa sem VPN ou sem controle.",
  "Filiais conectadas à matriz sem segmentação.",
  "Não há relatório de tentativas de acesso nem de ameaças bloqueadas.",
  "Quando o equipamento falha, não há quem atenda rápido.",
];

export const Route = createFileRoute("/_site/firewall-de-rede-em-sao-paulo")({
  head: () => {
    const head = pageHead({ title: TITLE, description: DESCRIPTION, social: DESCRIPTION, path: PATH });
    return {
      ...head,
      meta: [...head.meta.filter((meta) => !("property" in meta && meta.property === "og:image") && !("name" in meta && meta.name === "twitter:image")), { property: "og:image", content: hero.url }, { name: "twitter:image", content: hero.url }],
      scripts: [serviceSchema({ path: PATH, name: "Firewall de rede em São Paulo", serviceType: "Firewall gerenciado", description: DESCRIPTION, sectionName: "Produtos", sectionPath: "/produtos", faq: FAQ })],
    };
  },
  component: FirewallSpPage,
});

const H2 = "font-chillax text-balance text-[1.7rem] font-bold leading-tight sm:text-[2.1rem]";
const P = "font-inter mt-5 text-pretty text-[15px] leading-relaxed";
const BTN = "font-inter inline-flex min-h-11 items-center justify-center px-8 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";
const LINK = "font-semibold text-[var(--site-blue)] underline underline-offset-4 hover:text-[var(--site-ink)]";

function FirewallSpPage() {
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-ink pt-[72px]">
        <img src={hero.url} alt="Segurança e proteção da rede corporativa" fetchPriority="high" loading="eager" decoding="async" className="absolute inset-0 size-full object-cover object-[65%_center]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/20" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <div className="max-w-[60ch]">
            <h1 className="font-chillax max-w-[24ch] text-balance text-[2.2rem] font-bold leading-[1.06] text-primary-foreground sm:text-[3.2rem]">Firewall de rede em São Paulo, com equipamento e monitoramento 24h</h1>
            <p className="font-inter mt-6 max-w-[56ch] text-pretty text-[16px] leading-relaxed text-primary-foreground/75">
              O <Link to="/produtos/firewall" className="font-semibold text-primary-foreground underline underline-offset-4 hover:text-[var(--site-yellow)]">firewall</Link> é a primeira barreira entre a rede da sua empresa e a internet. A Allied IT entrega o serviço completo para empresas em São Paulo e na Grande SP: fornece o equipamento, instala, configura as regras, monitora 24 horas e dá suporte contínuo. Você não precisa comprar o hardware nem <Link to="/outsourcing-de-ti" className="font-semibold text-primary-foreground underline underline-offset-4 hover:text-[var(--site-yellow)]">manter um especialista para cuidar dele</Link>.
            </p>
            <SiteCtaButton {...PRODUCT_FORMS.firewall} className={`${BTN} mt-9 bg-[var(--site-yellow)] text-[var(--site-ink)] hover:bg-surface`}>Solicitar orçamento</SiteCtaButton>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]"><h2 className={`${H2} text-[var(--site-ink)]`}>O que está incluso no serviço de firewall</h2></Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item, i) => (
              <Reveal key={item} as="li" variant="fade-up" delay={i * 80} className="rounded-lg border border-[var(--site-line)] bg-surface p-7">
                <span className="font-chillax text-sm font-bold text-[var(--site-yellow)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-inter mt-3 text-[15px] leading-relaxed text-[var(--site-ink)]">{item}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--site-blue)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8"><Reveal variant="fade-up">
          <h2 className={`${H2} text-primary-foreground`}>Firewall como serviço: sem comprar o equipamento</h2>
          <p className={`${P} text-primary-foreground/85`}>No modelo da Allied IT, o equipamento vem junto com o serviço, no formato conhecido como locação de firewall. Em vez de um investimento alto em hardware, licenças e configuração, a sua empresa contrata a proteção pronta, com quem acompanha o equipamento todos os dias.</p>
          <p className={`${P} text-primary-foreground/85`}>A Allied IT é parceira da Fortinet, e as licenças e o suporte já estão inclusos no serviço.</p>
        </Reveal></div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up"><h2 className={`${H2} text-[var(--site-ink)]`}>Como funciona a implantação</h2></Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2">
            {STEPS.map((item, i) => (
              <Reveal key={item} as="li" variant="fade-up" delay={i * 80} className="rounded-lg border border-[var(--site-line)] bg-secondary p-7">
                <span className="font-chillax text-sm font-bold text-[var(--site-yellow)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-inter mt-3 text-[15px] leading-relaxed text-[var(--site-ink)]">{item}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8"><Reveal variant="fade-up">
          <h2 className={`${H2} text-[var(--site-ink)]`}>Firewall faz parte da segurança em camadas</h2>
          <p className={`${P} text-[var(--site-muted)]`}>Sozinho, o firewall não resolve tudo: ele controla o tráfego da rede, mas a proteção completa também envolve os dispositivos, as pessoas e a resposta a incidentes. Por isso o firewall da Allied IT pode ser integrado ao <Link to="/servicos/cyber-shield-360" className={LINK}>Cyber Shield 360°</Link>, com SOC 24x7, proteção de endpoints (EDR e XDR), pentest, testes de phishing e adequação à LGPD.</p>
        </Reveal></div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up"><h2 className={`${H2} text-primary-foreground`}>Sinais de que a rede da sua empresa precisa de atenção</h2></Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {SIGNS.map((item, i) => <Reveal key={item} as="li" variant="fade-up" delay={i * 80} className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-7"><p className="font-inter text-[15px] leading-relaxed text-primary-foreground/85">{item}</p></Reveal>)}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8"><Reveal variant="fade-up">
          <h2 className={`${H2} text-[var(--site-ink)]`}>Firewall para empresas em São Paulo e em todo o Brasil</h2>
          <p className={`${P} text-[var(--site-muted)]`}>Instalamos e monitoramos firewall em empresas da capital e da Grande SP a partir da nossa sede em Alphaville, Barueri. Como o monitoramento 24 horas e o suporte são feitos de forma remota, atendemos empresas e filiais em todo o Brasil.</p>
        </Reveal></div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal variant="fade-up"><h2 className={`${H2} text-primary-foreground`}>Perguntas frequentes</h2></Reveal>
          <Reveal variant="fade-up" delay={120} className="mt-10">
            <Accordion type="single" collapsible className="w-full border-t border-primary-foreground/12">
              {FAQ.map((item, i) => (
                <AccordionItem key={item.q} value={`q-${i}`} className="border-b border-primary-foreground/12">
                  <AccordionTrigger className="font-chillax py-5 text-left text-[16px] font-semibold text-primary-foreground hover:text-[var(--site-yellow)] hover:no-underline sm:py-6 sm:text-[17px]">{item.q}</AccordionTrigger>
                  <AccordionContent seoForceMount className="font-inter pb-6 text-[14px] leading-relaxed text-primary-foreground/60">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="site-cta" className="relative z-10 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 id="site-cta" className={`${H2} text-[var(--site-ink)]`}>Quer saber como está a segurança da rede da sua empresa?</h2>
          <p className={`${P} mx-auto max-w-[60ch] text-[var(--site-muted)]`}>Avaliamos o seu cenário atual e mostramos onde vale reforçar a proteção.</p>
          <SiteCtaButton {...PRODUCT_FORMS.firewall} className={`${BTN} mt-9 border border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-primary-foreground`}>Solicitar avaliação</SiteCtaButton>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}