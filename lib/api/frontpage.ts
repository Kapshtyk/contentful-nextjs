import {
  Education,
  Frontpage,
  GetEducationByIdQuery,
  GetEducationByIdQueryVariables,
  GetFrontpageQuery,
  GetFrontpageQueryVariables,
} from "@/lib/graphql/generate/graphql";
import { GET_EDUCATION_BY_ID, GET_FRONTPAGE } from "@/lib/graphql/queries";

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

export async function getEducation(
  id: string,
  locale: "en" | "ru" = "en",
): Promise<Education> {
  const entries = await fetchGraphQL<
    GetEducationByIdQuery,
    GetEducationByIdQueryVariables
  >(GET_EDUCATION_BY_ID, {
    id,
    locale,
  });
  return entries.educationCollection?.items[0] as Education;
}
