import { Inter } from "next/font/google";
import Link from "next/link";
// import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

const inter = Inter({ subsets: ["latin"] });

// type ProductType = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: object;
// };

// export const getServerSideProps: GetServerSideProps<{
//   allProducts: ProductType[];
// }> = async () => {
//   const res = await fetch("https://fakestoreapi.com/products/");
//   const allProducts = await res.json();
//   return { props: { allProducts } };
// };

export default function Portfolio() {
//   {
//   allProducts,
// }: InferGetServerSidePropsType<typeof getServerSideProps>
  // console.log("allProducts", allProducts);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Portfolio Page&nbsp; - Go:
          <Link href="/">
            <code className="font-mono font-bold">
              {process.env.NEXT_PUBLIC_BASE_PATH}/Home
            </code>
          </Link>
        </p>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/portfolios/1">
            Go:
            <code className="font-mono font-bold">
              {process.env.NEXT_PUBLIC_BASE_PATH}/portfolios/1
            </code>
          </Link>
        </p>
      </div>
    </main>
  );
}
