import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Compass, ShieldCheck, Users, Expand, Mic, type LucideIcon } from "lucide-react";

import ogImage from "@/assets/og-image.png.asset.json";
import logoAlliedIt from "@/assets/logo-alliedit.png";

import yealinkLogo from "@/assets/headsets/yealink-logo.png.asset.json";
import logitechLogo from "@/assets/rally/logitech-logo.png.asset.json";
import polyLogo from "@/assets/headsets/poly-hp-logo.png.asset.json";

import a40Img from "@/assets/yealinkvc/a40.png.asset.json";
import a50Img from "@/assets/yealinkvc/a50.jpg.asset.json";
import rbHero from "@/assets/rally/rb-hero.webp.asset.json";
import miniHero from "@/assets/rally/mini-hero.webp.asset.json";
import v12Img from "@/assets/polystudio/v12.avif.asset.json";
import x32Img from "@/assets/polystudio/x32.png.asset.json";
import v52Img from "@/assets/polystudio/v52.avif.asset.json";
import x52Img from "@/assets/polystudio/x52.png.asset.json";

import heroRoom from "@/assets/yealinkvc/vc-hero-room.jpg.asset.json";
import bannerHuddle from "@/assets/polystudio/banner-huddle.avif.asset.json";
import bannerMedium from "@/assets/yealinkvc/banner-medium.webp.asset.json";
import bannerSala from "@/assets/polystudio/banner-sala.png.asset.json";

import teamsLogo from "@/assets/rally/teams-logo.png.asset.json";
import zoomLogo from "@/assets/rally/zoom-logo.png.asset.json";
import meetLogo from "@/assets/rally/google-meet-logo.webp.asset.json";

import { LpProvider, useLp } from "@/components/lp/LpProvider";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";

// Formulário HubSpot dedicado desta LP, preencher quando o ID for criado.
const VC_FORM_ID = "aaf63ed6-edf2-45ed-8434-54c3d6d4df0d";

const title = "AlliedIT | Videoconferência Logitech, Poly e Yealink para salas de reunião";
const description =
  "Barras de videoconferência Yealink, Logitech e Poly escolhidas pelo tamanho real da sua sala: huddle rooms e salas médias e grandes. Revenda autorizada, dimensionamento, instalação e suporte AlliedIT.";

export const Route = createFileRoute("/videoconferencia")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://videoconferencia.alliedit.com.br/" },
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
    links: [{ rel: "canonical", href: "https://videoconferencia.alliedit.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda e instalação de videoconferência Logitech, Poly e Yealink",
          provider: { "@type": "Organization", name: "AlliedIT", url: "https://www.alliedit.com.br" },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: VideoconferenciaPage,
});

export const videoconferenciaMeta = { title, description };

export function VideoconferenciaPage() {
  return (
    <LpProvider modalTitle="Pedir cotação de videoconferência." formId={VC_FORM_ID || undefined}>
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <main>
          <Hero />
          <Clients centered />
          <Brands />
          <RoomSections />
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
const pillDark =
  "inline-flex items-center justify-center border border-petrol bg-petrol text-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-petrol-light transition-colors";
const pillDarkGhost =
  "inline-flex items-center justify-center border border-petrol/30 text-petrol px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors";

/* ---------- 1. Hero ---------- */

function Hero() {
  const { openModal } = useLp();
  return (
    <section id="hero" className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 bg-ink">
      <img
        src={heroRoom.url}
        alt="Sala de reunião corporativa equipada com barra de videoconferência"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,14,20,0.80) 0%, rgba(6,14,20,0.52) 45%, rgba(6,14,20,0.90) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 10%, color-mix(in oklch, var(--gold) 14%, transparent), transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative w-full text-center flex flex-col items-center">
        <img src={logoAlliedIt} alt="AlliedIT" className="h-9 sm:h-11 w-auto mb-7 sm:mb-9 brightness-0 invert" />
        <Reveal variant="fade-up">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4 block">
            Videoconferência Logitech · Poly · Yealink
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.02] text-white max-w-4xl">
            O equipamento de videoconferência certo para a sua sala
          </h1>
        </Reveal>
        <Reveal variant="fade-up" delay={300} className="mt-7 sm:mt-8">
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Chega de reunião que atrasa porque o equipamento não conecta, de quem fica de fora do enquadramento e de
            áudio que ninguém entende. A Allied IT ajuda você a escolher entre as três marcas mais confiáveis do
            mercado, pelo tamanho real da sua sala.
          </p>
        </Reveal>
        <Reveal variant="fade-up" delay={380} className="flex flex-wrap gap-4 justify-center mt-8 sm:mt-10">
          <button onClick={() => openModal("hero")} className={pillLight}>
            Pedir cotação
          </button>
          <a
            href="#salas"
            className="inline-flex items-center justify-center border border-white/35 text-white/85 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors"
          >
            Escolher pela sala ↓
          </a>
        </Reveal>
        <Reveal variant="fade-in" delay={460} className="mt-10 sm:mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              { src: yealinkLogo.url, alt: "Yealink", scale: "scale-[0.85]" },
              { src: logitechLogo.url, alt: "Logitech", scale: "" },
              { src: polyLogo.url, alt: "Poly (HP)", scale: "scale-[1.3]" },
            ].map((l) => (
              <span key={l.alt} className="flex h-7 sm:h-9 w-28 sm:w-36 items-center justify-center">
                <img
                  src={l.src}
                  alt={l.alt}
                  loading="lazy"
                  className={`max-h-full max-w-full object-contain brightness-0 invert opacity-85 ${l.scale}`}
                />
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 3. Três marcas ---------- */

const brands = [
  {
    name: "Yealink",
    logo: yealinkLogo.url,
    logoScale: "scale-[0.8]",
    title: "Melhor custo-benefício",
    body: "Para quem equipa várias salas sem abrir mão de qualidade.",
    cta: "Ver opções Yealink →",
  },
  {
    name: "Logitech",
    logo: logitechLogo.url,
    logoScale: "",
    title: "Equilíbrio entre custo e recurso",
    body: "Meio-termo confiável, com o modelo mais buscado do mercado (Rally Bar).",
    cta: "Ver opções Logitech →",
  },
  {
    name: "Poly",
    logo: polyLogo.url,
    logoScale: "scale-[1.25]",
    title: "Performance e qualidade sonora",
    body: "Áudio e vídeo de topo de linha para salas que exigem mais.",
    cta: "Ver opções Poly →",
  },
];

function Brands() {
  const [active, setActive] = useState(0);
  const b = brands[active]!;
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-petrol/10" id="marcas">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="fade-up" className="text-center mb-10 sm:mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-4">
            Três marcas, três perfis de compra
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
            Qual marca combina com a sua operação
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {brands.map((brand, i) => (
            <button
              key={brand.name}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              aria-label={brand.name}
              className={
                (i === active
                  ? "border-petrol opacity-100 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.55)] "
                  : "border-petrol/15 opacity-45 grayscale hover:opacity-90 hover:grayscale-0 hover:border-petrol/40 ") +
                "border-2 bg-white flex items-center justify-center h-16 w-36 sm:w-48 px-6 transition-all"
              }
            >
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className={`max-h-7 max-w-full object-contain ${brand.logoScale}`}
              />
            </button>
          ))}
        </div>

        <article className="border border-petrol/12 bg-surface p-8 sm:p-12 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-4">
            {b.name}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{b.title}</h3>
          <p className="text-petrol/65 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">{b.body}</p>
          <a href="#salas" className={pillDark}>
            {b.cta}
          </a>
        </article>
      </div>
    </section>
  );
}

/* ---------- 4. Escolha pelo tamanho da sala ---------- */

type Product = { brand: string; name: string; body: string; img: string; imgClass?: string };

const huddle: Product[] = [
  {
    brand: "Yealink",
    name: "MeetingBar A40",
    body: "Barra tudo-em-um com câmera dupla (120° combinado) e IA IntelliFocus.",
    img: a40Img.url,
  },
  {
    brand: "Logitech",
    name: "Rally Bar Mini",
    body: "4K, zoom digital 4x, campo de visão 120°, plug-and-play ou modo appliance.",
    img: miniHero.url,
  },
  {
    brand: "Poly (HP)",
    name: "Studio V12",
    body: "Barra USB plug-and-play para huddle (modo BYOD). Alternativa: X32 para sala independente, sem PC.",
    img: v12Img.url,
  },
];

const medium: Product[] = [
  {
    brand: "Yealink",
    name: "MeetingBar A50",
    body: "Câmera tripla 50MP e captação de áudio de até 10 metros.",
    img: a50Img.url,
  },
  {
    brand: "Logitech",
    name: "Rally Bar",
    body: "4K, zoom HD 15x e microfones com alcance de 7 metros para salas maiores.",
    img: rbHero.url,
  },
  {
    brand: "Poly (HP)",
    name: "Studio V52 (BYOD) ou X52 (independente)",
    body: "Áudio estéreo integrado. O X52 tem DirectorAI e Acoustic Fence e roda Teams ou Zoom sem PC.",
    img: x52Img.url,
  },
];

const altModels = [
  { name: "Poly Studio X32", body: "Huddle independente, roda Teams ou Zoom sem notebook.", img: x32Img.url },
  { name: "Poly Studio V52", body: "Sala média em modo USB (BYOD), conectada ao notebook.", img: v52Img.url },
];

function ProductCard({ p }: { p: Product }) {
  const { openModal } = useLp();
  return (
    <article className="group h-full flex flex-col border border-petrol/12 bg-white overflow-hidden">
      <div className="aspect-[4/3] bg-gradient-to-b from-surface to-white flex items-center justify-center p-6 transition-colors group-hover:bg-white">
        <img
          src={p.img}
          alt={`${p.brand} ${p.name}`}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-7 flex flex-col flex-1 border-t border-petrol/10">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold font-semibold mb-3">
          {p.brand}
        </span>
        <h4 className="font-extrabold text-lg mb-3 leading-tight text-balance">{p.name}</h4>
        <p className="text-petrol/65 text-sm leading-relaxed mb-7 flex-1">{p.body}</p>
        <button
          type="button"
          data-product={`${p.brand} ${p.name}`}
          onClick={() => openModal(`produto_${p.name}`)}
          className={pillDark + " self-start"}
        >
          Quero este →
        </button>
      </div>
    </article>
  );
}

function RoomBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-56 sm:h-72 overflow-hidden mb-10 sm:mb-14">
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(6,14,20,0.25) 0%, rgba(6,14,20,0.55) 100%)" }}
      />
    </div>
  );
}

function RoomSections() {
  return (
    <section id="salas" className="bg-surface border-t border-petrol/10">
      <div className="py-16 sm:py-24 px-4 sm:px-6">
        <Reveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-4">
            Escolha pelo tamanho da sala
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
            Comece pelo espaço, não pelo catálogo
          </h2>
          <p className="text-petrol/65 text-sm sm:text-base mt-5 leading-relaxed">
            O tamanho da sala define o campo de visão da câmera e o alcance dos microfones. Veja as opções das três
            marcas para cada cenário.
          </p>
        </Reveal>
      </div>

      {/* Huddle */}
      <div className="pb-16 sm:pb-24">
        <RoomBanner src={bannerHuddle.url} alt="Huddle room com quatro pessoas em reunião por vídeo" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal variant="fade-up" className="mb-10 flex items-start gap-4">
            <Users className="size-7 text-gold shrink-0 mt-1" strokeWidth={1.75} aria-hidden />
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Huddle e salas pequenas</h3>
              <p className="text-petrol/65 text-sm sm:text-base mt-2 leading-relaxed max-w-2xl">
                Salas pequenas de reunião rápida, onde a barra precisa cobrir a mesa inteira sem cabo extra.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {huddle.map((p, i) => (
              <Reveal key={p.name} variant="fade-up" delay={i * 90} className="h-full">
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Médias e grandes */}
      <div className="pb-16 sm:pb-24 bg-white border-t border-petrol/10">
        <RoomBanner src={bannerMedium.url} alt="Sala de reunião média com equipe em videoconferência" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal variant="fade-up" className="mb-10 flex items-start gap-4">
            <Expand className="size-7 text-gold shrink-0 mt-1" strokeWidth={1.75} aria-hidden />
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Salas médias e grandes
              </h3>
              <p className="text-petrol/65 text-sm sm:text-base mt-2 leading-relaxed max-w-2xl">
                Mesa longa, mais participantes e distância maior da câmera. Aqui pesam zoom, enquadramento inteligente
                e alcance de áudio.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {medium.map((p, i) => (
              <Reveal key={p.name} variant="fade-up" delay={i * 90} className="h-full">
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>

          <Reveal
            variant="fade-up"
            delay={200}
            className="mt-10 border-l-[3px] border-l-gold bg-surface p-7 sm:p-9 flex items-start gap-4"
          >
            <Mic className="size-6 text-gold shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden />
            <p className="text-petrol/75 text-sm sm:text-base leading-relaxed">
              <strong className="text-petrol">Atenção ao áudio em salas maiores:</strong> pode ser necessário um sistema
              de microfones de expansão para cobrir toda a mesa. As três marcas suportam expansão (Yealink A50 com
              microfones adicionais, Rally Bar com até 4 Rally Mic Pods e a linha Poly Studio com microfones de mesa). A
              Allied IT dimensiona isso junto com a cotação.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={260} className="mt-14">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-petrol/50 font-semibold mb-6">
              Outras configurações Poly
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {altModels.map((m) => (
                <article key={m.name} className="flex items-center gap-5 border border-petrol/12 bg-surface p-5">
                  <span className="size-24 shrink-0 bg-white flex items-center justify-center p-3">
                    <img src={m.img} alt={m.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </span>
                  <div>
                    <h5 className="font-extrabold text-base mb-1.5">{m.name}</h5>
                    <p className="text-petrol/65 text-sm leading-relaxed">{m.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={320} className="mt-12 flex flex-wrap gap-4">
            <QuoteButton />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function QuoteButton() {
  const { openModal } = useLp();
  return (
    <button onClick={() => openModal("salas")} className={pillDarkGhost}>
      Não sei qual escolher, quero ajuda →
    </button>
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
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface border-t border-petrol/10">
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
    title: "Revendedores autorizados das três marcas",
    body: "Produto genuíno, com nota fiscal e procedência garantida.",
  },
  {
    icon: Compass,
    title: "Atendimento consultivo",
    body: "A gente dimensiona a sala e o modo de uso antes de fechar a cotação, nada de comprar equipamento demais.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de fábrica",
    body: "Todo produto sai com garantia oficial do fabricante, com opção de instalação pela Allied IT.",
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
            Por que comprar sua videoconferência com a Allied IT
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
    <section
      className="py-20 sm:py-32 px-4 sm:px-6 bg-petrol text-white text-center relative overflow-hidden"
      id="contato"
    >
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
            Conta quantas salas, o tamanho de cada uma e a plataforma que vocês usam. A gente volta com o modelo certo e
            o preço fechado.
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
