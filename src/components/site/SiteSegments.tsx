import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hotelaria from "@/assets/sobre/seg-hotelaria.jpg.asset.json";
import farma from "@/assets/sobre/seg-farma.jpg.asset.json";
import varejo from "@/assets/sobre/seg-varejo.jpg.asset.json";
import saude from "@/assets/sobre/seg-saude.jpg";
import alimenticia from "@/assets/sobre/seg-alimenticia.jpg.asset.json";
import logistica from "@/assets/sobre/seg-logistica.jpg.asset.json";

const SEGMENTS: { name: string; src: string }[] = [
  { name: "Hotelaria", src: hotelaria.url },
  { name: "Indústria Farmacêutica", src: farma.url },
  { name: "Rede Varejista", src: varejo.url },
  { name: "Saúde (Rede Hospitalar)", src: saude },
  { name: "Indústria Alimentícia", src: alimenticia.url },
  { name: "Logística", src: logistica.url },
];

export function SiteSegments() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? (card as HTMLElement).offsetWidth + 20 : el.clientWidth * 0.5;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrowBase =
    "flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors duration-200 hover:border-[var(--site-yellow)] hover:text-[var(--site-yellow)] disabled:opacity-25 disabled:hover:border-white/20 disabled:hover:text-white";

  return (
    <section aria-labelledby="site-segmentos" className="relative bg-[#0A0E12] py-20 sm:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2
            id="site-segmentos"
            className="font-chillax text-[1.9rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.6rem]"
          >
            Segmentos que atendemos
          </h2>
          <p className="font-inter mt-4 max-w-[52ch] text-[15px] leading-relaxed text-white/65">
            Operações críticas, com particularidades próprias de cada setor.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Segmento anterior"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            className={arrowBase}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Próximo segmento"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            className={arrowBase}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex w-full snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SEGMENTS.map((s) => (
          <article
            key={s.name}
            className="group relative h-[460px] w-[80vw] shrink-0 snap-start overflow-hidden sm:h-[560px] sm:w-[46vw] lg:h-[620px] lg:w-[calc((100%-60px)/4)]"
          >
            <img
              src={s.src}
              alt={s.name}
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <span aria-hidden="true" className="site-noise opacity-70" />
            <span
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.08) 100%)",
              }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(0deg, rgba(7,111,140,0.85) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.25) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="font-inter inline-block bg-transparent px-0 py-2 text-[13px] font-light uppercase leading-tight tracking-[0.16em] text-white transition-all duration-500 group-hover:bg-[var(--site-yellow)] group-hover:px-3 group-hover:text-[#0A0E12]">
                {s.name}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
