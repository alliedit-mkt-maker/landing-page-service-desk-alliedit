import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { pageHead } from "@/lib/seo";
import { lazy, Suspense, type ComponentType } from "react";
import { assinaturasHead } from "@/lib/lp-heads/assinaturas";
import { serviceDeskHead } from "@/lib/lp-heads/service-desk";
import { cabeamentoHead } from "@/lib/lp-heads/cabeamento";
import { headsetCallcenterHead } from "@/lib/lp-heads/headset-callcenter";
import { rallyBarHead } from "@/lib/lp-heads/rally-bar";
import { headsetsPolyHead } from "@/lib/lp-heads/headsets-poly";
import { headsetLogitechHead } from "@/lib/lp-heads/headset-logitech";
import { headsetYealinkHead } from "@/lib/lp-heads/headset-yealink";
import { polyStudioHead } from "@/lib/lp-heads/poly-studio";
import { yealinkVideoconferenciaHead } from "@/lib/lp-heads/yealink-videoconferencia";
import { alocacaoTiHead } from "@/lib/lp-heads/alocacao-ti";
import { videoconferenciaHead } from "@/lib/lp-heads/videoconferencia";

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

const siteHead = () => {
  const base = pageHead({
    title: "Allied IT | Tecnologia que sustenta a sua operação",
    description:
      "Serviços gerenciados, infraestrutura, nuvem e segurança de TI para empresas que precisam de operação estável.",
    path: "/",
    noindex: true,
  });
  return {
    meta: base.meta,
    links: [
      ...base.links,
      { rel: "preconnect", href: "https://api.fontshare.com" },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=chillax@400,500,600,700&display=swap",
      },
    ],
  };
};

const getRootVariant = createServerFn({ method: "GET" }).handler(async (): Promise<Variant> => {
  const { getRequestHost } = await import("@tanstack/react-start/server");
  const host = (getRequestHost() ?? "").toLowerCase().split(":")[0];
  return HOST_VARIANT_MAP[host] ?? "site";
});

type PageModule = { default: ComponentType };
const pick = <M,>(p: Promise<M>, k: keyof M): Promise<PageModule> =>
  p.then((m) => ({ default: m[k] as unknown as ComponentType }));

// Um import dinâmico por variante: cada host baixa só o código da própria página.
const VARIANT_LOADERS: Record<Variant, () => Promise<PageModule>> = {
  site: () =>
    Promise.all([import("@/components/site/SiteLayout"), import("@/components/site/SiteHome")]).then(
      ([l, h]) => ({
        default: function SiteRoot() {
          return (
            <l.SiteLayout>
              <h.SiteHome />
            </l.SiteLayout>
          );
        },
      }),
    ),
  assinaturas: () => pick(import("@/components/lp-pages/assinaturas"), "AssinaturasPage"),
  "service-desk": () => pick(import("@/components/lp-pages/service-desk"), "ServiceDeskPage"),
  cabeamento: () => pick(import("@/components/lp-pages/cabeamento"), "CabeamentoPage"),
  "headset-callcenter": () => pick(import("@/components/lp-pages/headset-callcenter"), "HeadsetPage"),
  "rally-bar": () => pick(import("@/components/lp-pages/rally-bar"), "RallyBarPage"),
  "headsets-poly": () => pick(import("@/components/lp-pages/headsets-poly"), "PolyPage"),
  "headset-logitech": () => pick(import("@/components/lp-pages/headset-logitech"), "LogitechPage"),
  "headset-yealink": () => pick(import("@/components/lp-pages/headset-yealink"), "YealinkPage"),
  "poly-studio": () => pick(import("@/components/lp-pages/poly-studio"), "PolyStudioPage"),
  "yealink-videoconferencia": () => pick(import("@/components/lp-pages/yealink-videoconferencia"), "YealinkVcPage"),
  "alocacao-ti": () => pick(import("@/components/lp-pages/alocacao-ti"), "AlocacaoPage"),
  videoconferencia: () => pick(import("@/components/lp-pages/videoconferencia"), "VideoconferenciaPage"),
};

const LAZY_PAGES = Object.fromEntries(
  Object.entries(VARIANT_LOADERS).map(([k, load]) => [k, lazy(load)]),
) as unknown as Record<Variant, ComponentType>;

export const Route = createFileRoute("/")({
  loader: async () => {
    const variant = await getRootVariant();
    // Pré-carrega o módulo da variante (não devolve componente no loaderData).
    await VARIANT_LOADERS[variant]();
    return { variant };
  },
  head: ({ loaderData }) => {
    const variant = loaderData?.variant ?? "site";
    const lpHead = LP_HEADS[variant];
    return lpHead ? lpHead() : siteHead();
  },
  component: RootIndex,
});

function RootIndex() {
  const { variant } = Route.useLoaderData();
  const Page = LAZY_PAGES[variant] ?? LAZY_PAGES.site;
  // fallback null: durante a hidratação o React mantém o HTML do servidor até o módulo chegar.
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}
