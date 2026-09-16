// ============================================================================
// DADOS DE EXEMPLO (MOCK) do painel de métricas do Linktree.
// Nada aqui é real: os números são gerados de forma determinística para o
// painel ter aparência final. Quando o registro real de cliques for ativado
// (Lovable Cloud), substituir estas funções por consultas ao banco.
// ============================================================================

import type { BioLink } from "./links-config";

export type Period = 7 | 30 | 60 | 365;

export const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: 7, label: "7 dias" },
  { value: 30, label: "30 dias" },
  { value: 60, label: "60 dias" },
  { value: 365, label: "365 dias" },
];

// gerador pseudoaleatório estável (mesmo resultado a cada render)
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };
}

const LINK_WEIGHTS: Record<BioLink["id"], number> = {
  site: 0.38,
  atendimento: 0.31,
  linkedin: 0.19,
  tiktok: 0.12,
};

const LINK_LABELS: Record<BioLink["id"], string> = {
  site: "Site",
  atendimento: "Atendimento",
  linkedin: "LinkedIn",
  tiktok: "TikTok",
};

/** Média de cliques por dia usada no mock. */
const DAILY_AVG = 84;

export function totalsFor(period: Period) {
  const rand = seeded(period * 977);
  const current = Math.round(DAILY_AVG * period * (0.9 + rand() * 0.2));
  const previous = Math.round(current * (0.78 + rand() * 0.34));
  const change = previous === 0 ? 0 : ((current - previous) / previous) * 100;
  return { current, previous, change };
}

export function clicksByLink(period: Period) {
  const { current } = totalsFor(period);
  const rand = seeded(period * 331);
  return (Object.keys(LINK_WEIGHTS) as BioLink["id"][]).map((id) => ({
    id,
    name: LINK_LABELS[id],
    clicks: Math.round(current * LINK_WEIGHTS[id] * (0.92 + rand() * 0.16)),
  }));
}

/** Curva por hora do dia, com pico em horário comercial. */
export function clicksByHour(period: Period) {
  const { current } = totalsFor(period);
  const rand = seeded(period * 613);
  const shape = [
    0.4, 0.25, 0.15, 0.12, 0.12, 0.2, 0.45, 0.9, 1.5, 2.2, 2.6, 2.4, 2.0, 2.3,
    2.7, 2.5, 2.1, 1.7, 1.4, 1.2, 1.0, 0.85, 0.7, 0.55,
  ];
  const sum = shape.reduce((a, b) => a + b, 0);
  return shape.map((factor, hour) => ({
    hour: `${String(hour).padStart(2, "0")}h`,
    clicks: Math.round((current * factor) / sum * (0.95 + rand() * 0.1)),
  }));
}

export function peakHour(period: Period) {
  return clicksByHour(period).reduce((a, b) => (b.clicks > a.clicks ? b : a));
}

/**
 * ATENÇÃO: métrica demográfica é MOCK.
 * Depende de uma fonte externa (pixel do Meta ou Google Analytics) que ainda
 * não está integrada ao projeto.
 */
export function audienceByGender(period: Period) {
  const rand = seeded(period * 149);
  const female = 46 + Math.round(rand() * 8);
  const male = 100 - female - 4;
  return [
    { name: "Feminino", value: female },
    { name: "Masculino", value: male },
    { name: "Não informado", value: 4 },
  ];
}
