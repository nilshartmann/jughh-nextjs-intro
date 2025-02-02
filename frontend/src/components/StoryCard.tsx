import Link from "next/link";

import { formatDate } from "@/components/format-date";
import { formatDuration } from "@/components/format-duration";
import { H1 } from "@/components/Heading";
import { LikesWidget } from "@/components/LikesWidget";
import { BaseStory } from "@/types";

type StoryCardProps = {
  story: BaseStory;
};
export default function StoryCard({ story }: StoryCardProps) {
  return (
    <div
      className={
        "flex h-full flex-col space-y-4 rounded-lg border border-slate-200 bg-white drop-shadow-sm"
      }
    >
      {story.image && (
        <div className={"border-b-4 border-b-rose-700 hover:border-b-teal-800"}>
          <Link prefetch={false} href={`/stories/${story.id}`}>
            <div className={"overflow-hidden"}>
              <img
                className="h-32 max-h-full w-full max-w-full transform rounded-t-lg object-cover transition-all duration-500 ease-in-out hover:scale-110"
                src={story.image.uri}
                alt={story.title}
              />
            </div>
          </Link>
        </div>
      )}
      <div
        className={"flex h-full flex-col justify-between space-y-4 px-4 pb-4"}
      >
        <div className={"flex flex-col space-y-4"}>
          <div className={"tracking-wide text-teal-700"}>{story.category}</div>
          <H1 className={"font-opensans font-bold text-teal-700"}>
            <Link
              prefetch={true}
              href={`/stories/${story.id}`}
              className={
                "hover:text-teal-800 hover:underline hover:decoration-4"
              }
            >
              {story.title}
            </Link>
          </H1>
          <div className={"text font-inter"}>
            <span className={"leading-3"}>{formatDate(story.date)} </span>
            {" | "}
            {story.excerpt}
          </div>
        </div>
        <div className={"flex flex-col"}>
          <div className={"flex items-center justify-between"}>
            <div
              className={
                "rounded border border-slate-200 bg-slate-50 px-2 py-1 tracking-wide text-teal-700"
              }
            >
              {formatDuration((story.wordCount / 100) * 60)}
            </div>
            <LikesWidget story={story} />
          </div>
        </div>
      </div>
    </div>
  );
}
