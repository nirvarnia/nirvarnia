# `not()`

Filter the current collection to get a new collection of elements that don’t match the CSS selector. If another collection is given instead of selector, return only elements not present in it. If a function is given, return only elements for which the function returns a falsy value. Inside the function, the this keyword refers to the current element.

For the opposite, see `filter()`.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
not(selector)  ⇒ collection
not(collection)  ⇒ collection
not(function(index){ ... })  ⇒ collection
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
