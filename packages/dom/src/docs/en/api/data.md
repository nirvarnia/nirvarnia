# `data()`

Read or write data-* DOM attributes. Behaves like attr, but prepends data- to the attribute name.

When reading attribute values, the following conversions apply: v1.0+

- “true”, “false”, and “null” are converted to corresponding types;
- number values are converted to actual numeric types;
- JSON values are parsed, if it’s valid JSON;
- everything else is returned as string.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
data(name)  ⇒ value
data(name, value)  ⇒ self
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
let rtn = fn(1, 2)
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
