import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Depoimentos temporários de exemplo. Substituir por depoimentos reais de clientes.
const ITEMS = [
  {
    name: "Nome do Cliente",
    role: "Cargo — Empresa Exemplo",
    quote:
      "Texto de depoimento de exemplo. Este espaço será substituído por um depoimento real de cliente da Allied IT.",
  },
  {
    name: "Nome do Cliente",
    role: "Cargo — Empresa Exemplo",
    quote:
      "Texto de depoimento de exemplo. Este espaço será substituído por um depoimento real de cliente da Allied IT.",
  },
  {
    name: "Nome do Cliente",
    role: "Cargo — Empresa Exemplo",
    quote:
      "Texto de depoimento de exemplo. Este espaço será substituído por um depoimento real de cliente da Allied IT.",
  },
];

export function SiteTestimonials() {
  const [index, setIndex] = useState(0);
  const item = ITEMS[index];
  const go = (dir: number) => setIndex((i) => (i + dir + ITEMS.length) % ITEMS.length);

  const btn =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10";

  return (
    <section
      aria-labelledby="site-depoimentos"
      className="relative z-10 bg-[#0A0E12] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="flex items-center justify-between gap-6">
          <h2
            id="site-depoimentos"
            className="font-chillax max-w-[20ch] text-[1.6rem] font-bold leading-tight tracking-tight text-white sm:text-[2rem]"
          >
            O que dizem quem já confia na Allied IT
          </h2>
          <div className="flex shrink-0 gap-3">
            <button type="button" aria-label="Depoimento anterior" className={btn} onClick={() => go(-1)}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" aria-label="Próximo depoimento" className={btn} onClick={() => go(1)}>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <figure
          key={index}
          className="animate-fade-up mt-12 border border-white/12 bg-white/[0.03] p-8 sm:p-12"
        >
          <blockquote className="font-chillax text-[1.15rem] font-medium leading-relaxed text-white sm:text-[1.4rem]">
            “{item.quote}”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="font-inter flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[13px] font-semibold text-white/70"
            >
              {item.name
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("")}
            </span>
            <span>
              <span className="font-inter block text-[14px] font-semibold text-white">
                {item.name}
              </span>
              <span className="font-inter block text-[13px] text-white/55">{item.role}</span>
            </span>
          </figcaption>
        </figure>

        <div className="mt-8 flex justify-center gap-2">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para o depoimento ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-[var(--site-yellow)]" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
