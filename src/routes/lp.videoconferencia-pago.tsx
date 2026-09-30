import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/lp/videoconferencia-pago")({
  beforeLoad: ({ location }) => {
    throw redirect({ href: "/videoconferencia" + (location.searchStr ?? ""), statusCode: 301 });
  },
});
