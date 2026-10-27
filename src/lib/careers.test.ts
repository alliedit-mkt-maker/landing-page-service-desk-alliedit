import { describe, expect, it } from "vitest";
import { careerSubject, careersPopupEnabled, validateCareer, validateFile } from "./careers";

const ok = { nome: "Ana Souza", email: "ana@ex.com", whatsapp: "(11) 98765-4321", area: "Cloud", sobre: "", aceite: true };

describe("candidatura", () => {
  it("interruptor do rodapé começa desligado", () => expect(careersPopupEnabled).toBe(false));
  it("aceita dados válidos", () => expect(validateCareer(ok)).toEqual({}));
  it("limita sobre a 1000 caracteres", () => expect(validateCareer({ ...ok, sobre: "a".repeat(1001) }).sobre).toBeTruthy());
  it("exige aceite", () => expect(validateCareer({ ...ok, aceite: false }).aceite).toBeTruthy());
  it("recusa arquivo acima de 5 MB", () => expect(validateFile({ name: "cv.pdf", size: 5 * 1024 * 1024 + 1 })).toBeTruthy());
  it("recusa extensão fora de PDF/DOC/DOCX", () => expect(validateFile({ name: "cv.png", size: 10 })).toBeTruthy());
  it("aceita DOCX de 5 MB", () => expect(validateFile({ name: "cv.docx", size: 5 * 1024 * 1024 })).toBeUndefined());
  it("assunto do e-mail", () => expect(careerSubject("Cloud", " Ana ")).toBe("Nova candidatura: Cloud - Ana"));
});
