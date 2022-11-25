import Header from "../../components/header";
import { useQuery } from "@apollo/client";
import { fetchChapter } from "../../graphql";
import Link from "next/link";
import { useRouter } from "next/router";

export default function chapters() {
  const { data } = useQuery(fetchChapter);
  const router = useRouter();

  return (
    <>
      <Header title={"Chapters"} buttonName={"Home"} navigateTo={""}></Header>
      <ul
        role="list"
        className="divide-y divide-gray-200 flex items-center flex-col mt-24"
      >
        {data?.chapters.map((chap) => (
          <li key={chap!.id} className="flex py-4">
            <div>
              <p
                onClick={() => router.push(`/chapters/${chap!.id}`)}
                className="text-lg text-left font-medium text-gray-900"
              >
                {chap!.name}
              </p>

              <Link href={`chapters/cover/${chap!.id}`}>
                <p className="text-center text-xs text-gray-500  hover:text-indigo-700 ">
                  Cover Link
                </p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
