// Origem pública e regra de canonical das landing pages.
// LP_ON_ROOT_DOMAIN vira true no dia da virada do domínio, junto com a troca da URL final dos anúncios.
// Ele governa também a origem do site institucional (SITE_ORIGIN) e a origem dos assets
// absolutos usados em og:image (ASSET_ORIGIN), então a virada continua sendo trocar UMA constante.
export const PUBLIC_ORIGIN = "https://alliedit.com.br";
export const LP_ON_ROOT_DOMAIN = false;

export const SITE_ORIGIN = LP_ON_ROOT_DOMAIN ? PUBLIC_ORIGIN : "https://lp-sd-alliedit.lovable.app";
export const ASSET_ORIGIN = LP_ON_ROOT_DOMAIN
  ? PUBLIC_ORIGIN
  : "https://service-desk.alliedit.com.br";

export function lpCanonical(nome: string, subdominio: string): string {
  return LP_ON_ROOT_DOMAIN ? `${PUBLIC_ORIGIN}/lp/${nome}` : `https://${subdominio}/`;
}

export function siteCanonical(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}
