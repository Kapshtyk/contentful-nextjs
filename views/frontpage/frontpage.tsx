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
    <>
      <HeroBanner hero={frontpage.hero} />
      {frontpage?.description?.json.content && (
        <section id="about-me" className="section container min-h-[100vh]">
          <Markdown
            document={frontpage.description.json}
            links={frontpage.description.links}
          />
        </section>
      )}
      {frontpage?.technologies?.json.content && (
        <section className="section container min-h-[100vh]">
          <Markdown document={frontpage.technologies?.json} />
        </section>
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
