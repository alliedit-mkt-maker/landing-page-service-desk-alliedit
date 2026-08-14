import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronDown,
  Handshake,
  Compass,
  ShieldCheck,
  Laptop,
  Tablet,
  Wrench,
  ScanFace,
  Volume2,
  MonitorCog,
  Mic,
  AudioLines,
  Expand,
  type LucideIcon,
} from "lucide-react";

import ogImage from "@/assets/og-image.png.asset.json";
import logoAlliedIt from "@/assets/logo-alliedit.png";

import polyLogo from "@/assets/headsets/poly-hp-logo.png.asset.json";
import v12Img from "@/assets/polystudio/v12.avif.asset.json";
import v52Img from "@/assets/polystudio/v52.avif.asset.json";
import x32Img from "@/assets/polystudio/x32.png.asset.json";
import x52Img from "@/assets/polystudio/x52.png.asset.json";

import bannerHuddle from "@/assets/polystudio/banner-huddle.avif.asset.json";
import bannerMedium from "@/assets/polystudio/banner-medium.avif.asset.json";
import bannerSala from "@/assets/polystudio/banner-sala.png.asset.json";

import teamsLogo from "@/assets/rally/teams-logo.png.asset.json";
import zoomLogo from "@/assets/rally/zoom-logo.png.asset.json";
import meetLogo from "@/assets/rally/google-meet-logo.webp.asset.json";

import { LpProvider, useLp } from "@/components/lp/LpProvider";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";

// Formulário HubSpot dedicado desta LP — preencher quando o ID for criado.
const POLY_STUDIO_FORM_ID = "";

const title = "AlliedIT | Poly Studio V12, X32, V52 e X52 para salas de reunião";
const description =
  "Videoconferência Poly (HP) por tipo de sala: V12 e X32 para huddle rooms, V52 e X52 para salas médias. Modo USB (BYOD) ou independente com o tablet TC10. Revenda, instalação e suporte AlliedIT.";

export const Route = createFileRoute("/poly-studio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://poly-studio.alliedit.com.br/" },
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
    links: [{ rel: "canonical", href: "https://poly-studio.alliedit.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda e instalação de barras de videoconferência Poly Studio (HP)",
          provider: { "@type": "Organization", name: "AlliedIT", url: "https://www.alliedit.com.br" },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: PolyStudioPage,
});

export const polyStudioMeta = { title, description };

export function PolyStudioPage() {
  return (
    <LpProvider modalTitle="Pedir cotação Poly Studio." formId={POLY_STUDIO_FORM_ID || undefined}>
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <main>
          <Hero />
          <Clients centered />
          <Spaces />
          <Modes />
          <HuddleSection />
          <MediumSection />
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
const pillDarkGhost =
  "inline-flex items-center justify-center border border-petrol/30 text-petrol px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors";
const pillDark =
  "inline-flex items-center justify-center border border-petrol bg-petrol text-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-petrol-light transition-colors";

const outlineLight: React.CSSProperties = {
  color: "rgba(255,255,255,0.55)",
  letterSpacing: "0.01em",
};


/* ---------- 1. Hero ---------- */

function Hero() {
  const { openModal } = useLp();
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6"
      style={{
        backgroundImage:
          "radial-gradient(70% 60% at 50% 8%, color-mix(in oklch, var(--gold) 12%, transparent), transparent 70%), linear-gradient(180deg, #ffffff 0%, color-mix(in oklch, var(--petrol) 4%, #ffffff) 60%, #ffffff 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto relative w-full text-center flex flex-col items-center">
        <img src={logoAlliedIt} alt="AlliedIT" className="h-9 sm:h-11 w-auto mb-7 sm:mb-9" />
        <Reveal variant="fade-up">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4 block">
            Poly Studio | HP
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.02] text-ink-mid max-w-4xl">
            Videoconferência Poly para cada tamanho de sala
          </h1>
        </Reveal>

        <Reveal variant="fade-up" delay={220} className="w-full mt-8 mb-8 sm:mt-10 sm:mb-10">
          <img
            src={x52Img.url}
            alt="Barra de videoconferência Poly Studio vista de frente"
            width={1400}
            height={254}
            className="w-full max-w-2xl mx-auto object-contain"
          />
        </Reveal>

        <Reveal variant="fade-up" delay={300}>
          <p className="text-petrol/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Chega de reunião que atrasa 10 minutos por causa do cabo, de quem está no fundo da sala aparecendo pequeno e
            de voz abafada do outro lado da chamada. O Poly Studio resolve imagem, áudio e início de reunião em um
            equipamento só — e a AlliedIT dimensiona a sala certa para você não comprar barra demais nem de menos.
          </p>
        </Reveal>
        <Reveal variant="fade-up" delay={380} className="flex flex-wrap gap-4 justify-center mt-7 sm:mt-8">
          <button onClick={() => openModal("hero")} className={pillDark}>
            Pedir cotação
          </button>
          <a href="#espacos" className={pillDarkGhost}>
            Escolher pela sala ↓
          </a>
        </Reveal>
        <Reveal variant="fade-in" delay={460} className="mt-8 sm:mt-10">
          <img src={polyLogo.url} alt="Poly | HP" className="h-8 sm:h-10 w-auto opacity-90" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 2. Escolha por espaço ---------- */

const spaces: { tag: string; title: string; body: string; models: string; href: string; img: string }[] = [
  {
    tag: "Até 6 pessoas",
    title: "Huddle room",
    body: "Salas pequenas, cabines de reunião e espaços de decisão rápida. Instalação simples, uma barra só resolve.",
    models: "Poly Studio V12 · Poly Studio X32",
    href: "#huddle",
    img: bannerHuddle.url,
  },
  {
    tag: "De 6 a 12 pessoas",
    title: "Sala média",
    body: "Salas de reunião e diretoria: mais alcance de microfone, áudio estéreo e enquadramento inteligente.",
    models: "Poly Studio V52 · Poly Studio X52",
    href: "#sala-media",
    img: bannerMedium.url,
  },
];

function Spaces() {
  return (
    <section id="espacos" className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-t border-petrol/10">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-4 block">
            Comece pelo espaço
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            Que sala você precisa equipar?
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {spaces.map((s, i) => (
            <Reveal as="article" key={s.title} variant="fade-up" delay={i * 120} className="group">
              <a href={s.href} className="block h-full ring-1 ring-petrol/10 bg-white overflow-hidden">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 70%)" }}
                  />
                  <span className="absolute bottom-4 left-5 text-white font-extrabold text-2xl sm:text-3xl tracking-tight">
                    {s.title}
                  </span>
                </div>
                <div className="p-7 border-t-[3px] border-t-gold">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-3">
                    {s.tag}
                  </span>
                  <p className="text-petrol/70 text-sm leading-relaxed mb-4">{s.body}</p>
                  <p className="text-petrol font-bold text-sm">{s.models}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Modos de uso ---------- */

const modes: { icon: LucideIcon; tag: string; title: string; body: string; models: string }[] = [
  {
    icon: Laptop,
    tag: "Modo USB (BYOD)",
    title: "O notebook do usuário conduz a reunião",
    body: "A barra funciona como câmera, microfone e alto-falante USB. Quem entra na sala pluga o cabo e usa Teams, Zoom, Meet ou qualquer plataforma direto do próprio notebook. Zero licença, zero configuração.",
    models: "Poly Studio V12 e V52",
  },
  {
    icon: Tablet,
    tag: "Modo independente",
    title: "A sala tem vida própria, com o tablet TC10",
    body: "A barra roda a plataforma nativamente (Teams Rooms ou Zoom Rooms) e o controlador de mesa TC10 inicia a reunião com um toque. Ideal para salas de uso frequente e agenda cheia.",
    models: "Poly Studio X32 e X52 (+ TC10)",
  },
];

function Modes() {
  const { openModal } = useLp();
  return (
    <section id="modos" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#f8fafb] border-t border-petrol/10">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-4 block">
            Depois, escolha o modo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            USB no notebook ou sala independente?
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {modes.map((m, i) => (
            <Reveal
              as="article"
              key={m.title}
              variant="fade-up"
              delay={i * 120}
              className="h-full flex flex-col bg-white ring-1 ring-petrol/10 border-t-[3px] border-t-gold p-8 sm:p-10"
            >
              <m.icon className="size-7 text-gold mb-5" strokeWidth={1.75} aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-3">
                {m.tag}
              </span>
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 leading-tight text-balance text-ink-mid">
                {m.title}
              </h3>
              <p className="text-petrol/70 text-sm leading-relaxed mb-6">{m.body}</p>
              <p className="mt-auto text-petrol font-bold text-sm">{m.models}</p>
            </Reveal>
          ))}
        </div>
        <Reveal variant="fade-up" delay={240} className="flex justify-center mt-12">
          <button onClick={() => openModal("modos")} className={pillDark}>
            Não sei qual escolher, me ajuda →
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- seções de produto por espaço ---------- */

type Highlight = { icon: LucideIcon; title: string; body: string };
type SpecRow = [string, string];
type Model = {
  name: string;
  mode: string;
  img: string;
  imgAlt: string;
  pitch: string;
  bullets: string[];
  specs: SpecRow[];
};

function SpaceSection({
  id,
  solidWord,
  outlineWord,
  bannerSrc,
  tagline,
  subtitle,
  cta,
  highlights,
  models,
  tone,
}: {
  id: string;
  solidWord: string;
  outlineWord: string;
  bannerSrc: string;
  tagline: string;
  subtitle: string;
  cta: string;
  highlights: Highlight[];
  models: Model[];
  tone: "white" | "light";
}) {
  const { openModal } = useLp();
  return (
    <section
      id={id}
      className="text-petrol relative overflow-hidden border-t border-petrol/10"
      style={{ backgroundColor: tone === "white" ? "#ffffff" : "#eaeef1" }}
    >
      <div className="relative h-[38vh] min-h-[260px] sm:h-[46vh] max-h-[520px] w-full overflow-hidden">
        <img src={bannerSrc} alt="" aria-hidden loading="lazy" className="absolute inset-0 size-full object-cover" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.38) 75%, rgba(0,0,0,0.25) 100%)",
          }}
        />
        <div className="relative h-full flex items-center justify-center px-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.95] text-white text-center">
            <Reveal as="span" variant="fade-up" className="inline-block">
              {solidWord}
            </Reveal>{" "}
            <Reveal as="span" variant="fade-up" delay={180} className="inline-block tracking-normal">
              <span style={outlineLight}>{outlineWord}</span>
            </Reveal>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative px-4 sm:px-6 pt-12 sm:pt-16 pb-20 sm:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fade-up">
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-balance mb-4 text-ink-mid">
              {tagline}
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <p className="text-petrol/70 text-base leading-relaxed mb-7">{subtitle}</p>
          </Reveal>
          <Reveal variant="scale-in" delay={220}>
            <button onClick={() => openModal(id)} className={pillDark}>
              {cta}
            </button>
          </Reveal>
        </div>

        {/* Modelos */}
        <div className="grid md:grid-cols-2 gap-6 mt-14 sm:mt-16">
          {models.map((m, i) => (
            <ModelCard key={m.name} model={m} tone={tone} delay={i * 140} sectionId={id} />
          ))}
        </div>

        {/* Destaques */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mt-16 bg-petrol/10 ring-1 ring-petrol/10">
          {highlights.map((h, i) => (
            <Reveal
              as="article"
              key={h.title}
              variant="fade-up"
              delay={i * 120}
              className={`group h-full p-7 sm:p-8 ${tone === "white" ? "bg-white" : "bg-[#f5f7f9]"} transition-colors hover:bg-petrol`}
            >
              <span className="inline-flex items-center justify-center size-11 border border-gold/40 bg-gold/10 text-gold mb-5 transition-colors group-hover:bg-gold group-hover:text-petrol">
                <h.icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="font-extrabold text-base sm:text-lg leading-tight text-balance mb-2 text-ink-mid transition-colors group-hover:text-white">
                {h.title}
              </h3>
              <p className="text-petrol/65 text-sm leading-relaxed transition-colors group-hover:text-white/70">
                {h.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModelCard({
  model,
  tone,
  delay,
  sectionId,
}: {
  model: Model;
  tone: "white" | "light";
  delay: number;
  sectionId: string;
}) {
  const { openModal } = useLp();
  const [open, setOpen] = useState(false);
  return (
    <Reveal
      as="article"
      variant="fade-up"
      delay={delay}
      className={`h-full flex flex-col ring-1 ring-petrol/10 ${tone === "white" ? "bg-[#f2f5f7]" : "bg-white"}`}
    >
      <div className="p-6 sm:p-8 flex items-center justify-center min-h-[190px]">
        <img src={model.img} alt={model.imgAlt} loading="lazy" className="w-full max-h-40 object-contain" />
      </div>
      <div className="px-6 sm:px-8 pb-8 flex flex-col flex-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">
          {model.mode}
        </span>
        <h3 className="font-extrabold text-xl sm:text-2xl tracking-tight text-ink-mid mb-3">{model.name}</h3>
        <p className="text-petrol/70 text-sm leading-relaxed mb-5">{model.pitch}</p>
        <ul className="space-y-2 mb-6">
          {model.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-petrol/80 leading-relaxed">
              <span className="text-gold font-bold" aria-hidden>
                —
              </span>
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <button
            type="button"
            onClick={() => setOpen((v: boolean) => !v)}
            aria-expanded={open}
            aria-controls={`${sectionId}-${model.name.replace(/\s+/g, "-")}-specs`}
            className="w-full flex items-center justify-between gap-4 border-y border-petrol/15 py-4 text-left"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold font-bold">Ficha técnica</span>
            <span className="flex items-center gap-3 text-petrol text-[11px] uppercase tracking-[0.15em] font-bold">
              {open ? "Fechar" : "Ver detalhes"}
              <ChevronDown className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden />
            </span>
          </button>
          <div id={`${sectionId}-${model.name.replace(/\s+/g, "-")}-specs`} hidden={!open}>
            <dl className="divide-y divide-petrol/10">
              {model.specs.map(([k, v]) => (
                <div key={k} className="grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-5 py-4">
                  <dt className="text-petrol/70 text-xs uppercase tracking-[0.12em] font-bold">{k}</dt>
                  <dd className="text-petrol text-sm leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <button
            onClick={() => openModal(`${sectionId}_${model.name}`)}
            data-product={model.name}
            className={`${pillDark} w-full mt-6`}
          >
            Cotar {model.name} →
          </button>
        </div>
      </div>
    </Reveal>
  );
}

function HuddleSection() {
  return (
    <SpaceSection
      id="huddle"
      solidWord="Huddle"
      outlineWord="Room"
      tone="white"
      bannerSrc={bannerHuddle.url}
      tagline="Sala pequena não pede menos qualidade, pede menos complicação."
      subtitle="Até 6 pessoas: uma única barra com câmera 4K, enquadramento automático e áudio que cobre a mesa inteira. Escolha o V12 se o time prefere plugar o notebook, ou o X32 se a sala precisa ser independente."
      cta="Quero equipar minha huddle room →"
      models={[
        {
          name: "Poly Studio V12",
          mode: "Modo USB (BYOD)",
          img: v12Img.url,
          imgAlt: "Poly Studio V12 vista frontal",
          pitch:
            "A entrada da linha: barra USB plug-and-play para huddle rooms. Conecta no notebook e funciona com qualquer plataforma.",
          bullets: [
            "Câmera 4K com enquadramento automático de grupo",
            "Áudio Poly com cancelamento de eco e supressão de ruído",
            "Conexão USB-C única — sem licença de sala",
            "Gerenciamento remoto pelo Poly Lens",
          ],
          specs: [
            ["Sala", "Huddle e salas pequenas (até 6 pessoas)"],
            ["Câmera", "4K com campo de visão amplo e enquadramento automático"],
            ["Áudio", "Alto-falante integrado + array de microfones com NoiseBlockAI"],
            ["Conectividade", "USB-C (BYOD), Ethernet para gestão"],
            ["Plataformas", "Teams, Zoom, Meet e demais via USB"],
            ["Gestão", "Poly Lens (monitoramento e atualização remota)"],
          ],
        },
        {
          name: "Poly Studio X32",
          mode: "Modo independente (+ TC10)",
          img: x32Img.url,
          imgAlt: "Poly Studio X32 vista frontal",
          pitch:
            "Sala pequena com vida própria: roda Teams Rooms ou Zoom Rooms nativamente, sem PC, com controle de mesa TC10.",
          bullets: [
            "Roda a plataforma nativamente, sem computador na sala",
            "Câmera 4K com DirectorAI e enquadramento de participantes",
            "Também funciona em modo USB quando necessário",
            "Reunião iniciada com um toque no tablet TC10",
          ],
          specs: [
            ["Sala", "Huddle e salas pequenas (até 6 pessoas)"],
            ["Câmera", "4K, campo de visão de 95°, DirectorAI"],
            ["Áudio", "Alto-falantes integrados + microfones com NoiseBlockAI e Acoustic Fence"],
            ["Modos", "Nativo (Teams Rooms / Zoom Rooms) e USB"],
            ["Conectividade", "HDMI, USB, Ethernet, Wi-Fi"],
            ["Controle", "Poly TC10 (opcional, recomendado)"],
          ],
        },
      ]}
      highlights={[
        { icon: Wrench, title: "Instalação em uma peça", body: "Barra única acima ou abaixo da TV — sem rack, sem PC." },
        { icon: ScanFace, title: "Enquadramento automático", body: "A câmera encontra e emoldura quem está na sala." },
        { icon: Volume2, title: "Áudio limpo", body: "NoiseBlockAI corta digitação, ar-condicionado e ruído de corredor." },
        { icon: MonitorCog, title: "Gestão pelo Poly Lens", body: "Inventário, saúde do device e atualização remota." },
      ]}
    />
  );
}

function MediumSection() {
  return (
    <SpaceSection
      id="sala-media"
      solidWord="Sala"
      outlineWord="Média"
      tone="light"
      bannerSrc={bannerMedium.url}
      tagline="Mais gente na mesa, mais exigência de áudio e enquadramento."
      subtitle="De 6 a 12 pessoas: câmera com maior alcance, áudio estéreo e microfones que cobrem a sala inteira. V52 para o time que pluga o notebook, X52 para a sala que roda sozinha com o TC10."
      cta="Quero equipar minha sala de reunião →"
      models={[
        {
          name: "Poly Studio V52",
          mode: "Modo USB (BYOD)",
          img: v52Img.url,
          imgAlt: "Poly Studio V52 vista frontal",
          pitch:
            "Barra USB para salas médias: mesma simplicidade do V12, com alcance de câmera e áudio dimensionados para mais participantes.",
          bullets: [
            "Câmera 4K com enquadramento inteligente para grupos maiores",
            "Áudio estéreo com microfones de maior alcance",
            "Conexão USB única — qualquer plataforma, sem licença de sala",
            "Gerenciamento remoto pelo Poly Lens",
          ],
          specs: [
            ["Sala", "Salas médias (6 a 12 pessoas)"],
            ["Câmera", "4K com enquadramento automático e zoom digital"],
            ["Áudio", "Alto-falantes estéreo + array de microfones com NoiseBlockAI"],
            ["Conectividade", "USB-C (BYOD), Ethernet para gestão"],
            ["Plataformas", "Teams, Zoom, Meet e demais via USB"],
            ["Gestão", "Poly Lens (monitoramento e atualização remota)"],
          ],
        },
        {
          name: "Poly Studio X52",
          mode: "Modo independente (+ TC10)",
          img: x52Img.url,
          imgAlt: "Poly Studio X52 vista frontal",
          pitch:
            "O topo da linha para salas médias: roda Teams Rooms ou Zoom Rooms nativamente, com DirectorAI e áudio de sala cheia.",
          bullets: [
            "Sem PC na sala: plataforma nativa embarcada",
            "DirectorAI com múltiplas câmeras virtuais e speaker framing",
            "Áudio estéreo potente com Acoustic Fence",
            "Expansível com microfones adicionais e controle TC10",
          ],
          specs: [
            ["Sala", "Salas médias (6 a 12 pessoas)"],
            ["Câmera", "4K, DirectorAI com enquadramento de participantes e do orador"],
            ["Áudio", "Alto-falantes estéreo + microfones com NoiseBlockAI e Acoustic Fence"],
            ["Modos", "Nativo (Teams Rooms / Zoom Rooms) e USB"],
            ["Conectividade", "HDMI, USB, Ethernet, Wi-Fi"],
            ["Controle", "Poly TC10 (opcional, recomendado)"],
          ],
        },
      ]}
      highlights={[
        { icon: Mic, title: "Cobertura de mesa longa", body: "Microfones com alcance para toda a sala de reunião." },
        { icon: ScanFace, title: "DirectorAI", body: "Enquadra quem fala e mantém a reunião com cara de estúdio." },
        { icon: AudioLines, title: "Áudio estéreo", body: "Voz nítida também para quem está do outro lado da chamada." },
        { icon: Expand, title: "Pronto para crescer", body: "Microfones e acessórios adicionais conforme a sala muda." },
      ]}
    />
  );
}

/* ---------- Comparativo ---------- */

const compareRows: [string, string, string, string, string][] = [
  ["Tamanho de sala", "Huddle (até 6)", "Huddle (até 6)", "Média (6 a 12)", "Média (6 a 12)"],
  ["Modo de uso", "USB / BYOD", "Independente + USB", "USB / BYOD", "Independente + USB"],
  ["Plataforma nativa", "Não (usa o notebook)", "Teams Rooms / Zoom Rooms", "Não (usa o notebook)", "Teams Rooms / Zoom Rooms"],
  ["Controle TC10", "—", "Recomendado", "—", "Recomendado"],
  ["Áudio", "Mono integrado", "Integrado + Acoustic Fence", "Estéreo", "Estéreo + Acoustic Fence"],
  ["Gestão Poly Lens", "Sim", "Sim", "Sim", "Sim"],
];

function Compare() {
  const { openModal } = useLp();
  return (
    <section id="comparativo" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#f8fafb] border-t border-petrol/10">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            Qual Poly Studio é o certo pra você?
          </h2>
        </Reveal>

        <div className="overflow-x-auto">
          <div className="min-w-[820px] rounded-2xl ring-1 ring-petrol/10 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45)] overflow-hidden bg-white">
            <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr_1fr] bg-[#eaeef1]">
              <span />
              {["Studio V12", "Studio X32", "Studio V52", "Studio X52"].map((h) => (
                <span
                  key={h}
                  className="px-5 py-5 font-extrabold text-sm sm:text-base text-ink-mid border-l border-petrol/10"
                >
                  {h}
                </span>
              ))}
            </div>
            {compareRows.map(([label, a, b, c, d], i) => (
              <Reveal
                key={label}
                variant="fade-up"
                delay={i * 70}
                className={`grid grid-cols-[1.1fr_1fr_1fr_1fr_1fr] border-t border-petrol/10 ${
                  i % 2 === 1 ? "bg-[#f4f7f8]" : "bg-white"
                }`}
              >
                <span className="px-5 py-4 text-[11px] uppercase tracking-[0.12em] font-semibold text-petrol/50 self-center">
                  {label}
                </span>
                {[a, b, c, d].map((v, j) => (
                  <span
                    key={j}
                    className="px-5 py-4 text-sm text-petrol/85 border-l border-petrol/10 self-center"
                  >
                    {v}
                  </span>
                ))}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="fade-up" delay={200} className="flex flex-wrap gap-4 justify-center mt-12">
          <button onClick={() => openModal("compare")} className={pillDark}>
            Pedir cotação →
          </button>
          <a href="#modos" className={pillDarkGhost}>
            Entender os modos de uso
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Certificações ---------- */

const certs = [
  { src: teamsLogo.url, alt: "Microsoft Teams" },
  { src: zoomLogo.url, alt: "Zoom" },
  { src: meetLogo.url, alt: "Google Meet" },
];

function Certifications() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-petrol/10">
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

/* ---------- Por que AlliedIT ---------- */

const whyItems: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Handshake,
    title: "Revendedores autorizados Poly (HP)",
    body: "Produto genuíno, com nota fiscal e procedência garantida.",
  },
  {
    icon: Compass,
    title: "Atendimento consultivo",
    body: "A gente dimensiona a sala e o modo de uso antes de fechar a cotação — nada de comprar barra demais.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia oficial e instalação opcional",
    body: "Entregamos com garantia de fábrica Poly. Se quiser, você contrata também nosso pacote de instalação e configuração da plataforma.",
  },
];

function WhyAllied() {
  const { openModal } = useLp();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6" id="por-que-allied">
      <img
        src={bannerSala.url}
        alt=""
        aria-hidden
        loading="lazy"
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
            Por que comprar seu Poly Studio com a AlliedIT
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

/* ---------- CTA final ---------- */

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
            Conta quantas salas, o tamanho de cada uma e a plataforma que vocês usam. A gente volta com o modelo certo,
            o preço fechado e a instalação inclusa.
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
