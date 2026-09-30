import { pageHead } from "@/lib/seo";
export const social = "Ferramenta interna da equipe Allied IT.";

export const assinaturasMeta = {
  title: "Gerador de assinatura de e-mail | Allied IT",
  description:
    "Ferramenta interna da Allied IT: preencha seus dados, monte a assinatura padronizada e copie para o Outlook ou Gmail.",
};

export const assinaturasHead = () =>
  pageHead({
    title: assinaturasMeta.title,
    description: assinaturasMeta.description,
    path: "/assinaturas",
    social,
    noindex: true,
  });
