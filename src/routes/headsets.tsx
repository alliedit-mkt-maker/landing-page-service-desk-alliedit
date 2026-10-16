import { headsetCallcenterHead } from "@/lib/lp-heads/headset-callcenter";
import { createFileRoute } from "@tanstack/react-router";
import { HeadsetPage } from "@/components/lp-pages/headset-callcenter";

export const Route = createFileRoute("/headsets")({
  head: () => {
    const h = headsetCallcenterHead();
    return {
      ...h,
      meta: [...h.meta, { name: "robots", content: "noindex, nofollow" }],
      links: [
        ...(h.links ?? []),
        { rel: "preconnect", href: "https://api.fontshare.com" },
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=chillax@400,500,600,700&display=swap",
        },
      ],
    };
  },
  component: HeadsetPage,
});
