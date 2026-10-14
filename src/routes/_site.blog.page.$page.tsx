import { createFileRoute, redirect } from "@tanstack/react-router";
import { BlogListing } from "@/components/site/BlogListing";
import { loadBlogListing } from "@/lib/blog-listing";
import { pageHead } from "@/lib/seo";

const DESC =
  "Como diagnosticamos operações de TI, o raciocínio por trás das soluções e o que a tecnologia aplicada muda de verdade.";

export const Route = createFileRoute("/_site/blog/page/$page")({
  headers: () => ({
    "cache-control": "public, s-maxage=300, stale-while-revalidate=86400",
  }),
  beforeLoad: ({ params }) => {
    if (params.page === "1") throw redirect({ href: "/blog", statusCode: 301 });
  },
  loader: ({ params }) => loadBlogListing(Number(params.page)),
  head: ({ params }) => {
    const page = Number(params.page);
    return pageHead({
      title: `Blog Allied IT – Página ${page}`,
      description: DESC,
      path: `/blog/page/${page}`,
    });
  },
  component: BlogPage,
});

function BlogPage() {
  const data = Route.useLoaderData();
  return <BlogListing {...data} />;
}