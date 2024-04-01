import {
  Exact,
  GetAllPostsQuery,
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables,
  GetSlugsQuery,
  Post
} from '@/graphql/generate/graphql'
import {
  GET_ALL_POSTS,
  GET_POST_BY_SLUG,
  GET_SLUGS
} from '@/graphql/queries/posts'
import { fetchGraphQL } from './fetch-functions'

export async function getAllPosts(): Promise<Post[]> {
  const entries = await fetchGraphQL<GetAllPostsQuery>(GET_ALL_POSTS)

  return (
    entries.postCollection?.items.filter(
      (item): item is Post => item !== null
    ) ?? []
  )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const entries = await fetchGraphQL<
    GetPostBySlugQuery,
    GetPostBySlugQueryVariables
  >(GET_POST_BY_SLUG, {
    slug
  })

  return entries.postCollection?.items[0]
    ? (entries.postCollection.items[0] as Post)
    : null
}

export async function getSlugs(): Promise<string[]> {
  const entries = await fetchGraphQL<GetSlugsQuery>(GET_SLUGS)

  return entries.postCollection?.items.map((item) => item?.slug ?? '') ?? []
}
