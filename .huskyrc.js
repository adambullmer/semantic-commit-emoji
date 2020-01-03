module.exports = {
  hooks: {
    "pre-commit": "yarn lint:ci",
    "commit-msg": "npx semantic-commit-emoji $HUSKY_GIT_PARAMS",
  },
};
