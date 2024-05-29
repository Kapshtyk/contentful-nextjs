import { Frontpage as FrontpageType } from "@/lib/graphql/generate/graphql";

import { Section } from "@/shared/ui/section";
import { AboutMe } from "@/widgets/about-me";
import { HeroBanner } from "@/widgets/hero-banner";
import { Highlightedprojects } from "@/widgets/highlighted-projects";
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
      {frontpage.highlightedProjects && (
        <Section data-style="inversed" id="projects">
          <Highlightedprojects {...frontpage.highlightedProjects} />
        </Section>
      )}
    </>
  );
}
