# Usage

There are two ways to consume the @nirvarnia/doc library:

1. Import individual functions from the library as you need them.
2. Import the `$` class, which exposes the library's full functionality via its methods.

```js
// Method 1: Import individual functions.
import { find, addClass } from '@nirvarnia/doc'

let targets = find('.target')
addClass('is-selected', targets)
```

```js
// Method 2: Import the $ class.
import { $ } from '@nirvarnia/doc'

new $('.target').addClass('is-selected')
```

There are pros and cons to each approach.

The `$` class exposes a jQuery-like fluid API that enables a beautifully terse syntax of chainable methods. The disadvantage is that you are importing the entire library. All of the functions of @nirvarnia/doc — even the ones you don't use — will end up being shipped with your application. Importing just the functions that you need should mean smaller builds.


## Comparison to jQuery

@nirvarnia/doc's API is designed to feel familiar. It is particularly inspired by jQuery's API, which is clean, memorable and enduring. The authors have tried to improve on this solid foundation, simplifying function signatures, reducing function overloading, and adding support for some functional programming conventions.

@nirvarnia/doc is not a drop-in replacement for jQuery. Although many of the functions share the same names and accept the same parameters, there are important differences between the libraries' external signatures and internal algorithms.

For example, jQuery's ``data()`` method accepts objects and arrays for its `value` parameter, while @nirvarnia/doc's `data()` method accepts only primitive types for its `value` parameter.

```js
// jQuery
$('.target').data('prop', true)
$('.target').data('prop', { test: true })

// @nirvarnia/doc
new $('.target').data('prop', true)
new $('.target').data('prop', { test: true }) // → TypeError
```

@nirvarnia/doc is smaller in scope than jQuery. It is dedicated to the task of interacting with the DOM and DOM Events. Unlike jQuery, @nirvarnia/doc does not provide abstractions for other browser APIs such as `XMLHttpRequest` (a.k.a. ajax). Nor does it provide any general-purpose utility functions. We offer separate packages for those things: [@nirvarnia/http](https://github.com/nirvarnia/http), [@nirvarnia/util](https://github.com/nirvarnia/util), and [more](https://github.com/nirvarnia).
