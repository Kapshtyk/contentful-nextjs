import {
  Education,
  Frontpage as FrontpageType,
  SelectedProjects,
} from "@/lib/graphql/generate/graphql";

import { Section } from "@/shared/ui/section";
import { AboutMe } from "@/widgets/about-me";
import { HeroBanner } from "@/widgets/hero-banner";
import { Highlightedprojects } from "@/widgets/highlighted-projects";
import { Technologies } from "@/widgets/technologies";

interface FrontpageProps {
  frontpage: FrontpageType;
  highlightedProjects: SelectedProjects | null;
  education: Education;
}

export function Frontpage({
  frontpage,
  highlightedProjects,
  education,
}: FrontpageProps) {
  return (
    <>
      <HeroBanner hero={frontpage.hero} />
      {frontpage?.description && (
        <Section id="about">
          <AboutMe description={frontpage.description} education={education} />
        </Section>
      )}
      {frontpage.tech && (
        <Section data-style="inversed" id="tech">
          <Technologies {...frontpage.tech} />
        </Section>
      )}
      {frontpage.highlightedProjects && (
        <Section data-style="inversed" id="projects">
          <Highlightedprojects projects={highlightedProjects} />
        </Section>
      )}
    </>
  );
}
