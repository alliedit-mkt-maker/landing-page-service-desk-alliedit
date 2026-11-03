import { test } from "node:test";
import { strict as assert } from "node:assert";
import { resolveBlogToc } from "./blog-toc";

test("preserves an existing target without assigning another id", () => {
  const html = '<ul><li><a href="#intro">Introdução</a></li></ul><h2 id="intro">Introdução</h2>';
  assert.equal(resolveBlogToc(html).html, html);
});
test("matches heading text ignoring case accents and punctuation and accepts containment", () => {
  const result = resolveBlogToc('<a href="#fim">CONCLUSAO!</a><h2>O que é SD-WAN: conclusão</h2>');
  assert.equal(result.html.includes('<h2 id="fim">'), true);
  assert.equal(result.links[0]?.method, "text");
});
test("matches h3 while preserving heading markup", () => {
  const result = resolveBlogToc('<a href="#acesso">Acessos</a><h2>Outro</h2><h3 class="title"><strong>Acessos</strong></h3>');
  assert.equal(result.html.includes('<h3 class="title" id="acesso"><strong>Acessos</strong></h3>'), true);
});
test("uses order only when TOC link and h2 counts match", () => {
  assert.equal(resolveBlogToc('<a href="#x">Diferente</a><h2>Outro</h2>').links[0]?.method, "order");
  assert.equal(resolveBlogToc('<a href="#x">Diferente</a><h2>Outro</h2><h2>Mais</h2>').unresolved.length, 1);
});
test("never overwrites existing heading ids or creates duplicate ids", () => {
  const result = resolveBlogToc('<a href="#x">Título</a><a href="#x">Título</a><h2>Título</h2><h2 id="keep">Outro</h2>');
  assert.equal(result.html.match(/id="x"/g)?.length, 1);
  assert.equal(result.html.includes('id="keep"'), true);
});
test("external TOC links are reported but never rewritten", () => {
  const html = '<a href="https://editor.vercel.app/post#intro">Introdução</a><h2>Introdução</h2>';
  const result = resolveBlogToc(html);
  assert.equal(result.html, html);
  assert.equal(result.external[0]?.href, "https://editor.vercel.app/post#intro");
});