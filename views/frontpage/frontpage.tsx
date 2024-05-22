import {
  Frontpage as FrontpageType,
  Post,
} from "@/lib/graphql/generate/graphql";
import { Markdown } from "@/lib/markdown";

import { CardsCarousel } from "@/entities/carousel/carousel";
import { Section } from "@/shared/ui/section";
import { Card } from "@/widgets/card/card";
import { HeroBanner } from "@/widgets/hero-banner/hero-banner";
import { Technologies } from "@/widgets/technologies";

interface FrontpageProps {
  frontpage: FrontpageType;
}

export function Frontpage({ frontpage }: FrontpageProps) {
  return (
    <>
      <HeroBanner hero={frontpage.hero} />
      {frontpage?.description?.json.content && (
        <Section id="about-me">
          <Markdown
            document={frontpage.description.json}
            links={frontpage.description.links}
          />
        </Section>
      )}
      {frontpage?.technologies?.json.content && (
        <Section id="technologies" data-style="inversed">
          <Markdown inversed document={frontpage.technologies?.json} />
          {frontpage.technologies?.links?.entries?.block && (
            <Technologies {...frontpage.technologies} />
          )}
        </Section>
      )}
      <section className="section w-[100vw] bg-slate-800">
        {frontpage.highlightedPostsCollection && (
          <div className="container p-8">
            <div className="block p-6 sm:hidden">
              <CardsCarousel
                slides={frontpage.highlightedPostsCollection.items.filter(
                  (item): item is Post => item !== null,
                )}
              />
            </div>
            <div className="hidden grid-cols-1 items-start gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {frontpage.highlightedPostsCollection.items.map((post) => {
                if (!post) {
                  return null;
                } else {
                  return <Card key={post.slug} post={post} />;
                }
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
