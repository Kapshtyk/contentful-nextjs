"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";

import { Menu } from "@/lib/graphql/generate/graphql";

interface HeaderProps {
  menus: Menu;
}

export const Header = ({ menus }: HeaderProps) => {
  const pathname = usePathname();
  if (!menus) {
    return null;
  }
  return (
    <header className="absolute z-20 w-full">
      <nav className="flex w-full items-center justify-between p-8">
        <Link
          href="/"
          className="w-96 text-2xl font-bold text-background lg:text-3xl"
        >
          Arseniiy Kapshtyk
        </Link>
        <ul className="hidden w-full justify-end gap-4 sm:flex">
          {menus?.menuLinksCollection?.items.map(
            (menu) =>
              menu?.slug && (
                <li key={menu.slug}>
                  <Link
                    className={clsx(
                      "block px-4 py-2 text-xl font-light transition-all duration-200 ease-in-out hover:bg-brand-light lg:text-2xl",
                      pathname === "/" ? "text-background" : "text-background",
                    )}
                    href={menu.slug}
                  >
                    {menu?.title}
                  </Link>
                </li>
              ),
          )}
        </ul>
        <MenuIcon className="block h-8 w-8 text-background sm:hidden" />
      </nav>
    </header>
  );
};
