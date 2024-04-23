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
