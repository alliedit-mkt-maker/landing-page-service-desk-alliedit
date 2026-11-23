DROP POLICY IF EXISTS "Bio link clicks are readable" ON public.bio_link_clicks;
REVOKE SELECT ON public.bio_link_clicks FROM anon, authenticated;