module.exports = {
  extends: "semantic-release-monorepo",
  branches: ["master", { name: "semantic-release", prerelease: true }],
};
