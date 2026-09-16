import { useEffect, useRef } from "react";
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

const LOOP = [...SEGMENTS, ...SEGMENTS];

export function SiteSegments() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offset = useRef(0);
  const paused = useRef(false);
  const dragging = useRef(false);
  const drag = useRef({ startX: 0, startOffset: 0 });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = performance.now();
    const SPEED = 34; // px per second

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const half = el.scrollWidth / 2;
      if (half > 0) {
        if (!paused.current && !dragging.current) offset.current += SPEED * dt;
        if (offset.current >= half) offset.current -= half;
        if (offset.current < 0) offset.current += half;
        el.style.transform = `translate3d(${-offset.current}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    drag.current = { startX: e.clientX, startOffset: offset.current };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    offset.current = drag.current.startOffset - (e.clientX - drag.current.startX);
  };
  const endDrag = () => {
    dragging.current = false;
  };

  return (
    <section aria-labelledby="site-segmentos" className="relative bg-[#0A0E12] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
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

      <div className="mt-12 w-full overflow-hidden px-5 sm:px-8">
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="flex w-max cursor-grab gap-5 select-none will-change-transform active:cursor-grabbing"
        >
          {LOOP.map((s, i) => (
            <article
              key={`${s.name}-${i}`}
              className="group relative h-[460px] w-[80vw] shrink-0 overflow-hidden sm:h-[560px] sm:w-[46vw] lg:h-[620px] lg:w-[380px]"
            >
              <img
                src={s.src}
                alt={s.name}
                loading="lazy"
                draggable={false}
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
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-inter inline-block bg-transparent px-0 py-2 text-[13px] font-light uppercase leading-tight tracking-[0.16em] text-white transition-all duration-500 group-hover:bg-[var(--site-yellow)] group-hover:px-3 group-hover:text-[#0A0E12]">
                  {s.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
