# Architecture rules

- Reuse `BlogListing` for every blog archive route so the index, pagination, and category pages keep identical markup and styling.
- Derive every machine-readable blog modification date through `effectiveModifiedDate` so article metadata and sitemap entries stay consistent.