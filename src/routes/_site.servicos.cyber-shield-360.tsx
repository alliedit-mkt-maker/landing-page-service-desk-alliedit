import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Radar,
  Activity,
  ScanEye,
  Crosshair,
  MailWarning,
  GraduationCap,
  ClipboardCheck,
  ShieldHalf,
  BrickWall,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/_site/servicos/cyber-shield-360")({
  head: () =>
    pageHead({
      title: "Cyber Shield 360°: SOC, pentest e segurança | Allied IT",
      description:
        "Segurança cibernética 24x7x365: SOCaaS, NOCaaS, EDR e XDR, pentest, phishing test, hardening, firewall e LGPD.",
      path: "/servicos/cyber-shield-360",
    }),
  component: CyberShieldPage,
});

const BLUE = "#046E8B";

const G1 = [
  { icon: Radar, title: "SOCaaS", text: "Centro de operações 24x7 com atuação N1 a CSIRT. Resposta imediata e visão unificada contra ameaças." },
  { icon: Activity, title: "NOCaaS", text: "Monitoramento contínuo de redes e servidores. Alta disponibilidade e recuperação rápida." },
  { icon: ScanEye, title: "EDR & XDR", text: "Proteção do endpoint à nuvem com resposta automatizada e mínima interferência ao usuário." },
];
const G2 = [
  { icon: Crosshair, title: "Pentest & Red Team", text: "Simulações realistas para diagnóstico profundo e correção de vulnerabilidades críticas." },
  { icon: MailWarning, title: "Phishing Test", text: "Campanhas simuladas com treinamento. Evolução mensurável da cultura de segurança." },
];
const G3 = [
  { icon: GraduationCap, title: "Conscientização", text: "Treinamentos interativos e alinhamento à LGPD. Redução de riscos humanos." },
  { icon: ClipboardCheck, title: "Consultoria", text: "Análise do ambiente com plano de ação estratégico para aumentar a resiliência." },
];
const G4 = [
  { icon: ShieldHalf, title: "Hardening", text: "Blindagem técnica de sistemas e dispositivos com base em frameworks seguros." },
  { icon: BrickWall, title: "Firewalls", text: "Criação e gestão de regras com foco em Zero Trust e controle de tráfego preciso." },
  { icon: Smartphone, title: "Intune", text: "Governança de dispositivos com segurança centralizada e compliance garantido." },
];
const WHY = [
  ["Operação 24x7x365.", "Monitoramento e resposta a incidentes o tempo todo, não só em horário comercial."],
  ["Cobertura completa.", "Do endpoint à rede, da simulação de ataque à blindagem técnica."],
  ["Cultura de segurança.", "Treinamento e conscientização para reduzir o erro humano, a maior porta de entrada de ataques."],
  ["Compliance facilitado.", "Alinhamento com LGPD e frameworks de segurança reconhecidos."],
];
const FAQ = [
  ["Com que frequência devemos fazer um pentest?", "O recomendado é pelo menos uma vez por ano, ou sempre que houver mudança relevante na infraestrutura ou nas aplicações."],
  ["O SOCaaS substitui a equipe de TI interna?", "Não. Ele atua em conjunto com o time interno, cuidando do monitoramento e resposta a incidentes de forma contínua, algo difícil de manter só com equipe própria."],
  ["O que é incluído no teste de phishing?", "Envio de campanhas simuladas de phishing para os colaboradores, com relatório de quem clicou e treinamento direcionado depois."],
  ["Como funciona o alinhamento com a LGPD?", "Avaliamos os processos e sistemas atuais, identificamos os pontos de risco e ajudamos a implementar as adequações necessárias."],
];

function GroupHead({ n, title, light = false }: { n: string; title: string; light?: boolean }) {
  return (
    <div className="mb-12">
      <span className={`font-inter text-[11px] font-semibold uppercase tracking-[0.2em] ${light ? "text-[#F3C400]" : "text-[#046E8B]"}`}>
        Grupo {n}
      </span>
      <h2 className={`font-chillax mt-3 text-[1.9rem] font-bold leading-tight sm:text-[2.4rem] ${light ? "text-white" : "text-[var(--site-ink)]"}`}>
        {title}
      </h2>
    </div>
  );
}

function ShieldArt() {
  return (
    <svg viewBox="0 0 400 440" className="h-auto w-full max-w-[420px]" aria-hidden="true">
      <defs>
        <linearGradient id="cs-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={BLUE} stopOpacity="0.14" />
          <stop offset="1" stopColor={BLUE} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <g stroke={BLUE} strokeOpacity="0.28" strokeWidth="1.5" fill="none">
        <path d="M20 120 H110 V170" />
        <path d="M20 300 H90 V260" />
        <path d="M380 110 H300 V160" />
        <path d="M380 320 H310 V280" />
        <path d="M200 20 V60" />
      </g>
      <g fill={BLUE} fillOpacity="0.4">
        <circle cx="20" cy="120" r="5" /><circle cx="20" cy="300" r="5" />
        <circle cx="380" cy="110" r="5" /><circle cx="380" cy="320" r="5" />
        <circle cx="200" cy="20" r="5" />
      </g>
      <path d="M200 60 L320 105 V220 C320 310 265 370 200 400 C135 370 80 310 80 220 V105 Z" fill="url(#cs-g)" stroke={BLUE} strokeWidth="3" />
      <path d="M200 100 L285 132 V222 C285 288 247 333 200 356 C153 333 115 288 115 222 V132 Z" fill="none" stroke={BLUE} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="6 6" />
      <path d="M160 225 L190 255 L245 195" fill="none" stroke="#F3C400" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CyberShieldPage() {
  return (
    <main>
      {/* 1. Hero claro */}
      <section className="relative overflow-hidden bg-[#F5F8FA] pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(${BLUE}22 1px, transparent 1px)`,
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#046E8B]">Serviços</span>
            <h1 className="font-chillax mt-4 text-[2.8rem] font-bold leading-[1.02] tracking-tight text-[#046E8B] sm:text-[4.2rem]">
              Cyber Shield 360°
            </h1>
            <p className="font-inter mt-6 max-w-[52ch] text-[17px] leading-relaxed text-[var(--site-ink)]/75">
              Segurança cibernética em todas as camadas: monitoramento, testes, blindagem técnica e cultura, com operação 24x7x365.
            </p>
            <Link
              to="/contato"
              className="font-inter mt-9 inline-flex h-12 items-center justify-center bg-[#046E8B] px-8 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#035a72]"
            >
              Falar com um especialista em Segurança
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ShieldArt />
          </div>
        </div>
      </section>

      {/* 2. Visão geral + número */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="font-inter text-[18px] leading-relaxed text-[var(--site-ink)]/80 sm:text-[20px]">
              Oferecemos uma estrutura completa de segurança cibernética, com serviços sob demanda e operação 24x7x365. Atuamos desde o monitoramento e defesa até a conscientização e blindagem da infraestrutura.
            </p>
          </Reveal>
          <Reveal>
            <div className="lg:text-right">
              <span className="font-chillax block text-[4.5rem] font-bold leading-none tracking-tight text-[#F3C400] sm:text-[7rem]">
                24x7x365
              </span>
              <span className="font-inter mt-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#046E8B]">
                Operação contínua
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Grupo 1: grid de cards */}
      <section className="bg-[#F2F4F5] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <GroupHead n="1" title="Monitoramento & Resposta" />
          <div className="grid gap-5 md:grid-cols-3">
            {G1.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <div className="h-full border border-black/5 bg-white p-8 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(4,110,139,0.5)]">
                  <Icon className="h-8 w-8 stroke-[1.3] text-[#046E8B]" />
                  <h3 className="font-chillax mt-6 text-[1.3rem] font-semibold text-[var(--site-ink)]">{title}</h3>
                  <p className="font-inter mt-3 text-[14.5px] leading-relaxed text-[var(--site-muted)]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Grupo 2: split azul */}
      <section className="bg-[#046E8B] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <GroupHead n="2" title="Testes & Simulação" light />
          <div className="grid gap-12 md:grid-cols-2 md:divide-x md:divide-white/15">
            {G2.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title}>
                <div className={`flex items-start gap-6 ${i === 1 ? "md:pl-12" : ""}`}>
                  <Icon className="h-14 w-14 shrink-0 stroke-[1.1] text-[#F3C400]" />
                  <div>
                    <h3 className="font-chillax text-[1.5rem] font-semibold text-white">{title}</h3>
                    <p className="font-inter mt-3 text-[15px] leading-relaxed text-white/75">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Grupo 3: tiles arredondados */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center [&>div]:mb-12">
            <GroupHead n="3" title="Cultura & Consultoria" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {G3.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <div className="flex h-full flex-col items-center rounded-3xl bg-[#046E8B]/[0.07] px-8 py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className="h-8 w-8 stroke-[1.3] text-[#046E8B]" />
                  </span>
                  <h3 className="font-chillax mt-6 text-[1.35rem] font-semibold text-[var(--site-ink)]">{title}</h3>
                  <p className="font-inter mt-3 max-w-[36ch] text-[14.5px] leading-relaxed text-[var(--site-muted)]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Grupo 4: faixa amarela */}
      <section className="bg-[#F3C400] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--site-ink)]/60">Grupo 4</span>
            <h2 className="font-chillax mt-3 text-[1.9rem] font-bold leading-tight text-[var(--site-ink)] sm:text-[2.4rem]">
              Blindagem Técnica
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[var(--site-ink)]/20">
            {G4.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <div className="flex flex-col items-center px-8 text-center">
                  <Icon className="h-12 w-12 stroke-[1.2] text-[var(--site-ink)]" />
                  <h3 className="font-chillax mt-5 text-[1.35rem] font-semibold text-[var(--site-ink)]">{title}</h3>
                  <p className="font-inter mt-3 max-w-[30ch] text-[14.5px] leading-relaxed text-[var(--site-ink)]/75">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Stat de impacto */}
      <section className="relative overflow-hidden bg-[#046E8B] py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-chillax text-[2.2rem] font-bold leading-[1.1] text-white sm:text-[3.4rem]">
              Segurança não é um projeto. <span className="text-[#F3C400]">É uma operação contínua.</span>
            </h2>
            <p className="font-inter mx-auto mt-7 max-w-[60ch] text-[16px] leading-relaxed text-white/75">
              Do primeiro diagnóstico à resposta a incidentes, o Cyber Shield 360° acompanha sua operação todos os dias, não só quando algo acontece.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. Por que */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-chillax text-[1.9rem] font-bold leading-tight text-[var(--site-ink)] sm:text-[2.4rem]">
            Por que Cyber Shield 360° da Allied
          </h2>
          <ul className="mt-10 divide-y divide-black/5">
            {WHY.map(([t, d]) => (
              <li key={t} className="flex items-start gap-4 py-6">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#046E8B]" />
                <p className="font-inter text-[15.5px] leading-relaxed text-[var(--site-muted)]">
                  <strong className="font-chillax font-semibold text-[var(--site-ink)]">{t}</strong> {d}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-[#F2F4F5] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-chillax text-[1.9rem] font-bold leading-tight text-[var(--site-ink)] sm:text-[2.4rem]">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-10 w-full border-t border-black/10">
            {FAQ.map(([q, a], i) => (
              <AccordionItem key={i} value={`q-${i}`} className="border-b border-black/10">
                <AccordionTrigger className="font-chillax py-5 text-left text-[16px] font-semibold text-[var(--site-ink)] hover:text-[#046E8B] hover:no-underline sm:py-6 sm:text-[17px]">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="font-inter pb-6 text-[14px] leading-relaxed text-[var(--site-muted)]">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <SiteCta />
      <SiteFooter />
    </main>
  );
}
