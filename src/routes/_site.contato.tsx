import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/contato")({
  head: () =>
    pageHead({
      title: "Fale com um especialista | Allied IT",
      description: "Conte o que a sua operação de TI precisa. Um especialista da Allied IT retorna em até 4 horas úteis.",
      path: "/contato",
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
