import { createFileRoute } from "@tanstack/react-router";
import { yealinkVideoconferenciaHead } from "@/lib/lp-heads/yealink-videoconferencia";
import { YealinkVcPage } from "@/components/lp-pages/yealink-videoconferencia";

export const Route = createFileRoute("/lp/yealink-videoconferencia")({
  head: yealinkVideoconferenciaHead,
  component: YealinkVcPage,
});
