import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { SearchProvider } from "@/components/layout/SearchContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.push("/movies");
  }, []);
  return (
    <>
      <SearchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
    </>
  );
}
