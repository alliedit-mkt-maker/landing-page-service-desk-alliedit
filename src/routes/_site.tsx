import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteNavbar } from "@/components/site/SiteNavbar";

export const Route = createFileRoute("/_site")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
    links: [
      { rel: "preconnect", href: "https://api.fontshare.com" },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=chillax@400,500,600,700&display=swap",
      },
    ],
  }),
  component: SiteLayout,
});

function SiteLayout() {
  return (
    <div className="site-scope min-h-screen bg-white text-[var(--site-ink)]">
      <SiteNavbar />
      <main className="pt-[72px]">
        <Outlet />
      </main>
    </div>
  );
}
