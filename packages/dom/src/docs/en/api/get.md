# `get()`

Get all elements or a single element from the current collection. When no index is given, returns all elements in an ordinary array. When index is specified, return only the element at that position. This is different than eq in the way that the returned node is not wrapped in a Zepto collection.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
get()  ⇒ array
get(index)  ⇒ DOM node
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
var elements = $('h2')
elements.get()   //=> get all headings as an array
elements.get(0)  //=> get first heading node
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
