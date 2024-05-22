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
  const [isInversed, setIsInversed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          const intersectionRatio = entry.intersectionRatio;
          const boundingClientRectY = entry.boundingClientRect.y;
          const isTargetInversed =
            (entry.target as HTMLElement).dataset.style === "inversed";

          if (isIntersecting && intersectionRatio && isTargetInversed) {
            const isMovingUpwards = boundingClientRectY < 0;
            const isMovingDownwards = boundingClientRectY > 0;
            const isIntersectingEnough = intersectionRatio > 0.15;
            const isStrongIntersection = intersectionRatio > 0.6;

            if (
              (isMovingUpwards && isIntersectingEnough) ||
              (isMovingDownwards && isStrongIntersection) ||
              (isIntersectingEnough && isInversed)
            ) {
              setIsInversed(true);
            } else {
              setIsInversed(false);
            }
          } else if (!isIntersecting) {
            setIsInversed(false);
          }
        });
      },
      {
        threshold: [0, 0.2, 0.8, 1],
      },
    );
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  }, [isInversed]);

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
      <nav className="flex w-full items-center justify-between p-4 md:p-8">
        <Link
          id="logo"
          href="/"
          aria-label="Arseniiy Kapshtyk's blog - Home"
          className={clsx(
            "relative flex items-center text-4xl text-background after:content-['Arseniiy_Kapshtyk']",
            "transition-colors duration-150 group-data-[status=hidden]:after:content-[''] lg:text-5xl",
            {
              ["text-primary"]: scrollPosition > 75,
              ["text-white"]: isInversed,
            },
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
