import { graphql } from "@/lib/graphql/generate/gql";

export const GET_POSTS = graphql(`
  query GetPosts {
    postCollection {
      items {
        ...FragmentPost
      }
    }
  }
`);

export const GET_POST = graphql(`
  query GetPost($slug: String!) {
    postCollection(where: { slug: $slug }, limit: 1) {
      items {
        ...FragmentPost
      }
    }
  }
`);

export const GET_POSTS_SLUGS = graphql(`
  query GetPostsSlugs {
    postCollection {
      items {
        slug
      }
    }
  }
`);

export const GET_POST_PREVIEW = graphql(`
  query GetPostPreview($slug: String!) {
    postCollection(where: { slug: $slug }, preview: true, limit: 1) {
      items {
        ...FragmentPost
      }
    }
  }
`);

export const GET_FRONTPAGE = graphql(`
  query GetFrontpage($limit: Int!) {
    frontpageCollection(limit: $limit) {
      items {
        ...FragmentFrontpage
      }
    }
  }
`);

export const GET_MENU = graphql(`
  query getMenu {
    menuCollection(limit: 1) {
      items {
        menuLinksCollection {
          items {
            slug
            title
          }
        }
      }
    }
  }
`);
