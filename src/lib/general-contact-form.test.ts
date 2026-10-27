import { test } from "node:test";
import { strict as assert } from "node:assert";
import { GENERAL_CONTACT_FORM } from "./general-contact-form";
import { thankYouWhatsappMessage } from "./thank-you-whatsapp";

test("general contact uses the assigned HubSpot form", () => {
  assert.equal(GENERAL_CONTACT_FORM.formId, "5008ff97-cd3c-45b0-905c-1829926eff1e");
});
test("general contact sends the confirmed free-text product value", () => {
  assert.equal(GENERAL_CONTACT_FORM.product, "Contato geral");
});
test("general pages opt in to attribution capture without changing shared defaults", () => {
  assert.equal(GENERAL_CONTACT_FORM.captureAttribution, true);
});
for (const path of ["/", "/sobre"]) {
  test(`${path} uses the general thank-you WhatsApp message`, () => {
    assert.equal(thankYouWhatsappMessage(`https://alliedit.com.br${path}`), "Olá! Acabei de enviar o formulário no site da Allied IT e gostaria de falar com um especialista.");
  });
}