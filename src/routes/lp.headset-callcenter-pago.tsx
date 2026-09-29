import { headsetCallcenterHead } from "@/lib/lp-heads/headset-callcenter";
import { createFileRoute } from "@tanstack/react-router";
import { HeadsetPage } from "./lp.headset-callcenter";

export const Route = createFileRoute("/lp/headset-callcenter-pago")({
  head: () => {
    const h = headsetCallcenterHead();
    return { ...h, meta: [...h.meta, { name: "robots", content: "noindex, nofollow" }] };
  },
  component: HeadsetPage,
});
