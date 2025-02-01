import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../backend/src/main/resources/graphql/*.graphqls",
  documents: ["app/**/*.{ts,tsx,graphql}"],
  generates: {
    "./app/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
      },
      config: {
        namingConvention: {
          enumValues: "keep",
          transformUnderscore: true,
        },
        scalars: {
          Date: "string",
        },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
