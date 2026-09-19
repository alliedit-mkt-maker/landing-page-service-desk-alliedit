import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

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
  component: SiteRouteLayout,
});

function SiteRouteLayout() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
