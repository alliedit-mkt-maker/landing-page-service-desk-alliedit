import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  authorName,
  fetchCategories,
  fetchPosts,
  featuredImage,
  formatDateShortPt,
  primaryCategory,
  readingTime,
  stripHtml,
  truncate,
  type WpPost,
} from "@/lib/wp";

const TITLE = "Blog Allied IT | Tecnologia e operação de TI para empresas";
const DESC =
  "Como diagnosticamos operações de TI, o raciocínio por trás das soluções, e o que a tecnologia aplicada realmente muda.";

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

const DOTS =
  "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)";

function BlogList() {
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  const categories = useQuery({
    queryKey: ["wp-categories"],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000,
  });

  // Uma requisição por página/categoria; o resultado acumulado é sempre
  // deduplicado por ID do artigo.
  const pageQueries = useQuery({
    queryKey: ["wp-posts", categoryId, page],
    queryFn: () => fetchPosts({ page, categoryId }),
    staleTime: 60 * 1000,
  });

  const [pages, setPages] = useState<Record<number, WpPost[]>>({});

  useEffect(() => {
    const posts = pageQueries.data?.posts;
    if (!posts) return;
    setPages((prev) => (prev[page] === posts ? prev : { ...prev, [page]: posts }));
  }, [pageQueries.data, page]);

  const items = useMemo(() => {
    const byId = new Map<number, WpPost>();
    Object.keys(pages)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach((p) => pages[p]?.forEach((post) => byId.set(post.id, post)));
    // Além do ID, evita repetir artigos com o mesmo título (duplicatas no WP).
    const seenTitles = new Set<string>();
    return [...byId.values()].filter((post) => {
      const key = stripHtml(post.title.rendered).toLowerCase();
      if (seenTitles.has(key)) return false;
      seenTitles.add(key);
      return true;
    });
  }, [pages]);

  const selectCategory = (id: number | null) => {
    if (id === categoryId) return;
    setCategoryId(id);
    setPage(1);
    setPages({});
  };

  const hasMore = !!pageQueries.data && page < pageQueries.data.totalPages;
  const loadingFirst = pageQueries.isPending && items.length === 0;

  const pill =
    "font-inter inline-flex h-10 items-center justify-center whitespace-nowrap border px-5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

  return (
    <div className="bg-[#0A0E12]">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: DOTS, backgroundSize: "22px 22px", opacity: 0.5 }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 70% at 50% 0%, rgba(4,110,139,0.28) 0%, rgba(10,14,18,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-16 text-center sm:px-8 sm:pt-24">
          <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4A017]">
            O blog
          </p>
          <h1 className="font-chillax mx-auto mt-4 max-w-[26ch] text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.75rem]">
            Conteúdo direto ao ponto sobre TI e operação.
          </h1>
          <p className="font-inter mx-auto mt-5 max-w-[62ch] text-[15px] leading-relaxed text-white/60 sm:text-base">
            Como diagnosticamos operações de TI, o raciocínio por trás das soluções, e o que a
            tecnologia aplicada realmente muda, escrito para gestores e times técnicos. Sem
            enrolação.
          </p>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: DOTS, backgroundSize: "22px 22px", opacity: 0.28 }}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4A017]">
            Navegue por categoria
          </p>
          <h2 className="font-chillax mt-3 text-[1.4rem] font-semibold leading-tight tracking-tight text-white sm:text-[1.75rem]">
            Escolha um tema e veja todo o arquivo.
          </h2>

          <div className="-mx-5 mt-7 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            <button
              type="button"
              onClick={() => selectCategory(null)}
              className={`${pill} ${
                categoryId === null
                  ? "border-[var(--site-blue)] bg-[var(--site-blue)] text-white"
                  : "border-white/20 text-white/75 hover:border-white/60 hover:text-white"
              }`}
            >
              Todos
            </button>
            {categories.data?.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => selectCategory(c.id)}
                className={`${pill} ${
                  categoryId === c.id
                    ? "border-[var(--site-blue)] bg-[var(--site-blue)] text-white"
                    : "border-white/20 text-white/75 hover:border-white/60 hover:text-white"
                }`}
              >
                {stripHtml(c.name)} ({c.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: DOTS, backgroundSize: "22px 22px", opacity: 0.22 }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
          {pageQueries.isError ? (
            <div className="border border-white/15 bg-white/[0.04] p-10 text-center">
              <p className="font-inter text-[15px] text-white/80">
                Não foi possível carregar os artigos no momento.
              </p>
              <button
                type="button"
                onClick={() => pageQueries.refetch()}
                className={`${pill} mt-6 border-white/30 text-white hover:border-white`}
              >
                Tentar novamente
              </button>
            </div>
          ) : null}

          {loadingFirst && !pageQueries.isError ? (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border border-white/10 bg-white/[0.04]">
                  <div className="h-[200px] animate-pulse bg-white/[0.06]" />
                  <div className="space-y-3 p-6">
                    <div className="h-3 w-24 animate-pulse bg-white/[0.06]" />
                    <div className="h-5 w-full animate-pulse bg-white/[0.06]" />
                    <div className="h-4 w-4/5 animate-pulse bg-white/[0.06]" />
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {items.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((post) => {
                const img = featuredImage(post);
                const cat = primaryCategory(post);
                return (
                  <Link
                    key={post.id}
                    to="/site/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group flex flex-col border border-white/12 bg-white/[0.05] transition-colors hover:border-white/35"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#111820]">
                      {img ? (
                        <img
                          src={img}
                          alt={stripHtml(post.title.rendered)}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center bg-[linear-gradient(135deg,#076F8C_0%,#0A0E12_100%)]">
                          <img
                            src="/logo-allied-symbol.png"
                            alt=""
                            className="site-logo-mustard h-12 w-auto opacity-90"
                          />
                        </div>
                      )}
                      {cat ? (
                        <span className="font-inter absolute left-3 top-3 bg-[var(--site-blue)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                          {stripHtml(cat)}
                        </span>
                      ) : null}
                      <span className="font-inter absolute right-3 top-3 bg-black/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                        {readingTime(post)} min
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-chillax text-[19px] font-semibold leading-snug tracking-tight text-white">
                        {stripHtml(post.title.rendered)}
                      </h2>
                      <p className="font-inter mt-3 text-[14px] leading-relaxed text-white/60">
                        {truncate(stripHtml(post.excerpt.rendered), 150)}
                      </p>
                      <div className="font-inter mt-auto flex items-end justify-between gap-3 pt-6 text-[11px] uppercase tracking-[0.14em] text-white/45">
                        <span>
                          {authorName(post)}
                          <span className="mx-2 text-white/25">|</span>
                          {formatDateShortPt(post.date)}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-[#D4A017] transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : null}

          {!loadingFirst && !pageQueries.isError && items.length === 0 ? (
            <p className="font-inter text-[15px] text-white/60">
              Nenhum artigo encontrado nesta categoria.
            </p>
          ) : null}

          {hasMore ? (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                disabled={pageQueries.isFetching}
                onClick={() => setPage((p) => p + 1)}
                className={`${pill} border-white/30 text-white hover:border-white disabled:opacity-50`}
              >
                {pageQueries.isFetching ? "Carregando…" : "Carregar mais"}
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
