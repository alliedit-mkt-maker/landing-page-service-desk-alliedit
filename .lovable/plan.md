# LP Headsets Corporativos — Allied IT

Nova landing page de fundo de funil para revenda de headsets Yealink, Logitech e Poly, seguindo a mesma identidade visual das LPs de Service Desk e Cabeamento (petrol + gold, tipografia forte, blocos com bordas finas, animações Reveal).

## Imagens

**Já recebidas (10 de 12):**

| Nível | Yealink | Logitech | Poly |
|---|---|---|---|
| Entrada | UH34 ✅ | H390 ✅ | Blackwire 3220 ✅ |
| Intermediário | UH42 ✅ | Zone Wired ✅ | Blackwire 5220 ⬜ |
| Sem fio / ANC | BH70 ✅ | Zone Wireless 2 ✅ | Voyager Focus 2 ⬜ |
| Call center | UH36 ✅ | H570e ✅ | EncorePro 520 ✅ |

**Ainda faltam:**
- Poly Blackwire 5220
- Poly Voyager Focus 2
- Logos das 3 marcas (Yealink, Logitech, Poly) — PNG horizontal com fundo transparente. Se preferir, posso usar apenas o nome da marca em tipografia, sem logo.
- Imagem do Hero (pessoa em call usando headset em escritório) — opcional; se não tiver, eu gero.

Monto a página já com as 10 fotos recebidas e deixo placeholders nomeados nos dois modelos Poly que faltam, para trocar assim que chegarem.

## Estrutura da página

1. **Hero** — full-width, texto à esquerda + imagem à direita, centralizado verticalmente e cabendo acima da dobra no desktop. Eyebrow "Headsets corporativos Yealink · Logitech · Poly", H1 "O headset certo para cada tipo de chamada da sua empresa", subtítulo do briefing, CTA primário "Pedir cotação" e link "Ver comparativo de modelos ↓" (âncora para a matriz).
2. **Três marcas, três perfis de compra** — 3 cards de peso visual idêntico (Yealink / Logitech / Poly, ordem fixa).
3. **Encontre o modelo certo para o seu cenário** — 4 blocos empilhados por nível de uso, cada um com indicador em pontinhos (1 a 4) e 3 mini-cards na ordem Yealink → Logitech → Poly: foto, modelo, descrição e botão "Quero este →". Sem badge de "recomendado".
4. **Prova social** — reutiliza o componente `Clients` existente (Einstein, Sem Parar, Cacau Show, Apsen, Espaço Laser, Ipanema, Bradesco).
5. **Por que comprar seu headset com a Allied IT** — 3 blocos sem numeração, com os textos do briefing.
6. **CTA final** — faixa com "Pedir cotação".
7. **Footer** — `SiteFooter` padrão.

Sem qualquer elemento de e-commerce: nada de preço, desconto, estrelas, carrinho, estoque ou selo de urgência.

## Formulário / modal

Todos os CTAs abrem o modal existente (`LpProvider` + `ContactModal`). Como o form do HubSpot desta LP ainda não existe, o modal abre com um bloco placeholder marcado no código (`{/* HUBSPOT FORM EMBED GOES HERE */}`) até você me passar o Form ID. O modelo clicado é capturado via `data-product` e enviado ao dataLayer (`cta_click` com `product`), pronto para virar campo oculto no HubSpot depois.

## Detalhes técnicos

- Nova rota `src/routes/headset-corporativo.tsx`, exportando `HeadsetPage` e `headsetMeta` (mesmo padrão de `cabeamento.tsx`).
- Componentes das seções em `src/components/lp/headset/`, reusando `Reveal`, `SiteHeader`, `SiteFooter`, `Clients`.
- Roteamento por host: adicionar `headset-corporativo.alliedit.com.br → /headset-corporativo` em `HOST_REWRITES` (`src/server.ts`) e em `HOST_VARIANT_MAP` (`src/routes/index.tsx`).
- Fotos e logos entram como assets de CDN (`lovable-assets`), importados por pointer `.asset.json`. O `.avif` do EncorePro 520 é convertido para PNG/WebP antes do upload.
- SEO: `head()` próprio com title, description, OG/Twitter, canonical `https://headset-corporativo.alliedit.com.br/` e JSON-LD.
- Tracking GTM herdado: `lp_view`, `scroll_50/90`, `cta_click`, `modal_open`, `lead_form_submit`.

## Fora do escopo

- Configuração de DNS do subdomínio (feita no painel, depois do publish).
- Criação do formulário no HubSpot.
