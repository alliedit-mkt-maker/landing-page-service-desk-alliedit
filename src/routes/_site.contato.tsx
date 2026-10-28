import { useState } from "react";
import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { HubspotFormEmbed } from "@/components/lp/ContactModal";
import { ThankYouDialog } from "@/components/lp/ThankYouDialog";
import { GENERAL_CONTACT_FORM } from "@/lib/general-contact-form";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/sobre/hero-office.jpg.asset.json";

export const Route = createFileRoute("/_site/contato")({
  head: () =>
    pageHead({ social: "Conte o que precisa. Retornamos em até 4 horas úteis.",
      title: "Fale com um especialista | Allied IT",
      description: "Conte o que a sua operação de TI precisa. Um especialista da Allied IT retorna em até 4 horas úteis.",
      path: "/contato",
    }),
  component: ContatoPage,
});

const ADDRESS = "Alameda Tocantins, 75, 15º Andar, Alphaville Industrial, Barueri, SP, 06455-020";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const WA = "https://wa.me/5511918506992";
const eyebrow = "font-inter text-[11px] font-semibold uppercase tracking-[0.22em]";

function ContatoPage() {
  const [thanks, setThanks] = useState(false);
  const [submittedPageUrl, setSubmittedPageUrl] = useState("");
  const label = "font-inter text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--site-ink)]";

  return (
    <>
      <section className="relative -mt-[72px] flex min-h-[60vh] items-center overflow-hidden bg-[var(--site-ink)] pt-[72px] text-white">
        <img src={hero.url} alt="" aria-hidden fetchPriority="high" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <span className={`${eyebrow} text-[var(--site-yellow)]`}>Allied IT · Contato</span>
          <h1 className="font-chillax mt-5 text-5xl font-bold tracking-tight sm:text-7xl">Fale com a gente</h1>
          <p className="font-inter mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85">
            Conte com a Allied IT para dar o próximo passo na sua operação de TI.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F7F9] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className={`${eyebrow} text-[var(--site-blue)]`}>Onde estamos</span>
            <h2 className="font-chillax mt-3 text-[1.8rem] font-bold leading-tight tracking-tight sm:text-[2.4rem]">Dados de contato</h2>
            <ul className="mt-10 space-y-7">
              <li className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--site-blue)] text-white"><MapPin className="size-5" /></span>
                <div className="min-w-0">
                  <p className={label}>Endereço</p>
                  <p className="font-inter mt-1 text-[15px] leading-relaxed text-[var(--site-muted)]">{ADDRESS}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--site-blue)] text-white"><Phone className="size-5" /></span>
                <div className="min-w-0">
                  <p className={label}>Telefone / WhatsApp</p>
                  <p className="font-inter mt-1 text-[15px] text-[var(--site-muted)]">(11) 91850-6992</p>
                  <a href={WA} target="_blank" rel="noreferrer" className="font-inter mt-3 inline-flex h-10 items-center gap-2 bg-[#25D366] px-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90">
                    Chamar no WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--site-blue)] text-white"><Mail className="size-5" /></span>
                <div className="min-w-0">
                  <p className={label}>E-mail</p>
                  <a href="mailto:contato@alliedit.com.br" className="font-inter mt-1 block text-[15px] text-[var(--site-blue)] hover:underline">contato@alliedit.com.br</a>
                </div>
              </li>
            </ul>
            <div className="mt-10 overflow-hidden rounded-2xl border border-black/5">
              <iframe title="Mapa Allied IT" src={MAP_SRC} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0" />
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-[0_12px_32px_-24px_rgba(0,0,0,0.3)] sm:p-10">
            <h2 className="font-chillax text-2xl font-bold tracking-tight sm:text-3xl">Envie sua mensagem</h2>
            <p className="font-inter mt-2 text-[15px] text-[var(--site-muted)]">Preencha os campos e um especialista retorna em breve.</p>
            <div className="mt-8 hubspot-form-wrapper">
              <HubspotFormEmbed
                formId={GENERAL_CONTACT_FORM.formId}
                product={GENERAL_CONTACT_FORM.product}
                source="/contato"
                formName="contact_page"
                onSubmitted={(pageUrl) => {
                  setSubmittedPageUrl(pageUrl);
                  setThanks(true);
                }}
              />
              <p className="mt-4 text-center text-[11px] text-[var(--site-ink)]/50">
                Seus dados são tratados conforme a LGPD. Sem SPAM.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ThankYouDialog open={thanks} onOpenChange={setThanks} submittedPageUrl={submittedPageUrl} />
      <SiteFooter />
    </>
  );
}
