# `children()`

Get immediate children of each element in the current collection. If selector is given, filter the results to only include ones matching the CSS selector.


## Signature

TODO: Include standalone and $ wrapper signatures:
TODO: Support partial application.

```txt
children([selector])  ⇒ collection
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
- `type` - Explanation


## Examples

```js
$('ol').children('*:nth-child(2n)')
//=> every other list item from every ordered list
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
