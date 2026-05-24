import { useLp } from "./LpProvider";

const logos = [
  "Louvre Hotels", "Golden Tulip", "Royal Tulip", "GJP Hotéis", "Wish", "Sax Hotéis",
  "Apsen", "Vitta", "Femme", "Sephora", "Lojas Mel", "HS Modas",
  "Hylink", "Neolat", "HNT Hortifruti", "Body Tech", "Mundial Logística", "Wisepay",
];

export function Clients() {
  const { openModal } = useLp();
  return (
    <section className="py-20 border-b border-border bg-petrol/[0.02]" aria-labelledby="clientes-heading">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="clientes-heading" className="font-mono text-[10px] uppercase tracking-[0.25em] text-petrol/50 mb-12">
          Alguns dos nossos clientes
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-6">
          {logos.map((name) => (
            <div
              key={name}
              aria-label={`Cliente AlliedIT: ${name}`}
              className="h-8 flex items-center justify-center text-petrol/40 hover:text-petrol/90 transition-colors uppercase font-bold text-sm tracking-tight text-center"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => openModal("clients")}
            className="border border-petrol/20 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol hover:text-white transition-colors text-petrol"
          >
            Falar com um especialista
          </button>
        </div>
      </div>
    </section>
  );
}