import { GetStoriesDocument } from "@/_generated-graphql-types";
import { query } from "@/app/graphql-client";
import GlobalHeader from "@/components/layout/GlobalHeader";
import { NewsletterRegistration } from "@/components/NewsletterRegistration";
import StoryCard from "@/components/StoryCard";

export default async function Home() {
  // const {} = await query({
  //   query: GetSingleStoryDocument,
  //   variables: {
  //     storyId: "S:1",
  //   },
  // });

  const { data } = await query({
    query: GetStoriesDocument,
  });

  const f = data.stories.results.map((r) => r.title);

  return (
    <div className={"font-inter flex min-h-svh flex-col text-teal-900"}>
      <div
        className={
          "mx-auto flex w-full max-w-screen-lg items-center justify-end"
        }
      >
        <NewsletterRegistration />
      </div>
      <GlobalHeader />
      <div className={"container mx-auto"}>
        <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.stories.results.map((s) => {
            return <StoryCard key={s.id} story={s} />;
          })}
        </div>
      </div>
    </div>
  );
}
