#!/bin/sh
# Semantic release doesn't support using yarn for publishing. Some degree
# of yarn is necessary for rewriting workspace dependency versions prior
# to publishing a package.
#
# This script will prepare the package.json file for proper dependency resolutions

set -e
yarn pack > /dev/null
tar -xf package.tgz package/package.json
mv package/package.json .
rm package.tgz
rm -rf package
