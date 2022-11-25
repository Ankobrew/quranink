import { useQuery } from "@apollo/client";
import router from "next/router";
import internal from "stream";
import { fetchVerse } from "../../../graphql";

export default function Verse() {
  const chapterId = router.query.chapterid as string;
  const verseId = router.query.verseid as string;

  const { data } = useQuery(fetchVerse, {
    variables: { chapterId: parseInt(chapterId), ayah: parseInt(verseId) },
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
