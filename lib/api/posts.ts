import {
  GetPostQuery,
  GetPostQueryVariables,
  GetPostsQuery,
  GetPostsSlugsQuery,
  Post,
} from "@/lib/graphql/generate/graphql";
import {
  GET_POST,
  GET_POST_PREVIEW,
  GET_POSTS,
  GET_POSTS_SLUGS,
} from "@/lib/graphql/queries";

import { fetchGraphQL } from "./fetch-functions";

export async function getAllPosts(): Promise<Post[]> {
  const entries = await fetchGraphQL<GetPostsQuery>(GET_POSTS);

  return (
    entries.postCollection?.items.filter(
      (item): item is Post => item !== null,
    ) ?? []
  );
}

export async function getPostBySlug(
  slug: string,
  preview: boolean = false,
): Promise<Post | null> {
  const entries = await fetchGraphQL<GetPostQuery, GetPostQueryVariables>(
    preview ? GET_POST_PREVIEW : GET_POST,
    {
      slug,
    },
    preview,
  );

  return entries.postCollection?.items[0]
    ? (entries.postCollection.items[0] as Post)
    : null;
}

export async function getSlugs(): Promise<string[]> {
  const entries = await fetchGraphQL<GetPostsSlugsQuery>(GET_POSTS_SLUGS);

  return entries.postCollection?.items.map((item) => item?.slug ?? "") ?? [];
}
