import { createFileRoute } from "@tanstack/react-router";
import { headsetYealinkHead } from "@/lib/lp-heads/headset-yealink";
import { YealinkPage } from "@/components/lp-pages/headset-yealink";

export const Route = createFileRoute("/lp/headset-yealink")({
  head: headsetYealinkHead,
  component: YealinkPage,
});
