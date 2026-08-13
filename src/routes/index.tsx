import { createFileRoute } from "@tanstack/react-router";
import { getRequestHost } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";
import ogImage from "@/assets/og-image.png.asset.json";
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
import { CabeamentoPage, cabeamentoMeta } from "./cabeamento";
import { HeadsetPage, headsetMeta } from "./headset-callcenter";
import { RallyBarPage, rallyBarMeta } from "./rally-bar";
import { PolyPage, polyMeta } from "./headsets-poly";
import { LogitechPage, logitechMeta } from "./headset-logitech";
import { YealinkPage, yealinkMeta } from "./headset-yealink";
import { PolyStudioPage, polyStudioMeta } from "./poly-studio";


const SD_TITLE = "AlliedIT | Service Desk terceirizado 24x7 com NOC e SOC integrados";
const SD_DESCRIPTION = "A operação de TI por trás das marcas que você conhece. Service Desk 24x7, N1/N2/N3 na mesma equipe, NOC e SOC integrados, custo previsível e SLA real. +7 anos atendendo hotelaria, saúde, varejo, farma e logística.";

const HOST_VARIANT_MAP: Record<string, "cabeamento" | "headset" | "rally-bar" | "poly" | "logitech" | "yealink" | "poly-studio"> = {
  "cabeamento.alliedit.com.br": "cabeamento",
  "headset-callcenter.alliedit.com.br": "headset",
  "rally-bar.alliedit.com.br": "rally-bar",
  "headsets-poly.alliedit.com.br": "poly",
  "headset-logitech.alliedit.com.br": "logitech",
  "headset-yealink.alliedit.com.br": "yealink",
  "poly-studio.alliedit.com.br": "poly-studio",
};

const getRouteVariant = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const host = getRequestHost().toLowerCase();
    return HOST_VARIANT_MAP[host] ?? "service-desk";
  } catch {
    return "service-desk" as const;
  }
});

export const Route = createFileRoute("/")({
  loader: async () => ({ variant: await getRouteVariant() }),
  head: ({ loaderData }) => {
    const variant = loaderData?.variant;
    const isCabeamento = variant === "cabeamento";
    const isHeadset = variant === "headset";
    const isRally = variant === "rally-bar";
    const isPoly = variant === "poly";
    const isLogitech = variant === "logitech";
    const isYealink = variant === "yealink";
    const isPolyStudio = variant === "poly-studio";
    const title = isPolyStudio ? polyStudioMeta.title : isYealink ? yealinkMeta.title : isLogitech ? logitechMeta.title : isPoly ? polyMeta.title : isRally ? rallyBarMeta.title : isCabeamento ? cabeamentoMeta.title : isHeadset ? headsetMeta.title : SD_TITLE;
    const description = isPolyStudio
      ? polyStudioMeta.description
      : isYealink
      ? yealinkMeta.description
      : isLogitech
      ? logitechMeta.description
      : isPoly
      ? polyMeta.description
      : isRally
      ? rallyBarMeta.description
      : isCabeamento
      ? cabeamentoMeta.description
      : isHeadset
        ? headsetMeta.description
        : SD_DESCRIPTION;
    const canonical = isPolyStudio
      ? "https://poly-studio.alliedit.com.br/"
      : isYealink
      ? "https://headset-yealink.alliedit.com.br/"
      : isLogitech
      ? "https://headset-logitech.alliedit.com.br/"
      : isPoly
      ? "https://headsets-poly.alliedit.com.br/"
      : isRally
      ? "https://rally-bar.alliedit.com.br/"
      : isCabeamento
      ? "https://cabeamento.alliedit.com.br/"
      : isHeadset
        ? "https://headset-callcenter.alliedit.com.br/"
        : "https://service-desk.alliedit.com.br/";
    const ogUrl = canonical;
    const ogImageUrl = `https://service-desk.alliedit.com.br${ogImage.url}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: ogUrl },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImageUrl },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "AlliedIT" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImageUrl },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: isPolyStudio
              ? "Revenda e instalação de barras de videoconferência Poly Studio (HP)"
              : isYealink
              ? "Revenda de headsets corporativos Yealink"
              : isLogitech
              ? "Revenda de headsets corporativos Logitech"
              : isPoly
              ? "Revenda de headsets corporativos Poly (HP)"
              : isRally
              ? "Revenda e instalação de barras de videoconferência Logitech Rally Bar"
              : isCabeamento
              ? "Cabeamento estruturado, fibra óptica e data center"
              : isHeadset
                ? "Headsets para call center Yealink, Logitech e Poly"
                : "Service Desk terceirizado",

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
    };
  },
  component: Index,
});

function Index() {
  const { variant } = Route.useLoaderData();
  if (variant === "cabeamento") return <CabeamentoPage />;
  if (variant === "headset") return <HeadsetPage />;
  if (variant === "rally-bar") return <RallyBarPage />;
  if (variant === "poly") return <PolyPage />;
  if (variant === "logitech") return <LogitechPage />;
  if (variant === "yealink") return <YealinkPage />;
  if (variant === "poly-studio") return <PolyStudioPage />;

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
