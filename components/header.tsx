import { useRouter } from "next/router";

type HeaderProps = {
  title: string;
  buttonName: string;
  navigateTo: string;
};

export default function Header({ title, buttonName, navigateTo }: HeaderProps) {
  const router = useRouter();
  return (
    <>
      <div className=" px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-sm font-medium leading-6 text-gray-900">
              {title}
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              type="button"
              className="relative inline-flex items-center rounded-md border border-transparent bg-gray-400 px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => router.push(`/${navigateTo}`)}
            >
              {buttonName}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
