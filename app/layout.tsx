import "./globals.css";

import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import Link from "next/link";

import { getMenu } from "@/lib/api/menu";
import { CMS_NAME, EXAMPLE_PATH } from "@/lib/constants";

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode();
  const menus = await getMenu();
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {isEnabled && (
          <div className="w-full text-center text-white bg-red-300">
            Draft mode enabled
          </div>
        )}
        <header>
          <nav className="w-full bg-red-50 p-4">
            <ul className="w-full flex gap-4 justify-evenly bg-red-50">
              {menus?.menuLinksCollection?.items.map(
                (menu) =>
                  menu?.slug && (
                    <li key={menu.slug}>
                      <Link href={menu.slug}>{menu?.title}</Link>
                    </li>
                  ),
              )}
            </ul>
          </nav>
        </header>
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
