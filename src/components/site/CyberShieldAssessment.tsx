import { Reveal } from "@/components/lp/Reveal";
import { Checkbox } from "@/components/ui/checkbox";
import { SiteCtaButton } from "./SiteCtaButton";
import { CYBER_COMPARISON, CYBER_SIGNALS } from "@/lib/cyber-shield-content";

const CONTACT_FORM = { formId: "3b4b53a7-de50-4fdf-8aa4-06c859a28c87", description: "Formulário de contato Allied IT Cyber Shield 360°", product: "Cyber Shield 360°" };

export function CyberChecklist() {
  return <section id="preparacao" className="bg-cyber-soft py-20 text-cyber-ink sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8">
    <Reveal variant="fade-up" className="max-w-3xl"><h2 className="font-chillax text-[1.7rem] font-bold leading-tight sm:text-[2.1rem]">Sua empresa está preparada?</h2><p className="font-inter mt-5 text-[15px] leading-relaxed text-cyber-muted">Alguns hábitos e lacunas merecem atenção. Reconhecer esses sinais ajuda a organizar a avaliação da segurança e entender onde o cuidado precisa evoluir.</p></Reveal>
    <ul className="mt-10 grid gap-x-12 md:grid-cols-2">{CYBER_SIGNALS.map((signal, i) => <li key={signal} className="border-b border-cyber-line"><Reveal variant="fade-up"><label htmlFor={`cyber-signal-${i}`} className="font-inter flex min-h-20 cursor-pointer items-center gap-4 py-5 text-[15px] leading-relaxed"><Checkbox id={`cyber-signal-${i}`} className="size-5 rounded-none border-cyber-blue shadow-none data-[state=checked]:bg-cyber-blue data-[state=checked]:text-cyber-on-dark focus-visible:ring-cyber-blue"/>{signal}</label></Reveal></li>)}</ul>
    <Reveal variant="fade-up" className="mt-10"><SiteCtaButton {...CONTACT_FORM} className="cyber-button">Conversar sobre minha segurança</SiteCtaButton></Reveal>
  </div></section>;
}

export function CyberComparison() {
  return <section id="seguranca-integrada" className="bg-cyber-paper py-20 text-cyber-ink sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8">
    <Reveal variant="fade-up" className="max-w-3xl"><h2 className="font-chillax text-[1.7rem] font-bold leading-tight sm:text-[2.1rem]">Ferramentas soltas ou segurança integrada?</h2><p className="font-inter mt-5 text-[15px] leading-relaxed text-cyber-muted">Ferramentas são importantes, mas a proteção também depende de como monitoramento, resposta, testes e cultura se relacionam. O comparativo mostra a diferença entre olhar controles separados e considerar a segurança como um conjunto.</p></Reveal>
    <Reveal variant="fade-up" className="mt-10"><div role="table" aria-label="Ferramentas soltas versus segurança integrada" className="grid grid-cols-2 overflow-hidden rounded-lg border border-cyber-line">
      <div role="row" className="col-span-2 grid grid-cols-2"><div role="columnheader" className="font-chillax bg-cyber-soft p-4 text-base font-semibold sm:p-7 sm:text-xl">Ferramentas soltas</div><div role="columnheader" className="font-chillax bg-cyber-blue p-4 text-base font-semibold text-cyber-on-dark sm:p-7 sm:text-xl">Segurança integrada 360°</div></div>
      {CYBER_COMPARISON.map(row => <div key={row.topic} role="row" className="col-span-2 grid grid-cols-2"><div role="cell" className="border-t border-cyber-line bg-cyber-soft p-4 sm:p-7"><h3 className="font-chillax text-sm font-semibold sm:text-base">{row.topic}</h3><p className="font-inter mt-3 text-sm leading-relaxed text-cyber-muted">{row.isolated}</p></div><div role="cell" className="border-t border-cyber-line-dark bg-cyber-blue p-4 text-cyber-on-dark sm:p-7"><p className="font-chillax text-sm font-semibold text-cyber-yellow sm:text-base">{row.topic}</p><p className="font-inter mt-3 text-sm leading-relaxed">{row.integrated}</p></div></div>)}
    </div></Reveal>
  </div></section>;
}