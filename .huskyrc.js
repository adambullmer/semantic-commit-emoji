module.exports = {
  hooks: {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS && yarn node ./packages/cli/dist/cli.js $HUSKY_GIT_PARAMS",
  },
};
