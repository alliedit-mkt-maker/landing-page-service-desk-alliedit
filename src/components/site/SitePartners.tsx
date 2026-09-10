import { useEffect, useRef, useState } from "react";
import polyLogo from "@/assets/headsets/poly-hp-logo.png.asset.json";
import logitechLogo from "@/assets/headsets/logitech-logo.png.asset.json";
import yealinkLogo from "@/assets/headsets/yealink-logo.png.asset.json";

type Partner = { name: string; src?: string };

// Marcas sem asset de logo no projeto entram como placeholder tipográfico.
const PARTNERS: Partner[] = [
  { name: "Poly", src: polyLogo.url },
  { name: "Logitech", src: logitechLogo.url },
  { name: "Yealink", src: yealinkLogo.url },
  { name: "Fortinet" },
  { name: "Microsoft" },
  { name: "Cisco" },
  { name: "Dell" },
  { name: "AWS" },
  { name: "Lenovo" },
];

export function SitePartners() {
  const sectionRef = useRef<HTMLElement>(null);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => setRunning(!!entries[0]?.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="site-parceiros"
      className="relative z-10 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2
            id="site-parceiros"
            className="font-chillax max-w-[18ch] text-[1.7rem] font-bold leading-[1.15] tracking-tight text-[var(--site-ink)] sm:text-[2.1rem]"
          >
            Parceiros oficiais das principais marcas de tecnologia
          </h2>
          <p className="font-inter mt-5 max-w-[54ch] text-[15px] leading-relaxed text-[var(--site-muted)]">
            Trabalhamos com quem lidera o mercado, para entregar a solução certa, com garantia de
            fábrica e suporte de quem entende de operação.
          </p>
        </div>

        <div
          className="relative h-[360px] overflow-hidden sm:h-[420px]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          }}
          aria-hidden="true"
        >
          <div
            className="site-marquee-y flex flex-col items-center"
            style={{ animationPlayState: running ? "running" : "paused" }}
          >
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex h-24 w-full items-center justify-center">
                {p.src ? (
                  <img
                    src={p.src}
                    alt=""
                    loading="lazy"
                    style={{ mixBlendMode: "multiply" }}
                    className="h-10 w-auto object-contain opacity-55 grayscale"
                  />
                ) : (
                  <span className="font-chillax text-[22px] font-semibold tracking-tight text-[var(--site-ink)]/35">
                    {p.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
