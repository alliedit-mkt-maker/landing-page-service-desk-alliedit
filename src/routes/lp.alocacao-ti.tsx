import { createFileRoute } from "@tanstack/react-router";
import { alocacaoTiHead } from "@/lib/lp-heads/alocacao-ti";
import { AlocacaoRoute } from "@/components/lp-pages/alocacao-ti";

export const Route = createFileRoute("/lp/alocacao-ti")({
  head: alocacaoTiHead,
  component: AlocacaoRoute,
});
