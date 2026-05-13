import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const headers = { "accept-language": acceptLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const matchedLocale = locales.find(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (matchedLocale) {
    // Forward detected lang to Server Components via request header
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-lang", matchedLocale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|admin|api|.*\\..*).*)"],
};
