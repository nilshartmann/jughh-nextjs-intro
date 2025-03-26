// React Server Component (RSC)
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import { fetchArticleList } from "@/queries/queries";

export default async function ArticleList() {
  const articleList = await fetchArticleList();

  return (
    <div className={"container mx-auto space-y-4"}>
      <ArticleListGrid articles={articleList.articles} />
    </div>
  );
}
