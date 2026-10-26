export const THANK_YOU_SUBJECTS: Readonly<Record<string, string>> = {
  "/servicos/digital-workspace": "Digital Workspace (Service Desk e Field Service)",
  "/servicos/smart-cloud-ops": "Smart Cloud Ops",
  "/servicos/cyber-shield-360": "Cyber Shield 360°",
  "/servicos/infra-core": "Infra Core",
  "/servicos/product-engineering": "Product Engineering",
  "/servicos/inteligencia-artificial": "Inteligência Artificial",
  "/videoconferencia": "videoconferência",
  "/headsets": "headsets corporativos",
  "/produtos/microsoft-365": "Microsoft 365",
  "/produtos/aws": "consultoria AWS",
  "/produtos/firewall": "firewall",
  "/lp/service-desk": "Service Desk",
  "/lp/field-service": "Field Service",
  "/lp/alocacao-ti": "alocação de profissionais de TI",
  "/lp/cabeamento": "cabeamento estruturado",
  "/lp/cabeamento-estruturado": "cabeamento estruturado",
  "/lp/headset-callcenter": "headsets para call center",
  "/lp/headset-callcenter-pago": "headsets para call center",
  "/lp/headset-logitech": "headsets Logitech",
  "/lp/headset-yealink": "headsets Yealink",
  "/lp/headsets-poly": "headsets Poly",
  "/lp/poly-studio": "videoconferência Poly Studio",
  "/lp/rally-bar": "videoconferência Logitech Rally Bar",
  "/lp/videoconferencia": "videoconferência",
  "/lp/videoconferencia-pago": "videoconferência",
  "/lp/yealink-videoconferencia": "videoconferência Yealink",
};

const GENERAL_MESSAGE = "Olá! Acabei de enviar o formulário no site da Allied IT e gostaria de falar com um especialista";

/** Resolve the actual submission URL, including campaign subdomains at their root. */
export function thankYouWhatsappMessage(pageUrl = ""): string {
  let path = "";
  try {
    const url = new URL(pageUrl, "https://alliedit.com.br");
    path = url.pathname.replace(/\/+$/, "") || "/";
    if (path === "/" && url.hostname.endsWith(".alliedit.com.br")) {
      const campaign = url.hostname.slice(0, -".alliedit.com.br".length);
      path = `/lp/${campaign === "headset-poly" ? "headsets-poly" : campaign}`;
    }
  } catch { /* Invalid or missing origins use the general message. */ }
  const subject = THANK_YOU_SUBJECTS[path];
  return subject ? `${GENERAL_MESSAGE} sobre ${subject}.` : `${GENERAL_MESSAGE}.`;
}

export function thankYouWhatsappHref(pageUrl = ""): string {
  return `https://wa.me/5511943319875?text=${encodeURIComponent(thankYouWhatsappMessage(pageUrl))}`;
}