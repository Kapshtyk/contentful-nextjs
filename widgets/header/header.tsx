"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { Menu } from "@/lib/graphql/generate/graphql";

interface HeaderProps {
  menus: Menu;
}

export const Header = ({ menus }: HeaderProps) => {
  const pathname = usePathname();
  if (!menus) {
    return null;
  }
  console.log(pathname);
  return (
    <header className="absolute z-20">
      <nav className="flex w-full items-center p-4">
        <ul className="flex w-full justify-evenly gap-4">
          {menus?.menuLinksCollection?.items.map(
            (menu) =>
              menu?.slug && (
                <li key={menu.slug}>
                  <Link
                    className={clsx(
                      "block px-4 py-2 text-2xl font-light transition-all duration-200 ease-in-out hover:bg-brand-light",
                      pathname === "/"
                        ? "text-background"
                        : "text-foreground hover:text-background",
                    )}
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
  );
};
