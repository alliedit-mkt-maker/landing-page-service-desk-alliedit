import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/produtos")({
  head: () =>
    pageHead({
      title: "Headsets, videoconferência e equipamentos de TI | Allied IT",
      description: "Headsets Poly, Yealink e Logitech, videoconferência, Microsoft 365, AWS e firewall com consultoria e suporte.",
      path: "/produtos",
    }),
  component: () => <SitePage title="Produtos" />,
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
