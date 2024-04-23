"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";

import ContentfulImage from "@/lib/contentful-image";
import { Frontpage } from "@/lib/graphql/generate/graphql";

import { Button } from "@/shared/ui/button";
import { Paragraph } from "@/shared/ui/paragraph";

interface HeroBannerProps {
  hero: Frontpage["hero"];
}

export function HeroBanner({ hero }: HeroBannerProps) {
  if (!hero) {
    return null;
  }
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.22, delayChildren: 0.07 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex min-h-[100vh] w-[100vw] flex-col bg-foreground/50 py-20 ">
        <div className="flex h-full flex-col gap-4 p-8 md:w-10/12 lg:w-8/12 lg:gap-8 xl:gap-12">
          <motion.div
            className="mb-0 flex flex-wrap text-balance text-6xl leading-none text-background xl:text-8xl"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {hero.slogan?.split(" ").map((word, index) => (
              <motion.span
                className="mr-4 block text-balance text-6xl font-black leading-none text-background xl:text-8xl"
                variants={child}
                key={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <Paragraph className="text-background">
              {hero.description}
            </Paragraph>
          </motion.div>
          <motion.div
            className="mt-4 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <Button variant="default" size="lg" asChild>
              <Link href={hero.primaryLink || "/"}>Get started</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href={hero.secondaryLink || "/"}>Get started</Link>
            </Button>
          </motion.div>
        </div>
        <ContentfulImage
          src={hero.heroImage?.url || ""}
          className="-z-10 object-cover"
          fill={true}
          alt={hero.title}
        />
      </section>
    </MotionConfig>
  );
}
