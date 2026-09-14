import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const POINTS = [
  {
    title: "+7 anos operando TI corporativa",
    text: "Operação madura, processos parametrizados, equipe que já viu de tudo.",
  },
  {
    title: "Especialização vertical real",
    text: "Hotelaria, saúde, varejo multi-unidade, farma, logística. Sabemos a particularidade de cada setor.",
  },
  {
    title: "Service Desk integrado com NOC e SOC",
    text: "Monitoramento ativo de infra e segurança no mesmo time que opera o atendimento. Sem retrabalho.",
  },
  {
    title: "Crescemos com você",
    text: "Mais de 10 unidades de Louvre Hotels Group, 7 de Body Tech, multi-CNPJ na Mundial. Você expande, a gente acompanha.",
  },
  {
    title: "Foco no que não é seu core",
    text: "Você cuida do que faz a empresa única. A gente cuida da operação técnica.",
  },
];

export function SiteWhyAllied() {
  return (
    <section
      aria-labelledby="site-why"
      className="relative z-10 overflow-hidden py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(160deg, #0A8DB0 0%, #076F8C 30%, #0A1E27 78%, #05090C 100%)",
      }}
    >
      <span aria-hidden="true" className="site-noise" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <h2
          id="site-why"
          className="font-chillax text-[1.9rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.6rem]"
        >
          Mais que um fornecedor de TI.
          <br />
          Um parceiro de operação.
        </h2>
        <p className="font-inter mt-5 text-[15px] leading-relaxed text-white/70">
          Cada projeto desenhado para a sua realidade, não um pacote de prateleira.
          <br />
          A gente assume a complexidade pra você focar no que faz de melhor.
        </p>

        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p, i) => (
            <div
              key={p.title}
              className="flex h-full flex-col border border-white/25 bg-white/[0.08] p-7 backdrop-blur-sm"
            >
              <span className="font-inter text-[12px] font-semibold tracking-[0.18em] text-[var(--site-yellow)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-chillax mt-5 text-[19px] font-semibold leading-snug text-white">
                {p.title}
              </h3>
              <p className="font-inter mt-3 text-[14px] leading-relaxed text-white/70">{p.text}</p>
            </div>
          ))}

          <Link
            to="/site/contato"
            className="group flex h-full flex-col items-center justify-center gap-3 border border-white/35 bg-white/[0.14] p-7 text-center backdrop-blur-sm transition-colors hover:bg-white/[0.2]"
          >
            <span className="font-chillax text-[20px] font-bold text-white">
              Falar com especialista
            </span>
            <span className="font-inter inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--site-yellow)]">
              Iniciar conversa
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
