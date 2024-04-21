import {
  Frontpage,
  GetFrontpageQuery,
  GetFrontpageQueryVariables,
} from "@/lib/graphql/generate/graphql";
import { GET_FRONTPAGE } from "@/lib/graphql/queries";

import { fetchGraphQL } from "./fetch-functions";

export async function getFrontPage(): Promise<Frontpage | null> {
  const entries = await fetchGraphQL<
    GetFrontpageQuery,
    GetFrontpageQueryVariables
  >(GET_FRONTPAGE, {
    limit: 1,
  });
  if (entries.frontpageCollection?.items[0]?.description?.links) {
    return entries.frontpageCollection.items[0] as Frontpage;
  } else {
    return null;
  }
}
