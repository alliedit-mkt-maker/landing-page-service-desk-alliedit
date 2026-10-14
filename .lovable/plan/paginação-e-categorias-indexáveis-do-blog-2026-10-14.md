# Paginação e categorias indexáveis do blog

## Resultado
- Manter `/blog` visualmente igual, mostrando nove artigos da primeira página no HTML entregue pelo servidor.
- Criar páginas indexáveis em `/blog/page/N` e redirecionar `/blog/page/1` para `/blog`.
- Criar páginas por categoria em `/blog/categoria/<nome>` e suas páginas seguintes.
- Retornar 404 para números de página inválidos ou além da última página.

## Implementação
- Extrair a apresentação atual da listagem para um componente reutilizável, sem alterar cards, cores ou estrutura visual.
- Trocar filtros e “Carregar mais” por links reais e adicionar navegação numerada com Anterior e Próxima.
- Carregar no servidor exatamente os nove artigos da página e categoria solicitadas.
- Gerar title, canonical, Open Graph e H1 específicos para página e categoria.
- Acrescentar ao sitemap somente as URLs principais das categorias.
- Preservar artigos, landing pages e todos os demais recursos.

## Verificação
- Rodar o build.
- Conferir `/blog`, `/blog/page/2`, uma categoria e sua paginação no HTML entregue pelo servidor.
- Confirmar redirecionamento de `/blog/page/1`, 404 além do limite, links reais e ausência de mudanças em `/lp/*`.
- Informar quantas páginas paginadas existem no total.

## Detalhes técnicos
- Novas rotas TanStack Start usarão loaders SSR e `notFound()`.
- Categorias serão resolvidas pelos slugs do WordPress, limitadas à lista solicitada.
- A listagem reutilizável receberá os dados já paginados, evitando o filtro exclusivamente no navegador.
