type Heading = { start: number; tag: string; text: string; id?: string };
export type TocLink = { href: string; text: string; id: string; target?: string; method?: "existing" | "normalized" | "text" | "similarity" | "introduction" | "order"; reason?: string };

function decode(text: string) {
  return text.replace(/&#x([\da-f]+);/gi, (_, n: string) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n: string) => String.fromCodePoint(Number(n)))
    .replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&apos;|&rsquo;/gi, "'");
}
function plain(text: string) { return decode(text.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim(); }
function normalized(text: string) { return plain(text).normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim(); }
function attribute(tag: string, name: string) {
  const m = new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i").exec(tag);
  return m ? decode(m[1] ?? m[2] ?? m[3] ?? "") : undefined;
}
function fragment(href: string) {
  try { return decodeURIComponent(href.slice(href.indexOf("#") + 1)); } catch { return href.slice(href.indexOf("#") + 1); }
}
export function normalizeTocFragment(href: string) {
  return fragment(href).split("#").at(-1)?.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/\s+/g, "-") ?? "";
}
const connectors = new Set(["e", "de", "da", "do", "na", "no", "para", "por", "vs", "versus"]);
function similarity(a: string, b: string) {
  const x = new Set(normalized(a).split(" ").filter(w => w && !connectors.has(w)));
  const y = new Set(normalized(b).split(" ").filter(w => w && !connectors.has(w)));
  const common = [...x].filter(w => y.has(w)).length;
  return common >= 2 ? 2 * common / (x.size + y.size) : 0;
}
function escapeAttribute(text: string) { return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;"); }

/** Repairs only internal TOC targets; preserves all existing ids and body links. */
export function resolveBlogToc(html: string) {
  const headings: Heading[] = [...html.matchAll(/<h([23])\b[^>]*>([\s\S]*?)<\/h\1\s*>/gi)].map(m => ({
    start: m.index, tag: m[0].slice(0, m[0].indexOf(">") + 1), text: plain(m[2]), id: attribute(m[0].slice(0, m[0].indexOf(">") + 1), "id"),
  }));
  const ids = new Set([...html.matchAll(/<[a-z][^>]*>/gi)].map(m => attribute(m[0], "id")).filter((id): id is string => Boolean(id)));
  const firstHeading = headings[0]?.start ?? html.length;
  // The opening index/list is the TOC, not arbitrary links in the body.
  const opening = html.slice(0, firstHeading);
  const links: TocLink[] = [];
  const external: { href: string; text: string }[] = [];
  const positions = new Map<TocLink, { start: number; tag: string }>();
  let lastLinkEnd = 0;
  for (const m of opening.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a\s*>/gi)) {
    const href = attribute(m[0].slice(0, m[0].indexOf(">") + 1), "href");
    if (!href || !href.includes("#") || !fragment(href)) continue;
    if (!href.startsWith("#")) { external.push({ href, text: plain(m[1]) }); continue; }
    const link = { href, text: plain(m[1]), id: fragment(href) };
    links.push(link);
    positions.set(link, { start: m.index, tag: m[0].slice(0, m[0].indexOf(">") + 1) });
    lastLinkEnd = m.index + m[0].length;
  }
  const h2 = headings.filter(h => /^<h2\b/i.test(h.tag));
  const additions = new Map<number, string>();
  links.forEach((link, i) => {
    if (ids.has(link.id)) { link.target = link.id; link.method = "existing"; return; }
    const normalizedId = normalizeTocFragment(link.href);
    const idMatches = [...ids].filter(id => normalizeTocFragment(`#${id}`) === normalizedId);
    if (idMatches.length === 1) { link.target = idMatches[0]; link.method = "normalized"; return; }
    const text = normalized(link.text);
    const exact = headings.filter(h => normalized(h.text) === text);
    const contains = headings.filter(h => { const t = normalized(h.text); return text && t && (t.includes(text) || text.includes(t)); });
    const ranked = headings.map(h => ({ h, score: similarity(link.text, h.text) })).sort((a, b) => b.score - a.score);
    const best = ranked[0];
    const similar = best && best.score >= 0.7 && best.score - (ranked[1]?.score ?? 0) >= 0.12 ? best.h : undefined;
    const heading = exact.length === 1 ? exact[0] : contains.length === 1 ? contains[0] : similar;
    const fallback = links.length === h2.length ? h2[i] : undefined;
    if (!heading && (normalizedId === "introducao" || text === "introducao")) {
      // First root paragraph following the opening TOC, never inside its list/container.
      let depth = 0;
      let intro: { start: number; id?: string } | undefined;
      for (const m of opening.matchAll(/<\/?([a-z][\w-]*)\b[^>]*>/gi)) {
        const tag = m[1].toLowerCase();
        if (/^<\//.test(m[0])) { depth = Math.max(0, depth - 1); continue; }
        if (m.index >= lastLinkEnd && depth === 0 && tag === "p") { intro = { start: m.index, id: attribute(m[0], "id") }; break; }
        if (!/^(br|img|hr|input|meta|link|source|wbr)$/.test(tag) && !/\/>$/.test(m[0])) depth++;
      }
      const start = intro?.start ?? headings[0]?.start;
      if (start !== undefined) {
        const id = intro?.id ?? headings.find(h => h.start === start)?.id ?? additions.get(start) ?? normalizedId;
        if (!ids.has(id)) { additions.set(start, id); ids.add(id); }
        link.target = id; link.method = "introduction"; return;
      }
    }
    const target = heading ?? (fallback && exact.length === 0 && contains.length === 0 ? fallback : undefined);
    if (!target) { link.reason = exact.length > 1 || contains.length > 1 || (best && best.score >= 0.7) ? "Correspondência ambígua entre títulos" : "Sem título com semelhança clara e sem equivalência segura por ordem"; return; }
    const id = target.id ?? additions.get(target.start) ?? normalizedId;
    if (!ids.has(id)) { additions.set(target.start, id); ids.add(id); }
    link.target = id; link.method = heading ? heading === similar && exact.length !== 1 && contains.length !== 1 ? "similarity" : "text" : "order";
  });
  let output = html;
  const edits: { start: number; end: number; value: string }[] = [];
  for (const [start, id] of additions) {
    const end = html.indexOf(">", start);
    edits.push({ start: end, end, value: ` id="${escapeAttribute(id)}"` });
  }
  for (const link of links) {
    const position = positions.get(link);
    if (!position || !link.target || link.target === link.id) continue;
    const tag = position.tag.replace(/\shref\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/i, ` href="#${escapeAttribute(link.target)}"`);
    edits.push({ start: position.start, end: position.start + position.tag.length, value: tag });
  }
  for (const edit of edits.sort((a, b) => b.start - a.start)) {
    output = output.slice(0, edit.start) + edit.value + output.slice(edit.end);
  }
  return { html: output, links, external, unresolved: links.filter(link => !link.target) };
}