# Architecture rules

- Resolve thank-you WhatsApp subjects through one browser-safe page map and capture the URL at successful submission in both modal wrappers; this preserves the actual filled-page origin even if the route changes before acknowledgement.

- Reuse `BlogListing` for every blog archive route so the index, pagination, and category pages keep identical markup and styling.
- Enable blog search only through the index's explicit prop; lazily cache its full published WordPress index in the browser so initial SSR and other archives remain unchanged.
- Derive every machine-readable blog modification date through `effectiveModifiedDate` so article metadata and sitemap entries stay consistent.
- Build service-page JSON-LD through `serviceSchema` from each page's visible FAQ array so structured and visible content cannot diverge.
- Pass page-specific HubSpot form IDs and accessible descriptions through CTA props; keep shared defaults unchanged so other pages retain their forms.
- Institutional product forms opt in through PRODUCT_FORMS and route-level props; shared page components retain campaign defaults to isolate /lp consumers.
- Keep legacy WordPress redirects and gone responses in the server's pre-routing handler, with exact mappings in PAGE_REDIRECTS; this preserves real blog routes and ensures permanent slash normalization.