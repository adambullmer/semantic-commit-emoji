import index from "./index";

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
  ])('"%s")', (input) => {
    expect(index(input)).toMatchSnapshot();
  });
});
