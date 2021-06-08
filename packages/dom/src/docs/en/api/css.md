# `css()`

Read or set CSS properties on DOM elements. When no value is given, returns the CSS property from the first element in the collection. When a value is given, sets the property to that value on each element of the collection.

Multiple properties can be retrieved at once by passing an array of property names. Multiple properties can be set by passing an object to the method.

When a value for a property is blank (empty string, null, or undefined), that property is removed. When a unitless number value is given, “px” is appended to it for properties that require units.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
css(property)  ⇒ value
css([property1, property2, ...])  ⇒ object v1.1+
css(property, value)  ⇒ self
css({ property: value, property2: value2, ... })  ⇒ self
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
var elem = $('h1')
elem.css('background-color')          // read property
elem.css('background-color', '#369')  // set property
elem.css('background-color', '')      // remove property

// set multiple properties:
elem.css({ backgroundColor: '#8EE', fontSize: 28 })

// read multiple properties:
elem.css(['backgroundColor', 'fontSize'])['fontSize']
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
