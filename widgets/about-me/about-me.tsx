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
      <div className="flex flex-wrap items-center justify-between gap-2 overflow-visible pr-0 md:pr-8 lg:flex-nowrap lg:gap-8">
        <div className="contents lg:block">
          <Markdown className="w-full" document={props.json} />
        </div>
        <div className="d:shadow-none -ml-4 mt-6 flex w-dvw shrink-0 justify-center bg-primary shadow-[0px_65px_0px_0px] shadow-primary md:-order-1 md:m-0 md:w-2/6 md:bg-transparent md:shadow-none lg:order-none lg:mb-0">
          <motion.div
            className={clsx(
              "relative -mt-4 w-1/2 before:absolute before:-z-10 before:size-full before:bg-primary md:mt-0 md:h-fit md:w-full md:before:-bottom-4 md:before:-left-4",
            )}
            initial={{ opacity: 0, x: -10 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Corner
              aria-hidden="true"
              className="absolute -right-8 -top-8 hidden size-32  rotate-180 text-primary-foreground md:block"
            />

            {img?.url && img.width && (
              <ContentfulImage
                className="z-40 object-contain"
                src={img.url}
                sizes="(min-width: 768) 33vw, 50vw"
                width={img.width}
                height={img.height}
                alt={img.title}
                priority={true}
              />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};
