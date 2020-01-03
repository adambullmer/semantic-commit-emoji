import * as fs from "fs";
import processCommitMessage from "../index";

/**
 * Synchronously read in a string from the provided file, sends the contents
 * to the processor and writes back the resulting commit message.
 */
export default (filePath: string): void => {
  const commitString = fs.readFileSync(filePath, "utf8");
  const newCommitMessage = processCommitMessage(commitString);

  if (newCommitMessage === undefined) {
    return;
  }

  fs.writeFileSync(filePath, newCommitMessage);
};
