// eslint.config.js
import vue from "eslint-plugin-vue";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import parserVue from "vue-eslint-parser";
import parserTs from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.vue"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: parserVue,
      parserOptions: {
        parser: parserTs,
      },
    },
    plugins: {
      vue,
      "@typescript-eslint": typescriptEslint,
      prettier,
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "prettier/prettier": "error",
    },
  },
  {
    ignores: ["node_modules/", "dist/"],
  },
];
