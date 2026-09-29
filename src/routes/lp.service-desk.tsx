import { createFileRoute } from "@tanstack/react-router";
import { serviceDeskHead } from "@/lib/lp-heads/service-desk";
import { ServiceDeskPage } from "@/components/lp-pages/service-desk";

export const Route = createFileRoute("/lp/service-desk")({
  head: serviceDeskHead,
  component: ServiceDeskPage,
});
