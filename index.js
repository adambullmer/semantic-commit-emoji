const fs = require("fs");

const typeEmojiMap = {
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
const semanticEmojiRegex = new RegExp(`^(:[a-z]{3,}:)?(${allowedTypes.join("|")})!?:`, "gi");

module.exports = ([, , filePath]) => {
  const commitString = fs.readFileSync(filePath, "utf8");
  const [firstLine] = commitString.split("\n", 1);

  function updateMessage(emoji) {
    const newMessage = `:${emoji}:${commitString}`;
    fs.writeFileSync(filePath, newMessage);
  }

  const match = firstLine.match(semanticEmojiRegex);
  if (match === null) {
    return;
  }

  const [, , hasEmoji, commitType] = match;
  if (hasEmoji !== undefined) {
    return;
  }

  updateMessage(typeEmojiMap[commitType]);
};
