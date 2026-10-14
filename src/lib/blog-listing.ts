import { notFound } from "@tanstack/react-router";
import { dedupeByTitle, fetchCategories, fetchPosts, slimPost } from "@/lib/wp";

export const BLOG_CATEGORY_SLUGS = [
  "ti",
  "seguranca",
  "suporte-tecnico",
  "transformacao-digital",
  "governanca-de-ti",
  "empresa",
  "otimizacao",
  "infraestrutura-de-ti",
  "allied-it",
  "cloud",
] as const;

export async function loadBlogListing(page: number, categorySlug?: string) {
  if (!Number.isInteger(page) || page < 1) throw notFound();

  const categories = await fetchCategories();
  const visibleCategories = categories.filter((category) =>
    BLOG_CATEGORY_SLUGS.includes(category.slug as (typeof BLOG_CATEGORY_SLUGS)[number]),
  );
  const category = categorySlug
    ? visibleCategories.find((item) => item.slug === categorySlug)
    : undefined;

  if (categorySlug && !category) throw notFound();

  try {
    const result = await fetchPosts({ page, categoryId: category?.id ?? null });
    if (page > result.totalPages) throw notFound();
    return {
      posts: dedupeByTitle(result.posts).map(slimPost),
      totalPages: result.totalPages,
      categories: visibleCategories,
      category: category ?? null,
      page,
    };
  } catch (error) {
    if (error && typeof error === "object" && "isNotFound" in error) throw error;
    const status = error instanceof Error ? /respondeu 400/.test(error.message) : false;
    if (status) throw notFound();
    throw error;
  }
}