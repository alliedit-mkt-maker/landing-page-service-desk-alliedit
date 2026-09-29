import { PUBLIC_ORIGIN, LP_ON_ROOT_DOMAIN } from "@/lib/site";
import { ogImageUrl } from "@/lib/seo";

export const socialDescription = "Cada ponto testado, documentado e entregue. Peça o levantamento.";
export const title = "Empresa de cabeamento estruturado com laudo | Allied IT";
export const description =
  "Cabeamento estruturado para empresas: projeto, instalação e certificação ponto a ponto, com laudo e as-built.";
export const canonical = LP_ON_ROOT_DOMAIN
  ? `${PUBLIC_ORIGIN}/lp/cabeamento-estruturado`
  : "https://cabeamento.alliedit.com.br/lp/cabeamento-estruturado";

export const cabeamentoEstruturadoHead = () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: socialDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImageUrl() },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Allied IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: socialDescription },
      { name: "twitter:image", content: ogImageUrl() },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Cabeamento estruturado",
          provider: { "@type": "Organization", name: "Allied IT", url: PUBLIC_ORIGIN },
          areaServed: "BR",
          description,
        }),
      },
    ],
});
