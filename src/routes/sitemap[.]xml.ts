import { createFileRoute } from "@tanstack/react-router";
import { dedupeByTitle, fetchAllPosts } from "@/lib/wp";

const STATIC_PATHS = [
  "/site",
  "/site/sobre",
  "/site/servicos",
  "/site/servicos/digital-workspace",
  "/site/produtos",
  "/site/contato",
  "/site/blog",
];

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const origin = `${url.protocol}//${url.host}`;

        let posts;
        try {
          const all = await fetchAllPosts();
          if (all.total > 0 && all.posts.length !== all.total) {
            console.error(
              `sitemap: leitura truncada (${all.posts.length} de ${all.total} posts) — não publicando`,
            );
            return new Response("sitemap incompleto", { status: 500 });
          }
          posts = dedupeByTitle(all.posts);
        } catch (error) {
          console.error("sitemap: falha ao ler os posts", error);
          return new Response("sitemap indisponível", { status: 500 });
        }

        const entries: string[] = STATIC_PATHS.map(
          (path) => `  <url><loc>${xmlEscape(origin + path)}</loc></url>`,
        );

        for (const post of posts) {
          const dates = [post.date, post.modified].filter(Boolean) as string[];
          const lastmod = dates
            .map((d) => new Date(d))
            .filter((d) => !Number.isNaN(d.getTime()))
            .sort((a, b) => b.getTime() - a.getTime())[0];
          const loc = xmlEscape(`${origin}/site/blog/${post.slug}`);
          entries.push(
            lastmod
              ? `  <url><loc>${loc}</loc><lastmod>${lastmod.toISOString()}</lastmod></url>`
              : `  <url><loc>${loc}</loc></url>`,
          );
        }

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;

        return new Response(xml, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, s-maxage=3600",
          },
        });
      },
    },
  },
});
