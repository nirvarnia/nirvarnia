# `closest()`

Traverse upwards from the current element to find the first element that matches the selector. If context node is given, consider only elements that are its descendants. This method is similar to parents(selector), but it only returns the first ancestor matched.

If a Zepto collection or element is given, the resulting element will have to match one of the given elements instead of a selector.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
closest(selector, [context])  ⇒ collection
closest(collection)  ⇒ collection
closest(element)  ⇒ collection
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
var input = $('input[type=text]')
input.closest('form')
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
