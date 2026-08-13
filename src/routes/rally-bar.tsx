import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Compass, ShieldCheck, type LucideIcon } from "lucide-react";

import ogImage from "@/assets/og-image.png.asset.json";
import logoAlliedIt from "@/assets/logo-alliedit.png";
import heroRoom from "@/assets/rally/hero-room.jpg";

import rallyBar01 from "@/assets/rally/rally-bar-graphite-01.webp.asset.json";
import rallyBar02 from "@/assets/rally/rally-bar-graphite-02.webp.asset.json";
import rallyBar04 from "@/assets/rally/rally-bar-graphite-04.webp.asset.json";
import miniOverview from "@/assets/rally/rally-bar-mini-overview.webp.asset.json";
import mini02 from "@/assets/rally/rally-bar-mini-graphite-02.webp.asset.json";
import mini03 from "@/assets/rally/rally-bar-mini-graphite-03.webp.asset.json";
import mini04 from "@/assets/rally/rally-bar-mini-graphite-04.webp.asset.json";

import logitechLogo from "@/assets/rally/logitech-logo.png.asset.json";
import teamsLogo from "@/assets/rally/teams-logo.png.asset.json";
import zoomLogo from "@/assets/rally/zoom-logo.png.asset.json";
import meetLogo from "@/assets/rally/google-meet-logo.webp.asset.json";

import { LpProvider, useLp } from "@/components/lp/LpProvider";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";

// Formulário HubSpot dedicado desta LP — preencher quando o ID for criado.
const RALLY_FORM_ID = "";

const title = "AlliedIT | Logitech Rally Bar e Rally Bar Mini para salas de reunião";
const description =
  "Videoconferência all-in-one Logitech: Rally Bar para salas médias e grandes, Rally Bar Mini para salas pequenas. Revenda oficial, instalação e suporte com a AlliedIT.";

export const Route = createFileRoute("/rally-bar")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://rally-bar.alliedit.com.br/" },
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
    links: [{ rel: "canonical", href: "https://rally-bar.alliedit.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda e instalação de barras de videoconferência Logitech Rally Bar",
          provider: { "@type": "Organization", name: "AlliedIT", url: "https://www.alliedit.com.br" },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: RallyBarPage,
});

export const rallyBarMeta = { title, description };

export function RallyBarPage() {
  return (
    <LpProvider modalTitle="Pedir cotação Rally Bar." formId={RALLY_FORM_ID || undefined}>
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <main>
          <Hero />
          <Clients centered />
          <RallyBarSection />
          <RallyBarMiniSection />
          <Compare />
          <Certifications />
          <WhyAllied />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </LpProvider>
  );
}

/* ---------- shared styles ---------- */

const pillLight =
  "inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-petrol transition-colors";
const pillLightGhost =
  "inline-flex items-center justify-center border border-white/40 text-white/90 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors";
const pillDarkGhost =
  "inline-flex items-center justify-center border border-petrol/30 text-petrol px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors";
const pillDark =
  "inline-flex items-center justify-center border border-petrol bg-petrol text-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-petrol-light transition-colors";

const outlineDark: React.CSSProperties = {
  color: "transparent",
  WebkitTextStroke: "1.5px color-mix(in oklch, var(--petrol) 70%, transparent)",
  paintOrder: "stroke fill",
};

const solidDark: React.CSSProperties = {
  textShadow: "0 1px 0 rgba(255,255,255,0.85), 0 0 22px rgba(255,255,255,0.9)",
};

/* ---------- 1. Hero ---------- */

function Hero() {
  const { openModal } = useLp();
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center py-16 sm:py-20 px-4 sm:px-6"
      style={{
        backgroundImage:
          "radial-gradient(70% 60% at 50% 8%, color-mix(in oklch, var(--gold) 12%, transparent), transparent 70%), linear-gradient(180deg, #ffffff 0%, color-mix(in oklch, var(--petrol) 4%, #ffffff) 60%, #ffffff 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto relative w-full text-center flex flex-col items-center">
        <img src={logoAlliedIt} alt="AlliedIT" className="h-10 sm:h-12 w-auto mb-8 sm:mb-10" />
        <Reveal variant="fade-up">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-5 block">
            Logitech Rally Family
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.02] mb-6 sm:mb-8 text-ink-mid">
            Videoconferência all-in-one para qualquer sala
          </h1>
        </Reveal>
        <Reveal variant="fade-up" delay={220}>
          <p className="text-petrol/70 text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed">
            Da sala pequena à sala de diretoria. Conheça a Rally Bar e a Rally Bar Mini e deixe a AlliedIT cuidar da
            escolha certa, da instalação ao suporte.
          </p>
        </Reveal>
        <Reveal variant="fade-up" delay={320} className="flex flex-wrap gap-4 justify-center">
          <button onClick={() => openModal("hero")} className={pillDark}>
            Pedir cotação
          </button>
          <a href="#rally-bar" className={pillDarkGhost}>
            Ver as duas opções ↓
          </a>
        </Reveal>

        {/* Produto grande e nítido, com assinatura tipográfica sobreposta */}
        <Reveal variant="fade-up" delay={420} className="relative w-full mt-12 sm:mt-16">
          <img
            src={rallyBar01.url}
            alt="Logitech Rally Bar grafite vista de frente"
            className="w-full max-w-4xl mx-auto object-contain animate-float-slow"
          />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
            <span className="relative px-8 py-2">
              <span
                aria-hidden
                className="absolute inset-0 rounded-full backdrop-blur-[2px]"
                style={{
                  background:
                    "radial-gradient(60% 120% at 50% 50%, rgba(255,255,255,0.82), rgba(255,255,255,0) 75%)",
                }}
              />
              <span className="relative text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-petrol">
                <span style={solidDark}>Rally</span>{" "}
                <span style={{ ...outlineDark, filter: "drop-shadow(0 1px 2px rgba(255,255,255,0.95))" }}>Bar</span>
              </span>
            </span>
          </div>
        </Reveal>
        <Reveal variant="fade-in" delay={520} className="mt-10">
          <img src={logitechLogo.url} alt="Logitech" className="h-6 sm:h-7 w-auto opacity-80" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}


/* ---------- product sections ---------- */

type Highlight = { n: string; title: string; body: string };
type SpecRow = [string, string];

function ProductSection({
  id,
  solidWord,
  outlineWord,
  tagline,
  subtitle,
  cta,
  heroSrc,
  heroAlt,
  gallery,
  highlights,
  specs,
  tone,
}: {
  id: string;
  solidWord: string;
  outlineWord: string;
  tagline: string;
  subtitle: string;
  cta: string;
  heroSrc: string;
  heroAlt: string;
  gallery: { src: string; alt: string }[];
  highlights: Highlight[];
  specs: SpecRow[];
  tone: "white" | "light";
}) {
  const { openModal } = useLp();
  const bg = tone === "white" ? "bg-white" : "bg-surface";
  return (
    <section id={id} className={`${bg} text-petrol py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto relative">
        {/* Nome + produto */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.95] text-ink-mid">
            <Reveal as="span" variant="fade-up" className="inline-block">
              {solidWord}
            </Reveal>{" "}
            <Reveal as="span" variant="fade-up" delay={220} className="inline-block">
              <span style={outlineDark}>{outlineWord}</span>
            </Reveal>
          </h2>
        </div>

        <Reveal variant="fade-up" delay={120} className="relative">
          <img
            src={heroSrc}
            alt={heroAlt}
            loading="lazy"
            className="w-full max-w-4xl mx-auto object-contain animate-float-slow"
          />
        </Reveal>

        <div className="max-w-3xl mx-auto text-center mt-10 sm:mt-14">
          <Reveal variant="fade-up">
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-balance mb-4 text-ink-mid">
              {tagline}
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <p className="text-petrol/70 text-base leading-relaxed mb-9">{subtitle}</p>
          </Reveal>
          <Reveal variant="scale-in" delay={220}>
            <button onClick={() => openModal(id)} data-product={solidWord + " " + outlineWord} className={pillDark}>
              {cta}
            </button>
          </Reveal>
        </div>

        {/* Destaques numerados */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((h, i) => (
            <Reveal as="article" key={h.n} variant="fade-up" delay={i * 140} className="border-t-2 border-gold/60 pt-6">
              <span className="font-mono text-gold text-sm tracking-[0.2em] block mb-4">{h.n}</span>
              <h3 className="font-extrabold text-base sm:text-lg leading-tight text-balance mb-2 text-ink-mid">
                {h.title}
              </h3>
              <p className="text-petrol/65 text-sm leading-relaxed">{h.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-20">
          {gallery.map((g, i) => (
            <Reveal
              key={g.src}
              variant="fade-up"
              delay={i * 110}
              className={`${tone === "white" ? "bg-surface" : "bg-white"} ring-1 ring-petrol/10 p-4`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-40 sm:h-48 object-contain" />
            </Reveal>
          ))}
        </div>

        {/* Ficha técnica */}
        <div className="mt-20 max-w-3xl mx-auto">
          <Reveal variant="fade-up">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-6">Ficha técnica</h3>
          </Reveal>
          <dl className="divide-y divide-petrol/10 border-y border-petrol/15">
            {specs.map(([k, v], i) => (
              <Reveal
                key={k}
                variant="fade-up"
                delay={i * 70}
                className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-6 py-4"
              >
                <dt className="text-petrol/45 text-xs uppercase tracking-[0.12em] font-semibold">{k}</dt>
                <dd className="text-petrol/85 text-sm leading-relaxed">{v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

      </div>
    </section>
  );
}

function RallyBarSection() {
  return (
    <ProductSection
      id="rally-bar"
      solidWord="Rally"
      outlineWord="Bar"
      tone="white"
      tagline="A barra de vídeo para salas que não perdoam ruído nem falha."
      subtitle="Salas médias e grandes, até 15x de zoom HD e microfones com alcance de 7 metros."
      cta="Quero a Rally Bar →"
      heroSrc={rallyBar01.url}
      heroAlt="Logitech Rally Bar grafite vista de frente"
      gallery={[
        { src: rallyBar02.url, alt: "Rally Bar em ângulo lateral" },
        { src: rallyBar04.url, alt: "Rally Bar com controle remoto" },
        { src: rallyBar01.url, alt: "Rally Bar de frente" },
      ]}
      highlights={[
        { n: "01", title: "Câmera PTZ com zoom HD de 15x", body: "5x óptico + 3x digital, campo de visão de 90°." },
        {
          n: "02",
          title: "Áudio com IA",
          body: "6 microfones MEMS com alcance de até 7 m, cancelamento de eco e supressão de ruído.",
        },
        {
          n: "03",
          title: "Gestão remota com Logitech Sync",
          body: "Monitore e atualize os equipamentos sem sair da mesa.",
        },
        {
          n: "04",
          title: "Compatível com Teams, Zoom e Google Meet",
          body: "Certificada nativamente para as três plataformas.",
        },
      ]}
      specs={[
        ["Dimensões", "910 x 164 x 130,5 mm — peso 7,08 kg"],
        ["Câmera", "4K, zoom HD 15x (5x óptico + 3x digital), campo de visão 90°"],
        ["Áudio", "2 alto-falantes de 70 mm, 6 microfones, captação até 7 m"],
        ["Conectividade", "HDMI in/out, USB-A/C, Ethernet 10/100/1G, Wi-Fi 802.11a/b/g/n/ac"],
        ["Mic Pods adicionais", "Compatível com até 4 Rally Mic Pods"],
        ["Garantia", "2 anos padrão (extensões de 1 e 3 anos disponíveis)"],
      ]}
    />
  );
}

function RallyBarMiniSection() {
  return (
    <ProductSection
      id="rally-bar-mini"
      solidWord="Rally Bar"
      outlineWord="Mini"
      tone="light"
      tagline="Toda a potência da Rally, no tamanho certo pra sala pequena."
      subtitle="Salas pequenas e médias, plug-and-play, com a mesma qualidade de áudio e vídeo da linha Rally."
      cta="Quero a Rally Bar Mini →"
      heroSrc={miniOverview.url}
      heroAlt="Logitech Rally Bar Mini instalada em sala de reunião"
      gallery={[
        { src: mini02.url, alt: "Rally Bar Mini em ângulo" },
        { src: mini03.url, alt: "Rally Bar Mini com controle remoto" },
        { src: mini04.url, alt: "Rally Bar Mini vista traseira" },
      ]}
      highlights={[
        { n: "01", title: "Câmera PTZ com zoom digital HD de 4x", body: "Campo de visão de 120°." },
        { n: "02", title: "Áudio com IA", body: "6 microfones MEMS, alcance de até 7 metros." },
        { n: "03", title: "Plug-and-play", body: "Funciona com qualquer PC/laptop ou no modo appliance." },
        {
          n: "04",
          title: "Compatível com Teams, Zoom e Google Meet",
          body: "Pronta para a plataforma que sua empresa já usa.",
        },
      ]}
      specs={[
        ["Dimensões", "719 x 91,4 x 101 mm — peso 4,03 kg"],
        ["Câmera", "4K, zoom digital HD 4x, campo de visão 120°"],
        ["Áudio", "1 woofer de 70 mm + 2 médios de 43 mm, 6 microfones, alcance até 7 m"],
        ["Conectividade", "HDMI in/out, USB-A/C, Ethernet 10/100/1G, Wi-Fi 802.11a/b/g/n/ac"],
        ["Mic Pods adicionais", "Compatível com até 3 Rally Mic Pods"],
        ["Garantia", "2 anos padrão (extensões de 1 e 3 anos disponíveis)"],
      ]}
    />
  );
}

/* ---------- 4. Comparativo ---------- */

const compareRows: [string, string, string][] = [
  ["Tamanho de sala", "Média e grande", "Pequena e média"],
  ["Zoom de câmera", "15x (5x óptico + 3x digital)", "4x digital"],
  ["Campo de visão", "90°", "120°"],
  ["Mic Pods adicionais", "Até 4", "Até 3"],
  ["Peso", "7,08 kg", "4,03 kg"],
];

function Compare() {
  const { openModal } = useLp();
  return (
    <section id="comparativo" className="py-20 sm:py-28 px-4 sm:px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
            Rally Bar ou Rally Bar Mini — qual é a sua sala?
          </h2>
        </Reveal>

        <div className="overflow-x-auto">
          <div className="min-w-[560px]">
            <div className="grid grid-cols-3 gap-4 pb-4 border-b-2 border-petrol/20">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/45" />
              <span className="font-extrabold text-lg">Rally Bar</span>
              <span className="font-extrabold text-lg">Rally Bar Mini</span>
            </div>
            {compareRows.map(([label, a, b], i) => (
              <Reveal
                key={label}
                variant="fade-up"
                delay={i * 90}
                className="grid grid-cols-3 gap-4 py-4 border-b border-petrol/10"
              >
                <span className="text-xs uppercase tracking-[0.12em] font-semibold text-petrol/50">{label}</span>
                <span className="text-sm text-petrol/85">{a}</span>
                <span className="text-sm text-petrol/85">{b}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="fade-up" delay={200} className="flex flex-wrap gap-4 justify-center mt-12">
          <button onClick={() => openModal("compare_rally_bar")} data-product="Rally Bar" className={pillDark}>
            Quero a Rally Bar →
          </button>
          <button
            onClick={() => openModal("compare_rally_bar_mini")}
            data-product="Rally Bar Mini"
            className="inline-flex items-center justify-center border border-petrol/30 text-petrol px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors"
          >
            Quero a Rally Bar Mini →
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 5. Certificações ---------- */

const certs = [
  { src: teamsLogo.url, alt: "Microsoft Teams" },
  { src: zoomLogo.url, alt: "Zoom" },
  { src: meetLogo.url, alt: "Google Meet" },
];

function Certifications() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal variant="fade-up">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">Certificada para empresas</h2>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <p className="text-petrol/60 text-sm sm:text-base mb-12">
            Compatível com as plataformas de videoconferência que sua empresa já usa.
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {certs.map((c, i) => (
            <Reveal key={c.alt} variant="fade-up" delay={i * 120}>
              <img src={c.src} alt={c.alt} loading="lazy" className="h-8 sm:h-10 w-auto object-contain" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Por que AlliedIT ---------- */

const whyItems: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Handshake,
    title: "Revendedores autorizados Logitech",
    body: "Produto genuíno, com nota fiscal e procedência garantida.",
  },
  {
    icon: Compass,
    title: "Atendimento consultivo",
    body: "A gente ajuda a dimensionar a sala certa, Rally Bar ou Mini, antes de fechar a cotação.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de fábrica",
    body: "Todo produto sai com garantia oficial Logitech, com opção de extensão.",
  },
];

function WhyAllied() {
  const { openModal } = useLp();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6" id="por-que-allied">
      <img
        src={heroRoom}
        alt=""
        aria-hidden
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.74) 45%, rgba(0,0,0,0.58) 78%, rgba(0,0,0,0.42) 100%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <Reveal variant="fade-up" className="mb-10 sm:mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-white">
            Por que comprar sua Rally Bar com a AlliedIT
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {whyItems.map((it, i) => (
            <Reveal
              as="article"
              key={it.title}
              variant="fade-up"
              delay={i * 90}
              className="h-full flex flex-col border-t-[3px] border-t-gold bg-white/10 backdrop-blur-md ring-1 ring-white/10 p-8 sm:p-10"
            >
              <it.icon className="size-7 text-gold mb-5" strokeWidth={1.75} aria-hidden />
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 leading-tight text-balance text-white">
                {it.title}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">{it.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal variant="fade-up" delay={280} className="mt-10">
          <button onClick={() => openModal("why_allied")} className={pillLight}>
            Pedir cotação
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 7. CTA final ---------- */

function FinalCta() {
  const { openModal } = useLp();
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-petrol text-white text-center relative overflow-hidden" id="contato">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 size-[520px] rounded-full bg-gold/10 blur-3xl animate-float-slow"
      />
      <div className="max-w-4xl mx-auto relative">
        <Reveal variant="fade-up">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-6 block">Próximo passo</span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 text-balance">
            Vamos montar a sua cotação?
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={220}>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            Conta o tamanho da sala e a plataforma que vocês usam. A gente volta com o modelo certo, o preço fechado e a
            instalação inclusa.
          </p>
        </Reveal>
        <Reveal variant="scale-in" delay={340}>
          <button
            onClick={() => openModal("final_cta")}
            className="inline-flex items-center justify-center bg-white text-petrol px-10 sm:px-12 py-5 text-[12px] font-bold uppercase tracking-[0.18em] hover:bg-gold transition-colors"
          >
            Solicitar cotação
          </button>
        </Reveal>
      </div>
    </section>
  );
}
