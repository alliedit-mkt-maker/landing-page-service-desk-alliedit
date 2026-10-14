import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  authorName,
  featuredImage,
  formatDateShortPt,
  primaryCategory,
  readingTime,
  stripHtml,
  truncate,
  type WpCategory,
  type WpPost,
} from "@/lib/wp";

const DOTS = "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)";

const PILL =
  "font-inter inline-flex h-10 items-center justify-center whitespace-nowrap border px-5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

function pageHref(categorySlug: string | null, page: number): string {
  if (categorySlug) {
    return page === 1
      ? `/blog/categoria/${categorySlug}`
      : `/blog/categoria/${categorySlug}/page/${page}`;
  }
  return page === 1 ? "/blog" : `/blog/page/${page}`;
}

function visiblePages(page: number, totalPages: number): number[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  const candidates = new Set([1, totalPages, page - 1, page, page + 1]);
  return [...candidates].filter((value) => value >= 1 && value <= totalPages).sort((a, b) => a - b);
}

export function BlogListing({
  posts,
  categories,
  page,
  totalPages,
  categorySlug = null,
  categoryName,
}: {
  posts: WpPost[];
  categories: WpCategory[];
  page: number;
  totalPages: number;
  categorySlug?: string | null;
  categoryName?: string;
}) {
  const pages = visiblePages(page, totalPages);

  return (
    <div className="-mt-[72px] bg-[#0A0E12]">
      <section className="relative overflow-hidden pt-[72px]">
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
            Allied Blog IT
          </p>
          <h1 className="font-chillax mx-auto mt-4 max-w-[26ch] text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.75rem]">
            {categoryName ? (
              categoryName
            ) : (
              <>
                Conteúdo direto ao ponto
                <br />
                sobre TI e operação.
              </>
            )}
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

          <nav
            aria-label="Categorias do blog"
            className="-mx-5 mt-7 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
          >
            <a
              href="/blog"
              aria-current={categorySlug === null ? "page" : undefined}
              className={`${PILL} ${
                categorySlug === null
                  ? "border-[var(--site-blue)] bg-[var(--site-blue)] text-white"
                  : "border-white/20 text-white/75 hover:border-white/60 hover:text-white"
              }`}
            >
              Todos
            </a>
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/blog/categoria/${category.slug}`}
                aria-current={categorySlug === category.slug ? "page" : undefined}
                className={`${PILL} ${
                  categorySlug === category.slug
                    ? "border-[var(--site-blue)] bg-[var(--site-blue)] text-white"
                    : "border-white/20 text-white/75 hover:border-white/60 hover:text-white"
                }`}
              >
                {stripHtml(category.name)} ({category.count})
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: DOTS, backgroundSize: "22px 22px", opacity: 0.22 }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const img = featuredImage(post);
                const category = primaryCategory(post);
                return (
                  <Link
                    key={post.id}
                    to="/blog/$slug"
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
                      {category ? (
                        <span className="font-inter absolute left-3 top-3 bg-[var(--site-blue)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                          {stripHtml(category)}
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
          ) : (
            <p className="font-inter text-[15px] text-white/60">
              Nenhum artigo encontrado nesta categoria.
            </p>
          )}

          {totalPages > 1 ? (
            <nav aria-label="Paginação do blog" className="mt-12 flex flex-wrap justify-center gap-2">
              {page > 1 ? (
                <a href={pageHref(categorySlug, page - 1)} className={`${PILL} border-white/30 text-white hover:border-white`}>
                  Anterior
                </a>
              ) : null}
              {pages.map((number, index) => {
                const previous = pages[index - 1];
                return (
                  <span key={number} className="contents">
                    {previous && number - previous > 1 ? (
                      <span className="font-inter inline-flex h-10 items-center px-2 text-white/45">…</span>
                    ) : null}
                    <a
                      href={pageHref(categorySlug, number)}
                      aria-current={number === page ? "page" : undefined}
                      aria-label={`Página ${number}`}
                      className={`${PILL} min-w-10 px-3 ${
                        number === page
                          ? "border-[var(--site-blue)] bg-[var(--site-blue)] text-white"
                          : "border-white/30 text-white hover:border-white"
                      }`}
                    >
                      {number}
                    </a>
                  </span>
                );
              })}
              {page < totalPages ? (
                <a href={pageHref(categorySlug, page + 1)} className={`${PILL} border-white/30 text-white hover:border-white`}>
                  Próxima
                </a>
              ) : null}
            </nav>
          ) : null}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}