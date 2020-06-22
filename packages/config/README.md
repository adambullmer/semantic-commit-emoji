# semantic-commit-emoji-config

This library powers the configuration loading for semantic-commit-emoji.

## Config files

This library will parse up the directory tree to attempt to find any of the following filenames:

- `package.json` with a `semantic-commit-emoji` key
- `.semantic-commit-emojirc`
- `.semantic-commit-emojirc.json`
- `.semantic-commit-emojirc.yaml`
- `.semantic-commit-emojirc.yml`
- `.semantic-commit-emojirc.ts`
- `.semantic-commit-emojirc.js`
- `semantic-commit-emoji.config.ts`
- `semantic-commit-emoji.config.js`

## Config Values

| Option                       | Default                       | Description                                                                                                             |
| ---------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `withSpace`                  | `false`                       | If `true`, includes a space between the emoji and the commit type                                                       |
| `automaticTypes`             |                               | A map of specific automatic commit actions and the emoji to prepend. Overriding will merge with the defaults.           |
| `automaticTypes.fixup`       | `""`                          |                                                                                                                         |
| `automaticTypes.merge`       | `"twisted_rightwards_arrows"` | :twisted_rightwards_arrows:                                                                                             |
| `automaticTypes.revert`      | `"rewind"`                    | :rewind:                                                                                                                |
| `automaticTypes.version`     | `"bookmark"`                  | :bookmark:                                                                                                              |
| `conventionalTypes`          |                               | A map of semantic commit types, and the corresponding emoji to prepend. Overriding **will not** merge with the defaults |
| `conventionalTypes.feat`     | `"sparkles"`                  | :sparkles:                                                                                                              |
| `conventionalTypes.fix`      | `"bug"`                       | :bug:                                                                                                                   |
| `conventionalTypes.docs`     | `"pencil"`                    | :pencil:                                                                                                                |
| `conventionalTypes.refactor` | `"recycle"`                   | :recycle:                                                                                                               |
| `conventionalTypes.style`    | `"art"`                       | :art:                                                                                                                   |
| `conventionalTypes.test`     | `"microscope"`                | :microscope:                                                                                                            |
| `conventionalTypes.perf`     | `"zap"`                       | :zap:                                                                                                                   |
| `conventionalTypes.hotfix`   | `"ambulance"`                 | :ambulance:                                                                                                             |
| `conventionalTypes.locale`   | `"globe_with_meridians"`      | :globe_with_meridians:                                                                                                  |
| `conventionalTypes.ci`       | `"construction_worker"`       | :construction_worker:                                                                                                   |
| `conventionalTypes.chore`    | `"wrench"`                    | :wrench:                                                                                                                |
| `conventionalTypes.types`    | `"label"`                     | :label:                                                                                                                 |
