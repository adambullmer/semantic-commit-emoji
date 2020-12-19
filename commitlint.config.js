/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readDir = promisify(fs.readdir);
const getPackages = ({ cwd } = { cwd: process.cwd() }) => readDir(path.join(cwd, "packages"));

module.exports = {
  extends: ["@commitlint/config-conventional", "semantic-commit-emoji"],
  rules: {
    "subject-case": [2, "always", "sentence-case"],
    "scope-enum": (context) => getPackages(context).then((packages) => [2, "always", packages]),
    "body-max-line-length": [2, "always", Infinity],
    "footer-max-line-length": [2, "always", Infinity],
  },
};
