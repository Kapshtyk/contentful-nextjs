"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { inView, stagger, useAnimate } from "framer-motion";

import { Technologies as TechnologiesType } from "@/lib/graphql/generate/graphql";

import Arrow from "@/shared/icons/arrow.svg";
import Logo from "@/shared/icons/logo.svg";
import { Heading } from "@/shared/ui/heading";

function useMenuAnimation() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    inView("li", ({ target }) => {
      void animate(
        target,
        { x: [900, 0] },
        { type: "spring", duration: 0.6, delay: stagger(0.6) },
      );
    });
  }, [animate]);

  return scope;
}

export const Technologies = ({
  frontend,
  backend,
  title,
}: NonNullable<TechnologiesType>) => {
  const t = useTranslations();
  const scope = useMenuAnimation();

  const filteredTechnologies = [frontend, backend].filter(Boolean);

  return (
    <>
      <Heading inversed level={2}>
        {title}
      </Heading>
      <div ref={scope} className="relative flex flex-col gap-12">
        <Arrow className="absolute -top-6 right-0 hidden h-24 w-24 -rotate-90 text-white  sm:block" />
        {filteredTechnologies.length > 0 &&
          filteredTechnologies.map((technology) => {
            return (
              technology && (
                <div
                  className="flex flex-col sm:flex-row sm:gap-8"
                  key={technology?.title}
                >
                  <Heading inversed className="relative mb-0 w-3/12" level={3}>
                    {t(technology?.title as keyof IntlMessages)}
                    <Logo className="absolute bottom-0 left-0 hidden w-full opacity-50 md:block" />
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
                                    className="relative inline-flex border-2 border-primary-foreground bg-white px-2 py-1 font-normal text-primary-foreground shadow-[-4px_4px_0px_0px] shadow-primary-foreground"
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
