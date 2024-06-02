import {
  GetHighlightedPostsByIdQuery,
  GetHighlightedPostsByIdQueryVariables,
  GetPostQuery,
  GetPostQueryVariables,
  GetPostsQuery,
  GetPostsQueryVariables,
  GetPostsSlugsQuery,
  Post,
  SelectedProjects,
} from "@/lib/graphql/generate/graphql";
import {
  GET_HIGHLIGHTED_POSTS_BY_ID,
  GET_POST,
  GET_POST_PREVIEW,
  GET_POSTS,
  GET_POSTS_SLUGS,
} from "@/lib/graphql/queries";

import { fetchGraphQL } from "./fetch-functions";

export async function getAllPosts(locale: "en" | "ru" = "en"): Promise<Post[]> {
  const entries = await fetchGraphQL<GetPostsQuery, GetPostsQueryVariables>(
    GET_POSTS,
    {
      locale,
    },
  );

  return (
    entries.postCollection?.items.filter(
      (item): item is Post => item !== null,
    ) ?? []
  );
}

export async function getPostBySlug(
  slug: string,
  locale: "en" | "ru" = "en",
  preview: boolean = false,
): Promise<Post | null> {
  const entries = await fetchGraphQL<GetPostQuery, GetPostQueryVariables>(
    preview ? GET_POST_PREVIEW : GET_POST,
    {
      slug,
      locale,
    },
    preview,
  );

  return entries.postCollection?.items[0]
    ? (entries.postCollection.items[0] as Post)
    : null;
}

export async function getSlugs(): Promise<{ slug: string }[]> {
  const entries = await fetchGraphQL<GetPostsSlugsQuery>(GET_POSTS_SLUGS);
  const slugs = entries.postCollection?.items
    .filter((item): item is Post => item !== null && !!item.slug)
    .map((item: Post) => {
      return { slug: item.slug };
    }) as { slug: string }[];

  return slugs;
}

export async function getHighlightedPosts(
  id: string,
  locale: "en" | "ru" = "en",
): Promise<SelectedProjects | null> {
  const entries = await fetchGraphQL<
    GetHighlightedPostsByIdQuery,
    GetHighlightedPostsByIdQueryVariables
  >(GET_HIGHLIGHTED_POSTS_BY_ID, {
    id,
    locale,
  });

  return entries.selectedProjectsCollection?.items[0]
    ? (entries.selectedProjectsCollection.items[0] as SelectedProjects)
    : null;
}
