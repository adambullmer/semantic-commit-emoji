/**
 * Expected, known, and default list of semantici commit types. Not an exhaustive
 * list as extending this list may be possible with an external onfig file.
 */
export type CommitType =
  | "feat"
  | "fix"
  | "docs"
  | "refactor"
  | "style"
  | "test"
  | "perf"
  | "hotfix"
  | "locale"
  | "ci"
  | "chore"
  | "types";

/**
 * Expected, known, and github compatible emoji. Not an exhaustive list.
 */
export type Emoji =
  | "sparkles"
  | "bug"
  | "pencil"
  | "recycle"
  | "art"
  | "microscope"
  | "zap"
  | "ambulance"
  | "globe_with_meridians"
  | "construction_worker"
  | "wrench"
  | "label"
  | "bookmark"
  | "rewind"
  | "twisted_rightwards_arrows";

/**
 * Known list of semantic commit types mapped to emoji.
 */
export type BasicEmojiMap = {
  [key in CommitType]: Emoji;
};

/**
 * While the base set of emoji can be enumerated, with the possibility of
 * unknown commit types types and emoji types, this provides a safe fallback
 * for the base syntax.
 */
export type ExtendedEmojiMap = {
  [key: string]: Emoji | string | undefined;
};

/**
 * Combined type of known and unknown semmantic commit type to emoji maps.
 */
export type EmojiMap = BasicEmojiMap & ExtendedEmojiMap;

// Special automatic commit overrides
const versionEmoji = "bookmark";
const revertEmoji = "rewind";
const mergeEmoji = "twisted_rightwards_arrows";

// Semantic commit to emoji map
const typeEmojiMap: EmojiMap = {
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
 *
 * In order of priority, matches a versions message, a merge message, a revert message, and
 * finally falls back to semantic commit message syntax. If a match has been found, map the
 * detected semantic commit message type to an emoji and prepend it to the original message.
 * If a match was not found, return the original message.
 */
export default (commitString: string): string => {
  const [firstLine] = commitString.split("\n", 1);

  function updateMessage(emoji: Emoji | string): string {
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
