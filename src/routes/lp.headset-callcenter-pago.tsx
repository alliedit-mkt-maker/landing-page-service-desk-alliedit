import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/lp/headset-callcenter-pago")({
  beforeLoad: ({ location }) => {
    throw redirect({ href: "/headsets" + (location.searchStr ?? ""), statusCode: 301 });
  },
});
