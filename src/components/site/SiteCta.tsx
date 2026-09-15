import { Link } from "@tanstack/react-router";
import ctaBanner from "@/assets/site/site-cta-banner.jpg.asset.json";

export function SiteCta() {
  return (
    <section
      aria-labelledby="site-cta"
      className="relative z-10 overflow-hidden bg-[#0A0E12] py-20 sm:py-28"
    >
      <img
        src={ctaBanner.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.74) 45%, rgba(0,0,0,0.58) 78%, rgba(0,0,0,0.42) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2
          id="site-cta"
          className="font-chillax text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]"
        >
          Vamos conversar sobre a TI da sua empresa?
        </h2>
        <p className="font-inter mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed text-white/70">
          Em uma conversa de 30 minutos, a gente entende sua operação atual e mostra onde dá pra
          ganhar eficiência, segurança e previsibilidade. Sem compromisso.
        </p>
        <Link
          to="/site/contato"
          className="font-inter mt-9 inline-flex h-11 items-center justify-center whitespace-nowrap border border-white px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-white hover:text-[#0A0E12]"
        >
          Falar com especialista
        </Link>
      </div>
    </section>
  );
}
