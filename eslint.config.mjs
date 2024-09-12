import { env } from "node:process";

import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"], ignores: ["dist/"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      "no-console": "off",
      "no-debugger": env.NODE_ENV === "production" ? "error" : "off",
    },
  },
  {
    files: ["**/*.spec.ts", "**/__mocks__/**/*.{j,t}s"],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
  },
];
