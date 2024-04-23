import {
  Frontpage as FrontpageType,
  Post,
} from "@/lib/graphql/generate/graphql";
import { Markdown } from "@/lib/markdown";

import { CardsCarousel } from "@/entities/carousel/carousel";
import { Card } from "@/widgets/card/card";
import { HeroBanner } from "@/widgets/hero-banner/hero-banner";

interface FrontpageProps {
  frontpage: FrontpageType;
}

export function Frontpage({ frontpage }: FrontpageProps) {
  return (
    <section className="flex flex-col items-center">
      <HeroBanner hero={frontpage.hero} />
      {frontpage?.description?.json.content && (
        <div>
          <Markdown
            document={frontpage.description.json}
            links={frontpage.description.links}
          />
        </div>
      )}
      <div className="w-[100vw] bg-foreground">
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
      </div>
    </section>
  );
}
