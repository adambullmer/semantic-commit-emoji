import * as fs from "fs";

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
const semanticEmojiRegex = new RegExp(`^(:[a-z]{3,}:)?(${allowedTypes.join("|")})!?:`, "i");

export default ([, , filePath]: typeof process.argv): void => {
  const commitString = fs.readFileSync(filePath, "utf8");
  const [firstLine] = commitString.split("\n", 1);

  function updateMessage(emoji: string): void {
    const newMessage = `:${emoji}:${commitString}`;
    fs.writeFileSync(filePath, newMessage);
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
