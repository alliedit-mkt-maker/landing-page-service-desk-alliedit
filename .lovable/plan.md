## Objetivo
Substituir o placeholder CSS da logo no SiteHeader pela imagem real da AlliedIT, com fundo transparente, mantendo a identidade visual da marca.

## Contexto atual
O SiteHeader usa um placeholder CSS (quadrado azul com quadradinho dourado). A logo real foi fornecida via URL: imagem PNG com "Allied" em azul petróleo e "IT" em amarelo/dourado, com fundo branco.

## Tarefas

1. **Processar logo**
   - Remover fundo branco da imagem original, gerando PNG transparente.
   - Salvar em `public/logo-alliedit.png` (ou `src/assets/` se for importada pelo bundler).
   - Gerar versão compacta para og:image/favicon se necessário.

2. **Atualizar SiteHeader**
   - Substituir o bloco placeholder CSS pelo `<img>` com a logo processada.
   - Ajustar altura/largura para manter proporção (~h-7 ou ~h-8).
   - Preservar o link para `/` e acessibilidade (aria-label).

3. **Revisar outros pontos de uso**
   - Verificar se og:image pode usar a logo (caso não tenha outra imagem definida).
   - Footer: se houver logo lá, atualizar também.

4. **Testar visual**
   - Confirmar que a logo fica legível no fundo surface/branco do header.
   - Verificar em mobile (header compacto).
