import { useLp } from "./LpProvider";

const items = [
  { title: "20+ anos operando TI corporativa", body: "Operação madura, processos parametrizados, equipe que já viu de tudo." },
  { title: "Especialização vertical real", body: "Hotelaria, saúde, varejo multi-unidade, farma, logística. Sabemos a particularidade de cada setor." },
  { title: "Service Desk integrado com NOC e SOC", body: "Monitoramento ativo de infra e segurança no mesmo time que opera o atendimento. Sem retrabalho." },
  { title: "Land and expand provado", body: "Mais de 10 unidades de Louvre Hotels Group, 7 de Body Tech, multi-CNPJ na Mundial. Crescemos com você." },
  { title: "Foco no que não é seu core", body: "Você cuida do que faz a empresa única. A gente cuida da operação técnica." },
];

export function WhyAllied() {
  const { openModal } = useLp();
  return (
    <section className="py-24 px-6 border-b border-border" id="por-que">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            Por que empresas que não podem errar escolhem a AlliedIT
          </h2>
          <p className="text-petrol/60 text-lg">
            O mercado está cheio de fornecedor genérico. A AlliedIT entrega especialização vertical e relação de longo prazo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map((it, i) => (
            <article key={it.title} className="bg-surface p-8">
              <span className="font-mono text-[11px] text-gold mb-4 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-extrabold text-xl mb-3 leading-tight text-balance">{it.title}</h3>
              <p className="text-petrol/70 text-sm leading-relaxed">{it.body}</p>
            </article>
          ))}
          <div className="bg-petrol p-8 flex items-end">
            <button
              onClick={() => openModal("why_allied")}
              className="text-white text-left font-extrabold text-xl leading-tight group"
            >
              Falar com especialista
              <span className="block mt-3 font-mono text-[11px] text-gold uppercase tracking-widest group-hover:translate-x-1 transition-transform">→ Iniciar conversa</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}