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
  Clock,
  Layers,
  Users,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroPhoto from "@/assets/csh/hero.jpg.asset.json";
import socPhoto from "@/assets/csh/soc.jpg.asset.json";
import consolePhoto from "@/assets/csh/console.jpg.asset.json";

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

type Item = { icon: React.ElementType; title: string; text: string };
type GroupProps = { eyebrow: string; title: string; items: Item[] };

const G1: GroupProps = {
  eyebrow: "Grupo 1",
  title: "Monitoramento & Resposta",
  items: [
    { icon: Radar, title: "SOCaaS", text: "Centro de operações 24x7 com atuação N1 a CSIRT. Resposta imediata e visão unificada contra ameaças." },
    { icon: Activity, title: "NOCaaS", text: "Monitoramento contínuo de redes e servidores. Alta disponibilidade e recuperação rápida." },
    { icon: ScanEye, title: "EDR & XDR", text: "Proteção do endpoint à nuvem com resposta automatizada e mínima interferência ao usuário." },
  ],
};
const G2: GroupProps = {
  eyebrow: "Grupo 2",
  title: "Testes & Simulação",
  items: [
    { icon: Crosshair, title: "Pentest & Red Team", text: "Simulações realistas para diagnóstico profundo e correção de vulnerabilidades críticas." },
    { icon: MailWarning, title: "Phishing Test", text: "Campanhas simuladas com treinamento. Evolução mensurável da cultura de segurança." },
  ],
};
const G3: GroupProps = {
  eyebrow: "Grupo 3",
  title: "Cultura & Consultoria",
  items: [
    { icon: GraduationCap, title: "Conscientização", text: "Treinamentos interativos e alinhamento à LGPD. Redução de riscos humanos." },
    { icon: ClipboardCheck, title: "Consultoria", text: "Análise do ambiente com plano de ação estratégico para aumentar a resiliência." },
  ],
};
const G4: GroupProps = {
  eyebrow: "Grupo 4",
  title: "Blindagem Técnica",
  items: [
    { icon: ShieldHalf, title: "Hardening", text: "Blindagem técnica de sistemas e dispositivos com base em frameworks seguros." },
    { icon: BrickWall, title: "Firewalls", text: "Criação e gestão de regras com foco em Zero Trust e controle de tráfego preciso." },
    { icon: Smartphone, title: "Intune", text: "Governança de dispositivos com segurança centralizada e compliance garantido." },
  ],
};

const WHY = [
  { icon: Clock, num: "01", title: "Operação 24x7x365", text: "Monitoramento e resposta a incidentes o tempo todo, não só em horário comercial." },
  { icon: Layers, num: "02", title: "Cobertura completa", text: "Do endpoint à rede, da simulação de ataque à blindagem técnica." },
  { icon: Users, num: "03", title: "Cultura de segurança", text: "Treinamento e conscientização para reduzir o erro humano, a maior porta de entrada de ataques." },
  { icon: Scale, num: "04", title: "Compliance facilitado", text: "Alinhamento com LGPD e frameworks de segurança reconhecidos." },
];

const FAQ = [
  ["Com que frequência devemos fazer um pentest?", "O recomendado é pelo menos uma vez por ano, ou sempre que houver mudança relevante na infraestrutura ou nas aplicações."],
  ["O SOCaaS substitui a equipe de TI interna?", "Não. Ele atua em conjunto com o time interno, cuidando do monitoramento e resposta a incidentes de forma contínua, algo difícil de manter só com equipe própria."],
  ["O que é incluído no teste de phishing?", "Envio de campanhas simuladas de phishing para os colaboradores, com relatório de quem clicou e treinamento direcionado depois."],
  ["Como funciona o alinhamento com a LGPD?", "Avaliamos os processos e sistemas atuais, identificamos os pontos de risco e ajudamos a implementar as adequações necessárias."],
];

const GRID_TEXTURE =
  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)";
const DOT_TEXTURE = "radial-gradient(rgba(255,255,255,0.16) 1.1px, transparent 1.1px)";

const BTN =
  "font-inter inline-flex h-11 items-center justify-center whitespace-nowrap px-8 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

function SectionCta({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <Reveal variant="fade-up" className="mt-12">
      <Link
        to="/contato"
        className={`${BTN} ${dark ? "bg-[var(--site-yellow)] text-[#0B1418] hover:bg-white" : "bg-[var(--site-blue)] text-white hover:bg-[#035a72]"}`}
      >
        {label}
      </Link>
    </Reveal>
  );
}

function GroupHeader({ eyebrow, title, dark }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <Reveal variant="fade-up" className="max-w-[46ch]">
      <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">{eyebrow}</p>
      <h2 className={`font-chillax mt-3 text-balance text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem] ${dark ? "text-white" : "text-[var(--site-ink)]"}`}>
        {title}
      </h2>
    </Reveal>
  );
}

/* 3 itens: grid de cards sem sobra */
function GridGroup({ eyebrow, title, items }: GroupProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <GroupHeader eyebrow={eyebrow} title={title} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--site-line)] bg-[var(--site-line)] md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} variant="fade-up" delay={i * 60} className="group flex flex-col gap-4 bg-white px-7 py-8 transition-colors duration-200 hover:bg-[#F2F7F9]">
                <Icon className="size-9 shrink-0 text-[var(--site-blue)] transition-colors duration-200 group-hover:text-[var(--site-yellow)]" strokeWidth={1.3} />
                <p className="font-chillax text-lg font-semibold text-[var(--site-ink)]">{item.title}</p>
                <p className="font-inter text-[14px] leading-relaxed text-[var(--site-muted)]">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
        <SectionCta label="Quero monitoramento 24x7" />
      </div>
    </section>
  );
}

/* 2 itens: split horizontal (azul ou claro) */
function SplitGroup({ eyebrow, title, items, variant, cta }: GroupProps & { variant: "blue" | "light"; cta: string }) {
  const blue = variant === "blue";
  return (
    <section className={`relative overflow-hidden py-20 sm:py-24 ${blue ? "bg-[#046E8B]" : "bg-[#F4F8F9]"}`}>
      {blue && (
        <>
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: GRID_TEXTURE, backgroundSize: "48px 48px" }} />
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-[380px] rounded-full border border-white/15" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <GroupHeader eyebrow={eyebrow} title={title} dark={blue} />
        <div className={`mt-14 grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x ${blue ? "md:divide-white/20" : "md:divide-[var(--site-blue)]/20"}`}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} variant="fade-up" delay={i * 100} className={`flex items-start gap-6 ${i === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <Icon className={`size-16 shrink-0 sm:size-20 ${blue ? "text-[var(--site-yellow)]" : "text-[var(--site-blue)]"}`} strokeWidth={1} />
                <div>
                  <p className={`font-chillax text-xl font-semibold sm:text-2xl ${blue ? "text-white" : "text-[var(--site-ink)]"}`}>{item.title}</p>
                  <p className={`font-inter mt-3 max-w-[42ch] text-[15px] leading-relaxed ${blue ? "text-white/75" : "text-[var(--site-muted)]"}`}>{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <SectionCta label={cta} dark={blue} />
      </div>
    </section>
  );
}

/* 3 itens: lista numerada sobre fundo escuro */
function NumberedGroup({ eyebrow, title, items }: GroupProps) {
  return (
    <section className="relative overflow-hidden bg-[#08131A] py-20 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: GRID_TEXTURE, backgroundSize: "48px 48px" }} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <GroupHeader eyebrow={eyebrow} title={title} dark />
        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} variant="fade-up" delay={i * 100} className="relative">
                <div className="flex items-end justify-between border-b border-white/15 pb-4">
                  <span className="font-chillax text-[3.5rem] font-bold leading-none tracking-tight text-white tabular-nums sm:text-[4.25rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="mb-2 size-7 text-[var(--site-yellow)]" strokeWidth={1.3} />
                </div>
                <p className="font-chillax mt-6 text-lg font-semibold text-white">{item.title}</p>
                <p className="font-inter mt-2 text-[14px] leading-relaxed text-white/65">{item.text}</p>
              </Reveal>
            );
          })}
        </ol>
        <SectionCta label="Blindar minha infraestrutura" dark />
      </div>
    </section>
  );
}

function CyberShieldPage() {
  return (
    <>
      {/* 1: Hero */}
      <section className="relative -mt-[72px] overflow-hidden bg-[#050D12] pt-[72px]">
        <img
          src={heroPhoto.url}
          alt="Cadeado digital protegendo servidores em um data center"
          className="absolute inset-0 size-full object-cover object-[70%_center]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <div className="max-w-[58ch]">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">Serviços</p>
            <h1 className="font-chillax mt-4 max-w-[24ch] text-balance text-[2.2rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[3.2rem]">
              Cyber Shield 360°
            </h1>
            <p className="font-inter mt-6 max-w-[46ch] text-pretty text-[16px] leading-relaxed text-white/75">
              Segurança cibernética em todas as camadas: monitoramento, testes, blindagem técnica e cultura, com operação 24x7x365.
            </p>
            <Link to="/contato" className={`${BTN} mt-9 bg-[var(--site-yellow)] text-[#0B1418] hover:bg-white`}>
              Falar com um especialista em Segurança
            </Link>
          </div>
        </div>
      </section>

      {/* 2: Visão geral */}
      <section className="relative bg-[#F4F8F9] py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <div className="relative grid overflow-hidden rounded-[28px] border border-white/10 bg-[#08131A] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-[480px]">
                <img src={socPhoto.url} alt="Analista monitorando painéis de segurança" className="absolute inset-0 size-full object-cover" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#08131A] via-[#08131A]/55 to-[#08131A]/20 lg:bg-gradient-to-r lg:from-[#08131A]/30 lg:via-[#08131A]/55 lg:to-[#08131A]" />
              </div>
              <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <span aria-hidden className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: DOT_TEXTURE, backgroundSize: "22px 22px" }} />
                <div className="relative">
                  <p className="font-chillax text-[3rem] font-bold leading-none tracking-tight text-[var(--site-yellow)] sm:text-[4rem]">24x7x365</p>
                  <p className="font-inter mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Operação contínua</p>
                  <h2 className="font-chillax mt-8 text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]">
                    O que é Cyber Shield 360°
                  </h2>
                  <p className="font-inter mt-5 max-w-[46ch] text-pretty text-[15px] leading-relaxed text-white/70">
                    Oferecemos uma estrutura completa de segurança cibernética, com serviços sob demanda e operação 24x7x365. Atuamos desde o monitoramento e defesa até a conscientização e blindagem da infraestrutura.
                  </p>
                  <Link to="/contato" className={`${BTN} mt-8 bg-[var(--site-yellow)] text-[#0B1418] hover:bg-white`}>
                    Avaliar minha segurança
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 a 6: Grupos */}
      <GridGroup {...G1} />
      <SplitGroup {...G2} variant="blue" cta="Agendar um pentest" />
      <SplitGroup {...G3} variant="light" cta="Falar com um consultor" />
      <NumberedGroup {...G4} />

      {/* 7: Integração */}
      <section className="relative overflow-hidden bg-[#050D12] py-24 text-white sm:py-32">
        <img src={consolePhoto.url} alt="" aria-hidden className="absolute inset-0 size-full object-cover opacity-40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#050D12] via-[#050D12]/80 to-[#050D12]/40" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[60ch]">
            <ShieldCheck className="size-10 text-[var(--site-yellow)]" strokeWidth={1.2} />
            <h2 className="font-chillax mt-5 text-balance text-[1.9rem] font-bold leading-tight tracking-tight sm:text-[2.6rem]">
              Segurança não é um projeto. É uma operação contínua.
            </h2>
            <p className="font-inter mt-5 text-pretty text-[15px] leading-relaxed text-white/70">
              Do primeiro diagnóstico à resposta a incidentes, o Cyber Shield 360° acompanha sua operação todos os dias, não só quando algo acontece.
            </p>
          </Reveal>
          <SectionCta label="Falar com um especialista" dark />
        </div>
      </section>

      {/* 8: Por que */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="mx-auto max-w-[46ch] text-center">
            <h2 className="font-chillax text-balance text-[1.6rem] font-bold leading-tight tracking-tight text-[var(--site-ink)] sm:text-[1.95rem]">
              Por que Cyber Shield 360° da Allied
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {WHY.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} variant="fade-up" delay={i * 110} className="rounded-2xl border border-[var(--site-line)] bg-white p-7 transition-colors duration-200 hover:border-[var(--site-yellow)]">
                  <div className="flex items-center gap-4">
                    <span className="font-chillax text-sm font-bold tracking-[0.18em] text-[var(--site-yellow)]">{item.num}</span>
                    <Icon className="size-7 text-[var(--site-yellow)]" strokeWidth={1.3} />
                  </div>
                  <p className="font-chillax mt-5 text-lg font-semibold text-[var(--site-ink)]">{item.title}</p>
                  <p className="font-inter mt-2 text-[14px] leading-relaxed text-[var(--site-muted)]">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
          <div className="flex justify-center">
            <SectionCta label="Proteger minha empresa" />
          </div>
        </div>
      </section>

      {/* 9: FAQ */}
      <section className="bg-gradient-to-b from-[#0B1B23] to-[#08131A] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <h2 className="font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]">
              Perguntas frequentes
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={120} className="mt-10">
            <Accordion type="single" collapsible className="w-full border-t border-white/12">
              {FAQ.map(([q, a], i) => (
                <AccordionItem key={i} value={`q-${i}`} className="border-b border-white/12">
                  <AccordionTrigger className="font-chillax py-5 text-left text-[16px] font-semibold text-white hover:text-[var(--site-yellow)] hover:no-underline sm:py-6 sm:text-[17px]">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter pb-6 text-[14px] leading-relaxed text-white/60">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <SiteCta />
      <SiteFooter />
    </>
  );
}
