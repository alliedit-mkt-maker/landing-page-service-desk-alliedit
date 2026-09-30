import { lpCanonical, PUBLIC_ORIGIN } from "@/lib/site";
import { ogImageUrl } from "@/lib/seo";
export const social = "Desenvolvedor, PO ou gerente de projeto no time, sem abrir vaga.";

export const title = "Alocação de profissionais de TI sob demanda | Allied IT";
export const description =
  "Desenvolvedores, POs, scrum masters e gerentes de projeto sob demanda, sem abrir vaga CLT nem trava de headcount.";

export const alocacaoTiHead = () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: social },
      { property: "og:url", content: lpCanonical("alocacao-ti", "alocacao-ti.alliedit.com.br") },
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
    links: [{ rel: "canonical", href: lpCanonical("alocacao-ti", "alocacao-ti.alliedit.com.br") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Alocação de profissionais de TI",
          provider: { "@type": "Organization", name: "Allied IT", url: PUBLIC_ORIGIN },
          areaServed: "BR",
          description,
        }),
      },
    ],
});
