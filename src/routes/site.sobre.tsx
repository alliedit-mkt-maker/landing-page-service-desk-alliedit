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
import officeHall from "@/assets/sobre/hero-office.jpg.asset.json";
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

const DOT_TEXTURE =
  "radial-gradient(rgba(255,255,255,0.16) 1.1px, transparent 1.1px)";

function SobrePage() {
  const btnBase =
    "font-inter inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap px-7 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

  return (
    <>
      {/* DOBRA 1 — Hero */}
      <section className="relative -mt-[72px] overflow-hidden bg-[#0A0E12] pt-[72px]">
        <img
          src={officeHall.url}
          alt="Corredor do escritório da Allied IT, com o logo da marca sobre a parede verde"
          className="absolute inset-0 size-full object-cover object-[58%_center]"
          style={{ transform: "rotate(0.6deg) scale(1.08)" }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(4,110,139,0.78) 34%, rgba(4,110,139,0.34) 58%, rgba(4,110,139,0.04) 82%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-5 py-28 sm:px-8 lg:min-h-[92vh]">
          <Reveal>
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--site-yellow)]">
              Quem somos
            </span>
            <h1 className="font-chillax mt-4 whitespace-nowrap text-[1.7rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.4rem] lg:text-[3.1rem]">
              Por dentro da Allied IT
            </h1>
            <p className="font-inter mt-5 max-w-[34ch] text-[15px] leading-relaxed text-white/75 sm:max-w-[52ch] sm:text-base">
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
              tecnologia, para que você possa focar no crescimento do seu negócio, não na
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

          <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal
                key={d.label}
                delay={i * 60}
                className="group flex items-center gap-4 border-b border-black/[0.07] py-6"
              >
                <d.icon
                  className="h-6 w-6 shrink-0 text-[var(--site-blue)] transition-colors duration-300 group-hover:text-[#F3C400]"
                  strokeWidth={1.25}
                />
                <span className="font-inter text-[14.5px] leading-snug">{d.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 3 — CEO (foto full-bleed lateral + reveal no scroll) */}
      <section className="relative overflow-hidden bg-[#F6F8F9]">
        <div className="mx-auto grid max-w-none grid-cols-1 items-stretch lg:grid-cols-[42%_58%]">
          <div className="relative h-[300px] overflow-hidden lg:h-auto lg:min-h-[440px]">
            <img
              src={ceo.url}
              alt="Jimmy, CEO da Allied IT"
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-[50%_22%]"
            />
            <span aria-hidden="true" className="site-noise opacity-80" />
            <span
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,14,18,0.35) 0%, rgba(10,14,18,0.05) 60%, rgba(246,248,249,0.55) 100%)",
              }}
            />
          </div>

          <div className="flex items-center px-5 py-14 sm:px-10 lg:px-16">
            <div className="max-w-[58ch]">
              <Reveal variant="slide-left">
                <h2 className="font-chillax text-[1.7rem] font-bold leading-[1.05] tracking-tight sm:text-[2.1rem]">
                  Jimmy
                </h2>
                <span className="mt-3 block h-[3px] w-14 bg-[#F3C400]" />
                <span className="font-inter mt-3 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--site-blue)]">
                  CEO da Allied IT
                </span>
              </Reveal>
              <Reveal variant="slide-left" delay={140}>
                <p className="font-inter mt-6 text-[14.5px] leading-relaxed text-[var(--site-muted)]">
                  Com mais de 20 anos de atuação em tecnologia, Jimmy construiu sua trajetória em
                  operações, infraestrutura, serviços gerenciados e gestão. Ao longo desse período,
                  acompanhou de perto a evolução do papel da tecnologia nas empresas, e como ela
                  passou a impactar diretamente a eficiência, a segurança e a capacidade de
                  crescimento dos negócios.
                </p>
              </Reveal>
              <Reveal variant="slide-left" delay={260}>
                <p className="font-inter mt-4 text-[14.5px] leading-relaxed text-[var(--site-muted)]">
                  Seu olhar sobre tecnologia sempre foi prático: precisa fazer sentido para a
                  realidade de cada empresa, apoiando decisões, operação e crescimento de forma
                  consistente. É essa visão que orienta a atuação da Allied IT hoje.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 4 — Missão, Visão e Valores */}
      <section className="relative overflow-hidden bg-[#046E8B] py-24 sm:py-32">
        <span aria-hidden="true" className="site-noise" />
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundImage: DOT_TEXTURE, backgroundSize: "24px 24px" }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 md:grid-cols-3 md:gap-14 lg:gap-20">
          {MVV.map((m, i) => (
            <Reveal key={m.title} delay={i * 220}>
              <m.icon className="h-14 w-14 text-[#F3C400]" strokeWidth={1.25} />
              <h2 className="font-chillax mt-7 text-[1.9rem] font-bold leading-tight text-white sm:text-[2.2rem]">
                {m.title}
              </h2>
              <span className="mt-4 block h-[3px] w-12 bg-[#F3C400]/80" />
              <p className="font-inter mt-5 text-[15.5px] leading-relaxed text-white/85">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DOBRA 5 — Segmentos */}
      <SiteSegments />

      {/* DOBRA 6 — Onde atuamos */}
      <section className="relative flex min-h-[100vh] items-center overflow-hidden bg-[#08131A] py-24">
        <span
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{ backgroundImage: DOT_TEXTURE, backgroundSize: "26px 26px" }}
        />
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(4,110,139,0.45) 0%, rgba(4,110,139,0.08) 55%, rgba(0,0,0,0) 72%)",
          }}
        />
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <Reveal>
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--site-yellow)]">
              Onde atuamos
            </span>
            <h2 className="font-chillax mt-5 text-[2.4rem] font-bold leading-[1.02] tracking-tight text-white sm:text-[3.4rem] lg:text-[4rem]">
              Atuação em todo o Brasil
            </h2>
            <p className="font-inter mt-7 max-w-[46ch] text-base leading-relaxed text-white/70 sm:text-[17px]">
              Atendemos empresas de médio e grande porte em todo o território nacional, com a mesma
              qualidade de operação em qualquer estado.
            </p>
          </Reveal>
          <Reveal variant="scale-in" className="flex justify-center lg:justify-end">
            <SiteBrazilMap />
          </Reveal>
        </div>
      </section>

      {/* DOBRA 7 — Endereço */}
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

      {/* DOBRA 8 — CTA + Rodapé */}
      <SiteCta />
      <SiteFooter />
    </>
  );
}
