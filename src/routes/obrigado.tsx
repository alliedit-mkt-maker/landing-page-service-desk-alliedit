import { pageHead } from "@/lib/seo";
import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/lp/SiteHeader";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { LpProvider, pushEvent } from "@/components/lp/LpProvider";

export const Route = createFileRoute("/obrigado")({
  head: () =>
    pageHead({ social: "Em até 4 horas úteis um especialista retorna.",
      title: "Recebemos seu contato | Allied IT",
      description:
        "Recebemos seu contato. Em até 4 horas úteis um especialista da Allied IT retorna para entender a sua operação de TI.",
      path: "/obrigado",
      noindex: true,
    }),
  component: ObrigadoPage,
});

const WA_NUMBER = "5511943319875";
const waMessage = (service: string) =>
  `Olá! Me interessei pelo ${service} da AlliedIT e gostaria de falar com um especialista.`;
const WA_MSG_DEFAULT = waMessage("Service Desk");

// Chave (caminho/host/param "lp") -> nome do serviço. Ordem importa: mais específico primeiro.
const WA_SERVICES: Array<{ match: string; name: string }> = [
  { match: "yealink-videoconferencia", name: "Videoconferência Yealink" },
  { match: "poly-studio", name: "Poly Studio" },
  { match: "rally-bar", name: "Rally Bar" },
  { match: "videoconferencia", name: "Videoconferência" },
  { match: "headset-callcenter", name: "Headset para Call Center" },
  { match: "/headsets", name: "Headset para Call Center" },
  { match: "headsets-poly", name: "Headsets Poly" },
  { match: "headset-poly", name: "Headsets Poly" },
  { match: "headset-logitech", name: "Headset Logitech" },
  { match: "headset-yealink", name: "Headset Yealink" },
  { match: "alocacao-ti", name: "Alocação de TI" },
  { match: "cabeamento", name: "Cabeamento Estruturado" },
  { match: "field-service", name: "Field Service" },
  { match: "service-desk", name: "Service Desk" },
];

function resolveMessage(source: string) {
  const found = WA_SERVICES.find((m) => source.includes(m.match));
  return found ? waMessage(found.name) : WA_MSG_DEFAULT;
}

function ObrigadoPage() {
  const [waMsg, setWaMsg] = useState(WA_MSG_DEFAULT);

  useEffect(() => {
    const host = window.location.hostname.toLowerCase();
    const param = (new URLSearchParams(window.location.search).get("lp") || "").toLowerCase();
    const ref = typeof document !== "undefined" ? document.referrer.toLowerCase() : "";
    let origin = "";
    try { origin = (sessionStorage.getItem("lp_origin_path") || "").toLowerCase(); } catch { /* noop */ }
    setWaMsg(resolveMessage(`${param} ${origin} ${host} ${ref}`));
  }, []);

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

  return (
    <LpProvider trackView={false}>
      <div className="min-h-screen bg-surface text-petrol flex flex-col">
        <SiteHeader />
        <main className="flex-1 px-6 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance leading-[0.95]">
              Recebemos seus detalhes!
            </h1>
            <p className="text-petrol/70 text-lg max-w-2xl">
              Em breve faremos contato por e-mail, telefone e WhatsApp.
            </p>

            <section className="mt-20 sm:mt-24">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
                Precisa falar agora?
              </h3>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushEvent("whatsapp_click_thankyou")}
                className="btn-sheen inline-flex items-center justify-center gap-3 bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
              >
                Chame no WhatsApp
              </a>
            </section>

            <hr className="mt-20 sm:mt-24 border-t border-border" />

            <section className="mt-12 sm:mt-16">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-petrol/30 text-petrol px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-petrol/5 transition-colors"
              >
                Explore nosso site
              </a>
            </section>
          </div>
        </main>
        <SiteFooter />
      </div>
    </LpProvider>
  );
}
