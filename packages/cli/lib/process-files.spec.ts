import * as fs from "node:fs";

import { describe, it, expect, beforeEach, afterEach, vi, type MockInstance } from "vitest";
import { Config } from "semantic-commit-emoji-config";

import processFile from "./process-file.js";

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

const fileName = "/path/to/file";
const fileName2 = "/path/to/another/file";
const fileContents = "feat: A semantic commit";
const fileContents2 = "a plain ol commit";
const emojiPrefix = ":foo:";
const fileMap: { [key: string]: string | undefined } = {
  [fileName]: fileContents,
  [fileName2]: fileContents2,
};
const formatMap: { [key: string]: string | undefined } = {
  [fileContents]: emojiPrefix + fileContents,
};
vi.mock("fs");
vi.mock("../index", () => {
  return {
    default: (_: Config, input: string): string | undefined => formatMap[input],
  };
});

describe("process-files.ts", () => {
  let readSpy: MockInstance;
  let writeSpy: MockInstance;

  beforeEach(() => {
    readSpy = vi.spyOn(fs, "readFileSync").mockImplementation((filePath) => {
      const contents = fileMap[filePath.toString()];
      if (contents === undefined) {
        throw new Error("Mock file not found");
      }
      return contents;
    });
    writeSpy = vi.spyOn(fs, "writeFileSync");
  });

  afterEach(() => {
    readSpy.mockReset();
    writeSpy.mockReset();
  });

  it("reads from the right file", () => {
    processFile(config, fileName);
    expect(readSpy).toHaveBeenCalledWith(fileName, "utf8");
  });

  it("writes to the right file, with the right content", () => {
    processFile(config, fileName);
    expect(writeSpy).toHaveBeenCalled();
    expect(writeSpy).toHaveBeenCalledWith(fileName, emojiPrefix + fileContents);
  });

  it("Doesn't write when the processor returns undefined", () => {
    processFile(config, fileName2);
    expect(writeSpy).not.toHaveBeenCalled();
  });
});
