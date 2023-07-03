import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
console.log("publicRuntimeConfig:", publicRuntimeConfig);

// console.log(process.env);
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("ENVIRONMENT:", process.env.ENVIRONMENT);
console.log("NEXT_PUBLIC_BASE_PATH:", process.env.NEXT_PUBLIC_BASE_PATH);
console.log("TEST_PRC:", process.env.TEST_PRC);
console.log("PRT_TEST_PRC:", publicRuntimeConfig.TEST_PRC);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // console.log("router:", router);
  // console.log("pageProps:", pageProps);
  return <Component {...pageProps} />;
}
