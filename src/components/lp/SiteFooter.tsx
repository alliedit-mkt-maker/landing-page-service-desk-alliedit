export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-petrol/50">
        <span>© 2026 AlliedIT. Todos os direitos reservados.</span>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="https://alliedit.com.br/privacidade/" target="_blank" rel="noopener noreferrer" className="hover:text-petrol">Política de Privacidade</a>
          <a href="https://alliedit.com.br/termos-e-condicoes/" target="_blank" rel="noopener noreferrer" className="hover:text-petrol">Termos e Condições</a>
        </div>
      </div>
    </footer>
  );
}