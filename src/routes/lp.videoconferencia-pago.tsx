import { videoconferenciaHead } from "@/lib/lp-heads/videoconferencia";
import { createFileRoute } from "@tanstack/react-router";
import { VideoconferenciaPage } from "@/components/lp-pages/videoconferencia";

export const Route = createFileRoute("/lp/videoconferencia-pago")({
  head: () => {
    const h = videoconferenciaHead();
    return { ...h, meta: [...h.meta, { name: "robots", content: "noindex, nofollow" }] };
  },
  component: VideoconferenciaPage,
});
