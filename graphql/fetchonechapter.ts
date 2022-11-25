import { graphql } from "../src/gql";

export const fetchOneChapter = graphql(`
  query GetOneChapter($chapterId: Int!) {
    getOneChapter(chapterId: $chapterId) {
      name
      verses {
        ayah
        content
      }
    }
  }
`);
