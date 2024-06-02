import {
  Frontpage,
  Post,
  SelectedProjects,
} from "@/lib/graphql/generate/graphql";
import { Markdown } from "@/lib/markdown";

import { CardsCarousel } from "@/entities/carousel/carousel";
import { Heading } from "@/shared/ui/heading";
import { Card } from "@/widgets/card";

export const Highlightedprojects = ({
  projects,
}: {
  projects: SelectedProjects | null;
}) => {
  if (!projects) {
    return null;
  }
  return (
    <>
      <Heading level={2} inversed>
        {projects.title}
      </Heading>
      {projects.projectsCollection?.items && (
        <>
          <div className="m-4 block p-6 sm:hidden">
            <CardsCarousel
              slides={projects.projectsCollection.items.filter(
                (item): item is Post => item !== null,
              )}
            />
          </div>
          <div className="mb-8 hidden grid-cols-1 items-stretch gap-8 sm:grid md:grid-cols-2 lg:grid-cols-3">
            {projects.projectsCollection.items.map((post) => {
              if (!post) {
                return null;
              } else {
                return <Card key={post.slug} post={post} />;
              }
            })}
          </div>
          {projects.description?.json && (
            <Markdown
              document={projects.description.json}
              className="text-xl text-white"
            />
          )}
        </>
      )}
    </>
  );
};
