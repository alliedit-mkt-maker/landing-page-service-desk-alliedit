import { useLp } from "./LpProvider";
import { Reveal } from "./Reveal";

const items = [
  { title: "+7 anos operando TI corporativa", body: "Operação madura, processos parametrizados, equipe que já viu de tudo." },
  { title: "Especialização vertical real", body: "Hotelaria, saúde, varejo multi-unidade, farma, logística. Sabemos a particularidade de cada setor." },
  { title: "Service Desk integrado com NOC e SOC", body: "Monitoramento ativo de infra e segurança no mesmo time que opera o atendimento. Sem retrabalho." },
  { title: "Crescemos com você", body: "Mais de 10 unidades de Louvre Hotels Group, 7 de Body Tech, multi-CNPJ na Mundial. Você expande, a gente acompanha." },
  { title: "Foco no que não é seu core", body: "Você cuida do que faz a empresa única. A gente cuida da operação técnica." },
];

export function WhyAllied() {
  const { openModal } = useLp();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="por-que">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            Por que empresas que não podem errar escolhem a AlliedIT
          </h2>
          <p className="text-petrol/60 text-base sm:text-lg">
            O mercado está cheio de fornecedor genérico. A AlliedIT entrega especialização vertical e relação de longo prazo.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map((it, i) => (
            <Reveal as="article" key={it.title} variant="fade-up" delay={i * 90} className="bg-surface p-6 sm:p-8 group transition-colors hover:bg-petrol/[0.04]">
              <span className="font-mono text-[11px] text-gold mb-4 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-extrabold text-lg sm:text-xl mb-3 leading-tight text-balance text-ink-mid">{it.title}</h3>
              <p className="text-petrol/70 text-sm leading-relaxed">{it.body}</p>
            </Reveal>
          ))}
          <Reveal variant="scale-in" delay={items.length * 90} className="bg-petrol p-6 sm:p-8 flex items-center justify-center text-center transition-colors hover:bg-petrol-light">
            <button
              onClick={() => openModal("why_allied")}
              className="text-white font-extrabold text-lg sm:text-xl leading-tight group"
            >
              Falar com especialista
              <span className="block mt-3 font-mono text-[11px] text-gold uppercase tracking-widest group-hover:translate-x-1 transition-transform">→ Iniciar conversa</span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}