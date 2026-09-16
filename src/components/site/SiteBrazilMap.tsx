// Contorno simplificado do Brasil (decorativo, estilo halftone).
const BRAZIL = [
  [150, 72],
  [178, 52],
  [205, 30],
  [232, 58],
  [252, 80],
  [272, 66],
  [292, 92],
  [320, 104],
  [342, 120],
  [372, 132],
  [404, 150],
  [424, 176],
  [432, 206],
  [424, 238],
  [410, 268],
  [396, 296],
  [378, 318],
  [356, 340],
  [334, 356],
  [306, 372],
  [286, 392],
  [266, 414],
  [250, 436],
  [238, 462],
  [216, 486],
  [190, 470],
  [176, 444],
  [168, 418],
  [152, 398],
  [144, 372],
  [132, 352],
  [126, 326],
  [112, 306],
  [96, 286],
  [84, 262],
  [70, 244],
  [56, 226],
  [64, 206],
  [84, 192],
  [100, 172],
  [112, 148],
  [126, 120],
  [136, 96],
]
  .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`)
  .join(" ")
  .concat(" Z");

// Origem em São Paulo -> destinos aproximados nos demais estados.
const SP = { x: 288, y: 380 };
const TARGETS = [
  { x: 210, y: 70 },
  { x: 300, y: 112 },
  { x: 380, y: 152 },
  { x: 412, y: 214 },
  { x: 370, y: 300 },
  { x: 240, y: 452 },
  { x: 168, y: 400 },
  { x: 100, y: 276 },
  { x: 200, y: 244 },
];

export function SiteBrazilMap() {
  return (
    <svg
      viewBox="0 0 500 540"
      role="img"
      aria-label="Mapa do Brasil com atuação a partir de São Paulo"
      className="h-auto w-full max-w-[460px]"
    >
      <defs>
        <pattern id="site-dots" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.5)" />
        </pattern>
        <clipPath id="site-br-clip">
          <path d={BRAZIL} />
        </clipPath>
      </defs>

      <g clipPath="url(#site-br-clip)">
        <rect width="500" height="540" fill="url(#site-dots)" />
      </g>

      {TARGETS.map((t, i) => (
        <g key={`${t.x}-${t.y}`}>
          <path
            d={`M${SP.x},${SP.y} Q${(SP.x + t.x) / 2 + 16},${(SP.y + t.y) / 2 - 24} ${t.x},${t.y}`}
            fill="none"
            stroke="#D4A017"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="200"
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
