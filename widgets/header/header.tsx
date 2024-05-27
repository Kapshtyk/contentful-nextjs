"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { Menu } from "@/lib/graphql/generate/graphql";

import Logo from "@/shared/icons/logo.svg";

const MobileMenu = dynamic(() => import("../mobile-menu/mobile-menu"), {
  ssr: false,
});

interface HeaderProps {
  menus: Menu;
}

export const Header = ({ menus }: HeaderProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
      className={clsx(
        "group fixed z-50 flex h-16 w-full items-center px-4 transition-all duration-150",
        {
          ["bg-transparent"]: scrollPosition <= 100,
          ["bg-white/80 shadow-[inset_0px_-1px_0px_0px] shadow-slate-200 backdrop-blur-md"]:
            scrollPosition > 100,
        },
      )}
    >
      <nav className="flex w-full items-center justify-between">
        <Link
          id="logo"
          href="/"
          aria-label="Arseniiy Kapshtyk's portfolio - Home"
          className={clsx(
            "relative flex items-center text-4xl",
            "transition-all duration-150",
            {
              ["text-background"]: scrollPosition <= 100,
              ["text-primary"]: scrollPosition > 100,
            },
          )}
        >
          <Logo className="mr-4 w-12" />
        </Link>
        <ul className="hidden justify-end gap-4 transition-all duration-75 sm:flex">
          {menus?.menuLinks &&
            menus.menuLinks.map((menu) => (
              <li key={menu}>
                <Link
                  className={clsx(
                    "relative block px-4 py-2 text-xl font-normal after:absolute after:-bottom-2 after:left-1/2 after:h-[8px] after:w-0 after:translate-x-[-50%] after:bg-primary after:transition-all after:duration-150 hover:after:w-full lg:text-2xl",
                    {
                      ["text-white"]: scrollPosition <= 100,
                      ["text-primary"]: scrollPosition > 100,
                    },
                  )}
                  href={`#${menu?.split(" ").join("-").toLowerCase()}`}
                >
                  {menu}
                </Link>
              </li>
            ))}
        </ul>
        {menus.menuLinks && (
          <MobileMenu
            className={clsx({
              ["text-white"]: scrollPosition <= 100,
              ["text-primary"]: scrollPosition > 100,
            })}
            menus={menus.menuLinks}
          />
        )}
      </nav>
    </header>
  );
};
