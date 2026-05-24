import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { pushEvent } from "./LpProvider";

const personalDomains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "icloud.com", "live.com", "uol.com.br", "bol.com.br"];

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(120),
  email: z.string().trim().email("E-mail inválido").max(255).refine(
    (v) => !personalDomains.includes(v.split("@")[1]?.toLowerCase() ?? ""),
    "Use seu e-mail corporativo"
  ),
  telefone: z.string().trim().min(10, "WhatsApp inválido").max(20),
  empresa: z.string().trim().min(2).max(120),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactModal({ open, onOpenChange, source }: { open: boolean; onOpenChange: (v: boolean) => void; source?: string }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as keyof Errors] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    pushEvent("form_submit", { source: source ?? "unknown" });
    // TODO: integrar com backend (Lovable Cloud) para persistir e enviar para o time comercial.
    setTimeout(() => {
      onOpenChange(false);
      navigate({ to: "/obrigado" });
    }, 200);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold tracking-tight">Vamos falar de Service Desk.</DialogTitle>
          <DialogDescription className="text-petrol/60">
            Preencha rapidamente e o nosso time entra em contato em até 4 horas úteis.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-2" noValidate>
          <Field id="nome" label="Nome completo" error={errors.nome}>
            <Input id="nome" name="nome" required maxLength={120} autoComplete="name" />
          </Field>
          <Field id="email" label="E-mail corporativo" error={errors.email}>
            <Input id="email" name="email" type="email" required maxLength={255} autoComplete="email" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field id="telefone" label="Telefone (DDD)" error={errors.telefone}>
              <Input id="telefone" name="telefone" required maxLength={20} autoComplete="tel" />
            </Field>
            <Field id="empresa" label="Empresa" error={errors.empresa}>
              <Input id="empresa" name="empresa" required maxLength={120} autoComplete="organization" />
            </Field>
          </div>
          <Button type="submit" disabled={submitting} className="w-full h-12 bg-petrol text-white hover:bg-petrol-light uppercase tracking-wider text-sm font-bold rounded-none">
            {submitting ? "Enviando..." : "Enviar e agendar conversa"}
          </Button>
          <p className="text-[11px] text-petrol/50 text-center font-mono">
            Seus dados são tratados conforme a LGPD.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="font-mono text-[10px] uppercase tracking-widest text-petrol/70">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive font-medium">{error}</p>}
    </div>
  );
}