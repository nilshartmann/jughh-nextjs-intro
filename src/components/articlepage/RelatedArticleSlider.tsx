"use client";

import { use, useState } from "react";

import RelatedArticleBox from "@/components/articlepage/RelatedArticleBox";
import { RelatedArticle } from "@/types";

type RelatedArticlesProps = {
  articlesPromise: Promise<RelatedArticle[]>;
};

export default function RelatedArticleSlider({
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
    <RelatedArticleBox
      onNextClick={() => handleClick(+1)}
      onPrevClick={() => handleClick(-1)}
      article={article}
    />
  );
}
