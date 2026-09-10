import { Link } from "@tanstack/react-router";

export function SiteCta() {
  return (
    <section aria-labelledby="site-cta" className="relative z-10 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2
          id="site-cta"
          className="font-chillax text-[1.7rem] font-bold leading-tight tracking-tight text-[var(--site-ink)] sm:text-[2.1rem]"
        >
          Vamos conversar sobre a TI da sua empresa?
        </h2>
        <p className="font-inter mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed text-[var(--site-muted)]">
          Em uma conversa de 30 minutos, a gente entende sua operação atual e mostra onde dá pra
          ganhar eficiência, segurança e previsibilidade. Sem compromisso.
        </p>
        <Link
          to="/site/contato"
          className="font-inter mt-9 inline-flex h-11 items-center justify-center whitespace-nowrap border border-[var(--site-blue)] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--site-blue)] transition-colors duration-200 hover:bg-[var(--site-blue)] hover:text-white"
        >
          Falar com especialista
        </Link>
      </div>
    </section>
  );
}
