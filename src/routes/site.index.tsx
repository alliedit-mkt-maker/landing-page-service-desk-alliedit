import { createFileRoute } from "@tanstack/react-router";

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
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <p className="font-chillax text-sm font-medium uppercase tracking-[0.18em] text-[var(--site-blue)]">
        Site institucional
      </p>
      <h1 className="font-chillax mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Tecnologia que sustenta a sua operação.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-[var(--site-muted)]">
        Esta é a base do novo site. O cabeçalho global já está pronto e será reaproveitado em todas
        as páginas. As demais seções entram nas próximas etapas.
      </p>
    </section>
  );
}
