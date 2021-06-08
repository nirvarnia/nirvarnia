# `each()`

Iterate through every element of the collection. Inside the iterator function, this keyword refers to the current item (also passed as the second parameter to the function). If the iterator function returns false, iteration stops.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
each(function(index, item){ ... })  ⇒ self
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
$('form input').each(function(index){
  console.log('input %d is: %o', index, this)
})
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
