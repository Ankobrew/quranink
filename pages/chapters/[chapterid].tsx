import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { fetchOneChapter } from "../../graphql";
import Header from "../../components/header";

export default function verseList() {
  const router = useRouter();
  const chapterId = router.query.chapterid as string;
  const { data } = useQuery(fetchOneChapter, {
    variables: {
      chapterId: parseInt(chapterId),
    },
  });

  return (
    <>
      <Header
        title={"Verse List"}
        buttonName={"Chapters"}
        navigateTo={"/chapters"}
      ></Header>
      <ul
        role="list"
        className="divide-y divide-gray-200 flex items-center flex-col mt-24 mb-10"
      >
        {data?.getOneChapter.verses.map((ver) => (
          <li key={ver?.ayah} className="flex py-4">
            <div>
              <p
                onClick={() =>
                  router.push(`/chapters/${chapterId}/${ver!.ayah}`)
                }
                className="text-lg text-left font-medium text-gray-900"
              >
                {ver!.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
