import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import { fetchArticleList } from "@/queries/queries";

export default async function ArticleListPage() {
  const articles = await fetchArticleList(); // Controller + Model

  return (
    <div className={"container mx-auto space-y-4"}>
      <ArticleListGrid articles={articles.articles} />
    </div>
  );
}
