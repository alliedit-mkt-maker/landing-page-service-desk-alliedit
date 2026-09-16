import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { $getSessionUser } from "@/lib/session";
import {
  PERIOD_OPTIONS,
  audienceByGender,
  clicksByHour,
  clicksByLink,
  peakHour,
  totalsFor,
  type Period,
} from "@/lib/links-metrics-mock";

export const Route = createFileRoute("/links-painel")({
  loader: async () => await $getSessionUser(),
  head: () => ({
    meta: [
      { title: "Painel de links | Allied IT" },
      { name: "description", content: "Painel interno de desempenho da página de links da Allied IT." },
      { property: "og:title", content: "Painel de links | Allied IT" },
      { property: "og:description", content: "Painel interno de desempenho da página de links." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LinksDashboard,
});

const ACCENT = "#076F8C";
const YELLOW = "#D4A017";
const GENDER_COLORS = [ACCENT, YELLOW, "#5A6B72"];

function Card({
  title,
  hint,
  children,
  className = "",
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-white/12 bg-white/[0.05] p-5 backdrop-blur-sm ${className}`}
    >
      <header className="mb-4">
        <h2 className="text-sm font-semibold tracking-tight text-white">{title}</h2>
        {hint ? <p className="mt-1 text-[11px] text-white/45">{hint}</p> : null}
      </header>
      {children}
    </section>
  );
}

function LinksDashboard() {
  const user = Route.useLoaderData();
  const [period, setPeriod] = useState<Period>(30);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#08171D] px-6 text-center text-white">
        <div className="max-w-sm">
          <h1 className="text-xl font-bold">Acesso restrito</h1>
          <p className="mt-3 text-sm text-white/60">
            Este painel é interno. Entre com a sua conta Lovable no mesmo navegador para visualizar
            as métricas da página de links.
          </p>
        </div>
      </div>
    );
  }

  const totals = totalsFor(period);
  const byLink = clicksByLink(period);
  const byHour = clicksByHour(period);
  const peak = peakHour(period);
  const gender = audienceByGender(period);
  const up = totals.change >= 0;

  return (
    <div className="min-h-screen bg-[#08171D] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--site-yellow)]">
              Painel interno
            </p>
            <h1 className="mt-2 text-[28px] font-bold tracking-tight">Desempenho dos links</h1>
            <p className="mt-2 text-sm text-white/55">
              Olá, {user.displayName ?? user.email}. Números de exemplo até o registro real de
              cliques ser ativado.
            </p>
          </div>
          <div className="flex gap-2">
            {PERIOD_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setPeriod(opt.value)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  period === opt.value
                    ? "border-transparent bg-[var(--site-blue)] text-white"
                    : "border-white/20 text-white/65 hover:border-white/50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </header>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card title="Cliques totais" hint={`Últimos ${period} dias`}>
            <p className="text-[40px] font-bold leading-none">
              {totals.current.toLocaleString("pt-BR")}
            </p>
            <p className={`mt-3 text-sm font-medium ${up ? "text-emerald-400" : "text-rose-400"}`}>
              {up ? "▲" : "▼"} {Math.abs(totals.change).toFixed(1)}%
              <span className="ml-2 font-normal text-white/45">vs. período anterior</span>
            </p>
          </Card>

          <Card title="Cliques por link" className="lg:col-span-2">
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={byLink} layout="vertical" margin={{ left: 8, right: 16 }}>
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={92}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#0C222B",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 12,
                      color: "#fff",
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="clicks" name="Cliques" fill={ACCENT} radius={[0, 8, 8, 0]} barSize={18} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card
            title="Fluxo por hora do dia"
            hint={`Horário de pico: ${peak.hour} (${peak.clicks.toLocaleString("pt-BR")} cliques)`}
            className="lg:col-span-2"
          >
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={byHour} margin={{ left: -18, right: 8, top: 8 }}>
                  <XAxis
                    dataKey="hour"
                    interval={2}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#0C222B",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 12,
                      color: "#fff",
                      fontSize: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    name="Cliques"
                    stroke={YELLOW}
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card
            title="Público por gênero"
            hint="Dado de exemplo: depende de integração com pixel do Meta ou Google Analytics."
          >
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={gender} dataKey="value" nameKey="name" innerRadius={42} outerRadius={70}>
                    {gender.map((entry, i) => (
                      <Cell key={entry.name} fill={GENDER_COLORS[i % GENDER_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(v: number) => `${v}%`}
                    contentStyle={{
                      background: "#0C222B",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 12,
                      color: "#fff",
                      fontSize: 12,
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-3 space-y-1.5">
              {gender.map((g, i) => (
                <li key={g.name} className="flex items-center gap-2 text-xs text-white/70">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: GENDER_COLORS[i % GENDER_COLORS.length] }}
                  />
                  {g.name}
                  <span className="ml-auto font-medium text-white">{g.value}%</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
