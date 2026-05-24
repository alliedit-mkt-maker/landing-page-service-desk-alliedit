import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLp } from "./LpProvider";

const items = [
  { q: "Já tenho time de TI interno. Por que terceirizar?", a: "Time interno é estratégico. Mantenha-o focado em projeto, integração de sistema, análise de dado. Service Desk é operação repetitiva que tira o seu time do que importa. Terceirizar é direcionar inteligência interna para o que gera valor." },
  { q: "Já tenho fornecedor. Por que trocar pra AlliedIT?", a: "Se o seu fornecedor atual cumpre SLA, faz análise de causa raiz, entende o seu setor e cresce com você, não troque. Se algum desses pontos falha, vale uma conversa. Migração de fornecedor é processo previsível quando bem desenhada." },
  { q: "O custo é maior ou menor do que manter time interno?", a: "Quase sempre menor, considerando salário, encargos, treinamento, turnover, ferramenta e cobertura 24x7. Empresas similares à sua tipicamente reduzem entre 20% e 40% do custo total." },
  { q: "Como é a transição? Vou ficar sem suporte?", a: "Não. Implantamos em até 30 dias com overlap. A operação anterior (interna ou de fornecedor anterior) continua até a AlliedIT estar 100% rodando. Usuários internos da sua empresa não sentem ruptura." },
  { q: "Vocês atendem em quantas cidades?", a: "Em todo o território nacional. Suporte remoto cobre qualquer ponto com internet. Field Service cobre as principais regiões metropolitanas." },
  { q: "Qual o SLA garantido?", a: "Parametrizado por categoria de incidente. Padrão para incidente crítico: resposta em até 15 minutos. A AlliedIT entrega abaixo desse padrão." },
  { q: "Posso começar com piloto antes do contrato anual?", a: "Em casos específicos sim, com escopo reduzido por 90 dias para avaliação mútua. Pergunte ao especialista no contato." },
  { q: "E se eu precisar também de NOC, SOC ou Field Service?", a: "A AlliedIT entrega todos. Mais econômico contratar integrado do que via fornecedores separados." },
];

export function Faq() {
  const { openModal } = useLp();
  return (
    <section className="py-24 px-6 border-b border-border" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-4 block">Dobra 8 — FAQ</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
            Perguntas frequentes.
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full border-t border-border">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-gold">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-petrol/70 text-base leading-relaxed pb-6">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => openModal("faq")}
            className="border border-petrol/20 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol hover:text-white transition-colors text-petrol"
          >
            Tirar dúvida com um especialista
          </button>
        </div>
      </div>
    </section>
  );
}