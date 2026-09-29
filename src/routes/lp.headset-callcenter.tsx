import { createFileRoute } from "@tanstack/react-router";
import { headsetCallcenterHead } from "@/lib/lp-heads/headset-callcenter";
import { HeadsetPage } from "@/components/lp-pages/headset-callcenter";

export const Route = createFileRoute("/lp/headset-callcenter")({
  head: headsetCallcenterHead,
  component: HeadsetPage,
});
