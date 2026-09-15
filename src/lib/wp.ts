// Endpoint único do WordPress headless. Ao migrar o WP para um subdomínio,
// basta trocar esta constante.
export const WP_API_URL = "https://alliedit.com.br/wp-json/wp/v2";

export type WpPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: { source_url?: string; alt_text?: string }[];
    "wp:term"?: { id: number; name: string; taxonomy: string }[][];
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

export function primaryCategory(post: WpPost): string | null {
  const terms = post._embedded?.["wp:term"] ?? [];
  for (const group of terms) {
    const cat = group?.find((t) => t.taxonomy === "category" && t.name !== "Sem categoria");
    if (cat) return cat.name;
  }
  return null;
}

async function wpFetch(path: string): Promise<Response> {
  const res = await fetch(`${WP_API_URL}${path}`, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`WordPress respondeu ${res.status}`);
  return res;
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
