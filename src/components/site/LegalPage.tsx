import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/SiteFooter";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
        <h1 className="font-chillax text-4xl font-semibold tracking-tight text-[var(--site-ink)] sm:text-5xl">
          {title}
        </h1>
        <div className="site-article mt-10">{children}</div>
      </section>
      <SiteFooter />
    </>
  );
}
