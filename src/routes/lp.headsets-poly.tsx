import { createFileRoute } from "@tanstack/react-router";
import { headsetsPolyHead } from "@/lib/lp-heads/headsets-poly";
import { PolyPage } from "@/components/lp-pages/headsets-poly";

export const Route = createFileRoute("/lp/headsets-poly")({
  head: headsetsPolyHead,
  component: PolyPage,
});
