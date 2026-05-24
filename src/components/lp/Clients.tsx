import { useLp } from "./LpProvider";
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
  const { openModal } = useLp();
  const loop = [...logos, ...logos];
  return (
    <section className="py-20 border-b border-border bg-petrol/[0.02]" aria-labelledby="clientes-heading">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="clientes-heading" className="font-mono text-[10px] uppercase tracking-[0.25em] text-petrol/50 mb-12">
          Alguns dos nossos clientes
        </h2>
      </div>
      <div
        className="relative overflow-hidden group"
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
                className="h-12 md:h-14 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => openModal("clients")}
            className="border border-petrol/20 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-petrol hover:text-white transition-colors text-petrol"
          >
            Falar com um especialista
          </button>
        </div>
      </div>
    </section>
  );
}