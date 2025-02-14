import GridLayout from "@/components/layout/Grid";
import StoryCard from "@/components/StoryCard";
import { fetchStories } from "@/queries/queries";

export default async function Home() {
  const data = await fetchStories();

  return (
    <GridLayout>
      {data.stories.results.map((s) => {
        return <StoryCard key={s.id} story={s} />;
      })}
    </GridLayout>
  );
}
