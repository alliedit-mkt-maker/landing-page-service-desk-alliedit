import { test } from "node:test";
import { strict as assert } from "node:assert";
import { CYBER_METHOD } from "./cyber-shield-content";

test("Cyber Shield methodology adds no contractual times or new deliverables", () => {
  assert.deepEqual(CYBER_METHOD.map(item => item.title), ["Diagnóstico", "Implantação", "Operação", "Melhoria contínua"]);
  for (const item of CYBER_METHOD) {
    assert.equal(/\d|\[PREENCHER\]|SLA|dias|horas/i.test(item.text), false);
    assert.equal("outputs" in item, false);
  }
});