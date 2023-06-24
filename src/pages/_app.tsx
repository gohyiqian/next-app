import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { basePath } = router;
  console.log("basePath:", basePath);
  console.log("pageProps:", pageProps);
  const path = (/#!(\/.*)$/.exec(router.asPath) || [])[1];
  if (path) {
    router.replace(path);
  }
  console.log("path", path);
  return <Component {...pageProps} />;
}
