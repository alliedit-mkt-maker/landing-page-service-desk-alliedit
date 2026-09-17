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
// Registro de cliques (real, gravado no banco da Lovable Cloud)
// ---------------------------------------------------------------------------

export function recordClick(linkId: BioLink["id"]) {
  // grava no banco sem bloquear a navegação
  void (async () => {
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      await supabase.from("bio_link_clicks").insert({
        link_id: linkId,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
      });
    } catch {
      // não interrompe o clique se o registro falhar
    }
  })();

  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event: "bio_link_click", link_id: linkId });
}

