import type { ReactNode } from "react";
import { SiteNavbar } from "@/components/site/SiteNavbar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-scope min-h-screen bg-white text-[var(--site-ink)]">
      <SiteNavbar />
      <main className="pt-[72px]">{children}</main>
    </div>
  );
}
