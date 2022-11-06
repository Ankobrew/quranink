/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetOneVerse($chapterId: Int!, $ayah: Int!) {\n    getOneVerse(chapterId: $chapterId, ayah: $ayah) {\n      content\n    }\n  }\n": types.GetOneVerseDocument,
};

export function graphql(source: "\n  query GetOneVerse($chapterId: Int!, $ayah: Int!) {\n    getOneVerse(chapterId: $chapterId, ayah: $ayah) {\n      content\n    }\n  }\n"): (typeof documents)["\n  query GetOneVerse($chapterId: Int!, $ayah: Int!) {\n    getOneVerse(chapterId: $chapterId, ayah: $ayah) {\n      content\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;