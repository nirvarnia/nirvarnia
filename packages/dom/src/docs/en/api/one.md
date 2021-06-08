# `one()`

Adds an event handler that removes itself the first time it runs, ensuring that the handler only fires once. See .on() for the explanation of selector and data parameters.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
one(type, [selector], function(e){ ... })  ⇒ self
one(type, [selector], [data], function(e){ ... })  ⇒ self v1.1+
one({ type: handler, type2: handler2, ... }, [selector])  ⇒ self
one({ type: handler, type2: handler2, ... }, [selector], [data])  ⇒ self
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
