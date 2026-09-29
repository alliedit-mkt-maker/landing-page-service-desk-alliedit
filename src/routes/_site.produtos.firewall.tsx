import { pageHead } from "@/lib/seo";
import { SiteCtaButton } from "@/components/site/SiteCtaButton";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Compass, Headset, PackageCheck, Zap, Layers, Activity, Server, Settings, Monitor, Check } from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/firewall/hero.png.asset.json";
import oqueE from "@/assets/firewall/oque-e.png.asset.json";

export const Route = createFileRoute("/_site/produtos/firewall")({
  head: () => {
    const h = pageHead({
      title: "Firewall para empresas com monitoramento 24h | Allied IT",
      description: "Equipamento de firewall, instalação, configuração, monitoramento 24 horas e suporte técnico incluso para proteger a rede da sua empresa.",
      path: "/produtos/firewall",
    });
    return { ...h, meta: [...h.meta, { name: "robots", content: "index, follow" }] };
  },
  component: FirewallPage,
});

const INCLUDED = [
  "Bloqueio de acessos indevidos",
  "Atualização contínua de regras de segurança",
  "Monitoramento 24 horas",
  "Relatórios periódicos de segurança",
  "Suporte técnico ao equipamento",
];
const PARTS = [
  { icon: Server, title: "Equipamento fornecido" },
  { icon: Settings, title: "Instalação e configuração" },
  { icon: Monitor, title: "Monitoramento 24 horas" },
  { icon: Headset, title: "Suporte técnico" },
];
const VALUE = [
  { icon: Compass, title: "Visão consultiva", text: "Avaliamos o cenário da sua rede antes de recomendar o equipamento ideal." },
  { icon: Headset, title: "Suporte especializado", text: "Acompanhamento contínuo do equipamento, não só a instalação." },
  { icon: PackageCheck, title: "Equipamento incluso", text: "Fornecemos o hardware, cuidamos da configuração e do monitoramento." },
  { icon: Zap, title: "Resposta rápida", text: "Time técnico pronto pra agir diante de qualquer incidente de segurança." },
  { icon: Layers, title: "Equipamento e serviço juntos", text: "Não entregamos só o hardware, cuidamos da configuração, das regras e do suporte contínuo do equipamento." },
  { icon: Activity, title: "Monitoramento constante", text: "Acompanhamos a rede pra identificar e agir diante de ameaças, com relatórios periódicos de segurança." },
];
const FAQ = [
  { q: "Preciso comprar o equipamento ou a Allied IT fornece?", a: "A Allied IT fornece o equipamento como parte do serviço." },
  { q: "O que está incluso no monitoramento?", a: "Acompanhamento contínuo da rede, identificação de tentativas de acesso indevido e relatórios periódicos de segurança." },
  { q: "O suporte técnico tem limite de chamados?", a: "Não, o suporte ao equipamento está incluso no serviço, sem limite de acionamentos." },
];

const btnSolid =
  "font-inter inline-flex h-12 items-center justify-center whitespace-nowrap bg-[var(--site-yellow)] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--site-ink)] transition hover:brightness-105";
const eyebrow = "font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-blue)]";
const h2 = "font-chillax text-[1.8rem] font-bold leading-tight tracking-tight sm:text-[2.4rem]";

function FirewallPage() {
  return (
    <>
      <section className="relative -mt-[72px] flex min-h-[78vh] items-center overflow-hidden bg-[var(--site-ink)] pt-[72px] text-white">
        <img src={hero.url} alt="" aria-hidden fetchPriority="high" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[center_40%]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">Produtos · Segurança</span>
          <h1 className="font-chillax mt-5 text-5xl font-bold tracking-tight sm:text-6xl">Firewall</h1>
          <p className="font-inter mt-6 max-w-xl text-[17px] leading-relaxed text-white/80">
            Equipamento, configuração e monitoramento contínuo para proteger a rede da sua empresa.
          </p>
          <SiteCtaButton  className={`${btnSolid} mt-10`}>Solicite um orçamento</SiteCtaButton>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid overflow-hidden rounded-3xl bg-[var(--site-ink)] text-white lg:grid-cols-2">
              <img src={oqueE.url} alt="Profissional em central de monitoramento com holograma de escudo e cadeado" loading="lazy" className="h-full min-h-[280px] w-full object-cover" />
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <h2 className={h2}>O que é o serviço de Firewall da Allied IT?</h2>
                <p className="font-inter mt-6 text-[15px] leading-relaxed text-white/75">
                  O firewall é a primeira linha de defesa da rede da sua empresa, controlando o que entra e o que sai e bloqueando acessos indevidos. A Allied IT fornece o equipamento, cuida da instalação e da configuração, e mantém o monitoramento contínuo para identificar e responder a ameaças rapidamente.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--site-ink)] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal><h2 className={h2}>O que vem incluso</h2></Reveal>
          <ul className="border-t border-white/15">
            {INCLUDED.map((item, i) => (
              <li key={item} className="font-inter flex items-center justify-between gap-6 border-b border-white/15 py-5 text-[16px]">
                <span className="flex items-center gap-5">
                  <span className="font-chillax w-8 text-[13px] font-semibold text-[var(--site-yellow)]">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </span>
                <Check className="size-5 shrink-0 text-[var(--site-yellow)]" strokeWidth={2.5} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={eyebrow}>Equipamento + serviço</span>
            <h2 className={`${h2} mt-3`}>O que compõe o serviço de Firewall</h2>
            <p className="font-inter mt-4 text-[15px] text-[var(--site-muted)]">
              Da entrega do equipamento ao monitoramento contínuo, sem deixar sua empresa sozinha.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {PARTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="flex h-full flex-col items-center rounded-3xl border border-black/10 bg-[#F4F7F9] p-7 text-center">
                  <span className="grid size-14 place-items-center rounded-full bg-[var(--site-blue)] text-white">
                    <p.icon className="size-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-chillax mt-5 text-[16px] font-semibold">{p.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7F9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={eyebrow}>Diferenciais</span>
            <h2 className={`${h2} mt-3`}>Por que contar com a Allied IT</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-3xl border-t-2 border-[var(--site-blue)] bg-white p-7">
                  <span className="grid size-14 place-items-center rounded-full bg-[var(--site-blue)]/10">
                    <v.icon className="size-6 text-[var(--site-blue)]" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-chillax mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="font-inter mt-3 text-[14px] leading-relaxed text-[var(--site-muted)]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <SiteCtaButton  className={`${btnSolid} mt-12`}>Solicite um orçamento</SiteCtaButton>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className={h2}>Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-10 w-full space-y-3">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="rounded-2xl border border-black/10 bg-[#F4F7F9] px-6">
                <AccordionTrigger className="font-chillax py-5 text-left text-[16px] font-semibold hover:text-[var(--site-blue)] hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="font-inter pb-6 text-[14px] leading-relaxed text-[var(--site-muted)]">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-[var(--site-ink)] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className={h2}>Quer saber como está a segurança da rede da sua empresa?</h2>
          <p className="font-inter mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed text-white/70">
            A gente avalia seu cenário atual e mostra onde vale reforçar a proteção.
          </p>
          <SiteCtaButton  className={`${btnSolid} mt-9`}>Solicite um orçamento</SiteCtaButton>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
