import { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  plugins: ["commitlint-plugin-semantic-commit-emoji"],
  parserPreset: "commitlint-plugin-semantic-commit-emoji/dist/parser",
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
