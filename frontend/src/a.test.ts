import { gql } from "@apollo/client";
import { expect, test } from "vitest";

import { query } from "@/app/graphql-client";

test("fasdfasd", () => {
  query({ query: gql`` });
  expect("huhu").toBe("huhu");
});
