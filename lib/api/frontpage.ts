import {
  Frontpage,
  GetFrontpageQuery,
  GetFrontpageQueryVariables,
} from "@/lib/graphql/generate/graphql";
import { GET_FRONTPAGE } from "@/lib/graphql/queries";

import { fetchGraphQL } from "./fetch-functions";

export async function getFrontPage(): Promise<Frontpage[]> {
  const entries = await fetchGraphQL<
    GetFrontpageQuery,
    GetFrontpageQueryVariables
  >(GET_FRONTPAGE, {
    limit: 1,
  });
  console.log("entries :>> ", entries);
  return [{} as Frontpage];
}
