type Heading = { start: number; tag: string; text: string; id?: string };
export type TocLink = { href: string; text: string; id: string; target?: string; method?: "existing" | "text" | "order" };

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
function escapeAttribute(text: string) { return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;"); }

/** Adds only missing heading ids. Original HTML, links and existing ids stay intact. */
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
  for (const m of opening.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a\s*>/gi)) {
    const href = attribute(m[0].slice(0, m[0].indexOf(">") + 1), "href");
    if (!href || !href.includes("#") || !fragment(href)) continue;
    if (!href.startsWith("#")) { external.push({ href, text: plain(m[1]) }); continue; }
    links.push({ href, text: plain(m[1]), id: fragment(href) });
  }
  const h2 = headings.filter(h => /^<h2\b/i.test(h.tag));
  const additions = new Map<number, string>();
  links.forEach((link, i) => {
    if (ids.has(link.id)) { link.target = link.id; link.method = "existing"; return; }
    const text = normalized(link.text);
    const available = headings.filter(h => !h.id && !additions.has(h.start));
    const heading = text ? available.find(h => normalized(h.text) === text)
      ?? available.find(h => { const t = normalized(h.text); return t && (t.includes(text) || text.includes(t)); }) : undefined;
    const fallback = links.length === h2.length ? h2[i] : undefined;
    const target = heading ?? (fallback && !fallback.id && !additions.has(fallback.start) ? fallback : undefined);
    if (!target) return;
    additions.set(target.start, link.id); ids.add(link.id);
    link.target = link.id; link.method = heading ? "text" : "order";
  });
  let output = html;
  for (const [start, id] of [...additions].sort((a, b) => b[0] - a[0])) {
    const end = output.indexOf(">", start);
    output = output.slice(0, end) + ` id="${escapeAttribute(id)}"` + output.slice(end);
  }
  return { html: output, links, external, unresolved: links.filter(link => !link.target) };
}