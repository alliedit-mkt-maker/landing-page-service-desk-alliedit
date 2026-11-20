import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { buildLeadPayload, getLeadForm, LEAD_FORMS } from "./lead-forms";
import { GENERAL_CONTACT_FORM } from "./general-contact-form";
import { PRODUCT_FORMS } from "./product-forms";

const visibleQuestions = (id: string) => getLeadForm(id).questions.map((question) => ({ label: question.label, required: question.required, options: question.options }));

describe("current lead form questions", () => {
  test("landing modal keeps its notebook question", () => {
    assert.deepEqual(visibleQuestions("087109f4-f093-404c-aec9-b4a3f6d763a4"), [{ label: "QUANTOS NOTEBOOKS SUA EMPRESA POSSUI?", required: true, options: ["1 à 20", "21 à 49", "50+"] }]);
  });

  test("general contact keeps both questions in their current order", () => {
    const questions = getLeadForm(GENERAL_CONTACT_FORM.formId).questions;
    assert.deepEqual(questions.map((question) => question.label), ["SOBRE QUAL ASSUNTO VOCÊ QUER FALAR COM A GENTE?", "QUANTOS FUNCIONÁRIOS TEM A SUA EMPRESA?"]);
    assert.equal(questions[0]?.options.length, 8);
    assert.deepEqual(questions[1]?.options, ["Até 20", "21 a 100", "101 a 500", "Mais de 500"]);
    assert.equal(getLeadForm(GENERAL_CONTACT_FORM.formId).product, "Contato geral");
  });

  test("Cyber Shield keeps both security questions", () => {
    const questions = getLeadForm("3b4b53a7-de50-4fdf-8aa4-06c859a28c87").questions;
    assert.deepEqual(questions.map((question) => question.label), ["QUAL SOLUÇÃO DE SEGURANÇA VOCÊ PROCURA?", "QUANTOS COLABORADORES SUA EMPRESA POSSUI?"]);
    assert.equal(questions[0]?.options.length, 6);
    assert.deepEqual(questions[1]?.options, ["1 à 50", "51 à 200", "201 à 500", "500+"]);
  });

  test("all five product forms retain their questions and product names", () => {
    assert.deepEqual(Object.values(PRODUCT_FORMS).map((form) => getLeadForm(form.formId).product), ["Videoconferência", "Headsets", "Microsoft 365", "AWS", "Firewall"]);
    assert.deepEqual(Object.values(PRODUCT_FORMS).map((form) => getLeadForm(form.formId).questions.length), [3, 2, 2, 3, 2]);
    assert.equal(getLeadForm(PRODUCT_FORMS.aws.formId).questions[2]?.label, "O QUE VOCÊ PRETENDE COLOCAR NA NUVEM?");
    assert.equal(getLeadForm(PRODUCT_FORMS.firewall.formId).questions[1]?.label, "QUANTAS PESSOAS USAM A REDE DA EMPRESA?");
  });

  test("optional camera questions remain optional", () => {
    for (const id of ["aaf63ed6-edf2-45ed-8434-54c3d6d4df0d", "854dbac0-c313-4ef4-8f50-8935b4e76bb8", "8f281409-2949-45fc-a83f-b7d643b42f54"]) {
      assert.equal(getLeadForm(id).questions[0]?.required, false);
      assert.equal(getLeadForm(id).questions[1]?.required, true);
    }
  });

  test("every current form id has an owned definition", () => {
    assert.equal(Object.keys(LEAD_FORMS).length, 24);
  });
});

describe("n8n lead payload", () => {
  test("uses exactly the requested keys, digits-only WhatsApp and all attribution keys", () => {
    const payload = buildLeadPayload({
      submissionId: "submission-1",
      nome: "Maria",
      empresa: "Empresa Teste",
      email: "maria@example.com",
      whatsapp: "+55 (11) 98765-4321",
      produto: "Contato geral",
      formulario: "contact_page",
      pagina: "https://alliedit.com.br/contato?utm_source=google",
      utms: { utm_source: "google", utm_campaign: "campanha", gclid: "g-1" },
      respostas: { "QUANTOS FUNCIONÁRIOS TEM A SUA EMPRESA?": "21 a 100" },
    });
    assert.deepEqual(Object.keys(payload), ["submission_id", "nome", "empresa", "email", "whatsapp", "produto", "formulario", "pagina", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid", "respostas", "website"]);
    assert.equal(payload.whatsapp, "11987654321");
    assert.equal(payload.utm_source, "google");
    assert.equal(payload.utm_campaign, "campanha");
    assert.equal(payload.gclid, "g-1");
    assert.equal(payload.utm_medium, "");
    assert.equal(payload.utm_content, "");
    assert.equal(payload.utm_term, "");
    assert.equal(payload.fbclid, "");
    assert.equal(payload.website, "");
    assert.deepEqual(payload.respostas, { "QUANTOS FUNCIONÁRIOS TEM A SUA EMPRESA?": "21 a 100" });
  });
});
