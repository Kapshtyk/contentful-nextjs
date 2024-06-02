import { Frontpage, Post } from "@/lib/graphql/generate/graphql";

import { CardsCarousel } from "@/entities/carousel/carousel";
import { Heading } from "@/shared/ui/heading";
import { Card } from "@/widgets/card";

export const Highlightedprojects = (
  projects: Frontpage["highlightedProjects"],
) => {
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
          <div className="hidden grid-cols-1 items-start sm:grid md:grid-cols-2 lg:grid-cols-3">
            {projects.projectsCollection.items.map((post) => {
              if (!post) {
                return null;
              } else {
                return <Card key={post.slug} post={post} />;
              }
            })}
          </div>
        </>
      )}
    </>
  );
};
