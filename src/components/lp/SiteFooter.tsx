export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono uppercase tracking-widest text-petrol/50">
        <span>© {new Date().getFullYear()} AlliedIT. Todos os direitos reservados.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-petrol">Política de Privacidade — LGPD</a>
          <a href="tel:+551140005000" className="hover:text-petrol">(11) 4000-5000</a>
        </div>
      </div>
    </footer>
  );
}