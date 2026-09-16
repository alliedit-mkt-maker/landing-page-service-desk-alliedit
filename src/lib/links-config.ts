// ============================================================================
// CONFIGURAÇÃO DA PÁGINA DE LINKS (Linktree Allied IT)
// Troque os valores marcados como PLACEHOLDER quando os links definitivos
// estiverem prontos. Este é o único arquivo que precisa ser editado.
// ============================================================================

export type BioLink = {
  id: "site" | "atendimento" | "linkedin" | "tiktok";
  label: string;
  url: string;
  icon: "globe" | "whatsapp" | "linkedin" | "tiktok";
  /** true = ainda é placeholder, aguardando o link definitivo */
  placeholder: boolean;
};

/** Número de WhatsApp no formato internacional, só dígitos (mesmo das landing pages). */
export const WHATSAPP_NUMBER = "5511943319875";

/** Mensagem de pré-envio do WhatsApp. */
export const WHATSAPP_MESSAGE =
  "Olá, Allied IT! 👋 Quero conhecer melhor as soluções de TI de vocês. Podem me ajudar?";

export const BIO_LINKS: BioLink[] = [
  {
    id: "site",
    label: "Acesse nosso site",
    url: "https://alliedit.com.br/",
    icon: "globe",
    placeholder: false,
  },
  {
    id: "atendimento",
    label: "Fale com a gente no WhatsApp",
    url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    icon: "whatsapp",
    placeholder: false,
  },
  {
    id: "linkedin",
    label: "Siga a gente no LinkedIn",
    url: "https://www.linkedin.com/company/alliedit/",
    icon: "linkedin",
    placeholder: false,
  },
  {
    id: "tiktok",
    label: "Confira nosso TikTok",
    url: "https://www.tiktok.com/@allied_it?_r=1&_t=ZS-99mdhytBm66",
    icon: "tiktok",
    placeholder: false,
  },
];

export const BIO_PROFILE = {
  name: "Allied IT",
  bio: "A inteligência aliada à eficiência",
};

// ---------------------------------------------------------------------------
// Registro de cliques (temporário, apenas no navegador)
// Quando o banco da Lovable Cloud for ativado, substituir por uma chamada de
// server function que grave { linkId, timestamp } em uma tabela.
// ---------------------------------------------------------------------------

export type ClickEvent = { linkId: BioLink["id"]; ts: number };

const STORAGE_KEY = "allied_bio_clicks";

export function recordClick(linkId: BioLink["id"]) {
  const event: ClickEvent = { linkId, ts: Date.now() };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const list: ClickEvent[] = raw ? JSON.parse(raw) : [];
    list.push(event);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(-2000)));
  } catch {
    // ignora falhas de storage (modo privado etc.)
  }
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event: "bio_link_click", link_id: linkId });
}

export function readClicks(): ClickEvent[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ClickEvent[]) : [];
  } catch {
    return [];
  }
}
