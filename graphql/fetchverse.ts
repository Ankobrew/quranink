import { graphql } from "../src/gql";

export const fetchVerse = graphql(/* GraphQL */ `
  query GetOneVerse($chapterId: Int!, $ayah: Int!) {
    getOneVerse(chapterId: $chapterId, ayah: $ayah) {
      content
    }
  }
`);
