// ============================================================================
// Métricas REAIS da página de links, calculadas a partir da tabela
// public.bio_link_clicks (Lovable Cloud).
// ============================================================================

import { supabase } from "@/integrations/supabase/client";
import type { BioLink } from "./links-config";

export type Period = 7 | 30 | 60 | 365;

export const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: 7, label: "7 dias" },
  { value: 30, label: "30 dias" },
  { value: 60, label: "60 dias" },
  { value: 365, label: "365 dias" },
];

const LINK_LABELS: Record<BioLink["id"], string> = {
  site: "Site",
  atendimento: "Atendimento",
  linkedin: "LinkedIn",
  tiktok: "TikTok",
};

const LINK_ORDER: BioLink["id"][] = ["site", "atendimento", "linkedin", "tiktok"];

export type MetricsData = {
  totals: { current: number; previous: number; change: number };
  byLink: { id: string; name: string; clicks: number }[];
  byHour: { hour: string; clicks: number }[];
  peak: { hour: string; clicks: number };
};

type Row = { link_id: string; clicked_at: string };

function emptyHours() {
  return Array.from({ length: 24 }, (_, hour) => ({
    hour: `${String(hour).padStart(2, "0")}h`,
    clicks: 0,
  }));
}

export function emptyMetrics(): MetricsData {
  const byHour = emptyHours();
  return {
    totals: { current: 0, previous: 0, change: 0 },
    byLink: LINK_ORDER.map((id) => ({ id, name: LINK_LABELS[id], clicks: 0 })),
    byHour,
    peak: byHour[0],
  };
}

/** Busca os cliques do período atual e do anterior e calcula as métricas. */
export async function fetchMetrics(period: Period): Promise<MetricsData> {
  const now = Date.now();
  const dayMs = 86_400_000;
  const startCurrent = new Date(now - period * dayMs);
  const startPrevious = new Date(now - 2 * period * dayMs);

  const { data, error } = await supabase
    .from("bio_link_clicks")
    .select("link_id, clicked_at")
    .gte("clicked_at", startPrevious.toISOString())
    .order("clicked_at", { ascending: false })
    .limit(50_000);

  if (error) throw error;

  const rows = (data ?? []) as Row[];
  const current: Row[] = [];
  let previous = 0;

  for (const row of rows) {
    const ts = new Date(row.clicked_at).getTime();
    if (ts >= startCurrent.getTime()) current.push(row);
    else previous += 1;
  }

  const change =
    previous === 0 ? (current.length > 0 ? 100 : 0) : ((current.length - previous) / previous) * 100;

  const perLink = new Map<string, number>();
  const byHour = emptyHours();

  for (const row of current) {
    perLink.set(row.link_id, (perLink.get(row.link_id) ?? 0) + 1);
    const hour = new Date(row.clicked_at).getHours();
    byHour[hour].clicks += 1;
  }

  const byLink = LINK_ORDER.map((id) => ({
    id,
    name: LINK_LABELS[id],
    clicks: perLink.get(id) ?? 0,
  }));

  const peak = byHour.reduce((a, b) => (b.clicks > a.clicks ? b : a));

  return {
    totals: { current: current.length, previous, change },
    byLink,
    byHour,
    peak,
  };
}
