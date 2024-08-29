# GLTF Exporter Proto

## Generate protobuf for JavaScript

Execute `./pb.sh` to generate `index.umd.cjs`, `index.d.ts` and `index.js`.

Then change the version in `package.json` to publish new version for NPM module.

In others projects you could install this lib by add dependency in `package.json`

```
"@viveportsoftware/gltf-exporter-proto": "github:ViveportSoftware/gltf-exporter-proto#v1.0.26",
```

Then run `npm install` or `pnpm install`.

## How to use the lib

```
import { pb } from "@viveportsoftware/gltf-exporter-proto";

const body = new Uint8Array();

const data = pb.Node.decode(body);

console.log(data.assetUrl);
```

more about protobuf.js: https://github.com/protobufjs/protobuf.js