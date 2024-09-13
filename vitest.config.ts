import { defineConfig } from "vitest/config";

const reportsDirectory = "./artifacts/coverage";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      reporter: ["text", "html", "clover", "json"],
      reportsDirectory,
    },
    reporters: ["default", "junit", "json"],
    outputFile: {
      json: `${reportsDirectory}/unit-test-results.json`,
      junit: `${reportsDirectory}/unit-test-results.xml`,
    },
  },
});
