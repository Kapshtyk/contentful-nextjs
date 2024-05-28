"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import clsx from "clsx";
import FocusTrap from "focus-trap-react";
import { stagger, useAnimate } from "framer-motion";
import { MenuIcon, PlusIcon } from "lucide-react";

import { Menu } from "@/lib/graphql/generate/graphql";

import { SocialLinks } from "@/widgets/social-links";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    void animate(
      "ul",
      {
        clipPath: isOpen ? "inset(0% 0% 0% 0%)" : "inset(10% 50% 90% 50%)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      },
    );

    void animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      },
    );
  }, [isOpen, animate]);

  return scope;
}

export const MobileMenu = ({
  className,
  menus,
}: {
  menus: Menu["menuLinks"];
  className: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const t = useTranslations();

  useEffect(() => {
    const el = document.scrollingElement as HTMLElement;
    if (isOpen && el) {
      el.style.overflow = "hidden";
    } else {
      el.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <FocusTrap active={isOpen}>
      <div
        ref={scope}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setIsOpen(false);
          }
        }}
      >
        <button
          className="peer block sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          tabIndex={isOpen ? -1 : 0}
        >
          <MenuIcon
            className={clsx("transition-all duration-150", className)}
            size={32}
            aria-hidden="true"
          />
          <span className="sr-only">Open navigation menu</span>
        </button>
        <div className="absolute left-0 top-0 hidden h-dvh w-full flex-col justify-between bg-primary p-4 peer-aria-expanded:flex">
          <button
            className="-mr-1 -mt-1 self-end text-white"
            onClick={() => setIsOpen(false)}
            aria-expanded={isOpen}
          >
            <PlusIcon
              className="rotate-45 transition-all duration-150"
              size={40}
              aria-hidden="true"
            />
            <span className="sr-only">Close navigation menu</span>
          </button>
          <ul className="flex flex-col items-center justify-center gap-12">
            {menus &&
              menus.map((menu) => (
                <li key={menu}>
                  <Link
                    className={clsx(
                      "relative block px-4 py-2 text-3xl font-normal text-white after:absolute after:-bottom-2 after:left-1/2 after:h-[8px] after:w-0 after:translate-x-[-50%] after:bg-primary after:transition-all after:duration-150 hover:after:w-full lg:text-2xl",
                    )}
                    href={`/${menu === "/" ? "" : "#" + menu?.split(" ").join("-").toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t(menu as keyof IntlMessages)}
                  </Link>
                </li>
              ))}
          </ul>
          <SocialLinks />
        </div>
      </div>
    </FocusTrap>
  );
};
