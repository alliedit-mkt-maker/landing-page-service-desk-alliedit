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
test("rewrites a broken link to the existing heading id using clear words without connectors", () => {
  const r = resolveBlogToc('<a href="#como-funcionam-ztna-e-vpn-na-pratica">Como funcionam ZTNA e VPN na prática</a><h2 id="keep">Como funcionam ZTNA vs VPN na prática</h2>');
  assert.equal(r.links[0]?.target, "keep");
  assert.equal(r.html.includes('href="#keep"'), true);
  assert.equal(r.html.includes('id="keep"'), true);
});
test("normalizes encoded accents spaces and repeated fragments against existing ids", () => {
  const r = resolveBlogToc('<a href="#wrong#GEST%C3%83O Benef%C3%ADcios">Diferente</a><h3 id="gestao-beneficios">Outro</h3>');
  assert.equal(r.links[0]?.target, "gestao-beneficios");
});
test("matches h3 with another id and leaves body links unchanged", () => {
  const r = resolveBlogToc('<a href="#wrong">Conceito e fundamentos</a><h2>Outro</h2><h3 id="concept">Conceito e fundamentos</h3><p><a href="#wrong">Corpo</a></p>');
  assert.equal(r.links[0]?.target, "concept");
  assert.equal(r.html.includes('<a href="#wrong">Corpo</a>'), true);
});
test("introduction uses first body paragraph after the TOC without adding elements", () => {
  const r = resolveBlogToc('<div><nav><ul><li><a href="#introducao">Introdução</a></li></ul></nav></div><p>Texto inicial</p><h2 id="other">Outro</h2>');
  assert.equal(r.html.includes('<p id="introducao">Texto inicial</p>'), true);
  assert.equal(r.links[0]?.method, "introduction");
});
test("ambiguous word similarity does not choose a title even when counts match", () => {
  const r = resolveBlogToc('<a href="#wrong">Gestão segurança empresas</a><h2 id="a">Gestão segurança empresas digitais</h2><h3 id="b">Gestão segurança empresas globais</h3>');
  assert.equal(r.unresolved.length, 1);
  assert.equal(r.html.includes('href="#wrong"'), true);
});
test("tied word scores cannot fall back to order", () => {
  const r = resolveBlogToc('<a href="#wrong">Gestão segurança empresas</a><h2 id="a">Empresas segurança gestão digitais</h2><h3 id="b">Segurança empresas gestão globais</h3>');
  assert.equal(r.unresolved.length, 1);
});