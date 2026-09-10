import { useEffect, useRef } from "react";
import symbolSrc from "@/assets/site/brand-symbol.png";

const TEAL = "120,205,225";
const YELLOW = "240,215,120";


type IconParticle = {
  hx: number; // home position, normalized 0..1 inside icon box
  hy: number;
  ox: number; // current offset in px
  oy: number;
  vx: number;
  vy: number;
  r: number;
  c: string;
  phase: number;
  speed: number;
  drift: number; // 0 = anchored, >0 = detaching
  life: number;
};

type Ambient = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  c: string;
  phase: number;
  speed: number;
  base: number;
};

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let iconParticles: IconParticle[] = [];
    let ambient: Ambient[] = [];
    let sampled: { hx: number; hy: number; c: string }[] = [];
    let iconBox = { x: 0, y: 0, size: 0 };

    const parent = canvas.parentElement as HTMLElement;

    const buildAmbient = () => {
      const density = width < 700 ? 22 : width < 1100 ? 34 : 46;
      ambient = Array.from({ length: density }, () => {
        // lower density on the left (text area), higher near the icon
        const biased = Math.random() ** 0.75;
        const x = (0.05 + biased * 0.95) * width;
        return {
          x,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.09,
          vy: (Math.random() - 0.5) * 0.09,
          r: 0.6 + Math.random() * 1.5,
          c: Math.random() < 0.12 ? YELLOW : Math.random() < 0.55 ? TEAL : "255,255,255",
          phase: Math.random() * Math.PI * 2,
          speed: 0.0004 + Math.random() * 0.0009,
          base: 0.12 + Math.random() * 0.3,
        };
      });
    };

    const layoutIcon = () => {
      const mobile = width < 900;
      // ícone grande e solto: pode sangrar para fora da borda direita
      const size = mobile ? Math.min(width * 1.1, 560) : Math.min(height * 1.55, width * 0.66, 900);
      iconBox = {
        size,
        x: mobile ? width * 0.62 - size / 2 : width * 0.86 - size / 2,
        y: mobile ? height * 0.66 - size / 2 : height * 0.52 - size / 2,
      };
    };


    const buildIcon = () => {
      const keep = width < 700 ? 3 : 2;
      iconParticles = sampled
        .filter((_, i) => i % keep === 0)
        .map((s) => ({
          hx: s.hx,
          hy: s.hy,
          ox: 0,
          oy: 0,
          vx: 0,
          vy: 0,
          r: 0.6 + Math.random() * 1.05,
          c: s.c,
          phase: Math.random() * Math.PI * 2,
          speed: 0.0006 + Math.random() * 0.0016,
          drift: 0,
          life: 1,
        }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      layoutIcon();
      buildAmbient();
      if (sampled.length) buildIcon();
    };

    const sampleImage = (img: HTMLImageElement) => {
      const S = 200;
      const off = document.createElement("canvas");
      off.width = S;
      off.height = S;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;
      octx.drawImage(img, 0, 0, S, S);
      const data = octx.getImageData(0, 0, S, S).data;
      const out: { hx: number; hy: number; c: string }[] = [];
      const gap = 3;
      for (let y = 0; y < S; y += gap) {
        for (let x = 0; x < S; x += gap) {
          const i = (y * S + x) * 4;
          const a = data[i + 3];
          if (a < 120) continue;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const yellowish = r > 150 && g > 120 && b < 120;
          out.push({
            hx: (x + (Math.random() - 0.5) * gap) / S,
            hy: (y + (Math.random() - 0.5) * gap) / S,
            c: yellowish ? YELLOW : TEAL,
          });
        }
      }
      sampled = out;
      buildIcon();
    };

    let t = 0;
    let last = 0;
    const frame = (now: number) => {
      // limita a ~40fps: menos trabalho por segundo, mesma sensação de fluidez
      if (now - last < 25) {
        raf = requestAnimationFrame(frame);
        return;
      }
      last = now;
      t += 25;
      ctx.clearRect(0, 0, width, height);

      // partículas ambientes agrupadas por cor/opacidade (poucos draw calls)
      const ambientBuckets = new Map<string, Path2D>();
      for (const p of ambient) {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }
        const alpha = p.base * (0.55 + 0.45 * Math.sin(p.phase + t * p.speed));
        const step = Math.round(alpha * 5) / 5;
        if (step <= 0) continue;
        const key = `${p.c}|${step}`;
        let path = ambientBuckets.get(key);
        if (!path) {
          path = new Path2D();
          ambientBuckets.set(key, path);
        }
        const d = p.r * 2;
        path.rect(p.x, p.y, d, d);
      }
      for (const [key, path] of ambientBuckets) {
        const [c, a] = key.split("|");
        ctx.fillStyle = `rgba(${c},${a})`;
        ctx.fill(path);
      }

      const { x: bx, y: by, size } = iconBox;
      // agrupa por cor + faixa de opacidade: poucos fillStyle e poucos paths por quadro
      const buckets = new Map<string, Path2D>();
      for (const p of iconParticles) {
        if (!reduced) {
          if (p.drift > 0) {
            p.ox += p.vx;
            p.oy += p.vy;
            p.life -= 0.009;
            if (p.life <= 0) {
              p.drift = 0;
              p.ox = 0;
              p.oy = 0;
              p.vx = 0;
              p.vy = 0;
              p.life = 0;
            }
          } else {
            p.life = Math.min(1, p.life + 0.03);
            p.ox = Math.sin(p.phase + t * p.speed) * 1.8;
            p.oy = Math.cos(p.phase * 1.3 + t * p.speed) * 1.8;
            if (Math.random() < 0.0006) {
              p.drift = 1;
              const a = Math.random() * Math.PI * 2;
              p.vx = Math.cos(a) * 0.25;
              p.vy = Math.sin(a) * 0.25 - 0.12;
            }
          }
        }
        const x = bx + p.hx * size + p.ox;
        const y = by + p.hy * size + p.oy;
        if (x < -20 || x > width + 20 || y < -20 || y > height + 20) continue;
        const alpha = Math.min(0.85, (0.45 + 0.3 * Math.sin(p.phase + t * 0.0009)) * p.life);
        const step = Math.round(alpha * 5) / 5;
        if (step <= 0) continue;
        const key = `${p.c}|${step}`;
        let path = buckets.get(key);
        if (!path) {
          path = new Path2D();
          buckets.set(key, path);
        }
        const d = p.r * 2;
        path.rect(x, y, d, d);
      }
      for (const [key, path] of buckets) {
        const [c, a] = key.split("|");
        ctx.fillStyle = `rgba(${c},${a})`;
        ctx.fill(path);
      }


      if (!reduced) raf = requestAnimationFrame(frame);
    };

    resize();
    const img = new Image();
    img.src = symbolSrc;
    img.onload = () => sampleImage(img);

    raf = requestAnimationFrame(frame);
    const ro = new ResizeObserver(() => resize());
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
}
