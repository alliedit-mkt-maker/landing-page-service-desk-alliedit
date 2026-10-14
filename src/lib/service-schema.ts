const SITE_URL = "https://alliedit.com.br";

type FaqItem = { q: string; a: string };

type ServiceSchemaOptions = {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  sectionName: "Serviços" | "Produtos";
  sectionPath: "/servicos" | "/produtos";
  faq: readonly FaqItem[];
};

export function serviceSchema({
  path,
  name,
  serviceType,
  description,
  sectionName,
  sectionPath,
  faq,
}: ServiceSchemaOptions) {
  const url = `${SITE_URL}${path}`;

  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${url}#servico`,
          name,
          serviceType,
          url,
          description,
          provider: { "@type": "Organization", name: "Allied IT", url: SITE_URL },
          areaServed: { "@type": "Country", name: "Brasil" },
        },
        {
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          url,
          mainEntity: faq.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: sectionName, item: `${SITE_URL}${sectionPath}` },
            { "@type": "ListItem", position: 3, name, item: url },
          ],
        },
      ],
    }),
  };
}