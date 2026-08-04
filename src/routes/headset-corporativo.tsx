import { createFileRoute } from "@tanstack/react-router";
import ogImage from "@/assets/og-image.png.asset.json";
import heroImage from "@/assets/headsets/hero-headset.jpg";
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
    <LpProvider modalTitle="Pedir cotação de headsets.">
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <SiteHeader />
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

function Hero() {
  const { openModal } = useLp();
  return (
    <section
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-6"
      id="hero"
      style={{
        backgroundImage:
          "radial-gradient(60% 60% at 85% 0%, color-mix(in oklch, var(--gold) 18%, transparent), transparent 70%), radial-gradient(55% 55% at 0% 50%, color-mix(in oklch, var(--petrol) 10%, transparent), transparent 70%), linear-gradient(180deg, color-mix(in oklch, var(--gold) 8%, var(--surface)) 0%, color-mix(in oklch, var(--gold) 4%, var(--surface)) 55%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto relative w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <Reveal variant="fade-up">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4 sm:mb-6 block">
              Headsets corporativos Yealink · Logitech · Poly
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-balance leading-[0.98] mb-6 sm:mb-8 text-ink-mid">
              O headset certo para cada tipo de chamada da sua empresa
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <p className="text-petrol/70 text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed">
              Da ligação do dia a dia ao call center de alto volume. A AlliedIT ajuda você a escolher entre as três
              marcas mais confiáveis do mercado — e cuida da compra, entrega e suporte depois.
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={300}>
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => openModal("hero_primary")}
                className="btn-sheen bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
              >
                Pedir cotação
              </button>
              <a
                href="#comparativo"
                className="font-bold text-xs uppercase tracking-widest border-b-2 border-petrol/30 pb-1 hover:border-gold hover:text-gold transition-colors"
              >
                Ver comparativo de modelos ↓
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal variant="scale-in" delay={220} className="hidden lg:block">
          <img
            src={heroImage}
            alt="Profissional em chamada corporativa usando headset com microfone em escritório"
            width={1200}
            height={1408}
            className="w-full h-auto max-h-[60vh] object-cover border border-border"
          />
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
  },
  {
    name: "Logitech",
    title: "Equilíbrio entre custo e recurso",
    body: "Para quem quer um meio-termo confiável — recursos modernos, conforto no dia a dia, sem pagar por excesso.",
  },
  {
    name: "Poly",
    title: "Performance e qualidade sonora",
    body: "Para quem prioriza o melhor da categoria — áudio, cancelamento de ruído e durabilidade no topo de linha.",
  },
];

function Brands() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol/[0.02]" id="marcas">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">Como escolher</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            Três marcas, três perfis de compra
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {brands.map((b, i) => (
            <Reveal as="article" key={b.name} variant="fade-up" delay={i * 100} className="bg-surface p-6 sm:p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-5 block">{b.name}</span>
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 leading-tight text-balance text-ink-mid">{b.title}</h3>
              <p className="text-petrol/70 text-sm leading-relaxed">{b.body}</p>
            </Reveal>
          ))}
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
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="comparativo">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">Comparativo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            Encontre o modelo certo para o seu cenário
          </h2>
        </Reveal>

        <div className="flex flex-col gap-12 sm:gap-16">
          {levels.map((lvl) => (
            <div key={lvl.level}>
              <Reveal variant="fade-up" className="mb-6 sm:mb-8 flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <LevelDots level={lvl.level} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-petrol/50">
                    Nível {lvl.level}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink-mid">{lvl.title}</h3>
                <p className="text-petrol/60 text-sm sm:text-base max-w-2xl">{lvl.subtitle}</p>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                {lvl.products.map((p, i) => (
                  <Reveal
                    as="article"
                    key={p.model}
                    variant="fade-up"
                    delay={i * 90}
                    className="bg-surface p-6 sm:p-8 flex flex-col"
                  >
                    <div className="bg-petrol/[0.03] border border-border mb-6 aspect-4/3 grid place-items-center p-4">
                      <img
                        src={p.img}
                        alt={`${p.brand} ${p.model}`}
                        loading="lazy"
                        className="max-h-full max-w-full w-auto object-contain mix-blend-multiply"
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
                      className="self-start font-bold text-xs uppercase tracking-widest border-b-2 border-petrol pb-1 hover:border-gold hover:text-gold transition-colors"
                    >
                      Quero este →
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const whyItems = [
  {
    title: "Compra sem complicação",
    body: "Cotação rápida, sem burocracia, com o modelo certo pro seu cenário — não o que sobrou em estoque.",
  },
  {
    title: "Suporte depois da compra",
    body: "Quem vende também dá suporte. Problema no equipamento, você fala com a gente, não com um SAC genérico.",
  },
  {
    title: "Parceira de TI, não só revenda",
    body: "A AlliedIT já cuida da infraestrutura de TI de centenas de empresas — o headset é parte de uma operação que a gente entende de ponta a ponta.",
  },
];

function WhyAllied() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol/[0.02]" id="por-que-allied">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-ink-mid">
            Por que comprar seu headset com a AlliedIT
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {whyItems.map((it, i) => (
            <Reveal as="article" key={it.title} variant="fade-up" delay={i * 90} className="bg-surface p-6 sm:p-8">
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 leading-tight text-balance text-ink-mid">
                {it.title}
              </h3>
              <p className="text-petrol/70 text-sm leading-relaxed">{it.body}</p>
            </Reveal>
          ))}
        </div>
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
            className="btn-sheen bg-white text-petrol px-10 sm:px-12 py-5 sm:py-6 text-sm font-bold uppercase tracking-widest hover:bg-gold transition-colors mb-6"
          >
            Solicitar cotação
          </button>
        </Reveal>
      </div>
    </section>
  );
}
