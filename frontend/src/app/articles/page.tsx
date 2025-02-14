import ArticleCard from "@/components/ArticleCard";
import GridLayout from "@/components/layout/Grid";
import { fetchArticles } from "@/queries/queries";

export default async function ArticleListPage() {
  const data = await fetchArticles();

  return (
    <GridLayout>
      {data.articles.results.map((a) => {
        return <ArticleCard key={a.id} article={a} />;
      })}
    </GridLayout>
  );
}
