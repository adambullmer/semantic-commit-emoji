import { type ParserPreset } from "@commitlint/types";

export const parserPreset: ParserPreset = {
  name: "semantic-commit-emoji",
  parserOpts: {
    headerPattern: /^(?::([^:])+:\s*)?(\w*)(?:\((.*)\))?!?: (.*)$/,
    headerCorrespondence: ["emoji", "type", "scope", "subject"],
    commentChar: "#",
    issuePrefixes: [],
    mergePattern:
      /^(?::([^:])+:\s*)?Merge(?: (?:pull request #([^\d]+))? (?:from|branch) '?([^\s']+)'?(?: (?:in|into) ('?[^\s']+'?))?(?:\r?\n))*$/,
    mergeCorrespondence: ["emoji", "pr", "head", "upstream"],
    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
    revertPattern: /^(?::([^:])+:\s*)?[Rr]evert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
    revertCorrespondence: ["emoji", "header", "hash"],
  },
};
