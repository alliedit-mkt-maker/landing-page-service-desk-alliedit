import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroParticles } from "@/components/site/HeroParticles";

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

// Palavras distribuídas em arco à esquerda do ícone, com ritmo irregular.
const WORDS: { label: string; style: string; delay: string; desktopOnly?: boolean }[] = [
  { label: "Cloud Ops", style: "left-[55%] top-[12%]", delay: "0s" },
  { label: "Cyber Shield 360°", style: "left-[52%] top-[26%]", delay: "1.3s" },
  { label: "Infra Core", style: "left-[50%] top-[42%]", delay: "2.9s" },
  { label: "Product Engineering", style: "left-[54%] top-[58%]", delay: "4.2s" },
  { label: "Inteligência Artificial", style: "left-[64%] top-[76%]", delay: "5.6s", desktopOnly: true },
  { label: "Data Organization", style: "left-[68%] top-[89%]", delay: "7s", desktopOnly: true },
];


function SiteHome() {
  const btnBase =
    "font-inter inline-flex h-11 items-center justify-center whitespace-nowrap px-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200";

  return (
    <section className="relative isolate -mt-[92px] overflow-hidden bg-[#0A0E12] pt-[92px]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 80% 50%, rgba(4,110,139,0.16) 0%, rgba(4,110,139,0.05) 40%, rgba(10,14,18,0) 72%)",
        }}

      />
      <HeroParticles />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        {WORDS.map((w) => (
          <span
            key={w.label}
            className={`site-orbit-word font-inter absolute ${w.style} -translate-x-1/2 whitespace-nowrap text-[12px] tracking-[0.14em] text-white/90 ${
              w.desktopOnly ? "hidden xl:block" : ""
            }`}
            style={{ animationDelay: w.delay }}
          >
            {w.label}
          </span>
        ))}
      </div>


      <div className="relative z-20 mx-auto grid min-h-[86vh] max-w-7xl grid-cols-1 items-center gap-14 px-5 py-20 sm:px-8 lg:min-h-[88vh] lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:py-24">
        <div>
          <h1 className="font-chillax max-w-2xl text-[2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Do suporte à nuvem, da rede à segurança: sua operação de TI em boas mãos
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            A Allied IT assume a complexidade da sua tecnologia com atuação consultiva para a sua
            empresa focar no que faz de melhor.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
  );
}
