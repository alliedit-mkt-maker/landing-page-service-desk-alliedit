import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ExternalLink } from "lucide-react";

import logoAlliedIt from "@/assets/logo-alliedit.png";
import { Reveal } from "@/components/lp/Reveal";

const title = "AlliedIT | Briefing de campanhas Google Ads";
const description =
  "Documento interno de briefing das campanhas de fundo de funil da AlliedIT no Google Ads, com verba, clusters, keywords e landing pages dedicadas.";

export const Route = createFileRoute("/briefing-campanhas")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: BriefingPage,
});

type Campaign = {
  n: number;
  name: string;
  lp: string;
  priority: "Alta" | "Média" | "Baixa";
  volume: string;
  keywords: string;
  notes?: string[];
};

const hardware: Campaign[] = [
  {
    n: 1,
    name: "Headset Call Center",
    lp: "https://headset-callcenter.alliedit.com.br",
    priority: "Alta",
    volume: "~850/mês",
    keywords: "headset call center (590), headset corporativo (170), comprar headset (90)",
    notes: [
      "Negativar: gamer, bluetooth, sem fio, JBL, fone de ouvido, xbox, ps5, celular",
      "Persona: comprador corporativo (TI ou Compras) equipando time de atendimento ou call center",
    ],
  },
  {
    n: 2,
    name: "Headset Poly",
    lp: "https://headset-poly.alliedit.com.br",
    priority: "Alta",
    volume: "~810/mês",
    keywords: "poly voyager focus 2 (480), poly headset (210), poly blackwire 3220 (90), poly blackwire 3210 (30)",
  },
  {
    n: 3,
    name: "Headset Logitech",
    lp: "https://headset-logitech.alliedit.com.br",
    priority: "Alta",
    volume: "~640/mês",
    keywords: "logitech zone wired (320), logitech zone wireless (320)",
  },
  {
    n: 4,
    name: "Headset Yealink",
    lp: "https://headset-yealink.alliedit.com.br",
    priority: "Alta",
    volume: "~520/mês",
    keywords: "yealink headset (320), yealink uh34 (110), yealink bh70 (70), yealink wh64 (20)",
  },
  {
    n: 5,
    name: "Logitech Rally Bar",
    lp: "https://rally-bar.alliedit.com.br",
    priority: "Alta",
    volume: "~850/mês",
    keywords: "logitech rally bar (590), logitech rally bar mini (260)",
    notes: ["A landing page cobre as duas variantes (Rally Bar e Rally Bar Mini) em seções separadas"],
  },
  {
    n: 6,
    name: "Videoconferência (guarda-chuva multimarca)",
    lp: "https://videoconferencia.alliedit.com.br",
    priority: "Média",
    volume: "~300/mês",
    keywords:
      "equipamento de videoconferência (260), barra de videoconferência (30), videoconferência corporativa (10)",
    notes: [
      "Keywords da linha Yealink de videoconferência (yealink meetingbar 20, yealink mvc 10) podem ser incluídas nesta campanha ou na Campanha 8, a critério da agência",
    ],
  },
  {
    n: 7,
    name: "Poly Studio",
    lp: "https://poly-studio.alliedit.com.br",
    priority: "Média",
    volume: "~260/mês",
    keywords: "poly studio x52 (110), poly studio v12 (90), poly studio x32 (40), poly studio v52 (20)",
  },
  {
    n: 8,
    name: "Videoconferência Yealink",
    lp: "https://yealink-videoconferencia.alliedit.com.br",
    priority: "Baixa",
    volume: "~30/mês",
    keywords: "yealink meetingbar (20), yealink mvc (10), yealink zvc (residual)",
  },
];

const priorityClass: Record<Campaign["priority"], string> = {
  Alta: "bg-gold text-petrol",
  Média: "bg-petrol/12 text-petrol",
  Baixa: "bg-petrol/6 text-petrol/55",
};

const sections = [
  { id: "verba", label: "1. Resumo de verba" },
  { id: "hardware", label: "2. Frente 1: Hardware" },
  { id: "servico", label: "3. Frente 2: Serviço" },
];

function CampaignCard({ c }: { c: Campaign }) {
  return (
    <article className="border border-petrol/15 bg-white shadow-[0_10px_30px_-26px_rgba(0,0,0,0.5)]">
      <header className="bg-petrol px-6 sm:px-8 py-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-2">
          Campanha {c.n}
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">{c.name}</h3>
      </header>

      <div className="flex flex-wrap items-center gap-3 border-b border-petrol/10 bg-surface px-6 sm:px-8 py-4">
        <span
          className={`px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${priorityClass[c.priority]}`}
        >
          Prioridade {c.priority}
        </span>
        <span className="text-[11px] uppercase tracking-[0.15em] text-petrol/55 font-semibold">
          Volume {c.volume}
        </span>
        <a
          href={c.lp}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-2 text-[13px] font-semibold text-petrol underline underline-offset-4 hover:text-gold transition-colors break-all"
        >
          {c.lp.replace("https://", "")}
          <ExternalLink className="size-3.5 shrink-0" aria-hidden />
        </a>
      </div>

      <dl className="px-6 sm:px-8 py-6 space-y-5 text-sm">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/45 font-semibold mb-2">
            Keywords
          </dt>
          <dd className="text-petrol font-medium leading-relaxed">{c.keywords}</dd>
        </div>
        {c.notes?.length ? (
          <div className="border-l-2 border-petrol/20 pl-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-petrol/45 font-semibold mb-2">
              Observações
            </dt>
            <dd>
              <ul className="list-disc pl-4 space-y-1.5 text-petrol/65 leading-relaxed">
                {c.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}

function BriefingPage() {
  return (
    <div className="min-h-screen bg-surface text-petrol font-sans">
      <header
        className="px-4 sm:px-6 py-14 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--petrol) 0%, color-mix(in oklch, var(--petrol) 78%, var(--ink)) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <img src={logoAlliedIt} alt="AlliedIT" className="h-8 sm:h-10 w-auto mb-8 brightness-0 invert" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-4">
            Documento interno · Briefing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05] text-balance">
            Campanhas de fundo de funil: Google Ads
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Briefing para criação de campanhas de captura de demanda de intenção no Google. Uma campanha por cluster,
            com landing page dedicada já publicada para cada uma.
          </p>
        </div>
      </header>


      <nav aria-label="Sumário" className="border-b border-petrol/10 bg-white px-4 sm:px-6 py-5">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-x-8 gap-y-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-petrol/60 hover:text-gold transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16 sm:space-y-24">
        <section id="verba" className="scroll-mt-8">
          <Reveal variant="fade-up">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">Resumo de verba</h2>
          </Reveal>
          <div className="overflow-x-auto border border-petrol/12 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-petrol text-white text-left">
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.12em] text-[11px]">Frente</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.12em] text-[11px]">Campanhas</th>
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.12em] text-[11px]">Verba mensal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-petrol/10">
                  <td className="px-5 py-4">Hardware (headsets + videoconferência)</td>
                  <td className="px-5 py-4">8 campanhas</td>
                  <td className="px-5 py-4">R$ 2.000/mês</td>
                </tr>
                <tr className="border-t border-petrol/10">
                  <td className="px-5 py-4">Serviço (alocação de TI)</td>
                  <td className="px-5 py-4">1 campanha</td>
                  <td className="px-5 py-4">R$ 1.000/mês</td>
                </tr>
                <tr className="border-t border-petrol/10 bg-surface font-bold">
                  <td className="px-5 py-4">Total</td>
                  <td className="px-5 py-4">9 campanhas</td>
                  <td className="px-5 py-4">R$ 3.000/mês</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-petrol/60 leading-relaxed">
            Distribuição da verba de hardware entre as 8 campanhas: a critério da agência conforme performance,
            respeitando a prioridade indicada em cada campanha. CPCs esperados na faixa de R$ 0,20 a R$ 1,50 na maioria
            das keywords de hardware; a campanha de alocação tem CPC mais alto (~R$ 18, B2B disputado).
          </p>
        </section>

        <section id="hardware" className="scroll-mt-8">
          <Reveal variant="fade-up" className="mb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-3">
              Frente 1 · R$ 2.000/mês
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Hardware</h2>
          </Reveal>
          <div className="grid gap-5">
            {hardware.map((c) => (
              <CampaignCard key={c.n} c={c} />
            ))}
          </div>
        </section>

        <section id="servico" className="scroll-mt-8">
          <Reveal variant="fade-up" className="mb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-3">
              Frente 2 · R$ 1.000/mês
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Serviço</h2>
          </Reveal>
          <CampaignCard
            c={{
              n: 9,
              name: "Alocação de Profissionais de TI",
              lp: "https://alocacao-ti.alliedit.com.br",
              priority: "Alta",
              volume: "~90/mês",
              keywords: "alocação de profissionais de ti (50), alocação de mão de obra (40)",
              notes: [
                "Persona: gestor de TI de empresa de grande porte com restrição orçamentária de contratação (CapEx travado, verba disponível em OpEx)",
                "Ticket médio do serviço: R$ 30 a 40 mil",
                "CPC esperado alto (~R$ 18), mercado B2B disputado: volume pequeno, mas cada lead tem valor elevado. Concorrência direta na SERP: GlobalTI, Mirante, UDS, Ewave",
              ],
            }}
          />
          <div className="mt-5 border-l-4 border-gold bg-gold/8 p-6 flex gap-4">
            <AlertTriangle className="size-5 text-gold shrink-0 mt-0.5" aria-hidden />
            <p className="text-sm text-petrol/80 leading-relaxed">
              <strong className="font-bold">Não usar “body shop” como keyword.</strong> Apesar das 5.400 buscas/mês, o
              termo é dominado pela marca de cosméticos The Body Shop e por oficinas de lataria. Verba desperdiçada.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-petrol/10 px-4 sm:px-6 py-8">
        <div className="max-w-4xl mx-auto text-xs text-petrol/45">© 2026 AlliedIT</div>
      </footer>
    </div>
  );
}
