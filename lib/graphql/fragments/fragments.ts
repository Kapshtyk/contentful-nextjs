import { graphql } from "@/lib/graphql/generate/gql";

export const FRAGMENT_POST = graphql(`
  fragment FragmentPost on Post {
    slug
    title
    coverImage {
      url
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
  }
`);

export const FRAGMENT_FRONTPAGE = graphql(`
  fragment FragmentFrontpage on Frontpage {
    title
    description {
      json
    }
    featuredImage {
      url
    }
    highlightedPostsCollection {
      items {
        ...FragmentPost
      }
    }
  }
`);
