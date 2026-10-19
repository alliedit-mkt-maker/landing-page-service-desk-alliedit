import { videoconferenciaHead } from "@/lib/lp-heads/videoconferencia";
import { createFileRoute } from "@tanstack/react-router";
import { VideoconferenciaPage } from "@/components/lp-pages/videoconferencia";
import { PRODUCT_FORMS } from "@/lib/product-forms";

export const Route = createFileRoute("/videoconferencia")({
  head: () => {
    const h = videoconferenciaHead();
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
  component: () => <VideoconferenciaPage {...PRODUCT_FORMS.videoconferencia} />,
});
