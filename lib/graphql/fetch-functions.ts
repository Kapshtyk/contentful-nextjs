import { Exact } from '@/graphql/generate/graphql'
import { TypedQueryDocumentNode } from 'graphql'
import request from 'graphql-request'

export async function fetchGraphQL<T, V = Exact<{ [key: string]: never }>>(
  query: TypedQueryDocumentNode<T, V>,
  variables?: V,
  preview = false
) {
  return request(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    query,
    { ...variables },
    {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
      body: JSON.stringify({ query })
    }
  )
}
