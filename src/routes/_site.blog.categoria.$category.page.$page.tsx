import { createFileRoute, redirect } from "@tanstack/react-router";
import { BlogListing } from "@/components/site/BlogListing";
import { loadBlogListing } from "@/lib/blog-listing";
import { pageHead } from "@/lib/seo";
import { stripHtml } from "@/lib/wp";

const DESC =
  "Como diagnosticamos operações de TI, o raciocínio por trás das soluções e o que a tecnologia aplicada muda de verdade.";

export const Route = createFileRoute("/_site/blog/categoria/$category/page/$page")({
  headers: () => ({
    "cache-control": "public, s-maxage=300, stale-while-revalidate=86400",
  }),
  beforeLoad: ({ params }) => {
    if (params.page === "1") {
      throw redirect({ href: `/blog/categoria/${params.category}`, statusCode: 301 });
    }
  },
  loader: ({ params }) => loadBlogListing(Number(params.page), params.category),
  head: ({ loaderData, params }) => {
    const name = loaderData?.category ? stripHtml(loaderData.category.name) : "Categoria";
    const page = Number(params.page);
    return pageHead({
      title: `${name} | Blog Allied IT – Página ${page}`,
      description: DESC,
      path: `/blog/categoria/${params.category}/page/${page}`,
    });
  },
  component: BlogCategoryPage,
});

function BlogCategoryPage() {
  const data = Route.useLoaderData();
  return (
    <BlogListing
      {...data}
      categorySlug={data.category?.slug}
      categoryName={data.category ? stripHtml(data.category.name) : undefined}
    />
  );
}