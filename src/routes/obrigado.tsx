import { createFileRoute, Link } from "@tanstack/react-router";
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

const crossSell = [
  { title: "NOC + SOC integrados", body: "Monitoramento 24x7 de infraestrutura e segurança no mesmo time." },
  { title: "Field Service multi-unidade", body: "Atendimento presencial coordenado para empresas com várias filiais." },
  { title: "Administração de Cloud com FinOps", body: "Governança e redução de custo em AWS, Azure e GCP." },
];

function ObrigadoPage() {
  return (
    <LpProvider>
      <div className="min-h-screen bg-surface text-petrol flex flex-col">
        <SiteHeader />
        <main className="flex-1 px-6 py-24">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-6 block">
              Contato recebido
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance leading-[0.95]">
              Recebemos seu contato.
            </h1>
            <p className="text-petrol/70 text-lg mb-12 max-w-2xl">
              Em até <strong className="text-petrol">4 horas úteis</strong> um especialista da AlliedIT retorna pelo canal informado. Enquanto isso, conheça outros serviços que podem fazer sentido pra sua operação.
            </p>

            <div className="grid md:grid-cols-3 gap-px bg-border border border-border mb-12">
              {crossSell.map((s) => (
                <article key={s.title} className="bg-surface p-6">
                  <h2 className="font-extrabold text-lg mb-3 leading-tight">{s.title}</h2>
                  <p className="text-petrol/70 text-sm leading-relaxed">{s.body}</p>
                </article>
              ))}
            </div>

            <div className="border border-border p-8 bg-petrol/[0.02]">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-3 block">
                Precisa falar agora?
              </span>
              <p className="text-petrol/80 mb-6">
                Atendimento direto pelo nosso WhatsApp comercial.
              </p>
              <a
                href="https://wa.me/551140005000?text=Ol%C3%A1%2C%20preenchi%20o%20formul%C3%A1rio%20no%20site"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushEvent("whatsapp_click_thankyou")}
                className="inline-flex items-center gap-3 bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-12">
              <Link to="/" className="font-mono text-xs uppercase tracking-widest text-petrol/60 hover:text-petrol border-b border-petrol/20 hover:border-petrol pb-0.5">
                ← Voltar para o site
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </LpProvider>
  );
}