#!/bin/bash

set -euxo pipefail

pushd packages/viewer
npm run build
popd

pushd packages/docs
npm run deploy
popd
