import einstein from "@/assets/clients/einstein.webp";
import semParar from "@/assets/clients/sem-parar.webp";
import cacauShow from "@/assets/clients/cacau-show.webp";
import apsen from "@/assets/clients/apsen.webp";
import espacoLaser from "@/assets/clients/espaco-laser.webp";
import ipanema from "@/assets/clients/ipanema.webp";
import cimed from "@/assets/clients/cimed.webp";
import bradesco from "@/assets/clients/bradesco.webp";

const logos = [
  { src: einstein, name: "Hospital Israelita Albert Einstein" },
  { src: semParar, name: "Sem Parar" },
  { src: cacauShow, name: "Cacau Show" },
  { src: apsen, name: "Apsen" },
  { src: espacoLaser, name: "Espaço Laser" },
  { src: ipanema, name: "Ipanema" },
  { src: cimed, name: "Cimed" },
  { src: bradesco, name: "Bradesco" },
];

export function Clients() {
  const loop = [...logos, ...logos];
  return (
    <section className="py-14 sm:py-20 border-b border-border bg-white" aria-labelledby="clientes-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 id="clientes-heading" className="font-mono text-[10px] uppercase tracking-[0.25em] text-petrol/50 mb-8 sm:mb-12">
          Alguns dos nossos clientes
        </h2>
      </div>
      <div
        className="relative overflow-hidden group bg-white"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              aria-label={`Cliente AlliedIT: ${logo.name}`}
              className="shrink-0 px-10 md:px-14 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                style={{ mixBlendMode: "multiply" }}
                className="h-[58px] md:h-[68px] w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-[1.2] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}