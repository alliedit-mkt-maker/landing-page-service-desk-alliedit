import { createFileRoute } from "@tanstack/react-router";
import { videoconferenciaHead } from "@/lib/lp-heads/videoconferencia";
import { VideoconferenciaPage } from "@/components/lp-pages/videoconferencia";

export const Route = createFileRoute("/lp/videoconferencia")({
  head: videoconferenciaHead,
  component: VideoconferenciaPage,
});
