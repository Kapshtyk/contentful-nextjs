import { graphql } from '@/graphql/generate/gql'

export const GET_ALL_POSTS = graphql(`
  query getAllPosts {
    postCollection {
      items {
        ...Post
      }
    }
  }
`)

export const GET_POST_BY_SLUG = graphql(`
  query getPostBySlug($slug: String!) {
    postCollection(where: { slug: $slug }) {
      items {
        ...Post
      }
    }
  }
`)

export const GET_SLUGS = graphql(`
  query getSlugs {
    postCollection {
      items {
        slug
      }
    }
  }
`)
