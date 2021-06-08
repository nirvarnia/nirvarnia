# `prop()`

Read or set properties of DOM elements. This should be preferred over attr in case of reading values of properties that change with user interaction over time, such as checked and selected.

Short and lowercase names such as for, class, readonly and similar will be mapped to actual properties such as htmlFor, className, readOnly, etc.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
prop(name)  ⇒ value
prop(name, value)  ⇒ self
prop(name, function(index, oldValue){ ... })  ⇒ self
prop({ name: value, name2: value2, ... })  ⇒ self
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
