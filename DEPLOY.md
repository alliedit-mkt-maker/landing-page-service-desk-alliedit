# Deploy | AlliedIT Landing Page

## Variáveis de ambiente

Copie `.env.example` para `.env` (local) ou cadastre as variáveis no painel da Vercel:

```
VITE_GTM_ID=GTM-PCNS4W4X
VITE_HUBSPOT_PORTAL_ID=47388409
VITE_HUBSPOT_FORM_ID=087109f4-f093-404c-aec9-b4a3f6d763a4
VITE_HUBSPOT_REGION=na1
```

Todas as variáveis começam com `VITE_` e são embutidas no bundle do cliente em tempo de build.

## Deploy via GitHub + Vercel

1. Faça push do repositório para o GitHub.
2. Em https://vercel.com/new, importe o repositório.
3. Framework preset: **Vite** (TanStack Start).
   - Build command: `bun run build` (ou `npm run build`)
   - Output directory: `dist`
4. Em **Settings → Environment Variables**, adicione as quatro variáveis acima para os ambientes Production / Preview / Development.
5. Deploy. A Vercel detecta novos commits automaticamente.

## DNS via Cloudflare

1. Na Vercel, em **Settings → Domains**, adicione o domínio (ex.: `lp.alliedit.com.br`).
2. No painel Cloudflare, crie um registro **CNAME** apontando para `cname.vercel-dns.com`.
3. Mantenha o proxy Cloudflare em **DNS only** (ícone cinza) na primeira validação. Após o SSL ser emitido pela Vercel, é possível reativar o proxy laranja se necessário.
4. Aguarde a propagação do DNS e a emissão automática do certificado.

## Tracking

- **GTM** (`GTM-PCNS4W4X`) é carregado no `<head>` e o fallback `<noscript>` é injetado no `<body>`.
- Eventos `dataLayer` emitidos:
  - `lp_view` ao carregar a página
  - `cta_click` (button_name `primary_cta`) ao clicar nos CTAs principais
  - `modal_open` (modal_name `lead_form`) ao abrir o modal
  - `lead_form_submit` (form_name `landing_modal`) após envio HubSpot
  - `path_internal_selected` / `path_external_selected`, `scroll_50`, `scroll_90`
- Google Analytics, Meta Pixel e Google Ads devem ser configurados **somente via GTM**.

## UTMs

Parâmetros `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `fbclid` são capturados na primeira visita, persistidos em `localStorage` (`alliedit_utms`) e injetados nos campos ocultos correspondentes do formulário HubSpot no evento `onFormReady`.

## HubSpot

O formulário é renderizado dentro do modal principal via embed oficial (`https://js.hsforms.net/forms/embed/v2.js`) usando Portal/Form/Region das variáveis de ambiente. Após `onFormSubmitted` o usuário é redirecionado para `/obrigado`.