import { useLp } from "./LpProvider";
import { Reveal } from "./Reveal";

const bullets = [
  "Service Desk medido por SLAs, processos e controle de qualidade",
  "Presencial, remoto ou híbrido | modelo sob medida",
  "Head dedicado na sua conta com acesso à diretoria",
];

export function Hero() {
  const { openModal } = useLp();
  return (
    <section
      className="relative overflow-hidden pt-20 sm:pt-28 pb-24 sm:pb-36 px-4 sm:px-6"
      id="hero"
      style={{
        backgroundImage:
          "radial-gradient(60% 60% at 85% 0%, color-mix(in oklch, var(--gold) 18%, transparent), transparent 70%), radial-gradient(55% 55% at 0% 50%, color-mix(in oklch, var(--petrol) 10%, transparent), transparent 70%), linear-gradient(180deg, color-mix(in oklch, var(--gold) 8%, var(--surface)) 0%, color-mix(in oklch, var(--gold) 4%, var(--surface)) 55%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-5xl relative">
          <Reveal variant="fade-up">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4 sm:mb-6 block">
              Operação terceirizada de Service Desk
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-balance leading-[0.95] mb-8 sm:mb-10 text-ink">
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