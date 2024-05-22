import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "./i18n";

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export default function getMidleware(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(ru|en)/:path*"],
};
