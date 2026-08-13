import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Handshake,
  Compass,
  ShieldCheck,
  Headset,
  Bluetooth,
  FileCheck2,
  Sparkles,
  Gauge,
  BatteryCharging,
  Check,
  Minus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ogImage from "@/assets/og-image.png.asset.json";
import heroImage from "@/assets/headsets/yl-hero-2.jpg.asset.json";
import bh70Banner from "@/assets/headsets/yl-bh70-banner.webp.asset.json";
import whyImage from "@/assets/headsets/yealink-lifestyle.png.asset.json";
import yealinkLogo from "@/assets/headsets/yealink-logo.png.asset.json";
import bh70Main from "@/assets/headsets/yl-bh70-main.png.asset.json";
import wh64Main from "@/assets/headsets/yl-wh64-main.png.asset.json";
import uh34Main from "@/assets/headsets/yl-uh34-main.jpg.asset.json";
import logoAlliedIt from "@/assets/logo-alliedit.png";

import { LpProvider, useLp, pushEvent } from "@/components/lp/LpProvider";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";

const title = "AlliedIT | Headsets Yealink: BH70, WH64 e UH34 para empresas";
const description =
  "Custo-benefício sem abrir mão de qualidade de áudio. A AlliedIT ajuda sua empresa a escolher e padronizar headsets Yealink para atendimento, operação e trabalho híbrido, com produto genuíno e nota fiscal.";

export const Route = createFileRoute("/headset-yealink")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://headset-yealink.alliedit.com.br/" },
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
    links: [{ rel: "canonical", href: "https://headset-yealink.alliedit.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda de headsets corporativos Yealink",
          provider: { "@type": "Organization", name: "AlliedIT", url: "https://www.alliedit.com.br" },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: YealinkPage,
});

export const yealinkMeta = { title, description };

export function YealinkPage() {
  return (
    <LpProvider modalTitle="Pedir cotação de headsets Yealink." formId="5e99da13-3800-4581-b2ea-0ea2fe2de8f4">
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <main>
          <Hero />
          <Clients centered />
          <Bh70Spotlight />
          <Wh64 />
          <Uh34 />
          <Comparison />
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
        src={heroImage.url}
        alt="Profissional em atendimento usando headset Yealink no escritório"
        className="absolute inset-0 size-full object-cover object-center"
        width={1600}
        height={900}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.35) 78%, rgba(0,0,0,0.08) 92%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="max-w-4xl mx-auto relative w-full text-center flex flex-col items-center">
        <img src={logoAlliedIt} alt="AlliedIT" className="h-12 sm:h-16 w-auto brightness-0 invert mb-10 sm:mb-12 drop-shadow-lg" />

        <Reveal variant="fade-up">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-5 block">
            Headsets corporativos Yealink
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.02] mb-6 sm:mb-8 text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)]">
            Equipe seu time de atendimento com custo-benefício
          </h1>
        </Reveal>
        <Reveal variant="fade-up" delay={200}>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            Áudio profissional, conforto para o expediente inteiro e um parque padronizado que a TI consegue manter. A
            AlliedIT ajuda a escolher o modelo certo para cada posição, com produto genuíno, nota fiscal e garantia.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={320}>
          <span className="flex h-7 sm:h-9 w-36 items-center justify-center mb-10">
            <img
              src={yealinkLogo.url}
              alt="Yealink"
              className="max-h-full max-w-full object-contain brightness-0 invert opacity-85"
            />
          </span>
        </Reveal>

        <Reveal variant="fade-up" delay={380}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal("hero_primary")} className={pillLight}>
              Pedir cotação
            </button>
            <a href="#comparativo" className={pillLightGhost}>
              Ver comparativo ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Bh70Spotlight() {
  const { openModal } = useLp();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6" id="destaque-bh70">
      <img
        src={bh70Banner.url}
        alt=""
        aria-hidden
        loading="lazy"
        width={1216}
        height={631}
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.78) 38%, rgba(0,0,0,0.45) 68%, rgba(0,0,0,0.15) 100%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Reveal variant="fade-up">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-5 block">
              Destaque da linha · Yealink BH70
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance leading-[1.05] text-white mb-5">
              O sem fio que atravessa a semana inteira
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8">
              Para quem alterna entre mesa, reunião e home office e não pode ficar preso ao computador. Autonomia para
              o usuário esquecer que existe carregador e voz limpa mesmo em escritório movimentado.
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={280}>
            <div className="grid sm:grid-cols-3 gap-px bg-white/15 ring-1 ring-white/15 mb-9">
              {[
                { icon: BatteryCharging, label: "Até 35h de conversação com carga rápida" },
                { icon: Bluetooth, label: "Bluetooth com receptor USB e dois dispositivos" },
                { icon: Sparkles, label: "Microfone direcional com redução de ruído" },
              ].map((s) => (
                <div key={s.label} className="bg-black/40 backdrop-blur-sm p-5 flex flex-col gap-2">
                  <s.icon className="size-5 text-gold" strokeWidth={1.75} aria-hidden />
                  <span className="text-xs text-white/80 leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={340}>
            <button
              data-product="Yealink BH70"
              onClick={() => {
                pushEvent("product_select", { product: "Yealink BH70" });
                openModal("destaque_bh70");
              }}
              className={pillLight}
            >
              Quero o BH70
            </button>
          </Reveal>
        </div>

        <Reveal variant="scale-in" delay={180}>
          <div className="bg-white/95 border border-white/20">
            <img
              src={bh70Main.url}
              alt="Yealink BH70"
              loading="lazy"
              className="aspect-square w-full object-contain p-8 sm:p-12"
            />
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
            alt={`Yealink ${name} — foto ${idx + 1}`}
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
            Yealink {name}
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
            data-product={`Yealink ${name}`}
            onClick={() => {
              pushEvent("product_select", { product: `Yealink ${name}` });
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

function Bh70() {
  return (
    <ProductSection
      id="bh70"
      eyebrow="Sem fio, autonomia recorde"
      name="BH70"
      headline="Sem fio para o dia inteiro, com o melhor custo por posição da linha."
      body="Pensado para quem alterna entre mesa, reunião e home office e não pode ficar preso ao computador. Autonomia de até 35 horas de conversação, conexão Bluetooth com receptor USB e microfone que entrega voz limpa mesmo em escritório movimentado."
      bullets={[
        "Até 35 horas de conversação com carga rápida",
        "Bluetooth com receptor USB e conexão a dois dispositivos",
        "Microfone com redução de ruído e captação direcional",
        "Certificado para as principais plataformas de reunião corporativa",
      ]}
      specs={[
        { icon: BatteryCharging, label: "Até 35h de bateria" },
        { icon: Bluetooth, label: "Bluetooth + receptor USB" },
        { icon: FileCheck2, label: "Homologado para UC" },
      ]}
      images={[bh70Main.url]}
      tone="white"
    />
  );
}

function Wh64() {
  return (
    <ProductSection
      id="wh64"
      eyebrow="Sem fio DECT para a mesa"
      name="WH64"
      headline="DECT com base de carga, para quem circula pelo andar sem perder a chamada."
      body="A opção sem fio para posições fixas que precisam de alcance. A base carrega o headset entre as chamadas, mantém a conexão estável longe da mesa e integra com o computador e o telefone IP na mesma estação."
      bullets={[
        "Tecnologia DECT com alcance maior que Bluetooth no escritório",
        "Base de carga que mantém o headset sempre pronto",
        "Conexão com computador e telefone IP na mesma base",
        "Microfone com redução de ruído para ambientes compartilhados",
      ]}
      specs={[
        { icon: Bluetooth, label: "Sem fio DECT com base" },
        { icon: Gauge, label: "Alcance para circular pelo andar" },
        { icon: FileCheck2, label: "Homologado para UC" },
      ]}
      images={[wh64Main.url]}
      tone="gray"
      reverse
    />
  );
}

function Uh34() {
  return (
    <ProductSection
      id="uh34"
      eyebrow="Operação e call center"
      name="UH34"
      headline="Com fio, plug and play, o custo por posição mais enxuto da linha."
      body="O headset de quem passa o expediente inteiro em chamada. Conecta no USB e funciona, sem bateria para acabar no meio do atendimento e sem pareamento para o usuário resolver sozinho. É o padrão ideal para escalar posições de operação."
      bullets={[
        "Conexão USB plug and play, sem instalação",
        "Biauricular com espuma confortável para uso prolongado",
        "Controles no cabo para volume, mudo e atender ou encerrar",
        "Microfone com redução de ruído e haste ajustável",
      ]}
      specs={[
        { icon: Headset, label: "Biauricular com fio (USB)" },
        { icon: Gauge, label: "Uso intensivo, sem bateria" },
        { icon: FileCheck2, label: "Homologado para UC" },
      ]}
      images={[uh34Main.url]}
      tone="white"
    />
  );
}

const rows: { label: string; bh70: string | boolean; wh64: string | boolean; uh34: string | boolean }[] = [
  { label: "Conexão", bh70: "Bluetooth + receptor USB", wh64: "DECT com base", uh34: "USB com fio" },
  {
    label: "Perfil de uso",
    bh70: "Híbrido, reunião e mobilidade",
    wh64: "Mesa fixa com liberdade no andar",
    uh34: "Operação e call center",
  },
  { label: "Bateria", bh70: "Até 35h de conversação", wh64: "Recarrega na base", uh34: "Não depende de bateria" },
  { label: "Liberdade de movimento", bh70: true, wh64: true, uh34: false },
  { label: "Microfone com redução de ruído", bh70: true, wh64: true, uh34: true },
  { label: "Base de carga inclusa", bh70: false, wh64: true, uh34: false },
  { label: "Integração com telefone IP", bh70: false, wh64: true, uh34: false },
  { label: "Certificação para plataformas de reunião", bh70: true, wh64: true, uh34: true },
  { label: "Melhor custo por posição", bh70: false, wh64: false, uh34: true },
];

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Check className="size-5 text-gold mx-auto" strokeWidth={2.5} aria-label="Sim" />;
  if (v === false) return <Minus className="size-5 text-petrol/30 mx-auto" strokeWidth={2.5} aria-label="Não" />;
  return <span className="text-sm text-petrol/75 leading-snug">{v}</span>;
}

function Comparison() {
  const { openModal } = useLp();
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-petrol/[0.03]" id="comparativo">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">
            Comparativo direto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid mb-5">
            BH70, WH64 ou UH34?
          </h2>
          <p className="text-petrol/70 text-base leading-relaxed">
            Na prática, a maioria das empresas combina os três: com fio nas posições fixas de atendimento, DECT em quem
            circula pelo andar e Bluetooth para o time híbrido. Compare e monte a combinação certa.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={120}>
          <div className="overflow-x-auto border border-border">
            <table className="w-full min-w-[760px] border-collapse bg-white text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 text-[11px] font-bold uppercase tracking-[0.18em] text-petrol/50">Critério</th>
                  <th className="p-5 text-center text-base font-extrabold text-ink-mid">BH70</th>
                  <th className="p-5 text-center text-base font-extrabold text-ink-mid">WH64</th>
                  <th className="p-5 text-center text-base font-extrabold text-ink-mid">UH34</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-border last:border-b-0">
                    <th scope="row" className="p-5 text-sm font-semibold text-petrol/80">
                      {r.label}
                    </th>
                    <td className="p-5 text-center align-middle">
                      <Cell v={r.bh70} />
                    </td>
                    <td className="p-5 text-center align-middle">
                      <Cell v={r.wh64} />
                    </td>
                    <td className="p-5 text-center align-middle">
                      <Cell v={r.uh34} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={220} className="mt-10 text-center">
          <button onClick={() => openModal("comparativo")} className={pillDark}>
            Falar com um especialista →
          </button>
        </Reveal>
      </div>
    </section>
  );
}

const whyItems = [
  {
    icon: Handshake,
    title: "Revenda oficial Yealink",
    body: "Produto genuíno, com nota fiscal, garantia e procedência garantida. Nada de mercado paralelo.",
  },
  {
    icon: Compass,
    title: "Atendimento consultivo",
    body: "A gente ajuda a definir quantas posições pedem com fio, DECT ou Bluetooth, em vez de empurrar o que sobrou em estoque.",
  },
  {
    icon: ShieldCheck,
    title: "Quem entende de TI corporativa",
    body: "Mais de 7 anos operando TI de grandes empresas. Compra, entrega e padronização do parque com o mesmo time.",
  },
];

function WhyAllied() {
  const { openModal } = useLp();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6" id="por-que-allied">
      <img
        src={whyImage.url}
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
            "linear-gradient(0deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <Reveal variant="fade-up" className="mb-10 sm:mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-white">
            Por que comprar seu headset Yealink com a AlliedIT
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
            Conta quantas pessoas você precisa equipar e como elas trabalham. A gente volta com a combinação certa de
            BH70, WH64 e UH34 e o preço fechado.
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
