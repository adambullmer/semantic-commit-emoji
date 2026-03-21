# Conventional Commits Specification

The Conventional Commits specification provides a lightweight convention on top of commit messages. It establishes a set of rules for creating an explicit commit history. The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Structure Elements

### `<type>` (Required)
The commit type indicates the primary intent of the change. Common types include:
- `feat`: A new feature for the user.
- `fix`: A bug fix for the user.
- `docs`: Documentation changes only.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `ci`: Changes to our CI configuration files and scripts.
- `chore`: Other changes that don't modify `src` or `test` files.

### `[optional scope]`
An optional scope may be provided to specify the area of the codebase the commit affects. It must consist of a noun describing a section of the codebase and be enclosed in parenthesis, e.g., `feat(parser): add ability to parse arrays`.

### `<description>` (Required)
A short summary of the code changes.
- Start with a lowercase letter (if appropriate, or follow the style guide).
- Do not capitalize the first letter unless it is a proper noun.
- Use the imperative, present tense: "change" not "changed" nor "changes".
- Do not add a period `.` at the end.

### `[optional body]`
The body should include the motivation for the change and contrast this with previous behavior. It is optional but recommended for significant changes.

### `[optional footer(s)]`
The footer should contain any information about Breaking Changes and reference issues that this commit closes. Breaking changes should be indicated by a `BREAKING CHANGE:` footer or an `!` after the type/scope.

## Breaking Changes
A commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with `MAJOR` in Semantic Versioning). A `BREAKING CHANGE` can be part of commits of any type.
