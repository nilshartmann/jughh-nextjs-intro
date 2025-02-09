import { Static02Document } from "@/_generated-graphql-types";
import DummyLinks from "@/components/DummyLinks";
import { query } from "@/graphql-client";

export default async function Home() {
  // const {} = await query({
  //   query: GetSingleStoryDocument,
  //   variables: {
  //     storyId: "S:1",
  //   },
  // });
  // await connection();
  const { data } = await query({
    query: Static02Document,
  });

  return (
    <div>
      <div>RESULT: {data.uuid}</div>
      <DummyLinks />
    </div>
  );
}
