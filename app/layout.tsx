import "./globals.css";

import type { Viewport } from "next";
import { Roboto } from "next/font/google";
import { draftMode } from "next/headers";

import { getMenu } from "@/lib/api/menu";
import { CMS_NAME } from "@/lib/constants";

import { Header } from "@/widgets/header/header";

export const viewport: Viewport = {
  themeColor: "#301b2b",
};

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

function Footer() {
  return <footer className="bg-accent-1 border-accent-2 border-t"></footer>;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode();

  const menus = await getMenu();
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-background">
        {isEnabled && (
          <div className="w-full bg-brand-dark text-center text-background">
            Draft mode enabled
          </div>
        )}
        <Header menus={menus} />
        <section className="min-h-screen">
          <main className="container">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
