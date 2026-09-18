// Origem pública e regra de canonical das landing pages.
// LP_ON_ROOT_DOMAIN vira true no dia da virada do domínio, junto com a troca da URL final dos anúncios.
export const PUBLIC_ORIGIN = "https://alliedit.com.br";
export const LP_ON_ROOT_DOMAIN = false;

export function lpCanonical(nome: string, subdominio: string): string {
  return LP_ON_ROOT_DOMAIN ? `${PUBLIC_ORIGIN}/lp/${nome}` : `https://${subdominio}/`;
}
