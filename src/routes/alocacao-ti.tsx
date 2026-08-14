import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ogImage from "@/assets/og-image.png.asset.json";
import { LpProvider, useLp } from "@/components/lp/LpProvider";
import { SiteHeader } from "@/components/lp/SiteHeader";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const title = "AlliedIT | Alocação de profissionais de TI sob demanda";
const description =
  "Desenvolvedores, POs, product managers, scrum masters e gerentes de projeto alocados sob demanda. Vira OpEx: sem abrir vaga CLT, sem trava de headcount.";

export const Route = createFileRoute("/alocacao-ti")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://alocacao-ti.alliedit.com.br/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://service-desk.alliedit.com.br${ogImage.url}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AlliedIT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `https://service-desk.alliedit.com.br${ogImage.url}` },
    ],
    links: [{ rel: "canonical", href: "https://alocacao-ti.alliedit.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Alocação de profissionais de TI",
          provider: { "@type": "Organization", name: "AlliedIT", url: "https://www.alliedit.com.br" },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: AlocacaoRoute,
});

export const alocacaoMeta = { title, description };

function AlocacaoRoute() {
  return <AlocacaoPage />;
}

export function AlocacaoPage() {
  return (
    <LpProvider modalTitle="Vamos falar do perfil que você precisa alocar.">
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <SiteHeader />
        <main>
          <Hero />
          <Clients />
          <ScenarioSelector />
          <Pillars />
          <Profiles />
          <HowItWorks />
          <Credibility />
          <Faq />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </LpProvider>
  );
}

const bullets = [
  "Desenvolvedores, POs, scrum masters e mais, alocados sob demanda",
  "Vira OpEx: sem trava de headcount, sem encargos de contratação",
  "Você escala o time conforme o projeto, não conforme o orçamento de vagas",
];

function Hero() {
  const { openModal } = useLp();
  return (
    <section
      className="relative overflow-hidden pt-20 sm:pt-28 pb-24 sm:pb-36 px-4 sm:px-6"
      id="hero"
      style={{
        backgroundImage:
          "radial-gradient(60% 60% at 85% 0%, color-mix(in oklch, var(--gold) 18%, transparent), transparent 70%), radial-gradient(55% 55% at 0% 50%, color-mix(in oklch, var(--petrol) 10%, transparent), transparent 70%), linear-gradient(180deg, color-mix(in oklch, var(--gold) 8%, var(--surface)) 0%, color-mix(in oklch, var(--gold) 4%, var(--surface)) 55%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-5xl relative">
          <Reveal variant="fade-up">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4 sm:mb-6 block">
              Alocação de profissionais de TI
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-balance leading-[0.95] mb-8 sm:mb-10 text-ink-mid">
              O profissional de TI que você precisa, sem abrir uma vaga CLT.
            </h1>
          </Reveal>
          <ul className="flex flex-col gap-4 sm:gap-5 mb-10 sm:mb-12">
            {bullets.map((b, i) => (
              <Reveal as="li" key={b} variant="fade-up" delay={240 + i * 100} className="flex items-start gap-3">
                <div aria-hidden className="size-5 rounded-full border-2 border-gold shrink-0 mt-0.5 animate-soft-pulse" />
                <p className="text-sm font-medium leading-snug text-petrol/90">{b}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal variant="fade-up" delay={560}>
            <button
              onClick={() => openModal("hero_primary")}
              className="btn-sheen bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
            >
              Falar com especialista
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const scenarios = [
  {
    key: "headcount",
    label: "Preciso de gente, mas não consigo abrir vaga",
    bridge: "A AlliedIT entra como serviço. O profissional chega sem passar pela fila de headcount.",
    pains: [
      { title: "Headcount congelado", body: "A necessidade existe, a verba de contratação não. A vaga simplesmente não é aberta." },
      { title: "Aprovação de CLT que não sai", body: "Pedido parado entre RH, financeiro e diretoria. O tempo passa e o projeto não anda." },
      { title: "Projeto parado esperando contratação", body: "A entrega tem prazo, mas depende de alguém que ainda nem foi aprovado para entrar." },
      { title: "Encargos pesam na conta", body: "Cada nova CLT carrega custo fixo de longo prazo que a empresa não quer assumir agora." },
    ],
  },
  {
    key: "recrutamento",
    label: "Contratei, mas demora demais pra achar o perfil certo",
    bridge: "A AlliedIT já tem a rede pronta. Você valida o perfil em vez de conduzir um processo seletivo inteiro.",
    pains: [
      { title: "Recrutamento técnico lento", body: "Triagem, entrevistas, testes, contraproposta. Semanas até a primeira pessoa qualificada aparecer." },
      { title: "Perfil sênior é escasso", body: "Quanto mais específica a stack, menor o funil. E quem é bom já está empregado." },
      { title: "Projeto atrasa esperando a pessoa certa", body: "O cronograma segue correndo enquanto a cadeira continua vazia." },
      { title: "Risco de errar a contratação", body: "Contratou errado, perdeu meses e recomeça o processo do zero." },
    ],
  },
  {
    key: "projeto",
    label: "Preciso de um especialista só pra um projeto",
    bridge: "A AlliedIT aloca a senioridade pelo tempo do projeto. Sem vínculo permanente para uma demanda temporária.",
    pains: [
      { title: "Demanda temporária, custo permanente", body: "Não faz sentido contratar CLT para uma frente que dura alguns meses." },
      { title: "O projeto precisa de senioridade agora", body: "É um perfil específico, com experiência, e a necessidade é imediata." },
      { title: "Time atual já está no limite", body: "Realocar quem está dentro só transfere o atraso para outra entrega." },
      { title: "Depois do projeto, o que fazer?", body: "Manter o profissional sem demanda ou desligar. Nenhuma das duas é boa." },
    ],
  },
] as const;

function ScenarioSelector() {
  const { openModal } = useLp();
  const [active, setActive] = useState<string | null>(null);
  const current = scenarios.find((s) => s.key === active);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="cenario">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            O que está travando a sua equipe de TI hoje?
          </h2>
          <p className="text-petrol/60">Escolha o seu cenário pra ver o que costuma travar a operação.</p>
        </Reveal>

        <div role="tablist" aria-label="Cenário atual" className="flex flex-col lg:flex-row justify-center gap-3 mb-12 sm:mb-16">
          {scenarios.map((s) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={active === s.key}
              onClick={() => setActive(s.key)}
              className={cn(
                "px-6 py-4 text-xs font-bold uppercase tracking-widest border transition-all text-center",
                active === s.key
                  ? "bg-petrol text-white border-petrol"
                  : "bg-surface text-petrol border-petrol/20 hover:border-petrol hover:bg-petrol/5",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        {current && (
          <div key={current.key} className="animate-fade-up">
            <p className="font-mono text-xs uppercase tracking-widest text-petrol/50 mb-6">
              Você pode estar reconhecendo alguns destes sinais.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {current.pains.map((p, i) => (
                <article
                  key={p.title}
                  className="bg-surface p-6 sm:p-8 hover:bg-petrol hover:text-white transition-colors"
                  style={{ animation: `reveal-fade-up 0.7s ${i * 80}ms cubic-bezier(0.16,1,0.3,1) both` }}
                >
                  <span className="font-mono text-[11px] text-gold mb-4 block">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-bold text-base sm:text-lg mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{p.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-center gap-6 text-center">
              <p className="font-mono text-sm text-petrol/80 max-w-2xl text-balance text-ink-mid">{current.bridge}</p>
              <button
                onClick={() => openModal("scenario_selector")}
                className="btn-sheen bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
              >
                Quero ver como a AlliedIT resolve isso
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const pillars = [
  { title: "Vira OpEx, não CapEx", body: "Sem abrir vaga, sem headcount, sem encargos. O profissional entra como serviço, na verba que você já tem." },
  { title: "Perfil certo, rápido", body: "A gente já tem a rede de profissionais de TI. Você não espera meses por um processo seletivo." },
  { title: "Escala conforme o projeto", body: "Precisa de mais gente numa fase crítica? Menos depois? Você ajusta sem demitir nem recontratar." },
  { title: "Gestão da AlliedIT", body: "Operação madura, +7 anos em TI corporativa. A gente cuida do profissional alocado, você foca na entrega." },
];

function Pillars() {
  const { openModal } = useLp();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol/[0.02]" id="pilares">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            O que muda quando a alocação é da AlliedIT
          </h2>
          <p className="text-petrol/60 text-base sm:text-lg">
            Você contrata capacidade técnica como serviço, no ritmo do projeto e dentro da verba que já existe.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {pillars.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              variant="fade-up"
              delay={i * 120}
              className="bg-surface p-6 sm:p-8 flex flex-col group transition-colors hover:bg-petrol hover:text-white"
            >
              <span className="font-mono text-[11px] text-gold mb-4">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-extrabold text-lg sm:text-xl mb-4 leading-tight text-balance group-hover:text-white transition-colors text-ink-mid">
                {p.title}
              </h3>
              <p className="text-petrol/80 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{p.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal variant="fade-up" className="mt-12 flex justify-center">
          <button
            onClick={() => openModal("pillars")}
            className="btn-sheen bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
          >
            Falar com especialista
          </button>
        </Reveal>
      </div>
    </section>
  );
}

const profiles = [
  { title: "Desenvolvedores", body: "Back-end, front-end, full-stack, mobile." },
  { title: "Gerente de Projeto (PM)", body: "Condução de projetos e squads." },
  { title: "Product Owner (PO)", body: "Priorização de backlog e visão de produto." },
  { title: "Product Manager", body: "Estratégia e roadmap de produto." },
  { title: "Scrum Master", body: "Facilitação ágil e remoção de impedimentos." },
];

function Profiles() {
  const { openModal } = useLp();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="perfis">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            Perfis que alocamos
          </h2>
          <p className="text-petrol/60 text-base sm:text-lg">
            Do time de produto ao time de engenharia, na senioridade que o seu projeto exige.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {profiles.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              variant="fade-up"
              delay={i * 90}
              className="bg-surface p-6 sm:p-8 transition-colors hover:bg-petrol/[0.04]"
            >
              <span className="font-mono text-[11px] text-gold mb-4 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 leading-tight text-balance text-ink-mid">{p.title}</h3>
              <p className="text-petrol/70 text-sm leading-relaxed">{p.body}</p>
            </Reveal>
          ))}
          <Reveal variant="scale-in" delay={profiles.length * 90} className="bg-petrol p-6 sm:p-8 flex items-center justify-center text-center transition-colors hover:bg-petrol-light">
            <button
              onClick={() => openModal("profiles")}
              className="text-white text-sm font-bold uppercase tracking-widest"
            >
              Precisa de outro perfil? Fale com a gente
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { title: "Levantamento do perfil", body: "Entendemos a senioridade, stack e prazo que o seu projeto precisa." },
  { title: "Seleção", body: "Apresentamos os profissionais que batem com o perfil, você valida." },
  { title: "Alocação", body: "O profissional entra na sua operação: remoto, presencial ou híbrido." },
  { title: "Gestão contínua", body: "A AlliedIT acompanha e ajusta conforme o projeto evolui." },
];

function HowItWorks() {
  const { openModal } = useLp();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol text-white overflow-hidden relative" id="como-funciona">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 relative">
        <Reveal variant="slide-right">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-balance text-white">
            Como funciona a alocação
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-8 sm:mb-10 max-w-md">
            Quatro passos, do desenho do perfil até a gestão do profissional dentro da sua operação. Sem processo seletivo do seu lado.
          </p>
          <button
            onClick={() => openModal("how_it_works")}
            className="btn-sheen bg-gold text-petrol px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Falar com especialista
          </button>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {steps.map((s, i) => (
            <Reveal as="article" key={s.title} variant="scale-in" delay={i * 100} className="bg-petrol p-6 sm:p-8 transition-colors hover:bg-petrol-light">
              <span className="font-mono text-[11px] text-gold mb-4 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-bold mb-3 text-lg">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const credibility = [
  { title: "+7 anos operando TI corporativa", body: "Operação madura, processos parametrizados, equipe que já viu de tudo." },
  { title: "Especialização vertical real", body: "Hotelaria, saúde, varejo multi-unidade, farma, logística. Sabemos a particularidade de cada setor." },
  { title: "Foco no que não é seu core", body: "Você cuida do que faz a empresa única. A gente cuida de colocar o profissional certo no lugar certo." },
];

function Credibility() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol/[0.02]" id="credibilidade">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            Por que empresas que não podem errar escolhem a AlliedIT
          </h2>
          <p className="text-petrol/60 text-base sm:text-lg">
            Operação madura, especialização vertical e relação de longo prazo.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {credibility.map((c, i) => (
            <Reveal as="article" key={c.title} variant="fade-up" delay={i * 100} className="bg-surface p-6 sm:p-8">
              <span className="font-mono text-[11px] text-gold mb-4 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 leading-tight text-balance text-ink-mid">{c.title}</h3>
              <p className="text-petrol/70 text-sm leading-relaxed">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  { q: "Qual a diferença entre alocação e contratação CLT?", a: "Na CLT o profissional entra no seu quadro, ocupa headcount e carrega encargos de longo prazo. Na alocação ele entra como serviço prestado pela AlliedIT: o vínculo é conosco, a entrega é na sua operação, e o custo é OpEx." },
  { q: "O profissional alocado trabalha na minha empresa ou na AlliedIT?", a: "Ele trabalha na sua operação, no seu dia a dia e nas suas prioridades. O vínculo, a gestão administrativa e o acompanhamento ficam com a AlliedIT." },
  { q: "Consigo alocar por quanto tempo? Tem prazo mínimo?", a: "Trabalhamos com contratos por período do projeto. O prazo mínimo é acordado no início e depende do perfil e da senioridade. Fale com o especialista para desenhar o formato." },
  { q: "Como funciona a cobrança?", a: "Mensalidade por profissional alocado, dentro do escopo acordado. Entra como serviço na sua verba de OpEx, sem investimento em contratação nem encargos trabalhistas do seu lado." },
  { q: "E se o profissional não der certo? Consigo trocar?", a: "Sim. Se o perfil não atender, a AlliedIT conduz a substituição sem que você passe por um novo processo seletivo." },
  { q: "Vocês alocam remoto, presencial ou híbrido?", a: "Os três formatos. O modelo é definido conforme a necessidade da sua operação e o perfil do profissional." },
  { q: "Quais perfis e stacks vocês cobrem?", a: "Desenvolvedores back-end, front-end, full-stack e mobile, além de gerente de projeto, Product Owner, Product Manager e Scrum Master. Se a sua demanda for de outro perfil de TI, vale conversar." },
  { q: "Quanto tempo leva pra ter o profissional alocado?", a: "Depende da senioridade e da stack, mas o caminho é bem mais curto que um processo seletivo interno: apresentamos candidatos da nossa rede e você valida." },
];

function Faq() {
  const { openModal } = useLp();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <Reveal variant="fade-up" className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            Perguntas frequentes
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <Accordion type="single" collapsible className="w-full border-t border-border">
            {faqItems.map((it, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-bold text-base sm:text-lg py-5 sm:py-6 hover:no-underline hover:text-gold">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-petrol/70 text-sm sm:text-base leading-relaxed pb-6">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <Reveal variant="fade-up" className="mt-12 flex justify-center">
          <button
            onClick={() => openModal("faq")}
            className="btn-sheen border border-petrol/20 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol hover:text-white transition-colors text-petrol"
          >
            Tirar dúvida com um especialista
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  const { openModal } = useLp();
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-petrol text-white text-center relative overflow-hidden" id="contato">
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 size-[520px] rounded-full bg-gold/10 blur-3xl animate-float-slow" />
      <div className="max-w-4xl mx-auto relative">
        <Reveal variant="fade-up">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-6 block">Próximo passo</span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 text-balance">
            Vamos resolver a sua demanda de TI?
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={220}>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            Em 30 minutos a gente entende o perfil que você precisa, o prazo e o formato, e mostra como alocar sem abrir vaga. Sem compromisso.
          </p>
        </Reveal>
        <Reveal variant="scale-in" delay={340}>
          <button
            onClick={() => openModal("final_cta")}
            className="btn-sheen bg-white text-petrol px-10 sm:px-12 py-5 sm:py-6 text-sm font-bold uppercase tracking-widest hover:bg-gold transition-colors mb-6"
          >
            Falar com especialista
          </button>
        </Reveal>
      </div>
    </section>
  );
}
