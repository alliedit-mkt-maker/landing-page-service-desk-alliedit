import { useLp } from "./LpProvider";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const { openModal } = useLp();
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-petrol text-white text-center relative overflow-hidden" id="contato">
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 size-[520px] rounded-full bg-gold/10 blur-3xl animate-float-slow" />
      <div className="max-w-4xl mx-auto relative">
        <Reveal variant="fade-up">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-6 block">Próximo passo</span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 text-balance">
            Vamos conversar sobre o seu Service Desk?
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={220}>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            Em 30 minutos a gente entende a sua operação atual e mostra onde dá pra ganhar previsibilidade, reduzir custo e tirar peso da equipe interna. Sem compromisso.
          </p>
        </Reveal>
        <Reveal variant="scale-in" delay={340}>
          <button
            onClick={() => openModal("final_cta")}
            className="btn-sheen bg-white text-petrol px-10 sm:px-12 py-5 sm:py-6 text-sm font-bold uppercase tracking-widest hover:bg-gold transition-colors mb-6"
          >
            Falar com especialista
          </button>
        </Reveal>
      </div>
    </section>
  );
}