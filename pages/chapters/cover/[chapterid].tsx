import Image from "next/image";
import { useRouter } from "next/router";
import { chapterNames } from "../../../utils/const";

export default function cover() {
  const router = useRouter();
  const chapterId = router.query.chapterid as string;
  return (
    <div className="flex items-center h-screen">
      <div className="flex items-center container border-4 border-sky-500 square-lg  h-96 ml-10 w-8/12">
        <img
          className="p-2"
          src="https://www.assabile.com/media/photo/full_size/nasser-al-qatami-1433.jpg"
        ></img>
      </div>
      <div className="flex flex-col container bg-blue-200 square-lg h-96 mr-10">
        <div className="container bg-blue-200 square-lg h-1/6"></div>
        <div className="flex flex-col items-center container bg-blue-50 square-lg flex-1">
          <h1 className="mt-10 font-bold font-serif text-4xl text-blue-800">
            {chapterNames[parseInt(chapterId) - 1]}
          </h1>
          <h1 className="mt-10 font-semibold text-xs text-orange-600">
            RECITER: SH.NASSER AL-QATAMI
          </h1>

          <Image
            className="mt-4"
            src="/logo.png"
            alt="me"
            width="92"
            height="92"
          />
        </div>

        <div className="flex justify-center items-center container bg-blue-200 square-lg h-1/6">
          <h1 className="text-orange-600 text-xs font-semibold">
            TRANSLATOR: RUWWAD CENTER{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
