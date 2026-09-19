import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import ogImageAsset from "@/assets/og-image.png.asset.json";
import { ASSET_ORIGIN, siteCanonical } from "@/lib/site";
import {
  authorName,
  fetchPostBySlug,
  fetchPostSeo,
  featuredImage,
  formatDatePt,
  lightSanitize,
  normalizeInternalLinks,
  primaryCategory,
  seoDescription,
  seoTitle,
  socialDescription,
  stripHtml,
  truncateAtWord,
  type WpPost,
  type WpPostSeo,
} from "@/lib/wp";

export const Route = createFileRoute("/_site/blog/$slug")({
  headers: () => ({
    "cache-control": "public, s-maxage=600, stale-while-revalidate=86400",
  }),
  loader: async ({ params }) => {
    const [post, seo] = await Promise.all([fetchPostBySlug(params.slug), fetchPostSeo(params.slug)]);
    if (!post) throw notFound();

    return {
      post,
      seo,
      canonical: siteCanonical(`/blog/${params.slug}`),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post, seo, canonical } = loaderData as {
      post: WpPost;
      seo: WpPostSeo;
      canonical: string;
    };

    const plainTitle = stripHtml(post.title.rendered);
    const title = seo.rank_math_title || seoTitle(plainTitle);
    const description =
      seo.rank_math_description ||
      seoDescription(post.excerpt.rendered, post.content?.rendered ?? "");
    const social = seo.rank_math_facebook_description || socialDescription(description);
    const image = featuredImage(post) || `${ASSET_ORIGIN}${ogImageAsset.url}`;
    const published = post.date;
    const modified = post.modified || post.date;
    const category = primaryCategory(post);
    const words = stripHtml(post.content?.rendered ?? "").split(/\s+/).filter(Boolean).length;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: plainTitle,
      description,
      image: [image],
      datePublished: published,
      dateModified: modified,
      author: { "@type": "Person", name: authorName(post) },
      publisher: {
        "@type": "Organization",
        name: "Allied IT",
        logo: { "@type": "ImageObject", url: `${ASSET_ORIGIN}/logo-allied-it.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      ...(category ? { articleSection: stripHtml(category) } : {}),
      wordCount: words,
    };

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: social },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: image },
        { property: "article:published_time", content: published },
        { property: "article:modified_time", content: modified },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: social },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
    };
  },
  component: BlogArticle,
});

function BlogArticle() {
  const { slug } = Route.useParams();
  const loaderData = Route.useLoaderData();

  const post = useQuery({
    queryKey: ["wp-post", slug],
    queryFn: () => fetchPostBySlug(slug),
    initialData: loaderData.post,
    staleTime: 60 * 1000,
  });

  const rawHtml = post.data?.content?.rendered ?? null;

  // Mesmo HTML no servidor e no primeiro render do cliente (sem DOM).
  const baseHtml = useMemo(
    () => (rawHtml ? normalizeInternalLinks(lightSanitize(rawHtml)) : null),
    [rawHtml],
  );
  const [safeHtml, setSafeHtml] = useState<string | null>(baseHtml);

  useEffect(() => {
    let cancelled = false;
    setSafeHtml(baseHtml);
    if (!rawHtml) return;
    // DOMPurify só no navegador, depois da hidratação.
    import("isomorphic-dompurify").then(({ default: DOMPurify }) => {
      if (cancelled) return;
      setSafeHtml(normalizeInternalLinks(DOMPurify.sanitize(rawHtml, { ADD_ATTR: ["target"] })));
    });
    return () => {
      cancelled = true;
    };
  }, [rawHtml, baseHtml]);

  const back = (
    <Link
      to="/blog"
      className="font-inter inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--site-blue)] transition-colors hover:text-[var(--site-blue-dark)]"
    >
      <ArrowLeft className="h-4 w-4" />
      Voltar para o blog
    </Link>
  );

  if (post.isError) {
    return (
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-14 text-center sm:px-8">
        <p className="font-inter text-[15px] text-[var(--site-ink)]">
          Não foi possível carregar este artigo no momento.
        </p>
        <div className="mt-6 flex justify-center">{back}</div>
      </section>
    );
  }

  if (!post.data) {
    return (
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-14 text-center sm:px-8">
        <h1 className="font-chillax text-3xl font-semibold tracking-tight">Artigo não encontrado</h1>
        <p className="font-inter mt-4 text-[15px] text-[var(--site-muted)]">
          O conteúdo que você procura pode ter sido movido ou removido.
        </p>
        <div className="mt-6 flex justify-center">{back}</div>
      </section>
    );
  }

  const article = post.data;
  const img = featuredImage(article);
  const cat = primaryCategory(article);

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8">
        {back}

        {img ? (
          <div className="mt-7 aspect-[16/9] overflow-hidden border border-[var(--site-line)] bg-[#EDF1F2]">
            <img src={img} alt={stripHtml(article.title.rendered)} className="size-full object-cover" />
          </div>
        ) : null}

        <div className="font-inter mt-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
          {cat ? <span className="text-[var(--site-blue)]">{stripHtml(cat)}</span> : null}
          <span className="text-[var(--site-muted)]">{formatDatePt(article.date)}</span>
        </div>

        <h1 className="font-chillax mt-4 text-[1.9rem] font-bold leading-[1.15] tracking-tight sm:text-[2.4rem]">
          {stripHtml(article.title.rendered)}
        </h1>

        {safeHtml ? (
          <div className="site-article mt-9" dangerouslySetInnerHTML={{ __html: safeHtml }} />
        ) : (
          <div className="mt-9 h-4 w-2/3 animate-pulse bg-[#EDF1F2]" />
        )}

        <div className="mt-14 border-t border-[var(--site-line)] pt-8">{back}</div>
      </article>

      <SiteFooter />
    </>
  );
}
