# `parents()`

Get all ancestors of each element in the collection. If CSS selector is given, filter results to include only ones matching the selector.

To get only immediate parents, use `parent()`. To only get the first ancestor that matches the selector, use `closest()`.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
parents([selector])  ⇒ collection
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
$('h1').parents()   //=> [<div#container>, <body>, <html>]
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
