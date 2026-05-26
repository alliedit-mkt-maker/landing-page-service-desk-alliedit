const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmData = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "alliedit_utms";

export function captureUtms(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const stored: UtmData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    let changed = false;
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v && stored[k] !== v) {
        stored[k] = v;
        changed = true;
      }
    });
    if (changed) localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    return stored;
  } catch {
    return {};
  }
}

export function getUtms(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export { UTM_KEYS };