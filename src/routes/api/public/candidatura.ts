import { createFileRoute } from "@tanstack/react-router";
import {
  CAREERS_EMAIL,
  careerDigits,
  careerSubject,
  fileExt,
  validateCareer,
  validateFile,
} from "@/lib/careers";

function json(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function toBase64(bytes: Uint8Array): string {
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

/** Confere a assinatura real do arquivo (não confia só na extensão). */
function signatureOk(ext: string, b: Uint8Array): boolean {
  if (ext === "pdf") return b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46;
  if (ext === "doc") return b[0] === 0xd0 && b[1] === 0xcf && b[2] === 0x11 && b[3] === 0xe0;
  if (ext === "docx") return b[0] === 0x50 && b[1] === 0x4b;
  return false;
}

const MIME: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export const Route = createFileRoute("/api/public/candidatura")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let form: FormData;
        try {
          form = await request.formData();
        } catch {
          return json({ ok: false, code: "invalid", message: "Dados inválidos." }, 400);
        }
        const str = (k: string) => (typeof form.get(k) === "string" ? (form.get(k) as string) : "");

        // Proteção invisível: robôs preenchem o campo oculto. Responde como inválido, sem enviar.
        if (str("empresa_site").trim()) return json({ ok: false, code: "invalid", message: "Dados inválidos." }, 400);

        const fields = {
          nome: str("nome"),
          email: str("email"),
          whatsapp: str("whatsapp"),
          area: str("area"),
          sobre: str("sobre"),
          aceite: str("aceite") === "sim",
        };
        const errors = validateCareer(fields);
        const file = form.get("curriculo");
        const fileObj = file instanceof File ? file : null;
        const fileErr = validateFile(fileObj);
        if (fileErr) errors.curriculo = fileErr;
        if (Object.keys(errors).length) return json({ ok: false, code: "validation", errors }, 400);

        const ext = fileExt(fileObj!.name);
        const bytes = new Uint8Array(await fileObj!.arrayBuffer());
        if (!signatureOk(ext, bytes))
          return json({ ok: false, code: "validation", errors: { curriculo: "Arquivo inválido. Envie um PDF, DOC ou DOCX." } }, 400);

        const apiKey = process.env["RESEND_API_KEY"];
        const from = process.env["CAREERS_FROM_EMAIL"];
        if (!apiKey || !from) {
          // Nada é guardado e nenhum dado pessoal vai para logs.
          console.warn("[candidatura] serviço de e-mail ainda não configurado");
          return json({ ok: false, code: "not_configured", message: "Serviço de e-mail ainda não configurado." }, 503);
        }

        const nome = fields.nome.trim();
        const rows: [string, string][] = [
          ["Nome", nome],
          ["E-mail", fields.email.trim()],
          ["WhatsApp", careerDigits(fields.whatsapp)],
          ["Área de interesse", fields.area],
          ["Sobre", fields.sobre.trim() || "(não informado)"],
          ["Aceite da Política de Privacidade", "Sim"],
        ];
        const html =
          `<h2 style="font-family:Arial,sans-serif;color:#046E8B">Nova candidatura pelo site</h2>` +
          rows
            .map(([k, v]) => `<p style="font-family:Arial,sans-serif;font-size:14px"><strong>${esc(k)}:</strong><br>${esc(v).replace(/\n/g, "<br>")}</p>`)
            .join("");
        const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n\n");
        const safeName = `curriculo-${nome.normalize("NFD").replace(/[^\w]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "candidato"}.${ext}`;

        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
            body: JSON.stringify({
              from,
              to: [CAREERS_EMAIL],
              reply_to: fields.email.trim(),
              subject: careerSubject(fields.area, nome),
              html,
              text,
              attachments: [{ filename: safeName, content: toBase64(bytes), content_type: MIME[ext] }],
            }),
          });
          if (!res.ok) {
            console.error(`[candidatura] falha no envio de e-mail [${res.status}]`);
            return json({ ok: false, code: "send_failed", message: "Falha ao enviar." }, 502);
          }
        } catch {
          console.error("[candidatura] erro de rede no envio de e-mail");
          return json({ ok: false, code: "send_failed", message: "Falha ao enviar." }, 502);
        }
        return json({ ok: true }, 200);
      },
    },
  },
});
