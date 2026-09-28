import { createFileRoute, Link } from "@tanstack/react-router";
import { KeyRound, ArrowRightLeft, LifeBuoy, type LucideIcon } from "lucide-react";
import { LP_ON_ROOT_DOMAIN, PUBLIC_ORIGIN } from "@/lib/site";
import { ogImageUrl } from "@/lib/seo";
import { LpProvider, useLp } from "@/components/lp/LpProvider";
import { Clients } from "@/components/lp/Clients";
import { Reveal } from "@/components/lp/Reveal";
import logoAlliedIt from "@/assets/logo-alliedit.png";

const title = "Licenciamento Microsoft 365 para empresas | Allied IT";
const description =
  "Microsoft 365 com licença, configuração, migração e suporte da Allied IT. Word, Excel, Teams, Outlook e SharePoint.";
const canonical = LP_ON_ROOT_DOMAIN
  ? `${PUBLIC_ORIGIN}/lp/microsoft-365`
  : "https://lp-sd-alliedit.lovable.app/lp/microsoft-365";

export const microsoft365Head = () => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonical },
    { property: "og:type", content: "website" },
    { property: "og:image", content: ogImageUrl() },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImageUrl() },
  ],
  links: [{ rel: "canonical", href: canonical }],
});

export const Route = createFileRoute("/lp/microsoft-365")({
  head: microsoft365Head,
  component: Microsoft365Page,
});

export function Microsoft365Page() {
  return (
    <LpProvider modalTitle="Vamos falar do seu Microsoft 365.">
      <div className="min-h-screen bg-surface text-petrol font-sans">
        <main>
          <Hero />
          <Clients centered />
          <Plans />
          <Why />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </LpProvider>
  );
}

function YellowBtn({ source }: { source: string }) {
  const { openModal } = useLp();
  return (
    <button
      onClick={() => openModal(source)}
      className="btn-sheen bg-gold text-petrol px-8 py-4 text-xs font-bold uppercase tracking-widest hover:brightness-105 transition"
    >
      Adquira sua licença
    </button>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center px-4 sm:px-6 py-20 text-white bg-foreground overflow-hidden">
      {/* Espaço reservado para a imagem de fundo */}
      <div aria-hidden className="absolute inset-0 bg-muted-foreground/40" />
      <div aria-hidden className="absolute inset-0 bg-foreground/70" />
      <div className="relative max-w-4xl mx-auto text-center">
        <img src={logoAlliedIt} alt="AlliedIT" className="h-10 sm:h-12 w-auto mx-auto mb-10 brightness-0 invert" />
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-6 block">
          Licenciamento Microsoft 365
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 text-balance">
          Sua empresa pronta para trabalhar em qualquer lugar
        </h1>
        <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Word, Excel, Teams, Outlook e SharePoint em um único ambiente seguro. A Allied IT cuida da licença, da configuração e do suporte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <YellowBtn source="hero" />
          <a
            href="#planos"
            className="border border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-petrol transition-colors"
          >
            Ver planos ↓
          </a>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    title: "Pequenas e Médias Empresas",
    text: "Ferramentas essenciais de produtividade e colaboração, com custo por usuário sob medida pro seu time.",
  },
  {
    title: "Grandes Empresas",
    text: "Segurança avançada, gestão centralizada de dispositivos e suporte dedicado pra operações complexas.",
  },
];

function Plans() {
  const { openModal } = useLp();
  return (
    <section id="planos" className="py-20 sm:py-28 px-4 sm:px-6 bg-muted scroll-mt-4">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="fade-up">
          <div className="text-center mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-4 block">Planos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-balance">
              Escolha o plano ideal para sua empresa
            </h2>
            <p className="text-petrol/70 max-w-2xl mx-auto">
              Selecionamos o combo certo de ferramentas pro tamanho e a fase da sua empresa.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {PLANS.map((p, i) => (
            <Reveal key={p.title} variant="fade-up" delay={i * 120}>
              <div className="h-full bg-surface p-8 sm:p-10 flex flex-col border-t-4 border-petrol">
                <h3 className="text-2xl font-extrabold tracking-tight mb-4">{p.title}</h3>
                <p className="text-petrol/70 leading-relaxed mb-8 flex-1">{p.text}</p>
                <button
                  onClick={() => openModal(`plano_${i}`)}
                  className="self-start text-xs font-bold uppercase tracking-widest border-b-2 border-gold pb-1 hover:text-petrol-light transition-colors"
                >
                  Comparar planos →
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: KeyRound, title: "Licenciamento sem complicação", text: "Cuidamos da contratação, ativação e renovação das licenças certas pro tamanho da sua empresa." },
  { icon: ArrowRightLeft, title: "Migração sem perder nada", text: "Trocamos seu e-mail e arquivos atuais pro Microsoft 365 preservando tudo que já existe." },
  { icon: LifeBuoy, title: "Suporte que resolve", text: "Se travou, você liga pra gente. Suporte técnico incluso pro dia a dia." },
];

function Why() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-foreground text-white overflow-hidden">
      {/* Espaço reservado para a imagem de fundo sutil */}
      <div aria-hidden className="absolute inset-0 bg-petrol/10" />
      <div className="relative max-w-6xl mx-auto text-center">
        <Reveal variant="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter mb-14 text-balance">
            Por que licenciar Microsoft 365 com a Allied IT
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mb-14 text-left">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} variant="fade-up" delay={i * 120}>
              <div className="h-full bg-white/5 border border-white/10 backdrop-blur-sm p-8">
                <r.icon className="size-8 text-gold mb-6" />
                <h3 className="text-xl font-bold mb-3">{r.title}</h3>
                <p className="text-white/65 leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <YellowBtn source="why" />
      </div>
    </section>
  );
}

function FinalCta() {
  const { openModal } = useLp();
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 text-white text-center bg-gradient-to-br from-petrol to-foreground">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-6 block">Próximo passo</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter mb-6 text-balance">Vamos ativar sua licença?</h2>
        <p className="text-white/70 text-base sm:text-lg mb-10 leading-relaxed">
          Conta quantos usuários sua empresa tem e o que vocês mais usam no dia a dia. A gente volta com o plano certo e o preço fechado.
        </p>
        <button
          onClick={() => openModal("final_cta")}
          className="border border-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-petrol transition-colors"
        >
          Solicitar proposta
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white/60 py-8 px-4 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© 2026 AlliedIT. Todos os direitos reservados.</span>
        <div className="flex gap-6">
          <Link to="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
          <Link to="/termos-de-uso" className="hover:text-white">Termos e Condições</Link>
        </div>
      </div>
    </footer>
  );
}
