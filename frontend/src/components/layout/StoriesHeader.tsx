import "./StoriesHeader.css";

import Link from "next/link";

import Breaking from "@/components/Breaking";

export default function StoriesHeader() {
  return (
    <header className={"global-header flex h-36 items-center"}>
      <div className={"mx-auto w-full max-w-screen-lg"}>
        <div className={"flex items-center justify-between font-bold"}>
          <Link href={"/stories"} prefetch={false}>
            <div
              className={
                "group flex items-center space-x-4 rounded-lg bg-teal-100/30 p-4 font-space hover:bg-teal-600/40"
              }
            >
              <div
                className={
                  "cursor-pointer text-4xl font-bold decoration-4 underline-offset-4 group-hover:text-sky-200"
                }
              >
                <span className={"text-teal-600 group-hover:text-sky-200"}>
                  eco
                </span>
                lify
              </div>
              <div className={"font-opensans text-lg group-hover:text-sky-200"}>
                News for a{" "}
                <span className={"text-teal-600 group-hover:text-sky-200"}>
                  greener
                </span>{" "}
                world
              </div>
            </div>
          </Link>

          <div
            className={
              "max-w-80 rounded-lg bg-teal-100/30 p-4 hover:bg-teal-600/40"
            }
          >
            <Breaking>
              A Race Against Time +++ New Discoveries in Marine Biology +++ The
              Next Digital Revolution +++ Next Stop Europa +++ Biodiversity
              Conservation Efforts Gain Momentum
            </Breaking>
          </div>
        </div>
      </div>
    </header>
  );
}
