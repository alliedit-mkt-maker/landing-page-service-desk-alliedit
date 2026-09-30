// Client-only tracking helpers: GTM dataLayer + UTM capture.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    hbspt?: {
      forms: {
        create: (opts: Record<string, unknown>) => void;
      };
    };
  }
}

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmRecord = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "allied_utm_v1";

export function captureUtms(): UtmRecord {
  if (typeof window === "undefined") return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const fresh: UtmRecord = {};
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) fresh[k] = v;
    }
    const stored = readUtms();
    const merged = { ...stored, ...fresh };
    if (Object.keys(merged).length) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    }
    return merged;
  } catch {
    return {};
  }
}

export function readUtms(): UtmRecord {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmRecord) : {};
  } catch {
    return {};
  }
}

export function pushDataLayer(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
