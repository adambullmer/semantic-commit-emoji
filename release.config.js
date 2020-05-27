/* eslint-disable @typescript-eslint/no-var-requires */
const { parserOpts } = require("commitlint-plugin-semantic-commit-emoji/dist/parser");
const preset = "conventionalcommits";

module.exports = {
  extends: "semantic-release-monorepo",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset,
        parserOpts,
        releaseRules: [
          { type: "types", scope: "*", release: "minor" },
          { type: "refactor", release: "minor" },
          { type: "style", release: "patch" },
          { type: "hotfix", release: "patch" },
          { type: "locale", release: "patch" },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset,
        parserOpts,
      },
    ],
    [
      "@semantic-release/npm",
      {
        // Requires OTP code. Running in subsequent step with interactive prompt
        npmPublish: false,
        tarballDir: "artifacts/package",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
        message: ":wrench:chore: Release v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    [
      "@semantic-release/github",
      {
        failComment: false,
        failTitle: false,
        labels: false,
        assets: "artifacts/package/*.tgz",
      },
    ],
  ],
};
