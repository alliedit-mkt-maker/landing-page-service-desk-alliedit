import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Allied IT" },
      { name: "description", content: "Fale com um especialista da Allied IT." },
      { property: "og:title", content: "Contato | Allied IT" },
      { property: "og:description", content: "Fale com um especialista da Allied IT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SitePage title="Contato" />,
});

function SitePage({ title }: { title: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <h1 className="font-chillax text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--site-muted)]">
        Conteúdo desta página será construído nas próximas etapas.
      </p>
    </section>
  );
}
