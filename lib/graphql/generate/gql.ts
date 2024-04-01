/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment FragmentPost on Post {\n    slug\n    title\n    coverImage {\n      url\n    }\n    date\n    author {\n      name\n      picture {\n        url\n      }\n    }\n    excerpt\n    content {\n      json\n      links {\n        assets {\n          block {\n            sys {\n              id\n            }\n            url\n            description\n          }\n        }\n      }\n    }\n  }\n": types.FragmentPostFragmentDoc,
    "\n  fragment FragmentAuthor on Author {\n    name\n    picture {\n      url\n    }\n  }\n": types.FragmentAuthorFragmentDoc,
    "\n  fragment FragmentAsset on Asset {\n    sys {\n      id\n    }\n    url\n    description\n  }\n": types.FragmentAssetFragmentDoc,
    "\n  fragment FragmentFrontpage on Frontpage {\n    title\n    description {\n      json\n    }\n    featuredImage {\n      url\n    }\n    highlightedPostsCollection {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n": types.FragmentFrontpageFragmentDoc,
    "\n  query GetPosts {\n    postCollection {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n": types.GetPostsDocument,
    "\n  query GetPost($slug: String!) {\n    postCollection(where: { slug: $slug }, limit: 1) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n": types.GetPostDocument,
    "\n  query GetPostsSlugs {\n    postCollection {\n      items {\n        slug\n      }\n    }\n  }\n": types.GetPostsSlugsDocument,
    "\n  query GetPostPreview($slug: String!) {\n    postCollection(where: { slug: $slug }, preview: true, limit: 1) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n": types.GetPostPreviewDocument,
    "\n  query GetFrontpage($limit: Int!) {\n    frontpageCollection(limit: $limit) {\n      items {\n        ...FragmentFrontpage\n      }\n    }\n  }\n": types.GetFrontpageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentPost on Post {\n    slug\n    title\n    coverImage {\n      url\n    }\n    date\n    author {\n      name\n      picture {\n        url\n      }\n    }\n    excerpt\n    content {\n      json\n      links {\n        assets {\n          block {\n            sys {\n              id\n            }\n            url\n            description\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentPost on Post {\n    slug\n    title\n    coverImage {\n      url\n    }\n    date\n    author {\n      name\n      picture {\n        url\n      }\n    }\n    excerpt\n    content {\n      json\n      links {\n        assets {\n          block {\n            sys {\n              id\n            }\n            url\n            description\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentAuthor on Author {\n    name\n    picture {\n      url\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentAuthor on Author {\n    name\n    picture {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentAsset on Asset {\n    sys {\n      id\n    }\n    url\n    description\n  }\n"): (typeof documents)["\n  fragment FragmentAsset on Asset {\n    sys {\n      id\n    }\n    url\n    description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentFrontpage on Frontpage {\n    title\n    description {\n      json\n    }\n    featuredImage {\n      url\n    }\n    highlightedPostsCollection {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentFrontpage on Frontpage {\n    title\n    description {\n      json\n    }\n    featuredImage {\n      url\n    }\n    highlightedPostsCollection {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPosts {\n    postCollection {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPosts {\n    postCollection {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPost($slug: String!) {\n    postCollection(where: { slug: $slug }, limit: 1) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPost($slug: String!) {\n    postCollection(where: { slug: $slug }, limit: 1) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostsSlugs {\n    postCollection {\n      items {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostsSlugs {\n    postCollection {\n      items {\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostPreview($slug: String!) {\n    postCollection(where: { slug: $slug }, preview: true, limit: 1) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostPreview($slug: String!) {\n    postCollection(where: { slug: $slug }, preview: true, limit: 1) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFrontpage($limit: Int!) {\n    frontpageCollection(limit: $limit) {\n      items {\n        ...FragmentFrontpage\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetFrontpage($limit: Int!) {\n    frontpageCollection(limit: $limit) {\n      items {\n        ...FragmentFrontpage\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;