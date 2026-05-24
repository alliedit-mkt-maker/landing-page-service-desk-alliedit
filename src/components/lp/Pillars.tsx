import { useLp } from "./LpProvider";

const pillars = [
  {
    title: "Cobertura 24x7 verdadeira",
    main: "Atendimento humano todos os dias do ano. Sem improviso, sem horário comercial maquiado.",
    micro: {
      internal: "Você não precisa contratar mais ninguém pra cobrir madrugada e fim de semana.",
      external: "Você não precisa ligar três vezes pra ser atendido fora do horário comercial.",
      default: "Cobertura real, sem hora extra e sem fornecedor que some.",
    },
  },
  {
    title: "Três níveis integrados",
    main: "N1, N2 e N3 na mesma equipe. Sem ruído entre operação e administração.",
    micro: {
      internal: "Você não precisa formar técnico N3 internamente.",
      external: "Sem chamado se perdendo entre fornecedores diferentes.",
      default: "Operação completa em um único contrato, sem amarras.",
    },
  },
  {
    title: "Governança real",
    main: "Resolvemos a causa, não só o sintoma. Operação que reduz chamado, não vive dele.",
    micro: {
      internal: "Sua equipe interna deixa de apagar incêndio e foca no estratégico.",
      external: "Análise de causa raiz no contrato, em vez de só fechar ticket.",
      default: "Operação que evolui em vez de só atender.",
    },
  },
  {
    title: "Custo previsível",
    main: "Mensalidade fixa por escopo. Cresce em degraus claros conforme o seu negócio cresce.",
    micro: {
      internal: "Custo total menor que manter time próprio. Redução típica de 20% a 40%.",
      external: "Sem hora extra escondida nem cobrança fora do contrato.",
      default: "Você sabe quanto vai pagar. Sem surpresa no fim do mês.",
    },
  },
];

export function Pillars() {
  const { openModal } = useLp();

  return (
    <section className="py-24 px-6 border-b border-border bg-petrol/[0.02]" id="pilares">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            O que muda quando o Service Desk é da AlliedIT
          </h2>
          <p className="text-petrol/60 text-lg">
            Não importa se você está terceirizando pela primeira vez ou trocando de fornecedor. A AlliedIT entrega quatro coisas em comum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {pillars.map((p, i) => (
            <article key={p.title} className="bg-surface p-8 flex flex-col">
              <span className="font-mono text-[11px] text-gold mb-4">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-extrabold text-xl mb-4 leading-tight text-balance">{p.title}</h3>
              <p className="text-petrol/80 text-sm leading-relaxed">{p.main}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => openModal("pillars")}
            className="bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
          >
            Falar com especialista
          </button>
        </div>
      </div>
    </section>
  );
}