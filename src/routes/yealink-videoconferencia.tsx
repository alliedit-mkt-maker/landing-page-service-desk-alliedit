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

import yealinkLogo from "@/assets/headsets/yealink-logo.png.asset.json";
import a40Img from "@/assets/yealinkvc/a40.png.asset.json";
import a50Img from "@/assets/yealinkvc/a50.jpg.asset.json";
import kitS40Img from "@/assets/yealinkvc/kit-s40.webp.asset.json";
import kitS50Img from "@/assets/yealinkvc/kit-s50.jpg.asset.json";

import bannerHuddle from "@/assets/yealinkvc/banner-huddle.webp.asset.json";
import bannerMedium from "@/assets/yealinkvc/banner-medium.webp.asset.json";
import bannerSala from "@/assets/yealinkvc/banner-sala.jpg.asset.json";

import teamsLogo from "@/assets/rally/teams-logo.png.asset.json";
import zoomLogo from "@/assets/rally/zoom-logo.png.asset.json";

import { LpProvider, useLp } from "@/components/lp/LpProvider";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";

// Formulário HubSpot dedicado desta LP, preencher quando o ID for criado.
const YEALINK_VC_FORM_ID = "";

const title = "AlliedIT | Videoconferência Yealink: MeetingBar A40, A50 e kits MVC/ZVC";
const description =
  "Videoconferência Yealink por tamanho de sala: MeetingBar A40 e A50 em modo USB/BYOD, ou kits completos MVC (Teams Rooms) e ZVC (Zoom Rooms). Revenda autorizada, dimensionamento e suporte AlliedIT.";

export const Route = createFileRoute("/yealink-videoconferencia")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://yealink-videoconferencia.alliedit.com.br/" },
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
    links: [{ rel: "canonical", href: "https://yealink-videoconferencia.alliedit.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda e instalação de videoconferência Yealink (MeetingBar, MVC e ZVC)",
          provider: { "@type": "Organization", name: "AlliedIT", url: "https://www.alliedit.com.br" },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: YealinkVcPage,
});

export const yealinkVcMeta = { title, description };

export function YealinkVcPage() {
  return (
    <LpProvider modalTitle="Pedir cotação Yealink." formId={YEALINK_VC_FORM_ID || undefined}>
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
            Videoconferência Yealink
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.02] text-ink-mid max-w-4xl">
            Videoconferência Yealink para cada tamanho de sala
          </h1>
        </Reveal>

        <Reveal variant="fade-up" delay={220} className="w-full mt-8 mb-8 sm:mt-10 sm:mb-10">
          <img
            src={a50Img.url}
            alt="Yealink MeetingBar A50 com painel touch"
            className="w-full max-w-2xl mx-auto object-contain mix-blend-multiply"
          />
        </Reveal>

        <Reveal variant="fade-up" delay={300}>
          <p className="text-petrol/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Chega de reunião que começa atrasada porque ninguém acha o cabo certo, de quem fica de fora do enquadramento
            da câmera e de áudio abafado que faz todo mundo perguntar "pode repetir?". A Yealink resolve câmera, áudio e
            início de reunião em um equipamento só, e a AlliedIT dimensiona a sala certa pra você.
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
          <img src={yealinkLogo.url} alt="Yealink" className="h-7 sm:h-9 w-auto opacity-90" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 2. Escolha por espaço ---------- */

const spaces: { tag: string; title: string; body: string; models: string; href: string; img: string }[] = [
  {
    tag: "Até 6-8 pessoas",
    title: "Huddle room",
    body: "Salas pequenas e espaços de decisão rápida. Uma barra resolve câmera, microfone e alto-falante, instalação simples.",
    models: "MeetingBar A40 · MVC S40 · ZVC S40",
    href: "#huddle",
    img: bannerHuddle.url,
  },
  {
    tag: "De 10 a 20 pessoas",
    title: "Sala média",
    body: "Salas de reunião e diretoria: câmera com mais alcance, captação de áudio de até 10 metros e sala pronta pra rodar sozinha.",
    models: "MeetingBar A50 · MVC S50 · ZVC S50",
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
    tag: "Barra avulsa (BYOD/USB)",
    title: "O notebook de quem está na sala conduz a reunião",
    body: "A barra conecta no notebook e funciona como câmera, microfone e alto-falante. Zero licença adicional, funciona com qualquer plataforma que o notebook já tenha.",
    models: "MeetingBar A40 (huddle) e A50 (média/grande)",
  },
  {
    icon: Tablet,
    tag: "Kit completo (Teams ou Zoom nativo)",
    title: "A sala roda sozinha, sem depender de notebook",
    body: "O kit roda a plataforma direto na sala, inclui mini-PC, painel touch e sensor de presença. Ideal para salas de uso frequente e agenda cheia.",
    models: "MVC S40/S50 (Teams) ou ZVC S40/S50 (Zoom), mesmo hardware, muda o sistema",
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
            Barra avulsa ou kit completo?
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
  ctaLabel?: string;
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
        <img
          src={model.img}
          alt={model.imgAlt}
          loading="lazy"
          className="w-full max-h-44 object-contain mix-blend-multiply"
        />
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
                -
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
            aria-controls={`${sectionId}-${model.name.replace(/[^a-zA-Z0-9]+/g, "-")}-specs`}
            className="w-full flex items-center justify-between gap-4 border-y border-petrol/15 py-4 text-left"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold font-bold">Ficha técnica</span>
            <span className="flex items-center gap-3 text-petrol text-[11px] uppercase tracking-[0.15em] font-bold">
              {open ? "Fechar" : "Ver detalhes"}
              <ChevronDown className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden />
            </span>
          </button>
          <div id={`${sectionId}-${model.name.replace(/[^a-zA-Z0-9]+/g, "-")}-specs`} hidden={!open}>
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
            {model.ctaLabel ?? `Cotar ${model.name}`} →
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
      subtitle="Até 6-8 pessoas: uma solução simples e rápida de instalar. Escolha a MeetingBar A40 se o time prefere plugar o notebook, ou o kit MVC/ZVC S40 se a sala precisa iniciar reunião sozinha."
      cta="Quero equipar minha huddle room →"
      models={[
        {
          name: "MeetingBar A40",
          mode: "Barra avulsa (BYOD/USB)",
          img: a40Img.url,
          imgAlt: "Yealink MeetingBar A40 com console touch",
          pitch:
            "Barra tudo-em-um para salas pequenas: câmera dupla, áudio integrado e instalação com cabo único até o console touch.",
          bullets: [
            "Câmera dupla (2x lentes de 78°) combinando 120° de campo de visão",
            "Sistema de cabo único (Cat5e) ligando a barra ao console touch",
            "IA IntelliFocus: destaque automático de quem está falando",
            "Funciona em modo USB/BYOD ou como parte de um kit completo",
          ],
          specs: [
            ["Câmera", "Dupla, 2x 78° FoV combinando para 120°, IA IntelliFocus"],
            ["Conectividade", "Cabo único (Cat5e) até o console touch; USB-C para compartilhamento/BYOD"],
            ["Modo", "USB/BYOD e/ou kit completo Teams/Zoom"],
            ["Indicado para", "Salas pequenas, uso diário"],
          ],
        },
        {
          name: "MVC S40 / ZVC S40",
          ctaLabel: "Cotar kit S40",
          mode: "Kit completo (Teams ou Zoom)",
          img: kitS40Img.url,
          imgAlt: "Kit Yealink MVC S40 com barra, painel touch, mini-PC e sensor de presença",
          pitch:
            "A sala roda Teams Rooms ou Zoom Rooms nativamente: barra, mini-PC, painel touch e sensor de presença no mesmo kit.",
          bullets: [
            "Câmera SmartVision 40: lentes duplas de 48MP, 120° diagonal / 111° horizontal",
            "8 microfones MEMS, captação até 6 metros, com 2 microfones de expansão opcionais",
            "Inclui mini-PC (MCore), painel touch (MTouch) e sensor de presença (RoomSensor)",
            "Também suporta BYOD com ou sem fio (WPP30), mesmo sendo kit nativo",
          ],
          specs: [
            ["Câmera", "SmartVision 40, dupla lente 48MP, FoV 120° diagonal / 111° horizontal"],
            ["Áudio", "8 microfones MEMS, alcance até 6m, 2 microfones de expansão opcionais"],
            ["Inclui", "Mini-PC (MCore), painel touch (MTouch), sensor de presença (RoomSensor)"],
            ["Plataforma", "Teams Rooms nativo (MVC) ou Zoom Rooms nativo (ZVC), mesmo hardware"],
            ["Indicado para", "Salas pequenas a médias, uso frequente"],
          ],
        },
      ]}
      highlights={[
        { icon: Wrench, title: "Instalação enxuta", body: "Cabo único até o console touch, sem rack e sem PC na sala." },
        { icon: ScanFace, title: "IntelliFocus", body: "A câmera destaca automaticamente quem está falando." },
        { icon: Volume2, title: "Áudio de mesa curta", body: "Microfones MEMS com captação limpa em até 6 metros." },
        { icon: MonitorCog, title: "Nativo ou BYOD", body: "Teams e Zoom nativos no kit, ou notebook via USB quando preciso." },
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
      subtitle="10 a 20 pessoas: câmera com mais alcance e áudio de sala cheia. A MeetingBar A50 para o time que pluga o notebook, o kit MVC/ZVC S50 para a sala que roda sozinha."
      cta="Quero equipar minha sala de reunião →"
      models={[
        {
          name: "MeetingBar A50",
          mode: "Barra avulsa (BYOD/USB)",
          img: a50Img.url,
          imgAlt: "Yealink MeetingBar A50 com painel touch",
          pitch:
            "Câmera tripla e captação de até 10 metros: a barra avulsa dimensionada para salas médias e grandes.",
          bullets: [
            "Câmera tripla: 3 lentes de 50MP (1 grande angular + 2 teleobjetivas)",
            "Captação de áudio até 10 metros e alto-falantes estéreo integrados",
            "IA IntelliFocus e Video Fence para enquadrar só o que importa",
            "Suporta expansão com microfones adicionais",
          ],
          specs: [
            ["Câmera", "Tripla, 3x 50MP (1 grande angular + 2 teleobjetiva)"],
            ["Áudio", "Alcance de captação até 10m, alto-falantes estéreo, suporta microfones de expansão"],
            ["Modo", "USB/BYOD e/ou kit completo Teams/Zoom"],
            ["Indicado para", "Salas médias a grandes"],
          ],
        },
        {
          name: "MVC S50 / ZVC S50",
          ctaLabel: "Cotar kit S50",
          mode: "Kit completo (Teams ou Zoom)",
          img: kitS50Img.url,
          imgAlt: "Kit Yealink MVC S50 com MeetingBar A50, MTouch Plus, mini-PC e sensor de presença",
          pitch:
            "O topo da linha para salas médias e grandes: a própria MeetingBar A50 como câmera do kit, rodando Teams Rooms ou Zoom Rooms sem notebook.",
          bullets: [
            "Usa a MeetingBar A50 como câmera do kit: tripla 50MP, 98° diagonal, vídeo até 4K60",
            "16 microfones MEMS com captação de até 10 metros",
            "Inclui mini-PC (MCore 4), painel touch (MTouch Plus) e sensor de presença (RoomSensor)",
            "Mesma sala pronta para Teams (MVC) ou Zoom (ZVC)",
          ],
          specs: [
            ["Câmera", "MeetingBar A50 integrada, tripla 50MP, FoV 98° diagonal, vídeo até 4K60"],
            ["Áudio", "16 microfones MEMS, alcance até 10m"],
            ["Inclui", "Mini-PC (MCore 4), painel touch (MTouch Plus), sensor de presença (RoomSensor)"],
            ["Plataforma", "Teams Rooms nativo (MVC) ou Zoom Rooms nativo (ZVC), mesmo hardware"],
            ["Indicado para", "Salas médias a grandes, 10-20 pessoas"],
          ],
        },
      ]}
      highlights={[
        { icon: Mic, title: "Captação de 10 metros", body: "Quem fala no fim da mesa é ouvido do mesmo jeito." },
        { icon: ScanFace, title: "Câmera tripla 50MP", body: "Grande angular e teleobjetivas enquadram sem perder nitidez." },
        { icon: AudioLines, title: "Áudio estéreo", body: "Voz nítida também para quem está do outro lado da chamada." },
        { icon: Expand, title: "Pronto para crescer", body: "Microfones de expansão e acessórios conforme a sala muda." },
      ]}
    />
  );
}

/* ---------- Comparativo ---------- */

const compareRows: [string, string, string, string, string][] = [
  ["Modelo", "MeetingBar A40", "MVC / ZVC S40", "MeetingBar A50", "MVC / ZVC S50"],
  ["Tamanho de sala", "Até 6-8 pessoas", "Até 6-8 pessoas", "10-20 pessoas", "10-20 pessoas"],
  ["Precisa de notebook", "Sim", "Não", "Sim", "Não"],
  [
    "Plataforma",
    "Qualquer uma (via notebook)",
    "Teams ou Zoom nativo",
    "Qualquer uma (via notebook)",
    "Teams ou Zoom nativo",
  ],
  ["Alcance de microfone", "- (depende do notebook)", "Até 6m", "- (depende do notebook)", "Até 10m"],
];

function Compare() {
  const { openModal } = useLp();
  return (
    <section id="comparativo" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#f8fafb] border-t border-petrol/10">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            Qual solução Yealink é a certa pra você?
          </h2>
        </Reveal>

        <div className="overflow-x-auto">
          <div className="min-w-[880px] rounded-2xl ring-1 ring-petrol/10 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45)] overflow-hidden bg-white">
            <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr_1fr] bg-[#eaeef1]">
              <span />
              {[
                "Huddle, barra avulsa",
                "Huddle, kit completo",
                "Média/grande, barra avulsa",
                "Média/grande, kit completo",
              ].map((h) => (
                <span
                  key={h}
                  className="px-5 py-5 font-extrabold text-sm text-ink-mid border-l border-petrol/10"
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
                  <span key={j} className="px-5 py-4 text-sm text-petrol/85 border-l border-petrol/10 self-center">
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
            Kits nativos para Microsoft Teams Rooms e Zoom Rooms, e barras que funcionam com qualquer plataforma via
            USB.
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
    title: "Revendedores autorizados Yealink",
    body: "Produto genuíno, com nota fiscal e procedência garantida.",
  },
  {
    icon: Compass,
    title: "Atendimento consultivo",
    body: "A gente ajuda a escolher entre barra avulsa e kit completo, e qual plataforma faz sentido pra sua operação.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de fábrica",
    body: "Todo produto sai com garantia oficial Yealink, com opção de extensão e pacote de instalação opcional.",
  },
];

function WhyAllied() {
  const { openModal } = useLp();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6" id="por-que-allied">
      <img src={bannerSala.url} alt="" aria-hidden loading="lazy" className="absolute inset-0 size-full object-cover" />
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
            Por que comprar sua videoconferência Yealink com a AlliedIT
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
            o preço fechado e a opção de instalação.
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
