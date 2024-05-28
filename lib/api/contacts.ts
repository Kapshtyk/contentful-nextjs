import { Contact, GetContactsQuery } from "@/lib/graphql/generate/graphql";
import { GET_CONTACTS } from "@/lib/graphql/queries";

import { fetchGraphQL } from "./fetch-functions";

export async function getContacts(): Promise<Contact[]> {
  const entries = await fetchGraphQL<GetContactsQuery>(GET_CONTACTS);

  return entries.contactDetailsCollection?.items as Contact[];
}
