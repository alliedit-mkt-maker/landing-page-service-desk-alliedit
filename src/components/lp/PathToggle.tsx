import { useLp } from "./LpProvider";
import { cn } from "@/lib/utils";

const painsInternal = [
  { title: "Equipe sênior presa no operacional", body: "Técnico bom atendendo chamado de senha e impressora. Projeto estratégico esperando há meses." },
  { title: "Cobertura 24x7 custa caro", body: "Manter time próprio à noite e fim de semana explode hora extra. E na falha fora do horário, ninguém responde." },
  { title: "Turnover alto consome orçamento", body: "Treinar N1, perder em 8 meses, treinar de novo. Ciclo eterno que drena tempo e dinheiro." },
  { title: "Crescimento trava no operacional", body: "Cada nova unidade ou filial exige TI antes de qualquer coisa. Time interno não tem braço pra acompanhar o ritmo." },
];

const painsExternal = [
  { title: "SLA que não cumpre", body: "Atendimento que demora, chamado que fica aberto dias, resposta automática sem ação. Você passou a cobrar o seu fornecedor toda semana." },
  { title: "Sem governança real", body: "Mesmo problema se repetindo. Causa raiz nunca tratada. Operação que vive de apagar incêndio." },
  { title: "Provedor sem especialização", body: "O fornecedor atual atende qualquer empresa do mesmo jeito. Não entende a particularidade do seu setor nem do seu ritmo." },
  { title: "Relacionamento desgastado", body: "Reuniões viraram cobrança. Confiança erodida. Você gerencia o fornecedor em vez do seu negócio." },
];

export function PathToggle() {
  const { selectedPath, setPath, openModal } = useLp();
  const active: "internal" | "external" = selectedPath ?? "internal";
  const pains = active === "internal" ? painsInternal : painsExternal;
  const bridge = active === "internal"
    ? "A AlliedIT assume o suporte e a sua TI interna fica livre pra focar no estratégico."
    : "A AlliedIT é o fornecedor que entrega o que você espera. Especialização vertical, governança real, SLA cumprido.";

  return (
    <section className="py-24 px-6 border-b border-border" id="caminho">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-balance">
              Como funciona o seu suporte hoje?
            </h2>
            <p className="text-petrol/60">Comece pelo seu cenário atual.</p>
          </div>
          <div role="tablist" aria-label="Cenário de suporte atual" className="inline-flex p-1 bg-petrol/5 rounded-full self-start md:self-end">
            <ToggleBtn active={active === "internal"} onClick={() => setPath("internal")}>Hoje meu suporte é interno</ToggleBtn>
            <ToggleBtn active={active === "external"} onClick={() => setPath("external")}>Hoje já tenho um fornecedor</ToggleBtn>
          </div>
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-petrol/50 mb-6">
          Você pode estar reconhecendo alguns destes sinais.
        </p>

        <div key={active} className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border animate-fade-up">
          {pains.map((p, i) => (
            <article key={p.title} className="bg-surface p-8 group hover:bg-petrol hover:text-white transition-colors">
              <span className="font-mono text-[11px] text-gold mb-4 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-bold text-lg mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <p className="font-mono text-sm text-petrol/80 max-w-2xl text-balance">{bridge}</p>
          <button
            onClick={() => openModal("path_toggle")}
            className="bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
          >
            Quero ver como a AlliedIT resolve isso
          </button>
        </div>
      </div>
    </section>
  );
}

function ToggleBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all",
        active ? "bg-petrol text-white shadow-sm" : "text-petrol/50 hover:text-petrol"
      )}
    >
      {children}
    </button>
  );
}