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
            <a href="https://www.linkedin.com/company/20112643" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Allied IT">
              <img src="/icone-linkedin.png" alt="" className="h-8 w-8 opacity-70 transition-opacity hover:opacity-100" />
            </a>
            <a href="https://www.instagram.com/alliedit_solutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Allied IT">
              <img src="/icone-instagram.png" alt="" className="h-8 w-8 opacity-70 transition-opacity hover:opacity-100" />
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
                <Link to={p === "Microsoft 365" ? "/produtos/microsoft-365" : p === "AWS" ? "/produtos/aws" : p === "Firewall" ? "/produtos/firewall" : "/produtos"} className={item}>
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

    </footer>
  );
}
