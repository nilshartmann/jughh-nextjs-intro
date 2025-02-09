import { connection } from "next/server";

import { Dynamic01Document } from "@/_generated-graphql-types";
import DummyLinks from "@/components/DummyLinks";
import { query } from "@/graphql-client";

export default async function Home() {
  // const {} = await query({
  //   query: GetSingleStoryDocument,
  //   variables: {
  //     storyId: "S:1",
  //   },
  // });
  await connection();
  const { data } = await query({
    query: Dynamic01Document,
  });

  return (
    <div>
      <div>RESULT: {data.uuid}</div>
      <DummyLinks />
    </div>
  );
}
