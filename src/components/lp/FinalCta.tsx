import { useLp } from "./LpProvider";

export function FinalCta() {
  const { openModal } = useLp();
  return (
    <section className="py-32 px-6 bg-petrol text-white text-center" id="contato">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-6 block">Próximo passo</span>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 text-balance">
          Vamos conversar sobre o seu Service Desk?
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Em 30 minutos a gente entende a sua operação atual e mostra onde dá pra ganhar previsibilidade, reduzir custo e tirar peso da equipe interna. Sem compromisso.
        </p>
        <button
          onClick={() => openModal("final_cta")}
          className="bg-white text-petrol px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-gold transition-colors mb-6"
        >
          Falar com especialista
        </button>
        <p className="text-white/50 text-sm mt-4">
          Resposta em até <span className="text-gold font-semibold">4 horas úteis</span>. Atendimento direto pelo time comercial sênior. Sem robô, sem SDR cru.
        </p>
      </div>
    </section>
  );
}