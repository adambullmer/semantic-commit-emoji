import { type UserConfig } from "@commitlint/types";
import { parserPreset } from "commitlint-plugin-semantic-commit-emoji/parser";

const config: UserConfig = {
  plugins: ["commitlint-plugin-semantic-commit-emoji"],
  parserPreset,
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "refactor",
        "style",
        "test",
        "perf",
        "hotfix",
        "locale",
        "ci",
        "chore",
        "types",
        "revert",
        "merge",
      ],
    ],
  },
};

export default config;
