import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../backend/src/main/resources/graphql/*.graphqls",
  documents: "src/**/*.{ts,tsx,graphql}",
  generates: {
    "./src/_generated-graphql-types.ts": {
      config: {
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations
        skipTypename: true,
        typesPrefix: "G_",
        printFieldsOnNewLines: true,
        scalars: {
          DateTime: "string",
        },
        inlineFragmentTypes: "combine",
        // extractAllFieldsToTypes: true,
        omitOperationSuffix: true,
        maybeValue: "T",
      },
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
