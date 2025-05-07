#!/bin/bash

set -euxo pipefail

pushd packages/backend

./build.sh

uvx twine upload --config-file ~/.pypirc dist/*

popd
