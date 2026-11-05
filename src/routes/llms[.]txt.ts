import { createFileRoute } from "@tanstack/react-router";
import body from "@/content/llms.txt?raw";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () =>
        new Response(body, {
          headers: { "content-type": "text/plain; charset=utf-8" },
        }),
    },
  },
});
