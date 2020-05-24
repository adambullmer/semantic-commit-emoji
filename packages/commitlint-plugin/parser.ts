import { ParserOptions } from "@commitlint/types";

const parserOpts: ParserOptions = {
  headerPattern: /^(?::([^:])+:\s*)?(\w*)(?:\((.*)\))?!?: (.*)$/,
  headerCorrespondence: ["emoji", "type", "scope", "subject"],
};

export default { parserOpts };
