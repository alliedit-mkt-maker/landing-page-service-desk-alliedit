# Architecture rules

- Reuse `BlogListing` for every blog archive route so the index, pagination, and category pages keep identical markup and styling.
- Derive every machine-readable blog modification date through `effectiveModifiedDate` so article metadata and sitemap entries stay consistent.
- Build service-page JSON-LD through `serviceSchema` from each page's visible FAQ array so structured and visible content cannot diverge.