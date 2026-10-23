import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { hostRedirect } from "../server";

const resolve = (path: string, origin = "https://alliedit.com.br") =>
  hostRedirect(new Request(`${origin}${path}`));

const mappings: [string, string][] = [
  [
    "/aws",
    "/produtos/aws"
  ],
  [
    "/firewall-de-rede-em-sao-paulo",
    "/produtos/firewall"
  ],
  [
    "/transforme-a-infraestrutura-de-ti",
    "/servicos/infra-core"
  ],
  [
    "/fortinet",
    "/produtos/firewall"
  ],
  [
    "/consultoriaaws",
    "/produtos/aws"
  ],
  [
    "/o-que-e-field-service",
    "/blog/field-service-o-que-e-como-funciona-e-beneficios"
  ],
  [
    "/o-que-e-sla-em-ti",
    "/blog/sla-o-que-e-como-criar-e-como-melhorar"
  ],
  [
    "/guia-completo-entendendo-os-niveis-de-suporte-tecnico-n1-n2-n3",
    "/blog/guia-completo-entendendo-os-niveis-de-suporte-tecnico-em-ti-n1-n2-n3"
  ],
  [
    "/servicos/data-center",
    "/servicos/infra-core"
  ],
  [
    "/servicos/gerenciamento-de-infraestrutura",
    "/servicos/infra-core"
  ],
  [
    "/servicos/banco-de-dados",
    "/servicos/smart-cloud-ops"
  ],
  [
    "/servicos/cloud-msp",
    "/servicos/smart-cloud-ops"
  ],
  [
    "/servicos/managed-services",
    "/servicos"
  ],
  [
    "/servicos/servicos-gerenciados",
    "/servicos"
  ],
  [
    "/servicos__trashed/servicos-gerenciados",
    "/servicos"
  ],
  [
    "/categoria-produto/sem-categoria",
    "/produtos"
  ],
  [
    "/carrinho",
    "/produtos"
  ],
  [
    "/minha-conta",
    "/produtos"
  ],
  [
    "/todos-produtos",
    "/produtos"
  ],
  [
    "/cimed",
    "/sobre"
  ],
  [
    "/termos-de-servico-hospedagem-de-sites-e-e-mails",
    "/termos-de-uso"
  ],
  [
    "/guia-completo-entendendo-os-niveis-de-suporte-tecnico-in-ti-n1-n2-n3",
    "/blog/guia-completo-entendendo-os-niveis-de-suporte-tecnico-em-ti-n1-n2-n3"
  ],
  [
    "/guia-completo-entendendo-os-niveis-de-suporte-tecnico-em-n1-n2-n3",
    "/blog/guia-completo-entendendo-os-niveis-de-suporte-tecnico-em-ti-n1-n2-n3"
  ],
  [
    "/guia-completo-entendendo-os-niveis-de-suporte-tecnico-em-ti-n1-n2-e-n3",
    "/blog/guia-completo-entendendo-os-niveis-de-suporte-tecnico-em-ti-n1-n2-n3"
  ],
  [
    "/guia-completo-entendendo-os-niveis-de-suporte-tecnico-em-ti-n1-n3",
    "/blog/guia-completo-entendendo-os-niveis-de-suporte-tecnico-em-ti-n1-n2-n3"
  ],
  [
    "/feed",
    "/blog"
  ]
];

describe("legacy redirect rules", () => {
  for (const [source, destination] of mappings) {
    test(`${source} permanently redirects with and without a trailing slash`, () => {
      for (const suffix of ["", "/"]) {
        const response = resolve(`${source}${suffix}?utm_source=test`);
        assert.equal(response?.status, 301);
        assert.equal(response?.headers.get("location"), `https://alliedit.com.br${destination}?utm_source=test`);
      }
      assert.equal(resolve(destination), undefined);
    });
  }
  for (const path of ["/uncategorized/hello-world", "/e663ca46594d0641", "/shop/qualquer", "/shop/categoria/spam"]) {
    test(`${path} is gone with and without a trailing slash`, () => {
      for (const suffix of ["", "/"]) {
        const response = resolve(`${path}${suffix}`);
        assert.equal(response?.status, 410);
        assert.equal(response?.headers.has("location"), false);
      }
    });
  }
  for (const [source, destination] of [
    ["/category/ti", "/blog"],
    ["/category/ti/page/2", "/blog"],
    ["/tag/ti", "/blog"],
    ["/author/editor", "/sobre"],
    ["/categoria-produto/headsets/page/2", "/categoria-produto/headsets"],
    ["/solucoes-de-colaboracao/reunioes", "/produtos"],
  ]) {
    test(`${source} matches its legacy prefix only`, () => {
      for (const suffix of ["", "/"]) {
        const response = resolve(`${source}${suffix}`);
        assert.equal(response?.status, 301);
        assert.equal(response?.headers.get("location"), `https://alliedit.com.br${destination}`);
      }
    });
  }
  test("uploads retain the exact path and query on the CMS, without a CMS loop", () => {
    const path = "/wp-content/uploads/2020/01/foto.jpg?size=large";
    assert.equal(resolve(path)?.status, 301);
    assert.equal(resolve(path)?.headers.get("location"), `https://cms.alliedit.com.br${path}`);
    assert.equal(resolve(path, "https://cms.alliedit.com.br"), undefined);
  });
  test("trailing slashes use 301 and preserve queries", () => {
    for (const origin of ["https://alliedit.com.br", "http://localhost:8080"]) {
      assert.equal(resolve("/blog/page/2/?q=ti", origin)?.status, 301);
      assert.equal(resolve("/blog/page/2/?q=ti", origin)?.headers.get("location"), `${origin}/blog/page/2?q=ti`);
      assert.equal(resolve("/", origin), undefined);
    }
  });
  test("real pages, LPs and inherited object names do not match legacy rules", () => {
    for (const path of ["/blog/page/2", "/blog/categoria/cloud", "/blog/categoria/cloud/page/2", "/lp/cabeamento", "/lp/field-service", "/constructor", "/__proto__"]) {
      assert.equal(resolve(path), undefined);
    }
    assert.equal(resolve("/aws", "https://service-desk.alliedit.com.br"), undefined);
  });
});
