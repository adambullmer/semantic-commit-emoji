/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readDir = promisify(fs.readdir);
const getPackages = ({ cwd } = { cwd: process.cwd() }) => readDir(path.join(cwd, "packages"));

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
    "scope-enum": (context) => getPackages(context).then((packages) => [2, "always", packages]),
  },
};
