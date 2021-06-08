# `off()`

Detach event handlers added with on. To detach a specific event handler, the same function must be passed that was used for on(). Otherwise, just calling this method with an event type will detach all handlers of that type. When called without parameters, it detaches all event handlers registered on current elements.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
off(type, [selector], function(e){ ... })  ⇒ self
off({ type: handler, type2: handler2, ... }, [selector])  ⇒ self
off(type, [selector])  ⇒ self
off()  ⇒ self
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
