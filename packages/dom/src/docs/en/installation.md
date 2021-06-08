# Installation

TODO

The Nirvarnia Utilities package is available in two flavours:

- @nirvarnia/util-esm
- @nirvarnia/util-cjs

If possible, you should use the first. The package's modules are exported using standard JavaScript notation, which means you will need to import the modules using the same standard notation:

```js
import { util } from '@nirvarnia/util'
```

If your application's source code is written using the CommonJS module format, you should install the @nirvarnia/util-cjs package as a dependency and import it using the CommonJS `require()` API:

```js
const util = require('@nirvarnia/util')
```

Use the ECMAScript Module variation if you can. This will have greater longevity and you can better optimise your web bundles because the standard JavaScript module format supports tree-shaking.

(Note: AMD and UMD module formats are not supported by the Nirvarnia project.)

TODO: Installation with NPM or Yarn.


#### Usage

TODO: Basic usage instructions.

CommonJS modules:

```js
const util = require('@nirvarnia/util')
util.contains(/*...*/)

// Or:
const contains = require('@nirvarnia/util').contains
contains(/*...*/)
```

ECMAScript modules:

```js
import * as util from '@nirvarnia/util'
contains(/*...*/)

// Or:
import { contains } from '@nirvarnia/util/contains'
contains(/*...*/)
```
