# semantic-commit-emoji Style Rules

The `semantic-commit-emoji` package enforces the use of specific emojis mapped to Conventional Commit types. When creating a commit message, the appropriate emoji must prefix the commit `<type>`.

This allows for plain text representations of a commit's type with visual indicators in platforms that support emojis.

## Supported Semantic Types

Below is the required mapping of commit types to emojis.

| Type     | Emoji                   | Syntax                  |
| -------- | ----------------------- | ----------------------- |
| feat     | :sparkles:              | `:sparkles:`            |
| fix      | :bug:                   | `:bug:`                 |
| docs     | :pencil:                | `:pencil:`              |
| refactor | :recycle:               | `:recycle:`             |
| style    | :art:                   | `:art:`                 |
| test     | :microscope:            | `:microscope:`          |
| perf     | :zap:                   | `:zap:`                 |
| hotfix   | :ambulance:             | `:ambulance:`           |
| locale   | :globe_with_meridians:  | `:globe_with_meridians:`|
| ci       | :construction_worker:   | `:construction_worker:` |
| chore    | :wrench:                | `:wrench:`              |
| types    | :label:                 | `:label:`               |

## Guidelines

1. **Automatic Prefixing**: The tool will automatically prepend the emoji if the commit message starts with one of the supported types (e.g., `feat: Add new function` becomes `:sparkles:feat: Add new function`).
2. **Explicit Emojis**: You can explicitly include the emoji yourself in the commit message. If an emoji is already present at the start of the message, the tool will respect it and allow you to override the default mapping. This is particularly useful for generic types like `chore` where you might want a more specific emoji.
3. **Consistency**: Use these emojis exclusively for the corresponding commit types to maintain a clean and consistent project history.
4. **Non-Semantic Commits**: Messages that do not follow a recognized semantic commit pattern will not be prepended with an emoji by the tool. Stick to semantic formatting.
