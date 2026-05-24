import { useLp } from "./LpProvider";

const bullets = [
  "Mais de 20 anos de mercado",
  "Cobertura 24x7",
  "Três níveis de suporte integrados (N1, N2 e N3)",
];

export function Hero() {
  const { openModal } = useLp();
  return (
    <section className="relative pt-16 pb-24 px-6 border-b border-border" id="hero">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl animate-fade-up">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-6 block">
            Operação terceirizada de Service Desk
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-balance leading-[0.95] mb-10 text-petrol">
            A operação de TI das empresas que não podem errar.
          </h1>
          <ul className="grid md:grid-cols-3 gap-6 mb-12 lg:max-w-none">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 lg:whitespace-nowrap">
                <div aria-hidden className="size-5 rounded-full border-2 border-gold shrink-0 mt-0.5" />
                <p className="text-sm font-medium leading-snug text-petrol/90">{b}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => openModal("hero_primary")}
              className="bg-petrol text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol-light transition-colors"
            >
              Falar com especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}