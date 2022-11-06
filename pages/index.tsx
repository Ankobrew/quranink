import { useQuery } from "@apollo/client";
import { graphql } from "../src/gql";

const VerseWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query GetOneVerse($chapterId: Int!, $ayah: Int!) {
    getOneVerse(chapterId: $chapterId, ayah: $ayah) {
      content
    }
  }
`);
export default function Home() {
  const { data } = useQuery(VerseWithVariablesQueryDocument, {
    variables: { chapterId: 5, ayah: 2 },
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
