import "@/app/globals.css";

import type { Viewport } from "next";
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
import { Header } from "@/widgets/header/header";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#6fc96e",
};

export const metadata = {
  title: "Arseniiy Kapshtyk - Blog",
  description: `This is a blog about web development, programming, and other related topics.`,
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
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  await queryClient.prefetchQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  return (
    <html lang={locale} className={roboto.className}>
      <NextIntlClientProvider messages={messages}>
        <body className="bg-background ">
          {isEnabled && (
            <div className="bg-brand-dark w-full text-center text-background">
              Draft mode enabled
            </div>
          )}
          <Link href="#main-content" className="sr-only">
            Skip to main content
          </Link>
          <Providers>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <Header />
              <main
                id="main-content"
                className="h-screen overflow-x-hidden overflow-y-scroll "
              >
                {children}
              </main>
              {/* <Footer /> */}
            </HydrationBoundary>
          </Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
