// Client-only tracking helpers: GTM dataLayer + UTM capture.

// Atribuição unificada com o restante do site (src/lib/utm.ts).
export { UTM_KEYS, captureUtms, getUtms as readUtms, fillUtmFields } from "@/lib/utm";
export type { UtmKey, UtmData as UtmRecord } from "@/lib/utm";

export function pushDataLayer(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
