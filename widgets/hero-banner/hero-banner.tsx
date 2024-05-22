"use client";
import clsx from "clsx";

import ContentfulImage from "@/lib/contentful-image";
import { Frontpage } from "@/lib/graphql/generate/graphql";

import Arrow from "@/shared/icons/arrow.svg";
import Corner from "@/shared/icons/corner.svg";
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
        "min-h-screen to-70% px-4 pt-20 md:flex-row md:bg-gradient-to-r md:px-0 md:pt-20 lg:from-65% lg:to-65%",
      )}
    >
      <Corner className="absolute hidden h-32 w-32 -rotate-90 text-primary md:bottom-8 md:right-4 md:block lg:right-8" />
      <Arrow className="absolute hidden h-32 w-32 text-primary-foreground md:bottom-8 md:left-16 md:block lg:left-24" />
      <div className="relative md:w-[65%] md:pl-8 md:pr-[5%] lg:pr-[15%]">
        <div className="flex min-h-[300px] flex-col justify-evenly md:min-h-[460px] md:pl-8 lg:pl-16">
          <Paragraph className="text-6xl font-black leading-none text-primary-foreground">
            {hero.slogan}
          </Paragraph>
          <Paragraph className="text-background">{hero.description}</Paragraph>
        </div>
        {/* <motion.div
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
          </motion.div> */}
      </div>
      <div
        className={clsx(
          "relative block h-[450px] w-full self-center before:absolute before:-right-4 before:-top-4 before:hidden before:h-full md:mr-4",
          "before:w-full before:bg-primary after:absolute after:-bottom-4 after:left-[50%] after:h-full after:w-dvw after:-translate-x-1/2",
          "after:bg-primary-foreground md:h-[400px] md:after:-left-4 md:after:translate-x-0",
          "md:w-[325px] md:before:block md:after:-left-4 md:after:w-full lg:-ml-[120px] lg:h-[460px]  lg:w-[360px]",
        )}
      >
        <ContentfulImage
          src={hero.heroImage?.url || ""}
          className="z-50 object-contain md:object-cover"
          fill={true}
          alt={hero.title}
        />
      </div>
    </section>
  );
}
