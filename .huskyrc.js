module.exports = {
  hooks: {
    "pre-commit": "yarn lint:ci && yarn build",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS && node ./packages/cli/dist/cli.js $HUSKY_GIT_PARAMS",
  },
};
