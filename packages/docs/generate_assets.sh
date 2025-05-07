#!/bin/bash

set -euxo pipefail

rm -rf public/upload
cp -r ../viewer/dist public/upload
python -c "fn='public/upload/index.html';c=open(fn).read().replace('viewer','upload');open(fn,'w').write(c);"

DEMO_DATA_FOLDER=../../../embedding-atlas-demo/data

rm -rf public/demo
if [ -d "$DEMO_DATA_FOLDER" ]; then
cp -r ../viewer/dist public/demo
cp -r "$DEMO_DATA_FOLDER" public/demo/data
fi
