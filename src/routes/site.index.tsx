import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/site/hero-placeholder.jpg";

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

function SiteHome() {
  const btnBase =
    "font-chillax inline-flex h-14 items-center justify-center border border-white px-8 text-[15px] font-medium uppercase tracking-[0.08em] text-white transition-colors duration-200";

  return (
    <section className="px-4 pb-10 pt-4 sm:px-6 sm:pb-16 sm:pt-6">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl">
        <img
          src={heroImage}
          alt="Equipe de tecnologia monitorando a operação de TI em um centro de operações"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/25" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"
          aria-hidden="true"
        />

        <div className="relative flex min-h-[72vh] flex-col justify-end px-6 py-14 sm:px-12 sm:py-20 lg:min-h-[78vh] lg:px-16 lg:py-24">
          <p className="font-chillax text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-yellow)]">
            Soluções em TI
          </p>
          <h1 className="font-chillax mt-5 max-w-4xl text-[2rem] font-bold uppercase leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Do suporte à nuvem, da rede à segurança: sua operação de TI em boas mãos.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            A Allied IT assume a complexidade da sua tecnologia com atuação consultiva, +7 anos de
            operação e gestão baseada em indicadores, para a sua empresa focar no que faz de melhor.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to="/site/contato" className={`${btnBase} hover:bg-[var(--site-blue)] hover:border-[var(--site-blue)]`}>
              Falar com especialista
            </Link>
            <Link
              to="/site/servicos"
              className={`${btnBase} hover:bg-white hover:text-[var(--site-ink)]`}
            >
              Conheça nossas soluções
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
