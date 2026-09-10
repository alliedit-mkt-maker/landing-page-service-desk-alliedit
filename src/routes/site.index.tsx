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

const WORDS: { label: string; style: string; delay: string }[] = [
  { label: "Segurança", style: "left-[4%] top-[12%]", delay: "0s" },
  { label: "Nuvem", style: "right-[8%] top-[6%]", delay: "1.4s" },
  { label: "Infraestrutura", style: "left-[2%] top-[42%]", delay: "2.6s" },
  { label: "Automação", style: "right-[2%] top-[34%]", delay: "3.8s" },
  { label: "Inteligência Artificial", style: "left-[6%] bottom-[10%]", delay: "0.8s" },
  { label: "Inovação", style: "right-[4%] bottom-[16%]", delay: "2.1s" },
  { label: "Monitoramento", style: "left-[26%] bottom-[2%]", delay: "3.2s" },
  { label: "Performance", style: "right-[24%] top-[2%]", delay: "4.4s" },
  { label: "Conectividade", style: "left-[1%] top-[74%]", delay: "1.9s" },
  { label: "Escalabilidade", style: "right-[1%] bottom-[42%]", delay: "5s" },
];

function SiteHome() {
  const btnBase =
    "font-chillax inline-flex h-14 items-center justify-center border border-white/70 px-8 text-[15px] font-medium uppercase tracking-[0.08em] text-white transition-colors duration-200";

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0E12]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 72% 45%, rgba(4,110,139,0.30) 0%, rgba(4,110,139,0.08) 38%, rgba(10,14,18,0) 70%), radial-gradient(90% 80% at 10% 20%, rgba(255,255,255,0.05) 0%, rgba(10,14,18,0) 60%)",
        }}
      />
      <HeroParticles />

      <div className="relative mx-auto grid min-h-[86vh] max-w-7xl grid-cols-1 items-center gap-14 px-5 py-20 sm:px-8 lg:min-h-[88vh] lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:py-24">
        <div>
          <p className="font-chillax text-xs font-medium uppercase tracking-[0.24em] text-[#F3C400]">
            Soluções em TI
          </p>
          <h1 className="font-chillax mt-6 max-w-2xl text-[2rem] font-bold uppercase leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Do suporte à nuvem, da rede à segurança: sua operação de TI em boas mãos.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            A Allied IT assume a complexidade da sua tecnologia com atuação consultiva, +7 anos de
            operação e gestão baseada em indicadores, para a sua empresa focar no que faz de melhor.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/site/contato"
              className={`${btnBase} hover:border-[#046E8B] hover:bg-[#046E8B]`}
            >
              Falar com especialista
            </Link>
            <Link
              to="/site/servicos"
              className={`${btnBase} hover:bg-white hover:text-[#0A0E12]`}
            >
              Conheça nossas soluções
            </Link>
          </div>
        </div>

        <div className="relative h-[300px] sm:h-[380px] lg:h-[520px]" aria-hidden="true">
          {WORDS.map((w, i) => (
            <span
              key={w.label}
              className={`site-orbit-word font-chillax absolute ${w.style} text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-[11px] ${
                i > 5 ? "hidden lg:block" : ""
              }`}
              style={{ animationDelay: w.delay }}
            >
              {w.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
