import { useLp } from "./LpProvider";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const painsInternal = [
  { title: "Equipe sênior presa no operacional", body: "Técnico bom atendendo chamado simples de cliente final. Enquanto isso, projeto estratégico fica esperando há meses." },
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
  const active = selectedPath;
  const pains = active === "external" ? painsExternal : painsInternal;
  const bridge = active === "internal"
    ? "A AlliedIT assume o suporte e a sua TI interna fica livre pra focar no estratégico."
    : "A AlliedIT é o fornecedor que entrega o que você espera. Especialização vertical, governança real, SLA cumprido.";

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="caminho">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            Como funciona o seu suporte hoje?
          </h2>
          <p className="text-petrol/60">Escolha o seu cenário pra ver o que costuma travar a operação.</p>
        </Reveal>

        <div role="tablist" aria-label="Cenário de suporte atual" className="flex flex-col sm:flex-row justify-center gap-3 mb-12 sm:mb-16">
          <ScenarioBtn active={active === "internal"} onClick={() => setPath("internal")}>
            Tenho suporte interno
          </ScenarioBtn>
          <ScenarioBtn active={active === "external"} onClick={() => setPath("external")}>
            Tenho um fornecedor
          </ScenarioBtn>
        </div>

        {active && (
          <div key={active} className="animate-fade-up">
            <p className="font-mono text-xs uppercase tracking-widest text-petrol/50 mb-6">
              Você pode estar reconhecendo alguns destes sinais.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {pains.map((p, i) => (
                <article key={p.title} className="bg-surface p-6 sm:p-8 group hover:bg-petrol hover:text-white transition-colors" style={{ animation: `reveal-fade-up 0.7s ${i * 80}ms cubic-bezier(0.16,1,0.3,1) both` }}>
                  <span className="font-mono text-[11px] text-gold mb-4 block">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-bold text-base sm:text-lg mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{p.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-6 text-center">
              <p className="font-mono text-sm text-petrol/80 max-w-2xl text-balance text-ink-mid">{bridge}</p>
              <button
                onClick={() => openModal("path_toggle")}
                className="btn-sheen bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
              >
                Quero ver como a AlliedIT resolve isso
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ScenarioBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "px-6 py-4 text-xs font-bold uppercase tracking-widest border transition-all",
        active
          ? "bg-petrol text-white border-petrol"
          : "bg-surface text-petrol border-petrol/20 hover:border-petrol hover:bg-petrol/5"
      )}
    >
      {children}
    </button>
  );
}