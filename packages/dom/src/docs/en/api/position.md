# `position()`

Get the position of the first element in the collection, relative to the `offsetParent()`. This information is useful when absolutely positioning an element to appear aligned with another.

Returns an object with properties: `top`, `left`.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
position()  ⇒ object
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
var pos = element.position()

// position a tooltip relative to the element
$('#tooltip').css({
  position: 'absolute',
  top: pos.top - 30,
  left: pos.left
})
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
