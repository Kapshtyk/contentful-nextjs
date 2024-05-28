import {
  ContactDetails,
  GetContactsQuery,
} from "@/lib/graphql/generate/graphql";
import { GET_CONTACTS } from "@/lib/graphql/queries";

import { fetchGraphQL } from "./fetch-functions";

export async function getContacts(): Promise<ContactDetails> {
  const entries = await fetchGraphQL<GetContactsQuery>(GET_CONTACTS);

  return entries.contactDetailsCollection?.items[0] as ContactDetails;
}
