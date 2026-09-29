import { pageHead } from "@/lib/seo";
import { SiteCtaButton } from "@/components/site/SiteCtaButton";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Compass,
  LifeBuoy,
  BadgeCheck,
  Settings2,
  Check,
  ChevronLeft,
  ChevronRight,
  Zap,
  ShieldCheck,
  CloudUpload,
  DatabaseBackup,
  MonitorSmartphone,
  Sparkles,
  KeyRound,
  Headset,
} from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/m365/hero.png.asset.json";
import word from "@/assets/m365/word.png.asset.json";
import excel from "@/assets/m365/excel.png.asset.json";
import powerpoint from "@/assets/m365/powerpoint.png.asset.json";
import outlook from "@/assets/m365/outlook.png.asset.json";
import teams from "@/assets/m365/teams.png.asset.json";
import onedrive from "@/assets/m365/onedrive.png.asset.json";
import sharepoint from "@/assets/m365/sharepoint.png.asset.json";

export const Route = createFileRoute("/_site/produtos/microsoft-365")({
  head: () =>
    pageHead({
      title: "Microsoft 365 para empresas: licenciamento e suporte | Allied IT",
      description:
        "Licenciamento Microsoft 365 com visão consultiva, ativação, migração, gestão de licenças e suporte técnico da Allied IT.",
      path: "/produtos/microsoft-365",
    }),
  component: Microsoft365Page,
});

const VALUE = [
  { icon: Compass, title: "Visão consultiva", text: "Não vendemos só a licença, ajudamos a entender o que sua empresa realmente precisa." },
  { icon: LifeBuoy, title: "Melhor custo-benefício", text: "Ajudamos a escolher o plano certo, sem pagar por licença que sua empresa não vai usar." },
  { icon: BadgeCheck, title: "Parceiro oficial Microsoft", text: "Licenciamento direto, com procedência garantida." },
  { icon: Settings2, title: "Gestão simplificada", text: "Cuidamos da ativação, renovação e gestão das licenças pra você." },
];

const APPS = [
  { name: "Word", logo: word.url, text: "Criação e edição de documentos profissionais." },
  { name: "Excel", logo: excel.url, text: "Planilhas, cálculos e análise de dados." },
  { name: "PowerPoint", logo: powerpoint.url, text: "Apresentações profissionais de forma rápida." },
  { name: "Outlook", logo: outlook.url, text: "E-mail profissional integrado à agenda e contatos." },
  { name: "Teams", logo: teams.url, text: "Reuniões, chamadas e chat em equipe." },
  { name: "OneDrive", logo: onedrive.url, text: "Armazenamento e compartilhamento de arquivos na nuvem." },
  { name: "SharePoint", logo: sharepoint.url, text: "Portal de colaboração e gestão de conteúdo da equipe." },
];

const INCLUDED = [
  "E-mail profissional",
  "Arquivos em nuvem (OneDrive)",
  "Reuniões por vídeo (Teams)",
  "Segurança contra ameaças",
  "Apps sempre atualizados",
];

const SOLUTIONS = [
  { icon: Zap, title: "Microsoft 365 para Produtividade", text: "Ferramentas e fluxos de trabalho integrados para sua equipe render mais no dia a dia.", hl: "Menos tempo perdido com tarefas manuais." },
  { icon: ShieldCheck, title: "Microsoft 365 para Segurança", text: "Proteção avançada contra ameaças e controle de quem acessa as informações da empresa.", hl: "Redução de risco de vazamento de dados." },
  { icon: CloudUpload, title: "Migração para a Nuvem", text: "Levamos e-mail, arquivos e sistemas para o Microsoft 365 sem perder nada pelo caminho.", hl: "Transição segura, sem parar a operação." },
  { icon: DatabaseBackup, title: "Backup do Microsoft 365", text: "Garantimos a proteção de e-mail, SharePoint e OneDrive contra exclusões acidentais.", hl: "Dados protegidos mesmo em caso de erro humano." },
  { icon: MonitorSmartphone, title: "Gestão de Dispositivos", text: "Gerenciamento centralizado dos computadores e celulares usados pela sua equipe.", hl: "Mais controle e segurança sobre o parque de máquinas." },
  { icon: Sparkles, title: "Copilot 365", text: "Assistente de inteligência artificial integrado ao Microsoft 365 pra ajudar no dia a dia da equipe.", hl: "Mais agilidade nas tarefas do dia a dia." },
];

const WHY = [
  { icon: KeyRound, title: "Licenciamento sem complicação", text: "Cuidamos da contratação, ativação e renovação das licenças certas pro tamanho da sua empresa." },
  { icon: Headset, title: "Renovação sem susto", text: "Avisamos com antecedência sobre vencimentos e ajustamos as licenças conforme sua empresa cresce." },
];

const FAQ = [
  { q: "Preciso trocar todos os computadores para usar o Microsoft 365?", a: "Não necessariamente. Avaliamos os equipamentos que você já tem e orientamos apenas onde for realmente preciso atualizar." },
  { q: "Dá pra migrar do e-mail atual para o Microsoft 365 sem perder nada?", a: "Sim, a migração é feita preservando e-mails, contatos e arquivos existentes." },
  { q: "Quantas licenças minha empresa precisa?", a: "Depende do número de usuários e do tipo de uso. Ajudamos a dimensionar certo, sem pagar por licença que não vai usar." },
];

const btnSolid =
  "font-inter inline-flex h-12 items-center justify-center whitespace-nowrap bg-[var(--site-yellow)] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--site-ink)] transition hover:brightness-105";
const eyebrow = "font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-blue)]";
const h2 = "font-chillax text-[1.8rem] font-bold leading-tight tracking-tight sm:text-[2.4rem]";

function Microsoft365Page() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 340), behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[72px] flex min-h-[78vh] items-center overflow-hidden pt-[72px] bg-[var(--site-ink)] text-white">
        <img src={hero.url} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover object-right" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">
            Produtos · Licenciamento
          </span>
          <h1 className="font-chillax mt-5 text-5xl font-bold tracking-tight sm:text-6xl">Microsoft 365</h1>
          <p className="font-inter mt-6 max-w-xl text-[17px] leading-relaxed text-white/80">
            Tudo o que sua empresa precisa em uma única solução, com licenciamento feito por quem entende de TI.
          </p>
          <SiteCtaButton  className={`${btnSolid} mt-10`}>Solicite um orçamento</SiteCtaButton>
        </div>
      </section>


      {/* O que é — carrossel */}
      <section className="bg-[#F4F7F9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <span className={eyebrow}>Aplicativos</span>
              <h2 className={`${h2} mt-3`}>O que é Microsoft 365</h2>
              <p className="font-inter mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--site-muted)]">
                O Microsoft 365 reúne as principais ferramentas de produtividade da Microsoft em um só lugar, com licenciamento e configuração feitos pela Allied IT. Veja o que vem incluso:
              </p>
            </Reveal>
            <div className="flex gap-2">
              <button aria-label="Anterior" onClick={() => scroll(-1)} className="grid size-11 place-items-center border border-[var(--site-blue)] text-[var(--site-blue)] transition hover:bg-[var(--site-blue)] hover:text-white">
                <ChevronLeft className="size-5" />
              </button>
              <button aria-label="Próximo" onClick={() => scroll(1)} className="grid size-11 place-items-center border border-[var(--site-blue)] text-[var(--site-blue)] transition hover:bg-[var(--site-blue)] hover:text-white">
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
          <div ref={track} className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none]">
            {APPS.map((a) => (
              <div key={a.name} className="w-[260px] shrink-0 snap-start bg-white p-7 shadow-sm">
                <img src={a.logo} alt={`Logo ${a.name}`} loading="lazy" className="h-16 w-auto object-contain" />
                <h3 className="font-chillax mt-6 text-lg font-semibold">{a.name}</h3>
                <p className="font-inter mt-2 text-[14px] leading-relaxed text-[var(--site-muted)]">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que vem incluso */}
      <section className="bg-[var(--site-ink)] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <h2 className={h2}>O que vem incluso</h2>
          </Reveal>
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

      {/* Soluções */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className={`${h2} max-w-3xl`}>Microsoft 365 para cada necessidade da sua empresa</h2>
            <p className="font-inter mt-4 text-[15px] text-[var(--site-muted)]">Veja como cada solução pode ajudar a sua operação.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <div className="flex h-full flex-col border border-black/10 p-7">
                  <s.icon className="size-7 text-[var(--site-blue)]" />
                  <h3 className="font-chillax mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="font-inter mt-3 flex-1 text-[14px] leading-relaxed text-[var(--site-muted)]">{s.text}</p>
                  <p className="font-inter mt-5 border-t border-black/10 pt-4 text-[13px] font-semibold text-[var(--site-blue)]">{s.hl}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-[var(--site-ink)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-yellow)]">Diferenciais</span>
            <h2 className={`${h2} mt-3`}>Por que contar com a Allied IT</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...VALUE, ...WHY].map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-3xl border border-white/12 bg-white/5 p-7">
                  <span className="grid size-14 place-items-center rounded-full bg-[var(--site-yellow)]/15">
                    <v.icon className="size-6 text-[var(--site-yellow)]" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-chillax mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="font-inter mt-3 text-[14px] leading-relaxed text-white/65">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <SiteCtaButton  className={`${btnSolid} mt-12`}>Solicite um orçamento</SiteCtaButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F4F7F9] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className={h2}>Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-10 w-full border-t border-black/10">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="border-b border-black/10">
                <AccordionTrigger className="font-chillax py-5 text-left text-[16px] font-semibold hover:text-[var(--site-blue)] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-inter pb-6 text-[14px] leading-relaxed text-[var(--site-muted)]">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Chamada final */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className={h2}>Quer saber mais sobre o Microsoft 365 para a sua empresa?</h2>
          <p className="font-inter mx-auto mt-5 max-w-[60ch] text-[15px] leading-relaxed text-[var(--site-muted)]">
            A gente entende o cenário atual da sua equipe e mostra o plano de licenciamento que faz mais sentido.
          </p>
          <SiteCtaButton
            
            className="font-inter mt-9 inline-flex h-11 items-center justify-center whitespace-nowrap border border-[var(--site-blue)] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--site-blue)] transition-colors hover:bg-[var(--site-blue)] hover:text-white"
          >
            Solicite um orçamento
          </SiteCtaButton>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
