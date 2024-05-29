import "@/app/globals.css";

import type { Metadata, Viewport } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getContacts } from "@/lib/api/contacts";
import { getMenu } from "@/lib/api/menu";

import Providers from "./providers";

import { roboto } from "@/app/fonts";
import { locales } from "@/i18n";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header/header";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#6fc96e",
};

export const metadata: Metadata = {
  title: {
    default: "Arseniiy Kapshtyk - Portfolio",
    template: "%s | Arseniiy Kapshtyk - Portfolio",
  },
  description:
    "This is a portfolio of Arseniiy Kapshtyk - a fullstack developer",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: "en" | "ru" };
}) {
  unstable_setRequestLocale(locale);
  const { isEnabled } = draftMode();
  const messages = await getMessages({ locale });
  const menu = await getMenu();
  const contacts = await getContacts();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
    initialData: menu,
  });

  await queryClient.prefetchQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
    initialData: contacts,
  });

  return (
    <html lang={locale} className={roboto.className}>
      <NextIntlClientProvider messages={messages}>
        <body className="bg-background ">
          {isEnabled && (
            <div className="w-full bg-primary text-center text-white">
              Draft mode enabled
            </div>
          )}
          <Link href="#main-content" className="sr-only">
            Skip to main content
          </Link>
          <Providers>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <Header />
              <main id="main-content" className="overflow-x-hidden">
                {children}
              </main>
              <Footer />
            </HydrationBoundary>
          </Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
