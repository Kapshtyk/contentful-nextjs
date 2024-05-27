"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

import ContentfulImage from "@/lib/contentful-image";
import { Frontpage } from "@/lib/graphql/generate/graphql";
import { Markdown } from "@/lib/markdown";

import Corner from "@/shared/icons/corner.svg";

export const AboutMe = (props: Frontpage["description"]) => {
  if (!props) {
    return null;
  }
  const img = props.links.assets.block[0];
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 pr-0 md:pr-8 lg:flex-nowrap lg:gap-8">
        <div className="contents lg:block">
          <Markdown className="w-full" document={props.json} />
        </div>
        <motion.div
          className={clsx(
            "relative mb-8 h-[450px] w-full flex-shrink-0 overflow-hidden before:absolute before:-bottom-4",
            "before:-left-4 before:-z-10 before:h-full before:w-full before:bg-primary md:-order-1 md:h-fit md:w-2/6 md:overflow-visible",
            "lg:order-none lg:mb-0 lg:w-[400px]",
          )}
          initial={{ opacity: 0, x: -10 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Corner className="absolute -right-8 -top-8  h-32 w-32 rotate-180 text-primary-foreground" />

          {img?.url && img.width && (
            <ContentfulImage
              className="z-40 object-contain"
              src={img.url}
              width={img.width}
              height={img.height}
            />
          )}
        </motion.div>
      </div>
    </>
  );
};
