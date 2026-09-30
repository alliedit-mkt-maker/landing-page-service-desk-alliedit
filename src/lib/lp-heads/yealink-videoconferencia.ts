import { lpCanonical, PUBLIC_ORIGIN } from "@/lib/site";
import { ogImageUrl } from "@/lib/seo";
export const social = "Modo USB ou kit Teams Rooms e Zoom Rooms, dimensionado para sua sala.";

export const title = "Yealink MeetingBar A40, A50 e kits MVC/ZVC | Allied IT";
export const description =
  "Yealink MeetingBar A40 e A50 em modo USB, ou kits MVC (Teams Rooms) e ZVC (Zoom Rooms). Revenda e dimensionamento.";

export const yealinkVideoconferenciaHead = () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: social },
      { property: "og:url", content: lpCanonical("yealink-videoconferencia", "yealink-videoconferencia.alliedit.com.br") },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImageUrl() },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Allied IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: social },
      { name: "twitter:image", content: ogImageUrl() },
    ],
    links: [{ rel: "canonical", href: lpCanonical("yealink-videoconferencia", "yealink-videoconferencia.alliedit.com.br") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda e instalação de videoconferência Yealink (MeetingBar, MVC e ZVC)",
          provider: { "@type": "Organization", name: "Allied IT", url: PUBLIC_ORIGIN },
          areaServed: "BR",
          description,
        }),
      },
    ],
});
