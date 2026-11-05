import { parseFragment, type DefaultTreeAdapterMap } from "parse5";

type Node = DefaultTreeAdapterMap["node"];
type Element = DefaultTreeAdapterMap["element"];
export type BlogFaq = { question: string; answer: string };

function isElement(node: Node): node is Element {
  return "tagName" in node;
}

function hidden(node: Element): boolean {
  return ["script", "style", "template", "noscript", "nav"].includes(node.tagName) ||
    node.attrs.some(attr => attr.name === "hidden" || (attr.name === "aria-hidden" && attr.value === "true") ||
      (attr.name === "style" && /(?:display\s*:\s*none|visibility\s*:\s*hidden)/i.test(attr.value)));
}

function text(node: Node, skipSummary = false): string {
  if (node.nodeName === "#text" && "value" in node) return node.value;
  if (!isElement(node)) return "";
  if (hidden(node) || (skipSummary && node.tagName === "summary")) return "";
  const content = node.childNodes.map(child => text(child, skipSummary)).join("");
  return /^(?:p|div|li|ul|ol|br|h[1-6]|details|summary)$/.test(node.tagName) ? ` ${content} ` : content;
}

function clean(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/** Read the visible FAQ section, never the CMS's scripts or table of contents. */
export function extractBlogFaq(html: string): BlogFaq[] {
  const fragment = parseFragment(html);
  const blocks: Element[] = [];
  const walk = (nodes: Node[]) => {
    for (const node of nodes) {
      if (!isElement(node) || hidden(node)) continue;
      if (/^h[1-6]$/.test(node.tagName) || ["details", "p", "ul", "ol"].includes(node.tagName)) blocks.push(node);
      else walk(node.childNodes);
    }
  };
  walk(fragment.childNodes);
  const start = blocks.findIndex(node => /^h[1-6]$/.test(node.tagName) &&
    /perguntas frequentes/i.test(clean(text(node)).normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
  const heading = blocks[start];
  if (!heading) return [];
  const level = Number(heading.tagName.slice(1));
  const faq: BlogFaq[] = [];
  let question = "";
  let answers: string[] = [];
  const flush = () => {
    const answer = clean(answers.join(" "));
    if (question && answer) faq.push({ question, answer });
    question = ""; answers = [];
  };
  for (const block of blocks.slice(start + 1)) {
    if (block.tagName === "details") {
      flush();
      const summary = block.childNodes.find(node => isElement(node) && node.tagName === "summary");
      const q = summary ? clean(text(summary)) : "";
      const a = clean(text(block, true));
      if (q && a) faq.push({ question: q, answer: a });
    } else if (/^h[1-6]$/.test(block.tagName)) {
      const value = clean(text(block));
      if (Number(block.tagName.slice(1)) <= level && !value.endsWith("?")) break;
      flush(); question = value;
    } else if (question) answers.push(text(block));
  }
  flush();
  return faq.filter((item, index) => faq.findIndex(other => other.question === item.question) === index);
}

export function blogBreadcrumb(title: string, canonical: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://alliedit.com.br/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://alliedit.com.br/blog" },
      { "@type": "ListItem", position: 3, name: title, item: canonical },
    ],
  };
}

export function blogFaqSchema(html: string, canonical: string) {
  const faq = extractBlogFaq(html);
  return faq.length ? {
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question", name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  } : null;
}