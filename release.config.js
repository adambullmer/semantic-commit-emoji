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
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        parserOpts: parserPreset.default.parserOpts,
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
