import { graphql } from "@/lib/graphql/generate/gql";

export const FRAGMENT_TECH = graphql(`
  fragment FragmentTech on Technologies {
    title
    frontend {
      ...FragmentFrontend
    }
    backend {
      ...FragmentBackend
    }
    testing {
      ...FragmentTesting
    }
  }
`);

export const FRAGMENT_HERO = graphql(`
  fragment FragmentHeroBanner on HeroBanner {
    title
    slogan
    heroImage {
      ...FragmentAsset
    }
  }
`);

export const FRAGMENT_FRONTEND = graphql(`
  fragment FragmentFrontend on Frontend {
    title
    languages
    librariesframeworks
    styling
    stateManagement
    otherTools
  }
`);

export const FRAGMENT_BACKEND = graphql(`
  fragment FragmentBackend on Backend {
    title
    languages
    librariesframeworks
    cms
    dataTransfer
    databases
  }
`);

export const FRAGMENT_TESTING = graphql(`
  fragment FragmentTesting on Testing {
    title
    unitTesting
    endToEndTesting
    apiTesting
  }
`);

export const FRAGMENT_EXPERIENCE = graphql(`
  fragment FragmentExperience on Experience {
    title
    description
    contentfulMetadata {
      tags {
        name
      }
    }
  }
`);

export const FRAGMENT_EDUCATION_OR_NON_RELEVANT_EXPERIENCE = graphql(`
  fragment FragmentEd on EducationOrNonRelevantExperience {
    title
    institutionoremployer
    startDate
    endDate
    isRelevant
  }
`);

export const FRAGMENT_SOFT_SKILLS = graphql(`
  fragment FragmentSoftSkills on SoftSkills {
    title
    softSkills
  }
`);

export const FRAGMENT_HARD_SKILLS = graphql(`
  fragment FragmentHardSkills on HardSkills {
    title
    frontend {
      ...FragmentFrontend
    }
    backend {
      ...FragmentBackend
    }
    testing {
      ...FragmentTesting
    }
  }
`);

export const FRAGMENT_CONTACTS = graphql(`
  fragment FragmentContacts on ContactDetails {
    title
    contactCollection {
      items {
        title
        value
        type
      }
    }
  }
`);

export const FRAGMENT_POST = graphql(`
  fragment FragmentPost on Post {
    slug
    title
    coverImage {
      ...FragmentAsset
    }
    contentfulMetadata {
      tags {
        name
      }
    }
    excerpt
    content {
      json
    }
    video {
      ...FragmentAsset
    }
    previewImage {
      ...FragmentAsset
    }
  }
`);

export const FRAGMENT_AUTHOR = graphql(`
  fragment FragmentAuthor on Author {
    name
    picture {
      url
    }
  }
`);

export const FRAGMENT_ASSET = graphql(`
  fragment FragmentAsset on Asset {
    url
    title
    description
    width
    height
  }
`);

export const FRAGMENT_FRONTPAGE = graphql(`
  fragment FragmentFrontpage on Frontpage {
    title
    hero {
      ...FragmentHeroBanner
    }
    description {
      json
      links {
        assets {
          block {
            ...FragmentAsset
          }
        }
      }
    }
    tech {
      ...FragmentTech
    }
    highlightedProjects {
      sys {
        id
      }
    }
    education {
      sys {
        id
      }
    }
  }
`);
