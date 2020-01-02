module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};