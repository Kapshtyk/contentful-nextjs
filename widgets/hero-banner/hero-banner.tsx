import Link from "next/link";

import ContentfulImage from "@/lib/contentful-image";
import { Frontpage } from "@/lib/graphql/generate/graphql";

import { Button } from "@/shared/ui/button";
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
    <section className="relative flex min-h-[100dvh] w-[100vw] flex-col bg-foreground/50 py-20 ">
      <div className="flex h-full flex-col gap-6 px-8 md:w-10/12 lg:w-8/12 lg:gap-10 xl:gap-16">
        <Heading
          className="mb-0 text-balance text-6xl leading-none text-background xl:text-8xl"
          level={1}
        >
          {hero.slogan}
        </Heading>
        <Paragraph className="text-background">{hero.description}</Paragraph>
        <div className="mt-4 flex gap-4">
          <Button variant="default" size="lg" asChild>
            <Link href={hero.primaryLink || "/"}>Get started</Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href={hero.secondaryLink || "/"}>Get started</Link>
          </Button>
        </div>
      </div>
      <ContentfulImage
        src={hero.heroImage?.url || ""}
        className="-z-10 object-cover"
        fill={true}
        alt={hero.title}
      />
    </section>
  );
}
