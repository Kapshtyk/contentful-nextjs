import {
  Frontpage as FrontpageType,
  Post,
} from "@/lib/graphql/generate/graphql";

import { CardsCarousel } from "@/entities/carousel/carousel";
import { Section } from "@/shared/ui/section";
import { AboutMe } from "@/widgets/about-me";
import { Card } from "@/widgets/card";
import { HeroBanner } from "@/widgets/hero-banner";
import { Technologies } from "@/widgets/technologies";

interface FrontpageProps {
  frontpage: FrontpageType;
}

export function Frontpage({ frontpage }: FrontpageProps) {
  return (
    <>
      <HeroBanner hero={frontpage.hero} />
      {frontpage?.description && (
        <Section id="about">
          <AboutMe {...frontpage.description} />
        </Section>
      )}
      {frontpage.tech && (
        <Section data-style="inversed" id="tech">
          <Technologies {...frontpage.tech} />
        </Section>
      )}
      {frontpage.highlightedPostsCollection && (
        <Section data-style="inversed" id="projects">
          <div className="container p-8">
            <div className="block p-6 sm:hidden">
              <CardsCarousel
                slides={frontpage.highlightedPostsCollection.items.filter(
                  (item): item is Post => item !== null,
                )}
              />
            </div>
            <div className="hidden grid-cols-1 items-start gap-4 sm:grid lg:grid-cols-3">
              {frontpage.highlightedPostsCollection.items.map((post) => {
                if (!post) {
                  return null;
                } else {
                  return <Card key={post.slug} post={post} />;
                }
              })}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
