import { lpCanonical, PUBLIC_ORIGIN } from "@/lib/site";
import { ogImageUrl } from "@/lib/seo";
export const social = "Padronize o atendimento com produto genuíno e nota fiscal.";

export const title = "Headsets Poly: Blackwire 3220 e Voyager Focus 2 | Allied IT";
export const description =
  "Headsets Poly (HP) para operação, call center e times executivos, com produto genuíno, nota fiscal e padronização.";

export const headsetsPolyHead = () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: social },
      { property: "og:url", content: lpCanonical("headsets-poly", "headsets-poly.alliedit.com.br") },
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
    links: [{ rel: "canonical", href: lpCanonical("headsets-poly", "headsets-poly.alliedit.com.br") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda de headsets corporativos Poly (HP)",
          provider: { "@type": "Organization", name: "Allied IT", url: PUBLIC_ORIGIN },
          areaServed: "BR",
          description,
        }),
      },
    ],
});
