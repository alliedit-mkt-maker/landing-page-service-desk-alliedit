import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import ogImage from "@/assets/og-image.png.asset.json";
import heroImage from "@/assets/headsets/hero-headset.jpg";
import officeImage from "@/assets/headsets/office-team.jpg";

import yealinkUh34 from "@/assets/headsets/yealink-uh34.png.asset.json";
import yealinkUh42 from "@/assets/headsets/yealink-uh42.png.asset.json";
import yealinkBh70 from "@/assets/headsets/yealink-bh70.png.asset.json";
import yealinkUh36 from "@/assets/headsets/yealink-uh36.png.asset.json";
import logitechH390 from "@/assets/headsets/logitech-h390.webp.asset.json";
import logitechZoneWired from "@/assets/headsets/logitech-zone-wired.png.asset.json";
import logitechZoneWireless2 from "@/assets/headsets/logitech-zone-wireless-2.png.asset.json";
import logitechH570e from "@/assets/headsets/logitech-h570e.png.asset.json";
import polyBlackwire3220 from "@/assets/headsets/poly-blackwire-3220.png.asset.json";
import polyBlackwire5220 from "@/assets/headsets/poly-blackwire-5220.webp.asset.json";
import polyVoyagerFocus2 from "@/assets/headsets/poly-voyager-focus-2.webp.asset.json";
import polyEncorePro520 from "@/assets/headsets/poly-encorepro-520.png.asset.json";
import { LpProvider, useLp, pushEvent } from "@/components/lp/LpProvider";
import { SiteHeader } from "@/components/lp/SiteHeader";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";

const title = "AlliedIT | Headsets corporativos Yealink, Logitech e Poly";
const description =
  "O headset certo para cada tipo de chamada: do uso diário ao call center de alto volume. Cotação rápida, entrega e suporte com quem entende de TI corporativa.";

export const Route = createFileRoute("/headset-corporativo")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://headset-corporativo.alliedit.com.br/" },
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
    links: [{ rel: "canonical", href: "https://headset-corporativo.alliedit.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda de headsets corporativos Yealink, Logitech e Poly",
          provider: { "@type": "Organization", name: "AlliedIT", url: "https://www.alliedit.com.br" },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: HeadsetPage,
});

export const headsetMeta = { title, description };

export function HeadsetPage() {
  return (
    /* HUBSPOT FORM EMBED GOES HERE — assim que o formulário de cotação de headsets
       for criado no HubSpot, passe o Form ID em formId="<hubspot-form-id>".
       Sem formId, o modal usa o formulário padrão configurado em VITE_HUBSPOT_FORM_ID. */
    <LpProvider modalTitle="Pedir cotação de headsets.">

      <div className="min-h-screen bg-surface text-petrol font-sans">
        <main>
          <Hero />
          <Brands />
          <Matrix />
          <Clients />
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
const pillOutline =
  "inline-flex items-center justify-center border border-petrol/30 text-petrol px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors";
const pillLight =
  "inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-petrol transition-colors";
const pillLightGhost =
  "inline-flex items-center justify-center border border-white/40 text-white/90 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors";

function Hero() {
  const { openModal } = useLp();
  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6"
      id="hero"
    >
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
            "linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.82) 45%, rgba(0,0,0,0.5) 78%, rgba(0,0,0,0.12) 92%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="max-w-4xl mx-auto relative w-full text-center flex flex-col items-center">
        <img
          src={logoAlliedIt}
          alt="AlliedIT"
          className="h-9 sm:h-11 w-auto brightness-0 invert mb-10 sm:mb-12"
        />

        <Reveal variant="fade-up">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-5 block">
            Headsets corporativos Yealink · Logitech · Poly
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.02] mb-6 sm:mb-8 text-white">
            O headset certo para cada tipo de chamada da sua empresa
          </h1>
        </Reveal>
        <Reveal variant="fade-up" delay={200}>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed">
            Da ligação do dia a dia ao call center de alto volume. A AlliedIT ajuda você a escolher entre as três
            marcas mais confiáveis do mercado e cuida da compra, entrega e suporte depois.
          </p>
        </Reveal>
        <Reveal variant="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openModal("hero_primary")} className={pillLight}>
              Pedir cotação
            </button>
            <a href="#comparativo" className={pillLightGhost}>
              Ver comparativo de modelos ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const brands = [
  {
    name: "Yealink",
    title: "Melhor custo-benefício",
    body: "Para quem equipa muita gente sem abrir mão de qualidade. Boa relação entre preço e recurso em toda a linha.",
    img: yealinkBh70.url,
  },
  {
    name: "Logitech",
    title: "Equilíbrio entre custo e recurso",
    body: "Para quem quer um meio-termo confiável, com recursos modernos, conforto no dia a dia, sem pagar por excesso.",
    img: logitechZoneWireless2.url,
  },
  {
    name: "Poly",
    title: "Performance e qualidade sonora",
    body: "Para quem prioriza o melhor da categoria: áudio, cancelamento de ruído e durabilidade no topo de linha.",
    img: polyVoyagerFocus2.url,
  },
];

function TabPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "bg-petrol text-white border border-petrol px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors"
          : "border border-petrol/25 text-petrol/70 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-petrol hover:text-petrol transition-colors"
      }
    >
      {children}
    </button>
  );
}

function Brands() {
  const [active, setActive] = useState(0);
  const b = brands[active];
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol/[0.03]" id="marcas">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="fade-up" className="mb-8 sm:mb-10 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">Como escolher</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            Três marcas, três perfis de compra
          </h2>
        </Reveal>

        <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
          {brands.map((br, i) => (
            <TabPill key={br.name} active={i === active} onClick={() => setActive(i)}>
              {br.name}
            </TabPill>
          ))}
        </div>

        <div
          key={b.name}
          className="reveal reveal-in reveal-fade-up overflow-hidden bg-petrol text-white grid md:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative bg-white/5 flex items-center justify-center p-10 min-h-[240px]">
            <img src={b.img} alt={b.name} loading="lazy" className="max-h-64 w-auto object-contain drop-shadow-2xl" />
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4 block">{b.name}</span>
            <h3 className="font-extrabold text-2xl sm:text-3xl mb-4 leading-tight text-balance">{b.title}</h3>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">{b.body}</p>
            <a href="#comparativo" className={`${pillLightGhost} self-start`}>
              Ver modelos {b.name} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


type Product = { brand: string; model: string; desc: string; img: string };

const levels: { level: number; title: string; subtitle: string; products: Product[] }[] = [
  {
    level: 1,
    title: "Uso diário / entrada",
    subtitle: "Para quem faz chamadas ocasionais e precisa de algo simples e confiável",
    products: [
      {
        brand: "Yealink",
        model: "UH34",
        desc: "Headset USB de entrada, leve e plug and play, indicado para uso corporativo diário.",
        img: yealinkUh34.url,
      },
      {
        brand: "Logitech",
        model: "H390",
        desc: "Headset de entrada USB, com controles no cabo e microfone com redução de ruído.",
        img: logitechH390.url,
      },
      {
        brand: "Poly",
        model: "Blackwire 3220",
        desc: "Headset de entrada com conexão USB, áudio estéreo, controles no cabo e microfone com redução de ruído.",
        img: polyBlackwire3220.url,
      },
    ],
  },
  {
    level: 2,
    title: "Intermediário / uso frequente",
    subtitle: "Para quem está em chamada boa parte do expediente",
    products: [
      {
        brand: "Yealink",
        model: "UH42",
        desc: "Headset USB com fio (USB-C/USB-A), microfone com cancelamento de ruído por IA, indicado para uso corporativo frequente.",
        img: yealinkUh42.url,
      },
      {
        brand: "Logitech",
        model: "Zone Wired",
        desc: "Modelo intermediário com fio, indicado para reuniões, chamadas e uso corporativo frequente.",
        img: logitechZoneWired.url,
      },
      {
        brand: "Poly",
        model: "Blackwire 5220",
        desc: "Modelo intermediário com conexão USB e 3,5 mm, indicado para chamadas frequentes e uso prolongado.",
        img: polyBlackwire5220.url,
      },
    ],
  },
  {
    level: 3,
    title: "Avançado sem fio, com cancelamento de ruído",
    subtitle: "Para quem precisa de mobilidade e silêncio em ambientes movimentados ou trabalho híbrido",
    products: [
      {
        brand: "Yealink",
        model: "BH70",
        desc: "Modelo Bluetooth avançado, com sistema de microfones para redução de ruído e maior mobilidade no trabalho.",
        img: yealinkBh70.url,
      },
      {
        brand: "Logitech",
        model: "Zone Wireless 2",
        desc: "Headset premium Bluetooth com cancelamento ativo de ruído e recursos inteligentes para melhorar a clareza das chamadas.",
        img: logitechZoneWireless2.url,
      },
      {
        brand: "Poly",
        model: "Voyager Focus 2",
        desc: "Headset Bluetooth avançado com cancelamento ativo de ruído, microfones inteligentes e maior liberdade de movimentação.",
        img: polyVoyagerFocus2.url,
      },
    ],
  },
  {
    level: 4,
    title: "Call center / uso intensivo",
    subtitle: "Para operações de atendimento com alto volume de chamadas, o dia inteiro",
    products: [
      {
        brand: "Yealink",
        model: "UH36",
        desc: "Headset USB com fio, projetado para Comunicação Unificada e call center, com boa duração de uso e conexão flexível (USB-A, USB-C e P2).",
        img: yealinkUh36.url,
      },
      {
        brand: "Logitech",
        model: "H570e",
        desc: "Modelo com fio para equipes de atendimento e profissionais que realizam chamadas durante grande parte do expediente.",
        img: logitechH570e.url,
      },
      {
        brand: "Poly",
        model: "EncorePro 520",
        desc: "Modelo com fio, desenvolvido para call centers e operações com alto volume de chamadas, com foco em conforto, durabilidade e clareza de voz.",
        img: polyEncorePro520.url,
      },
    ],
  },
];

function LevelDots({ level }: { level: number }) {
  return (
    <span aria-label={`Nível ${level} de 4`} className="flex items-center gap-1.5">
      {[1, 2, 3, 4].map((n) => (
        <span
          key={n}
          aria-hidden
          className={`size-2 rounded-full ${n <= level ? "bg-gold" : "bg-petrol/15"}`}
        />
      ))}
    </span>
  );
}

function Matrix() {
  const { openModal } = useLp();
  const [active, setActive] = useState(0);
  const lvl = levels[active];
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="comparativo">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-8 sm:mb-10 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">Comparativo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            Encontre o modelo certo para o seu cenário
          </h2>
        </Reveal>

        <div className="flex flex-wrap gap-3 mb-8">
          {levels.map((l, i) => (
            <TabPill key={l.level} active={i === active} onClick={() => setActive(i)}>
              Nível {l.level}
            </TabPill>
          ))}
        </div>

        <div key={lvl.level}>
          <div className="mb-6 sm:mb-8 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <LevelDots level={lvl.level} />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-petrol/50">
                Nível {lvl.level}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink-mid">{lvl.title}</h3>
            <p className="text-petrol/60 text-sm sm:text-base max-w-2xl">{lvl.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {lvl.products.map((p) => (
              <article key={p.model} className="bg-surface p-6 sm:p-8 flex flex-col">
                <div className="mb-6 h-56 flex items-center justify-center p-4">
                  <img
                    src={p.img}
                    alt={`${p.brand} ${p.model}`}
                    loading="lazy"
                    className="h-full w-full object-contain mix-blend-multiply drop-shadow-xl"
                  />
                </div>

                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-2 block">
                  {p.brand}
                </span>
                <h4 className="font-extrabold text-lg mb-3 text-ink-mid">{p.model}</h4>
                <p className="text-petrol/70 text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                <button
                  data-product={`${p.brand} ${p.model}`}
                  onClick={() => {
                    pushEvent("product_select", { product: `${p.brand} ${p.model}`, level: lvl.level });
                    openModal(`matriz_${p.brand.toLowerCase()}_${p.model.toLowerCase().replace(/\s+/g, "_")}`);
                  }}
                  className={`${pillOutline} self-start`}
                >
                  Quero este →
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const whyItems = [
  {
    title: "Compra sem complicação",
    body: "Cotação rápida, sem burocracia, com o modelo certo pro seu cenário, não o que sobrou em estoque.",
  },
  {
    title: "Suporte depois da compra",
    body: "Quem vende também dá suporte. Problema no equipamento, você fala com a gente, não com um SAC genérico.",
  },
  {
    title: "Parceira de TI, não só revenda",
    body: "A AlliedIT já cuida da infraestrutura de TI de centenas de empresas, e o headset é parte de uma operação que a gente entende de ponta a ponta.",
  },
];

function WhyAllied() {
  const { openModal } = useLp();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6" id="por-que-allied">
      <img
        src={officeImage}
        alt=""
        aria-hidden
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-petrol/80" />
      <div aria-hidden className="absolute inset-0 bg-black/40" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal variant="fade-up" className="mb-10 sm:mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-white">
            Por que comprar seu headset com a AlliedIT
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {whyItems.map((it, i) => (
            <Reveal
              as="article"
              key={it.title}
              variant="fade-up"
              delay={i * 90}
              className="bg-black/55 backdrop-blur-sm p-7 sm:p-8"
            >
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
            Conta quantas pessoas você precisa equipar e como elas usam o telefone no dia a dia. A gente volta com os
            modelos certos e o preço fechado.
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
