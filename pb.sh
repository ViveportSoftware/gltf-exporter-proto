#!/bin/bash
./node_modules/protobufjs-cli/bin/pbjs -p ./ -t static-module -w commonjs -o index.umd.cjs *.proto
./node_modules/protobufjs-cli/bin/pbjs -p ./ -t static-module -w es6 -o index.js *.proto
./node_modules/protobufjs-cli/bin/pbts -o index.d.ts index.js