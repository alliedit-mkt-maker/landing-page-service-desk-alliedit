CREATE TABLE public.bio_link_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  link_id text NOT NULL,
  clicked_at timestamptz NOT NULL DEFAULT now(),
  referrer text,
  user_agent text
);

CREATE INDEX bio_link_clicks_clicked_at_idx ON public.bio_link_clicks (clicked_at DESC);
CREATE INDEX bio_link_clicks_link_id_idx ON public.bio_link_clicks (link_id);

GRANT SELECT, INSERT ON public.bio_link_clicks TO anon;
GRANT SELECT, INSERT ON public.bio_link_clicks TO authenticated;
GRANT ALL ON public.bio_link_clicks TO service_role;

ALTER TABLE public.bio_link_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record a bio link click"
  ON public.bio_link_clicks FOR INSERT TO anon, authenticated
  WITH CHECK (link_id IN ('site', 'atendimento', 'linkedin', 'tiktok'));

CREATE POLICY "Bio link clicks are readable"
  ON public.bio_link_clicks FOR SELECT TO anon, authenticated
  USING (true);