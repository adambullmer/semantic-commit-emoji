// Special automatic commit overrides
const versionEmoji = "bookmark";
const revertEmoji = "rewind";
const mergeEmoji = "twisted_rightwards_arrows";

// Semantic commit to emoji map
const typeEmojiMap: { [key: string]: string | undefined } = {
  feat: "sparkles",
  fix: "bug",
  docs: "pencil",
  refactor: "recycle",
  style: "art",
  test: "microscope",
  perf: "zap",
  hotfix: "ambulance",
  locale: "globe_with_meridians",
  ci: "construction_worker",
  chore: "wrench",
  types: "label",
};
const allowedTypes = Object.keys(typeEmojiMap);
const versionRegex = new RegExp(
  /^v?([0-9]+).([0-9]+).([0-9]+)(?:-([0-9a-z-]+(?:.[0-9a-z-]+)*))?(?:\+[0-9a-z-]+)?$/,
  "gi",
);
const revertRegex = new RegExp(/^revert(: | ")/, "gi");
const mergeRegex = new RegExp(/^merge /, "gi");
const semanticEmojiRegex = new RegExp(`^(:[a-z]{3,}:)?(${allowedTypes.join("|")})!?:`, "i");

/**
 * Prepends a corresponding emoji to a commit message and return the result.
 */
export default (commitString: string): string => {
  const [firstLine] = commitString.split("\n", 1);

  function updateMessage(emoji: string): string {
    return `:${emoji}:${commitString}`;
  }

  const versionMatch = firstLine.match(versionRegex);
  if (versionMatch !== null) {
    return updateMessage(versionEmoji);
  }

  const mergeMatach = firstLine.match(mergeRegex);
  if (mergeMatach !== null) {
    return updateMessage(mergeEmoji);
  }

  const revertMatach = firstLine.match(revertRegex);
  if (revertMatach !== null) {
    return updateMessage(revertEmoji);
  }

  const match = firstLine.match(semanticEmojiRegex);
  if (match === null) {
    return commitString;
  }

  const [, hasEmoji, commitType] = match;
  if (hasEmoji !== undefined) {
    return commitString;
  }

  const emoji = typeEmojiMap[commitType];
  if (emoji === undefined) {
    return commitString;
  }

  return updateMessage(emoji);
};
