import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Headphones, PhoneCall, Bluetooth, Headset, Handshake, Compass, ShieldCheck, type LucideIcon } from "lucide-react";

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
import yealinkLogo from "@/assets/headsets/yealink-logo.png.asset.json";
import logitechLogo from "@/assets/headsets/logitech-logo.png.asset.json";
import polyLogo from "@/assets/headsets/poly-logo.webp.asset.json";
import yealinkLifestyle from "@/assets/headsets/yealink-lifestyle.png.asset.json";
import logitechLifestyle from "@/assets/headsets/logitech-lifestyle.jpg.asset.json";
import polyLifestyle from "@/assets/headsets/poly-lifestyle.jpg.asset.json";
import { LpProvider, useLp, pushEvent } from "@/components/lp/LpProvider";
import logoAlliedIt from "@/assets/logo-alliedit.png";
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
          <Clients centered />
          <Brands />
          <Matrix />
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
            "linear-gradient(0deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.32) 78%, rgba(0,0,0,0.06) 92%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="max-w-4xl mx-auto relative w-full text-center flex flex-col items-center">
        <img
          src={logoAlliedIt}
          alt="AlliedIT"
          className="h-12 sm:h-16 w-auto brightness-0 invert mb-10 sm:mb-12 drop-shadow-lg"
        />

        <Reveal variant="fade-up">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-5 block">
            Headsets corporativos
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-[1.02] mb-6 sm:mb-8 text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)]">
            O headset certo para cada tipo de chamada da sua empresa
          </h1>
        </Reveal>
        <Reveal variant="fade-up" delay={200}>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            Da ligação do dia a dia ao call center de alto volume. A AlliedIT ajuda você a escolher entre as três
            marcas mais confiáveis do mercado e cuida da compra, entrega e suporte depois.
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-10">
          {[
            { src: yealinkLogo.url, alt: "Yealink" },
            { src: logitechLogo.url, alt: "Logitech" },
            { src: polyLogo.url, alt: "Poly" },
          ].map((logo, i) => (
            <Reveal key={logo.alt} variant="fade-up" delay={380 + i * 160}>
              <span className="flex h-7 sm:h-9 w-28 sm:w-36 items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </span>
            </Reveal>
          ))}
        </div>
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
    img: yealinkLifestyle.url,
    logo: yealinkLogo.url,
  },
  {
    name: "Logitech",
    title: "Equilíbrio entre custo e recurso",
    body: "Para quem quer um meio-termo confiável, com recursos modernos, conforto no dia a dia, sem pagar por excesso.",
    img: logitechLifestyle.url,
    logo: logitechLogo.url,
  },
  {
    name: "Poly",
    title: "Performance e qualidade sonora",
    body: "Para quem prioriza o melhor da categoria: áudio, cancelamento de ruído e durabilidade no topo de linha.",
    img: polyLifestyle.url,
    logo: polyLogo.url,
  },
];

function TabPill({
  active,
  onClick,
  children,
  icon: Icon,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        (active
          ? "bg-petrol text-white border border-petrol shadow-[0_10px_30px_-16px_rgba(0,0,0,0.6)] "
          : "border border-petrol/25 text-petrol/70 hover:border-petrol hover:text-petrol ") +
        "inline-flex items-center gap-2.5 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors"
      }
    >
      {Icon ? <Icon size={16} className={active ? "text-gold" : "text-petrol/50"} /> : null}
      {children}
    </button>
  );
}

function BrandTab({
  active,
  onClick,
  logo,
  name,
}: {
  active: boolean;
  onClick: () => void;
  logo: string;
  name: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={name}
      className={
        (active
          ? "border-petrol opacity-100 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.55)] "
          : "border-petrol/15 opacity-45 grayscale hover:opacity-90 hover:grayscale-0 hover:border-petrol/40 ") +
        "border-2 bg-white flex items-center justify-center h-16 w-40 sm:w-48 px-6 transition-all"
      }
    >
      <img src={logo} alt={name} loading="lazy" className="max-h-7 max-w-full object-contain" />
    </button>
  );
}

function Brands() {
  const [active, setActive] = useState(0);
  const b = brands[active];
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol/[0.03]" id="marcas">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="fade-up" className="mb-6 sm:mb-8 max-w-3xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">Como escolher</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            Três marcas, três perfis de compra
          </h2>
        </Reveal>

        <Reveal variant="fade-up" delay={100} className="flex flex-col items-center gap-2 mb-6 sm:mb-8">
          <p className="text-petrol/60 text-sm">Clique e veja qual marca te atende melhor</p>
          <span aria-hidden className="text-gold text-xl leading-none animate-bounce">
            ↓
          </span>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-10">
          {brands.map((br, i) => (
            <BrandTab key={br.name} active={i === active} onClick={() => setActive(i)} logo={br.logo} name={br.name} />
          ))}
        </div>

        <div
          key={b.name}
          className="reveal reveal-in reveal-fade-up overflow-hidden bg-petrol text-white grid md:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative bg-white/5 min-h-[280px]">
            <img src={b.img} alt={`Headset ${b.name} em uso`} loading="lazy" className="absolute inset-0 size-full object-cover" />
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4 block">{b.name}</span>
            <h3 className="font-extrabold text-2xl sm:text-3xl mb-4 leading-tight text-balance">{b.title}</h3>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">{b.body}</p>
            <a href="#comparativo" className={`${pillLightGhost} self-start`}>
              Esse é meu cenário →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



type Product = { brand: string; model: string; desc: string; img: string };

const levels: { level: number; icon: LucideIcon; title: string; subtitle: string; products: Product[] }[] = [
  {
    level: 1,
    icon: Headphones,
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
    icon: PhoneCall,
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
    icon: Bluetooth,
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
    icon: Headset,
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
        <Reveal variant="fade-up" className="mb-6 sm:mb-8 max-w-3xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">Comparativo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            Encontre o melhor modelo
          </h2>
        </Reveal>

        <p className="text-petrol/60 text-sm text-center mb-5">
          Selecione a opção que representa seu cenário atual
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {levels.map((l, i) => (
            <TabPill key={l.level} active={i === active} onClick={() => setActive(i)} icon={l.icon}>
              {l.title}
            </TabPill>
          ))}
        </div>

        <div key={lvl.level}>
          <div className="mb-8 sm:mb-10 flex flex-col items-center gap-3 text-center">
            <LevelDots level={lvl.level} />
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink-mid">{lvl.title}</h3>
            <p className="text-petrol/60 text-sm sm:text-base max-w-2xl">{lvl.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {lvl.products.map((p) => (
              <article
                key={p.model}
                className="group bg-surface border border-border border-t-2 border-t-petrol/15 hover:border-t-gold p-6 sm:p-8 flex flex-col transition-all duration-300 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.45)] hover:-translate-y-1"
              >
                <div className="mb-6 h-56 flex items-center justify-center p-4">
                  <img
                    src={p.img}
                    alt={`${p.brand} ${p.model}`}
                    loading="lazy"
                    className="h-full w-full object-contain mix-blend-multiply drop-shadow-xl transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>

                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-2 block">
                  {p.brand}
                </span>
                <h4 className="mb-3">
                  <span className="relative inline-block overflow-hidden px-3 py-1.5 -ml-3">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-petrol origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    />
                    <span className="relative font-extrabold text-lg text-ink-mid transition-colors duration-300 group-hover:text-white">
                      {p.model}
                    </span>
                  </span>
                </h4>
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
    icon: Handshake,
    title: "Parceiros oficiais das três marcas",
    body: "Compramos direto dos fabricantes Yealink, Logitech e Poly, sem intermediários, sem produto paralelo.",
  },
  {
    icon: Compass,
    title: "Atendimento consultivo",
    body: "A gente ajuda a escolher o modelo certo pro seu cenário, não empurra o que sobrou em estoque.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de fábrica",
    body: "Todo produto sai com garantia oficial do fabricante, suporte de verdade se algo precisar de reparo ou troca.",
  },
];

function WhyAllied() {
  const { openModal } = useLp();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6" id="por-que-allied">
      <img
        src={heroImage}
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
      <div className="max-w-6xl mx-auto relative px-0">
        <Reveal variant="fade-up" className="mb-10 sm:mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-white">
            Por que comprar seu headset com a AlliedIT
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
