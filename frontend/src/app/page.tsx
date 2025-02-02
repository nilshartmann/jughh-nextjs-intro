import { query } from "@/app/graphql-client";
import { GetStoriesDocument } from "@/_generated-graphql-types";
import Link from "next/link";
import { H1 } from "@/components/Heading";
import { BaseStory } from "@/types";
import { LikesWidget } from "@/components/LikesWidget";
import { formatDate } from "@/components/format-date";
import Breaking from "@/components/Breaking";
import { NewsletterRegistration } from "@/components/NewsletterRegistration";

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
      <header
        className={
          "mb-8 flex h-20 items-center bg-teal-700 text-2xl text-sky-50"
        }
      >
        <div className={"mx-auto w-full max-w-screen-lg"}>
          <div className={"flex items-center justify-between px-4 font-bold"}>
            <div className={"font-space text-4xl font-bold"}>news.ly</div>

            {/*<div className={"w-64 rounded bg-green-200 px-4 py-2"}>*/}
            {/*  <Breaking>Lorem ipsum dolor</Breaking>*/}
            {/*</div>*/}
          </div>
        </div>
      </header>
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

type StoryCardProps = {
  story: BaseStory;
};
function StoryCard({ story }: StoryCardProps) {
  return (
    <div
      className={
        "flex h-full flex-col justify-between space-y-4 rounded border border-gray-200 bg-white p-4 shadow-lg"
      }
    >
      <div className={"flex flex-col space-y-4"}>
        {story.image && (
          <div>
            <Link prefetch={false} href={`/stories/${story.id}`}>
              <div className={"overflow-hidden"}>
                <img
                  className="h-32 max-h-full w-full max-w-full transform border-b-4 border-b-rose-700 object-cover transition-all duration-500 ease-in-out hover:scale-110"
                  src={story.image.uri}
                  alt={story.title}
                />
              </div>
            </Link>
          </div>
        )}
        <div className={"flex items-center justify-between"}>
          <div className={"font-bold leading-3 text-teal-700"}>
            {story.category}
          </div>
          <div className={"leading-3 text-teal-700"}>
            {formatDate(story.date)}{" "}
          </div>
        </div>
        <H1 className={"font-opensans font-bold text-teal-700"}>
          <Link
            prefetch={true}
            href={`/stories/${story.id}`}
            className={"hover:text-teal-800 hover:underline"}
          >
            {story.title}
          </Link>
        </H1>
        <div className={"text font-inter"}>{story.excerpt}</div>
        {/*<div className={"mt-4 space-y-2"}>*/}
        {/*  <RecipeCategories recipe={recipe} />*/}
        {/*</div>*/}
      </div>
      <div className={"flex flex-col space-y-4"}>
        <LikesWidget story={story} />
      </div>
    </div>
  );
}
