import { createFileRoute, redirect } from "@tanstack/react-router";
import { getRequestHost } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";
import ogImage from "@/assets/og-image.png.asset.json";

const getHost = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return getRequestHost();
  } catch {
    return "";
  }
});

const HOST_ROUTE_MAP: Record<string, string> = {
  "cabeamento.alliedit.com.br": "/cabeamento",
};
import { LpProvider } from "@/components/lp/LpProvider";
import { SiteHeader } from "@/components/lp/SiteHeader";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { Hero } from "@/components/lp/Hero";
import { Clients } from "@/components/lp/Clients";
import { PathToggle } from "@/components/lp/PathToggle";
import { Pillars } from "@/components/lp/Pillars";
import { Flexibility } from "@/components/lp/Flexibility";
import { WhyAllied } from "@/components/lp/WhyAllied";
import { CaseStudy } from "@/components/lp/CaseStudy";
import { Faq } from "@/components/lp/Faq";
import { FinalCta } from "@/components/lp/FinalCta";

const title = "AlliedIT | Service Desk terceirizado 24x7 com NOC e SOC integrados";
const description = "A operação de TI por trás das marcas que você conhece. Service Desk 24x7, N1/N2/N3 na mesma equipe, NOC e SOC integrados, custo previsível e SLA real. +7 anos atendendo hotelaria, saúde, varejo, farma e logística.";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const host = (await getHost()).toLowerCase();
    const target = HOST_ROUTE_MAP[host];
    if (target) {
      throw redirect({ to: target });
    }
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://service-desk.alliedit.com.br${ogImage.url}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AlliedIT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `https://service-desk.alliedit.com.br${ogImage.url}` },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Service Desk terceirizado",
          provider: {
            "@type": "Organization",
            name: "AlliedIT",
            url: "https://www.alliedit.com.br",
          },
          areaServed: "BR",
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LpProvider>
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <SiteHeader />
        <main>
          <Hero />
          <Clients />
          <PathToggle />
          <Pillars />
          <Flexibility />
          <WhyAllied />
          <CaseStudy />
          <Faq />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </LpProvider>
  );
}
