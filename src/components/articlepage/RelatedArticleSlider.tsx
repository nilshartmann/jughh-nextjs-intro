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
