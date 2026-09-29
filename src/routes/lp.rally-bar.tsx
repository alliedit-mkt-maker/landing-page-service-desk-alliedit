import { createFileRoute } from "@tanstack/react-router";
import { rallyBarHead } from "@/lib/lp-heads/rally-bar";
import { RallyBarPage } from "@/components/lp-pages/rally-bar";

export const Route = createFileRoute("/lp/rally-bar")({
  head: rallyBarHead,
  component: RallyBarPage,
});
