import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroParticles } from "@/components/site/HeroParticles";
import { SiteClients } from "@/components/site/SiteClients";
import { SiteServices } from "@/components/site/SiteServices";
import { SiteWhyAllied } from "@/components/site/SiteWhyAllied";
import { SitePartners } from "@/components/site/SitePartners";
import { SiteTestimonials } from "@/components/site/SiteTestimonials";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroBg from "@/assets/site/site-cta-banner.jpg.asset.json";

export const Route = createFileRoute("/site/")({
  head: () => ({
    meta: [
      { title: "Allied IT | Tecnologia que sustenta a sua operação" },
      {
        name: "description",
        content:
          "Allied IT: serviços gerenciados, infraestrutura e produtos de TI para empresas que precisam de operação estável e previsível.",
      },
      { property: "og:title", content: "Allied IT | Tecnologia que sustenta a sua operação" },
      {
        property: "og:description",
        content: "Serviços gerenciados, infraestrutura e produtos de TI para empresas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SiteHome,
});

// Palavras em arco à esquerda do ícone. Todas compartilham o mesmo ciclo de
// animação; o delay é apenas uma defasagem curta e progressiva (onda coesa).
const STAGGER = 0.35; // s entre uma palavra e a seguinte (cascata de cima para baixo)
// Posições seguindo o arco esquerdo do ícone (elipse em torno do símbolo).
const WORDS: { label: string; style: string }[] = [
  { label: "Cloud Ops", style: "left-[67%] top-[10%]" },
  { label: "Cyber Shield 360°", style: "left-[58.5%] top-[26%]" },
  { label: "Infra Core", style: "left-[55.5%] top-[42%]" },
  { label: "Product Engineering", style: "left-[55.5%] top-[58%]" },
  { label: "Inteligência Artificial", style: "left-[58.5%] top-[74%]" },
  { label: "Data Organization", style: "left-[67%] top-[90%]" },
];


function SiteHome() {
  const btnBase =
    "font-inter inline-flex h-11 items-center justify-center whitespace-nowrap px-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200";

  // Reinicia todas as palavras a partir do mesmo instante, mantendo a cascata
  // de cima para baixo mesmo após remontagens (HMR, navegação).
  const wordsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const nodes = wordsRef.current?.querySelectorAll<HTMLElement>(".site-orbit-word");
    nodes?.forEach((node, i) => {
      node.style.animation = "none";
      void node.offsetWidth;
      node.style.animation = "";
      node.style.animationDelay = `${(i * STAGGER).toFixed(2)}s`;
    });
  }, []);


  return (
    <>
    <section className="sticky top-0 z-0 isolate -mt-[92px] overflow-hidden bg-[#0A0E12] pt-[92px]">
      <img
        src={heroBg.url}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.62) 78%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 80% 50%, rgba(4,110,139,0.16) 0%, rgba(4,110,139,0.05) 40%, rgba(10,14,18,0) 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 65% at -5% 105%, rgba(4,110,139,0.42) 0%, rgba(4,110,139,0.22) 30%, rgba(4,110,139,0.08) 55%, rgba(10,14,18,0) 78%)",
        }}
      />
      <HeroParticles />

      <div
        ref={wordsRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
      >
        {WORDS.map((w, i) => (
          <span
            key={w.label}
            className={`site-orbit-word font-inter absolute ${w.style} -translate-x-full whitespace-nowrap text-[12px] tracking-[0.14em] text-white/90`}
            style={{ animationDelay: `${(i * STAGGER).toFixed(2)}s` }}
          >
            {w.label}
          </span>
        ))}
      </div>


      <div className="relative z-20 mx-auto grid min-h-[86vh] max-w-7xl grid-cols-1 items-center gap-14 px-5 py-20 sm:px-8 lg:min-h-[88vh] lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:py-24">
        <div className="text-center lg:text-left">
          <h1 className="font-chillax mx-auto max-w-[24ch] text-[1.9rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.5rem] lg:mx-0 lg:text-[2.9rem]">
            Nós cuidamos da sua TI
            <br />
            Você cuida do seu Negócio
          </h1>
          <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-white/65 sm:text-base lg:mx-0">
            A Allied IT assume a complexidade da sua tecnologia com atuação
            <br className="hidden sm:block" />
            consultiva para a sua empresa focar no que faz de melhor.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
            <Link
              to="/site/contato"
              className={`${btnBase} border border-white hover:bg-white hover:text-[#0A0E12]`}
            >
              Falar com especialista
            </Link>
            <Link
              to="/site/servicos"
              className={`${btnBase} border border-white/30 hover:border-white`}
            >
              Conheça nossas soluções
            </Link>
          </div>
        </div>

        <div className="h-[320px] sm:h-[400px] lg:h-[560px]" aria-hidden="true" />
      </div>
    </section>

      <SiteClients />
      <SiteServices />
      <SiteWhyAllied />
      <SitePartners />
      <SiteTestimonials />
      <SiteCta />
      <SiteFooter />
    </>
  );
}
