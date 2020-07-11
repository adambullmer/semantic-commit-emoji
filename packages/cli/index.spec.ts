/// <reference types="@types/jest" />
import index from "./index";
import { Config } from "semantic-commit-emoji-config";

const config: Config = {
  withSpace: false,
  automaticTypes: {
    fixup: "",
    revert: "rewind",
    merge: "twisted_rightwards_arrows",
    version: "bookmark",
  },
  conventionalTypes: {
    feat: "sparkles",
    fix: "bug",
    chore: "wrench",
  },
};

describe("Semantic Commit Emoji Processor", () => {
  it.each([
    ["a normal commit message"],
    ["fix: A commit with a semantic type"],
    [":wrench:chore: A commit with an existing emoji"],
    ["feat!: A commit with a breaking change notation"],
    [
      `feat: A multiline commit

A summary about the commit in detail

Resolves #2`,
    ],
    ["v1.2.3"],
    ["Merge pull request #1"],
    ["Revert: Merge pull request #1"],
    ["fixup! :bug:fix: A commit with a semantic type"],
    ["build: An unsupported commit type"],
  ])('"%s")', (input) => {
    expect(index(config, input)).toMatchSnapshot();
  });
});
