import { test } from "node:test";
import { strict as assert } from "node:assert";
import { ORG_SCHEMA, organizationSchemaForPath } from "./org-schema";

test("Cyber Shield company schema excludes NOC without losing SOC", () => {
  const schema = JSON.stringify(organizationSchemaForPath("/servicos/cyber-shield-360"));
  assert.equal(schema.includes('"NOC"'), false);
  assert.equal(schema.includes('"SOC"'), true);
});
test("other pages retain the original company schema", () => {
  assert.equal(organizationSchemaForPath("/servicos/digital-workspace"), ORG_SCHEMA);
  assert.equal(JSON.stringify(ORG_SCHEMA).includes('"NOC"'), true);
});