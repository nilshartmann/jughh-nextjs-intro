"use client";

import Link from "next/link";
import { use, useState } from "react";

import { ArrowButton } from "@/components/Button";
import { H3 } from "@/components/Heading";
import { BaseArticle } from "@/types";

type RelatedArticlesProps = {
  articlesPromise: Promise<BaseArticle[]>;
};

export default function RelatedArticles({
  articlesPromise,
}: RelatedArticlesProps) {
  // Note:
  //  Next.js starts loading the articles imediately when
  //  rendering the /articles/articleId route _on the server_
  //  but does NOT wait for the promise to be fullfilled.
  //  instead it sends the _pending_ promise to the client
  //  and here in the browser we're now awaiting the promise

  const articles = use(articlesPromise);

  const [selected, setSelected] = useState(0);

  const article = articles[selected];

  const handleClick = (amount: number) => {
    const newSelected = selected + amount;
    setSelected(
      newSelected < 0
        ? articles.length - 1
        : newSelected > articles.length - 1
          ? 0
          : newSelected,
    );
  };

  return (
    <div
      className={"border-teal rounded-lg"}
      style={{
        "--article-bg-image": `url('${article.image?.uri}')`,
      }}
    >
      <div className={"transform"}>
        <div className={"overflow-hidden"}>
          <img
            className="h-48 max-h-full w-full max-w-full transform rounded object-cover"
            src={article.image?.uri}
            alt={article.image?.altText}
          />

          <button
            className={"absolute left-2 top-2"}
            onClick={() => handleClick(-1)}
          >
            <ArrowButton direction={"left"} />
          </button>
          <div className={"absolute bottom-2 w-full"}>
            <div
              className={
                "mx-2 flex justify-center rounded-lg bg-white/90 p-2 text-center"
              }
            >
              <Link
                href={`/articles/${article.id}`}
                prefetch={false}
                className={"hover:underline"}
              >
                <H3 className={"text-teal-700"}>{article.title}</H3>
              </Link>
            </div>
          </div>
          <button
            onClick={() => handleClick(+1)}
            className={"absolute right-2 top-2"}
          >
            <ArrowButton direction={"right"} />
          </button>
        </div>
      </div>
    </div>
  );
}

function XRelatedArticles({ articlesPromise }: RelatedArticlesProps) {
  // Note:
  //  Next.js starts loading the articles imediately when
  //  rendering the /articles/articleId route _on the server_
  //  but does NOT wait for the promise to be fullfilled.
  //  instead it sends the _pending_ promise to the client
  //  and here in the browser we're now awaiting the promise

  const articles = use(articlesPromise);

  const [selected, setSelected] = useState(0);

  const article = articles[selected];
  const hasPrev = selected > 0;
  const hasNext = selected < articles.length - 1;

  return (
    <div
      className={"border-teal rounded-lg bg-white p-4"}
      style={{
        "--article-bg-image": `url('${article.image?.uri}')`,
      }}
    >
      <div className={"flex items-center justify-between space-x-4"}>
        <button onClick={() => setSelected(selected - 1)} disabled={!hasPrev}>
          <ArrowButton direction={"left"} disabled={!hasPrev} />
        </button>
        <div className={"transform"}>
          <div className={"overflow-hidden"}>
            <img
              className="h-48 max-h-full w-full max-w-full transform rounded object-cover"
              src={article.image?.uri}
              alt={article.image?.altText}
            />
            <div className={"absolute bottom-2"}>
              <div className={"mx-2 rounded-lg bg-white/80 p-2"}>
                <Link
                  href={`/articles/${article.id}`}
                  prefetch={false}
                  className={"hover:underline"}
                >
                  <H3>{article.title}</H3>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => setSelected(selected + 1)} disabled={!hasNext}>
          <ArrowButton direction={"right"} disabled={!hasNext} />
        </button>
      </div>
    </div>
  );
}
