import ArticleBannerWrapper from "@/components/articlepage/ArticleBannerWrapper";
import { formatDate } from "@/components/format-date";
import { LikesWidget } from "@/components/LikesWidget";
import ReadingTimeWidget from "@/components/ReadingTimeWidget";
import { Article } from "@/types";

type ArticleBannerProps = {
  article: Article;
};
export function ArticleBanner({ article }: ArticleBannerProps) {
  return (
    <ArticleBannerWrapper backgroundImageUri={article.image?.uri}>
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
                <div className={"flex gap-x-2"}>
                  <ReadingTimeWidget wordCount={article.wordCount} />
                  <LikesWidget
                    articleId={article.id}
                    currentLikes={article.likes}
                  />
                </div>
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
    </ArticleBannerWrapper>
  );
}
