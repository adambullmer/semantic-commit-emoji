/* eslint-disable @typescript-eslint/no-var-requires */
const parserPreset = require("commitlint-plugin-semantic-commit-emoji/dist/parser");

module.exports = {
  extends: "semantic-release-monorepo",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        parserOpts: parserPreset.default.parserOpts,
      },
    ],
    "@semantic-release/release-notes-generator",
  ],
};
