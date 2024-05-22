import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const defaultLocale = "en";
export const locales = ["en", "ru"] as const;

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale)
    .baseName as (typeof locales)[number];
  if (!locales.includes(baseLocale)) notFound();

  return {
    messages: (await import(`./messages/${baseLocale}.json`)).default,
  };
});
