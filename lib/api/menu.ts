import { GetMenuQuery, Menu } from "@/lib/graphql/generate/graphql";
import { GET_MENU } from "@/lib/graphql/queries";

import { fetchGraphQL } from "./fetch-functions";

export async function getMenu(): Promise<Menu> {
  const entries = await fetchGraphQL<GetMenuQuery>(GET_MENU);

  return entries.menuCollection?.items[0] as Menu;
}
