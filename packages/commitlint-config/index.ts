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

// Destructure to mimic behavior of module.exports
export const plugins = config.plugins;
export const parserPreset = config.parserPreset;
export const rules = config.rules;
