"use client";

import Link from "next/link";
import { createRef, useEffect } from "react";
import clsx from "clsx";
import { stagger, useAnimate } from "framer-motion";
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

  function useMenuAnimation() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      void animate(
        "li",
        {
          opacity: [0, 1],
          scale: [0.3, 1],
          filter: ["blur(20px)", "blur(0px)"],
        },
        {
          duration: 0.4,
          delay: stagger(0.3, { startDelay: 0.7 }),
        },
      );
    }, [animate]);

    return scope;
  }
  const scope = useMenuAnimation();

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
          className="open:animate-menu-appear m-0 flex h-screen w-screen place-content-center bg-primary/80 p-4 backdrop-blur-lg [&:modal]:max-h-full [&:modal]:max-w-full"
          id="mobileMenu"
        >
          <form method="dialog">
            <button
              type="submit"
              tabIndex={0}
              className="absolute right-3 top-4 text-white"
            >
              <PlusIcon className="rotate-45" size={32} />
              <span className="sr-only">Close menu</span>
            </button>
          </form>
          <ul
            ref={scope}
            className="flex w-full flex-col items-center justify-center gap-12"
          >
            {menus &&
              menus.map((menu) => (
                <li key={menu}>
                  <Link
                    className={clsx(
                      "relative block px-4 py-2 text-3xl font-normal text-white after:absolute after:-bottom-2 after:left-1/2 after:h-[8px] after:w-0 after:translate-x-[-50%] after:bg-primary after:transition-all after:duration-150 hover:after:w-full lg:text-2xl",
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
