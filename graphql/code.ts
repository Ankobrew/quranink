import { graphql } from "../src/gql";

export const getCode = graphql(/* GraphQL */ `
  query GetCode {
    getCode {
      content
    }
  }
`);

export const addCode = graphql(/* GraphQL */ `
  mutation AddCode($content: String!) {
    addCode(content: $content) {
      content
    }
  }
`);
