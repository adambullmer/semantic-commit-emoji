# Conventional Commits Specification

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Structure Elements

### `<type>` (Required)
The commit type dictates how the commit should be interpreted. The specification defines two core types:
- `feat`: Commits, that adds a new feature to the user/consumer of the codebase. This correlates with `MINOR` in Semantic Versioning.
- `fix`: Commits, that fixes a bug for the user/consumer of the codebase. This correlates with `PATCH` in Semantic Versioning.

Other types (such as `docs`, `style`, `refactor`, etc.) are allowed by the specification, but they are not mandated. They are used to communicate intent but do not inherently trigger version bumps unless a breaking change is introduced.

### `[optional scope]`
A scope may be provided to specify the area of the codebase the commit affects. It must consist of a noun describing a section of the codebase and be enclosed in parenthesis, e.g., `feat(parser): add ability to parse arrays`.

### `<description>` (Required)
A short summary of the code changes.

### `[optional body]`
A longer commit body may be provided after the short description, providing additional contextual information about the code changes. The body must begin one blank line after the description.

### `[optional footer(s)]`
One or more footers may be provided one blank line after the body. Each footer must consist of a word token, followed by either a `:<space>` or `<space>#` separator, followed by a string value (this is inspired by the git trailer convention).

## Breaking Changes
A commit that introduces a breaking API change (correlating with `MAJOR` in Semantic Versioning) must be indicated by one of two methods:
1.  **Footer**: A footer starting with the text `BREAKING CHANGE: ` followed by a description of the breaking change.
2.  **Exclamation Mark**: Appending a `!` immediately after the `type`/`scope` and before the `:` in the description (e.g., `feat(api)!: remove deprecated method`).

A `BREAKING CHANGE` can be part of commits of any type.
