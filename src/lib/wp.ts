// Endpoint único do WordPress headless. O domínio próprio devolve desafio
// anti-bot (403) para requisições feitas do servidor; o proxy oficial do
// WordPress.com responde normalmente.
export const WP_SITE_ID = "257102166";
export const WP_API_URL = `https://public-api.wordpress.com/wp/v2/sites/${WP_SITE_ID}`;
export const WP_REST_V1_URL = `https://public-api.wordpress.com/rest/v1.1/sites/${WP_SITE_ID}`;

export type WpPost = {
  id: number;
  slug: string;
  date: string;
  modified?: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: { source_url?: string; alt_text?: string }[];
    "wp:term"?: { id: number; name: string; taxonomy: string }[][];
    author?: { name?: string }[];
  };
};

export type WpCategory = { id: number; name: string; count: number; slug: string };

export const POSTS_PER_PAGE = 9;

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&#39;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&quot;/g, '"')
    .replace(/&#8230;|&hellip;/g, "…")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export function truncate(text: string, max = 160): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

export function formatDatePt(iso: string): string {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

export function featuredImage(post: WpPost): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
}

export function authorName(post: WpPost): string {
  const name = post._embedded?.author?.[0]?.name;
  return name ? stripHtml(name) : "Allied IT";
}

// ~200 palavras por minuto, mínimo de 1 minuto.
export function readingTime(post: WpPost): number {
  const text = stripHtml(post.content?.rendered ?? post.excerpt.rendered);
  const words = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / 200));
}

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

export function formatDateShortPt(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${String(d.getDate()).padStart(2, "0")} ${MESES[d.getMonth()]} ${d.getFullYear()}`;
}

export function primaryCategory(post: WpPost): string | null {
  const terms = post._embedded?.["wp:term"] ?? [];
  for (const group of terms) {
    const cat = group?.find((t) => t.taxonomy === "category" && t.name !== "Sem categoria");
    if (cat) return cat.name;
  }
  return null;
}

// Cache-buster por minuto: fura cache de edge sem perder o benefício do cache.
function cacheBuster(): string {
  return String(Math.floor(Date.now() / 60_000));
}

export async function wpFetch(path: string): Promise<Response> {
  const sep = path.includes("?") ? "&" : "?";
  const res = await fetch(`${WP_API_URL}${path}${sep}_cb=${cacheBuster()}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`WordPress respondeu ${res.status}`);
  return res;
}

// ---------- Helpers puros ----------

export function truncateAtWord(text: string, max = 120): string {
  const clean = text.trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.-]+$/, "") + "…";
}

const DANGLING = new Set([
  "e", "ou", "de", "da", "do", "das", "dos", "para", "pra", "que", "com", "sem",
  "em", "no", "na", "o", "a", "os", "as", "um", "uma", "ao", "à", "por", "se",
  "como", "mas",
]);

function dropDanglingConnector(text: string): string {
  let out = text.replace(/[\s,;:.-]+$/, "");
  for (;;) {
    const m = /(?:^|\s)([^\s]+)$/.exec(out);
    if (!m) break;
    const word = m[1].toLowerCase().replace(/[^\p{L}]/gu, "");
    if (!DANGLING.has(word)) break;
    out = out.slice(0, out.length - m[1].length).replace(/[\s,;:.-]+$/, "");
  }
  return out;
}

export function socialDescription(text: string, max = 80): string {
  const clean = text.trim();
  if (clean.length <= max) return clean;
  const window = clean.slice(0, max);

  const sentence = /[.!?](?=[^.!?]*$)/.exec(window);
  if (sentence && sentence.index > 20) {
    return window.slice(0, sentence.index + 1);
  }

  const clauseIdx = Math.max(window.lastIndexOf(","), window.lastIndexOf(";"));
  if (clauseIdx > 20) {
    return dropDanglingConnector(window.slice(0, clauseIdx));
  }

  return dropDanglingConnector(truncateAtWord(window, max).replace(/…$/, ""));
}

export function seoTitle(title: string): string {
  return `${title} | Allied IT`;
}

function normalizeTitleKey(title: string): string {
  return stripHtml(title)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Mantém a cópia mais ANTIGA de cada título (o CMS tem centenas de duplicatas).
export function dedupeByTitle<T extends { title: { rendered: string }; date: string }>(
  posts: T[],
): T[] {
  const best = new Map<string, T>();
  for (const post of posts) {
    const key = normalizeTitleKey(post.title.rendered);
    const current = best.get(key);
    if (!current || new Date(post.date).getTime() < new Date(current.date).getTime()) {
      best.set(key, post);
    }
  }
  const kept = new Set(best.values());
  return posts.filter((p) => kept.has(p));
}

export function normalizeInternalLinks(html: string): string {
  return html.replace(
    /href=("|')https?:\/\/(?:www\.)?alliedit\.com\.br\/([a-z0-9-]+)\/?\1/gi,
    (_m, q: string, slug: string) => `href=${q}/site/blog/${slug}${q}`,
  );
}

// ---------- SEO (Rank Math via REST v1.1) ----------

export type WpPostSeo = {
  rank_math_title?: string;
  rank_math_description?: string;
  rank_math_facebook_description?: string;
};

export async function fetchPostSeo(slug: string): Promise<WpPostSeo> {
  try {
    const res = await fetch(
      `${WP_REST_V1_URL}/posts/slug:${encodeURIComponent(slug)}?fields=ID,metadata&_cb=${cacheBuster()}`,
      { headers: { Accept: "application/json" } },
    );
    if (!res.ok) return {};
    const data = (await res.json()) as { metadata?: { key: string; value: unknown }[] };
    const meta = data.metadata ?? [];
    const read = (key: string): string | undefined => {
      const found = meta.find((m) => m.key === key);
      const value = typeof found?.value === "string" ? found.value.trim() : "";
      return value ? value : undefined;
    };
    const title = read("rank_math_title");
    return {
      rank_math_title: title && !title.includes("%") ? title : undefined,
      rank_math_description: read("rank_math_description"),
      rank_math_facebook_description: read("rank_math_facebook_description"),
    };
  } catch {
    return {};
  }
}

export async function fetchAllPosts(): Promise<{ posts: WpPost[]; total: number }> {
  const perPage = 100;
  const all: WpPost[] = [];
  let total = 0;
  for (let page = 1; page <= 100; page += 1) {
    const res = await wpFetch(
      `/posts?per_page=${perPage}&page=${page}&orderby=id&order=asc&status=publish&_fields=id,slug,date,modified,title`,
    );
    if (page === 1) total = Number(res.headers.get("X-WP-Total") ?? "0") || 0;
    const chunk = (await res.json()) as WpPost[];
    all.push(...chunk);
    if (chunk.length < perPage) break;
  }
  return { posts: all, total };
}

export async function fetchPosts(params: { page: number; categoryId: number | null }): Promise<{
  posts: WpPost[];
  totalPages: number;
}> {
  const query = new URLSearchParams({
    _embed: "1",
    per_page: String(POSTS_PER_PAGE),
    page: String(params.page),
  });
  if (params.categoryId) query.set("categories", String(params.categoryId));
  const res = await wpFetch(`/posts?${query.toString()}`);
  const posts = (await res.json()) as WpPost[];
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? "1") || 1;
  return { posts, totalPages };
}

export async function fetchCategories(): Promise<WpCategory[]> {
  const res = await wpFetch("/categories?per_page=100&orderby=count&order=desc");
  const cats = (await res.json()) as WpCategory[];
  return cats.filter((c) => c.count > 0 && c.slug !== "sem-categoria");
}

export async function fetchPostBySlug(slug: string): Promise<WpPost | null> {
  const res = await wpFetch(`/posts?slug=${encodeURIComponent(slug)}&_embed=1`);
  const posts = (await res.json()) as WpPost[];
  return posts[0] ?? null;
}
