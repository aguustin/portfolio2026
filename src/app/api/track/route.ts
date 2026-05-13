import { NextRequest, NextResponse } from "next/server";
import { trackVisit } from "@/lib/analytics";

const BOT_PATTERNS = /bot|crawler|spider|slurp|baiduspider|googlebot|bingbot|facebookexternalhit|twitterbot/i;

export async function POST(req: NextRequest): Promise<NextResponse> {
  const ua = req.headers.get("user-agent") ?? "";
  if (BOT_PATTERNS.test(ua)) {
    return NextResponse.json({ ok: true });
  }

  await trackVisit();
  return NextResponse.json({ ok: true });
}
