import { notFound } from "next/navigation";
import { getStats } from "@/lib/analytics";

export const dynamic = "force-dynamic";

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
      <p className="text-xs text-[#52525b] font-medium uppercase tracking-widest mb-2">
        {label}
      </p>
      <p className="text-4xl font-semibold text-[#fafafa] tabular-nums">
        {value.toLocaleString()}
      </p>
    </div>
  );
}

function BarChart({ data }: { data: Array<{ date: string; count: number }> }) {
  const max = Math.max(...data.map((d) => d.count), 1);

  return (
    <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
      <p className="text-xs text-[#52525b] font-medium uppercase tracking-widest mb-6">
        Últimos 30 días
      </p>
      <div className="flex items-end gap-1 h-32">
        {data.map(({ date, count }) => (
          <div
            key={date}
            className="flex-1 flex flex-col items-center gap-1 group"
            title={`${date}: ${count} visitas`}
          >
            <div
              className="w-full rounded-sm bg-indigo-500/60 group-hover:bg-indigo-400 transition-colors"
              style={{ height: `${Math.max((count / max) * 100, count > 0 ? 4 : 0)}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[10px] text-[#3f3f46]">{data[0]?.date}</span>
        <span className="text-[10px] text-[#3f3f46]">
          {data[data.length - 1]?.date}
        </span>
      </div>
    </div>
  );
}

function DailyTable({ data }: { data: Array<{ date: string; count: number }> }) {
  const nonEmpty = [...data].reverse().filter((d) => d.count > 0);

  return (
    <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
      <p className="text-xs text-[#52525b] font-medium uppercase tracking-widest mb-4">
        Detalle por día
      </p>
      {nonEmpty.length === 0 ? (
        <p className="text-sm text-[#3f3f46]">Sin visitas registradas todavía.</p>
      ) : (
        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
          {nonEmpty.map(({ date, count }) => (
            <div
              key={date}
              className="flex items-center justify-between py-1.5 border-b border-white/[0.04]"
            >
              <span className="text-sm text-[#71717a] font-mono">{date}</span>
              <span className="text-sm font-medium text-[#e4e4e7] tabular-nums">
                {count} {count === 1 ? "visita" : "visitas"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  const adminKey = process.env.ADMIN_KEY;

  if (!adminKey || key !== adminKey) {
    notFound();
  }

  const stats = await getStats();
  const keepUrl = `?key=${key}`;

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs text-[#52525b] font-mono mb-1">
            AM. · Panel privado
          </p>
          <h1 className="text-2xl font-semibold text-[#fafafa]">
            Analytics del portfolio
          </h1>
          <p className="text-sm text-[#52525b] mt-1">
            Guardá esta URL:{" "}
            <code className="text-indigo-400 text-xs bg-indigo-500/10 px-1.5 py-0.5 rounded">
              /admin{keepUrl}
            </code>
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <StatCard label="Total visitas" value={stats.total} />
          <StatCard label="Hoy" value={stats.today} />
          <StatCard label="Esta semana" value={stats.week} />
        </div>

        {/* Chart */}
        <div className="mb-6">
          <BarChart data={stats.daily} />
        </div>

        {/* Table */}
        <DailyTable data={stats.daily} />

        {/* Footer note */}
        <p className="text-xs text-[#3f3f46] text-center mt-8">
          Se cuentan visitas reales de browsers (se filtran bots).
          {!process.env.UPSTASH_REDIS_REST_URL && (
            <span className="ml-1 text-amber-500">
              Modo dev: datos guardados en{" "}
              <code>data/analytics.json</code>.
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
