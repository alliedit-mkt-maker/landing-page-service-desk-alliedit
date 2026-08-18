import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/lp/SiteHeader";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { LpProvider, pushEvent } from "@/components/lp/LpProvider";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado | AlliedIT" },
      { name: "description", content: "Recebemos seu contato. Em até 4 horas úteis um especialista da AlliedIT retorna." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/obrigado" }],
  }),
  component: ObrigadoPage,
});

const WA_NUMBER = "5511943319875";
const WA_MSG_DEFAULT =
  "Olá! Me interessei pelo Service Desk da AlliedIT e gostaria de falar com um especialista.";

// Chave (host/param "lp") -> mensagem pré-preenchida do WhatsApp.
const WA_MESSAGES: Array<{ match: string; msg: string }> = [
  { match: "yealink-videoconferencia", msg: "Olá! Me interessei pelos produtos de videoconferência da marca Yealink e gostaria de falar com um especialista." },
  { match: "poly-studio", msg: "Olá! Me interessei pelos produtos de videoconferência Poly Studio e gostaria de falar com um especialista." },
  { match: "rally-bar", msg: "Olá! Me interessei pelos produtos de videoconferência Logitech Rally Bar e gostaria de falar com um especialista." },
  { match: "videoconferencia", msg: "Olá! Me interessei pelos produtos de videoconferência da AlliedIT e gostaria de falar com um especialista." },
  { match: "headset-callcenter", msg: "Olá! Me interessei pelos headsets para call center e gostaria de falar com um especialista." },
  { match: "headsets-poly", msg: "Olá! Me interessei pelos Headsets da marca Poly e gostaria de falar com um especialista." },
  { match: "headset-poly", msg: "Olá! Me interessei pelos Headsets da marca Poly e gostaria de falar com um especialista." },
  { match: "headset-logitech", msg: "Olá! Me interessei pelos Headsets da marca Logitech e gostaria de falar com um especialista." },
  { match: "headset-yealink", msg: "Olá! Me interessei pelos Headsets da marca Yealink e gostaria de falar com um especialista." },
  { match: "alocacao-ti", msg: "Olá! Me interessei pela alocação de profissionais de TI da AlliedIT e gostaria de falar com um especialista." },
  { match: "cabeamento", msg: "Olá! Me interessei pelos serviços de cabeamento e redes da AlliedIT e gostaria de falar com um especialista." },
];

function resolveMessage(source: string) {
  const found = WA_MESSAGES.find((m) => source.includes(m.match));
  return found ? found.msg : WA_MSG_DEFAULT;
}

function ObrigadoPage() {
  const [waMsg, setWaMsg] = useState(WA_MSG_DEFAULT);

  useEffect(() => {
    const host = window.location.hostname.toLowerCase();
    const param = (new URLSearchParams(window.location.search).get("lp") || "").toLowerCase();
    const ref = typeof document !== "undefined" ? document.referrer.toLowerCase() : "";
    setWaMsg(resolveMessage(`${param} ${host} ${ref}`));
  }, []);

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

  return (
    <LpProvider>
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
