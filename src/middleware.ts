import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en-US", "fr-CA", "vi", "jp"];

function getLocale(request: NextRequest) {
  // Convert Headers object to plain object for Negotiator
  const headers = Object.fromEntries(request.headers.entries());
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = "en-US";
  
  return match(languages, locales, defaultLocale);
}

export function middleware(req: NextRequest) {
  // Handle resume redirect
  if (req.method === "GET" && req.nextUrl.pathname === "/resume") {
    return NextResponse.redirect(
      new URL("/Anh_Hoang_Nguyen_Resume.pdf", req.url)
    );
  }

  // Handle locale detection
  const pathname = req.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, req.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|.*\\..*).*)',
    // Optional: Add paths you want to skip locale detection
    '/resume'
  ],
};
