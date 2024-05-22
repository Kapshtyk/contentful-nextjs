import "./globals.css";

import type { Viewport } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";

import { getMenu } from "@/lib/api/menu";

import { roboto } from "./fonts";

import { Header } from "@/widgets/header/header";

export const viewport: Viewport = {
  themeColor: "#6fc96e",
};

export const metadata = {
  title: "Arseniiy Kapshtyk - Blog",
  description: `This is a blog about web development, programming, and other related topics.`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode();

  const menus = await getMenu();
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-background ">
        {isEnabled && (
          <div className="bg-brand-dark w-full text-center text-background">
            Draft mode enabled
          </div>
        )}
        <Header menus={menus} />
        <Link href="#main-content" className="sr-only">
          Skip to main content
        </Link>
        <div>
          <main
            id="main-content"
            className="flex h-screen flex-col items-center overflow-x-hidden overflow-y-scroll "
          >
            {children}
          </main>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
