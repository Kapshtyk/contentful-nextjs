"use client";

import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { motion } from "framer-motion";

import {
  Backend,
  Frontend,
  Technologies as TechnologiesType,
  Testing,
} from "@/lib/graphql/generate/graphql";

import { Heading } from "@/shared/ui/heading";

export const Technologies = ({
  frontend,
  backend,
  title,
}: NonNullable<TechnologiesType>) => {
  const t = useTranslations();

  const variants = {
    hidden: { opacity: 0, x: -10 },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  const filteredTechnologies = [frontend, backend].filter(Boolean);

  const getTechlogies = (technology: Frontend | Backend | Testing) => {
    const keys = Object.keys(technology).filter((key) => {
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
    });
    const result = keys.map((key) => {
      return (
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          key={key}
          className="bg-white p-4"
        >
          <dt>
            <p className="heading-4">{t(key as keyof IntlMessages)}</p>
          </dt>
          <div className="flex flex-wrap gap-2">
            {(technology as any)[key].map((item: string) => {
              return (
                <motion.dd
                  key={item}
                  className="inline-flex rounded-full border-2 border-primary bg-white px-4 py-2 font-medium"
                  variants={variants}
                  initial="hidden"
                  whileInView="show"
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.dd>
              );
            })}
          </div>
        </motion.div>
      );
    });
    return result;
  };

  return (
    <>
      <Heading inversed level={2}>
        {title}
      </Heading>
      {filteredTechnologies.length > 0 &&
        filteredTechnologies.map((technology) => {
          return (
            technology && (
              <Fragment key={technology?.title}>
                <Heading inversed level={3}>
                  {t(technology?.title as keyof IntlMessages)}
                </Heading>
                <dl className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {getTechlogies(technology)}
                </dl>
              </Fragment>
            )
          );
        })}
    </>
  );
};
