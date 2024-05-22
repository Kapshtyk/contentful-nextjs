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
  return entries.frontpageCollection?.items[0] as Frontpage;
}
