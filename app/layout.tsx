import "./globals.css";

import { Roboto } from "next/font/google";
import { draftMode } from "next/headers";
import Link from "next/link";

import { getMenu } from "@/lib/api/menu";
import { CMS_NAME } from "@/lib/constants";

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
        <header>
          <nav className="flex w-full items-center p-4">
            <ul className="flex w-full justify-evenly gap-4">
              {menus?.menuLinksCollection?.items.map(
                (menu) =>
                  menu?.slug && (
                    <li key={menu.slug}>
                      <Link
                        className="block px-4 py-2 text-2xl font-light text-brand transition-all duration-200 ease-in-out hover:bg-brand hover:text-background"
                        href={menu.slug}
                      >
                        {menu?.title}
                      </Link>
                    </li>
                  ),
              )}
            </ul>
          </nav>
        </header>
        <section className="min-h-screen">
          <main className="container">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
