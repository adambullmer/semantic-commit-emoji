# commitlint-plugin-semantic-commit-emoji

Commitlint plugin for extra rules and compatible parsing for semantic-commit-emoji.

## Installation

It is recommended that you configure commitlint with commitlint-config-semantic-commit-emoji instead.
However, if you needed to use the parser manually for semantic-release or any conventional-changelog compatible parsing you can use the following:

```sh
yarn add --dev commitlint-plugin-semantic-commit-emoji
```

```js
const { parserOpts } = require("commitlint-plugin-semantic-commit-emoji/dist/parser");
const preset = "conventionalcommits";

module.exports = {
  plugins: [["@semantic-release/commit-analyzer", { preset, parserOpts }]],
};
```
