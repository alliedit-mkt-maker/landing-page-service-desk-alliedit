import { createFileRoute } from "@tanstack/react-router";
import { BlogListing } from "@/components/site/BlogListing";
import { loadBlogListing } from "@/lib/blog-listing";
import { pageHead } from "@/lib/seo";
import { stripHtml } from "@/lib/wp";

const DESC =
  "Como diagnosticamos operações de TI, o raciocínio por trás das soluções e o que a tecnologia aplicada muda de verdade.";

export const Route = createFileRoute("/_site/blog/categoria/$category/")({
  headers: () => ({
    "cache-control": "public, s-maxage=300, stale-while-revalidate=86400",
  }),
  loader: ({ params }) => loadBlogListing(1, params.category),
  head: ({ loaderData, params }) => {
    const name = loaderData?.category ? stripHtml(loaderData.category.name) : "Categoria";
    return pageHead({
      title: `${name} | Blog Allied IT`,
      description: DESC,
      path: `/blog/categoria/${params.category}`,
    });
  },
  component: BlogCategory,
});

function BlogCategory() {
  const data = Route.useLoaderData();
  return (
    <BlogListing
      {...data}
      categorySlug={data.category?.slug}
      categoryName={data.category ? stripHtml(data.category.name) : undefined}
    />
  );
}