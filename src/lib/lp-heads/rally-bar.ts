import { lpCanonical, PUBLIC_ORIGIN } from "@/lib/site";
import { ogImageUrl } from "@/lib/seo";
export const social = "Sala pequena, média ou grande: o modelo certo e a instalação.";

export const title = "Logitech Rally Bar e Rally Bar Mini | Allied IT";
export const description =
  "Logitech Rally Bar para salas médias e grandes, Rally Bar Mini para salas pequenas. Revenda oficial e instalação.";

export const rallyBarHead = () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: social },
      { property: "og:url", content: lpCanonical("rally-bar", "rally-bar.alliedit.com.br") },
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
    links: [{ rel: "canonical", href: lpCanonical("rally-bar", "rally-bar.alliedit.com.br") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Revenda e instalação de barras de videoconferência Logitech Rally Bar",
          provider: { "@type": "Organization", name: "Allied IT", url: PUBLIC_ORIGIN },
          areaServed: "BR",
          description,
        }),
      },
    ],
});
