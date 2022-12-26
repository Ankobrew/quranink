import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { parse } from "url";
import { useMutation } from "@apollo/client";
import { getCode, addCode } from "../graphql/index";

export default function Oauth() {
  const router = useRouter();
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const url = router.asPath;
      setCurrentURL(url);
    }

    fetchData();
  }, []);

  const parsedUri = parse(currentURL, true);
  const authorizationCode = parsedUri.query.code as string;

  const [AddCode, { data, loading, error }] = useMutation(addCode);

  return (
    <div className="grid grid-cols-3 gap-20">
      <h1 className=" col-span-3 text-2xl font-bold text-center">Oauth</h1>

      <button
        className=" col-start-2 col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded justify-center"
        onClick={() => AddCode({ variables: { content: authorizationCode } })}
      >
        Click to add code
      </button>
    </div>
  );
}
