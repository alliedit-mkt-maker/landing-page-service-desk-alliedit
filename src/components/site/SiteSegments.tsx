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
  return (
    <section aria-labelledby="site-segmentos" className="relative bg-[#0A0E12] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <h2
          id="site-segmentos"
          className="font-chillax text-[1.8rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.4rem]"
        >
          Segmentos que atendemos
        </h2>
        <p className="font-inter mt-4 max-w-[60ch] text-[15px] leading-relaxed text-white/65">
          Operações críticas, com particularidades próprias de cada setor.
        </p>
      </div>

      <div className="mt-12 flex w-full snap-x snap-mandatory overflow-x-auto">
        {SEGMENTS.map((s) => (
          <article
            key={s.name}
            className="group relative h-[440px] w-[68vw] shrink-0 snap-start overflow-hidden sm:h-[520px] sm:w-[38vw] lg:w-[16.6666vw]"
          >
            <img
              src={s.src}
              alt={s.name}
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
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
            <div className="absolute inset-x-0 bottom-0 p-5">
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
