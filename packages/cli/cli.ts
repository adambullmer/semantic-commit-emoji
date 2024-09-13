#!/usr/bin/env node

/**
 * Entrypoint for processing command line execution. Process CLI arguments
 * and call the correct processor.
 */
import processFile from "./lib/process-file.js";
import loadConfig from "semantic-commit-emoji-config";

const [, , filePath] = process.argv;

loadConfig().then((config) => {
  processFile(config, filePath);
});
