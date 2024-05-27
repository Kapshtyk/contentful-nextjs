/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  authorCollection?: Maybe<AuthorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  frontpageCollection?: Maybe<FrontpageCollection>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  postCollection?: Maybe<PostCollection>;
};


export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsFrontpageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/author) */
export type Author = Entry & {
  __typename?: 'Author';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Asset>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/author) */
export type AuthorPictureArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  items: Array<Maybe<Author>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  picture_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type AuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  postCollection?: Maybe<PostCollection>;
};


export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AuthorLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AuthorLinkingCollectionsPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AuthorLinkingCollectionsPostCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AuthorOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/backend) */
export type Backend = Entry & {
  __typename?: 'Backend';
  cms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  dataTransfer?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  databases?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  librariesframeworks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<BackendLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/backend) */
export type BackendCmsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/backend) */
export type BackendDataTransferArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/backend) */
export type BackendDatabasesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/backend) */
export type BackendLanguagesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/backend) */
export type BackendLibrariesframeworksArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/backend) */
export type BackendLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/backend) */
export type BackendTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BackendCollection = {
  __typename?: 'BackendCollection';
  items: Array<Maybe<Backend>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BackendFilter = {
  AND?: InputMaybe<Array<InputMaybe<BackendFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BackendFilter>>>;
  cms_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cms_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cms_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cms_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataTransfer_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataTransfer_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataTransfer_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataTransfer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  databases_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  databases_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  databases_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  databases_exists?: InputMaybe<Scalars['Boolean']['input']>;
  languages_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  librariesframeworks_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BackendLinkingCollections = {
  __typename?: 'BackendLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  hardSkillsCollection?: Maybe<HardSkillsCollection>;
  keyHardSkillsCollection?: Maybe<KeyHardSkillsCollection>;
  technologiesCollection?: Maybe<TechnologiesCollection>;
};


export type BackendLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BackendLinkingCollectionsHardSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BackendLinkingCollectionsHardSkillsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BackendLinkingCollectionsKeyHardSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BackendLinkingCollectionsKeyHardSkillsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BackendLinkingCollectionsTechnologiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BackendLinkingCollectionsTechnologiesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BackendLinkingCollectionsHardSkillsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum BackendLinkingCollectionsKeyHardSkillsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum BackendLinkingCollectionsTechnologiesCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum BackendOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/contact) */
export type Contact = Entry & {
  __typename?: 'Contact';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContactLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/contact) */
export type ContactLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/contact) */
export type ContactTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/contact) */
export type ContactTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/contact) */
export type ContactValueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContactCollection = {
  __typename?: 'ContactCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/contactDetails) */
export type ContactDetails = Entry & {
  __typename?: 'ContactDetails';
  contactCollection?: Maybe<ContactDetailsContactCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContactDetailsLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/contactDetails) */
export type ContactDetailsContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactDetailsContactCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/contactDetails) */
export type ContactDetailsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/contactDetails) */
export type ContactDetailsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContactDetailsCollection = {
  __typename?: 'ContactDetailsCollection';
  items: Array<Maybe<ContactDetails>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContactDetailsContactCollection = {
  __typename?: 'ContactDetailsContactCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ContactDetailsContactCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type ContactDetailsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactDetailsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactDetailsFilter>>>;
  contact?: InputMaybe<CfContactNestedFilter>;
  contactCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactDetailsLinkingCollections = {
  __typename?: 'ContactDetailsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  resumeCollection?: Maybe<ResumeCollection>;
};


export type ContactDetailsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactDetailsLinkingCollectionsResumeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactDetailsLinkingCollectionsResumeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContactDetailsLinkingCollectionsResumeCollectionOrder {
  ColorPickerAsc = 'colorPicker_ASC',
  ColorPickerDesc = 'colorPicker_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContactDetailsOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContactFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactLinkingCollections = {
  __typename?: 'ContactLinkingCollections';
  contactDetailsCollection?: Maybe<ContactDetailsCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ContactLinkingCollectionsContactDetailsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactLinkingCollectionsContactDetailsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContactLinkingCollectionsContactDetailsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContactOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/educationOrNonRelevantExperience) */
export type EducationOrNonRelevantExperience = Entry & {
  __typename?: 'EducationOrNonRelevantExperience';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  institutionoremployer?: Maybe<Scalars['String']['output']>;
  isRelevant?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<EducationOrNonRelevantExperienceLinkingCollections>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/educationOrNonRelevantExperience) */
export type EducationOrNonRelevantExperienceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/educationOrNonRelevantExperience) */
export type EducationOrNonRelevantExperienceEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/educationOrNonRelevantExperience) */
export type EducationOrNonRelevantExperienceInstitutionoremployerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/educationOrNonRelevantExperience) */
export type EducationOrNonRelevantExperienceIsRelevantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/educationOrNonRelevantExperience) */
export type EducationOrNonRelevantExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/educationOrNonRelevantExperience) */
export type EducationOrNonRelevantExperienceStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/educationOrNonRelevantExperience) */
export type EducationOrNonRelevantExperienceTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EducationOrNonRelevantExperienceCollection = {
  __typename?: 'EducationOrNonRelevantExperienceCollection';
  items: Array<Maybe<EducationOrNonRelevantExperience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EducationOrNonRelevantExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<EducationOrNonRelevantExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EducationOrNonRelevantExperienceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  institutionoremployer?: InputMaybe<Scalars['String']['input']>;
  institutionoremployer_contains?: InputMaybe<Scalars['String']['input']>;
  institutionoremployer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  institutionoremployer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  institutionoremployer_not?: InputMaybe<Scalars['String']['input']>;
  institutionoremployer_not_contains?: InputMaybe<Scalars['String']['input']>;
  institutionoremployer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isRelevant?: InputMaybe<Scalars['Boolean']['input']>;
  isRelevant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isRelevant_not?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EducationOrNonRelevantExperienceLinkingCollections = {
  __typename?: 'EducationOrNonRelevantExperienceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  resumeCollection?: Maybe<ResumeCollection>;
};


export type EducationOrNonRelevantExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EducationOrNonRelevantExperienceLinkingCollectionsResumeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EducationOrNonRelevantExperienceLinkingCollectionsResumeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EducationOrNonRelevantExperienceLinkingCollectionsResumeCollectionOrder {
  ColorPickerAsc = 'colorPicker_ASC',
  ColorPickerDesc = 'colorPicker_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EducationOrNonRelevantExperienceOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  InstitutionoremployerAsc = 'institutionoremployer_ASC',
  InstitutionoremployerDesc = 'institutionoremployer_DESC',
  IsRelevantAsc = 'isRelevant_ASC',
  IsRelevantDesc = 'isRelevant_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/experience) */
export type Experience = Entry & {
  __typename?: 'Experience';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ExperienceLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/experience) */
export type ExperienceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/experience) */
export type ExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/experience) */
export type ExperienceTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ExperienceCollection = {
  __typename?: 'ExperienceCollection';
  items: Array<Maybe<Experience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ExperienceLinkingCollections = {
  __typename?: 'ExperienceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  resumeCollection?: Maybe<ResumeCollection>;
};


export type ExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ExperienceLinkingCollectionsResumeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceLinkingCollectionsResumeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ExperienceLinkingCollectionsResumeCollectionOrder {
  ColorPickerAsc = 'colorPicker_ASC',
  ColorPickerDesc = 'colorPicker_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ExperienceOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontend) */
export type Frontend = Entry & {
  __typename?: 'Frontend';
  contentfulMetadata: ContentfulMetadata;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  librariesframeworks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<FrontendLinkingCollections>;
  otherTools?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  stateManagement?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  styling?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontend) */
export type FrontendLanguagesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontend) */
export type FrontendLibrariesframeworksArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontend) */
export type FrontendLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontend) */
export type FrontendOtherToolsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontend) */
export type FrontendStateManagementArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontend) */
export type FrontendStylingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontend) */
export type FrontendTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FrontendCollection = {
  __typename?: 'FrontendCollection';
  items: Array<Maybe<Frontend>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FrontendFilter = {
  AND?: InputMaybe<Array<InputMaybe<FrontendFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FrontendFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  languages_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  librariesframeworks_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  otherTools_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  otherTools_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  otherTools_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  otherTools_exists?: InputMaybe<Scalars['Boolean']['input']>;
  stateManagement_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stateManagement_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stateManagement_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stateManagement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styling_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  styling_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  styling_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  styling_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FrontendLinkingCollections = {
  __typename?: 'FrontendLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  hardSkillsCollection?: Maybe<HardSkillsCollection>;
  keyHardSkillsCollection?: Maybe<KeyHardSkillsCollection>;
  technologiesCollection?: Maybe<TechnologiesCollection>;
};


export type FrontendLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FrontendLinkingCollectionsHardSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FrontendLinkingCollectionsHardSkillsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FrontendLinkingCollectionsKeyHardSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FrontendLinkingCollectionsKeyHardSkillsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FrontendLinkingCollectionsTechnologiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FrontendLinkingCollectionsTechnologiesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FrontendLinkingCollectionsHardSkillsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FrontendLinkingCollectionsKeyHardSkillsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FrontendLinkingCollectionsTechnologiesCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FrontendOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Frontpage [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontpage) */
export type Frontpage = Entry & {
  __typename?: 'Frontpage';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<FrontpageDescription>;
  featuredImage?: Maybe<Asset>;
  hero?: Maybe<HeroBanner>;
  highlightedPostsCollection?: Maybe<FrontpageHighlightedPostsCollection>;
  linkedFrom?: Maybe<FrontpageLinkingCollections>;
  sys: Sys;
  tech?: Maybe<Technologies>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Frontpage [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontpage) */
export type FrontpageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Frontpage [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontpage) */
export type FrontpageFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Frontpage [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontpage) */
export type FrontpageHeroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeroBannerFilter>;
};


/** Frontpage [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontpage) */
export type FrontpageHighlightedPostsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FrontpageHighlightedPostsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFilter>;
};


/** Frontpage [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontpage) */
export type FrontpageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Frontpage [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontpage) */
export type FrontpageTechArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TechnologiesFilter>;
};


/** Frontpage [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/frontpage) */
export type FrontpageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FrontpageCollection = {
  __typename?: 'FrontpageCollection';
  items: Array<Maybe<Frontpage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FrontpageDescription = {
  __typename?: 'FrontpageDescription';
  json: Scalars['JSON']['output'];
  links: FrontpageDescriptionLinks;
};

export type FrontpageDescriptionAssets = {
  __typename?: 'FrontpageDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FrontpageDescriptionEntries = {
  __typename?: 'FrontpageDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FrontpageDescriptionLinks = {
  __typename?: 'FrontpageDescriptionLinks';
  assets: FrontpageDescriptionAssets;
  entries: FrontpageDescriptionEntries;
  resources: FrontpageDescriptionResources;
};

export type FrontpageDescriptionResources = {
  __typename?: 'FrontpageDescriptionResources';
  block: Array<FrontpageDescriptionResourcesBlock>;
  hyperlink: Array<FrontpageDescriptionResourcesHyperlink>;
  inline: Array<FrontpageDescriptionResourcesInline>;
};

export type FrontpageDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'FrontpageDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type FrontpageDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'FrontpageDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type FrontpageDescriptionResourcesInline = ResourceLink & {
  __typename?: 'FrontpageDescriptionResourcesInline';
  sys: ResourceSys;
};

export type FrontpageFilter = {
  AND?: InputMaybe<Array<InputMaybe<FrontpageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FrontpageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hero?: InputMaybe<CfHeroBannerNestedFilter>;
  hero_exists?: InputMaybe<Scalars['Boolean']['input']>;
  highlightedPosts?: InputMaybe<CfPostNestedFilter>;
  highlightedPostsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  tech?: InputMaybe<CfTechnologiesNestedFilter>;
  tech_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FrontpageHighlightedPostsCollection = {
  __typename?: 'FrontpageHighlightedPostsCollection';
  items: Array<Maybe<Post>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FrontpageHighlightedPostsCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FrontpageLinkingCollections = {
  __typename?: 'FrontpageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FrontpageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FrontpageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/hardSkills) */
export type HardSkills = Entry & {
  __typename?: 'HardSkills';
  backend?: Maybe<Backend>;
  contentfulMetadata: ContentfulMetadata;
  frontend?: Maybe<Frontend>;
  linkedFrom?: Maybe<HardSkillsLinkingCollections>;
  sys: Sys;
  testing?: Maybe<Testing>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/hardSkills) */
export type HardSkillsBackendArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BackendFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/hardSkills) */
export type HardSkillsFrontendArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FrontendFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/hardSkills) */
export type HardSkillsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/hardSkills) */
export type HardSkillsTestingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TestingFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/hardSkills) */
export type HardSkillsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HardSkillsCollection = {
  __typename?: 'HardSkillsCollection';
  items: Array<Maybe<HardSkills>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HardSkillsFilter = {
  AND?: InputMaybe<Array<InputMaybe<HardSkillsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HardSkillsFilter>>>;
  backend?: InputMaybe<CfBackendNestedFilter>;
  backend_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  frontend?: InputMaybe<CfFrontendNestedFilter>;
  frontend_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  testing?: InputMaybe<CfTestingNestedFilter>;
  testing_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HardSkillsLinkingCollections = {
  __typename?: 'HardSkillsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  resumeCollection?: Maybe<ResumeCollection>;
};


export type HardSkillsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HardSkillsLinkingCollectionsResumeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HardSkillsLinkingCollectionsResumeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HardSkillsLinkingCollectionsResumeCollectionOrder {
  ColorPickerAsc = 'colorPicker_ASC',
  ColorPickerDesc = 'colorPicker_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HardSkillsOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/heroBanner) */
export type HeroBanner = Entry & {
  __typename?: 'HeroBanner';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<Asset>;
  linkedFrom?: Maybe<HeroBannerLinkingCollections>;
  primaryLink?: Maybe<Scalars['String']['output']>;
  secondaryLink?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/heroBanner) */
export type HeroBannerDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/heroBanner) */
export type HeroBannerHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/heroBanner) */
export type HeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/heroBanner) */
export type HeroBannerPrimaryLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/heroBanner) */
export type HeroBannerSecondaryLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/heroBanner) */
export type HeroBannerSloganArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/heroBanner) */
export type HeroBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeroBannerCollection = {
  __typename?: 'HeroBannerCollection';
  items: Array<Maybe<HeroBanner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  primaryLink?: InputMaybe<Scalars['String']['input']>;
  primaryLink_contains?: InputMaybe<Scalars['String']['input']>;
  primaryLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  primaryLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  primaryLink_not?: InputMaybe<Scalars['String']['input']>;
  primaryLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  primaryLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryLink?: InputMaybe<Scalars['String']['input']>;
  secondaryLink_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryLink_not?: InputMaybe<Scalars['String']['input']>;
  secondaryLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  slogan_contains?: InputMaybe<Scalars['String']['input']>;
  slogan_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slogan_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slogan_not?: InputMaybe<Scalars['String']['input']>;
  slogan_not_contains?: InputMaybe<Scalars['String']['input']>;
  slogan_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeroBannerLinkingCollections = {
  __typename?: 'HeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  frontpageCollection?: Maybe<FrontpageCollection>;
};


export type HeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBannerLinkingCollectionsFrontpageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerLinkingCollectionsFrontpageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeroBannerLinkingCollectionsFrontpageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum HeroBannerOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PrimaryLinkAsc = 'primaryLink_ASC',
  PrimaryLinkDesc = 'primaryLink_DESC',
  SecondaryLinkAsc = 'secondaryLink_ASC',
  SecondaryLinkDesc = 'secondaryLink_DESC',
  SloganAsc = 'slogan_ASC',
  SloganDesc = 'slogan_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/keyHardSkills) */
export type KeyHardSkills = Entry & {
  __typename?: 'KeyHardSkills';
  backend?: Maybe<Backend>;
  contentfulMetadata: ContentfulMetadata;
  frontend?: Maybe<Frontend>;
  linkedFrom?: Maybe<KeyHardSkillsLinkingCollections>;
  sys: Sys;
  testing?: Maybe<Testing>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/keyHardSkills) */
export type KeyHardSkillsBackendArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BackendFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/keyHardSkills) */
export type KeyHardSkillsFrontendArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FrontendFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/keyHardSkills) */
export type KeyHardSkillsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/keyHardSkills) */
export type KeyHardSkillsTestingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TestingFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/keyHardSkills) */
export type KeyHardSkillsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type KeyHardSkillsCollection = {
  __typename?: 'KeyHardSkillsCollection';
  items: Array<Maybe<KeyHardSkills>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type KeyHardSkillsFilter = {
  AND?: InputMaybe<Array<InputMaybe<KeyHardSkillsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KeyHardSkillsFilter>>>;
  backend?: InputMaybe<CfBackendNestedFilter>;
  backend_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  frontend?: InputMaybe<CfFrontendNestedFilter>;
  frontend_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  testing?: InputMaybe<CfTestingNestedFilter>;
  testing_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type KeyHardSkillsLinkingCollections = {
  __typename?: 'KeyHardSkillsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type KeyHardSkillsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum KeyHardSkillsOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/languages) */
export type Languages = Entry & {
  __typename?: 'Languages';
  contentfulMetadata: ContentfulMetadata;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<LanguagesLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/languages) */
export type LanguagesLanguagesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/languages) */
export type LanguagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/languages) */
export type LanguagesTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LanguagesCollection = {
  __typename?: 'LanguagesCollection';
  items: Array<Maybe<Languages>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LanguagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<LanguagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LanguagesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  languages_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LanguagesLinkingCollections = {
  __typename?: 'LanguagesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  resumeCollection?: Maybe<ResumeCollection>;
};


export type LanguagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LanguagesLinkingCollectionsResumeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LanguagesLinkingCollectionsResumeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LanguagesLinkingCollectionsResumeCollectionOrder {
  ColorPickerAsc = 'colorPicker_ASC',
  ColorPickerDesc = 'colorPicker_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LanguagesOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/menu) */
export type Menu = Entry & {
  __typename?: 'Menu';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MenuLinkingCollections>;
  menuItems?: Maybe<Scalars['String']['output']>;
  menuLinksCollection?: Maybe<MenuMenuLinksCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/menu) */
export type MenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/menu) */
export type MenuMenuItemsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/menu) */
export type MenuMenuLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuMenuLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFilter>;
};

export type MenuCollection = {
  __typename?: 'MenuCollection';
  items: Array<Maybe<Menu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  menuItems?: InputMaybe<Scalars['String']['input']>;
  menuItems_contains?: InputMaybe<Scalars['String']['input']>;
  menuItems_exists?: InputMaybe<Scalars['Boolean']['input']>;
  menuItems_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuItems_not?: InputMaybe<Scalars['String']['input']>;
  menuItems_not_contains?: InputMaybe<Scalars['String']['input']>;
  menuItems_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuLinks?: InputMaybe<CfPostNestedFilter>;
  menuLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type MenuLinkingCollections = {
  __typename?: 'MenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MenuMenuLinksCollection = {
  __typename?: 'MenuMenuLinksCollection';
  items: Array<Maybe<Post>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum MenuMenuLinksCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum MenuOrder {
  MenuItemsAsc = 'menuItems_ASC',
  MenuItemsDesc = 'menuItems_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/post) */
export type Post = Entry & {
  __typename?: 'Post';
  author?: Maybe<Author>;
  content?: Maybe<PostContent>;
  contentfulMetadata: ContentfulMetadata;
  coverImage?: Maybe<Asset>;
  date?: Maybe<Scalars['DateTime']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  formattedText?: Maybe<PostFormattedText>;
  linkedFrom?: Maybe<PostLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/post) */
export type PostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AuthorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/post) */
export type PostContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/post) */
export type PostCoverImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/post) */
export type PostDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/post) */
export type PostExcerptArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/post) */
export type PostFormattedTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/post) */
export type PostSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/post) */
export type PostTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PostCollection = {
  __typename?: 'PostCollection';
  items: Array<Maybe<Post>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PostContent = {
  __typename?: 'PostContent';
  json: Scalars['JSON']['output'];
  links: PostContentLinks;
};

export type PostContentAssets = {
  __typename?: 'PostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostContentEntries = {
  __typename?: 'PostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostContentLinks = {
  __typename?: 'PostContentLinks';
  assets: PostContentAssets;
  entries: PostContentEntries;
  resources: PostContentResources;
};

export type PostContentResources = {
  __typename?: 'PostContentResources';
  block: Array<PostContentResourcesBlock>;
  hyperlink: Array<PostContentResourcesHyperlink>;
  inline: Array<PostContentResourcesInline>;
};

export type PostContentResourcesBlock = ResourceLink & {
  __typename?: 'PostContentResourcesBlock';
  sys: ResourceSys;
};

export type PostContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PostContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PostContentResourcesInline = ResourceLink & {
  __typename?: 'PostContentResourcesInline';
  sys: ResourceSys;
};

export type PostFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  author?: InputMaybe<CfAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  coverImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  excerpt_contains?: InputMaybe<Scalars['String']['input']>;
  excerpt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  excerpt_not?: InputMaybe<Scalars['String']['input']>;
  excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formattedText_contains?: InputMaybe<Scalars['String']['input']>;
  formattedText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formattedText_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostFormattedText = {
  __typename?: 'PostFormattedText';
  json: Scalars['JSON']['output'];
  links: PostFormattedTextLinks;
};

export type PostFormattedTextAssets = {
  __typename?: 'PostFormattedTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostFormattedTextEntries = {
  __typename?: 'PostFormattedTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostFormattedTextLinks = {
  __typename?: 'PostFormattedTextLinks';
  assets: PostFormattedTextAssets;
  entries: PostFormattedTextEntries;
  resources: PostFormattedTextResources;
};

export type PostFormattedTextResources = {
  __typename?: 'PostFormattedTextResources';
  block: Array<PostFormattedTextResourcesBlock>;
  hyperlink: Array<PostFormattedTextResourcesHyperlink>;
  inline: Array<PostFormattedTextResourcesInline>;
};

export type PostFormattedTextResourcesBlock = ResourceLink & {
  __typename?: 'PostFormattedTextResourcesBlock';
  sys: ResourceSys;
};

export type PostFormattedTextResourcesHyperlink = ResourceLink & {
  __typename?: 'PostFormattedTextResourcesHyperlink';
  sys: ResourceSys;
};

export type PostFormattedTextResourcesInline = ResourceLink & {
  __typename?: 'PostFormattedTextResourcesInline';
  sys: ResourceSys;
};

export type PostLinkingCollections = {
  __typename?: 'PostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  frontpageCollection?: Maybe<FrontpageCollection>;
  menuCollection?: Maybe<MenuCollection>;
};


export type PostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PostLinkingCollectionsFrontpageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PostLinkingCollectionsFrontpageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PostLinkingCollectionsMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PostLinkingCollectionsMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PostLinkingCollectionsFrontpageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PostLinkingCollectionsMenuCollectionOrder {
  MenuItemsAsc = 'menuItems_ASC',
  MenuItemsDesc = 'menuItems_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PostOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  backend?: Maybe<Backend>;
  backendCollection?: Maybe<BackendCollection>;
  contact?: Maybe<Contact>;
  contactCollection?: Maybe<ContactCollection>;
  contactDetails?: Maybe<ContactDetails>;
  contactDetailsCollection?: Maybe<ContactDetailsCollection>;
  educationOrNonRelevantExperience?: Maybe<EducationOrNonRelevantExperience>;
  educationOrNonRelevantExperienceCollection?: Maybe<EducationOrNonRelevantExperienceCollection>;
  entryCollection?: Maybe<EntryCollection>;
  experience?: Maybe<Experience>;
  experienceCollection?: Maybe<ExperienceCollection>;
  frontend?: Maybe<Frontend>;
  frontendCollection?: Maybe<FrontendCollection>;
  frontpage?: Maybe<Frontpage>;
  frontpageCollection?: Maybe<FrontpageCollection>;
  hardSkills?: Maybe<HardSkills>;
  hardSkillsCollection?: Maybe<HardSkillsCollection>;
  heroBanner?: Maybe<HeroBanner>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  keyHardSkills?: Maybe<KeyHardSkills>;
  keyHardSkillsCollection?: Maybe<KeyHardSkillsCollection>;
  languages?: Maybe<Languages>;
  languagesCollection?: Maybe<LanguagesCollection>;
  menu?: Maybe<Menu>;
  menuCollection?: Maybe<MenuCollection>;
  post?: Maybe<Post>;
  postCollection?: Maybe<PostCollection>;
  resume?: Maybe<Resume>;
  resumeCollection?: Maybe<ResumeCollection>;
  softSkills?: Maybe<SoftSkills>;
  softSkillsCollection?: Maybe<SoftSkillsCollection>;
  technologies?: Maybe<Technologies>;
  technologiesCollection?: Maybe<TechnologiesCollection>;
  testing?: Maybe<Testing>;
  testingCollection?: Maybe<TestingCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAuthorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorFilter>;
};


export type QueryBackendArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBackendCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BackendOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BackendFilter>;
};


export type QueryContactArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
};


export type QueryContactDetailsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContactDetailsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactDetailsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactDetailsFilter>;
};


export type QueryEducationOrNonRelevantExperienceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEducationOrNonRelevantExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EducationOrNonRelevantExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationOrNonRelevantExperienceFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryExperienceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceFilter>;
};


export type QueryFrontendArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFrontendCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FrontendOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FrontendFilter>;
};


export type QueryFrontpageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFrontpageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FrontpageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FrontpageFilter>;
};


export type QueryHardSkillsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHardSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HardSkillsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HardSkillsFilter>;
};


export type QueryHeroBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroBannerFilter>;
};


export type QueryKeyHardSkillsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryKeyHardSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<KeyHardSkillsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KeyHardSkillsFilter>;
};


export type QueryLanguagesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLanguagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LanguagesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LanguagesFilter>;
};


export type QueryMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuFilter>;
};


export type QueryPostArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFilter>;
};


export type QueryResumeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryResumeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ResumeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResumeFilter>;
};


export type QuerySoftSkillsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySoftSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SoftSkillsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SoftSkillsFilter>;
};


export type QueryTechnologiesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTechnologiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TechnologiesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologiesFilter>;
};


export type QueryTestingArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTestingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TestingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestingFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type Resume = Entry & {
  __typename?: 'Resume';
  colorPicker?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<ContactDetails>;
  contentfulMetadata: ContentfulMetadata;
  educationCollection?: Maybe<ResumeEducationCollection>;
  experienceCollection?: Maybe<ResumeExperienceCollection>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  keyHardSkills?: Maybe<HardSkills>;
  keySoftSkills?: Maybe<SoftSkills>;
  languages?: Maybe<Languages>;
  linkedFrom?: Maybe<ResumeLinkingCollections>;
  nonItCollection?: Maybe<ResumeNonItCollection>;
  pitch?: Maybe<ResumePitch>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeColorPickerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeContactsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ContactDetailsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeEducationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ResumeEducationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationOrNonRelevantExperienceFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ResumeExperienceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeJobTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeKeyHardSkillsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HardSkillsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeKeySoftSkillsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SoftSkillsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeLanguagesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LanguagesFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeNonItCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ResumeNonItCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationOrNonRelevantExperienceFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumePitchArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/resume) */
export type ResumeSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ResumeCollection = {
  __typename?: 'ResumeCollection';
  items: Array<Maybe<Resume>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ResumeEducationCollection = {
  __typename?: 'ResumeEducationCollection';
  items: Array<Maybe<EducationOrNonRelevantExperience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ResumeEducationCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  InstitutionoremployerAsc = 'institutionoremployer_ASC',
  InstitutionoremployerDesc = 'institutionoremployer_DESC',
  IsRelevantAsc = 'isRelevant_ASC',
  IsRelevantDesc = 'isRelevant_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ResumeExperienceCollection = {
  __typename?: 'ResumeExperienceCollection';
  items: Array<Maybe<Experience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ResumeExperienceCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ResumeFilter = {
  AND?: InputMaybe<Array<InputMaybe<ResumeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ResumeFilter>>>;
  colorPicker?: InputMaybe<Scalars['String']['input']>;
  colorPicker_contains?: InputMaybe<Scalars['String']['input']>;
  colorPicker_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPicker_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPicker_not?: InputMaybe<Scalars['String']['input']>;
  colorPicker_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPicker_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contacts?: InputMaybe<CfContactDetailsNestedFilter>;
  contacts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  education?: InputMaybe<CfEducationOrNonRelevantExperienceNestedFilter>;
  educationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  experience?: InputMaybe<CfExperienceNestedFilter>;
  experienceCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  jobTitle_contains?: InputMaybe<Scalars['String']['input']>;
  jobTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  jobTitle_not?: InputMaybe<Scalars['String']['input']>;
  jobTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  jobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keyHardSkills?: InputMaybe<CfHardSkillsNestedFilter>;
  keyHardSkills_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keySoftSkills?: InputMaybe<CfSoftSkillsNestedFilter>;
  keySoftSkills_exists?: InputMaybe<Scalars['Boolean']['input']>;
  languages?: InputMaybe<CfLanguagesNestedFilter>;
  languages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nonIt?: InputMaybe<CfEducationOrNonRelevantExperienceNestedFilter>;
  nonItCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pitch_contains?: InputMaybe<Scalars['String']['input']>;
  pitch_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pitch_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ResumeLinkingCollections = {
  __typename?: 'ResumeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ResumeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ResumeNonItCollection = {
  __typename?: 'ResumeNonItCollection';
  items: Array<Maybe<EducationOrNonRelevantExperience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ResumeNonItCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  InstitutionoremployerAsc = 'institutionoremployer_ASC',
  InstitutionoremployerDesc = 'institutionoremployer_DESC',
  IsRelevantAsc = 'isRelevant_ASC',
  IsRelevantDesc = 'isRelevant_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ResumeOrder {
  ColorPickerAsc = 'colorPicker_ASC',
  ColorPickerDesc = 'colorPicker_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ResumePitch = {
  __typename?: 'ResumePitch';
  json: Scalars['JSON']['output'];
  links: ResumePitchLinks;
};

export type ResumePitchAssets = {
  __typename?: 'ResumePitchAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ResumePitchEntries = {
  __typename?: 'ResumePitchEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ResumePitchLinks = {
  __typename?: 'ResumePitchLinks';
  assets: ResumePitchAssets;
  entries: ResumePitchEntries;
  resources: ResumePitchResources;
};

export type ResumePitchResources = {
  __typename?: 'ResumePitchResources';
  block: Array<ResumePitchResourcesBlock>;
  hyperlink: Array<ResumePitchResourcesHyperlink>;
  inline: Array<ResumePitchResourcesInline>;
};

export type ResumePitchResourcesBlock = ResourceLink & {
  __typename?: 'ResumePitchResourcesBlock';
  sys: ResourceSys;
};

export type ResumePitchResourcesHyperlink = ResourceLink & {
  __typename?: 'ResumePitchResourcesHyperlink';
  sys: ResourceSys;
};

export type ResumePitchResourcesInline = ResourceLink & {
  __typename?: 'ResumePitchResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/softSkills) */
export type SoftSkills = Entry & {
  __typename?: 'SoftSkills';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SoftSkillsLinkingCollections>;
  softSkills?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/softSkills) */
export type SoftSkillsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/softSkills) */
export type SoftSkillsSoftSkillsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/softSkills) */
export type SoftSkillsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SoftSkillsCollection = {
  __typename?: 'SoftSkillsCollection';
  items: Array<Maybe<SoftSkills>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SoftSkillsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SoftSkillsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SoftSkillsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  softSkills_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  softSkills_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  softSkills_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  softSkills_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SoftSkillsLinkingCollections = {
  __typename?: 'SoftSkillsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  resumeCollection?: Maybe<ResumeCollection>;
};


export type SoftSkillsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SoftSkillsLinkingCollectionsResumeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SoftSkillsLinkingCollectionsResumeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SoftSkillsLinkingCollectionsResumeCollectionOrder {
  ColorPickerAsc = 'colorPicker_ASC',
  ColorPickerDesc = 'colorPicker_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SoftSkillsOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/technologies) */
export type Technologies = Entry & {
  __typename?: 'Technologies';
  backend?: Maybe<Backend>;
  contentfulMetadata: ContentfulMetadata;
  frontend?: Maybe<Frontend>;
  linkedFrom?: Maybe<TechnologiesLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/technologies) */
export type TechnologiesBackendArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BackendFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/technologies) */
export type TechnologiesFrontendArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FrontendFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/technologies) */
export type TechnologiesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/technologies) */
export type TechnologiesTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TechnologiesCollection = {
  __typename?: 'TechnologiesCollection';
  items: Array<Maybe<Technologies>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TechnologiesFilter = {
  AND?: InputMaybe<Array<InputMaybe<TechnologiesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TechnologiesFilter>>>;
  backend?: InputMaybe<CfBackendNestedFilter>;
  backend_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  frontend?: InputMaybe<CfFrontendNestedFilter>;
  frontend_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TechnologiesLinkingCollections = {
  __typename?: 'TechnologiesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  frontpageCollection?: Maybe<FrontpageCollection>;
};


export type TechnologiesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TechnologiesLinkingCollectionsFrontpageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TechnologiesLinkingCollectionsFrontpageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TechnologiesLinkingCollectionsFrontpageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TechnologiesOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/testing) */
export type Testing = Entry & {
  __typename?: 'Testing';
  apiTesting?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  endToEndTesting?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<TestingLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  unitTesting?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/testing) */
export type TestingApiTestingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/testing) */
export type TestingEndToEndTestingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/testing) */
export type TestingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/testing) */
export type TestingTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/i5linrh1dukn/content_types/testing) */
export type TestingUnitTestingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TestingCollection = {
  __typename?: 'TestingCollection';
  items: Array<Maybe<Testing>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TestingFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestingFilter>>>;
  apiTesting_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  apiTesting_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  apiTesting_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  apiTesting_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endToEndTesting_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endToEndTesting_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endToEndTesting_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endToEndTesting_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unitTesting_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unitTesting_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unitTesting_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unitTesting_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestingLinkingCollections = {
  __typename?: 'TestingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  hardSkillsCollection?: Maybe<HardSkillsCollection>;
  keyHardSkillsCollection?: Maybe<KeyHardSkillsCollection>;
};


export type TestingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TestingLinkingCollectionsHardSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TestingLinkingCollectionsHardSkillsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TestingLinkingCollectionsKeyHardSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TestingLinkingCollectionsKeyHardSkillsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TestingLinkingCollectionsHardSkillsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TestingLinkingCollectionsKeyHardSkillsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TestingOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  picture_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfBackendNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBackendNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBackendNestedFilter>>>;
  cms_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cms_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cms_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cms_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataTransfer_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataTransfer_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataTransfer_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataTransfer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  databases_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  databases_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  databases_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  databases_exists?: InputMaybe<Scalars['Boolean']['input']>;
  languages_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  librariesframeworks_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfContactDetailsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContactDetailsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContactDetailsNestedFilter>>>;
  contactCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfContactNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContactNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContactNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfEducationOrNonRelevantExperienceNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfEducationOrNonRelevantExperienceNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfEducationOrNonRelevantExperienceNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  institutionoremployer?: InputMaybe<Scalars['String']['input']>;
  institutionoremployer_contains?: InputMaybe<Scalars['String']['input']>;
  institutionoremployer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  institutionoremployer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  institutionoremployer_not?: InputMaybe<Scalars['String']['input']>;
  institutionoremployer_not_contains?: InputMaybe<Scalars['String']['input']>;
  institutionoremployer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isRelevant?: InputMaybe<Scalars['Boolean']['input']>;
  isRelevant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isRelevant_not?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfExperienceNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfExperienceNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfExperienceNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfFrontendNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFrontendNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFrontendNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  languages_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  librariesframeworks_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  librariesframeworks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  otherTools_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  otherTools_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  otherTools_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  otherTools_exists?: InputMaybe<Scalars['Boolean']['input']>;
  stateManagement_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stateManagement_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stateManagement_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stateManagement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styling_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  styling_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  styling_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  styling_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfHardSkillsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHardSkillsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHardSkillsNestedFilter>>>;
  backend_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  frontend_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  testing_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfHeroBannerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroBannerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeroBannerNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  primaryLink?: InputMaybe<Scalars['String']['input']>;
  primaryLink_contains?: InputMaybe<Scalars['String']['input']>;
  primaryLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  primaryLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  primaryLink_not?: InputMaybe<Scalars['String']['input']>;
  primaryLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  primaryLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryLink?: InputMaybe<Scalars['String']['input']>;
  secondaryLink_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryLink_not?: InputMaybe<Scalars['String']['input']>;
  secondaryLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  slogan_contains?: InputMaybe<Scalars['String']['input']>;
  slogan_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slogan_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slogan_not?: InputMaybe<Scalars['String']['input']>;
  slogan_not_contains?: InputMaybe<Scalars['String']['input']>;
  slogan_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfLanguagesNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLanguagesNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLanguagesNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  languages_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  languages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPostNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPostNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPostNestedFilter>>>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  coverImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  excerpt_contains?: InputMaybe<Scalars['String']['input']>;
  excerpt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  excerpt_not?: InputMaybe<Scalars['String']['input']>;
  excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formattedText_contains?: InputMaybe<Scalars['String']['input']>;
  formattedText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formattedText_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSoftSkillsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSoftSkillsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSoftSkillsNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  softSkills_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  softSkills_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  softSkills_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  softSkills_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTechnologiesNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTechnologiesNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTechnologiesNestedFilter>>>;
  backend_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  frontend_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTestingNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTestingNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTestingNestedFilter>>>;
  apiTesting_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  apiTesting_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  apiTesting_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  apiTesting_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endToEndTesting_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endToEndTesting_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endToEndTesting_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endToEndTesting_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unitTesting_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unitTesting_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unitTesting_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unitTesting_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FragmentTechFragment = { __typename?: 'Technologies', title?: string | null, frontend?: { __typename?: 'Frontend', title?: string | null, languages?: Array<string | null> | null, librariesframeworks?: Array<string | null> | null, styling?: Array<string | null> | null, stateManagement?: Array<string | null> | null, otherTools?: Array<string | null> | null } | null, backend?: { __typename?: 'Backend', title?: string | null, languages?: Array<string | null> | null, librariesframeworks?: Array<string | null> | null, cms?: Array<string | null> | null, dataTransfer?: Array<string | null> | null, databases?: Array<string | null> | null } | null };

export type FragmentHeroBannerFragment = { __typename?: 'HeroBanner', title?: string | null, description?: string | null, slogan?: string | null, heroImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null };

export type FragmentFrontendFragment = { __typename?: 'Frontend', title?: string | null, languages?: Array<string | null> | null, librariesframeworks?: Array<string | null> | null, styling?: Array<string | null> | null, stateManagement?: Array<string | null> | null, otherTools?: Array<string | null> | null };

export type FragmentBackendFragment = { __typename?: 'Backend', title?: string | null, languages?: Array<string | null> | null, librariesframeworks?: Array<string | null> | null, cms?: Array<string | null> | null, dataTransfer?: Array<string | null> | null, databases?: Array<string | null> | null };

export type FragmentTestingFragment = { __typename?: 'Testing', title?: string | null, unitTesting?: Array<string | null> | null, endToEndTesting?: Array<string | null> | null, apiTesting?: Array<string | null> | null };

export type FragmentExperienceFragment = { __typename?: 'Experience', title?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', name?: string | null } | null> } };

export type FragmentEdFragment = { __typename?: 'EducationOrNonRelevantExperience', title?: string | null, institutionoremployer?: string | null, description?: string | null, startDate?: any | null, endDate?: any | null, isRelevant?: boolean | null, sys: { __typename?: 'Sys', id: string } };

export type FragmentSoftSkillsFragment = { __typename?: 'SoftSkills', title?: string | null, softSkills?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string } };

export type FragmentHardSkillsFragment = { __typename?: 'HardSkills', title?: string | null, frontend?: { __typename?: 'Frontend', title?: string | null, languages?: Array<string | null> | null, librariesframeworks?: Array<string | null> | null, styling?: Array<string | null> | null, stateManagement?: Array<string | null> | null, otherTools?: Array<string | null> | null } | null, backend?: { __typename?: 'Backend', title?: string | null, languages?: Array<string | null> | null, librariesframeworks?: Array<string | null> | null, cms?: Array<string | null> | null, dataTransfer?: Array<string | null> | null, databases?: Array<string | null> | null } | null, testing?: { __typename?: 'Testing', title?: string | null, unitTesting?: Array<string | null> | null, endToEndTesting?: Array<string | null> | null, apiTesting?: Array<string | null> | null } | null };

export type FragmentContactsFragment = { __typename?: 'ContactDetails', title?: string | null, contactCollection?: { __typename?: 'ContactDetailsContactCollection', items: Array<{ __typename?: 'Contact', title?: string | null, value?: string | null, type?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type FragmentPostFragment = { __typename?: 'Post', slug?: string | null, title?: string | null, excerpt?: string | null, coverImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', name?: string | null } | null> }, content?: { __typename?: 'PostContent', json: any } | null };

export type FragmentAuthorFragment = { __typename?: 'Author', name?: string | null, picture?: { __typename?: 'Asset', url?: string | null } | null };

export type FragmentAssetFragment = { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } };

export type FragmentFrontpageFragment = { __typename?: 'Frontpage', title?: string | null, hero?: { __typename?: 'HeroBanner', title?: string | null, description?: string | null, slogan?: string | null, heroImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null } | null, description?: { __typename?: 'FrontpageDescription', json: any, links: { __typename?: 'FrontpageDescriptionLinks', assets: { __typename?: 'FrontpageDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, tech?: { __typename?: 'Technologies', title?: string | null, frontend?: { __typename?: 'Frontend', title?: string | null, languages?: Array<string | null> | null, librariesframeworks?: Array<string | null> | null, styling?: Array<string | null> | null, stateManagement?: Array<string | null> | null, otherTools?: Array<string | null> | null } | null, backend?: { __typename?: 'Backend', title?: string | null, languages?: Array<string | null> | null, librariesframeworks?: Array<string | null> | null, cms?: Array<string | null> | null, dataTransfer?: Array<string | null> | null, databases?: Array<string | null> | null } | null } | null, featuredImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null, highlightedPostsCollection?: { __typename?: 'FrontpageHighlightedPostsCollection', items: Array<{ __typename?: 'Post', slug?: string | null, title?: string | null, excerpt?: string | null, coverImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', name?: string | null } | null> }, content?: { __typename?: 'PostContent', json: any } | null } | null> } | null };

export type GetContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactsQuery = { __typename?: 'Query', contactDetailsCollection?: { __typename?: 'ContactDetailsCollection', items: Array<{ __typename?: 'ContactDetails', title?: string | null, contactCollection?: { __typename?: 'ContactDetailsContactCollection', items: Array<{ __typename?: 'Contact', title?: string | null, value?: string | null, type?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug?: string | null, title?: string | null, excerpt?: string | null, coverImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', name?: string | null } | null> }, content?: { __typename?: 'PostContent', json: any } | null } | null> } | null };

export type GetPostQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPostQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug?: string | null, title?: string | null, excerpt?: string | null, coverImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', name?: string | null } | null> }, content?: { __typename?: 'PostContent', json: any } | null } | null> } | null };

export type GetPostsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsSlugsQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug?: string | null } | null> } | null };

export type GetPostPreviewQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPostPreviewQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug?: string | null, title?: string | null, excerpt?: string | null, coverImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', name?: string | null } | null> }, content?: { __typename?: 'PostContent', json: any } | null } | null> } | null };

export type GetFrontpageQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetFrontpageQuery = { __typename?: 'Query', frontpageCollection?: { __typename?: 'FrontpageCollection', items: Array<{ __typename?: 'Frontpage', title?: string | null, hero?: { __typename?: 'HeroBanner', title?: string | null, description?: string | null, slogan?: string | null, heroImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null } | null, description?: { __typename?: 'FrontpageDescription', json: any, links: { __typename?: 'FrontpageDescriptionLinks', assets: { __typename?: 'FrontpageDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, tech?: { __typename?: 'Technologies', title?: string | null, frontend?: { __typename?: 'Frontend', title?: string | null, languages?: Array<string | null> | null, librariesframeworks?: Array<string | null> | null, styling?: Array<string | null> | null, stateManagement?: Array<string | null> | null, otherTools?: Array<string | null> | null } | null, backend?: { __typename?: 'Backend', title?: string | null, languages?: Array<string | null> | null, librariesframeworks?: Array<string | null> | null, cms?: Array<string | null> | null, dataTransfer?: Array<string | null> | null, databases?: Array<string | null> | null } | null } | null, featuredImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null, highlightedPostsCollection?: { __typename?: 'FrontpageHighlightedPostsCollection', items: Array<{ __typename?: 'Post', slug?: string | null, title?: string | null, excerpt?: string | null, coverImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', name?: string | null } | null> }, content?: { __typename?: 'PostContent', json: any } | null } | null> } | null } | null> } | null };

export type GetMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuQuery = { __typename?: 'Query', menuCollection?: { __typename?: 'MenuCollection', items: Array<{ __typename?: 'Menu', menuLinksCollection?: { __typename?: 'MenuMenuLinksCollection', items: Array<{ __typename?: 'Post', slug?: string | null, title?: string | null } | null> } | null } | null> } | null };

export const FragmentExperienceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentExperience"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FragmentExperienceFragment, unknown>;
export const FragmentEdFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentEd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EducationOrNonRelevantExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"institutionoremployer"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"isRelevant"}}]}}]} as unknown as DocumentNode<FragmentEdFragment, unknown>;
export const FragmentSoftSkillsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentSoftSkills"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SoftSkills"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"softSkills"}}]}}]} as unknown as DocumentNode<FragmentSoftSkillsFragment, unknown>;
export const FragmentFrontendFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentFrontend"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Frontend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"librariesframeworks"}},{"kind":"Field","name":{"kind":"Name","value":"styling"}},{"kind":"Field","name":{"kind":"Name","value":"stateManagement"}},{"kind":"Field","name":{"kind":"Name","value":"otherTools"}}]}}]} as unknown as DocumentNode<FragmentFrontendFragment, unknown>;
export const FragmentBackendFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentBackend"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Backend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"librariesframeworks"}},{"kind":"Field","name":{"kind":"Name","value":"cms"}},{"kind":"Field","name":{"kind":"Name","value":"dataTransfer"}},{"kind":"Field","name":{"kind":"Name","value":"databases"}}]}}]} as unknown as DocumentNode<FragmentBackendFragment, unknown>;
export const FragmentTestingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentTesting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Testing"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"unitTesting"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndTesting"}},{"kind":"Field","name":{"kind":"Name","value":"apiTesting"}}]}}]} as unknown as DocumentNode<FragmentTestingFragment, unknown>;
export const FragmentHardSkillsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentHardSkills"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HardSkills"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"frontend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentFrontend"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentBackend"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentTesting"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentFrontend"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Frontend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"librariesframeworks"}},{"kind":"Field","name":{"kind":"Name","value":"styling"}},{"kind":"Field","name":{"kind":"Name","value":"stateManagement"}},{"kind":"Field","name":{"kind":"Name","value":"otherTools"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentBackend"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Backend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"librariesframeworks"}},{"kind":"Field","name":{"kind":"Name","value":"cms"}},{"kind":"Field","name":{"kind":"Name","value":"dataTransfer"}},{"kind":"Field","name":{"kind":"Name","value":"databases"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentTesting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Testing"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"unitTesting"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndTesting"}},{"kind":"Field","name":{"kind":"Name","value":"apiTesting"}}]}}]} as unknown as DocumentNode<FragmentHardSkillsFragment, unknown>;
export const FragmentContactsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentContacts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contactCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<FragmentContactsFragment, unknown>;
export const FragmentAuthorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<FragmentAuthorFragment, unknown>;
export const FragmentAssetFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<FragmentAssetFragment, unknown>;
export const FragmentHeroBannerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentHeroBanner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slogan"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<FragmentHeroBannerFragment, unknown>;
export const FragmentTechFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentTech"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Technologies"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"frontend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentFrontend"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentBackend"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentFrontend"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Frontend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"librariesframeworks"}},{"kind":"Field","name":{"kind":"Name","value":"styling"}},{"kind":"Field","name":{"kind":"Name","value":"stateManagement"}},{"kind":"Field","name":{"kind":"Name","value":"otherTools"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentBackend"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Backend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"librariesframeworks"}},{"kind":"Field","name":{"kind":"Name","value":"cms"}},{"kind":"Field","name":{"kind":"Name","value":"dataTransfer"}},{"kind":"Field","name":{"kind":"Name","value":"databases"}}]}}]} as unknown as DocumentNode<FragmentTechFragment, unknown>;
export const FragmentPostFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<FragmentPostFragment, unknown>;
export const FragmentFrontpageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentFrontpage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Frontpage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentHeroBanner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tech"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentTech"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highlightedPostsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentPost"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentFrontend"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Frontend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"librariesframeworks"}},{"kind":"Field","name":{"kind":"Name","value":"styling"}},{"kind":"Field","name":{"kind":"Name","value":"stateManagement"}},{"kind":"Field","name":{"kind":"Name","value":"otherTools"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentBackend"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Backend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"librariesframeworks"}},{"kind":"Field","name":{"kind":"Name","value":"cms"}},{"kind":"Field","name":{"kind":"Name","value":"dataTransfer"}},{"kind":"Field","name":{"kind":"Name","value":"databases"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentHeroBanner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slogan"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentTech"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Technologies"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"frontend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentFrontend"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentBackend"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]} as unknown as DocumentNode<FragmentFrontpageFragment, unknown>;
export const GetContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactDetailsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentContacts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentContacts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contactCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<GetContactsQuery, GetContactsQueryVariables>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentPost"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentPost"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;
export const GetPostsSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostsSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsSlugsQuery, GetPostsSlugsQueryVariables>;
export const GetPostPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"BooleanValue","value":true}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentPost"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]} as unknown as DocumentNode<GetPostPreviewQuery, GetPostPreviewQueryVariables>;
export const GetFrontpageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFrontpage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"frontpageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentFrontpage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentHeroBanner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slogan"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentFrontend"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Frontend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"librariesframeworks"}},{"kind":"Field","name":{"kind":"Name","value":"styling"}},{"kind":"Field","name":{"kind":"Name","value":"stateManagement"}},{"kind":"Field","name":{"kind":"Name","value":"otherTools"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentBackend"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Backend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"librariesframeworks"}},{"kind":"Field","name":{"kind":"Name","value":"cms"}},{"kind":"Field","name":{"kind":"Name","value":"dataTransfer"}},{"kind":"Field","name":{"kind":"Name","value":"databases"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentTech"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Technologies"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"frontend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentFrontend"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentBackend"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentFrontpage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Frontpage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentHeroBanner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tech"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentTech"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"highlightedPostsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentPost"}}]}}]}}]}}]} as unknown as DocumentNode<GetFrontpageQuery, GetFrontpageQueryVariables>;
export const GetMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMenu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuLinksCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMenuQuery, GetMenuQueryVariables>;