/** Regras compartilhadas (navegador e servidor) do pop-up de candidatura "Trabalhe Conosco". */

/** Interruptor público: quando true, o link "Trabalhe Conosco" do rodapé abre o pop-up. */
export const careersPopupEnabled = false;

/** Parâmetro de teste na visualização: ?candidatura=teste abre o pop-up em qualquer página com rodapé. */
export const CAREERS_TEST_PARAM = "candidatura";
export const CAREERS_TEST_VALUE = "teste";

export const CAREERS_EMAIL = "vagas@alliedit.com.br";
export const CAREERS_ENDPOINT = "/api/public/candidatura";

export const CAREER_AREAS = [
  "Service Desk / Suporte",
  "Field Service",
  "Infraestrutura e Redes",
  "Cloud",
  "Segurança da Informação",
  "Desenvolvimento",
  "Comercial",
  "Administrativo",
  "Outra",
] as const;

export const MAX_FILE_BYTES = 5 * 1024 * 1024;
export const MAX_ABOUT_CHARS = 1000;
export const ALLOWED_EXT = ["pdf", "doc", "docx"] as const;

export type CareerFields = {
  nome: string;
  email: string;
  whatsapp: string;
  area: string;
  sobre: string;
  aceite: boolean;
};

export type CareerErrors = Partial<Record<keyof CareerFields | "curriculo", string>>;

export function fileExt(name: string): string {
  const m = /\.([a-z0-9]+)$/i.exec(name || "");
  return m ? m[1]!.toLowerCase() : "";
}

export function validateFile(file: { name: string; size: number } | null | undefined): string | undefined {
  if (!file || !file.size) return "Anexe o seu currículo.";
  if (!(ALLOWED_EXT as readonly string[]).includes(fileExt(file.name))) return "Envie o currículo em PDF, DOC ou DOCX.";
  if (file.size > MAX_FILE_BYTES) return "O arquivo deve ter no máximo 5 MB.";
  return undefined;
}

export function careerDigits(v: string): string {
  let d = (v || "").replace(/\D+/g, "");
  if (d.length > 11 && d.startsWith("55")) d = d.slice(2);
  return d.slice(0, 11);
}

export function validateCareer(f: CareerFields): CareerErrors {
  const e: CareerErrors = {};
  const nome = f.nome.trim();
  if (nome.length < 3) e.nome = "Informe o seu nome completo.";
  else if (nome.length > 120) e.nome = "Nome muito longo.";
  const email = f.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) e.email = "Informe um e-mail válido.";
  const d = careerDigits(f.whatsapp);
  const ddd = Number(d.slice(0, 2));
  if (!((d.length === 10 || (d.length === 11 && d[2] === "9")) && ddd >= 11 && ddd <= 99))
    e.whatsapp = "Digite um WhatsApp válido com DDD, ex: (11) 98765-4321";
  if (!(CAREER_AREAS as readonly string[]).includes(f.area)) e.area = "Selecione uma área.";
  if (f.sobre.length > MAX_ABOUT_CHARS) e.sobre = `Use no máximo ${MAX_ABOUT_CHARS} caracteres.`;
  if (!f.aceite) e.aceite = "É preciso aceitar a Política de Privacidade.";
  return e;
}

export function careerSubject(area: string, nome: string): string {
  return `Nova candidatura: ${area} - ${nome.trim()}`;
}

export const ACCEPT_ATTR =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";
