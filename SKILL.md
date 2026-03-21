# semantic-commit-emoji

This skill provides guidelines and style rules for authoring commit messages using the `semantic-commit-emoji` convention.
This convention builds upon the original Conventional Commits specification by automatically prefixing a corresponding emoji based on the semantic commit type.

## Reference Conditions

As an AI agent, you should read and refer to the following extended documents based on these specific conditions:

- **[Conventional Commits Spec](./skills/reference/conventional-commits.md)**
  - Read this if you are unfamiliar with the foundational structure of a conventional commit (e.g., `<type>[optional scope]: <description>`).
  - Read this if you need to understand how to correctly format a `BREAKING CHANGE` footer or body.

- **[semantic-commit-emoji Style Rules](./skills/reference/semantic-commit-emoji-style.md)**
  - Read this **every time** you are preparing to write a commit message to ensure you select the correct commit `<type>` and corresponding emoji.
  - Read this if you need guidance on subject casing, motivation bodies, or issue referencing specific to this project's style.

- **[Staging and Splitting Commits](./skills/reference/staging-and-splitting.md)**
  - Read this if you have modified multiple files or made multiple distinct types of changes (e.g., a bug fix and a refactor) and need to create atomic commits.
  - Read this if you need to understand the deterministic order for staging commits.
  - Read this if you need to split changes within a single file using `git add -p`.
