import { ParserOptions } from "@commitlint/types";

export const parserOpts: ParserOptions = {
  headerPattern: /^(?::([^:])+:\s*)?(\w*)(?:\((.*)\))?!?: (.*)$/,
  headerCorrespondence: ["emoji", "type", "scope", "subject"],
};
