import { useQuery } from "@apollo/client";
import { graphql } from "../src/gql";

const VerseWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query GetOneVerse($chapterId: Int!, $ayah: Int!) {
    getOneVerse(chapterId: $chapterId, ayah: $ayah) {
      content
    }
  }
`);
export default function Verse() {
  const { data } = useQuery(VerseWithVariablesQueryDocument, {
    variables: { chapterId: 14, ayah: 9 },
  });

  if (data) {
    return (
      <div>
        {data.getOneVerse.map((v) => (
          <h1>{v?.content}</h1>
        ))}
      </div>
    );
  }
}
