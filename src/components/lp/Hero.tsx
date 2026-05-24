import { useLp } from "./LpProvider";
import { Reveal } from "./Reveal";

const bullets = [
  "Mais de 20 anos de mercado",
  "Cobertura 24x7",
  "Três níveis de suporte integrados (N1, N2 e N3)",
];

export function Hero() {
  const { openModal } = useLp();
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 border-b border-border" id="hero">
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-5xl relative">
          <Reveal variant="fade-up">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4 sm:mb-6 block">
              Operação terceirizada de Service Desk
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-balance leading-[0.95] mb-8 sm:mb-10 text-petrol">
              A operação de TI por trás das marcas que você conhece.
            </h1>
          </Reveal>
          <ul className="flex flex-col gap-4 sm:gap-5 mb-10 sm:mb-12">
            {bullets.map((b, i) => (
              <Reveal as="li" key={b} variant="fade-up" delay={240 + i * 100} className="flex items-start gap-3">
                <div aria-hidden className="size-5 rounded-full border-2 border-gold shrink-1 mt-0.5 animate-soft-pulse" />
                <p className="text-sm font-medium leading-snug text-petrol/90">{b}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal variant="fade-up" delay={560}>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openModal("hero_primary")}
                className="btn-sheen bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
              >
                Falar com especialista
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}