import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const route = router.pathname;
  let backgroundColor = "bg-white";

  if (route === "/chapters/[chapterid]/[verseid]") {
    backgroundColor = "bg-blue-600";
  } else if (route === "/chapters/cover/[chapterid]") {
    backgroundColor = "bg-blue-200";
  }

  return (
    <ApolloProvider client={client}>
      <div className={backgroundColor}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
