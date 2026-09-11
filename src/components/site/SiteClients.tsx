import einstein from "@/assets/clients/einstein.webp";
import semParar from "@/assets/clients/sem-parar.webp";
import cacauShow from "@/assets/clients/cacau-show.webp.asset.json";
import apsen from "@/assets/clients/apsen.webp";
import espacoLaser from "@/assets/clients/espaco-laser.webp";
import ipanema from "@/assets/clients/ipanema.webp";
import bradesco from "@/assets/clients/bradesco.webp.asset.json";

const LOGOS: { src: string; name: string }[] = [
  { src: apsen, name: "Apsen Farmacêutica" },
  { src: espacoLaser, name: "espaçoLaser" },
  { src: ipanema, name: "Ipanema" },
  { src: bradesco.url, name: "Bradesco" },
  { src: einstein, name: "Hospital Israelita Albert Einstein" },
  { src: semParar, name: "Sem Parar" },
  { src: cacauShow.url, name: "Cacau Show" },
];

export function SiteClients() {
  return (
    <section
      aria-labelledby="site-clientes"
      className="relative z-10 rounded-t-[24px] bg-white py-20 sm:py-28"
    >
      <h2
        id="site-clientes"
        className="font-inter mb-14 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--site-muted)]"
      >
        Alguns dos nossos clientes
      </h2>


      <div
        className="group relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex shrink-0 items-center px-12 md:px-16">
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                style={{ mixBlendMode: "multiply" }}
                className="h-[92px] w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-[108px]"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
