import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  fetchPostBySlug,
  featuredImage,
  formatDatePt,
  primaryCategory,
  stripHtml,
} from "@/lib/wp";

export const Route = createFileRoute("/site/blog/$slug")({
  head: () => ({
    meta: [
      { title: "Artigo | Blog Allied IT" },
      { name: "description", content: "Artigo do blog da Allied IT sobre tecnologia e operação de TI." },
      { property: "og:title", content: "Artigo | Blog Allied IT" },
      {
        property: "og:description",
        content: "Artigo do blog da Allied IT sobre tecnologia e operação de TI.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogArticle,
});

function BlogArticle() {
  const { slug } = Route.useParams();

  const post = useQuery({
    queryKey: ["wp-post", slug],
    queryFn: () => fetchPostBySlug(slug),
    staleTime: 60 * 1000,
  });

  const [safeHtml, setSafeHtml] = useState<string | null>(null);
  useEffect(() => {
    const raw = post.data?.content?.rendered;
    if (!raw) {
      setSafeHtml(null);
      return;
    }
    let alive = true;
    void import("dompurify").then((mod) => {
      if (!alive) return;
      setSafeHtml(mod.default.sanitize(raw, { ADD_ATTR: ["target"] }));
    });
    return () => {
      alive = false;
    };
  }, [post.data]);

  const back = (
    <Link
      to="/site/blog"
      className="font-inter inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--site-blue)] transition-colors hover:text-[var(--site-blue-dark)]"
    >
      <ArrowLeft className="h-4 w-4" />
      Voltar para o blog
    </Link>
  );

  if (post.isPending) {
    return (
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-14 sm:px-8">
        <div className="h-[280px] animate-pulse bg-[#EDF1F2]" />
        <div className="mt-8 space-y-4">
          <div className="h-3 w-32 animate-pulse bg-[#EDF1F2]" />
          <div className="h-8 w-4/5 animate-pulse bg-[#EDF1F2]" />
          <div className="h-4 w-full animate-pulse bg-[#EDF1F2]" />
          <div className="h-4 w-11/12 animate-pulse bg-[#EDF1F2]" />
        </div>
      </section>
    );
  }

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
