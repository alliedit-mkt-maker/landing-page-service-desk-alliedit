import { beforeEach, describe, it } from "node:test";
import { strict as assert } from "node:assert";
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
    assert.deepEqual(captureUtms("", T0 + 1000), { utm_source: "teste", utm_campaign: "camp1", gclid: "abc123" });
  });

  it("um conjunto novo substitui o anterior por inteiro", () => {
    captureUtms("?utm_source=teste&utm_medium=cpc&gclid=abc123", T0);
    captureUtms("?utm_source=outro&utm_campaign=camp2", T0 + 1000);
    assert.deepEqual(getUtms(T0 + 2000), { utm_source: "outro", utm_campaign: "camp2" });
  });

  it("descarta o conjunto depois de 30 dias", () => {
    captureUtms("?utm_source=teste", T0);
    assert.deepEqual(getUtms(T0 + UTM_TTL_MS - 1), { utm_source: "teste" });
    assert.deepEqual(getUtms(T0 + UTM_TTL_MS + 1), {});
    assert.equal(ls.getItem(UTM_STORAGE_KEY), null);
  });

  it("migra as chaves antigas e deixa de usá-las", () => {
    ls.setItem("alliedit_utms", JSON.stringify({ utm_source: "antigo" }));
    assert.deepEqual(getUtms(T0), { utm_source: "antigo" });
    assert.equal(ls.getItem("alliedit_utms"), null);
  });

  it("ignora parâmetros que não são de campanha", () => {
    assert.deepEqual(captureUtms("?email=a@b.com&nome=x", T0), {});
  });
});
