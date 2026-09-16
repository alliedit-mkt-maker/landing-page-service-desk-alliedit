import { createFileRoute } from "@tanstack/react-router";
import { Globe, Linkedin, MessageCircle, Music2 } from "lucide-react";
import { BIO_LINKS, BIO_PROFILE, recordClick, type BioLink } from "@/lib/links-config";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Allied IT | Links oficiais" },
      {
        name: "description",
        content:
          "Todos os canais oficiais da Allied IT em um só lugar: site, atendimento no WhatsApp, LinkedIn e TikTok.",
      },
      { property: "og:title", content: "Allied IT | Links oficiais" },
      {
        property: "og:description",
        content: "Site, atendimento, LinkedIn e TikTok da Allied IT em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://links.alliedit.com.br/" }],
  }),
  component: LinksPage,
});

const ICONS: Record<BioLink["icon"], typeof Globe> = {
  globe: Globe,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  tiktok: Music2,
};

function LinksPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08171D] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(4,110,139,0.45) 0%, rgba(4,110,139,0.12) 45%, rgba(8,23,29,0) 75%)",
        }}
      />
      <main className="relative mx-auto flex w-full max-w-[440px] flex-col items-center px-6 pb-16 pt-14 sm:pt-20">
        <img
          src="/logo-allied-symbol.png"
          alt="Allied IT"
          className="size-20 rounded-full bg-white/95 p-3 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.8)]"
        />
        <h1 className="mt-5 text-[26px] font-bold tracking-tight">{BIO_PROFILE.name}</h1>
        <p className="mt-2 text-center text-sm text-white/65">{BIO_PROFILE.bio}</p>

        <nav className="mt-9 flex w-full flex-col gap-3.5">
          {BIO_LINKS.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => recordClick(link.id)}
                className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-[15px] font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--site-yellow)] hover:bg-white/[0.11]"
              >
                <Icon className="size-5 shrink-0 text-[var(--site-yellow)]" strokeWidth={1.7} />
                <span>{link.label}</span>
                <span className="ml-auto text-white/35 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            );
          })}
        </nav>

        <p className="mt-12 text-[11px] uppercase tracking-[0.18em] text-white/30">
          Allied IT · Tecnologia corporativa
        </p>
      </main>
    </div>
  );
}
