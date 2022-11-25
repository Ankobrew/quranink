import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header
        title={"QuranInk"}
        buttonName={"Chapter"}
        navigateTo={"chapters"}
      ></Header>
      <div className="flex items-center justify-center h-screen flex-col">
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-40 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-8"
        >
          Create A New Video
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-36 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Publish Video To Youtube
        </button>
      </div>
    </>
  );
}
