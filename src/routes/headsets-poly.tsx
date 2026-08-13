import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Compass, ShieldCheck, Headset, Bluetooth, FileCheck2, RefreshCw, Sparkles, Gauge, MonitorCog, ChevronLeft, ChevronRight } from "lucide-react";

import ogImage from "@/assets/og-image.png.asset.json";
import heroImage from "@/assets/headsets/hero-headset.jpg";
import polyLogo from "@/assets/headsets/poly-hp-logo.png.asset.json";
import bw1 from "@/assets/headsets/poly-bw-1.jpg.asset.json";
import bw2 from "@/assets/headsets/poly-bw-2.jpg.asset.json";
import bw3 from "@/assets/headsets/poly-bw-3.jpg.asset.json";
import bw4 from "@/assets/headsets/poly-bw-4.jpg.asset.json";
import vf1 from "@/assets/headsets/poly-vf2-1.jpg.asset.json";
import vf2 from "@/assets/headsets/poly-vf2-2.jpg.asset.json";
import vf3 from "@/assets/headsets/poly-vf2-3.jpg.asset.json";
import polyStudio from "@/assets/headsets/poly-studio-clean.png.asset.json";
import logoAlliedIt from "@/assets/logo-alliedit.png";


import { LpProvider, useLp, pushEvent } from "@/components/lp/LpProvider";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";

const title = "AlliedIT | Headsets Poly: Blackwire 3220 e Voyager Focus 2";
const description =
  "Revenda oficial Poly (HP). Blackwire C3220 para operação e call center, Voyager Focus 2 para uso executivo sem fio. Produto genuíno, garantia de fábrica e gestão pelo Poly Lens.";

export const Route = createFileRoute("/headsets-poly")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://headsets-poly.alliedit.com.br/" },
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
    links: [{ rel: "canonical", href: "https://headsets-poly.alliedit.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda de headsets corporativos Poly (HP)",
          provider: { "@type": "Organization", name: "AlliedIT", url: "https://www.alliedit.com.br" },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: PolyPage,
});

export const polyMeta = { title, description };

export function PolyPage() {
  return (
    <LpProvider modalTitle="Pedir cotação de headsets Poly." formId="5e99da13-3800-4581-b2ea-0ea2fe2de8f4">
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <main>
          <Hero />
          <Clients centered />
          <Blackwire />
          <VoyagerFocus />
          <PolyStudio />
          
          <WhyAllied />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </LpProvider>
  );
}

const pillDark =
  "inline-flex items-center justify-center border border-petrol bg-petrol text-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-petrol-light transition-colors";
const pillLight =
  "inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-petrol transition-colors";
const pillLightGhost =
  "inline-flex items-center justify-center border border-white/40 text-white/90 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors";

function Hero() {
  const { openModal } = useLp();
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6" id="hero">
      <img
        src={heroImage}
        alt="Equipe corporativa usando headsets em central de atendimento"
        className="absolute inset-0 size-full object-cover object-center"
        width={1920}
        height={1088}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.32) 78%, rgba(0,0,0,0.06) 92%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="max-w-4xl mx-auto relative w-full text-center flex flex-col items-center">
        <img src={logoAlliedIt} alt="AlliedIT" className="h-12 sm:h-16 w-auto brightness-0 invert mb-10 sm:mb-12 drop-shadow-lg" />

        <Reveal variant="fade-up">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-5 block">
            Headsets corporativos Poly
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.02] mb-6 sm:mb-8 text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)]">
            Sua equipe merece ser ouvida com clareza
          </h1>
        </Reveal>
        <Reveal variant="fade-up" delay={200}>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            Ruído no atendimento, reunião que trava, headset barato que estraga em três meses e TI apagando incêndio.
            A gente resolve isso: entende como sua equipe trabalha, indica o equipamento certo e entrega padronizado,
            com nota fiscal e procedência garantida.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={380}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal("hero_primary")} className={pillLight}>
              Pedir cotação
            </button>
            <a href="#blackwire" className={pillLightGhost}>
              Ver os modelos ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type Spec = { icon: typeof Headset; label: string };

function Gallery({ images, name }: { images: string[]; name: string }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + images.length) % images.length);
  return (
    <div className="relative bg-white border border-border">
      <div className="relative aspect-square w-full overflow-hidden">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Poly ${name} — foto ${idx + 1}`}
            loading="lazy"
            className={`absolute inset-0 size-full object-contain p-6 sm:p-10 transition-opacity duration-300 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center border border-border bg-white/90 text-petrol hover:bg-petrol hover:text-white transition-colors"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center border border-border bg-white/90 text-petrol hover:bg-petrol hover:text-white transition-colors"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((src, idx) => (
              <button
                key={src}
                type="button"
                aria-label={`Ver foto ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`size-2 transition-colors ${idx === i ? "bg-petrol" : "bg-petrol/25"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProductSection({
  id,
  eyebrow,
  name,
  headline,
  body,
  bullets,
  specs,
  images,
  tone,
  reverse,
}: {
  id: string;
  eyebrow: string;
  name: string;
  headline: string;
  body: string;
  bullets: string[];
  specs: Spec[];
  images: string[];
  tone: "white" | "gray";
  reverse?: boolean;
}) {
  const { openModal } = useLp();
  return (
    <section id={id} className={`py-16 sm:py-24 px-4 sm:px-6 ${tone === "gray" ? "bg-petrol/[0.03]" : "bg-surface"}`}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal variant="fade-up" className={reverse ? "lg:order-2" : ""}>
          <Gallery images={images} name={name} />
        </Reveal>


        <Reveal variant="fade-up" delay={120} className={reverse ? "lg:order-1" : ""}>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">{eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight leading-[1.05] text-balance text-ink-mid mb-2">
            Poly {name}
          </h2>
          <p className="text-lg font-semibold text-petrol/80 mb-5">{headline}</p>
          <p className="text-petrol/70 text-base leading-relaxed mb-7">{body}</p>

          <ul className="flex flex-col gap-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span aria-hidden className="mt-1.5 size-2 shrink-0 bg-gold" />
                <span className="text-petrol/80 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-3 gap-px bg-border border border-border mb-8">
            {specs.map((s) => (
              <div key={s.label} className="bg-surface p-4 flex flex-col gap-2">
                <s.icon className="size-5 text-gold" strokeWidth={1.75} aria-hidden />
                <span className="text-xs text-petrol/70 leading-snug">{s.label}</span>
              </div>
            ))}
          </div>

          <button
            data-product={`Poly ${name}`}
            onClick={() => {
              pushEvent("product_select", { product: `Poly ${name}` });
              openModal(`produto_${id}`);
            }}
            className={pillDark}
          >
            Quero este →
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function Blackwire() {
  return (
    <ProductSection
      id="blackwire"
      eyebrow="Operação e call center"
      name="Blackwire C3220"
      headline="Com fio, plug and play, feito para o expediente inteiro."
      body="O headset de trabalho da operação: conecta no USB e funciona. Áudio estéreo, microfone com redução de ruído e hastes almofadadas para quem passa horas em chamada, sem se preocupar com bateria."
      bullets={[
        "Conexão USB-A ou USB-C, direto na máquina do usuário",
        "Microfone com redução de ruído e haste flexível com mute ao levantar",
        "Controles no cabo para volume, mudo e atender/encerrar",
        "Certificado para as principais plataformas de comunicação corporativa",
      ]}
      specs={[
        { icon: Headset, label: "Biauricular com fio (USB)" },
        { icon: Gauge, label: "Uso intensivo, sem bateria" },
        { icon: FileCheck2, label: "Homologado para UC" },
      ]}
      images={[bw1.url, bw2.url, bw3.url, bw4.url]}
      tone="white"
    />
  );
}

function VoyagerFocus() {
  return (
    <ProductSection
      id="voyager-focus-2"
      eyebrow="Executivo e híbrido"
      name="Voyager Focus 2"
      headline="Sem fio, com cancelamento de ruído para quem vive em reunião."
      body="Para diretoria, comercial e quem alterna entre escritório, home office e viagem. Cancelamento ativo de ruído em três níveis, microfone com tecnologia Acoustic Fence e autonomia para o dia todo de chamadas."
      bullets={[
        "Bluetooth com adaptador USB e base carregadora opcional",
        "ANC híbrido em três níveis, para foco em ambiente aberto",
        "Microfone com Acoustic Fence: sua voz entra, o escritório não",
        "Até 19 horas de conversa e alcance amplo dentro do escritório",
      ]}
      specs={[
        { icon: Bluetooth, label: "Sem fio Bluetooth + dongle" },
        { icon: Sparkles, label: "Cancelamento ativo de ruído" },
        { icon: Gauge, label: "Autonomia para o dia inteiro" },
      ]}
      images={[vf1.url, vf2.url, vf3.url]}
      tone="gray"
      reverse
    />
  );
}

const studioItems = [
  {
    icon: MonitorCog,
    title: "Configuração simplificada",
    body: "Detecção automática dos dispositivos e políticas de TI aplicadas antes mesmo do usuário abrir a caixa.",
  },
  {
    icon: Gauge,
    title: "Monitoramento e alertas",
    body: "Saúde dos dispositivos, uso e alertas em um painel só, para TI agir antes do chamado chegar.",
  },
  {
    icon: RefreshCw,
    title: "Atualização remota",
    body: "Firmware e ajustes distribuídos em massa, sem passar mesa por mesa.",
  },
];

function PolyStudio() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-petrol/[0.03]" id="poly-studio">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">
            Hub de gerenciamento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid mb-5">
            Poly Studio: seus headsets sob controle da TI
          </h2>
          <p className="text-petrol/70 text-base leading-relaxed">
            Todo headset Poly conversa com o app de gerenciamento da HP. É onde a TI enxerga o parque inteiro,
            padroniza configuração e resolve o que dá problema sem depender do usuário.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={120} className="mb-12 sm:mb-16">
          <img
            src={polyStudio.url}
            alt="Poly Studio aberto em um notebook e no celular"
            loading="lazy"
            className="w-full max-w-4xl mx-auto h-auto object-contain"
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {studioItems.map((it, i) => (
            <Reveal
              as="article"
              key={it.title}
              variant="fade-up"
              delay={i * 90}
              className="h-full bg-surface p-8 flex flex-col"
            >
              <it.icon className="size-6 text-gold mb-5" strokeWidth={1.75} aria-hidden />
              <h3 className="font-extrabold text-base sm:text-lg text-ink-mid mb-2 leading-tight">{it.title}</h3>
              <p className="text-petrol/70 text-sm leading-relaxed">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


const whyItems = [
  {
    icon: Handshake,
    title: "Parceiros oficiais Poly",
    body: "Somos parceiros e revendedores oficiais Poly (HP). Produto genuíno, com nota fiscal e procedência garantida.",
  },
  {
    icon: Compass,
    title: "Atendimento consultivo",
    body: "A gente ajuda a escolher entre o Blackwire e o Voyager conforme o seu cenário, não empurra o que sobrou em estoque.",
  },
  {
    icon: ShieldCheck,
    title: "Quem entende de TI corporativa",
    body: "Mais de 7 anos operando TI de grandes empresas. Compra, entrega, implantação e suporte com o mesmo time.",
  },
];

function WhyAllied() {
  const { openModal } = useLp();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6" id="por-que-allied">
      <img src={heroImage} alt="" aria-hidden loading="lazy" width={1600} height={900} className="absolute inset-0 size-full object-cover" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <Reveal variant="fade-up" className="mb-10 sm:mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-white">
            Por que comprar seu headset Poly com a AlliedIT
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
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 leading-tight text-balance text-white">{it.title}</h3>
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
            Vamos montar a sua cotação?
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={220}>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            Conta quantas pessoas você precisa equipar e como elas usam o telefone no dia a dia. A gente volta com a
            combinação certa de Blackwire e Voyager e o preço fechado.
          </p>
        </Reveal>
        <Reveal variant="scale-in" delay={340}>
          <button
            onClick={() => openModal("final_cta")}
            className="inline-flex items-center justify-center bg-white text-petrol px-10 sm:px-12 py-5 text-[12px] font-bold uppercase tracking-[0.18em] hover:bg-gold transition-colors mb-6"
          >
            Solicitar cotação
          </button>
        </Reveal>
      </div>
    </section>
  );
}
