import { createFileRoute } from "@tanstack/react-router";
import { assinaturasHead } from "@/lib/lp-heads/assinaturas";
import { AssinaturasPage } from "@/components/lp-pages/assinaturas";

export const Route = createFileRoute("/assinaturas")({
  head: assinaturasHead,
  component: AssinaturasPage,
});
