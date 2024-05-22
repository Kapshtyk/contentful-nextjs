"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";

import { Menu } from "@/lib/graphql/generate/graphql";

import { cookie } from "@/app/fonts";
import Logo from "@/shared/icons/logo.svg";

interface HeaderProps {
  menus: Menu;
}

export const Header = ({ menus }: HeaderProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const mainContent = document.getElementById("main-content");

    const handleScroll = () => {
      if (!mainContent) {
        return;
      }
      setScrollPosition(mainContent.scrollTop);
    };

    mainContent?.addEventListener("scroll", handleScroll);

    return () => {
      mainContent?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!menus) {
    return null;
  }

  return (
    <header
      className="group fixed z-50 w-full"
      data-status={scrollPosition > 75 ? "hidden" : "visible"}
    >
      <nav className="flex w-full items-center justify-between p-8">
        <Link
          href="/"
          aria-label="Arseniiy Kapshtyk's blog - Home"
          className={clsx(
            "relative flex items-center text-4xl text-background after:content-['Arseniiy_Kapshtyk'] group-data-[status=hidden]:text-primary",
            "transition-colors duration-150 group-data-[status=hidden]:after:content-[''] lg:text-5xl",
            cookie.className,
          )}
        >
          <Logo className="mr-4 w-12" />
        </Link>
        <ul className="hidden justify-end gap-4 transition-all duration-75 group-data-[status=hidden]:opacity-0 sm:flex">
          {menus?.menuLinksCollection?.items.map(
            (menu) =>
              menu?.slug && (
                <li key={menu.slug}>
                  <Link
                    className={clsx(
                      "relative block px-4 py-2 text-xl font-light after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-0 after:translate-x-[-50%] after:bg-primary after:transition-all after:duration-150 after:content-[''] hover:after:w-full lg:text-2xl",
                      pathname === "/" ? "text-background" : "text-background",
                    )}
                    href={`#${menu.slug}`}
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
