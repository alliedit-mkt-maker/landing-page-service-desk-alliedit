import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
import heroPhoto from "@/assets/dw/hero.jpg.asset.json";
import nocPhoto from "@/assets/dw/noc.jpg.asset.json";
import fieldPhoto from "@/assets/dw/field.jpg.asset.json";
import deskPhoto from "@/assets/dw/desk.jpg.asset.json";

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

const CARD_PHOTOS = [
  { src: deskPhoto.url, alt: "Analista de suporte remoto com headset" },
  { src: nocPhoto.url, alt: "Centro de operações monitorando ambientes" },
  { src: fieldPhoto.url, alt: "Técnico em atendimento presencial" },
];

function PhotoSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % CARD_PHOTOS.length),
      4200,
    );
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="absolute inset-0">
      {CARD_PHOTOS.map((p, i) => (
        <img
          key={p.src}
          src={p.src}
          alt={p.alt}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  dark,
  large,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  dark?: boolean;
  large?: boolean;
}) {
  return (
    <Reveal variant="fade-up" className="max-w-[62ch]">
      {eyebrow ? (
        <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-chillax mt-3 font-bold leading-tight tracking-tight ${
          dark ? "text-white" : "text-[var(--site-ink)]"
        } ${
          large
            ? "text-[2.1rem] sm:text-[2.9rem]"
            : "text-[1.7rem] sm:text-[2.1rem]"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`font-inter mt-5 leading-relaxed ${
            dark ? "text-white/65" : "text-[var(--site-muted)]"
          } ${large ? "text-[16px]" : "text-[15px]"}`}
        >
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
    <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--site-line)] bg-[var(--site-line)] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Reveal
            key={item.label}
            variant="fade-up"
            delay={Math.min(i, 8) * 45}
            className="group flex items-center gap-5 bg-white px-6 py-8 transition-colors duration-200 hover:bg-[#F2F7F9]"
          >
            <Icon
              className="size-9 shrink-0 text-[var(--site-blue)] transition-colors duration-200 group-hover:text-[var(--site-yellow)]"
              strokeWidth={1.3}
            />
            <span className="font-inter text-[15px] leading-snug text-[var(--site-ink)]">
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
      {/* DOBRA 1 — Hero com foto */}
      <section className="relative -mt-[72px] overflow-hidden bg-[#050D12] pt-[72px]">
        <img
          src={heroPhoto.url}
          alt="Profissional acessando serviços de TI em ambiente digital"
          className="absolute inset-0 size-full object-cover object-[65%_center]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/55 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <Reveal variant="fade-up" className="max-w-[58ch]">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">
              Digital Workspace
            </p>
            <h1 className="font-chillax mt-4 text-[2.2rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[3.2rem]">
              O suporte que sua equipe sente que está sempre por perto
            </h1>
            <p className="font-inter mt-6 max-w-[52ch] text-[16px] leading-relaxed text-white/75">
              Service Desk e Field Service em uma só operação, atendimento remoto e presencial,
              com SLA garantido e gestão centralizada.
            </p>
            <Link
              to="/site/contato"
              className={`${btn} mt-9 bg-[var(--site-yellow)] text-[#0B1418] hover:bg-white`}
            >
              Falar com especialista
            </Link>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 2 — Card banner com fotos deslizantes */}
      <section className="relative bg-[#050D12] py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <div className="relative grid overflow-hidden rounded-[28px] border border-white/10 bg-[#08131A] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] lg:grid-cols-2">
              {/* fotos */}
              <div className="relative min-h-[300px] lg:min-h-[520px]">
                <PhotoSlider />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#08131A] via-[#08131A]/55 to-[#08131A]/20 lg:bg-gradient-to-r lg:from-[#08131A]/30 lg:via-[#08131A]/55 lg:to-[#08131A]"
                />
              </div>

              {/* texto */}
              <div className="relative p-8 sm:p-12 lg:p-14">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{ backgroundImage: DOT_TEXTURE, backgroundSize: "22px 22px" }}
                />
                <div className="relative">
                  <h2 className="font-chillax text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]">
                    O que é Digital Workspace
                  </h2>
                  <p className="font-inter mt-5 text-[15px] leading-relaxed text-white/70">
                    É a porta de entrada da sua operação de TI: onde o usuário pede ajuda e onde o
                    problema físico é resolvido. Reunimos Service Desk (suporte remoto) e Field
                    Service (suporte presencial) em uma única frente, para que ninguém fique
                    esperando entre um time e outro.
                  </p>
                  <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    {OVERVIEW.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <Reveal
                          key={item.label}
                          variant="fade-up"
                          delay={i * 110}
                          className="flex flex-col items-start gap-3 border-t border-white/15 pt-5"
                        >
                          <Icon
                            className="size-8 text-[var(--site-yellow)]"
                            strokeWidth={1.2}
                          />
                          <p className="font-chillax text-base font-semibold text-white">
                            {item.label}
                          </p>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 3 — Service Desk */}
      <section className="bg-gradient-to-b from-[#F4F8F9] to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal variant="fade-up" className="mb-4">
                <Headset className="size-14 text-[var(--site-blue)]" strokeWidth={1.1} />
              </Reveal>
              <SectionHeading
                eyebrow="Suporte remoto"
                title="Service Desk"
                text="Atendimento especializado para o usuário final, disponível pelo canal que fizer mais sentido pra sua empresa."
                large
              />
            </div>
            <Reveal variant="scale-in" delay={120}>
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={deskPhoto.url}
                  alt="Analista de Service Desk atendendo usuários"
                  className="h-[280px] w-full object-cover sm:h-[360px]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#046E8B]/35 to-transparent"
                />
              </div>
            </Reveal>
          </div>

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
                className="rounded-2xl border border-[var(--site-line)] bg-white p-7"
              >
                <Clock className="size-8 text-[var(--site-blue)]" strokeWidth={1.3} />
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
      <section className="bg-gradient-to-b from-white via-[#EEF4F6] to-[#DDE8EC] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal variant="scale-in" className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={fieldPhoto.url}
                  alt="Técnico Allied IT em atendimento presencial"
                  className="h-[280px] w-full object-cover sm:h-[360px]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#046E8B]/35 to-transparent"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal variant="fade-up" className="mb-4">
                <Wrench className="size-14 text-[var(--site-blue)]" strokeWidth={1.1} />
              </Reveal>
              <SectionHeading
                eyebrow="Suporte presencial"
                title="Field Service"
                text="Equipe técnica especializada para o que só se resolve com mão na massa, presencialmente."
                large
              />
            </div>
          </div>
          <FeatureGrid items={FIELD_SERVICE} />
        </div>
      </section>

      {/* DOBRA 5 — Integração */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#DDE8EC] via-[#0A2430] to-[#08131A] py-20 text-white sm:py-28">
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
      <section className="bg-gradient-to-b from-[#08131A] to-[#0B1B23] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="fade-up" className="max-w-[46ch]">
            <h2 className="font-chillax text-[1.6rem] font-bold leading-tight tracking-tight text-white/90 sm:text-[1.95rem]">
              Por que Digital Workspace com a Allied IT
            </h2>
            <p className="font-inter mt-5 text-[15px] leading-relaxed text-white/55">
              Operação madura, especialização por segmento e presença nacional para acompanhar o
              crescimento da sua empresa.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {WHY.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  variant="fade-up"
                  delay={i * 110}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition-colors duration-200 hover:border-[var(--site-yellow)]/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-chillax text-sm font-bold tracking-[0.18em] text-[var(--site-yellow)]">
                      {item.num}
                    </span>
                    <Icon className="size-7 text-[var(--site-blue)]" strokeWidth={1.3} />
                  </div>
                  <p className="font-chillax mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="font-inter mt-2 text-[14px] leading-relaxed text-white/60">
                    {item.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOBRA 7 — FAQ */}
      <section className="bg-gradient-to-b from-[#0B1B23] to-[#08131A] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading title="Perguntas frequentes" dark />
          <Reveal variant="fade-up" delay={120} className="mt-10">
            <Accordion type="single" collapsible className="w-full border-t border-white/12">
              {FAQ.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`q-${i}`}
                  className="border-b border-white/12"
                >
                  <AccordionTrigger className="font-chillax py-5 text-left text-[16px] font-semibold text-white hover:text-[var(--site-yellow)] hover:no-underline sm:py-6 sm:text-[17px]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter pb-6 text-[14px] leading-relaxed text-white/60">
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
