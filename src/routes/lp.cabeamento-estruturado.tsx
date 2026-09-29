import { createFileRoute } from "@tanstack/react-router";
import { cabeamentoEstruturadoHead } from "@/lib/lp-heads/cabeamento-estruturado";
import { CabeamentoEstruturadoPage } from "@/components/lp-pages/cabeamento-estruturado";

export const Route = createFileRoute("/lp/cabeamento-estruturado")({
  head: cabeamentoEstruturadoHead,
  component: CabeamentoEstruturadoPage,
});
