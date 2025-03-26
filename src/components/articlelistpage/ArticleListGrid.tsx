import { G_BaseArticleFragment } from "@/_generated-graphql-types";
import ArticleCard from "@/components/ArticleCard";

type ArticleListGridProps = {
  articles: Array<G_BaseArticleFragment>;
};

export default function ArticleListGrid({ articles }: ArticleListGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => {
        return <ArticleCard key={a.id} article={a} />;
      })}
    </div>
  );
}
