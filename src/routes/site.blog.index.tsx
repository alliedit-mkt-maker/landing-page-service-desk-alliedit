import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  fetchCategories,
  fetchPosts,
  featuredImage,
  formatDatePt,
  primaryCategory,
  stripHtml,
  truncate,
  type WpPost,
} from "@/lib/wp";

const TITLE = "Blog Allied IT | Tecnologia e operação de TI para empresas";
const DESC = "Conteúdo sobre tecnologia, operação de TI e tendências para sua empresa.";

export const Route = createFileRoute("/site/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogList,
});

function BlogList() {
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<WpPost[]>([]);

  const categories = useQuery({
    queryKey: ["wp-categories"],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000,
  });

  const posts = useQuery({
    queryKey: ["wp-posts", categoryId, page],
    queryFn: () => fetchPosts({ page, categoryId }),
    staleTime: 60 * 1000,
  });

  useEffect(() => {
    if (!posts.data) return;
    setItems((prev) => (page === 1 ? posts.data.posts : [...prev, ...posts.data.posts]));
  }, [posts.data, page]);

  const selectCategory = (id: number | null) => {
    setCategoryId(id);
    setPage(1);
    setItems([]);
  };

  const hasMore = !!posts.data && page < posts.data.totalPages;
  const loadingFirst = posts.isPending && items.length === 0;

  const pill =
    "font-inter inline-flex h-10 items-center justify-center whitespace-nowrap border px-5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
        <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--site-blue)]">
          Conteúdo
        </p>
        <h1 className="font-chillax mt-3 text-[2rem] font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
          Blog Allied IT
        </h1>
        <p className="font-inter mt-4 max-w-[56ch] text-[15px] leading-relaxed text-[var(--site-muted)] sm:text-base">
          {DESC}
        </p>

        {categories.data && categories.data.length > 0 ? (
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => selectCategory(null)}
              className={`${pill} ${
                categoryId === null
                  ? "border-[var(--site-blue)] bg-[var(--site-blue)] text-white"
                  : "border-[var(--site-line)] text-[var(--site-ink)] hover:border-[var(--site-blue)]"
              }`}
            >
              Todos
            </button>
            {categories.data.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => selectCategory(c.id)}
                className={`${pill} ${
                  categoryId === c.id
                    ? "border-[var(--site-blue)] bg-[var(--site-blue)] text-white"
                    : "border-[var(--site-line)] text-[var(--site-ink)] hover:border-[var(--site-blue)]"
                }`}
              >
                {stripHtml(c.name)}
              </button>
            ))}
          </div>
        ) : null}

        {posts.isError ? (
          <div className="mt-14 border border-[var(--site-line)] bg-[#F7F9FA] p-10 text-center">
            <p className="font-inter text-[15px] text-[var(--site-ink)]">
              Não foi possível carregar os artigos no momento.
            </p>
            <button
              type="button"
              onClick={() => posts.refetch()}
              className={`${pill} mt-6 border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-white`}
            >
              Tentar novamente
            </button>
          </div>
        ) : null}

        {loadingFirst && !posts.isError ? (
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-[var(--site-line)]">
                <div className="h-[200px] animate-pulse bg-[#EDF1F2]" />
                <div className="space-y-3 p-6">
                  <div className="h-3 w-24 animate-pulse bg-[#EDF1F2]" />
                  <div className="h-5 w-full animate-pulse bg-[#EDF1F2]" />
                  <div className="h-4 w-4/5 animate-pulse bg-[#EDF1F2]" />
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {items.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((post) => {
              const img = featuredImage(post);
              const cat = primaryCategory(post);
              return (
                <Link
                  key={post.id}
                  to="/site/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex flex-col border border-[var(--site-line)] bg-white transition-colors hover:border-[var(--site-blue)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EDF1F2]">
                    {img ? (
                      <img
                        src={img}
                        alt={stripHtml(post.title.rendered)}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center bg-[linear-gradient(135deg,#076F8C_0%,#0A0E12_100%)]">
                        <img src="/logo-allied-symbol.png" alt="" className="site-logo-mustard h-12 w-auto opacity-90" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="font-inter flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
                      {cat ? <span className="text-[var(--site-blue)]">{stripHtml(cat)}</span> : null}
                      <span className="text-[var(--site-muted)]">{formatDatePt(post.date)}</span>
                    </div>
                    <h2 className="font-chillax mt-3 text-[19px] font-semibold leading-snug tracking-tight">
                      {stripHtml(post.title.rendered)}
                    </h2>
                    <p className="font-inter mt-3 text-[14px] leading-relaxed text-[var(--site-muted)]">
                      {truncate(stripHtml(post.excerpt.rendered))}
                    </p>
                    <span className="font-inter mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--site-blue)]">
                      Ler artigo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : null}

        {!loadingFirst && !posts.isError && items.length === 0 ? (
          <p className="font-inter mt-14 text-[15px] text-[var(--site-muted)]">
            Nenhum artigo encontrado nesta categoria.
          </p>
        ) : null}

        {hasMore ? (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              disabled={posts.isFetching}
              onClick={() => setPage((p) => p + 1)}
              className={`${pill} border-[var(--site-blue)] text-[var(--site-blue)] hover:bg-[var(--site-blue)] hover:text-white disabled:opacity-50`}
            >
              {posts.isFetching ? "Carregando…" : "Carregar mais"}
            </button>
          </div>
        ) : null}
      </section>

      <SiteFooter />
    </>
  );
}
