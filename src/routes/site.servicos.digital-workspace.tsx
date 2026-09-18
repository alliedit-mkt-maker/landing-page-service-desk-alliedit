import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Headset,
  MonitorSmartphone,
  Wrench,
  Layers,
  Phone,
  LayoutDashboard,
  MessageCircle,
  Users,
  Mail,
  BookOpen,
  ListChecks,
  Ticket,
  RefreshCcw,
  Gauge,
  FileBarChart,
  Clock,
  PackageOpen,
  HardDrive,
  ShieldAlert,
  CalendarCheck,
  Rocket,
  Hand,
  Eye,
  Boxes,
  ClipboardCheck,
  Building2,
  MapPin,
  ShieldCheck,
  Server,
  Cloud,
  CalendarClock,
  Award,
  Network,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Digital Workspace | Service Desk e Field Service | Allied IT";
const DESCRIPTION =
  "Service Desk e Field Service em uma só operação: atendimento remoto e presencial, com SLA garantido, gestão centralizada e cobertura nacional.";

export const Route = createFileRoute("/site/servicos/digital-workspace")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: DigitalWorkspacePage,
});

const OVERVIEW = [
  { icon: MonitorSmartphone, label: "Remoto" },
  { icon: Wrench, label: "Presencial" },
  { icon: Layers, label: "Unificado" },
];

const SERVICE_DESK = [
  { icon: Layers, label: "Atendimento N1, N2 e N3" },
  { icon: MonitorSmartphone, label: "Suporte remoto" },
  { icon: Phone, label: "Atendimento por telefone" },
  { icon: LayoutDashboard, label: "Atendimento por Portal" },
  { icon: MessageCircle, label: "Atendimento por WhatsApp" },
  { icon: Users, label: "Atendimento por Microsoft Teams" },
  { icon: Mail, label: "Atendimento por e-mail" },
  { icon: ListChecks, label: "Catálogo de serviços" },
  { icon: Ticket, label: "Gestão de chamados" },
  { icon: BookOpen, label: "Base de conhecimento" },
  { icon: RefreshCcw, label: "Gestão de incidentes, problemas e mudanças" },
  { icon: Gauge, label: "Gestão de SLA" },
  { icon: FileBarChart, label: "Relatórios executivos" },
];

const COVERAGE = [
  { title: "8x5", text: "Horário comercial" },
  { title: "12x5", text: "Cobertura estendida" },
  { title: "24x7", text: "Operação contínua" },
];

const FIELD_SERVICE = [
  { icon: PackageOpen, label: "Instalação de equipamentos" },
  { icon: HardDrive, label: "Troca de hardware" },
  { icon: ShieldAlert, label: "Manutenção corretiva" },
  { icon: CalendarCheck, label: "Manutenção preventiva" },
  { icon: Rocket, label: "Rollout" },
  { icon: Hand, label: "Smart Hands" },
  { icon: Eye, label: "Smart Eyes" },
  { icon: Boxes, label: "Inventário" },
  { icon: ClipboardCheck, label: "Auditoria de ativos" },
  { icon: Building2, label: "Suporte em filiais" },
  { icon: MapPin, label: "Atendimento nacional" },
];

const INTEGRATIONS = [
  {
    icon: ShieldCheck,
    title: "Cyber Shield 360°",
    text: "Incidentes de segurança e rede são escalados automaticamente.",
  },
  {
    icon: Server,
    title: "Infra Core",
    text: "Problemas de infraestrutura física acionam a equipe certa.",
  },
  {
    icon: Cloud,
    title: "Smart Cloud Ops",
    text: "Chamados relacionados à nuvem têm visibilidade compartilhada.",
  },
];

const WHY = [
  {
    icon: CalendarClock,
    num: "01",
    title: "+7 anos de operação",
    text: "Processos maduros, equipe que já viu (e resolveu) de tudo.",
  },
  {
    icon: Award,
    num: "02",
    title: "Especialização vertical",
    text: "Experiência real em hotelaria, saúde, varejo multi-unidade, farma, logística.",
  },
  {
    icon: Network,
    num: "03",
    title: "Cobertura nacional",
    text: "Atendimento presencial em filiais em todo o Brasil, não só na matriz.",
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Crescemos com você",
    text: "Do primeiro contrato à expansão para múltiplas unidades, sem trocar de fornecedor.",
  },
];

const FAQ = [
  {
    q: "Qual a diferença entre Service Desk e Field Service?",
    a: "Service Desk é o atendimento remoto ao usuário, por telefone, portal, WhatsApp, Teams ou e-mail, com registro e gestão de chamados. Field Service é a equipe técnica presencial, para o que só se resolve no local, como troca de hardware, instalação e manutenção. Na Allied IT as duas frentes operam juntas, com o mesmo chamado do início ao fim.",
  },
  {
    q: "Vocês atendem fora de São Paulo?",
    a: "Sim. O suporte remoto cobre qualquer unidade com internet e o atendimento presencial é feito em todo o território nacional, inclusive em filiais fora das capitais.",
  },
  {
    q: "Como funciona a transição do meu suporte atual para a Allied IT?",
    a: "A transição é feita em etapas, com período de sobreposição: mapeamos os ativos, os usuários e os processos atuais, montamos o catálogo de serviços e a base de conhecimento e só então assumimos a operação. A sua equipe não fica sem suporte em nenhum momento.",
  },
  {
    q: "Existe SLA garantido em contrato?",
    a: "Sim. Os prazos de resposta e de solução são definidos por categoria de chamado e ficam formalizados em contrato, com acompanhamento em relatórios executivos e reuniões periódicas de resultado.",
  },
  {
    q: "Consigo começar com um piloto antes de fechar contrato anual?",
    a: "Em casos específicos sim, com escopo reduzido em uma unidade ou em um grupo de usuários, para avaliação mútua antes da expansão. Fale com um especialista para avaliar o seu cenário.",
  },
  {
    q: "Digital Workspace se integra com meu NOC/SOC já existente, ou só com o da Allied IT?",
    a: "Integra com os dois cenários. Se você já tem NOC ou SOC, próprio ou de terceiros, desenhamos os fluxos de escalonamento e as regras de acionamento com esse time. Se preferir concentrar tudo, o Cyber Shield 360° da Allied IT assume essa camada.",
  },
];

const DOT_TEXTURE = "radial-gradient(rgba(255,255,255,0.16) 1.1px, transparent 1.1px)";

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal variant="fade-up" className="max-w-[62ch]">
      {eyebrow ? (
        <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-chillax mt-3 text-[1.7rem] font-bold leading-tight tracking-tight text-[var(--site-ink)] sm:text-[2.1rem]">
        {title}
      </h2>
      {text ? (
        <p className="font-inter mt-5 text-[15px] leading-relaxed text-[var(--site-muted)]">
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}

function FeatureGrid({
  items,
}: {
  items: { icon: React.ElementType; label: string }[];
}) {
  return (
    <div className="mt-12 grid gap-px overflow-hidden border border-[var(--site-line)] bg-[var(--site-line)] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Reveal
            key={item.label}
            variant="fade-up"
            delay={Math.min(i, 8) * 45}
            className="group flex items-center gap-4 bg-white px-5 py-6 transition-colors duration-200 hover:bg-[#F7F9FA]"
          >
            <Icon
              className="size-6 shrink-0 text-[var(--site-blue)] transition-colors duration-200 group-hover:text-[var(--site-yellow)]"
              strokeWidth={1.4}
            />
            <span className="font-inter text-[14px] leading-snug text-[var(--site-ink)]">
              {item.label}
            </span>
          </Reveal>
        );
      })}
    </div>
  );
}

function DigitalWorkspacePage() {
  const btn =
    "font-inter inline-flex h-11 items-center justify-center whitespace-nowrap px-8 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

  return (
    <>
      {/* DOBRA 1 — Hero */}
      <section className="relative overflow-hidden border-b border-[var(--site-line)] bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 hidden size-[520px] rounded-full bg-[var(--site-blue)]/[0.06] blur-3xl lg:block"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal variant="fade-up">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">
                Digital Workspace
              </p>
              <h1 className="font-chillax mt-4 text-[2.1rem] font-bold leading-[1.08] tracking-tight text-[var(--site-ink)] sm:text-[3rem]">
                O suporte que sua equipe sente que está sempre por perto
              </h1>
              <p className="font-inter mt-6 max-w-[56ch] text-[16px] leading-relaxed text-[var(--site-muted)]">
                Service Desk e Field Service em uma só operação, atendimento remoto e presencial,
                com SLA garantido e gestão centralizada.
              </p>
              <Link
                to="/site/contato"
                className={`${btn} mt-9 border border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-white`}
              >
                Falar com especialista
              </Link>
            </Reveal>
          </div>

          <Reveal variant="scale-in" delay={140} className="flex justify-center lg:justify-end">
            <div className="relative flex size-[240px] items-center justify-center rounded-full border border-[var(--site-blue)]/20 sm:size-[300px]">
              <div className="absolute inset-8 rounded-full border border-[var(--site-blue)]/12" />
              <Headset
                className="relative size-24 text-[var(--site-blue)] sm:size-32"
                strokeWidth={0.9}
              />
              <MessageCircle
                className="absolute -right-2 top-8 size-10 text-[var(--site-yellow)]"
                strokeWidth={1.2}
              />
              <Wrench
                className="absolute -left-3 bottom-10 size-9 text-[var(--site-blue)]"
                strokeWidth={1.2}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 2 — Visão geral */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            title="O que é Digital Workspace"
            text="É a porta de entrada da sua operação de TI: onde o usuário pede ajuda e onde o problema físico é resolvido. Reunimos Service Desk (suporte remoto) e Field Service (suporte presencial) em uma única frente, para que ninguém fique esperando entre um time e outro."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {OVERVIEW.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.label}
                  variant="fade-up"
                  delay={i * 110}
                  className="flex flex-col items-start gap-4 border-t border-[var(--site-line)] pt-6"
                >
                  <Icon className="size-9 text-[var(--site-blue)]" strokeWidth={1.2} />
                  <p className="font-chillax text-lg font-semibold text-[var(--site-ink)]">
                    {item.label}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOBRA 3 — Service Desk */}
      <section className="border-y border-[var(--site-line)] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="mb-2">
            <Headset className="size-12 text-[var(--site-blue)]" strokeWidth={1.1} />
          </Reveal>
          <SectionHeading
            title="Service Desk"
            text="Atendimento especializado para o usuário final, disponível pelo canal que fizer mais sentido pra sua empresa."
          />
          <FeatureGrid items={SERVICE_DESK} />

          <Reveal variant="fade-up" className="mt-16">
            <h3 className="font-chillax text-xl font-semibold text-[var(--site-ink)]">
              Modelos de atendimento
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {COVERAGE.map((c, i) => (
              <Reveal
                key={c.title}
                variant="fade-up"
                delay={i * 110}
                className="border border-[var(--site-line)] p-6"
              >
                <Clock className="size-7 text-[var(--site-blue)]" strokeWidth={1.3} />
                <p className="font-chillax mt-4 text-2xl font-bold text-[var(--site-ink)]">
                  {c.title}
                </p>
                <p className="font-inter mt-2 text-[14px] text-[var(--site-muted)]">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 4 — Field Service */}
      <section className="bg-[#F6F8F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="mb-2">
            <Wrench className="size-12 text-[var(--site-blue)]" strokeWidth={1.1} />
          </Reveal>
          <SectionHeading
            title="Field Service"
            text="Equipe técnica especializada para o que só se resolve com mão na massa, presencialmente."
          />
          <FeatureGrid items={FIELD_SERVICE} />
        </div>
      </section>

      {/* DOBRA 5 — Integração */}
      <section className="relative overflow-hidden bg-[#08131A] py-20 text-white sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ backgroundImage: DOT_TEXTURE, backgroundSize: "22px 22px" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="max-w-[62ch]">
            <h2 className="font-chillax text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem]">
              Nada disso funciona isolado
            </h2>
            <p className="font-inter mt-5 text-[15px] leading-relaxed text-white/65">
              Seu Digital Workspace conversa com o resto da sua operação de TI. Um incidente de rede
              identificado no Service Desk é escalado automaticamente para o NOC. Uma ameaça de
              segurança aciona o SOC. Você tem uma única visão, não silos desconectados.
            </p>
          </Reveal>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal variant="scale-in" className="flex justify-center">
              <div className="relative flex size-[200px] items-center justify-center rounded-full border border-[var(--site-yellow)]/40 bg-white/[0.04] text-center sm:size-[230px]">
                <div className="px-8">
                  <Headset
                    className="mx-auto size-10 text-[var(--site-yellow)]"
                    strokeWidth={1.2}
                  />
                  <p className="font-chillax mt-3 text-base font-semibold leading-tight">
                    Digital Workspace
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-px overflow-hidden">
              {INTEGRATIONS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={item.title}
                    variant="slide-left"
                    delay={i * 130}
                    className="relative flex items-start gap-5 border-t border-white/12 py-6 pl-6"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[1px] h-px w-5 bg-[var(--site-yellow)]"
                    />
                    <Icon
                      className="size-8 shrink-0 text-[var(--site-blue)]"
                      strokeWidth={1.3}
                    />
                    <div>
                      <p className="font-chillax text-lg font-semibold">{item.title}</p>
                      <p className="font-inter mt-1.5 text-[14px] leading-relaxed text-white/60">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 6 — Por que a Allied IT */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading title="Por que Digital Workspace com a Allied IT" />
          <div className="mt-14 grid gap-px bg-[var(--site-line)] sm:grid-cols-2">
            {WHY.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  variant="fade-up"
                  delay={i * 110}
                  className="bg-white p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-chillax text-sm font-bold tracking-[0.18em] text-[var(--site-yellow)]">
                      {item.num}
                    </span>
                    <Icon className="size-7 text-[var(--site-blue)]" strokeWidth={1.3} />
                  </div>
                  <p className="font-chillax mt-5 text-lg font-semibold text-[var(--site-ink)]">
                    {item.title}
                  </p>
                  <p className="font-inter mt-2 text-[14px] leading-relaxed text-[var(--site-muted)]">
                    {item.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOBRA 7 — FAQ */}
      <section className="border-t border-[var(--site-line)] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading title="Perguntas frequentes" />
          <Reveal variant="fade-up" delay={120} className="mt-10">
            <Accordion type="single" collapsible className="w-full border-t border-[var(--site-line)]">
              {FAQ.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`q-${i}`}
                  className="border-b border-[var(--site-line)]"
                >
                  <AccordionTrigger className="font-chillax py-5 text-left text-[16px] font-semibold text-[var(--site-ink)] hover:text-[var(--site-blue)] hover:no-underline sm:py-6 sm:text-[17px]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter pb-6 text-[14px] leading-relaxed text-[var(--site-muted)]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 8 — CTA + Rodapé */}
      <SiteCta />
      <SiteFooter />
    </>
  );
}
