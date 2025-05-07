#!/bin/bash

set -euxo pipefail

pushd packages/component
npm run package
popd

pushd packages/table
npm run package
popd

pushd packages/viewer
npm run package
popd

pushd packages/embedding-atlas
npm run package
popd

pushd packages/embedding-atlas
npm publish
popd
