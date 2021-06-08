# `map()`

Iterate through all elements and collect the return values of the iterator function. Inside the iterator function, this keyword refers to the current item (also passed as the second parameter to the function).

Returns a collection of results of iterator function, with `null` and `undefined` values filtered out.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
map(function(index, item){ ... })  ⇒ collection
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
// get text contents of all elements in collection
elements.map(function(){ return $(this).text() }).get().join(', ')
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
