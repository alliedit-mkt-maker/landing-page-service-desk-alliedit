import { createFileRoute } from "@tanstack/react-router";
import { dedupeByTitle, fetchAllPosts } from "@/lib/wp";
import { SITE_ORIGIN } from "@/lib/site";

const STATIC_PATHS = [
  "/",
  "/sobre",
  "/servicos",
  "/servicos/digital-workspace",
  "/produtos",
  "/contato",
  "/blog",
];

const LP_PATHS = [
  "/lp/service-desk",
  "/lp/cabeamento",
  "/lp/headset-callcenter",
  "/lp/headset-logitech",
  "/lp/headset-yealink",
  "/lp/headsets-poly",
  "/lp/poly-studio",
  "/lp/rally-bar",
  "/lp/videoconferencia",
  "/lp/yealink-videoconferencia",
  "/lp/alocacao-ti",
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
      GET: async () => {
        const origin = SITE_ORIGIN;

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

        const entries: string[] = [...STATIC_PATHS, ...LP_PATHS].map(
          (path) => `  <url><loc>${xmlEscape(origin + path)}</loc></url>`,
        );

        for (const post of posts) {
          const dates = [post.date, post.modified].filter(Boolean) as string[];
          const lastmod = dates
            .map((d) => new Date(d))
            .filter((d) => !Number.isNaN(d.getTime()))
            .sort((a, b) => b.getTime() - a.getTime())[0];
          const loc = xmlEscape(`${origin}/blog/${post.slug}`);
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
