"use client";

import { useState } from "react";

import RelatedArticleBox from "@/components/articlepage/RelatedArticleBox";
import { dummyRelatedArticles } from "@/demo-config";

type RelatedArticlesProps = {};

export default function RelatedArticleSlider({}: RelatedArticlesProps) {
  const articles = dummyRelatedArticles;
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
