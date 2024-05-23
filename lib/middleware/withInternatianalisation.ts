import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { MiddlewareFactory } from "./types";

import { defaultLocale, locales } from "@/i18n";

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export const withInternationalisation: MiddlewareFactory = () => {
  return (req: NextRequest) => {
    return nextIntlMiddleware(req);
  };
};
