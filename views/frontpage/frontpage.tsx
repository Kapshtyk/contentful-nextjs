import { Frontpage as FrontpageType } from "@/lib/graphql/generate/graphql";
import { Markdown } from "@/lib/markdown";

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
        <div className="container grid grid-cols-1 items-start gap-4 p-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {frontpage.highlightedPostsCollection &&
            frontpage.highlightedPostsCollection.items.map((post) => {
              if (!post) {
                return null;
              } else {
                return <Card key={post.slug} post={post} />;
              }
            })}
        </div>
      </div>
    </section>
  );
}
