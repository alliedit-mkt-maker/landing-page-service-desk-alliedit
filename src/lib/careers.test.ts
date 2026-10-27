import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { careerSubject, careersPopupEnabled, validateCareer, validateFile } from "./careers";

const ok = { nome: "Ana Souza", email: "ana@ex.com", whatsapp: "(11) 98765-4321", area: "Cloud", sobre: "", aceite: true };

describe("candidatura", () => {
  test("interruptor do rodapé começa desligado", () => assert.equal(careersPopupEnabled, false));
  test("aceita dados válidos", () => assert.deepEqual(validateCareer(ok), {}));
  test("limita sobre a 1000 caracteres", () => assert.ok(validateCareer({ ...ok, sobre: "a".repeat(1001) }).sobre));
  test("exige aceite", () => assert.ok(validateCareer({ ...ok, aceite: false }).aceite));
  test("recusa arquivo acima de 5 MB", () => assert.ok(validateFile({ name: "cv.pdf", size: 5 * 1024 * 1024 + 1 })));
  test("recusa extensão fora de PDF/DOC/DOCX", () => assert.ok(validateFile({ name: "cv.png", size: 10 })));
  test("aceita DOCX de 5 MB", () => assert.equal(validateFile({ name: "cv.docx", size: 5 * 1024 * 1024 }), undefined));
  test("assunto do e-mail", () => assert.equal(careerSubject("Cloud", " Ana "), "Nova candidatura: Cloud - Ana"));
});
