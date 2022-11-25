/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetOneChapter($chapterId: Int!) {\n    getOneChapter(chapterId: $chapterId) {\n      name\n      verses {\n        ayah\n        content\n      }\n    }\n  }\n": types.GetOneChapterDocument,
    "\n  query Chapters {\n    chapters {\n      id\n      name\n    }\n  }\n": types.ChaptersDocument,
    "\n  query GetOneVerse($chapterId: Int!, $ayah: Int!) {\n    getOneVerse(chapterId: $chapterId, ayah: $ayah) {\n      content\n    }\n  }\n": types.GetOneVerseDocument,
};

export function graphql(source: "\n  query GetOneChapter($chapterId: Int!) {\n    getOneChapter(chapterId: $chapterId) {\n      name\n      verses {\n        ayah\n        content\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOneChapter($chapterId: Int!) {\n    getOneChapter(chapterId: $chapterId) {\n      name\n      verses {\n        ayah\n        content\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query Chapters {\n    chapters {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Chapters {\n    chapters {\n      id\n      name\n    }\n  }\n"];
export function graphql(source: "\n  query GetOneVerse($chapterId: Int!, $ayah: Int!) {\n    getOneVerse(chapterId: $chapterId, ayah: $ayah) {\n      content\n    }\n  }\n"): (typeof documents)["\n  query GetOneVerse($chapterId: Int!, $ayah: Int!) {\n    getOneVerse(chapterId: $chapterId, ayah: $ayah) {\n      content\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;