/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Chapter = {
  __typename?: 'Chapter';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  verses: Array<Maybe<Verse>>;
};

export type Query = {
  __typename?: 'Query';
  chapters: Array<Maybe<Chapter>>;
  getOneChapter: Chapter;
  getOneVerse: Array<Maybe<Verse>>;
  verses: Array<Maybe<Verse>>;
};


export type QueryGetOneChapterArgs = {
  id: Scalars['Int'];
};


export type QueryGetOneVerseArgs = {
  ayah: Scalars['Int'];
  chapterId: Scalars['Int'];
};

export type Verse = {
  __typename?: 'Verse';
  ayah?: Maybe<Scalars['Int']>;
  chapterId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type GetOneVerseQueryVariables = Exact<{
  chapterId: Scalars['Int'];
  ayah: Scalars['Int'];
}>;


export type GetOneVerseQuery = { __typename?: 'Query', getOneVerse: Array<{ __typename?: 'Verse', content?: string | null } | null> };


export const GetOneVerseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneVerse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chapterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ayah"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOneVerse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chapterId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chapterId"}}},{"kind":"Argument","name":{"kind":"Name","value":"ayah"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ayah"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetOneVerseQuery, GetOneVerseQueryVariables>;