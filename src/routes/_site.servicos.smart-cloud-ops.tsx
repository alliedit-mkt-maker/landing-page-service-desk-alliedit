import { pageHead } from "@/lib/seo";
import { SiteCtaButton } from "@/components/site/SiteCtaButton";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Cloud,
  Mail,
  CloudUpload,
  Network,
  Layers,
  DatabaseBackup,
  LifeBuoy,
  Scale,
  PiggyBank,
  ShieldCheck,
  Activity,
  Eye,
  Lock,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroPhoto from "@/assets/sco/hero.jpg.asset.json";
import serverPhoto from "@/assets/sco/server.jpg.asset.json";

export const Route = createFileRoute("/_site/servicos/smart-cloud-ops")({
  head: () =>
    pageHead({
      title: "Smart Cloud Ops: Azure, M365 e FinOps | Allied IT",
      description: "Nuvem operada com governança: Azure, Microsoft 365, migração, backup, Disaster Recovery, FinOps e SecOps.",
      path: "/servicos/smart-cloud-ops",
    }),
  component: SmartCloudOpsPage,
});

type Item = { icon: React.ElementType; title: string; text: string };

const GROUPS: { eyebrow: string; title: string; items: Item[] }[] = [
  {
    eyebrow: "Grupo 1",
    title: "Plataformas & Migração",
    items: [
      { icon: Cloud, title: "Microsoft Azure", text: "Provisionamento, administração e otimização de ambientes Azure, do zero ou já em produção." },
      { icon: Mail, title: "Microsoft 365", text: "Gestão completa do ambiente Microsoft 365: e-mail, colaboração, segurança e licenciamento." },
      { icon: CloudUpload, title: "Migração para nuvem", text: "Migração planejada de servidores, aplicações e dados on-premise para a nuvem, sem parar a operação." },
      { icon: Network, title: "Ambientes híbridos", text: "Arquiteturas que combinam nuvem e infraestrutura local, integradas e gerenciadas como um único ambiente." },
      { icon: Layers, title: "Virtualização", text: "Virtualização de servidores e workloads para reduzir custo de hardware e ganhar flexibilidade." },
    ],
  },
  {
    eyebrow: "Grupo 2",
    title: "Continuidade & Proteção",
    items: [
      { icon: DatabaseBackup, title: "Backup em nuvem", text: "Rotinas automatizadas de backup, com retenção e testes de restauração. Dados protegidos de verdade." },
      { icon: LifeBuoy, title: "Disaster Recovery", text: "Plano e infraestrutura de recuperação de desastres, com tempo de resposta definido para cada aplicação crítica." },
    ],
  },
  {
    eyebrow: "Grupo 3",
    title: "Governança & Performance",
    items: [
      { icon: Scale, title: "Governança Cloud", text: "Políticas, papéis de acesso e padrões de uso da nuvem, para crescer sem perder controle." },
      { icon: PiggyBank, title: "FinOps", text: "Visibilidade e otimização de custo em nuvem: pagar pelo que se usa, sem surpresa na fatura." },
      { icon: ShieldCheck, title: "SecOps", text: "Monitoramento e resposta a incidentes de segurança no ambiente cloud, de forma contínua." },
    ],
  },
];

const WHY = [
  { icon: Activity, num: "01", title: "Operação contínua, não só projeto", text: "Acompanhamos o ambiente depois que ele vai ao ar, não só na migração." },
  { icon: Eye, num: "02", title: "Visibilidade de custo real", text: "Você sabe exatamente para onde vai cada real gasto em nuvem." },
  { icon: Lock, num: "03", title: "Segurança integrada à operação", text: "SecOps não é um serviço à parte, é parte do dia a dia da nuvem." },
  { icon: Users, num: "04", title: "Um time, todos os pilares", text: "Plataforma, backup, DR, governança e FinOps com o mesmo ponto de contato." },
];

const FAQ = [
  { q: "A migração para nuvem interrompe minha operação?", a: "Não. O planejamento de migração é feito para rodar em paralelo ao ambiente atual, com corte de tráfego só quando tudo já está validado." },
  { q: "Eu preciso já estar 100% na nuvem para contratar o Smart Cloud Ops?", a: "Não. Atendemos tanto quem já está na nuvem e quer operação/governança quanto quem ainda está migrando ou em ambiente híbrido." },
  { q: "O backup em nuvem substitui o backup local?", a: "Depende do cenário. Em muitos casos o ideal é justamente a combinação dos dois, o que definimos na avaliação inicial." },
  { q: "Como funciona o FinOps na prática?", a: "Analisamos o consumo atual, identificamos desperdício (recursos ociosos, dimensionamento errado) e implementamos alertas e políticas para manter o custo sob controle continuamente." },
];

const GRID_TEXTURE =
  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)";

const DOT_TEXTURE = "radial-gradient(rgba(255,255,255,0.16) 1.1px, transparent 1.1px)";

type GroupProps = { eyebrow: string; title: string; items: Item[] };

function GroupHeader({ eyebrow, title, dark }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <Reveal variant="fade-up" className="max-w-[46ch]">
      <p className={`font-inter text-[11px] font-semibold uppercase tracking-[0.22em] ${dark ? "text-[#F3C400]" : "text-[var(--site-yellow)]"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-chillax mt-3 text-balance text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem] ${dark ? "text-white" : "text-[var(--site-ink)]"}`}>
        {title}
      </h2>
    </Reveal>
  );
}

/* 5 itens: 3 em cima + 2 embaixo, sem célula vazia */
function GridGroup({ eyebrow, title, items }: GroupProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <GroupHeader eyebrow={eyebrow} title={title} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--site-line)] bg-[var(--site-line)] sm:grid-cols-2 lg:grid-cols-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            const span = i < 3 ? "lg:col-span-2" : "lg:col-span-3";
            const last = i === items.length - 1 && items.length % 2 === 1 ? "sm:col-span-2" : "";
            return (
              <Reveal
                key={item.title}
                variant="fade-up"
                delay={i * 60}
                className={`group flex flex-col gap-4 bg-white px-7 py-8 transition-colors duration-200 hover:bg-[#F2F7F9] ${last} ${span}`}
              >
                <Icon className="size-9 shrink-0 text-[var(--site-blue)] transition-colors duration-200 group-hover:text-[var(--site-yellow)]" strokeWidth={1.3} />
                <p className="font-chillax text-lg font-semibold text-[var(--site-ink)]">{item.title}</p>
                <p className="font-inter text-[14px] leading-relaxed text-[var(--site-muted)]">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 2 itens: split horizontal sobre azul da marca */
function SplitGroup({ eyebrow, title, items }: GroupProps) {
  return (
    <section className="relative overflow-hidden bg-[#046E8B] py-20 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: GRID_TEXTURE, backgroundSize: "48px 48px" }} />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-[380px] rounded-full border border-white/15" />
      <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 size-[220px] rounded-full border border-[#F3C400]/30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <GroupHeader eyebrow={eyebrow} title={title} dark />
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-white/20">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} variant="fade-up" delay={i * 100} className={`flex items-start gap-6 ${i === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <Icon className="size-16 shrink-0 text-[#F3C400] sm:size-20" strokeWidth={1} />
                <div>
                  <p className="font-chillax text-xl font-semibold text-white sm:text-2xl">{item.title}</p>
                  <p className="font-inter mt-3 max-w-[42ch] text-[15px] leading-relaxed text-white/75">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 3 itens: lista numerada horizontal */
function NumberedGroup({ eyebrow, title, items }: GroupProps) {
  return (
    <section className="bg-[#F4F8F9] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <GroupHeader eyebrow={eyebrow} title={title} />
        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} variant="fade-up" delay={i * 100} className="relative">
                <div className="flex items-end justify-between border-b border-[var(--site-blue)]/25 pb-4">
                  <span className="font-chillax text-[3.5rem] font-bold leading-none tracking-tight text-[var(--site-blue)] tabular-nums sm:text-[4.25rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="mb-2 size-7 text-[var(--site-yellow)]" strokeWidth={1.3} />
                </div>
                <p className="font-chillax mt-6 text-lg font-semibold text-[var(--site-ink)]">{item.title}</p>
                <p className="font-inter mt-2 text-[14px] leading-relaxed text-[var(--site-muted)]">{item.text}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function SmartCloudOpsPage() {
  const btn =
    "font-inter inline-flex h-11 items-center justify-center whitespace-nowrap px-8 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

  return (
    <>
      {/* 1: Hero */}
      <section className="relative -mt-[72px] overflow-hidden bg-[#050D12] pt-[72px]">
        <img
          src={heroPhoto.url}
          alt="Nuvem digital sobre circuitos representando operação em cloud"
          className="absolute inset-0 size-full object-cover object-[65%_center]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <div className="max-w-[58ch]">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">
              Serviços
            </p>
            <h1 className="font-chillax mt-4 max-w-[24ch] text-balance text-[2.2rem] font-bold leading-[1.06] tracking-tight text-white sm:text-[3.2rem]">
              Smart Cloud Ops
            </h1>
            <p className="font-inter mt-6 max-w-[46ch] text-pretty text-[16px] leading-relaxed text-white/75">
              Nuvem operada com inteligência: performance, segurança e custo sob controle. Do Azure
              ao Microsoft 365, com governança de ponta a ponta.
            </p>
            <SiteCtaButton  className={`${btn} mt-9 bg-[var(--site-yellow)] text-[#0B1418] hover:bg-white`}>
              Falar com um especialista em Cloud
            </SiteCtaButton>
          </div>
        </div>
      </section>

      {/* 2: Visão geral */}
      <section className="relative bg-[#F4F8F9] py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <div className="relative grid overflow-hidden rounded-[28px] border border-white/10 bg-[#08131A] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-[480px]">
                <img src={serverPhoto.url} alt="Servidor integrado à nuvem" className="absolute inset-0 size-full object-cover" />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#08131A] via-[#08131A]/55 to-[#08131A]/20 lg:bg-gradient-to-r lg:from-[#08131A]/30 lg:via-[#08131A]/55 lg:to-[#08131A]"
                />
              </div>
              <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{ backgroundImage: DOT_TEXTURE, backgroundSize: "22px 22px" }}
                />
                <div className="relative">
                  <h2 className="font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]">
                    O que é Smart Cloud Ops
                  </h2>
                  <p className="font-inter mt-5 max-w-[46ch] text-pretty text-[15px] leading-relaxed text-white/70">
                    Migrar para a nuvem é só o primeiro passo. O que garante resultado é a operação:
                    monitorar, proteger, otimizar custo e manter tudo governado. Todos os dias, não só
                    na virada.
                  </p>
                  <p className="font-inter mt-4 max-w-[46ch] text-pretty text-[15px] leading-relaxed text-white/70">
                    O Smart Cloud Ops da Allied cuida da nuvem como uma operação contínua: da migração
                    ao dia a dia, do backup ao FinOps, para que sua empresa tenha a nuvem funcionando a
                    favor do negócio, não como mais um ponto de risco.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3, 4, 5: Grupos de serviços */}
      <GridGroup {...GROUPS[0]} />
      <SplitGroup {...GROUPS[1]} />
      <NumberedGroup {...GROUPS[2]} />

      {/* 6: Integração */}
      <section className="relative overflow-hidden bg-[#08131A] py-20 text-white sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ backgroundImage: GRID_TEXTURE, backgroundSize: "48px 48px" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal variant="fade-up" className="max-w-[60ch]">
              <h2 className="font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem]">
                Cloud não é só infraestrutura: é operação
              </h2>
              <p className="font-inter mt-5 text-pretty text-[15px] leading-relaxed text-white/65">
                Migrar sem governança gera custo fora de controle. Governança sem segurança gera
                exposição. Segurança sem continuidade gera risco no primeiro incidente. O Smart Cloud
                Ops trata esses pilares como uma coisa só: plataforma, proteção e governança operando
                juntos, com um time acompanhando o ambiente de forma contínua, não só quando algo
                quebra.
              </p>
            </Reveal>
            <Reveal variant="scale-in" className="flex justify-center">
              <div className="relative flex size-[200px] items-center justify-center rounded-full border border-[var(--site-yellow)]/40 bg-white/[0.04] text-center sm:size-[230px]">
                <div className="px-8">
                  <Cloud className="mx-auto size-10 text-[var(--site-yellow)]" strokeWidth={1.2} />
                  <p className="font-chillax mt-3 text-base font-semibold leading-tight">Smart Cloud Ops</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7: Por que */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="fade-up" className="mx-auto max-w-[46ch] text-center">
            <h2 className="font-chillax text-balance text-[1.6rem] font-bold leading-tight tracking-tight text-[var(--site-ink)] sm:text-[1.95rem]">
              Por que Smart Cloud Ops da Allied
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {WHY.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  variant="fade-up"
                  delay={i * 110}
                  className="rounded-2xl border border-[var(--site-line)] bg-white p-7 transition-colors duration-200 hover:border-[var(--site-yellow)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-chillax text-sm font-bold tracking-[0.18em] text-[var(--site-yellow)]">
                      {item.num}
                    </span>
                    <Icon className="size-7 text-[var(--site-yellow)]" strokeWidth={1.3} />
                  </div>
                  <p className="font-chillax mt-5 text-lg font-semibold text-[var(--site-ink)]">{item.title}</p>
                  <p className="font-inter mt-2 text-[14px] leading-relaxed text-[var(--site-muted)]">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8: FAQ */}
      <section className="bg-gradient-to-b from-[#0B1B23] to-[#08131A] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal variant="fade-up">
            <h2 className="font-chillax text-balance text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-[2.1rem]">
              Perguntas frequentes
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={120} className="mt-10">
            <Accordion type="single" collapsible className="w-full border-t border-white/12">
              {FAQ.map((item, i) => (
                <AccordionItem key={i} value={`q-${i}`} className="border-b border-white/12">
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

      <SiteCta modal />
      <SiteFooter />
    </>
  );
}
