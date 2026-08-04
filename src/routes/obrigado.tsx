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
const WA_MSG_CABEAMENTO =
  "Olá! Me interessei pelos serviços de cabeamento e redes da AlliedIT e gostaria de falar com um especialista.";

function ObrigadoPage() {
  const [isCabeamento, setIsCabeamento] = useState(false);

  useEffect(() => {
    const host = window.location.hostname.toLowerCase();
    const param = new URLSearchParams(window.location.search).get("lp");
    setIsCabeamento(host.includes("cabeamento") || param === "cabeamento");
  }, []);

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    isCabeamento ? WA_MSG_CABEAMENTO : WA_MSG_DEFAULT,
  )}`;

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
