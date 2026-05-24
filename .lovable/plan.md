# LP Service Desk — AlliedIT

Direção escolhida: **Precision editorial** (petrol #0a2d37 + gold #f59e0b, Inter + JetBrains Mono). Tokens do protótipo entram verbatim no design system. Composição editorial densa, bordas finas, microtipografia mono em eyebrows e metadados.

## Estrutura de arquivos

```text
src/styles.css                          → adicionar tokens petrol/gold/surface + fonts
src/routes/__root.tsx                   → Google Fonts (Inter + JetBrains Mono), meta SEO PT-BR
src/routes/index.tsx                    → LP principal (compõe as 9 dobras)
src/routes/obrigado.tsx                 → página de confirmação pós-formulário
src/components/lp/LpProvider.tsx        → contexto: selectedPath ('internal'|'external'|null) + openModal
src/components/lp/SiteHeader.tsx        → só logo, sem menu nav
src/components/lp/SiteFooter.tsx        → copyright + LGPD + telefone, sem WhatsApp
src/components/lp/Hero.tsx              → Dobra 1
src/components/lp/Clients.tsx           → Dobra 2 (grade de logos em wordmark)
src/components/lp/PathToggle.tsx        → Dobra 3 (toggle + 4 cards de dor por caminho)
src/components/lp/Pillars.tsx           → Dobra 4 (4 pilares com micro-validação dinâmica)
src/components/lp/Flexibility.tsx       → Dobra 5
src/components/lp/WhyAllied.tsx         → Dobra 6 (5 diferenciais)
src/components/lp/CaseStudy.tsx         → Dobra 7 (case Louvre + 3 depoimentos)
src/components/lp/Faq.tsx               → Dobra 8 (Accordion shadcn)
src/components/lp/FinalCta.tsx          → Dobra 9
src/components/lp/ContactModal.tsx      → Dialog shadcn + formulário validado com zod
```

## Design tokens (src/styles.css)

Adicionar em `:root` (sobrescrevendo o tema padrão azulado do template):
- `--petrol: oklch(0.26 0.025 220)` (#0a2d37)
- `--petrol-light: oklch(0.35 0.032 218)` (#16424e)
- `--gold: oklch(0.77 0.165 70)` (#f59e0b)
- `--surface: oklch(1 0 0)`
- `--background`, `--foreground`, `--primary`, `--accent` remapeados para petrol/gold/surface
- `--border: color-mix(in oklch, var(--petrol) 8%, transparent)`
- Animação `fade-up` (keyframe) usada em hero e transições de toggle

Tudo via `oklch`. Componentes usam classes `bg-petrol`, `text-gold`, etc.

## Comportamento dinâmico

**Toggle da Dobra 3** controla `selectedPath` no LpProvider:
- default `null` → Dobra 3 mostra caminho A (interno) pré-selecionado visualmente; Dobra 4 mostra micro-validações genéricas ("sem escolha").
- clicar em "Hoje meu suporte é interno" → `selectedPath='internal'` → cards de dor A + micro-validações A na Dobra 4.
- clicar em "Hoje já tenho um fornecedor" → `selectedPath='external'` → cards de dor B + micro-validações B na Dobra 4.
- Transição: fade-up de 300ms ao trocar.

**Modal de contato**: qualquer botão "Falar com especialista" / "Quero ver como a AlliedIT resolve isso" / "Desenhar meu contrato" / "Quero ser o próximo case" / "Tirar dúvida com um especialista" chama `openModal()` do LpProvider. Formulário valida com zod (nome, e-mail corporativo, telefone, empresa, cargo dropdown, faixa de usuários, desafio opcional). No submit, redireciona para `/obrigado`.

**Página /obrigado**: confirmação + lista de cross-sell (NOC+SOC, Field, Cloud+FinOps) + botão WhatsApp comercial (único lugar onde aparece).

## Conteúdo

Copy 100% do briefing v3 já entregue. Logos como wordmarks tipográficos em cinza (placeholder até receber vetores reais — adicionar `TODO: substituir por SVGs autorizados`). Depoimentos com placeholders idênticos ao briefing. Case Louvre com bloco visual neutro (sem foto stock — placeholder textual com aspect-square).

## SEO

Em `src/routes/index.tsx` via `head()`:
- title: "Service Desk Terceirizado 24x7 | AlliedIT — 20 anos em TI corporativa"
- description: "Operação de Service Desk para empresas que não podem errar. Cobertura 24x7, N1/N2/N3 integrados, custo previsível. Atende Louvre Hotels, Sephora, Apsen."
- og:title, og:description, og:type=website, og:url relativo
- canonical relativo "/"
- JSON-LD Organization + Service (Service Desk)
- lang="pt-BR" no `<html>`

## Tecnicidades do briefing

- Sem header com menu (só logo linkando para "/")
- Sem footer institucional (só copyright + LGPD + telefone)
- Sem WhatsApp na LP — só na /obrigado
- Modal em HTML puro (Dialog shadcn, sem iframe)
- Eventos de conversão: stubs `window.dataLayer.push({event:'...'})` para `lp_view`, `scroll_50`, `scroll_90`, `path_internal_selected`, `path_external_selected`, `modal_open`, `form_submit`, `whatsapp_click_thankyou`. Comentar que pixels reais (Meta, Google Ads, GA4, Clarity) serão injetados depois — agora só dispara os eventos no dataLayer.
- Alt text dos logos com nome da empresa
- robots.txt liberando GPTBot, ClaudeBot, PerplexityBot, Google-Extended

## Fora do escopo desta iteração

- Variantes por vertical (v4 do briefing)
- Calculadora de economia (v5)
- Vídeo depoimento (v6)
- Integração real do formulário com backend / e-mail (será necessário ativar Lovable Cloud em uma próxima iteração — agora `form_submit` só dispara o evento e redireciona)
- SVGs reais dos clientes (aguardando aprovação)
- Pixels reais de Ads/Meta/GA4/Clarity (apenas dataLayer)

## Validação final

Após build: navegar em /, scrollar pelas 9 dobras, alternar o toggle e confirmar que os 4 pilares atualizam as micro-validações, abrir modal por 3 CTAs diferentes, submeter form e ver /obrigado.