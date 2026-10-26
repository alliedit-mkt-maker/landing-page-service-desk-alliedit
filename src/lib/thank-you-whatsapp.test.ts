import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { thankYouWhatsappHref, thankYouWhatsappMessage } from "./thank-you-whatsapp";

const prefix = "Olá! Acabei de enviar o formulário no site da Allied IT e gostaria de falar com um especialista";
const expected: Record<string, string> = {
  "/servicos/digital-workspace": "Digital Workspace (Service Desk e Field Service)",
  "/servicos/smart-cloud-ops": "Smart Cloud Ops",
  "/servicos/cyber-shield-360": "Cyber Shield 360°",
  "/servicos/infra-core": "Infra Core",
  "/servicos/product-engineering": "Product Engineering",
  "/servicos/inteligencia-artificial": "Inteligência Artificial",
  "/videoconferencia": "videoconferência",
  "/headsets": "headsets corporativos",
  "/produtos/microsoft-365": "Microsoft 365",
  "/produtos/aws": "consultoria AWS",
  "/produtos/firewall": "firewall",
  "/lp/service-desk": "Service Desk",
  "/lp/field-service": "Field Service",
  "/lp/alocacao-ti": "alocação de profissionais de TI",
  "/lp/cabeamento": "cabeamento estruturado",
  "/lp/cabeamento-estruturado": "cabeamento estruturado",
  "/lp/headset-callcenter": "headsets para call center",
  "/lp/headset-callcenter-pago": "headsets para call center",
  "/lp/headset-logitech": "headsets Logitech",
  "/lp/headset-yealink": "headsets Yealink",
  "/lp/headsets-poly": "headsets Poly",
  "/lp/poly-studio": "videoconferência Poly Studio",
  "/lp/rally-bar": "videoconferência Logitech Rally Bar",
  "/lp/videoconferencia": "videoconferência",
  "/lp/videoconferencia-pago": "videoconferência",
  "/lp/yealink-videoconferencia": "videoconferência Yealink",
};

describe("thank-you messages follow the submission page", () => {
  for (const [path, subject] of Object.entries(expected)) {
    test(path, () => {
      assert.equal(thankYouWhatsappMessage(path), `${prefix} sobre ${subject}.`);
      const url = new URL(thankYouWhatsappHref(`https://alliedit.com.br${path}/?utm_source=test#form`));
      assert.equal(url.origin, "https://wa.me");
      assert.equal(url.pathname, "/5511943319875");
      assert.equal(url.searchParams.get("text"), `${prefix} sobre ${subject}.`);
    });
  }
  test("unknown and contact pages keep the general message", () => {
    for (const path of ["/contato", "/outra-pagina", "", "/lp/field-service/obrigado"]) {
      assert.equal(thankYouWhatsappMessage(path), `${prefix}.`);
    }
  });
  test("campaign root URLs use the campaign topic", () => {
    for (const [path, subject] of Object.entries(expected)) {
      if (!path.startsWith("/lp/")) continue;
      assert.equal(thankYouWhatsappMessage(`https://${path.slice(4)}.alliedit.com.br/?gclid=test`), `${prefix} sobre ${subject}.`);
    }
    assert.equal(thankYouWhatsappMessage("https://headset-poly.alliedit.com.br/"), `${prefix} sobre headsets Poly.`);
    assert.equal(thankYouWhatsappMessage("https://alliedit.com.br/"), `${prefix}.`);
  });
  test("actual pathname wins over the form campaign hostname", () => {
    assert.equal(thankYouWhatsappMessage("https://service-desk.alliedit.com.br/produtos/aws"), `${prefix} sobre consultoria AWS.`);
  });
});