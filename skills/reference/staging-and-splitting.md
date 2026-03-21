# Staging and Splitting Commits

This guide provides instructions on how to structure your work into atomic commits. An atomic commit is a single, complete unit of work that serves one specific purpose. Atomic commits make it easier to review code, bisect bugs, and revert changes when necessary.

## General Principles

1. **One Purpose per Commit**: A commit should only address one logical change (e.g., a feature, a bug fix, a refactoring, or a documentation update).
2. **Complete Unit**: The commit must leave the codebase in a working state. It should not break tests or introduce compilation errors.
3. **Descriptive Messages**: Follow the semantic commit guidelines to clearly explain the intent behind the change.

## Deterministic Staging Order

When preparing commits, stage and commit changes in the following deterministic order. This ensures foundational changes are committed before the features or fixes that depend on them:

1.  **`chore` / `ci` / `types`**: Foundation, configuration, and build-related changes.
2.  **`style`**: Code formatting and style changes.
3.  **`refactor`**: Code restructuring without changing behavior.
4.  **`perf`**: Performance improvements.
5.  **`fix` / `hotfix`**: Bug fixes.
6.  **`feat`**: New features.
7.  **`test`**: Tests (if committed separately from features/fixes, though it's often preferred to keep tests with the changes they verify).
8.  **`docs` / `locale`**: Documentation and localization updates.

## Handling Multiple Changes in a Single File

If you have made several unrelated changes within the same file (e.g., you added a new feature and fixed a typo in the documentation in the same file), you must split these into separate commits.

### Using `git add -p` (Patch Staging)

The most effective way to split changes in a single file is using the interactive patch mode in Git:

```bash
git add -p <filename>
```

Git will present you with hunks (blocks of changes) one by one and ask what to do:

-   `y`: Stage this hunk.
-   `n`: Do not stage this hunk.
-   `q`: Quit; do not stage this hunk or any remaining ones.
-   `a`: Stage this hunk and all later hunks in the file.
-   `d`: Do not stage this hunk or any later hunks in the file.
-   `s`: Split the current hunk into smaller hunks (if possible).
-   `e`: Manually edit the current hunk.

### Splitting Process

1.  Identify the first category of change you want to commit according to the **Deterministic Staging Order**.
2.  Run `git add -p` and selectively stage only the hunks related to that category. Use `s` to split larger hunks if they contain mixed changes. Use `e` if you need fine-grained control to edit the patch directly.
3.  Commit the staged changes with the appropriate semantic commit message and emoji.
4.  Repeat the process for the remaining changes in the file, working your way through the staging order.
