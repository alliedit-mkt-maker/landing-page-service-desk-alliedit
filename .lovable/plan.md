Trocar o case de destaque na seção `CaseStudy.tsx` de "Louvre Hotels Group" para "Lojas Mel", mantendo a estrutura visual existente (card grande à esquerda com fundo petrol + conteúdo à direita, seguido pelos 3 depoimentos).

## Conteúdo novo

**Card de destaque (lado esquerdo, fundo petrol):**
- Eyebrow: "Case em destaque"
- Título grande: "Lojas Mel"
- Linha de tags inferior: "Varejo" · "55 unidades" · "Field Services"

**Lado direito (conteúdo):**
- Headline (h3): "Field Services para mais de 55 lojas com eficiência e economia"
- Parágrafo de contexto: O grupo Lojas Mel, com 55 unidades pelo Brasil, enfrentava altos custos com equipe própria, problemas frequentes em PDVs e dificuldade de padronizar atendimento em múltiplas localidades. A AlliedIT assumiu o Field Services com modelo flexível, escalável e de alta capilaridade.
- Stats (3 colunas, substituindo os atuais):
  - `-40%` | Custos com suporte em campo
  - `+5%` | Acima da meta de SLA contratual
  - `96%` | Satisfação dos usuários
- CTA mantido: "Quero ser o próximo case" → `openModal("case_lojas_mel")`

**Depoimentos (3 cards inferiores):** manter os 3 existentes (genéricos de varejo/hotelaria/farma) sem alteração, pois reforçam diversidade de setores.

## Arquivos alterados
- `src/components/lp/CaseStudy.tsx` — substituir textos, marca, tags e stats; trocar identificador do modal.

## Não alterado
- Estrutura de layout, classes Tailwind, animações Reveal, blocos de depoimentos.
