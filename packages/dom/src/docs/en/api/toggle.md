# `toggle()`

Toggle between showing and hiding each of the elements, based on whether the first element is visible or not. If setting is present, this method behaves like `show()` if setting is truthy or `hide()` otherwise.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
toggle([setting])  ⇒ self
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
$('#too_long').toggle(input.val().length > 140)
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
