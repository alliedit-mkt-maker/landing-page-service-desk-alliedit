import { Link } from "@tanstack/react-router";

const SERVICOS = [
  "Digital Workspace",
  "Smart Cloud Ops",
  "Cyber Shield 360°",
  "Infra Core",
  "Product Engineering",
  "Inteligência Artificial",
];

const PRODUTOS = ["Videoconferência", "Headsets", "Microsoft 365", "AWS", "Firewall"];

const INSTITUCIONAL: { label: string; to: string }[] = [
  { label: "Sobre", to: "/sobre" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
  { label: "Trabalhe Conosco", to: "/contato" },
];

const WHATSAPP =
  "https://wa.me/5511943319875?text=" +
  encodeURIComponent("Olá, gostaria de falar com um especialista da Allied IT");

export function SiteFooter() {
  const head = "font-inter mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45";
  const item = "font-inter text-[13.5px] text-white/65 transition-colors hover:text-white";

  return (
    <footer className="relative z-10 bg-[#0A0E12] pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <img src="/logo-allied-it.png" alt="Allied IT" className="site-logo-mustard h-8 w-auto" />
          <p className="font-inter mt-5 max-w-[34ch] text-[13.5px] leading-relaxed text-white/55">
            Serviços gerenciados, infraestrutura e produtos de TI para empresas que precisam de uma
            operação estável e previsível.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.linkedin.com/company/allied-it" target="_blank" rel="noreferrer" aria-label="LinkedIn da Allied IT">
              <img src="/icone-linkedin.png" alt="" className="h-8 w-8 opacity-70 transition-opacity hover:opacity-100" />
            </a>
            <a href="https://www.instagram.com/alliedit.br" target="_blank" rel="noreferrer" aria-label="Instagram da Allied IT">
              <img src="/icone-instagram.png" alt="" className="h-8 w-8 opacity-70 transition-opacity hover:opacity-100" />
            </a>
            <a href="https://www.alliedit.com.br" target="_blank" rel="noreferrer" aria-label="Site da Allied IT">
              <img src="/icone-site.png" alt="" className="h-8 w-8 opacity-70 transition-opacity hover:opacity-100" />
            </a>
          </div>
        </div>

        <div>
          <h3 className={head}>Serviços</h3>
          <ul className="space-y-3">
            {SERVICOS.map((s) => (
              <li key={s}>
                <Link to="/servicos" className={item}>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={head}>Produtos</h3>
          <ul className="space-y-3">
            {PRODUTOS.map((p) => (
              <li key={p}>
                <Link to="/produtos" className={item}>
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={head}>Institucional</h3>
          <ul className="space-y-3">
            {INSTITUCIONAL.map((i) => (
              <li key={i.label}>
                <Link to={i.to} className={item}>
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={head}>Contato</h3>
          <ul className="font-inter space-y-3 text-[13.5px] leading-relaxed text-white/65">
            <li>Alphaville, Barueri &ndash; SP</li>
            <li>
              <a href="tel:+551143319875" className={item}>
                (11) 4331-9875
              </a>
            </li>
            <li>
              <a href="mailto:contato@alliedit.com.br" className={item}>
                contato@alliedit.com.br
              </a>
            </li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className={item}>
                WhatsApp (11) 94331-9875
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-5 py-6 sm:px-8">
        <div className="font-inter flex flex-col items-center justify-between gap-3 text-[12px] text-white/45 sm:flex-row">
          <p>&copy; 2026 AlliedIT. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="transition-colors hover:text-white">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="transition-colors hover:text-white">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp com a Allied IT"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.19 4.23-9.41 9.42-9.41 2.52 0 4.88.98 6.66 2.76a9.35 9.35 0 0 1 2.76 6.66c0 5.19-4.23 9.41-9.43 9.41zM20.13 3.9A11.32 11.32 0 0 0 12.05.56C5.78.56.68 5.66.68 11.93c0 2.01.53 3.97 1.53 5.7L.6 23.44l5.95-1.56a11.36 11.36 0 0 0 5.5 1.4h.01c6.26 0 11.36-5.1 11.36-11.37 0-3.04-1.18-5.89-3.29-8.02z" />
        </svg>
      </a>
    </footer>
  );
}
