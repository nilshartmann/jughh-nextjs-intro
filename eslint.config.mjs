import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// During the workshop this can be set to "false" in order to not
// get annoying messages due to import statements in wrong order
const enableImportRules = true;

const importRules = enableImportRules
  ? {
      "unused-imports/no-unused-imports": "error",
      "simple-import-sort/imports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    }
  : {};

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    plugins: ["unused-imports", "simple-import-sort", "import"],
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-css-tags": "off",
      "jsx-a11y/alt-text": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-types": "off",
      "prefer-const": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      ...importRules,
    },
  }),
  { ignores: ["*/_generated*"] },
];

export default eslintConfig;
