import { Config } from "semantic-commit-emoji-config/types";

// Special automatic commit overrides
const versionRegex = new RegExp(
  /^v?([0-9]+).([0-9]+).([0-9]+)(?:-([0-9a-z-]+(?:.[0-9a-z-]+)*))?(?:\+[0-9a-z-]+)?$/,
  "gi",
);
const revertRegex = new RegExp(/^revert(: | ")/, "gi");
const mergeRegex = new RegExp(/^merge /, "gi");
const fixupRegex = new RegExp(/^fixup! /, "gi");

/**
 * Prepends a corresponding emoji to a commit message and return the result.
 *
 * In order of priority, matches a versions message, a merge message, a revert message, and
 * finally falls back to semantic commit message syntax. If a match has been found, map the
 * detected semantic commit message type to an emoji and prepend it to the original message.
 * If a match was not found, return the original message.
 */
export default (config: Config, commitString: string): string => {
  const allowedTypes = Object.keys(config.conventionalTypes);
  const optionalSpace = config.withSpace ? " " : "";

  const semanticEmojiRegex = new RegExp(`^(:[a-z]{3,}:)?(${allowedTypes.join("|")})(\\([^)]+\\))?!?:`, "i");
  const [firstLine] = commitString.split("\n", 1);

  function updateMessage(emoji: string): string {
    return `:${emoji}:${optionalSpace}${commitString}`;
  }

  const versionMatch = firstLine.match(versionRegex);
  if (versionMatch !== null) {
    return updateMessage(config.automaticTypes.version);
  }

  const mergeMatach = firstLine.match(mergeRegex);
  if (mergeMatach !== null) {
    return updateMessage(config.automaticTypes.merge);
  }

  const revertMatach = firstLine.match(revertRegex);
  if (revertMatach !== null) {
    return updateMessage(config.automaticTypes.revert);
  }

  const fixupMatach = firstLine.match(fixupRegex);
  if (fixupMatach !== null) {
    return updateMessage(config.automaticTypes.fixup);
  }

  const match = firstLine.match(semanticEmojiRegex);
  if (match === null) {
    return commitString;
  }

  const [, hasEmoji, commitType] = match;
  if (hasEmoji !== undefined) {
    return commitString;
  }

  const emoji = config.conventionalTypes[commitType];
  if (emoji === undefined) {
    return commitString;
  }

  return updateMessage(emoji);
};
