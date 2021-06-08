# `unwrap()`

Remove immediate parent nodes of each element in the collection and put their children in their place. Basically, this method removes one level of ancestry while keeping current elements in the DOM.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
unwrap()  ⇒ self
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
$(document.body).append('<div id=wrapper><p>Content</p></div>')
$('#wrapper p').unwrap().parents()  //=> [<body>, <html>]
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
