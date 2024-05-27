"use client";

import Link from "next/link";
import { createRef } from "react";
import clsx from "clsx";
import { MenuIcon, PlusIcon } from "lucide-react";

import { Menu } from "@/lib/graphql/generate/graphql";

import { Portal } from "@/widgets/portal/portal";

const MobileMenu = ({
  className,
  menus,
}: {
  menus: Menu["menuLinks"];
  className: string;
}) => {
  const ref = createRef<HTMLDialogElement>();
  return (
    <>
      <button
        className="block sm:hidden"
        onClick={() => {
          ref?.current?.showModal();
        }}
      >
        <MenuIcon
          className={clsx("transition-all duration-150", className)}
          size={24}
        />
        <span className="sr-only">Open navigation menu</span>
      </button>
      <Portal wrapperId="modal">
        <dialog
          ref={ref}
          className="m-0 h-screen w-screen bg-white/80 p-4 backdrop-blur-lg open:animate-menu-appear  [&:modal]:max-h-full [&:modal]:max-w-full"
          id="mobileMenu"
        >
          <form method="dialog">
            <button
              type="submit"
              tabIndex={0}
              onClick={() => ref?.current?.close()}
            >
              <PlusIcon
                className="absolute right-3 top-4 rotate-45 text-primary"
                size={32}
              />
              <span className="sr-only">Close menu</span>
            </button>
          </form>
          <ul className="flex h-3/4 w-full flex-col items-center justify-center gap-6">
            {menus &&
              menus.map((menu) => (
                <li key={menu}>
                  <Link
                    className={clsx(
                      "relative block px-4 py-2 text-xl font-normal text-primary after:absolute after:-bottom-2 after:left-1/2 after:h-[8px] after:w-0 after:translate-x-[-50%] after:bg-primary after:transition-all after:duration-150 hover:after:w-full lg:text-2xl",
                    )}
                    href={`#${menu?.split(" ").join("-").toLowerCase()}`}
                    onClick={() => ref?.current?.close()}
                  >
                    {menu}
                  </Link>
                </li>
              ))}
          </ul>
        </dialog>
      </Portal>
    </>
  );
};

export default MobileMenu;
