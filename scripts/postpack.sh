#!/bin/sh
# Semantic release doesn't support using yarn for publishing. Some degree
# of yarn is necessary for rewriting workspace dependency versions prior
# to publishing a package.
#
# This script will revert the package.json file of the workspace modifications
# and carry forward whatever version was made during the release.

set -e
if [ ! -e .yarn-packing ]; then
  VERSION=$(jq -r '.version' package.json)
  git checkout ./package.json -q
  echo "$(jq --arg v $VERSION '.version = $v' package.json)" > package.json
else
  rm -f .yarn-packing
fi
