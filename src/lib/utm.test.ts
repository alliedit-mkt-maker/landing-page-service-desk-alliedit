import { beforeEach, describe, expect, it } from "vitest";
import { captureUtms, getUtms, UTM_STORAGE_KEY, UTM_TTL_MS, __resetUtmMemory } from "./utm";

function fakeStorage() {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => (m.has(k) ? m.get(k)! : null),
    setItem: (k: string, v: string) => void m.set(k, v),
    removeItem: (k: string) => void m.delete(k),
    _m: m,
  };
}

let ls: ReturnType<typeof fakeStorage>;
beforeEach(() => {
  ls = fakeStorage();
  (globalThis as any).window = { localStorage: ls, sessionStorage: fakeStorage(), location: { search: "" } };
  __resetUtmMemory();
});

const T0 = 1_800_000_000_000;

describe("atribuição de campanha", () => {
  it("guarda o conjunto e mantém após navegar sem parâmetros", () => {
    captureUtms("?utm_source=teste&utm_campaign=camp1&gclid=abc123", T0);
    expect(captureUtms("", T0 + 1000)).toEqual({ utm_source: "teste", utm_campaign: "camp1", gclid: "abc123" });
  });

  it("um conjunto novo substitui o anterior por inteiro", () => {
    captureUtms("?utm_source=teste&utm_medium=cpc&gclid=abc123", T0);
    captureUtms("?utm_source=outro&utm_campaign=camp2", T0 + 1000);
    expect(getUtms(T0 + 2000)).toEqual({ utm_source: "outro", utm_campaign: "camp2" });
  });

  it("descarta o conjunto depois de 30 dias", () => {
    captureUtms("?utm_source=teste", T0);
    expect(getUtms(T0 + UTM_TTL_MS - 1)).toEqual({ utm_source: "teste" });
    expect(getUtms(T0 + UTM_TTL_MS + 1)).toEqual({});
    expect(ls.getItem(UTM_STORAGE_KEY)).toBeNull();
  });

  it("migra as chaves antigas e deixa de usá-las", () => {
    ls.setItem("alliedit_utms", JSON.stringify({ utm_source: "antigo" }));
    expect(getUtms(T0)).toEqual({ utm_source: "antigo" });
    expect(ls.getItem("alliedit_utms")).toBeNull();
  });

  it("ignora parâmetros que não são de campanha", () => {
    expect(captureUtms("?email=a@b.com&nome=x", T0)).toEqual({});
  });
});
