#!/usr/bin/env node

/**
 * Entrypoint for processing command line execution. Process CLI arguments
 * and call the correct processor.
 */
import processFile from "./lib/process-file";

const [, , filePath] = process.argv;

processFile(filePath);
