import * as fs from "fs";

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

export default ([, , filePath]: typeof process.argv): void => {
  const commitString = fs.readFileSync(filePath, "utf8");
  const [firstLine] = commitString.split("\n", 1);

  function updateMessage(emoji: string): void {
    const newMessage = `:${emoji}:${commitString}`;
    fs.writeFileSync(filePath, newMessage);
  }

  const versionMatch = firstLine.match(versionRegex);
  if (versionMatch !== null) {
    updateMessage(versionEmoji);
    return;
  }

  const mergeMatach = firstLine.match(mergeRegex);
  if (mergeMatach !== null) {
    updateMessage(mergeEmoji);
    return;
  }

  const revertMatach = firstLine.match(revertRegex);
  if (revertMatach !== null) {
    updateMessage(revertEmoji);
    return;
  }

  const match = firstLine.match(semanticEmojiRegex);
  if (match === null) {
    return;
  }

  const [, hasEmoji, commitType] = match;
  if (hasEmoji !== undefined) {
    return;
  }

  const emoji = typeEmojiMap[commitType];
  if (emoji === undefined) {
    return;
  }

  updateMessage(emoji);
};
