import { graphql } from "../src/gql";

export const fetchChapter = graphql(/* GraphQL */ `
  query Chapters {
    chapters {
      id
      name
    }
  }
`);
