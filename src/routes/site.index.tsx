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

// Palavras em arco à esquerda do ícone. Todas compartilham o mesmo ciclo de
// animação; o delay é apenas uma defasagem curta e progressiva (onda coesa).
const STAGGER = 0.08; // s entre uma palavra e a seguinte
const WORDS: { label: string; style: string; desktopOnly?: boolean }[] = [
  { label: "Cloud Ops", style: "left-[55%] top-[12%]" },
  { label: "Cyber Shield 360°", style: "left-[52%] top-[26%]" },
  { label: "Infra Core", style: "left-[50%] top-[42%]" },
  { label: "Product Engineering", style: "left-[54%] top-[58%]" },
  { label: "Inteligência Artificial", style: "left-[64%] top-[76%]", desktopOnly: true },
  { label: "Data Organization", style: "left-[68%] top-[89%]", desktopOnly: true },
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
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 65% at -5% 105%, rgba(4,110,139,0.42) 0%, rgba(4,110,139,0.22) 30%, rgba(4,110,139,0.08) 55%, rgba(10,14,18,0) 78%)",
        }}
      />
      <HeroParticles />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        {WORDS.map((w, i) => (
          <span
            key={w.label}
            className={`site-orbit-word font-inter absolute ${w.style} -translate-x-1/2 whitespace-nowrap text-[12px] tracking-[0.14em] text-white/90 ${
              w.desktopOnly ? "hidden xl:block" : ""
            }`}
            style={{ animationDelay: `${(i * STAGGER).toFixed(2)}s` }}
          >
            {w.label}
          </span>
        ))}
      </div>


      <div className="relative z-20 mx-auto grid min-h-[86vh] max-w-7xl grid-cols-1 items-center gap-14 px-5 py-20 sm:px-8 lg:min-h-[88vh] lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:py-24">
        <div className="text-center lg:text-left">
          <h1 className="font-chillax mx-auto max-w-[19ch] text-[1.9rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.5rem] lg:mx-0 lg:text-[2.9rem]">
            Do suporte à nuvem, da rede à segurança: sua operação de TI em boas mãos
          </h1>
          <p className="mx-auto mt-5 max-w-[46ch] text-[15px] leading-relaxed text-white/65 sm:text-base lg:mx-0">
            A Allied IT assume a complexidade da sua tecnologia com atuação consultiva para a sua
            empresa focar no que faz de melhor.
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
  );
}
