import fs from "fs";
import path from "path";

// --- Upstash Redis via REST API (zero dependencies) ---

async function redis(cmd: string[]): Promise<unknown> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  const endpoint = cmd.map(encodeURIComponent).join("/");
  const res = await fetch(`${url}/${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  const json = (await res.json()) as { result: unknown };
  return json.result;
}

function hasRedis(): boolean {
  return !!(
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  );
}

// --- File-based fallback for local dev ---

const DATA_FILE = path.join(process.cwd(), "data", "analytics.json");

interface RawData {
  total: number;
  daily: Record<string, number>;
}

function readFile(): RawData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8")) as RawData;
    }
  } catch {}
  return { total: 0, daily: {} };
}

function writeFile(data: RawData): void {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch {}
}

// --- Shared helpers ---

function todayKey(): string {
  return new Date().toISOString().split("T")[0];
}

// --- Public API ---

export async function trackVisit(): Promise<void> {
  const d = todayKey();

  if (hasRedis()) {
    await Promise.all([
      redis(["INCR", "portfolio:total"]),
      redis(["HINCRBY", "portfolio:daily", d, "1"]),
    ]);
    return;
  }

  const data = readFile();
  data.total++;
  data.daily[d] = (data.daily[d] ?? 0) + 1;

  // Trim entries older than 90 days
  const cutoff = new Date(Date.now() - 90 * 864e5).toISOString().split("T")[0];
  for (const k of Object.keys(data.daily)) {
    if (k < cutoff) delete data.daily[k];
  }
  writeFile(data);
}

export interface Stats {
  total: number;
  today: number;
  week: number;
  daily: Array<{ date: string; count: number }>;
}

export async function getStats(): Promise<Stats> {
  let total = 0;
  let rawDaily: Record<string, number> = {};

  if (hasRedis()) {
    const [t, d] = await Promise.all([
      redis(["GET", "portfolio:total"]),
      redis(["HGETALL", "portfolio:daily"]),
    ]);
    total = parseInt((t as string) ?? "0") || 0;
    // HGETALL returns [key, val, key, val, ...]
    const arr = (d as string[]) ?? [];
    for (let i = 0; i < arr.length; i += 2) {
      rawDaily[arr[i]] = parseInt(arr[i + 1]) || 0;
    }
  } else {
    const data = readFile();
    total = data.total;
    rawDaily = data.daily;
  }

  // Build last 30 days in chronological order
  const daily: Stats["daily"] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i * 864e5).toISOString().split("T")[0];
    daily.push({ date: d, count: rawDaily[d] ?? 0 });
  }

  const t = todayKey();
  const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString().split("T")[0];
  const week = Object.entries(rawDaily)
    .filter(([k]) => k >= weekAgo)
    .reduce((s, [, v]) => s + v, 0);

  return { total, today: rawDaily[t] ?? 0, week, daily };
}
