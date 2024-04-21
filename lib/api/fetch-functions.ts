import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import request from "graphql-request";

import { Exact } from "@/lib/graphql/generate/graphql";

// export async function fetchGraphQL<T, V = Exact<{ [key: string]: never }>>(
//   query: TypedDocumentNode<T, V>,
//   tags: string | string[],
//   variables?: V,
//   preview = false,
// ) {
//   console.log(query);
//   return fetch(
//     `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${
//           preview
//             ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
//             : process.env.CONTENTFUL_ACCESS_TOKEN
//         }`,
//       },
//       body: JSON.stringify({
//         query: query,
//         ...(variables && { variables }),
//       }),
//       next: { tags: Array.isArray(tags) ? tags : [tags] },
//     },
//   ).then((res) => res.json());
// }

export async function fetchGraphQL<T, V = Exact<{ [key: string]: never }>>(
  query: TypedDocumentNode<T, V>,
  variables?: V,
  preview = false,
) {
  return request(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    query,
    { ...variables, include: 10 },
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
      body: JSON.stringify({ query }),
    },
  );
}
