module.exports = {
  coverageDirectory: "../../artifacts/coverage",
  testPathIgnorePatterns: ["/node-modules/", "/dist/"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "../../artifacts",
        outputName: "test-results.xml",
      },
    ],
  ],
};
