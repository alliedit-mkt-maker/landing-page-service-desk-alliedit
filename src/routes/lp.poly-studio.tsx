import { createFileRoute } from "@tanstack/react-router";
import { polyStudioHead } from "@/lib/lp-heads/poly-studio";
import { PolyStudioPage } from "@/components/lp-pages/poly-studio";

export const Route = createFileRoute("/lp/poly-studio")({
  head: polyStudioHead,
  component: PolyStudioPage,
});
