# `new $()`

Find DOM elements, or create new ones.


## Signature

```txt
new $(selector, [context]) => $
```

#### Parameters

- **`selector`** = `string` | `HTMLElement` | `Array<HtmlElement>` | `NodeList` | `DocumentFragment` | `window.document` | `$` \
  This parameter accepts:
    - A CSS selector string, e.g. `'[data-template=popup]'`.
    - An HTML string, e.g. `'<h1>Hello, World.</h1>'`.
    - An existing DOM element, or an `Array` of DOM elements or a `NodeList`.
    - A `DocumentFragment` instance.
    - The main document (`window.document`).
    - Another `$` instance.

- **`context`** = `HTMLElement` | `Array<HtmlElement>` | `NodeList` | `DocumentFragment` | `window.document` (default) | `$` \
  Optional. A a reference to a DOM component within which to conduct the CSS selector query. The following types are accepted:
    - A DOM element.
    - An array of DOM elements or a `NodeList`.
    - A `DocumentFragment` instance.
    - The main document (`window.document`). This is the default query context.
    - Another `$` instance, which represents a value of one of the above types.

#### Throws

- `TypeError` - Missing or invalid parameters.
- `Error` - Failure to generate a valid DOM fragment from the given HTML string.

#### Returns

- A new `$` instance, encapsulating a DOM component and exposing all of the other functions of the @nirvarnia/doc library as methods.


## Examples

#### Construction 

Unlike jQuery, @nirvarnia/doc's `$` is a proper class, which means it must be invoked with the `new` keyword.

```js
let $targets = new $('.target')
let $targets = $('.target') // → Error
```

It is conventional to prefix instances of the `$` class with the `$` symbol. This helps to distinguish between direct references to DOM elements and fragments, and references that are encapsulated in `$` instances. This is a matter of coding style. Use whatever variable naming conventions you prefer.

```js
let targets = document.querySelectorAll('.target')
// targets instanceof NodeLIst

let $targets = new $('.target')
// $targets instanceof $
```

Following construction, the new `$` instance holds an internal reference to the DOM elements found or created by the constructor. The internal reference can be retrieved via the `value` property.

```js
let $targets = new $('.target')
$targets.value 
// → NodeList
```

The internal value will be one of the following types:

- `HTMLElement`
- `Array<HTMLElement>`
- `NodeList`
- `DocumentFragment`
- `undefined`

Subsequent method calls on the `$` instance will manipulate or query the internal DOM object further. Some methods return new `$` instances, representing new or modified DOM structures. All methods support chaining.

Unlike jQuery, there are no functions that are accessed _statically_ via the `$` object. All of @nirvarnia/doc's functionality is accessible via methods of _instances_ of `$`.

```js
// $ is always used with the new keyword and parentheses.
new $('.target').addClass('is-selected')

// $ is never used with the dot notation to access static functions.
$.load() // → ReferenceError
$.ajax() // → ReferenceError

// Only one static property is accessible using the dot notation
// - the value property.
$.value
```

#### DOM Query

Supply any valid CSS selector string as the first parameter to search for matching DOM elements.

```js
let $targets = new $('.target')
// → $targets is an instance of $ that encapsulates references to all DOM 
// elements in the main document that have the class "target".
```

You should use only standardized, evergreen CSS syntax to ensure that your scripts work in all of your target clients. See [CSS Selectors](selectors.md) for more information.

Use the second parameter to set a context for the DOM selector query. You can restrict the search to the boundaries of one or more elements in the document.

```js
let $container = new $('#container')
let $targets = new $('.target', $container)
// → targets is an instance of $ that encapsulates references to all DOM
// elements that have the class "target" and are descendents of another 
// element in the main document with the id "container".
```

You can also use a raw `HTMLElement` or `NodeList` instance as the context for DOM selector queries. An alternative methodology to using the `context` parameter is to run a deeper query on an existing `$` instance using the [`find()`](find.md) method.

```js
let $container = new $('#container')

// The following expressions are equivalent:
let $primary_nav = new $('nav.main', $container)
let $primary_nav = $container.find('nav.main')
```

Normally, use of a CSS selector as the first parameter will trigger a DOM query, capturing references to all DOM elements that match the CSS selector. There is one special exception to this rule. If the selector matches a _single_ `<template>` tag, the _contents_ of that template will be parsed, turned into a DOM fragment, and captured in the `$` instance.

```html
<template id="template-title">
  <h1 data-title>Hello</h1> 
</template>

<!-- For better compatibility with legacy browsers that do not support the
<template> tag, you can use <script type="text/template"> instead. -->
<script type="text/template" id="template-title">
  <h1 data-title>Hello</h1> 
</script>
```

```js
new $('#template-title').value // → DocumentFragment
```

`DocumentFragment` instances can also be used as the `context` parameter, making it easy to conduct subsequent DOM selector queries within templates.

If no matching elements are found, the internal value of the `$` instance will be `undefined`. Subsequent method calls will fail silently, running as no-operations.

```js
// The addClass() call will be a noop if no matching DOM element nodes are 
// found using the CSS selector query in the $ constructor.
new $('.target').addClass('found-me')
```

#### DOM Construction

As well as searching for existing DOM elements, the `$` constructor can also be used to create entirely new bits of DOM. All you need to do is pass in any valid HTML string as the first parameter. (The string must contain at least one valid HTML tag, else the string will be treated as a CSS expression.)

```js
let $header = new $(`<header><h1>${title}</h1></header>`)
$header.value // → DocumentFragment
```

Newly constructed fragments of DOM can be injected into the main document using methods such as [`injectTop()`](injectTop.md).

If the provided HTML string cannot be parsed — for example, if the HTML is malformed and cannot be used to produce a valid DOM component — the construction will fail noisily, throwing an `Error` instance. This behaviour is different from selector query construction, which fails silently if no existing DOM elements are found to match the CSS selector query.


## Extension

`$` is a normal JavaScript class which can be extended like any other.

TODO: Simple example of extending `$` with custom functionality.

This is equivalent to extending jQuery or Zepto via the `fn` property:

```js

$.fn.myCustomFunction = function () {
  // ...
}
```


## Related

- [`find()`](find.md) - Description...
- [`children()`](children.md) - Description...
