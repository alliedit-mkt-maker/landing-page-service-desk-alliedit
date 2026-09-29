import { createFileRoute } from "@tanstack/react-router";
import { headsetLogitechHead } from "@/lib/lp-heads/headset-logitech";
import { LogitechPage } from "@/components/lp-pages/headset-logitech";

export const Route = createFileRoute("/lp/headset-logitech")({
  head: headsetLogitechHead,
  component: LogitechPage,
});
