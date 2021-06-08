# `attr()`

Read or set DOM attributes. When no value is given, reads specified attribute from the first element in the collection. When value is given, sets the attribute to that value on each element in the collection. When value is null, the attribute is removed (like with removeAttr). Multiple attributes can be set by passing an object with name-value pairs.

To read DOM properties such as checked or selected, use prop(). - WHY? Attributes are basically the defaults, Properties are the current dynamic values. We should concern ourselves only with PROPERTIES in JS... https://stackoverflow.com/a/5876747


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
attr(name)  ⇒ string
attr(name, value)  ⇒ self
attr(name, function(index, oldValue){ ... })  ⇒ self
attr({ name: value, name2: value2, ... })  ⇒ self
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
var form = $('form')
form.attr('action')             //=> read value
form.attr('action', '/create')  //=> set value
form.attr('action', null)       //=> remove attribute

// multiple attributes:
form.attr({
  action: '/create',
  method: 'post'
})
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
