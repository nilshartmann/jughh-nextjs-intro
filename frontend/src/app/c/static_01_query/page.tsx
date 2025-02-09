import { Static01Document } from "@/_generated-graphql-types";
import DummyLinks from "@/components/DummyLinks";
import { query } from "@/graphql-client";

export default async function Home() {
  // const {} = await query({
  //   query: GetSingleStoryDocument,
  //   variables: {
  //     storyId: "S:1",
  //   },
  // });

  const { data } = await query({
    query: Static01Document,
  });

  return (
    <div>
      <div>RESULT: {data.uuid}</div>
      <DummyLinks />
    </div>
  );
}
