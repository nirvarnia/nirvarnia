# `has()`

Filter the current collection to include only elements that have any number of descendants that match a selector, or that contain a specific DOM node.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
has(selector)  ⇒ collection
has(node)  ⇒ collection
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
$('ol > li').has('a[href]')
// → get only LI elements that contain links
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
