# `trigger()`

Trigger the specified event on elements of the collection. Event can either be a string type, or a full event object obtained with $.Event. If an args array is given, it is passed as additional parameters to event handlers.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
trigger(event, [args])  ⇒ self
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
// add a handler for a custom event
$(document).on('mylib:change', function(e, from, to){
  console.log('change on %o with data %s, %s', e.target, from, to)
})
// trigger the custom event
$(document.body).trigger('mylib:change', ['one', 'two'])
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
