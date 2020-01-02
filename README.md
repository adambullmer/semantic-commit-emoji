# semantic-commit-emoji

Prepend emoji to matching semantic commit messages.

## What It Does

- This package adds github compatible emojis to commit messages in plain text.
- This package is intended to be used directly in the `commit-msg` git hook.
- Following git hook documentation, it will rewrite temp commit messages that follow certain semantic commit type keywords.
- This is similar to other implementations, but instead of choosing between emoji _or_ explicit semantic commit, you get both!
- This also follows some of the emoji suggestions from [gitmoji](https://gitmoji.carloscuesta.me/).
- Allows for overriding conventional emojis with your own if you provide it in the message. (Useful for chore if you want more granularity)

Example:

```sh
$ git commit -m "feat: Add new function" -m "Some expanded description about the feature"
$ git log --format=%B -n 1 HEAD
:sparkles:feat: Add new function

Some expanded description about the feature
$
```

## What It Doesn't Do

- Add native emojis to commit mesages.
- This will not enforce that commits are of a semantic commit pattern.
- It will also not prepend emojis to messages that do not follow a semantic commit pattern.
- For simplicity, the total list of gitmoji has been reduced to some

## Supported Semantic Types

The list of current message types and their used emoji

| Type     | Emoji                                           |
| -------- | ----------------------------------------------- |
| feat     | :sparkles: `:sparkles:`                         |
| fix      | :bug: `:bug:`                                   |
| docs     | :pencil: `:pencil:`                             |
| refactor | :recycle: `:recycle:`                           |
| style    | :art: `:art:`                                   |
| test     | :microscope: `:microscope:`                     |
| perf     | :zap: `:zap:`                                   |
| hotfix   | :ambulance: `:ambulance:`                       |
| locale   | :globe_with_meridians: `:globe_with_meridians:` |
| ci       | :construction_worker: `:construction_worker:`   |
| chore    | :wrench: `:wrench:`                             |
| typing   | :label: `:label:`                               |

## Installation

This can either be a global module if this is just a personal preference, or a project one, so that you may enforce consistency on all contributors.
It is recommended that you use a utility, like [Husky](https://github.com/typicode/husky), to manage consistently setting up git hooks on project setup.

### Global Installation

```sh
yarn global add semantic-commit-emoji
# or
npm g i semantic-commit-emoji
```

### Project Installation

```sh
yarn add --dev semantic-commit-emoji
# or
npm install --save-dev semantic-commit-emoji
```

## Usage

### Standalone Git Hook

For a standalone git hook, you can symlink the script into the appropriate hook

```sh
mkdir -p .git/hooks
ln -s ./node_modules/.bin/semantic-commit-emoji
```

### Multiple Git Hooks

If you want this hook to run with other `commit-message` or `prepare-commit-message` hooks, it can be called from the hook file like this (assuming sh syntax):

```sh
#!/bin/sh

# ... Other git hooks

# If globally installed module
commit-message-emoji "$@"
# Or if localy installed module
npx commit-message-emoji "$@"
```

### Usage with Husky, or package.json scripts

```json
{
  "scripts": {
    "semantic-commit-emoji": "semmantic-commit-emoji $HUSKY_GIT_PARAMS"
  },
  "husky": {
    "commit-msg": "semantic-commit-emoji"
  }
}
```

## Limitations

By design, this package will let you override an emoji with your own if you provide it in your message.
This offers the greatest flexibility for your own preferences over the conventions of this script.

It is recommended that you use this in the `commit-msg` hook, as the `prepare-commit-msg` hook prepares templates for an editor.
This means that if a user runs `git commit` their message that was entered via an external editor will not get processed, and therefore will miss the benefits of this package.

## Road Map

[Github Project](https://github.com/adambullmer/semantic-commit-emoji/projects/1)
