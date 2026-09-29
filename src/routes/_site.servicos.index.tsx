import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Laptop, Cloud, ShieldCheck, Server, Cpu, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/dw/noc.jpg.asset.json";

export const Route = createFileRoute("/_site/servicos/")({
  head: () =>
    pageHead({
      title: "Serviços gerenciados de TI para empresas | Allied IT",
      description:
        "Digital Workspace, Smart Cloud Ops, Cyber Shield 360°, Infra Core, Product Engineering e Inteligência Artificial: soluções completas de TI.",
      path: "/servicos",
    }),
  component: ServicosPage,
});

const SERVICES = [
  { icon: Laptop, title: "Digital Workspace", text: "Produtividade e suporte para o dia a dia do seu time, do Service Desk ao Field Service.", to: "/servicos/digital-workspace" },
  { icon: Cloud, title: "Smart Cloud Ops", text: "Nuvem operada com inteligência: performance, segurança e custo sob controle.", to: "/servicos/smart-cloud-ops" },
  { icon: ShieldCheck, title: "Cyber Shield 360°", text: "Segurança cibernética em todas as camadas, com operação 24x7x365.", to: "/servicos/cyber-shield-360" },
  { icon: Server, title: "Infra Core", text: "Infraestrutura de TI que sustenta a operação: redes, cabeamento estruturado e data center.", to: "/servicos/infra-core" },
  { icon: Cpu, title: "Product Engineering", text: "Desenvolvimento sob medida para transformar gargalos em soluções digitais.", to: "/servicos/product-engineering" },
  { icon: Sparkles, title: "Inteligência Artificial", text: "Soluções de IA que aumentam produtividade e geram resultado real no negócio.", to: "/servicos/inteligencia-artificial" },
] as const;

const eyebrow = "font-inter text-[11px] font-semibold uppercase tracking-[0.22em]";

function ServicosPage() {
  return (
    <>
      <section className="relative -mt-[72px] flex min-h-[70vh] items-center overflow-hidden bg-[var(--site-ink)] pt-[72px] text-white">
        <img src={hero.url} alt="" aria-hidden fetchPriority="high" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <span className={`${eyebrow} text-[var(--site-yellow)]`}>Allied IT · Serviços</span>
          <h1 className="font-chillax mt-5 text-5xl font-bold tracking-tight sm:text-7xl">Nossos Serviços</h1>
          <p className="font-inter mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
            Soluções completas de TI para sustentar, proteger e escalar a operação da sua empresa.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F7F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={`${eyebrow} text-[var(--site-blue)]`}>Famílias de serviço</span>
            <h2 className="font-chillax mt-3 text-[1.8rem] font-bold leading-tight tracking-tight sm:text-[2.4rem]">Escolha por onde começar</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group flex flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-[0_12px_32px_-24px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(4,110,139,0.5)]"
              >
                <span className="grid size-14 place-items-center rounded-full bg-[var(--site-blue)] text-white">
                  <s.icon className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="font-chillax mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="font-inter mt-3 flex-1 text-[15px] leading-relaxed text-[var(--site-muted)]">{s.text}</p>
                <span className="font-inter mt-8 inline-flex h-11 w-fit items-center gap-2 bg-[var(--site-yellow)] px-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1418] transition-colors group-hover:bg-[var(--site-blue)] group-hover:text-white">
                  Saiba mais <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteCta />
      <SiteFooter />
    </>
  );
}
