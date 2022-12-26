import { graphql } from "../src/gql";

export const createVideo = graphql(/* GraphQL */ `
  query Query {
    createVideo
  }
`);
