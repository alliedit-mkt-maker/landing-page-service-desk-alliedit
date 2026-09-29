import { createFileRoute } from "@tanstack/react-router";
import { cabeamentoHead } from "@/lib/lp-heads/cabeamento";
import { CabeamentoPage } from "@/components/lp-pages/cabeamento";

export const Route = createFileRoute("/lp/cabeamento")({
  head: cabeamentoHead,
  component: CabeamentoPage,
});
