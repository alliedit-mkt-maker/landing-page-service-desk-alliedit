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
  Check,
  Minus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ogImage from "@/assets/og-image.png.asset.json";
import heroImage from "@/assets/headsets/logitech-hero.webp.asset.json";
import logitechLogo from "@/assets/headsets/logitech-logo.png.asset.json";
import zw1 from "@/assets/headsets/zw-1.png.asset.json";
import zw2 from "@/assets/headsets/zw-2.webp.asset.json";
import zw3 from "@/assets/headsets/zw-3.webp.asset.json";
import zwl1 from "@/assets/headsets/zwl-1.webp.asset.json";
import zwl2 from "@/assets/headsets/zwl-2.webp.asset.json";
import zwl3 from "@/assets/headsets/zwl-3.webp.asset.json";
import logoAlliedIt from "@/assets/logo-alliedit.png";

import { LpProvider, useLp, pushEvent } from "@/components/lp/LpProvider";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";

const title = "AlliedIT | Headsets Logitech: Zone Wired e Zone Wireless";
const description =
  "Com fio ou sem fio? A AlliedIT ajuda sua empresa a escolher, comparar e padronizar headsets Logitech Zone para atendimento, reunião e trabalho híbrido, com produto genuíno e nota fiscal.";

export const Route = createFileRoute("/headset-logitech")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://headset-logitech.alliedit.com.br/" },
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
    links: [{ rel: "canonical", href: "https://headset-logitech.alliedit.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda de headsets corporativos Logitech",
          provider: { "@type": "Organization", name: "AlliedIT", url: "https://www.alliedit.com.br" },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: LogitechPage,
});

export const logitechMeta = { title, description };

export function LogitechPage() {
  return (
    <LpProvider modalTitle="Pedir cotação de headsets Logitech." formId="5e99da13-3800-4581-b2ea-0ea2fe2de8f4">
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <main>
          <Hero />
          <Clients centered />
          <ZoneWired />
          <ZoneWireless />
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
        alt="Profissional em videochamada usando headset Logitech Zone"
        className="absolute inset-0 size-full object-cover object-center"
        width={1920}
        height={1160}
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
            Headsets corporativos Logitech
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.02] mb-6 sm:mb-8 text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)]">
            Com fio ou sem fio? Depende de como sua equipe trabalha
          </h1>
        </Reveal>
        <Reveal variant="fade-up" delay={200}>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            Metade do time vive na mesa, a outra metade circula entre reunião, home office e viagem. A gente entende o
            seu cenário, compara as duas linhas Zone lado a lado e entrega o parque padronizado, com nota fiscal e
            procedência garantida.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={320}>
          <span className="flex h-8 sm:h-10 w-40 items-center justify-center mb-10">
            <img
              src={logitechLogo.url}
              alt="Logitech"
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
            alt={`Logitech ${name} — foto ${idx + 1}`}
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
            Logitech {name}
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
            data-product={`Logitech ${name}`}
            onClick={() => {
              pushEvent("product_select", { product: `Logitech ${name}` });
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

function ZoneWired() {
  return (
    <ProductSection
      id="zone-wired"
      eyebrow="Operação e atendimento"
      name="Zone Wired"
      headline="Com fio, plug and play, pronto para o expediente inteiro."
      body="O headset de quem passa o dia na mesa em chamada. Conecta no USB e funciona, sem bateria para acabar no meio do atendimento e sem pareamento para o usuário resolver sozinho."
      bullets={[
        "Conexão USB-C com adaptador USB-A incluso",
        "Microfone com redução de ruído e haste ajustável",
        "Controles no cabo para volume, mudo e atender ou encerrar",
        "Certificado para as principais plataformas de reunião corporativa",
      ]}
      specs={[
        { icon: Headset, label: "Biauricular com fio (USB)" },
        { icon: Gauge, label: "Uso intensivo, sem bateria" },
        { icon: FileCheck2, label: "Homologado para UC" },
      ]}
      images={[zw1.url, zw2.url, zw3.url]}
      tone="white"
    />
  );
}

function ZoneWireless() {
  return (
    <ProductSection
      id="zone-wireless"
      eyebrow="Híbrido e mobilidade"
      name="Zone Wireless"
      headline="Sem fio, com cancelamento de ruído para quem vive em reunião."
      body="Para quem alterna entre mesa, sala de reunião e home office. Bluetooth com receptor USB, cancelamento ativo de ruído e autonomia para atravessar o dia sem cabo preso ao computador."
      bullets={[
        "Bluetooth com receptor USB e conexão simultânea a dois dispositivos",
        "Cancelamento ativo de ruído para foco em escritório aberto",
        "Microfone com haste flexível e mute ao levantar",
        "Autonomia para um dia inteiro de chamadas, com carga rápida",
      ]}
      specs={[
        { icon: Bluetooth, label: "Sem fio Bluetooth + receptor" },
        { icon: Sparkles, label: "Cancelamento ativo de ruído" },
        { icon: Gauge, label: "Autonomia para o dia inteiro" },
      ]}
      images={[zwl1.url, zwl2.url, zwl3.url]}
      tone="gray"
      reverse
    />
  );
}

const rows: { label: string; wired: string | boolean; wireless: string | boolean }[] = [
  { label: "Conexão", wired: "USB-C (adaptador USB-A)", wireless: "Bluetooth + receptor USB" },
  { label: "Perfil de uso", wired: "Mesa fixa, atendimento e operação", wireless: "Híbrido, reunião e mobilidade" },
  { label: "Bateria", wired: "Não depende de bateria", wireless: "Dia inteiro, com carga rápida" },
  { label: "Cancelamento ativo de ruído", wired: false, wireless: true },
  { label: "Microfone com redução de ruído", wired: true, wireless: true },
  { label: "Controles no cabo / no fone", wired: "No cabo", wireless: "No fone" },
  { label: "Liberdade de movimento", wired: false, wireless: true },
  { label: "Certificação para plataformas de reunião", wired: true, wireless: true },
  { label: "Melhor custo por posição", wired: true, wireless: false },
];

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Check className="size-5 text-gold mx-auto" strokeWidth={2.5} aria-label="Sim" />;
  if (v === false) return <Minus className="size-5 text-petrol/30 mx-auto" strokeWidth={2.5} aria-label="Não" />;
  return <span className="text-sm text-petrol/75 leading-snug">{v}</span>;
}

function Comparison() {
  const { openModal } = useLp();
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-surface" id="comparativo">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">
            Comparativo direto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid mb-5">
            Zone Wired ou Zone Wireless?
          </h2>
          <p className="text-petrol/70 text-base leading-relaxed">
            Na prática, a maioria das empresas usa os dois: com fio nas posições fixas de atendimento e sem fio para
            quem circula. Compare e monte a combinação que faz sentido para o seu time.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={120}>
          <div className="overflow-x-auto border border-border">
            <table className="w-full min-w-[640px] border-collapse bg-white text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 text-[11px] font-bold uppercase tracking-[0.18em] text-petrol/50">Critério</th>
                  <th className="p-5 text-center text-base font-extrabold text-ink-mid">Zone Wired</th>
                  <th className="p-5 text-center text-base font-extrabold text-ink-mid">Zone Wireless</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-border last:border-b-0">
                    <th scope="row" className="p-5 text-sm font-semibold text-petrol/80">
                      {r.label}
                    </th>
                    <td className="p-5 text-center align-middle">
                      <Cell v={r.wired} />
                    </td>
                    <td className="p-5 text-center align-middle">
                      <Cell v={r.wireless} />
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
    title: "Parceiros oficiais Logitech",
    body: "Somos parceiros e revendedores oficiais Logitech. Produto genuíno, com nota fiscal e procedência garantida.",
  },
  {
    icon: Compass,
    title: "Atendimento consultivo",
    body: "A gente ajuda a definir quantas posições pedem com fio e quantas pedem sem fio, em vez de empurrar o que sobrou em estoque.",
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
        src={heroImage.url}
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
            Por que comprar seu headset Logitech com a AlliedIT
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
            Zone Wired e Zone Wireless e o preço fechado.
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
