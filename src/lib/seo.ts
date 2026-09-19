import ogImage from "@/assets/og-image.png.asset.json";
import { ASSET_ORIGIN, siteCanonical } from "@/lib/site";

export const BRAND = "Allied IT";

export function ogImageUrl(): string {
  return `${ASSET_ORIGIN}${ogImage.url}`;
}

export function pageHead(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
}) {
  const url = siteCanonical(opts.path);
  const image = ogImageUrl();

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      ...(opts.noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: BRAND },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
