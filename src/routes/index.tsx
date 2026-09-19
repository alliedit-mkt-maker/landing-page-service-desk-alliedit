import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SiteHome } from "@/components/site/SiteHome";
import { assinaturasHead, AssinaturasPage } from "./assinaturas";
import { serviceDeskHead, ServiceDeskPage } from "./lp.service-desk";
import { cabeamentoHead, CabeamentoPage } from "./lp.cabeamento";
import { headsetCallcenterHead, HeadsetPage } from "./lp.headset-callcenter";
import { rallyBarHead, RallyBarPage } from "./lp.rally-bar";
import { headsetsPolyHead, PolyPage } from "./lp.headsets-poly";
import { headsetLogitechHead, LogitechPage } from "./lp.headset-logitech";
import { headsetYealinkHead, YealinkPage } from "./lp.headset-yealink";
import { polyStudioHead, PolyStudioPage } from "./lp.poly-studio";
import { yealinkVideoconferenciaHead, YealinkVcPage } from "./lp.yealink-videoconferencia";
import { alocacaoTiHead, AlocacaoPage } from "./lp.alocacao-ti";
import { videoconferenciaHead, VideoconferenciaPage } from "./lp.videoconferencia";

type Variant =
  | "site"
  | "assinaturas"
  | "service-desk"
  | "cabeamento"
  | "headset-callcenter"
  | "rally-bar"
  | "headsets-poly"
  | "headset-logitech"
  | "headset-yealink"
  | "poly-studio"
  | "yealink-videoconferencia"
  | "alocacao-ti"
  | "videoconferencia";

const HOST_VARIANT_MAP: Record<string, Variant> = {
  "service-desk.alliedit.com.br": "service-desk",
  "cabeamento.alliedit.com.br": "cabeamento",
  "headset-callcenter.alliedit.com.br": "headset-callcenter",
  "rally-bar.alliedit.com.br": "rally-bar",
  "headsets-poly.alliedit.com.br": "headsets-poly",
  "headset-poly.alliedit.com.br": "headsets-poly",
  "headset-logitech.alliedit.com.br": "headset-logitech",
  "headset-yealink.alliedit.com.br": "headset-yealink",
  "poly-studio.alliedit.com.br": "poly-studio",
  "yealink-videoconferencia.alliedit.com.br": "yealink-videoconferencia",
  "alocacao-ti.alliedit.com.br": "alocacao-ti",
  "videoconferencia.alliedit.com.br": "videoconferencia",
  "assinaturas.alliedit.com.br": "assinaturas",
};

const LP_HEADS: Partial<Record<Variant, () => any>> = {
  "service-desk": serviceDeskHead,
  cabeamento: cabeamentoHead,
  "headset-callcenter": headsetCallcenterHead,
  "rally-bar": rallyBarHead,
  "headsets-poly": headsetsPolyHead,
  "headset-logitech": headsetLogitechHead,
  "headset-yealink": headsetYealinkHead,
  "poly-studio": polyStudioHead,
  "yealink-videoconferencia": yealinkVideoconferenciaHead,
  "alocacao-ti": alocacaoTiHead,
  videoconferencia: videoconferenciaHead,
  assinaturas: assinaturasHead,
};

const SITE_TITLE = "Allied IT | Tecnologia que sustenta a sua operação";
const SITE_DESCRIPTION =
  "Allied IT: serviços gerenciados, infraestrutura e produtos de TI para empresas que precisam de operação estável e previsível.";

const siteHead = () => ({
  meta: [
    { title: SITE_TITLE },
    { name: "description", content: SITE_DESCRIPTION },
    { name: "robots", content: "noindex, nofollow" },
    { property: "og:title", content: SITE_TITLE },
    {
      property: "og:description",
      content: "Serviços gerenciados, infraestrutura e produtos de TI para empresas.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [
    { rel: "preconnect", href: "https://api.fontshare.com" },
    {
      rel: "stylesheet",
      href: "https://api.fontshare.com/v2/css?f[]=chillax@400,500,600,700&display=swap",
    },
  ],
});

const getRootVariant = createServerFn({ method: "GET" }).handler(async (): Promise<Variant> => {
  const { getRequestHost } = await import("@tanstack/react-start/server");
  const host = (getRequestHost() ?? "").toLowerCase().split(":")[0];
  return HOST_VARIANT_MAP[host] ?? "site";
});

export const Route = createFileRoute("/")({
  loader: async () => ({ variant: await getRootVariant() }),
  head: ({ loaderData }) => {
    const variant = loaderData?.variant ?? "site";
    const lpHead = LP_HEADS[variant];
    return lpHead ? lpHead() : siteHead();
  },
  component: RootIndex,
});

function RootIndex() {
  const { variant } = Route.useLoaderData();
  switch (variant) {
    case "service-desk":
      return <ServiceDeskPage />;
    case "cabeamento":
      return <CabeamentoPage />;
    case "headset-callcenter":
      return <HeadsetPage />;
    case "rally-bar":
      return <RallyBarPage />;
    case "headsets-poly":
      return <PolyPage />;
    case "headset-logitech":
      return <LogitechPage />;
    case "headset-yealink":
      return <YealinkPage />;
    case "poly-studio":
      return <PolyStudioPage />;
    case "yealink-videoconferencia":
      return <YealinkVcPage />;
    case "alocacao-ti":
      return <AlocacaoPage />;
    case "videoconferencia":
      return <VideoconferenciaPage />;
    case "assinaturas":
      return <AssinaturasPage />;
    default:
      return (
        <SiteLayout>
          <SiteHome />
        </SiteLayout>
      );
  }
}
