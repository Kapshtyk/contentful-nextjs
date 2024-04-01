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
    "\n  fragment Post on Post {\n    slug\n    title\n    coverImage {\n      url\n    }\n    date\n    author {\n      name\n      picture {\n        url\n      }\n    }\n    excerpt\n    content {\n      json\n      links {\n        assets {\n          block {\n            sys {\n              id\n            }\n            url\n            description\n          }\n        }\n      }\n    }\n  }\n": types.PostFragmentDoc,
    "\n  query getAllPosts {\n    postCollection {\n      items {\n        ...Post\n      }\n    }\n  }\n": types.GetAllPostsDocument,
    "\n  query getPostBySlug($slug: String!) {\n    postCollection(where: { slug: $slug }) {\n      items {\n        ...Post\n      }\n    }\n  }\n": types.GetPostBySlugDocument,
    "\n  query getSlugs {\n    postCollection {\n      items {\n        slug\n      }\n    }\n  }\n": types.GetSlugsDocument,
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
export function graphql(source: "\n  fragment Post on Post {\n    slug\n    title\n    coverImage {\n      url\n    }\n    date\n    author {\n      name\n      picture {\n        url\n      }\n    }\n    excerpt\n    content {\n      json\n      links {\n        assets {\n          block {\n            sys {\n              id\n            }\n            url\n            description\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Post on Post {\n    slug\n    title\n    coverImage {\n      url\n    }\n    date\n    author {\n      name\n      picture {\n        url\n      }\n    }\n    excerpt\n    content {\n      json\n      links {\n        assets {\n          block {\n            sys {\n              id\n            }\n            url\n            description\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllPosts {\n    postCollection {\n      items {\n        ...Post\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllPosts {\n    postCollection {\n      items {\n        ...Post\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPostBySlug($slug: String!) {\n    postCollection(where: { slug: $slug }) {\n      items {\n        ...Post\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPostBySlug($slug: String!) {\n    postCollection(where: { slug: $slug }) {\n      items {\n        ...Post\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSlugs {\n    postCollection {\n      items {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getSlugs {\n    postCollection {\n      items {\n        slug\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;