# `html()`

Get or set HTML contents of elements in the collection. When no content given, returns innerHTML of the first element. When content is given, use it to replace contents of each element. Content can be any of the types described in append().


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
html()  ⇒ string
html(content)  ⇒ self
html(function(index, oldHtml){ ... })  ⇒ self
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
// autolink everything that looks like a Twitter username
$('.comment p').html(function(idx, oldHtml){
  return oldHtml.replace(/(^|\W)@(\w{1,15})/g,
    '$1@<a href="http://twitter.com/$2">$2</a>')
})
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
