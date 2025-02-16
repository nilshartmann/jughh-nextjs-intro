import ArticleCard from "@/components/ArticleCard";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import ArticleListNavBar from "@/components/articlelistpage/ArticleListNavBar";
import ArticleListPaginationBar from "@/components/articlelistpage/ArticleListPaginationBar";
import { fetchArticleList } from "@/queries/queries";

type ArticleListPageProps = {
  searchParams: Promise<Record<string, string>>;
};
export default async function ArticleListPage({
  searchParams,
}: ArticleListPageProps) {
  const { orderBy, page } = await searchParams;

  console.log("Rendering ArticleListPage with searchParams", orderBy, page);

  const data = await fetchArticleList(page, orderBy);

  return (
    <div className={"container mx-auto space-y-4"}>
      <ArticleListNavBar />

      <ArticleListGrid>
        {data.articles.results.map((a) => {
          return <ArticleCard key={a.id} article={a} />;
        })}
      </ArticleListGrid>

      <ArticleListPaginationBar
        pageable={data.articles}
        params={searchParams}
      />
    </div>
  );
}
