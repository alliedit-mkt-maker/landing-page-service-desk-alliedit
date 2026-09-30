import { createFileRoute, Link } from "@tanstack/react-router";
import alliedLogo from "@/assets/field-service/allied-it-branco.png.asset.json";

export const Route = createFileRoute("/lp/field-service/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado | AlliedIT Field Services" },
      { name: "description", content: "Recebemos seus detalhes. Em breve entraremos em contato." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-foreground flex flex-col">
      <header className="w-full bg-brand py-5">
        <div className="mx-auto max-w-7xl px-6 flex justify-center">
          <Link to="/">
            <img src={alliedLogo.url} alt="AlliedIT" className="h-9 w-auto" />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-brand-deep leading-[1.05]">
            Recebemos seus detalhes!
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            Em breve faremos contato por e-mail, telefone e WhatsApp.
          </p>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-black text-brand-deep">
              Precisa falar agora?
            </h2>
            <a
              href={`https://wa.me/5511943319875?text=${encodeURIComponent("Olá, me interessei pelo Field Services da AlliedIT")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-foreground transition hover:bg-brand-deep"
            >
              Chame no WhatsApp
            </a>
          </div>

          <hr className="my-16 border-foreground/15" />

          <Link
            to="/"
            className="inline-block border border-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-brand-foreground"
          >
            Explore nosso site
          </Link>
        </div>
      </main>

      <footer className="border-t border-foreground/10 py-6">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-foreground/60">
          <p>© 2026 AlliedIT. Todos os direitos reservados.</p>
          <p className="flex gap-4">
            <a href="https://alliedit.com.br/politica-de-privacidade/" target="_blank" rel="noreferrer" className="hover:text-brand">Política de Privacidade</a>
            <a href="https://alliedit.com.br/termos-de-uso/" target="_blank" rel="noreferrer" className="hover:text-brand">Termos e Condições</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
