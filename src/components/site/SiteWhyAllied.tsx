import { useEffect, useRef, useState } from "react";

const POINTS = [
  {
    title: "Gestão por indicadores",
    text: "Decisões baseadas em dados e SLA, com transparência total.",
  },
  {
    title: "Atendimento humanizado",
    text: "Você fala com gente que entende do seu negócio, não com um script.",
  },
  {
    title: "Operação madura",
    text: "Processos parametrizados, equipe que já viu (e resolveu) de tudo.",
  },
];

function useCountUp(target: number) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 1200);
          setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return { ref, value };
}

export function SiteWhyAllied() {
  const { ref, value } = useCountUp(7);

  return (
    <section aria-labelledby="site-why" className="relative z-10 bg-[#0A0E12] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2
            id="site-why"
            className="font-chillax max-w-[16ch] text-[1.8rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.3rem]"
          >
            Mais que um fornecedor de TI. Um parceiro de operação.
          </h2>
          <p className="font-inter mt-6 max-w-[54ch] text-[15px] leading-relaxed text-white/65">
            Cada projeto desenhado para a sua realidade, não um pacote de prateleira. A gente assume
            a complexidade pra você focar no que faz de melhor.
          </p>
        </div>

        <div>
          <p className="font-chillax flex items-baseline gap-3 text-white">
            <span ref={ref} className="text-[4rem] font-bold leading-none sm:text-[5rem]">
              +{value}
            </span>
            <span className="font-inter text-[13px] uppercase tracking-[0.18em] text-white/60">
              anos de operação
            </span>
          </p>

          <ul className="mt-12 space-y-8">
            {POINTS.map((p) => (
              <li key={p.title} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="mt-3 h-px w-8 shrink-0 bg-[var(--site-yellow)]"
                />
                <div>
                  <h3 className="font-chillax text-[17px] font-semibold text-white">{p.title}</h3>
                  <p className="font-inter mt-1.5 max-w-[46ch] text-[14px] leading-relaxed text-white/60">
                    {p.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
