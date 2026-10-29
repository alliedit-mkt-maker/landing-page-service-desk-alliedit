import { test } from "node:test";
import { strict as assert } from "node:assert";
import { CYBER_METRICS, CYBER_LAYERS } from "./cyber-shield-content";

test("unconfirmed Cyber Shield metrics must not invent numbers", () => {
  assert.equal(CYBER_METRICS.length, 4);
  for (const metric of CYBER_METRICS) assert.equal(metric.value, "[PREENCHER]");
});
test("each security layer keeps an explicit portfolio confirmation pending", () => {
  assert.equal(CYBER_LAYERS.length, 7);
  for (const layer of CYBER_LAYERS) assert.equal(layer.confirmation, "[PREENCHER]");
});