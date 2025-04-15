import Link from "next/link";

import { Button } from "@/components/Button";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main
      className={"min-w-screen flex flex-grow flex-col bg-cover"}
      style={{
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)), url('/images/landing-page.jpg')",
      }}
    >
      <div className={"flex flex-grow flex-col justify-between"}>
        <div className="space-y-16 px-4 pt-32 text-center font-space font-bold">
          <div
            className={
              "inline-block rounded-xl bg-teal-100/30 p-4 text-8xl font-bold decoration-4 underline-offset-4 group-hover:text-sky-200"
            }
          >
            <span className={"text-teal-600 group-hover:text-sky-200"}>
              eco
            </span>
            lify
          </div>
          <h1>
            <div
              className={
                "inline-block rounded-xl bg-teal-100/40 p-4 font-opensans text-4xl group-hover:text-sky-200"
              }
            >
              News for a{" "}
              <span className={"text-teal-600 group-hover:text-sky-200"}>
                greener
              </span>{" "}
              world
            </div>
          </h1>

          <div className="mx-auto max-w-2xl rounded-xl bg-teal-100/40 p-4 font-barlow text-xl font-normal tracking-wide">
            <p>
              There are a lot of news sites. But only this one is rendered with
              modern{" "}
              <span className="relative font-bold text-teal-700">
                frontend and backend
              </span>{" "}
              services.
            </p>
          </div>
          <div className="flex justify-center">
            <Button size={"lg"}>
              <Link href={"/articles"}>
                Let me in - I want to read more! 😻
              </Link>
            </Button>
          </div>
        </div>
        <Footer variant={"light"} />
      </div>
    </main>
  );
}
