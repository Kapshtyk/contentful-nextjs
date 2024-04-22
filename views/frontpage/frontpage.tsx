import { Frontpage as FrontpageType } from "@/lib/graphql/generate/graphql";
import { Markdown } from "@/lib/markdown";

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
        <div className="container grid grid-cols-1  gap-4 p-8 md:grid-cols-2">
          <div className="h-56 w-40 rounded-lg bg-background">
            <h2>Section 1</h2>
            <p>Section 1 content</p>
          </div>
          <div className="h-56 w-40 bg-background">
            <h2>Section 2</h2>
            <p>Section 2 content</p>
          </div>
        </div>
      </div>
    </section>
  );
}
