import { useLp } from "./LpProvider";
import { Reveal } from "./Reveal";

const testimonials = [
  { quote: "A AlliedIT entende o ritmo da nossa operação. Não é só atender chamado, é antecipar problema.", who: "Diretor de TI, rede hoteleira internacional" },
  { quote: "Reduzimos 40% do tempo médio de resolução de chamado depois que entregamos o Service Desk à AlliedIT.", who: "Gerente de TI, varejo multi-unidade" },
  { quote: "Previsibilidade. Custo claro, SLA cumprido, time interno livre pra projeto estratégico.", who: "CFO, indústria farmacêutica" },
];

export function CaseStudy() {
  const { openModal } = useLp();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-petrol/[0.02]" id="cases">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-ink-mid">
            Sete anos de operação. Centenas de unidades atendidas.
          </h2>
          <p className="text-petrol/60 text-base sm:text-lg">
            O melhor termômetro não é o que falamos. É o tempo que cada cliente fica conosco.
          </p>
        </Reveal>

        <Reveal variant="scale-in" className="bg-surface border border-border overflow-hidden mb-12 hover-lift">
          <div className="grid md:grid-cols-2">
            <div className="aspect-square md:aspect-auto bg-petrol relative grid place-items-center p-8 sm:p-12 overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 size-60 rounded-full bg-gold/15 blur-3xl animate-float-slow" />
              <div className="text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-6 block">Case em destaque</span>
                <div className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-none">
                  Lojas Mel
                </div>
                <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/40">
                  <span>Varejo</span>
                  <span>·</span>
                  <span>55 unidades</span>
                  <span>·</span>
                  <span>Field Services</span>
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-10 md:p-14 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6 leading-tight text-balance text-ink-mid">
                Field Services para mais de 55 lojas com eficiência e economia
              </h3>
              <p className="text-petrol/70 mb-8 leading-relaxed">
                O grupo Lojas Mel, com 55 unidades pelo Brasil, enfrentava altos custos com equipe própria, problemas frequentes em PDVs e dificuldade de padronizar atendimento em múltiplas localidades. A AlliedIT assumiu o Field Services completo com modelo flexível, escalável e de alta capilaridade.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-border">
                <Stat n="-40%" label="Custos com suporte em campo" />
                <Stat n="+5%" label="Acima da meta de SLA" />
                <Stat n="96%" label="Satisfação dos usuários" />
              </div>
              <button
                onClick={() => openModal("case_lojas_mel")}
                className="self-start font-bold text-xs uppercase tracking-widest border-b-2 border-petrol pb-1 hover:border-gold hover:text-gold transition-colors"
              >
                Quero ser o próximo case
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {testimonials.map((t, i) => (
            <Reveal as="blockquote" key={t.who} variant="fade-up" delay={i * 120} className="bg-surface p-6 sm:p-8 flex flex-col">
              <div className="text-gold text-3xl leading-none mb-4 font-serif">"</div>
              <p className="text-petrol/90 text-sm leading-relaxed mb-6 flex-1">{t.quote}</p>
              <cite className="not-italic font-mono text-[11px] uppercase tracking-widest text-petrol/60 border-t border-border pt-4">
                {t.who}
              </cite>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-ink-mid leading-none">{n}</div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-petrol/50">{label}</div>
    </div>
  );
}