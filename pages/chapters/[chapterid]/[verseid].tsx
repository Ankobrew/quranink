import { useQuery } from "@apollo/client";
import router, { useRouter } from "next/router";
import { fetchVerse } from "../../../graphql/";

export default function Verse() {
  const router = useRouter();
  const chapterId = router.query.chapterid as string;
  const verseId = router.query.verseid as string;

  const { data } = useQuery(fetchVerse, {
    variables: { chapterId: parseInt(chapterId), ayah: parseInt(verseId) },
  });

  if (data) {
    return (
      <>
        <div className="flex flex-col justify-center items-center w-screen h-screen text-center text-white ">
          {data.getOneVerse.map((v) => (
            <h1>"{v?.content}"</h1>
          ))}
          <h1 className="m-3 text-amber-500">
            [Qur'an({chapterId}:{verseId})]
          </h1>
        </div>
      </>
    );
  }
}
