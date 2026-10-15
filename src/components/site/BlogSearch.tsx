import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WpPost } from "@/lib/wp";

export type BlogSearchResult = { term: string; posts: WpPost[]; loading: boolean; error: boolean };
const searchModule = () => import("@/lib/blog-search");

export function BlogSearch({ onResults }: { onResults: (result: BlogSearchResult | null) => void }) {
  const [value, setValue] = useState("");
  const lastTracked = useRef<string | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const term = value.trim();

  function trackSearch() {
    if (term.length < 2 || lastTracked.current === term) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "blog_search", search_term: term });
    lastTracked.current = term;
  }

  useEffect(() => {
    if (term.length < 2) {
      onResults(null);
      lastTracked.current = null;
      return;
    }
    let cancelled = false;
    onResults({ term, posts: [], loading: true, error: false });
    const timer = setTimeout(async () => {
      try {
        const module = await searchModule();
        const index = await module.loadSearchIndex();
        if (!cancelled) onResults({ term, posts: module.searchArticles(index, term), loading: false, error: false });
      } catch {
        if (!cancelled) onResults({ term, posts: [], loading: false, error: true });
      }
    }, 250);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [term, onResults]);

  useEffect(() => {
    const timer = setTimeout(trackSearch, 800);
    return () => clearTimeout(timer);
  }, [term]);

  function clear() {
    setValue("");
    input.current?.focus();
  }

  return (
    <div className="blog-search mx-auto max-w-7xl px-5 pb-12 sm:px-8">
      <form role="search" onSubmit={(event) => { event.preventDefault(); trackSearch(); }}>
        <label htmlFor="blog-search" className="font-inter mb-3 block text-base text-brand-foreground">
          Buscar artigos por nome ou assunto
        </label>
        <div className="blog-search-field flex min-h-14 items-center gap-3 border px-4 focus-within:border-[var(--blog-search-accent)]">
          <Search aria-hidden="true" className="size-5 shrink-0 text-[var(--blog-search-accent)]" />
          <input ref={input} id="blog-search" type="search" value={value}
            onChange={(event) => setValue(event.target.value)}
            onFocus={() => { void searchModule().then((module) => module.loadSearchIndex()).catch(() => undefined); }}
            onKeyDown={(event) => { if (event.key === "Escape") { event.preventDefault(); clear(); } }}
            autoComplete="off" className="font-inter min-w-0 flex-1 bg-transparent py-3 text-base text-brand-foreground outline-none" />
          {value ? <Button type="button" variant="ghost" size="icon" onClick={clear}
            aria-label="Limpar busca" title="Limpar busca" className="size-11 rounded-none text-brand-foreground">
            <X aria-hidden="true" />
          </Button> : null}
        </div>
      </form>
    </div>
  );
}