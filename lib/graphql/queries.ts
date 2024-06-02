import { graphql } from "@/lib/graphql/generate/gql";

export const GET_CONTACTS = graphql(`
  query GetContacts {
    contactDetailsCollection(limit: 1) {
      items {
        ...FragmentContacts
      }
    }
  }
`);

export const GET_POSTS = graphql(`
  query GetPosts($locale: String!) {
    postCollection(locale: $locale) {
      items {
        ...FragmentPost
      }
    }
  }
`);

export const GET_POST = graphql(`
  query GetPost($slug: String!, $locale: String!) {
    postCollection(where: { slug: $slug }, limit: 1, locale: $locale) {
      items {
        ...FragmentPost
      }
    }
  }
`);

export const GET_POSTS_BY_IDS = graphql(`
  query GetPostsByIds($ids: [String!]!, $locale: String!) {
    postCollection(where: { sys: { id_in: $ids } }, locale: $locale) {
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
  query GetFrontpage($limit: Int!, $locale: String!) {
    frontpageCollection(limit: $limit, locale: $locale) {
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
        menuLinks
      }
    }
  }
`);


export const GET_HIGHLIGHTED_POSTS_BY_ID = graphql(`
  query GetHighlightedPostsById($id: String!, $locale: String!) {
    selectedProjectsCollection(where: { sys: { id: $id } }, locale: $locale) {
      items {
        title
        projectsCollection {
          items {
            ...FragmentPost
          }
        }
        description {
          json
        }
      }
    }
  }
`);

export const GET_EDUCATION_BY_ID = graphql(`
  query GetEducationById($id: String, $locale: String!) {
    educationCollection(where: { sys: { id: $id } }, locale: $locale) {
      items {
        title
        educationCollection {
          items {
            ...FragmentEd
          }
        }
      }   
    }
  }
`);