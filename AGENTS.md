# Architecture rules
- Keep Cyber Shield enrichment data browser-safe and its visual overrides scoped to `.cyber-page`; shared CTA copy overrides must be opt-in so FAQ, forms and other pages remain unaffected.

- Resolve thank-you WhatsApp subjects through one browser-safe page map and capture the URL at successful submission in both modal wrappers; this preserves the actual filled-page origin even if the route changes before acknowledgement.

- Reuse `BlogListing` for every blog archive route so the index, pagination, and category pages keep identical markup and styling.
- Enable blog search only through the index's explicit prop; lazily cache its full published WordPress index in the browser so initial SSR and other archives remain unchanged.
- Derive every machine-readable blog modification date through `effectiveModifiedDate` so article metadata and sitemap entries stay consistent.
- Build service-page JSON-LD through `serviceSchema` from each page's visible FAQ array so structured and visible content cannot diverge.
- Pass page-specific HubSpot form IDs and accessible descriptions through CTA props; keep shared defaults unchanged so other pages retain their forms.
- Home and About content CTAs opt in to GENERAL_CONTACT_FORM; shared navigation remains independent so other pages retain their contact behavior.
- Institutional product forms opt in through PRODUCT_FORMS and route-level props; shared page components retain campaign defaults to isolate /lp consumers.
- Keep legacy WordPress redirects and gone responses in the server's pre-routing handler, with exact mappings in PAGE_REDIRECTS; this preserves real blog routes and ensures permanent slash normalization.- Careers applications post to the public `/api/public/candidatura` route, which emails via Resend only when `RESEND_API_KEY` and `CAREERS_FROM_EMAIL` exist and never stores files or logs personal data; the footer opens the popup only through `careersPopupEnabled` or the `?candidatura=teste` preview param, so public behavior is unchanged until activation.
- Campaign attribution (utm_*, gclid, fbclid) lives only in `src/lib/utm.ts`, captured in the root on load and every navigation, and every HubSpot modal fills empty hidden fields via `fillUtmFields` on ready and before submit; one store keeps all forms consistent.
- Navigation, footer and generic "/contato" CTAs open the general HubSpot form through `GeneralContactLink`, which dispatches to the single `GeneralContactHost` in the root; one host survives menus unmounting, while page content CTAs keep their own specific forms.
