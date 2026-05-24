import { useLp } from "./LpProvider";

const dims = [
  { title: "Dedicado ou compartilhado", body: "Time exclusivo pra sua operação, ou compartilhado entre clientes na nossa estrutura de Alphaville. Você escolhe conforme volume e maturidade." },
  { title: "On-site, remoto ou híbrido", body: "Equipe na sua sede, no nosso escritório, ou modelo misturado. Conforme a necessidade da operação e o perfil dos seus usuários." },
  { title: "Equipamento seu ou nosso", body: "Time usa os equipamentos do seu inventário, ou os nossos. Ambos funcionam. Muda só o modelo financeiro." },
  { title: "Escopo modular", body: "Comece com N1, expanda pra N2, N3, NOC, SOC ou Field conforme o negócio cresce. Sem precisar fechar pacote engessado." },
];

export function Flexibility() {
  const { openModal } = useLp();
  return (
    <section className="py-24 px-6 bg-petrol text-white overflow-hidden" id="flexibilidade">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-balance">
            Cada operação é diferente. Seu contrato também é
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-md">
            Dedicado ou compartilhado. Time presencial, remoto ou híbrido. Equipamento seu ou nosso. Escopo modular. Você desenha a operação que faz sentido. A gente entrega.
          </p>
          <button
            onClick={() => openModal("flexibility")}
            className="bg-gold text-petrol px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Desenhar meu contrato com um especialista
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {dims.map((d) => (
            <article key={d.title} className="bg-petrol p-8">
              <h3 className="font-bold mb-3 text-lg">{d.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{d.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}