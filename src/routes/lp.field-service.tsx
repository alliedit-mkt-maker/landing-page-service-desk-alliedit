import { createFileRoute } from "@tanstack/react-router";
import { FieldServicePage } from "@/components/lp-pages/field-service";
import { PUBLIC_ORIGIN } from "@/lib/site";

const title = "Field Service e manutenção de TI multi-unidade | AlliedIT";
const description =
  "Manutenção e suporte de TI presencial em todas as suas unidades. Técnicos por região, SLA por unidade, custo proporcional ao uso. Fale com especialista.";
const social = "Manutenção e suporte de TI presencial nas suas unidades. SLA medido, custo pelo uso.";
const url = `${PUBLIC_ORIGIN}/lp/field-service`;

export const Route = createFileRoute("/lp/field-service")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: social },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: social },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: FieldServicePage,
});
