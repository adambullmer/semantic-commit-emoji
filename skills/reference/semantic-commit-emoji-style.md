# semantic-commit-emoji Style Rules

The `semantic-commit-emoji` package enforces the use of specific emojis mapped to Conventional Commit types. When creating a commit message, the appropriate emoji must prefix the commit `<type>`.

This allows for plain text representations of a commit's type with visual indicators in platforms that support emojis.

## Supported Semantic Types

Below is the required mapping of commit types to emojis. You must use one of these types for all commits.

| Type     | Emoji | Use Case                                                              |
| -------- | ----- | --------------------------------------------------------------------- |
| feat     | ✨ `:sparkles:` | A new feature for the user or API consumer.                           |
| fix      | 🐛 `:bug:`      | A bug fix for the user or API consumer.                               |
| docs     | 📝 `:pencil:`   | Changes to the documentation.                                         |
| refactor | ♻️ `:recycle:`  | A code change that neither fixes a bug nor adds a feature.            |
| style    | 🎨 `:art:`      | Changes that do not affect the meaning of the code (formatting, etc). |
| test     | 🔬 `:microscope:` | Adding missing tests or correcting existing tests.                    |
| perf     | ⚡️ `:zap:`      | A code change that improves performance.                              |
| hotfix   | 🚑 `:ambulance:`| Critical bug fix directly to production.                              |
| locale   | 🌐 `:globe_with_meridians:` | Localization and internationalization updates.                        |
| ci       | 👷 `:construction_worker:` | Changes to CI configuration files and scripts.                        |
| chore    | 🔧 `:wrench:`   | Other changes that don't modify `src` or `test` files.                |
| types    | 🏷️ `:label:`    | Type definitions (e.g., TypeScript or Flow updates).                  |

## Guidelines

1. **Automatic Prefixing**: The tool will automatically prepend the emoji if the commit message starts with one of the supported types (e.g., `feat: Add new function` becomes `:sparkles:feat: Add new function`).
2. **Explicit Emojis**: You can explicitly include the emoji yourself in the commit message. If an emoji is already present at the start of the message, the tool will respect it and allow you to override the default mapping. This is particularly useful for generic types like `chore` where you might want a more specific emoji.
3. **Consistency**: Use these emojis exclusively for the corresponding commit types to maintain a clean and consistent project history.
4. **Non-Semantic Commits**: Messages that do not follow a recognized semantic commit pattern will not be prepended with an emoji by the tool. Stick to semantic formatting.

## Finer Body/Footer Concerns

- **Subject Casing**: The subject (short description) should ideally start with an uppercase letter, following standard sentence casing rules unless it refers to a specific code entity that requires lowercase.
- **Body Motivation**: When providing a body, focus on *why* the change was made and *how* it differs from previous behavior, rather than simply reiterating the technical details of the diff.
- **Reference Issues**: Footers must be used to link to any issue tracking system tickets (e.g., `Closes #123`, `Fixes JIRA-456`).
- **Breaking Changes**: As per standard Conventional Commits, any breaking change must include `BREAKING CHANGE:` in the footer.
