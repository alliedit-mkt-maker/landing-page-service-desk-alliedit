import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import apsenPhoto from "@/assets/testimonials/apsen.jpg.asset.json";
import hortifrutiPhoto from "@/assets/testimonials/hortifruti.jpeg.asset.json";
import ipanemaPhoto from "@/assets/testimonials/ipanema.jpg.asset.json";
import leandroPhoto from "@/assets/testimonials/leandro-souza.png.asset.json";

const ITEMS = [
  {
    name: "CIO",
    role: "Apsen Farmacêutica",
    photo: apsenPhoto.url,
    quote:
      "Notamos uma economia de mais de 30% e um aumento de 50% na qualidade percebida dos nossos serviços. Essas mudanças foram fundamentais para o crescimento e sucesso da nossa empresa.",
  },
  {
    name: "Gerente de TI",
    role: "HortiFruti Natural da Terra",
    photo: hortifrutiPhoto.url,
    quote:
      "A operação melhorou significativamente com constante aumento de chamados atendidos aos usuários e elevação no nível de satisfação. Tem sido uma empresa que não mede esforços em atender com agilidade e qualidade.",
  },
  {
    name: "Gerente de TI",
    role: "Queijos Ipanema",
    photo: ipanemaPhoto.url,
    quote:
      "Sempre fui atendido com muita rapidez e comprometimento com o resultado. Hoje, posso afirmar que essa parceria foi de grande sucesso para nós. Profissionais gabaritados, que nos atendem com muita dedicação.",
  },
  {
    name: "Especialista em Redes e Infraestrutura Cloud",
    role: "Puravida",
    photo: leandroPhoto.url,
    quote:
      "Desde o início do projeto, eles demonstraram um alto nível de comprometimento, dedicação e profissionalismo.",
  },

];

const GAP_REM = 1.5;

export function SiteTestimonials() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setPerView(mq.matches ? 3 : 1);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const maxStart = Math.max(0, ITEMS.length - perView);
  const [start, setStart] = useState(0);
  useEffect(() => {
    setStart((s) => Math.min(s, maxStart));
  }, [maxStart]);
  const go = (dir: number) =>
    setStart((s) => Math.min(maxStart, Math.max(0, s + dir)));
  const pages = maxStart + 1;
  const page = Math.min(start, maxStart);
  const setPage = setStart;
  const itemBasis = `calc((100% - ${(perView - 1) * GAP_REM}rem) / ${perView})`;
  const shift = `translateX(calc(-${page} * ((100% + ${GAP_REM}rem) / ${perView})))`;



  const btn =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10";

  return (
    <section
      aria-labelledby="site-depoimentos"
      className="relative z-10 bg-[#0A0E12] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between gap-6">
          <h2
            id="site-depoimentos"
            className="font-chillax max-w-[20ch] text-[1.6rem] font-bold leading-tight tracking-tight text-white sm:text-[2rem]"
          >
            O que dizem quem já confia na Allied IT
          </h2>
          {pages > 1 && (
            <div className="flex shrink-0 gap-3">
              <button type="button" aria-label="Depoimentos anteriores" disabled={page === 0} className={`${btn} disabled:opacity-35`} onClick={() => go(-1)}>
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Próximos depoimentos" disabled={page === maxStart} className={`${btn} disabled:opacity-35`} onClick={() => go(1)}>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex items-stretch gap-6 transition-transform duration-500 ease-out"
            style={{ transform: shift }}
          >
          {ITEMS.map((item) => (
            <figure
              key={item.quote}
              style={{ flex: `0 0 ${itemBasis}` }}
              className="flex flex-col justify-between border border-white/12 bg-white/[0.03] p-6 sm:p-8"
            >
              <blockquote className="font-chillax text-[1rem] font-medium leading-relaxed text-white sm:text-[1.05rem]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img
                  src={item.photo}
                  alt={`${item.name} — ${item.role}`}
                  loading="lazy"
                  className="h-12 w-12 rounded-full border border-white/20 object-cover"
                />
                <span>
                  <span className="font-inter block text-[14px] font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="font-inter block text-[13px] text-white/55">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
          </div>
        </div>


        {pages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para a página ${i + 1} de depoimentos`}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? "w-6 bg-[var(--site-yellow)]" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
