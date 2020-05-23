module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "./parser",
  rules: {
    "subject-case": [2, "always", "sentence-case"],
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
