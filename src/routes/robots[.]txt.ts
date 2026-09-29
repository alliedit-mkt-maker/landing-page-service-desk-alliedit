import { createFileRoute } from "@tanstack/react-router";
import { LP_ON_ROOT_DOMAIN, PUBLIC_ORIGIN } from "@/lib/site";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const host = new URL(request.url).hostname.toLowerCase();
        const origin = LP_ON_ROOT_DOMAIN ? PUBLIC_ORIGIN : `https://${host}`;
        const body = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
        return new Response(body, {
          headers: { "content-type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});
