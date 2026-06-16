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

function ObrigadoPage() {
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
                href="https://wa.me/5511918506992?text=Ol%C3%A1%21%20Me%20interessei%20pelo%20Service%20Desk%20da%20AlliedIT%20e%20gostaria%20de%20falar%20com%20um%20especialista."
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
