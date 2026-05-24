import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
};

/**
 * Soft glow blob that follows the mouse within its parent (which must be `relative`).
 * Falls back to the section center when the mouse is not over it.
 */
export function MouseGlow({
  className = "",
  size = 420,
  color = "var(--gold)",
  opacity = 0.18,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    target.current = { x: rect.width / 2, y: rect.height / 2 };
    current.current = { ...target.current };

    const onMove = (e: MouseEvent) => {
      const r = parent.getBoundingClientRect();
      target.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => {
      const r = parent.getBoundingClientRect();
      target.current = { x: r.width / 2, y: r.height / 2 };
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      el.style.transform = `translate3d(${current.current.x - size / 2}px, ${current.current.y - size / 2}px, 0)`;
      raf.current = requestAnimationFrame(tick);
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(tick);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [size]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute top-0 left-0 rounded-full blur-3xl will-change-transform ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        opacity,
      }}
    />
  );
}