import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { blogBreadcrumb, blogFaqSchema, extractBlogFaq } from "./blog-schema";
import { seoTitle } from "./wp";

describe("full blog titles", () => {
  test("keeps the brand at the exact 65-character boundary", () => {
    const title = "a".repeat(53);
    assert.equal(seoTitle(title), `${title} | Allied IT`);
    assert.equal(seoTitle(title).length, 65);
  });
  test("omits only the brand above 65 characters without truncating", () => {
    const title = "Plano de resposta a incidentes de segurança: como proteger sua empresa e reduzir riscos";
    assert.equal(seoTitle(title), title);
    assert.equal(seoTitle("a".repeat(54)), "a".repeat(54));
  });
});

describe("content-derived blog schemas", () => {
  test("extracts exact decoded text from details without CMS schemas or TOC duplicates", () => {
    const html = `<nav><h2>Perguntas frequentes</h2></nav><section><h2>Perguntas frequentes</h2>
      <details><summary>O que é &quot;cloud&quot;?</summary><div><p>É <strong>nuvem</strong> &amp; gestão.</p><p>Outra resposta.</p></div></details></section>
      <script type="application/ld+json">{"@type":"FAQPage"}</script>`;
    assert.deepEqual(extractBlogFaq(html), [{ question: 'O que é "cloud"?', answer: "É nuvem & gestão. Outra resposta." }]);
    assert.equal(blogFaqSchema(html, "https://alliedit.com.br/blog/exemplo")?.mainEntity.length, 1);
  });
  test("supports future heading-based FAQs and stops at the following section", () => {
    assert.deepEqual(extractBlogFaq(`<h2>Perguntas frequentes</h2><h3>Como funciona?</h3><p>Assim.</p><h3>Por quê?</h3><p>Por isso.</p><h2>Conclusão</h2><p>Não é resposta.</p>`), [
      { question: "Como funciona?", answer: "Assim." }, { question: "Por quê?", answer: "Por isso." },
    ]);
  });
  test("does not emit FAQPage for posts with no visible FAQ or only a TOC reference", () => {
    assert.equal(blogFaqSchema('<nav>Perguntas frequentes</nav><h2>Introdução</h2><p>Texto.</p>', "/post"), null);
  });
  test("every breadcrumb has the requested three names and URLs", () => {
    const crumb = blogBreadcrumb("O que é backlog", "https://alliedit.com.br/blog/backlog-o-que-e");
    assert.deepEqual(crumb.itemListElement.map(item => [item.position, item.name, item.item]), [
      [1, "Início", "https://alliedit.com.br/"], [2, "Blog", "https://alliedit.com.br/blog"],
      [3, "O que é backlog", "https://alliedit.com.br/blog/backlog-o-que-e"],
    ]);
  });
});