import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Binoculars,
  Handshake,
  BadgeCheck,
  HeartHandshake,
  Zap,
  BarChart3,
  Activity,
  Eye,
  MessagesSquare,
  Target,
  Network,
  MapPin,
} from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteSegments } from "@/components/site/SiteSegments";
import { SiteBrazilMap } from "@/components/site/SiteBrazilMap";
import officeHall from "@/assets/sobre/office-hall.webp.asset.json";
import ceo from "@/assets/sobre/ceo-jimmy.jpg.asset.json";

const TITLE = "Sobre a Allied IT | Quem somos e como operamos TI corporativa";
const DESCRIPTION =
  "Empresa brasileira de tecnologia fundada em 2018, com atuação nacional em Service Desk, nuvem, segurança e infraestrutura para empresas de médio e grande porte.";

export const Route = createFileRoute("/site/sobre")({
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
  component: SobrePage,
});

const DIFERENCIAIS = [
  { icon: Handshake, label: "Atendimento consultivo" },
  { icon: BadgeCheck, label: "Especialistas certificados" },
  { icon: HeartHandshake, label: "Atendimento humanizado" },
  { icon: Zap, label: "Resposta rápida" },
  { icon: BarChart3, label: "Gestão baseada em indicadores" },
  { icon: Activity, label: "Monitoramento contínuo" },
  { icon: Eye, label: "Transparência" },
  { icon: MessagesSquare, label: "Comunicação constante com o cliente" },
];

const MVV = [
  {
    icon: Target,
    title: "Missão",
    text: "Obstinação em levar um alto nível de experiência ao cliente.",
  },
  {
    icon: Binoculars,
    title: "Visão",
    text: "Ser referência nacional em integração de tecnologia, serviço e experiência.",
  },
  {
    icon: Network,
    title: "Valores",
    text: "Prover soluções e serviços com o foco do cliente, prezando sempre pelo respeito e integridade em todo ecossistema envolvido.",
  },
];

function SobrePage() {
  const btnBase =
    "font-inter inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap px-7 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

  return (
    <>
      {/* DOBRA 1 — Hero */}
      <section className="relative -mt-[72px] overflow-hidden bg-[#0A0E12] pt-[72px]">
        <img
          src={officeHall.url}
          alt="Corredor do escritório da Allied IT, com o logo pintado na parede"
          className="absolute inset-0 size-full object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(4,110,139,0.72) 42%, rgba(4,110,139,0.28) 68%, rgba(4,110,139,0.06) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[62vh] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[70vh]">
          <Reveal className="max-w-[42ch]">
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--site-yellow)]">
              Quem somos
            </span>
            <h1 className="font-chillax mt-4 text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.8rem]">
              Por dentro da Allied IT
            </h1>
            <p className="font-inter mt-5 text-[15px] leading-relaxed text-white/75 sm:text-base">
              Conheça a empresa por trás da operação de TI que atende empresas de médio e grande
              porte em todo o Brasil.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 2 — Nossa história */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-chillax text-[1.8rem] font-bold leading-[1.15] tracking-tight sm:text-[2.3rem]">
              Nossa história
            </h2>
            <p className="font-inter mt-6 text-[15px] leading-relaxed text-[var(--site-muted)] sm:text-base">
              A Allied IT é uma empresa brasileira de tecnologia, fundada em 2018, com atuação
              nacional e foco em empresas de médio e grande porte. Nosso propósito é simplificar a
              tecnologia — para que você possa focar no crescimento do seu negócio, não na
              complexidade da sua operação de TI.
            </p>
            <div className="mt-10 border-l-2 border-[var(--site-yellow)] pl-5">
              <span className="font-chillax block text-[2.4rem] font-bold leading-none text-[var(--site-blue)]">
                +7 anos
              </span>
              <span className="font-inter mt-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--site-muted)]">
                de operação
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal key={d.label} delay={i * 60} className="flex items-start gap-3">
                <d.icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--site-blue)]" strokeWidth={1.5} />
                <span className="font-inter text-[14.5px] leading-snug">{d.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 3 — O que fazemos */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="border-t border-[var(--site-line)] pt-14">
            <h2 className="font-chillax text-[1.7rem] font-bold leading-[1.15] tracking-tight sm:text-[2.1rem]">
              O que fazemos
            </h2>
            <p className="font-inter mt-5 max-w-[62ch] text-[15px] leading-relaxed text-[var(--site-muted)]">
              Da operação do dia a dia à infraestrutura crítica — Service Desk, nuvem, segurança,
              redes e muito mais. Cuidamos de cada camada da sua tecnologia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/site/servicos"
                className={`${btnBase} bg-[var(--site-blue)] text-white hover:bg-[var(--site-blue-dark)]`}
              >
                Ver nossos serviços
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/site/produtos"
                className={`${btnBase} border border-[var(--site-line)] text-[var(--site-ink)] hover:border-[var(--site-blue)]`}
              >
                Ver nossos produtos
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 4 — CEO */}
      <section className="bg-[#F6F8F9] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <Reveal variant="slide-right" className="relative overflow-hidden">
            <img
              src={ceo.url}
              alt="Jimmy, CEO da Allied IT"
              loading="lazy"
              className="w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 mix-blend-color"
              style={{
                background: "linear-gradient(200deg, rgba(4,110,139,0.7) 0%, rgba(4,110,139,0.45) 60%, rgba(212,160,23,0.2) 100%)",
              }}
            />
            <span aria-hidden="true" className="site-noise opacity-60" />
          </Reveal>

          <Reveal variant="slide-left">
            <h2 className="font-chillax text-[1.8rem] font-bold leading-[1.15] tracking-tight sm:text-[2.2rem]">
              Jimmy
            </h2>
            <span className="font-inter mt-2 block text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--site-blue)]">
              CEO da Allied IT
            </span>
            <p className="font-inter mt-7 text-[15px] leading-relaxed text-[var(--site-muted)] sm:text-base">
              Com mais de 20 anos de atuação em tecnologia, Jimmy construiu sua trajetória em
              operações, infraestrutura, serviços gerenciados e gestão. Ao longo desse período,
              acompanhou de perto a evolução do papel da tecnologia nas empresas — e como ela passou
              a impactar diretamente a eficiência, a segurança e a capacidade de crescimento dos
              negócios.
            </p>
            <p className="font-inter mt-5 text-[15px] leading-relaxed text-[var(--site-muted)] sm:text-base">
              Seu olhar sobre tecnologia sempre foi prático: precisa fazer sentido para a realidade
              de cada empresa, apoiando decisões, operação e crescimento de forma consistente. É essa
              visão que orienta a atuação da Allied IT hoje.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DOBRA 5 — Missão, Visão e Valores */}
      <section className="relative overflow-hidden bg-[#046E8B] py-20 sm:py-24">
        <span aria-hidden="true" className="site-noise" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-3">
          {MVV.map((m, i) => (
            <Reveal key={m.title} delay={i * 100}>
              <m.icon className="h-8 w-8 text-[var(--site-yellow)]" strokeWidth={1.5} />
              <h2 className="font-chillax mt-5 text-[1.4rem] font-bold text-white">{m.title}</h2>
              <p className="font-inter mt-3 text-[14.5px] leading-relaxed text-white/80">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DOBRA 6 — Segmentos */}
      <SiteSegments />

      {/* DOBRA 7 — Onde atuamos */}
      <section className="relative overflow-hidden bg-[#08131A] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <h2 className="font-chillax text-[1.8rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.3rem]">
              Atuação em todo o Brasil
            </h2>
            <p className="font-inter mt-5 max-w-[54ch] text-[15px] leading-relaxed text-white/70">
              Atendemos empresas de médio e grande porte em todo o território nacional, com a mesma
              qualidade de operação em qualquer estado.
            </p>
          </Reveal>
          <Reveal variant="fade-in" className="flex justify-center lg:justify-end">
            <SiteBrazilMap />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 8 — Endereço */}
      <section className="bg-white py-16 sm:py-20">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <p className="font-inter inline-flex items-center gap-3 text-[15px]">
            <MapPin className="h-5 w-5 text-[var(--site-blue)]" strokeWidth={1.5} />
            Alphaville, Barueri - SP
          </p>
          <Link
            to="/site/contato"
            className={`${btnBase} bg-[var(--site-blue)] text-white hover:bg-[var(--site-blue-dark)]`}
          >
            Fale com a gente
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </section>

      {/* DOBRA 9 — CTA + Rodapé */}
      <SiteCta />
      <SiteFooter />
    </>
  );
}
