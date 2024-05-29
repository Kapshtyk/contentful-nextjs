/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { inView, useAnimate } from "framer-motion";

import { Technologies as TechnologiesType } from "@/lib/graphql/generate/graphql";

import Arrow from "@/shared/icons/arrow.svg";
import Logo from "@/shared/icons/logo.svg";
import { Heading } from "@/shared/ui/heading";

function useAnimation() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    inView(".tech", ({ target }) => {
      void animate(
        target,
        { x: [300, 0], opacity: [0, 1] },
        { type: "tween", duration: 0.3 },
      );
    });
  }, [animate]);

  return scope;
}

export const Technologies = ({
  frontend,
  backend,
  testing,
  title,
}: NonNullable<TechnologiesType>) => {
  const t = useTranslations();
  const scope = useAnimation();

  const filteredTechnologies = [frontend, backend, testing].filter(Boolean);

  return (
    <>
      <Heading inversed level={2}>
        {title}
      </Heading>
      <div ref={scope} className="relative flex flex-col gap-12">
        <Arrow
          aria-hidden="true"
          className="absolute -top-6 right-0 hidden size-24 -rotate-90 text-white sm:block"
        />
        <Logo
          aria-hidden="true"
          className="absolute bottom-0 left-0 hidden w-2/12 text-white md:block"
        />
        {filteredTechnologies.length > 0 &&
          filteredTechnologies.map((technology) => {
            return (
              technology && (
                <div
                  className="flex flex-col sm:flex-row sm:gap-12"
                  key={technology?.title}
                >
                  <Heading inversed className="relative mb-0 w-3/12" level={3}>
                    {t(technology?.title as keyof IntlMessages)}
                  </Heading>
                  <div className="flex flex-col gap-4 md:w-9/12">
                    {Object.keys(technology)
                      .filter((key) => {
                        if (
                          key === "__typename" ||
                          key === "contentfulMetadata" ||
                          key === "sys" ||
                          key === "title"
                        ) {
                          return false;
                        } else {
                          return true;
                        }
                      })
                      .map((key) => {
                        return (
                          <div key={key}>
                            <Heading inversed className="mb-0" level={4}>
                              {t(key as keyof IntlMessages)}
                            </Heading>
                            <ul className="flex flex-wrap gap-4">
                              {(technology as any)[key].map((item: string) => {
                                return (
                                  <li
                                    key={item}
                                    className="tech relative inline-flex border-2 border-primary-foreground bg-white px-2 py-1 font-normal text-primary-foreground shadow-[-4px_4px_0px_0px] shadow-primary-foreground"
                                  >
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )
            );
          })}
      </div>
    </>
  );
};
