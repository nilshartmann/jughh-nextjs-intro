import { GetStoriesDocument } from "@/_generated-graphql-types";
import StoryCard from "@/components/StoryCard";
import { query } from "@/graphql-client";

export default async function Home() {
  const { data } = await query({
    query: GetStoriesDocument,
  });

  return (
    <div className={"container mx-auto"}>
      <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.stories.results.map((s) => {
          return <StoryCard key={s.id} story={s} />;
        })}
      </div>
    </div>
  );
}
