import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const PortfolioItem = () => {
  const router = useRouter();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Portfolio Item&nbsp; - Go:
          <Link href="/portfolios">
            <code className="font-mono font-bold">
              {process.env.NEXT_PUBLIC_BASE_PATH}/portfolios
            </code>
          </Link>
        </p>
        <p>Post: {router.query.id}</p>
      </div>
    </main>
  );
};
export default PortfolioItem;
