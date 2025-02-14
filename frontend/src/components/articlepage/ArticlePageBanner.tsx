import "./ArticlePageBanner.css";

import { formatDate } from "@/components/format-date";
import { LikesWidget } from "@/components/LikesWidget";
import { Article } from "@/types";

type ArticlePageBannerProps = {
  article: Article;
};
export function ArticlePageBanner({ article }: ArticlePageBannerProps) {
  return (
    <div
      style={{
        "--article-bg-image": `url('${article.image?.uri}')`,
      }}
    >
      <div className={`ecolify-header-wrap mt-8 px-12 py-8`}>
        <div
          className={
            "container mx-auto flex flex-col-reverse md:flex-row md:space-x-8"
          }
        >
          <div className={"mt-8 md:mt-0 md:w-1/2"}>
            <div className={"flex h-full flex-col justify-between"}>
              <div>
                <div className={"flex justify-between"}>
                  <p
                    className={
                      "text-red font-space text-sm font-medium uppercase tracking-[2px]"
                    }
                  >
                    {article.category}
                  </p>
                </div>
                <h1
                  className={
                    "mb-4 mt-4 font-space text-5xl font-black leading-[1.1]"
                  }
                >
                  {article.title}
                </h1>
                <p
                  className={
                    "text mt-2 font-inter font-bold leading-8 text-teal-900"
                  }
                >
                  {formatDate(article.date)}
                  {" | "}
                  {article.excerpt}
                </p>
              </div>
              <div>
                <div
                  className={"mt-4 flex items-center justify-between space-x-8"}
                >
                  <p className={"text-lg"}>
                    A story by{" "}
                    <span className={"font-bold"}> {article.writer.name}</span>
                  </p>
                  <LikesWidget article={article} style={"white"} />
                  {/*<div*/}
                  {/*  className={*/}
                  {/*    "rounded border border-slate-900 bg-white px-2 py-1 tracking-wide text-teal-700"*/}
                  {/*  }*/}
                  {/*>*/}
                  {/*  Reading time{" "}*/}
                  {/*  {formatDuration((article.wordCount / 100) * 60)}*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
          <div className={"md:w-1/2"}>
            <div className={"overflow-hidden"}>
              <img
                className="w-full transform rounded object-cover transition-all duration-1000 ease-in-out hover:scale-125 sm:mt-4 sm:max-h-80 md:mt-0"
                src={article.image?.uri}
                alt={article.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
