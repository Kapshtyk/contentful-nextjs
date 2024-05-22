import { graphql } from "@/lib/graphql/generate/gql";

export const FRAGMENT_HERO = graphql(`
  fragment FragmentHeroBanner on HeroBanner {
    title
    description
    slogan
    primaryLink
    secondaryLink
    heroImage {
      ...FragmentAsset
    }
  }
`);

export const FRAGMENT_FRONTEND = graphql(`
  fragment FragmentFrontend on Frontend {
    sys {
      id
    }
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
    sys {
      id
    }
    title
    languages
    librariesframeworks
    cms
    dataTransfer
  }
`);

export const FRAGMENT_TESTING = graphql(`
  fragment FragmentTesting on Testing {
    sys {
      id
    }
    title
    unitTesting
    endToEndTesting
    apiTesting
  }
`);

export const FRAGMENT_EXPERIENCE = graphql(`
  fragment FragmentExperience on Experience {
    sys {
      id
    }
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
    sys {
      id
    }
    title
    institutionoremployer
    description
    startDate
    endDate
    isRelevant
  }
`);

export const FRAGMENT_SOFT_SKILLS = graphql(`
  fragment FragmentSoftSkills on SoftSkills {
    sys {
      id
    }
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
        sys {
          id
        }
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
    date
    author {
      name
      picture {
        url
      }
    }
    excerpt
    content {
      json
      links {
        assets {
          block {
            sys {
              id
            }
            url
            description
          }
        }
      }
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
    sys {
      id
    }
    url
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
        entries {
          block {
            sys {
              id
            }
          }
          inline {
            sys {
              id
            }
          }
          hyperlink {
            sys {
              id
            }
            __typename
            ... on Post {
              title
            }
          }
        }
        assets {
          block {
            sys {
              id
            }
            title
            url
          }
          hyperlink {
            sys {
              id
            }
            title
            url
          }
        }
      }
    }
    technologies {
      json
    }
    featuredImage {
      ...FragmentAsset
    }
    highlightedPostsCollection {
      items {
        ...FragmentPost
      }
    }
  }
`);
