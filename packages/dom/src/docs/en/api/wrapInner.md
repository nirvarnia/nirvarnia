# `wrapInner()`

Wrap the contents of each element separately in a structure. Structure can be a single element or several nested elements, and can be passed in as a HTML string or DOM node, or as a function that is called for each element and returns one of the first two types.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
wrapInner(structure)  ⇒ self
wrapInner(function(index){ ... })  ⇒ self 
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
// wrap the contents of each navigation link in a span:
$('nav a').wrapInner('<span>')

// wrap the contents of each list item in a paragraph and emphasis:
$('ol li').wrapInner('<p><em /></p>')
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
