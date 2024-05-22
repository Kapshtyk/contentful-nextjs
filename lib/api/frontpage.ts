import {
  Frontpage,
  GetFrontpageQuery,
  GetFrontpageQueryVariables,
} from "@/lib/graphql/generate/graphql";
import { GET_FRONTPAGE } from "@/lib/graphql/queries";

import { fetchGraphQL } from "./fetch-functions";

export async function getFrontPage(
  preview: boolean = false,
  locale: "en" | "ru" = "en",
): Promise<Frontpage | null> {
  const entries = await fetchGraphQL<
    GetFrontpageQuery,
    GetFrontpageQueryVariables
  >(
    GET_FRONTPAGE,
    {
      limit: 1,
      locale,
    },
    preview,
  );
  return entries.frontpageCollection?.items[0] as Frontpage;
}
