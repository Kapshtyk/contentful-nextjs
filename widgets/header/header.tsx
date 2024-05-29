"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

import { Menu } from "@/lib/graphql/generate/graphql";

import Logo from "@/shared/icons/logo.svg";
import { MobileMenu } from "@/widgets/mobile-menu";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { data: menus } = useQuery<Menu>({ queryKey: ["menu"] });
  const pathname = usePathname();
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!menus) {
    return null;
  }

  const isHeaderTransparent =
    scrollPosition <= 100 && (pathname === "/ru" || pathname === "/en");

  return (
    <header
      className={clsx(
        "group fixed inset-x-0 z-50 flex h-16 items-center justify-between px-4 transition-all duration-150",
        {
          ["bg-transparent"]: isHeaderTransparent,
          ["bg-white/80 shadow-[inset_0px_-1px_0px_0px] shadow-slate-200 backdrop-blur-md"]:
            !isHeaderTransparent,
        },
      )}
    >
      <Link
        id="logo"
        href="/"
        className={clsx(
          "relative flex items-center text-4xl",
          "transition-all duration-150",
          {
            ["text-background"]: isHeaderTransparent,
            ["text-primary"]: !isHeaderTransparent,
          },
        )}
      >
        <Logo className="w-12" />
        <span className="sr-only">{t("homepage")}</span>
      </Link>
      <nav role="navigation" className="flex w-full items-center justify-end">
        <ul className="hidden justify-end gap-4 transition-all duration-75 sm:flex">
          {menus?.menuLinks &&
            menus.menuLinks.map(
              (menu) =>
                menu !== "/" && (
                  <li key={menu}>
                    <Link
                      className={clsx(
                        "relative block px-4 py-2 text-xl font-normal after:absolute after:-bottom-2 after:left-1/2 after:h-[8px] after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-150 hover:after:w-full lg:text-2xl",
                        {
                          ["text-white"]: isHeaderTransparent,
                          ["text-primary"]: !isHeaderTransparent,
                        },
                      )}
                      href={`/#${menu?.split(" ").join("-").toLowerCase()}`}
                    >
                      {t(menu as keyof IntlMessages)}
                    </Link>
                  </li>
                ),
            )}
        </ul>
        {menus.menuLinks && (
          <MobileMenu
            className={clsx({
              ["text-white"]: isHeaderTransparent,
              ["text-primary"]: !isHeaderTransparent,
            })}
            menus={menus.menuLinks}
          />
        )}
      </nav>
    </header>
  );
};
