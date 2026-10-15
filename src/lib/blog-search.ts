import { dedupeByTitle, slimPost, stripHtml, wpFetch, type WpPost } from "@/lib/wp";

export function normalizeSearch(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
}

function visibleText(html: string): string {
  return stripHtml(html.replace(/<!--[^]*?-->/g, " ")
    .replace(/<(script|style|template|noscript)\b[^>]*>[^]*?<\/\1\s*>/gi, " ")
    .replace(/<[^>]*>/g, " "))
    .replace(/&#x([0-9a-f]+);/gi, (_, value: string) => String.fromCodePoint(parseInt(value, 16)))
    .replace(/&#(\d+);/g, (_, value: string) => String.fromCodePoint(Number(value)));
}

type SearchEntry = { post: WpPost; title: string; text: string };
let cachedIndex: Promise<SearchEntry[]> | undefined;

export function loadSearchIndex(): Promise<SearchEntry[]> {
  if (cachedIndex) return cachedIndex;
  cachedIndex = (async () => {
    const posts: WpPost[] = [];
    for (let page = 1; ; page += 1) {
      const response = await wpFetch(`/posts?status=publish&_embed=1&per_page=100&page=${page}`);
      const chunk = await response.json() as WpPost[];
      posts.push(...chunk);
      const totalPages = Number(response.headers.get("X-WP-TotalPages"));
      if (chunk.length < 100 || (totalPages > 0 && page >= totalPages)) break;
    }
    return dedupeByTitle(posts).map((post) => {
      const title = normalizeSearch(visibleText(post.title.rendered));
      const categories = (post._embedded?.["wp:term"] ?? []).flat()
        .filter((term) => term.taxonomy === "category").map((term) => term.name).join(" ");
      return { post: slimPost(post), title, text: normalizeSearch(visibleText(
        `${post.title.rendered} ${post.excerpt.rendered} ${categories} ${post.content?.rendered ?? ""}`,
      )) };
    });
  })().catch((error: unknown) => {
    cachedIndex = undefined;
    throw error;
  });
  return cachedIndex;
}

export function searchArticles(index: SearchEntry[], query: string): WpPost[] {
  const words = normalizeSearch(query).split(" ").filter(Boolean);
  return index.filter((entry) => words.every((word) => entry.text.includes(word)))
    .map((entry) => ({ entry, score: words.filter((word) => entry.title.includes(word)).length }))
    .sort((a, b) => b.score - a.score || b.entry.post.date.localeCompare(a.entry.post.date))
    .map(({ entry }) => entry.post);
}