import { lpCanonical, PUBLIC_ORIGIN } from "@/lib/site";
import { ogImageUrl } from "@/lib/seo";
export const social = "N1 a N3 na mesma equipe, custo previsível e SLA de verdade.";

export const SD_TITLE = "Service Desk terceirizado 24x7 com NOC e SOC | Allied IT";
export const SD_DESCRIPTION =
  "Service Desk 24x7 com N1, N2 e N3 na mesma equipe, NOC e SOC integrados, custo previsível e SLA real. +7 anos.";
export const canonical = lpCanonical("service-desk", "service-desk.alliedit.com.br");

export const serviceDeskHead = () => ({
    meta: [
      { title: SD_TITLE },
      { name: "description", content: SD_DESCRIPTION },
      { property: "og:title", content: SD_TITLE },
      { property: "og:description", content: social },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImageUrl() },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Allied IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SD_TITLE },
      { name: "twitter:description", content: social },
      { name: "twitter:image", content: ogImageUrl() },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Service Desk terceirizado",
          provider: {
            "@type": "Organization",
            name: "Allied IT",
            url: PUBLIC_ORIGIN,
          },
          areaServed: "BR",
          description: SD_DESCRIPTION,
        }),
      },
    ],
});
