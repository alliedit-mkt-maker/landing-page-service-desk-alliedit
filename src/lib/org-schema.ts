// Sitewide company JSON-LD (ProfessionalService + WebSite), rendered in the root head.
export const ORG_ID = "https://alliedit.com.br/#organization";
export const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://alliedit.com.br/#organization",
      "name": "Allied IT",
      "alternateName": [
        "AlliedIT",
        "Allied IT Solutions"
      ],
      "legalName": "J & M Soluções em Tecnologia Ltda",
      "taxID": "32.310.131/0001-61",
      "url": "https://alliedit.com.br/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alliedit.com.br/logo-allied-wordmark.png"
      },
      "image": "https://alliedit.com.br/__l5e/assets-v1/eba145da-ff26-4b5f-88fd-c177c433314e/og-image.png",
      "description": "Serviços gerenciados, infraestrutura, nuvem e segurança de TI para empresas que precisam de operação estável.",
      "disambiguatingDescription": "Empresa brasileira de serviços gerenciados de TI, fundada em 2018, com sede em Alphaville, Barueri (SP).",
      "foundingDate": "2018",
      "founder": {
        "@type": "Person",
        "name": "Jimmy Yoshii",
        "jobTitle": "CEO"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Alameda Tocantins, 75, Alphaville Industrial",
        "addressLocality": "Barueri",
        "addressRegion": "SP",
        "postalCode": "06455-020",
        "addressCountry": "BR"
      },
      "telephone": "+55-11-94331-9875",
      "email": "contato@alliedit.com.br",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+55-11-94331-9875",
          "email": "contato@alliedit.com.br",
          "areaServed": "BR",
          "availableLanguage": [
            "Portuguese"
          ]
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "knowsAbout": [
        "Service desk",
        "Field service",
        "NOC",
        "SOC",
        "Cibersegurança",
        "Pentest",
        "Computação em nuvem",
        "FinOps",
        "Microsoft 365",
        "AWS",
        "Firewall",
        "Infraestrutura de TI",
        "Cabeamento estruturado",
        "Data center",
        "Alocação de profissionais de TI",
        "Videoconferência"
      ],
      "sameAs": [
        "https://www.linkedin.com/company/20112643",
        "https://www.instagram.com/alliedit_solutions/"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços e produtos de TI",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Workspace: Service Desk e Field Service",
              "url": "https://alliedit.com.br/servicos/digital-workspace"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smart Cloud Ops: Azure, M365 e FinOps",
              "url": "https://alliedit.com.br/servicos/smart-cloud-ops"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cyber Shield 360°: SOC, pentest e segurança",
              "url": "https://alliedit.com.br/servicos/cyber-shield-360"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Infra Core: redes, cabeamento estruturado e data center",
              "url": "https://alliedit.com.br/servicos/infra-core"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product Engineering: desenvolvimento sob medida",
              "url": "https://alliedit.com.br/servicos/product-engineering"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Inteligência Artificial para empresas",
              "url": "https://alliedit.com.br/servicos/inteligencia-artificial"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Microsoft 365 para empresas: licenciamento e suporte",
              "url": "https://alliedit.com.br/produtos/microsoft-365"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Consultoria AWS: migração e gestão de nuvem",
              "url": "https://alliedit.com.br/produtos/aws"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Firewall para empresas com monitoramento 24h",
              "url": "https://alliedit.com.br/produtos/firewall"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://alliedit.com.br/#website",
      "url": "https://alliedit.com.br/",
      "name": "Allied IT",
      "inLanguage": "pt-BR",
      "publisher": {
        "@id": "https://alliedit.com.br/#organization"
      }
    }
  ]
} as const;

// Only Ciber omits NOC; the sitewide company profile remains unchanged elsewhere.
export function organizationSchemaForPath(pathname: string) {
  if (pathname.replace(/\/$/, "") !== "/servicos/cyber-shield-360") return ORG_SCHEMA;
  return {
    ...ORG_SCHEMA,
    "@graph": ORG_SCHEMA["@graph"].map(node => "knowsAbout" in node
      ? { ...node, knowsAbout: node.knowsAbout.filter(topic => topic !== "NOC") }
      : node),
  };
}
