import { createFileRoute } from "@tanstack/react-router";
import ogImage from "@/assets/og-image.png.asset.json";
import nestleLogo from "@/assets/cases/nestle-puravida-logo.png.asset.json";
import { LpProvider, useLp } from "@/components/lp/LpProvider";
import { SiteHeader } from "@/components/lp/SiteHeader";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const title = "AlliedIT | Cabeamento estruturado, fibra óptica e data center";
const description =
  "Projeto, instalação e certificação de cabeamento estruturado, fibra óptica e data center. Cada ponto testado, documentação as-built e equipe que opera TI corporativa há +7 anos.";

export const Route = createFileRoute("/cabeamento")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/cabeamento" },
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
    links: [{ rel: "canonical", href: "/cabeamento" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Cabeamento estruturado, fibra óptica e data center",
          provider: { "@type": "Organization", name: "AlliedIT", url: "https://www.alliedit.com.br" },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: CabeamentoPage,
});

function CabeamentoPage() {
  return (
    <LpProvider modalTitle="Vamos falar do seu projeto de cabeamento." formId="55119813-69a4-4a8e-be94-69d84b3f7476">
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <SiteHeader />
        <main>
          <Hero />
          <Clients />
          <Services />
          <WhyAllied />
          <Process />
          <Proof />
          <CaseNestle />
          <Testimonials />
          <Faq />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </LpProvider>
  );
}

const heroBullets = [
  "Cada ponto testado e certificado, com laudo em mãos",
  "Documentação completa: planta, etiquetagem e as-built",
  "Equipe própria que atende em todo o Brasil",
];

function Hero() {
  const { openModal } = useLp();
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center py-24 sm:py-32 px-4 sm:px-6"
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
              Infraestrutura física de TI
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-balance leading-[0.95] mb-6 sm:mb-8 text-ink-mid">
              Cabo todo mundo passa
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={160}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-balance leading-[1.05] mb-8 sm:mb-10 text-petrol/70">
              Nós entregamos rede que dura mais que a reforma.
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <p className="text-petrol/70 text-base sm:text-lg max-w-3xl mb-8 sm:mb-10 leading-relaxed">
              Projeto, instalação e certificação de cabeamento estruturado, fibra óptica e data center.
            </p>
          </Reveal>
          <ul className="flex flex-col gap-4 sm:gap-5 mb-10 sm:mb-12">
            {heroBullets.map((b, i) => (
              <Reveal as="li" key={b} variant="fade-up" delay={300 + i * 100} className="flex items-start gap-3">
                <div aria-hidden className="size-5 rounded-full border-2 border-gold shrink-1 mt-0.5 animate-soft-pulse" />
                <p className="text-sm font-medium leading-snug text-petrol/90">{b}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal variant="fade-up" delay={620}>
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

const services = [
  {
    title: "Cabeamento estruturado",
    desc: "Uma gama completa de serviços de cabeamento de dados e voz, incluindo Cat 5e, Cat 6 e Cat 6A.",
    items: ["Cat5e, Cat6, Cat6A", "Patch panels e racks", "Etiquetagem e organização", "Certificação ponto a ponto"],
  },
  {
    title: "Fibra óptica",
    desc: "Projetos, instalação, emendas, testes e certificação. Backbone de alta capacidade entre prédios, andares e data centers.",
    items: ["Monomodo e multimodo", "Fusão e conectorização", "Medição OTDR e power meter", "Lançamento interno e externo"],
  },
  {
    title: "Organização de rack",
    desc: "Serviço de padronização de racks, com documentação, mapeamento e identificação de cada ponto.",
    items: ["Montagem e padronização", "Cable management estruturado", "Mapeamento e identificação", "Documentação as-built"],
  },
  {
    title: "CFTV IP alta definição",
    desc: "Projetos de segurança eletrônica. Proteção para sua empresa, clientes e funcionários.",
    items: ["Câmeras IP full HD e 4K", "Projeto e dimensionamento", "Gravação e armazenamento", "Acesso remoto seguro"],
  },
  {
    title: "Certificação de rede",
    desc: "Análise apurada do seu sistema de cabeamento, garantindo velocidade e performance da sua rede.",
    items: ["Teste com certificadora", "Laudo ponto a ponto", "Diagnóstico de falhas", "Relatório final completo"],
  },
];

function Services() {
  const { openModal } = useLp();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol/[0.02]" id="servicos">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">Cinco frentes</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            Tudo que sua infraestrutura precisa
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((s, i) => (
            <Reveal as="article" key={s.title} variant="fade-up" delay={i * 100} className="bg-surface p-6 sm:p-8 flex flex-col group transition-colors hover:bg-petrol hover:text-white relative overflow-hidden">
              <span className="font-mono text-[11px] text-gold mb-4">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-extrabold text-lg sm:text-xl mb-4 leading-tight text-balance text-ink-mid group-hover:text-white transition-colors">{s.title}</h3>
              <p className="text-petrol/80 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{s.desc}</p>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out mt-0 group-hover:mt-6">
                <ul className="overflow-hidden space-y-2 border-t border-white/0 group-hover:border-white/15 pt-0 group-hover:pt-4 transition-all">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-white/80">
                      <span aria-hidden className="text-gold mt-0.5">→</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal variant="fade-up" delay={services.length * 100} className="contents">
            <button onClick={() => openModal("services_cta")} className="bg-petrol text-white p-6 sm:p-8 flex flex-col justify-between text-left group hover:bg-petrol-light transition-colors relative overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute -top-12 -right-12 size-48 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-4 block">Próximo passo</span>
                <h3 className="font-extrabold text-lg sm:text-xl mb-4 leading-tight text-balance">Vamos falar sobre o seu projeto?</h3>
                <p className="text-white/75 text-sm leading-relaxed">Conta o que você precisa.</p>
              </div>
              <span className="relative mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-gold">
                Fale conosco <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </button>
          </Reveal>
        </div>

        <Reveal variant="fade-up" className="mt-12 flex justify-center">
          <button
            onClick={() => openModal("services")}
            className="btn-sheen bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
          >
            Falar com especialista
          </button>
        </Reveal>
      </div>
    </section>
  );
}

const whyItems = [
  { title: "Certificação de verdade", body: "Todo ponto testado com certificadora e laudo entregue. Você sabe que funciona, não acredita que funciona." },
  { title: "Documentação que sobra", body: "Planta, etiquetagem e as-built. Quando alguém mexer na rede daqui a dois anos, vai entender o que foi feito." },
  { title: "Quem opera, instala", body: "Não somos só empreiteira de cabo. Operamos TI corporativa, então projetamos pensando em quem vai dar suporte depois." },
  { title: "Obra sem bagunça", body: "Cronograma, equipe identificada e cuidado com o ambiente. Funciona em obra nova ou com a operação rodando." },
];

function WhyAllied() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="por-que">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            A diferença está no acabamento
          </h2>
          <p className="text-petrol/60 text-base sm:text-lg">
            Tem muita gente que puxa cabo. Pouca que entrega documentado, certificado e pensado pra quem vai operar aquilo no dia seguinte.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {whyItems.map((it, i) => (
            <Reveal as="article" key={it.title} variant="fade-up" delay={i * 90} className="bg-surface p-6 sm:p-8 group transition-colors hover:bg-petrol/[0.04]">
              <span className="font-mono text-[11px] text-gold mb-4 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 leading-tight text-balance text-ink-mid">{it.title}</h3>
              <p className="text-petrol/70 text-sm leading-relaxed">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { title: "Levantamento", body: "Visita ao local, entendimento da operação e do que a rede precisa suportar." },
  { title: "Projeto", body: "Planta, dimensionamento e orçamento fechado. Você aprova antes de qualquer cabo." },
  { title: "Execução", body: "Lançamento, terminação e organização com equipe própria e cronograma." },
  { title: "Certificação", body: "Teste de cada ponto, laudo e documentação as-built entregues no fim." },
];

function Process() {
  const { openModal } = useLp();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol text-white overflow-hidden relative" id="como-funciona">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 relative">
        <Reveal variant="slide-right">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">Como funciona</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-balance text-white">
            Do site survey ao laudo na sua mão
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-8 sm:mb-10 max-w-md">
            Quatro etapas claras. Sem cabo passado antes da hora, sem surpresa no orçamento, sem entrega sem documentação.
          </p>
          <button
            onClick={() => openModal("process")}
            className="btn-sheen bg-gold text-petrol px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Falar com especialista
          </button>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {steps.map((s, i) => (
            <Reveal as="article" key={s.title} variant="scale-in" delay={i * 100} className="bg-petrol p-6 sm:p-8 transition-colors hover:bg-petrol-light">
              <span className="font-mono text-[11px] text-gold mb-3 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-bold mb-3 text-lg">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol/[0.02]" id="prova">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">+7 anos de operação</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            Infraestrutura que aguenta a operação
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
          <Stat n="+7" label="anos operando TI corporativa em setores que não param" />
          <Stat n="100%" label="dos pontos certificados e documentados na entrega" />
          <Stat n="5" label="setores atendidos: saúde, varejo, farma, logística e hotelaria" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="bg-surface p-8 sm:p-10">
      <div className="text-5xl sm:text-6xl font-extrabold text-ink-mid leading-none">{n}</div>
      <div className="mt-4 font-mono text-[11px] uppercase tracking-widest text-petrol/60 leading-relaxed">{label}</div>
    </div>
  );
}

const testimonials = [
  { quote: "[DEPOIMENTO 1 — placeholder, preencher depois]", who: "Nome, Cargo — Empresa" },
  { quote: "[DEPOIMENTO 2 — placeholder, preencher depois]", who: "Nome, Cargo — Empresa" },
];

function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="depoimentos">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">Na palavra de quem contratou</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            O melhor termômetro não é o que falamos
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {testimonials.map((t, i) => (
            <Reveal as="blockquote" key={i} variant="fade-up" delay={i * 120} className="bg-surface p-6 sm:p-8 flex flex-col">
              <div className="text-gold text-3xl leading-none mb-4 font-serif">"</div>
              <p className="text-petrol/90 text-sm leading-relaxed mb-6 flex-1">{t.quote}</p>
              <cite className="not-italic font-mono text-[11px] uppercase tracking-widest text-petrol/60 border-t border-border pt-4">
                {t.who}
              </cite>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseNestle() {
  const { openModal } = useLp();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol/[0.02]" id="case-nestle">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            Projetos que sustentam operações que não podem parar
          </h2>
          <p className="text-petrol/60 text-base sm:text-lg">
            Quando a fábrica depende da rede pra produzir, a infraestrutura precisa ser invisível, no bom sentido.
          </p>
        </Reveal>

        <Reveal variant="scale-in" className="bg-surface border border-border overflow-hidden hover-lift">
          <div className="grid md:grid-cols-2">
            <div className="aspect-square md:aspect-auto bg-petrol relative grid place-items-center p-8 sm:p-12 overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 size-60 rounded-full bg-gold/15 blur-3xl animate-float-slow" />
              <div className="text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-6 block">Case em destaque</span>
                <img
                  src={nestleLogo.url}
                  alt="Nestlé Puravida"
                  className="mx-auto h-36 sm:h-44 md:h-48 w-auto"
                />
                <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/40">
                  <span>Indústria alimentícia</span>
                  <span>·</span>
                  <span>Wi-Fi corporativo</span>
                  <span>·</span>
                  <span>Infraestrutura</span>
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-10 md:p-14 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6 leading-tight text-balance text-ink-mid">
                Cobertura Wi-Fi ponta a ponta em ambiente fabril crítico
              </h3>
              <p className="text-petrol/70 mb-8 leading-relaxed">
                Projetamos e executamos a infraestrutura de cabeamento estruturado e Wi-Fi da planta da Nestlé Puravida, cobrindo áreas de produção, expedição e administrativo. O desafio era entregar uma rede capaz de sustentar uma operação 24/7, com interferência de maquinário pesado e zero tolerância a parada. Fizemos site survey, projeto de pontos de acesso, lançamento de fibra, certificação ponto a ponto e validação de cobertura, entregando uma rede pronta para a rotina industrial, sem improviso.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-border">
                <CaseStat n="100%" label="Pontos certificados na entrega" />
                <CaseStat n="Wi-Fi" label="Cobertura ponta a ponta na planta" />
                <CaseStat n="Zero" label="Parada de produção na obra" />
              </div>
              <button
                onClick={() => openModal("case_nestle")}
                className="self-start font-bold text-xs uppercase tracking-widest border-b-2 border-petrol pb-1 hover:border-gold hover:text-gold transition-colors"
              >
                Quero ser o próximo case
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CaseStat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-ink-mid leading-none">{n}</div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-petrol/50">{label}</div>
    </div>
  );
}



const faq = [
  { q: "Vocês atendem fora de São Paulo?", a: "Sim. Operamos projetos em múltiplas cidades e atendemos empresas com várias unidades. Conte onde estão os sites e a gente avalia a logística no levantamento." },
  { q: "Conseguem trabalhar com a operação rodando?", a: "Sim. Boa parte das obras acontece em ambiente que não pode parar. A gente planeja janelas, faz por etapas e identifica a equipe pra interferir o mínimo possível no dia a dia." },
  { q: "O que entra na certificação?", a: "Cada ponto é testado com equipamento certificador, e você recebe o laudo de todos eles. Em fibra, medimos com OTDR e power meter. A documentação as-built acompanha a entrega." },
  { q: "Como é feito o orçamento?", a: "Começa com um levantamento no local pra entender o ambiente e o que a rede precisa suportar. A partir daí entregamos projeto e orçamento fechado, você aprova antes de qualquer execução." },
  { q: "Fazem só cabeamento ou também a operação depois?", a: "Os dois. A AlliedIT opera Service Desk, NOC e SOC. Dá pra contratar só a infraestrutura física ou já deixar a operação de TI no mesmo time que conhece a sua rede de ponta a ponta." },
  { q: "Trabalham com fibra monomodo e multimodo?", a: "Sim, os dois tipos, com fusão, conectorização e medição. Backbone entre prédios, interligação de data centers ou lançamento interno, avaliamos qual solução faz sentido no projeto." },
];

function Faq() {
  const { openModal } = useLp();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <Reveal variant="fade-up" className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            O que perguntam antes de fechar
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <Accordion type="single" collapsible className="w-full border-t border-border">
            {faq.map((it, i) => (
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
            Falar com especialista
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
            Vamos falar sobre a sua infraestrutura?
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={220}>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            Conta o que você precisa: obra nova, reforma, ampliação ou só uma rede que vive caindo. A gente faz o levantamento e volta com projeto e orçamento fechado. Sem compromisso.
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
