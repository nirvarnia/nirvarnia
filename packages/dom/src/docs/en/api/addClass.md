# `addClass()`

Add class name to each of the elements in the collection. Multiple class names can be given in a space-separated string.


## Signature

TODO: Include standalone and $ wrapper signatures:
TODO: Support partial application.

```txt
addClass(name)  ⇒ self
addClass(function(index, oldClassName){ ... })  ⇒ self
```

#### Parameters

- **`arg1`** = `type` | `type`  \
  Description...

- **`arg2`** = `type` | `type` (default) \
  Optional. Description...

#### Throws

- `TypeError` - Missing or invalid parameters.

#### Returns

- `type` - Explanation.
- `type` - Explanation.


## Examples

```js
import { find, addClass } from '@nirvarnia/doc'

let targets = find('.target')
addClass('is-selected', targets)

// Or, using partial application of the addClass() function:
let targets = find('.target')
const isSelected = addClass('is-selected')
isSelected(targets)
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...



