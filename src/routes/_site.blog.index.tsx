import { createFileRoute } from "@tanstack/react-router";
import { BlogListing } from "@/components/site/BlogListing";
import { loadBlogListing } from "@/lib/blog-listing";
import { pageHead } from "@/lib/seo";
import { siteCanonical } from "@/lib/site";

const TITLE = "Blog Allied IT | Tecnologia e operação de TI para empresas";
const DESC =
  "Como diagnosticamos operações de TI, o raciocínio por trás das soluções e o que a tecnologia aplicada muda de verdade.";

export const Route = createFileRoute("/_site/blog/")({
  headers: () => ({
    "cache-control": "public, s-maxage=300, stale-while-revalidate=86400",
  }),
  loader: () => loadBlogListing(1),
  head: () => {
    const canonical = siteCanonical("/blog");
    const base = pageHead({
      social: "Diagnóstico, raciocínio e prática de quem cuida de TI todo dia.",
      title: TITLE,
      description: DESC,
      path: "/blog",
    });
    return {
      meta: base.meta,
      links: base.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Allied IT",
            description: DESC,
            url: canonical,
            publisher: { "@id": "https://alliedit.com.br/#organization" },
          }),
        },
      ],
    };
  },
  component: BlogIndex,
});

function BlogIndex() {
  const data = Route.useLoaderData();
  return <BlogListing {...data} searchEnabled />;
}