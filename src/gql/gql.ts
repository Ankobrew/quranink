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
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query GetCode {\n    getCode {\n      content\n    }\n  }\n": types.GetCodeDocument,
    "\n  mutation AddCode($content: String!) {\n    addCode(content: $content) {\n      content\n    }\n  }\n": types.AddCodeDocument,
    "\n  query Query {\n    createVideo\n  }\n": types.QueryDocument,
    "\n  query Chapters {\n    chapters {\n      id\n      name\n    }\n  }\n": types.ChaptersDocument,
    "\n  query GetOneChapter($chapterId: Int!) {\n    getOneChapter(chapterId: $chapterId) {\n      name\n      verses {\n        ayah\n        content\n      }\n    }\n  }\n": types.GetOneChapterDocument,
    "\n  query GetOneVerse($chapterId: Int!, $ayah: Int!) {\n    getOneVerse(chapterId: $chapterId, ayah: $ayah) {\n      content\n    }\n  }\n": types.GetOneVerseDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCode {\n    getCode {\n      content\n    }\n  }\n"): (typeof documents)["\n  query GetCode {\n    getCode {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddCode($content: String!) {\n    addCode(content: $content) {\n      content\n    }\n  }\n"): (typeof documents)["\n  mutation AddCode($content: String!) {\n    addCode(content: $content) {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Query {\n    createVideo\n  }\n"): (typeof documents)["\n  query Query {\n    createVideo\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Chapters {\n    chapters {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Chapters {\n    chapters {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetOneChapter($chapterId: Int!) {\n    getOneChapter(chapterId: $chapterId) {\n      name\n      verses {\n        ayah\n        content\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOneChapter($chapterId: Int!) {\n    getOneChapter(chapterId: $chapterId) {\n      name\n      verses {\n        ayah\n        content\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetOneVerse($chapterId: Int!, $ayah: Int!) {\n    getOneVerse(chapterId: $chapterId, ayah: $ayah) {\n      content\n    }\n  }\n"): (typeof documents)["\n  query GetOneVerse($chapterId: Int!, $ayah: Int!) {\n    getOneVerse(chapterId: $chapterId, ayah: $ayah) {\n      content\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;