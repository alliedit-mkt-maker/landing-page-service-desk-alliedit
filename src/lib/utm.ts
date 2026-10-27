/**
 * Fonte única de atribuição de campanha (utm_*, gclid, fbclid) do site inteiro.
 * Regra: se a URL traz algum parâmetro, o conjunto completo desse acesso
 * substitui o anterior por inteiro. Sem parâmetros, mantém o guardado.
 * O conjunto expira 30 dias após a última gravação.
 */
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

export const UTM_STORAGE_KEY = "allied_attribution_v2";
const LEGACY_KEYS = ["alliedit_utms", "allied_utm_v1"] as const;
export const UTM_TTL_MS = 30 * 24 * 60 * 60 * 1000;

type Stored = { v: UtmData; t: number };
type Store = Pick<Storage, "getItem" | "setItem" | "removeItem">;

let memory: Stored | null = null;

function storages(): Store[] {
  const list: Store[] = [];
  if (typeof window === "undefined") return list;
  for (const name of ["localStorage", "sessionStorage"] as const) {
    try {
      const s = window[name];
      const probe = "__allied_probe";
      s.setItem(probe, "1");
      s.removeItem(probe);
      list.push(s);
    } catch { /* indisponível */ }
  }
  return list;
}

function clean(data: unknown): UtmData {
  const out: UtmData = {};
  if (!data || typeof data !== "object") return out;
  for (const k of UTM_KEYS) {
    const v = (data as Record<string, unknown>)[k];
    if (typeof v === "string" && v) out[k] = v.slice(0, 500);
  }
  return out;
}

function write(entry: Stored) {
  memory = entry;
  const s = storages()[0];
  if (s) {
    try { s.setItem(UTM_STORAGE_KEY, JSON.stringify(entry)); } catch { /* noop */ }
  }
}

function clearAll() {
  memory = null;
  for (const s of storages()) {
    try { s.removeItem(UTM_STORAGE_KEY); } catch { /* noop */ }
  }
}

/** Migra uma única vez as chaves antigas e depois as remove. */
function migrateLegacy(now: number) {
  let merged: UtmData = {};
  for (const s of storages()) {
    for (const key of LEGACY_KEYS) {
      try {
        const raw = s.getItem(key);
        if (raw) {
          const v = clean(JSON.parse(raw));
          if (Object.keys(v).length && !Object.keys(merged).length) merged = v;
          s.removeItem(key);
        }
      } catch { /* noop */ }
    }
  }
  if (Object.keys(merged).length) write({ v: merged, t: now });
}

function readStored(now: number): Stored | null {
  let entry: Stored | null = null;
  for (const s of storages()) {
    try {
      const raw = s.getItem(UTM_STORAGE_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        if (p && typeof p.t === "number") { entry = { v: clean(p.v), t: p.t }; break; }
      }
    } catch { /* noop */ }
  }
  if (!entry) entry = memory;
  if (!entry) {
    migrateLegacy(now);
    entry = memory;
  }
  if (!entry) return null;
  if (now - entry.t > UTM_TTL_MS || !Object.keys(entry.v).length) {
    clearAll();
    return null;
  }
  return entry;
}

/** Lê a URL atual; grava se houver parâmetros. Retorna o conjunto válido. */
export function captureUtms(search?: string, now = Date.now()): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const params = new URLSearchParams(search ?? window.location.search);
    const fresh: UtmData = {};
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) fresh[k] = v.slice(0, 500);
    }
    if (Object.keys(fresh).length) {
      // Garante a migração/descarte das chaves antigas antes de substituir.
      readStored(now);
      write({ v: fresh, t: now });
      return fresh;
    }
    return readStored(now)?.v ?? {};
  } catch {
    return {};
  }
}

export function getUtms(now = Date.now()): UtmData {
  if (typeof window === "undefined") return {};
  try {
    return readStored(now)?.v ?? {};
  } catch {
    return {};
  }
}

/** Só para testes. */
export function __resetUtmMemory() {
  memory = null;
}

function setNative(input: HTMLInputElement, value: string) {
  const view = input.ownerDocument.defaultView;
  const setter = view && Object.getOwnPropertyDescriptor(view.HTMLInputElement.prototype, "value")?.set;
  if (setter) setter.call(input, value);
  else input.value = value;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
}

/**
 * Preenche os campos ocultos de atribuição no container e em iframes do mesmo
 * domínio. Só preenche campos vazios, para respeitar o que o HubSpot já leu da URL.
 */
export function fillUtmFields(root: ParentNode | null | undefined, utms: UtmData = getUtms()) {
  if (!root) return;
  const roots: ParentNode[] = [root];
  (root as Element).querySelectorAll?.("iframe").forEach((frame) => {
    try { if (frame.contentDocument) roots.push(frame.contentDocument); } catch { /* cross-origin */ }
  });
  for (const k of UTM_KEYS) {
    const v = utms[k];
    if (!v) continue;
    for (const node of roots) {
      node.querySelectorAll<HTMLInputElement>(`input[name="${k}"]`).forEach((input) => {
        if (!input.value) setNative(input, v);
      });
    }
  }
}

export { UTM_KEYS };
