import { createFileRoute } from "@tanstack/react-router";
import { serviceDeskHead, SD_TITLE, SD_DESCRIPTION, canonical } from "@/lib/lp-heads/service-desk";
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
