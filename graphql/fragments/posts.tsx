import { graphql } from '../generate/gql'

export const FRAGMENT_POST = graphql(`
  fragment Post on Post {
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
`)
