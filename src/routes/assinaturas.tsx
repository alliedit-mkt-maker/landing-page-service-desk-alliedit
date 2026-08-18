import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const assinaturasMeta = {
  title: "Gerador de Assinatura de E-mail | AlliedIT",
  description:
    "Ferramenta interna AlliedIT: preencha seus dados, monte sua assinatura de e-mail padronizada e copie direto para o Outlook ou Gmail.",
};

export const Route = createFileRoute("/assinaturas")({
  head: () => ({
    meta: [
      { title: assinaturasMeta.title },
      { name: "description", content: assinaturasMeta.description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: assinaturasMeta.title },
      { property: "og:description", content: assinaturasMeta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssinaturasPage,
});

const CARGOS = [
  "Administrativo/Financeiro",
  "Analista Administrativo",
  "Analista de Comunicação",
  "Analista de Dados",
  "Analista de Field Services",
  "Analista de Infraestrutura",
  "Analista de Marketing",
  "Analista de Operações",
  "Analista de Processos",
  "Analista de Recursos Humanos",
  "Analista de Segurança da Informação",
  "Analista de Service Desk",
  "Analista de Sistemas",
  "Analista de Suporte",
  "Assistente Administrativo",
  "Assistente de Vendas",
  "CTO",
  "Coordenador de Field Service",
  "Coordenador de Processos",
  "Coordenador de Service Desk",
  "Coordenadora de Service Desk",
  "Engenheiro de Dados",
  "Executivo de Vendas",
  "Head de Operações - Infra, Cloud, Cyber e Network",
  "Head de Operações - Service Support",
  "Head de Projetos",
  "Head de RH e Endomarketing",
  "Product Owner",
];

const FRAME = 200;
const OUT = 400;

const C = {
  teal: "#026e8c",
  tealLight: "#028aad",
  yellow: "#f7d51c",
  text: "#eaf4f7",
  muted: "#9fb9c2",
  muted2: "#7fa3ad",
  field: "#04141b",
  border: "#1e3d47",
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.035)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: 18,
  padding: 26,
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

const labelStyle: React.CSSProperties = {
  fontSize: 11.5,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.4px",
  color: C.muted2,
  display: "block",
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 13px",
  fontSize: 14,
  background: C.field,
  border: `1px solid ${C.border}`,
  borderRadius: 9,
  color: C.text,
  outline: "none",
};

function formatTelefone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

async function toDataUrl(path: string): Promise<string> {
  const res = await fetch(path);
  const blob = await res.blob();
  return await new Promise<string>((resolve) => {
    const fr = new FileReader();
    fr.onload = () => resolve(String(fr.result));
    fr.readAsDataURL(blob);
  });
}

function buildSignature(opts: {
  nome: string;
  cargo: string;
  telefone: string;
  email: string;
  foto: string | null;
  logo: string;
  site: string;
  instagram: string;
  linkedin: string;
}) {
  const nome = opts.nome.trim() || "[Nome completo]";
  const cargo = opts.cargo.trim() || "[Cargo]";
  const telefone = opts.telefone.trim();
  const email = opts.email.trim() || "[email@alliedit.com.br]";
  const fotoCell = opts.foto
    ? `<td style="padding-right: 14px;" valign="top"><img src="${opts.foto}" width="120" height="120" style="display:block; border-radius: 22px; width:120px; height:120px;"></td>`
    : "";

  return `<table cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="background-color:#ffffff; border-radius:16px; border-collapse:collapse;"><tr><td bgcolor="#ffffff" style="background-color:#ffffff; border-radius:16px; padding:20px;">
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; font-family: 'Inter', -apple-system, 'Segoe UI', Roboto, Arial, Helvetica, sans-serif;">
  <tr><td style="padding-bottom: 2px;"><span style="font-size: 13px; color: #6b7280; padding-bottom: 16px; display:block;">Atenciosamente,</span></td></tr>
  <tr><td>
    <table cellpadding="0" cellspacing="0" border="0"><tr>
      <td valign="middle">
        <table cellpadding="0" cellspacing="0" border="0"><tr>
          ${fotoCell}
          <td valign="middle">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr><td style="padding-bottom: 2px;"><span style="font-size: 14px; font-weight: 700; color: #111111;">${nome}</span></td></tr>
              <tr><td style="padding-bottom: 6px;"><span style="font-size: 12.5px; color: #6b7280;">${cargo}</span></td></tr>
              <tr><td style="padding-bottom: 2px;">
                ${telefone ? `<span style="font-size: 12.5px; color: #6b7280;">${telefone} &nbsp;&middot;&nbsp; </span>` : ""}<a href="mailto:${email}" style="font-size: 12.5px; color: #6b7280; text-decoration: none;">${email}</a>
              </td></tr>
              <tr><td>
                <a href="https://www.alliedit.com.br" style="font-size: 12.5px; color: #6b7280; text-decoration: none;">alliedit.com.br</a><span style="font-size: 12.5px; color: #6b7280;"> &nbsp;&middot;&nbsp; Alphaville Industrial, Barueri-SP</span>
              </td></tr>
            </table>
          </td>
        </tr></table>
      </td>
      <td style="padding-left: 16px;" valign="middle">
        <table cellpadding="0" cellspacing="0" border="0"><tr><td align="center">
          <img src="${opts.logo}" width="150" alt="Allied IT" style="display:block; margin:0 auto; border:0;">
        </td></tr>
        <tr><td style="padding-top: 12px;" align="center">
          <table cellpadding="0" cellspacing="0" border="0" align="center"><tr>
            <td align="center" style="padding: 0 12px;">
              <a href="https://alliedit.com.br/" style="text-decoration:none;"><img src="${opts.site}" width="24" height="24" alt="Site" style="display:block; border:0; margin:0 auto;"></a>
              <div style="color:#6b7280; font-size:10px; font-family: 'Inter', -apple-system, 'Segoe UI', Roboto, Arial, Helvetica, sans-serif; margin-top:5px; text-align:center;">Site</div>
            </td>
            <td align="center" style="padding: 0 12px;">
              <a href="https://www.instagram.com/alliedit_solutions/" style="text-decoration:none;"><img src="${opts.instagram}" width="24" height="24" alt="Instagram" style="display:block; border:0; margin:0 auto;"></a>
              <div style="color:#6b7280; font-size:10px; font-family: 'Inter', -apple-system, 'Segoe UI', Roboto, Arial, Helvetica, sans-serif; margin-top:5px; text-align:center;">Instagram</div>
            </td>
            <td align="center" style="padding: 0 12px;">
              <a href="https://br.linkedin.com/company/alliedit" style="text-decoration:none;"><img src="${opts.linkedin}" width="24" height="24" alt="Linkedin" style="display:block; border:0; margin:0 auto;"></a>
              <div style="color:#6b7280; font-size:10px; font-family: 'Inter', -apple-system, 'Segoe UI', Roboto, Arial, Helvetica, sans-serif; margin-top:5px; text-align:center;">Linkedin</div>
            </td>
          </tr></table>
        </td></tr></table>
      </td>
    </tr></table>
  </td></tr>
</table>
</td></tr></table>`;
}

export function AssinaturasPage() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [assets, setAssets] = useState<{ logo: string; site: string; instagram: string; linkedin: string } | null>(null);
  const [fotoDataUrl, setFotoDataUrl] = useState<string | null>(null);
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [zoom, setZoom] = useState(100);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [baseScale, setBaseScale] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const nomeRef = useRef<HTMLInputElement | null>(null);
  const cargoRef = useRef<HTMLSelectElement | null>(null);
  const telRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const dragStart = useRef<{ px: number; py: number; x: number; y: number } | null>(null);

  useEffect(() => {
    let alive = true;
    Promise.all([
      toDataUrl("/logo-allied-it.png"),
      toDataUrl("/icone-site.png"),
      toDataUrl("/icone-instagram.png"),
      toDataUrl("/icone-linkedin.png"),
    ])
      .then(([logo, site, instagram, linkedin]) => {
        if (alive) setAssets({ logo, site, instagram, linkedin });
      })
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, []);

  const clamp = useCallback(
    (x: number, y: number, scale: number, img: HTMLImageElement, bs: number) => {
      const w = img.naturalWidth * bs * scale;
      const h = img.naturalHeight * bs * scale;
      const minX = Math.min(0, FRAME - w);
      const minY = Math.min(0, FRAME - h);
      return { x: Math.min(0, Math.max(minX, x)), y: Math.min(0, Math.max(minY, y)) };
    },
    [],
  );

  // Redraw crop canvas
  useEffect(() => {
    if (!imgEl) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const r = OUT / FRAME;
    ctx.clearRect(0, 0, OUT, OUT);
    ctx.save();
    const radius = 47;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.arcTo(OUT, 0, OUT, OUT, radius);
    ctx.arcTo(OUT, OUT, 0, OUT, radius);
    ctx.arcTo(0, OUT, 0, 0, radius);
    ctx.arcTo(0, 0, OUT, 0, radius);
    ctx.closePath();
    ctx.clip();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, OUT, OUT);
    const s = baseScale * (zoom / 100) * r;
    ctx.drawImage(imgEl, pos.x * r, pos.y * r, imgEl.naturalWidth * s, imgEl.naturalHeight * s);
    ctx.restore();
    setFotoDataUrl(canvas.toDataURL("image/png"));
  }, [imgEl, pos, zoom, baseScale]);

  const onFile = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const bs = Math.max(FRAME / img.naturalWidth, FRAME / img.naturalHeight);
        setBaseScale(bs);
        setZoom(100);
        setPos({ x: (FRAME - img.naturalWidth * bs) / 2, y: (FRAME - img.naturalHeight * bs) / 2 });
        setImgEl(img);
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeFoto = () => {
    setImgEl(null);
    setFotoDataUrl(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const html = useMemo(() => {
    if (!assets) return "";
    return buildSignature({ nome, cargo, telefone, email, foto: imgEl ? fotoDataUrl : null, ...assets });
  }, [assets, nome, cargo, telefone, email, fotoDataUrl, imgEl]);

  const copy = async () => {
    const missing: string[] = [];
    if (!nome.trim()) missing.push("Nome completo");
    if (!cargo) missing.push("Cargo");
    if (!email.trim()) missing.push("E-mail");
    if (missing.length) {
      setOk("");
      setError(`⚠ Preencha todos os campos antes de copiar (${missing.join(", ")}).`);
      if (!nome.trim()) nomeRef.current?.focus();
      else if (!cargo) cargoRef.current?.focus();
      else emailRef.current?.focus();
      return;
    }
    setError("");
    const node = previewRef.current;
    if (!node) return;

    const done = () => {
      setOk("✓ Copiado! Agora cole no Outlook (Ctrl+V).");
      setTimeout(() => setOk(""), 4000);
    };

    // Preferimos escrever o HTML bruto no clipboard: assim o Outlook/Gmail recebem
    // exatamente a marcação de tabelas (bgcolor, paddings, border-radius) sem
    // passar pela serialização do DOM, que reescreve estilos.
    try {
      if (navigator.clipboard && typeof ClipboardItem !== "undefined") {
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/html": new Blob([html], { type: "text/html" }),
            "text/plain": new Blob([node.innerText], { type: "text/plain" }),
          }),
        ]);
        done();
        return;
      }
    } catch {
      // cai no fallback abaixo
    }

    try {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(node);
      selection?.removeAllRanges();
      selection?.addRange(range);
      document.execCommand("copy");
      selection?.removeAllRanges();
      done();
    } catch {
      setError("Não foi possível copiar automaticamente. Selecione a pré-visualização e copie manualmente.");
    }
  };


  return (
    <div
      style={{
        background: "linear-gradient(160deg, #04202a 0%, #05303e 45%, #021920 100%)",
        padding: "48px 20px",
        minHeight: "100vh",
        fontFamily: "Inter, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
        color: C.text,
      }}
    >
      <style>{`@keyframes lpBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
        .sig-input:focus{border-color:${C.yellow} !important}
        .sig-input::placeholder{color:#4c6b74}
        .sig-select option{background:#0a1e26;color:${C.text}}`}</style>

      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: "16px 34px",
            width: "fit-content",
            margin: "0 auto 56px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
        >
          <img src="/logo-allied-it.png" alt="Allied IT" style={{ height: 34, display: "block" }} />
        </div>

        <div style={{ display: "flex", gap: 26, alignItems: "stretch", flexWrap: "wrap" }}>
          {/* LEFT */}
          <div style={{ flex: "1 1 400px", minWidth: 320, display: "flex", flexDirection: "column", gap: 18 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(247,213,28,0.1)",
                border: "1px solid rgba(247,213,28,0.35)",
                color: C.yellow,
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                borderRadius: 20,
                padding: "6px 14px",
                width: "fit-content",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, background: C.yellow, display: "inline-block" }} />
              Gerador de assinatura · Allied IT
            </span>

            <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: 0 }}>
              Gerador de assinatura <span style={{ color: C.yellow }}>de e-mail</span>
            </h1>
            <p style={{ color: C.muted, fontSize: 14.5, margin: 0 }}>
              Preencha seus dados, copie e cole no Outlook.
            </p>

            <div style={{ ...cardStyle, fontSize: 13, color: C.muted, lineHeight: 1.7 }}>
              <strong style={{ color: "#fff" }}>Como usar:</strong>
              <br />
              1. Preencha os campos ao lado com seus dados (a foto é opcional).
              <br />
              2. Se enviar uma foto, arraste dentro do quadrado para posicionar e use o controle de zoom para enquadrar.
              <br />
              3. Confira a pré-visualização abaixo.
              <br />
              4. Clique no botão azul "Copiar assinatura".
              <br />
              5. No Outlook: Arquivo → Configurar → Contas → Assinaturas → Adicionar assinatura → cole (Ctrl+V) no campo de edição → Salvar.
            </div>

            <div
              style={{
                flex: 1,
                border: "1px dashed rgba(255,255,255,0.18)",
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                minHeight: 110,
              }}
            >
              <span style={{ textTransform: "uppercase", fontSize: 12.5, fontWeight: 700, color: C.muted2 }}>
                Veja como fica
              </span>
              <span style={{ color: C.yellow, fontSize: 22, animation: "lpBounce 1.6s ease-in-out infinite" }}>↓</span>
            </div>
          </div>

          {/* RIGHT: form */}
          <div style={{ flex: "1 1 400px", minWidth: 320 }}>
            <div style={{ ...cardStyle, display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={labelStyle} htmlFor="f-nome">Nome completo</label>
                <input id="f-nome" ref={nomeRef} className="sig-input" style={inputStyle} value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Ex: João da Silva" />
              </div>
              <div>
                <label style={labelStyle} htmlFor="f-cargo">Cargo</label>
                <div style={{ position: "relative" }}>
                  <select
                    id="f-cargo"
                    ref={cargoRef}
                    className="sig-input sig-select"
                    style={{ ...inputStyle, appearance: "none", paddingRight: 34 }}
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                  >
                    <option value="" disabled>Selecione o cargo</option>
                    {CARGOS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: C.muted2, pointerEvents: "none", fontSize: 12 }}>▾</span>
                </div>
              </div>
              <div>
                <label style={labelStyle} htmlFor="f-tel">Telefone Corporativo (opcional)</label>
                <input id="f-tel" ref={telRef} className="sig-input" style={inputStyle} value={telefone} onChange={(e) => setTelefone(formatTelefone(e.target.value))} inputMode="tel" maxLength={15} placeholder="Ex: (11) 91234-5678" />
              </div>
              <div>
                <label style={labelStyle} htmlFor="f-email">E-mail</label>
                <input id="f-email" ref={emailRef} className="sig-input" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ex: nome@alliedit.com.br" />
              </div>
              <div>
                <label style={labelStyle} htmlFor="f-foto">Foto de perfil</label>
                <input id="f-foto" ref={fileRef} type="file" accept="image/*" className="sig-input" style={{ ...inputStyle, padding: "9px 11px" }} onChange={(e) => onFile(e.target.files?.[0])} />
              </div>

              {imgEl ? (
                <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
                  <div
                    style={{
                      width: FRAME,
                      height: FRAME,
                      borderRadius: 26,
                      overflow: "hidden",
                      background: C.field,
                      border: `1px solid ${C.border}`,
                      cursor: dragging ? "grabbing" : "grab",
                      touchAction: "none",
                      position: "relative",
                      flex: "0 0 auto",
                    }}
                    onPointerDown={(e) => {
                      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
                      dragStart.current = { px: e.clientX, py: e.clientY, x: pos.x, y: pos.y };
                      setDragging(true);
                    }}
                    onPointerMove={(e) => {
                      const st = dragStart.current;
                      if (!st || !dragging) return;
                      const nx = st.x + (e.clientX - st.px);
                      const ny = st.y + (e.clientY - st.py);
                      setPos(clamp(nx, ny, zoom / 100, imgEl, baseScale));
                    }}
                    onPointerUp={() => {
                      setDragging(false);
                      dragStart.current = null;
                    }}
                  >
                    <img
                      src={imgEl.src}
                      alt="Recorte"
                      draggable={false}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transformOrigin: "0 0",
                        transform: `translate(${pos.x}px, ${pos.y}px) scale(${baseScale * (zoom / 100)})`,
                        maxWidth: "none",
                      }}
                    />
                  </div>
                  <div style={{ flex: "1 1 160px", display: "flex", flexDirection: "column", gap: 10 }}>
                    <label style={labelStyle} htmlFor="f-zoom">Zoom</label>
                    <input
                      id="f-zoom"
                      type="range"
                      min={100}
                      max={280}
                      value={zoom}
                      style={{ accentColor: C.yellow, width: "100%" }}
                      onChange={(e) => {
                        const z = Number(e.target.value);
                        setZoom(z);
                        setPos((p) => clamp(p.x, p.y, z / 100, imgEl, baseScale));
                      }}
                    />
                    <span style={{ color: "#6f8e97", fontSize: 11.5 }}>
                      Arraste a foto dentro do quadrado para reposicionar.
                    </span>
                    <button type="button" onClick={removeFoto} style={{ background: "none", border: "none", color: "#ff8080", fontSize: 12, cursor: "pointer", padding: 0, textAlign: "left" }}>
                      Remover foto
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* PREVIEW */}
        <div style={{ ...cardStyle, marginTop: 26 }}>
          <span style={{ ...labelStyle, marginBottom: 12 }}>Pré-visualização (é isso que vai ser copiado):</span>
          <div style={{ background: "#f4f6f7", borderRadius: 14, padding: 22, overflowX: "auto" }}>
            <div ref={previewRef} dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div style={{ maxWidth: 420, margin: "18px auto 0" }}>
            <button
              type="button"
              onClick={copy}
              style={{
                width: "100%",
                padding: 15,
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                background: `linear-gradient(135deg, ${C.tealLight}, ${C.teal})`,
                boxShadow: "0 6px 18px rgba(2,110,140,0.35)",
              }}
            >
              📋 Copiar assinatura
            </button>
            {error ? <p style={{ color: "#ff8080", fontSize: 13, marginTop: 10, textAlign: "center" }}>{error}</p> : null}
            {ok ? <p style={{ color: "#6fe3a3", fontSize: 13, marginTop: 10, textAlign: "center" }}>{ok}</p> : null}
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} width={OUT} height={OUT} style={{ display: "none" }} />
    </div>
  );
}
