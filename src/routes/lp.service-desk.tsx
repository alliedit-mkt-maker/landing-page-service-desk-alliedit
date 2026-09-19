import { createFileRoute } from "@tanstack/react-router";
import { lpCanonical, PUBLIC_ORIGIN } from "@/lib/site";
import { ogImageUrl } from "@/lib/seo";
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

const SD_TITLE = "Service Desk terceirizado 24x7 com NOC e SOC | Allied IT";
const SD_DESCRIPTION =
  "Service Desk 24x7 com N1, N2 e N3 na mesma equipe, NOC e SOC integrados, custo previsível e SLA real. +7 anos.";

const canonical = lpCanonical("service-desk", "service-desk.alliedit.com.br");

export const serviceDeskHead = () => ({
    meta: [
      { title: SD_TITLE },
      { name: "description", content: SD_DESCRIPTION },
      { property: "og:title", content: SD_TITLE },
      { property: "og:description", content: SD_DESCRIPTION },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImageUrl() },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Allied IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SD_TITLE },
      { name: "twitter:description", content: SD_DESCRIPTION },
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

export const Route = createFileRoute("/lp/service-desk")({
  head: serviceDeskHead,
  component: ServiceDeskPage,
});

export function ServiceDeskPage() {
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
