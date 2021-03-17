# webpack-global-object-issue-repro

This repository shows a common issue in Webpack configuration

```javascript
"globalObject": 'typeof self !== \'undefined\' ? self : this',
```

combined with chunk splitting.

The issue can be reproduced in both Webpack 4 and 5.

Install dependencies and build with
```
npm i
npm build
```
or to build with Webpack 4, run `npm build:v4`.

Inspect the generated files in dist folder or run `npm serve` to
open the demo page in browser and see the runtime error.
