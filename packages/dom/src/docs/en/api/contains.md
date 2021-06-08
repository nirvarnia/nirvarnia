# `contains()`

Test that one or more DOM elements are descendants of another parent element.


## Signature

TODO: Include standalone and $ wrapper signatures:
TODO: Support partial application.

```txt
contains(parent, children) => bool
```

#### Parameters

- **`parent`** = `HTMLElement` | `DocumentFragment` | `window.document` | `$`  \
  Reference to a DOM element, document or fragment.

- **`children`** = `HTMLElement` | `Array<HTMLElement>` | `NodeList` | `$` \
  Reference to a DOM element, or a list of DOM elements.

#### Throws

- `TypeError` - Missing or invalid parameters.

#### Returns

- `bool` 
    - `true` if all `children` are descendants of `parent`.
    - `false` if one or more `children` are not descendants of `parent`.


## Examples

```js
contains(document.documentElement, document.body) // → true
contains(document.body, document.documentElement) // → false
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
