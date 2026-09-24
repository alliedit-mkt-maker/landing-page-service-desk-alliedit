import { createFileRoute } from "@tanstack/react-router";
import { videoconferenciaHead, VideoconferenciaPage } from "./lp.videoconferencia";

export const Route = createFileRoute("/lp/videoconferencia-pago")({
  head: () => {
    const h = videoconferenciaHead();
    return { ...h, meta: [...h.meta, { name: "robots", content: "noindex, nofollow" }] };
  },
  component: VideoconferenciaPage,
});
