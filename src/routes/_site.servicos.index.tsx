import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/servicos/")({
  head: () =>
    pageHead({
      title: "Serviços gerenciados de TI para empresas | Allied IT",
      description: "Digital Workspace, Smart Cloud Ops, Cyber Shield 360 e Infra Core: operação de TI com SLA e cobertura nacional.",
      path: "/servicos",
    }),
  component: () => <SitePage title="Serviços" />,
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
