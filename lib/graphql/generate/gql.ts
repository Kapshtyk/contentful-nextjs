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
    "\n  fragment FragmentTech on Technologies {\n    title\n    frontend {\n      ...FragmentFrontend\n    }\n    backend {\n      ...FragmentBackend\n    }\n    testing {\n      ...FragmentTesting\n    }\n  }\n": types.FragmentTechFragmentDoc,
    "\n  fragment FragmentHeroBanner on HeroBanner {\n    title\n    description\n    slogan\n    heroImage {\n      ...FragmentAsset\n    }\n  }\n": types.FragmentHeroBannerFragmentDoc,
    "\n  fragment FragmentFrontend on Frontend {\n    title\n    languages\n    librariesframeworks\n    styling\n    stateManagement\n    otherTools\n  }\n": types.FragmentFrontendFragmentDoc,
    "\n  fragment FragmentBackend on Backend {\n    title\n    languages\n    librariesframeworks\n    cms\n    dataTransfer\n    databases\n  }\n": types.FragmentBackendFragmentDoc,
    "\n  fragment FragmentTesting on Testing {\n    title\n    unitTesting\n    endToEndTesting\n    apiTesting\n  }\n": types.FragmentTestingFragmentDoc,
    "\n  fragment FragmentExperience on Experience {\n    sys {\n      id\n    }\n    title\n    description\n    contentfulMetadata {\n      tags {\n        name\n      }\n    }\n  }\n": types.FragmentExperienceFragmentDoc,
    "\n  fragment FragmentEd on EducationOrNonRelevantExperience {\n    sys {\n      id\n    }\n    title\n    institutionoremployer\n    description\n    startDate\n    endDate\n    isRelevant\n  }\n": types.FragmentEdFragmentDoc,
    "\n  fragment FragmentSoftSkills on SoftSkills {\n    sys {\n      id\n    }\n    title\n    softSkills\n  }\n": types.FragmentSoftSkillsFragmentDoc,
    "\n  fragment FragmentHardSkills on HardSkills {\n    title\n    frontend {\n      ...FragmentFrontend\n    }\n    backend {\n      ...FragmentBackend\n    }\n    testing {\n      ...FragmentTesting\n    }\n  }\n": types.FragmentHardSkillsFragmentDoc,
    "\n  fragment FragmentContacts on ContactDetails {\n    title\n    contactCollection {\n      items {\n        sys {\n          id\n        }\n        title\n        value\n        type\n      }\n    }\n  }\n": types.FragmentContactsFragmentDoc,
    "\n  fragment FragmentPost on Post {\n    slug\n    title\n    coverImage {\n      ...FragmentAsset\n    }\n    contentfulMetadata {\n      tags {\n        name\n      }\n    }\n    excerpt\n    content {\n      json\n    }\n    video {\n      ...FragmentAsset\n    }\n  }\n": types.FragmentPostFragmentDoc,
    "\n  fragment FragmentAuthor on Author {\n    name\n    picture {\n      url\n    }\n  }\n": types.FragmentAuthorFragmentDoc,
    "\n  fragment FragmentAsset on Asset {\n    sys {\n      id\n    }\n    url\n    title\n    description\n    width\n    height\n  }\n": types.FragmentAssetFragmentDoc,
    "\n  fragment FragmentFrontpage on Frontpage {\n    title\n    hero {\n      ...FragmentHeroBanner\n    }\n    description {\n      json\n      links {\n        assets {\n          block {\n            ...FragmentAsset\n          }\n        \n        }\n      }\n    }\n    tech {\n      ...FragmentTech\n    }\n    highlightedProjects {\n      title\n      projectsCollection {\n        items {\n          ...FragmentPost\n        }\n      }\n    }\n  }\n": types.FragmentFrontpageFragmentDoc,
    "\n  query GetContacts {\n    contactDetailsCollection(limit: 1) {\n      items {\n        ...FragmentContacts\n      }\n    }\n  }\n": types.GetContactsDocument,
    "\n  query GetPosts($locale: String!) {\n    postCollection(locale: $locale) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n": types.GetPostsDocument,
    "\n  query GetPost($slug: String!, $locale: String!) {\n    postCollection(where: { slug: $slug }, limit: 1, locale: $locale) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n": types.GetPostDocument,
    "\n  query GetPostsSlugs {\n    postCollection {\n      items {\n        slug\n      }\n    }\n  }\n": types.GetPostsSlugsDocument,
    "\n  query GetPostPreview($slug: String!) {\n    postCollection(where: { slug: $slug }, preview: true, limit: 1) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n": types.GetPostPreviewDocument,
    "\n  query GetFrontpage($limit: Int!, $locale: String!) {\n    frontpageCollection(limit: $limit, locale: $locale) {\n      items {\n        ...FragmentFrontpage\n      }\n    }\n  }\n": types.GetFrontpageDocument,
    "\n  query getMenu {\n    menuCollection(limit: 1) {\n      items {\n        menuLinks\n      }\n    }\n  }\n": types.GetMenuDocument,
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
export function graphql(source: "\n  fragment FragmentTech on Technologies {\n    title\n    frontend {\n      ...FragmentFrontend\n    }\n    backend {\n      ...FragmentBackend\n    }\n    testing {\n      ...FragmentTesting\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentTech on Technologies {\n    title\n    frontend {\n      ...FragmentFrontend\n    }\n    backend {\n      ...FragmentBackend\n    }\n    testing {\n      ...FragmentTesting\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentHeroBanner on HeroBanner {\n    title\n    description\n    slogan\n    heroImage {\n      ...FragmentAsset\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentHeroBanner on HeroBanner {\n    title\n    description\n    slogan\n    heroImage {\n      ...FragmentAsset\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentFrontend on Frontend {\n    title\n    languages\n    librariesframeworks\n    styling\n    stateManagement\n    otherTools\n  }\n"): (typeof documents)["\n  fragment FragmentFrontend on Frontend {\n    title\n    languages\n    librariesframeworks\n    styling\n    stateManagement\n    otherTools\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentBackend on Backend {\n    title\n    languages\n    librariesframeworks\n    cms\n    dataTransfer\n    databases\n  }\n"): (typeof documents)["\n  fragment FragmentBackend on Backend {\n    title\n    languages\n    librariesframeworks\n    cms\n    dataTransfer\n    databases\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentTesting on Testing {\n    title\n    unitTesting\n    endToEndTesting\n    apiTesting\n  }\n"): (typeof documents)["\n  fragment FragmentTesting on Testing {\n    title\n    unitTesting\n    endToEndTesting\n    apiTesting\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentExperience on Experience {\n    sys {\n      id\n    }\n    title\n    description\n    contentfulMetadata {\n      tags {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentExperience on Experience {\n    sys {\n      id\n    }\n    title\n    description\n    contentfulMetadata {\n      tags {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentEd on EducationOrNonRelevantExperience {\n    sys {\n      id\n    }\n    title\n    institutionoremployer\n    description\n    startDate\n    endDate\n    isRelevant\n  }\n"): (typeof documents)["\n  fragment FragmentEd on EducationOrNonRelevantExperience {\n    sys {\n      id\n    }\n    title\n    institutionoremployer\n    description\n    startDate\n    endDate\n    isRelevant\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentSoftSkills on SoftSkills {\n    sys {\n      id\n    }\n    title\n    softSkills\n  }\n"): (typeof documents)["\n  fragment FragmentSoftSkills on SoftSkills {\n    sys {\n      id\n    }\n    title\n    softSkills\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentHardSkills on HardSkills {\n    title\n    frontend {\n      ...FragmentFrontend\n    }\n    backend {\n      ...FragmentBackend\n    }\n    testing {\n      ...FragmentTesting\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentHardSkills on HardSkills {\n    title\n    frontend {\n      ...FragmentFrontend\n    }\n    backend {\n      ...FragmentBackend\n    }\n    testing {\n      ...FragmentTesting\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentContacts on ContactDetails {\n    title\n    contactCollection {\n      items {\n        sys {\n          id\n        }\n        title\n        value\n        type\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentContacts on ContactDetails {\n    title\n    contactCollection {\n      items {\n        sys {\n          id\n        }\n        title\n        value\n        type\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentPost on Post {\n    slug\n    title\n    coverImage {\n      ...FragmentAsset\n    }\n    contentfulMetadata {\n      tags {\n        name\n      }\n    }\n    excerpt\n    content {\n      json\n    }\n    video {\n      ...FragmentAsset\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentPost on Post {\n    slug\n    title\n    coverImage {\n      ...FragmentAsset\n    }\n    contentfulMetadata {\n      tags {\n        name\n      }\n    }\n    excerpt\n    content {\n      json\n    }\n    video {\n      ...FragmentAsset\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentAuthor on Author {\n    name\n    picture {\n      url\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentAuthor on Author {\n    name\n    picture {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentAsset on Asset {\n    sys {\n      id\n    }\n    url\n    title\n    description\n    width\n    height\n  }\n"): (typeof documents)["\n  fragment FragmentAsset on Asset {\n    sys {\n      id\n    }\n    url\n    title\n    description\n    width\n    height\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentFrontpage on Frontpage {\n    title\n    hero {\n      ...FragmentHeroBanner\n    }\n    description {\n      json\n      links {\n        assets {\n          block {\n            ...FragmentAsset\n          }\n        \n        }\n      }\n    }\n    tech {\n      ...FragmentTech\n    }\n    highlightedProjects {\n      title\n      projectsCollection {\n        items {\n          ...FragmentPost\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FragmentFrontpage on Frontpage {\n    title\n    hero {\n      ...FragmentHeroBanner\n    }\n    description {\n      json\n      links {\n        assets {\n          block {\n            ...FragmentAsset\n          }\n        \n        }\n      }\n    }\n    tech {\n      ...FragmentTech\n    }\n    highlightedProjects {\n      title\n      projectsCollection {\n        items {\n          ...FragmentPost\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetContacts {\n    contactDetailsCollection(limit: 1) {\n      items {\n        ...FragmentContacts\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContacts {\n    contactDetailsCollection(limit: 1) {\n      items {\n        ...FragmentContacts\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPosts($locale: String!) {\n    postCollection(locale: $locale) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPosts($locale: String!) {\n    postCollection(locale: $locale) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPost($slug: String!, $locale: String!) {\n    postCollection(where: { slug: $slug }, limit: 1, locale: $locale) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPost($slug: String!, $locale: String!) {\n    postCollection(where: { slug: $slug }, limit: 1, locale: $locale) {\n      items {\n        ...FragmentPost\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  query GetFrontpage($limit: Int!, $locale: String!) {\n    frontpageCollection(limit: $limit, locale: $locale) {\n      items {\n        ...FragmentFrontpage\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetFrontpage($limit: Int!, $locale: String!) {\n    frontpageCollection(limit: $limit, locale: $locale) {\n      items {\n        ...FragmentFrontpage\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMenu {\n    menuCollection(limit: 1) {\n      items {\n        menuLinks\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMenu {\n    menuCollection(limit: 1) {\n      items {\n        menuLinks\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;