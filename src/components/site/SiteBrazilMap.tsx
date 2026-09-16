const BRAZIL =
  "M196,18 L250,60 L285,95 L330,120 L355,150 L400,175 L430,215 L415,265 L390,300 L370,330 L340,355 L305,375 L275,405 L250,440 L215,470 L185,450 L170,415 L150,380 L140,340 L120,310 L95,270 L70,235 L55,205 L85,175 L110,150 L150,130 Z";

// Origem em São Paulo -> destinos aproximados nos demais estados.
const SP = { x: 288, y: 368 };
const TARGETS = [
  { x: 200, y: 60 },
  { x: 300, y: 110 },
  { x: 380, y: 175 },
  { x: 415, y: 240 },
  { x: 360, y: 320 },
  { x: 245, y: 435 },
  { x: 150, y: 350 },
  { x: 95, y: 255 },
  { x: 200, y: 230 },
];

export function SiteBrazilMap() {
  return (
    <svg
      viewBox="0 0 500 520"
      role="img"
      aria-label="Mapa do Brasil com atuação a partir de São Paulo"
      className="h-auto w-full max-w-[460px]"
    >
      <defs>
        <pattern id="site-dots" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="rgba(255,255,255,0.55)" />
        </pattern>
        <clipPath id="site-br-clip">
          <path d={BRAZIL} />
        </clipPath>
      </defs>

      <g clipPath="url(#site-br-clip)">
        <rect width="500" height="520" fill="url(#site-dots)" />
      </g>
      <path d={BRAZIL} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {TARGETS.map((t, i) => (
        <g key={`${t.x}-${t.y}`}>
          <path
            d={`M${SP.x},${SP.y} Q${(SP.x + t.x) / 2 + 18},${(SP.y + t.y) / 2 - 26} ${t.x},${t.y}`}
            fill="none"
            stroke="#D4A017"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="180"
            className="site-map-line"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
          <circle cx={t.x} cy={t.y} r="2.6" fill="#D4A017" opacity="0.9" />
        </g>
      ))}

      <circle cx={SP.x} cy={SP.y} r="10" fill="#D4A017" opacity="0.18" className="site-map-pulse" />
      <circle cx={SP.x} cy={SP.y} r="4" fill="#D4A017" />
      <text
        x={SP.x + 14}
        y={SP.y + 4}
        fill="#ffffff"
        fontSize="11"
        letterSpacing="2"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        SÃO PAULO
      </text>
    </svg>
  );
}
