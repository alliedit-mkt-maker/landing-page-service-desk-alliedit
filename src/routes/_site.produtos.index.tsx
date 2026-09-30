import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Video, Headset, Monitor, Cloud, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/lp/Reveal";
import { SiteCta } from "@/components/site/SiteCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/infra/rack.jpg.asset.json";

export const Route = createFileRoute("/_site/produtos/")({
  head: () =>
    pageHead({
      title: "Headsets, videoconferência e equipamentos de TI | Allied IT",
      description: "Headsets Poly, Yealink e Logitech, videoconferência, Microsoft 365, AWS e firewall com consultoria e suporte.",
      path: "/produtos",
    }),
  component: ProdutosPage,
});

const PRODUCTS = [
  { icon: Video, title: "Videoconferência", text: "Equipamentos de videoconferência para salas de qualquer tamanho.", to: "/videoconferencia" },
  { icon: Headset, title: "Headsets", text: "Headsets profissionais para chamadas e reuniões com qualidade.", to: "/headsets" },
  { icon: Monitor, title: "Microsoft 365", text: "Licenciamento e gestão completa do ambiente Microsoft 365.", to: "/produtos/microsoft-365" },
  { icon: Cloud, title: "AWS", text: "Provisionamento e gestão de ambientes AWS.", to: "/produtos/aws" },
  { icon: ShieldCheck, title: "Firewall", text: "Firewalls e segurança de rede sob medida.", to: "/produtos/firewall" },
] as const;

const eyebrow = "font-inter text-[11px] font-semibold uppercase tracking-[0.22em]";

function ProdutosPage() {
  return (
    <>
      <section className="relative -mt-[72px] flex min-h-[70vh] items-center overflow-hidden bg-[var(--site-ink)] pt-[72px] text-white">
        <img src={hero.url} alt="" aria-hidden fetchPriority="high" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <span className={`${eyebrow} text-[var(--site-yellow)]`}>Allied IT · Produtos</span>
          <h1 className="font-chillax mt-5 text-5xl font-bold tracking-tight sm:text-7xl">Nossos Produtos</h1>
          <p className="font-inter mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
            Equipamentos e licenciamento de ponta para equipar a sua operação.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F7F9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className={`${eyebrow} text-[var(--site-blue)]`}>Portfólio</span>
            <h2 className="font-chillax mt-3 text-[1.8rem] font-bold leading-tight tracking-tight sm:text-[2.4rem]">Soluções para equipar a sua operação</h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {PRODUCTS.map((p) => (
              <Link
                key={p.title}
                to={p.to}
                className="group flex w-full flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-[0_12px_32px_-24px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(4,110,139,0.5)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <span className="grid size-14 place-items-center rounded-full bg-[var(--site-blue)] text-white">
                  <p.icon className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="font-chillax mt-6 text-xl font-semibold">{p.title}</h3>
                <p className="font-inter mt-3 flex-1 text-[15px] leading-relaxed text-[var(--site-muted)]">{p.text}</p>
                <span className="font-inter mt-8 inline-flex h-11 w-fit items-center gap-2 bg-[var(--site-yellow)] px-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1418] transition-colors group-hover:bg-[var(--site-blue)] group-hover:text-white">
                  Ver produto <ArrowRight className="size-3.5" />
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
