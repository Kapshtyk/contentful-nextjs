"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

import ContentfulImage from "@/lib/contentful-image";
import { Frontpage } from "@/lib/graphql/generate/graphql";

import Arrow from "@/shared/icons/arrow.svg";
import Corner from "@/shared/icons/corner.svg";
import { Heading } from "@/shared/ui/heading";
import { Paragraph } from "@/shared/ui/paragraph";

interface HeroBannerProps {
  hero: Frontpage["hero"];
}

export function HeroBanner({ hero }: HeroBannerProps) {
  if (!hero) {
    return null;
  }

  return (
    <section
      className={clsx(
        "section relative flex flex-col items-center bg-gradient-to-b from-primary from-70% to-primary-foreground",
        "min-h-dvh to-70% px-4 pt-20 md:flex-row md:bg-gradient-to-r md:px-0 md:pt-20 lg:from-65% lg:to-65%",
      )}
    >
      <Corner
        aria-hidden="true"
        className="absolute hidden size-32 -rotate-90 text-primary md:bottom-8 md:right-4 md:block lg:right-8"
      />
      <Arrow
        aria-hidden="true"
        className="absolute hidden size-24 text-primary-foreground md:bottom-8 md:left-16 md:block lg:left-24"
      />
      <div className="relative md:w-[65%] md:pl-8 md:pr-[5%] lg:pr-[15%]">
        <div className="flex min-h-[350px] flex-col justify-center gap-8 md:min-h-[550px] md:pl-8 lg:pl-16">
          <Heading
            level={1}
            className="contents text-6xl font-bold leading-none text-primary-foreground"
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-extralight"
            >
              {hero.title}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl"
            >
              {hero.slogan}
            </motion.span>
          </Heading>
        </div>
      </div>
      <div
        className={clsx(
          "relative block h-[450px] w-full self-center before:absolute before:-right-4 before:-top-4 before:hidden before:h-full md:mr-4",
          "before:w-full before:bg-primary after:absolute after:-bottom-4 after:left-1/2 after:h-full after:w-dvw after:-translate-x-1/2",
          "after:bg-primary-foreground md:h-[400px] md:after:translate-x-0",
          "md:w-[325px] md:before:block md:after:-left-4 md:after:w-full lg:ml-[-120px] lg:h-[460px] lg:w-[360px]",
        )}
      >
        <ContentfulImage
          src={hero.heroImage?.url || ""}
          className="z-50 object-contain md:object-cover"
          fill={true}
          sizes="(min-width: 768) 33vw, 50vw"
          alt={hero.heroImage?.title || ""}
          aria-hidden
        />
      </div>
    </section>
  );
}
