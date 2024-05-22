"use client";

import { useTranslations } from "next-intl";

import {
  Frontend,
  FrontpageTechnologies,
} from "@/lib/graphql/generate/graphql";

import { Heading } from "@/shared/ui/heading";

export const Technologies = (props: FrontpageTechnologies) => {
  const t = useTranslations();
  let frontend;
  if (
    props?.links?.entries?.block[0] &&
    "__typename" in props.links.entries.block[0] &&
    props.links.entries.block[0].__typename === "Frontend"
  ) {
    frontend = props.links.entries.block[0] as Frontend;
  }
  if (!frontend) {
    return null;
  }
  return (
    <>
      <Heading inversed level={3}>
        {frontend.title}
      </Heading>
      <div>
        {Object.keys(frontend).map((key) => {
          if (
            key === "title" ||
            key === "__typename" ||
            key === "sys" ||
            key === "contentfulMetadata"
          ) {
            return null;
          } else {
            return (
              <div key={key}>
                <strong>{t(key as keyof IntlMessages)}</strong>:{" "}
                {JSON.stringify(frontend[key], null, 2)}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
