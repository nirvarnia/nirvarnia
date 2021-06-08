# CSS Selectors

The following classes and functions accept CSS selector strings as input parameters:

- [`new $()`](dollar.md)
- [`find()`](find.md)
- [`children()`](children.md)

The @nirvarnia/doc library uses the browser's own CSS engine to implement DOM selection. No attempt is made to polyfill selector formats that the browser does not recognise. Nor does @nirvarnia/doc offer any [non-standard CSS selector extensions](http://api.jquery.com/category/selectors/jquery-selector-extensions/) such as `:animated` and `:hidden`. Therefore, you should be careful to use only those CSS selector formats that you know to be supported natively by all of your target browsers. 

We recommend using combinations of the following selectors. These were standardized in CSS Levels 1 to 3, and are universally supported in all browsers on all devices, new and old:

- Class selector: `.class-name`
- ID selector: `#id`
- Type selector: `type`
- Attribute selectors: 
    - `[attr]`
    - `[attr=value]`
    - `[attr~=value]`
    - `[attr|=value]`
    - `[attr^=value]`
    - `[attr$=value]`
    - `[attr*=value]`
- Pseudo classes:
    - `:link`, `:visited`, `:active`, `:hover`, `:focus`
    - `:enabled`, `:disabled`, `:checked`
    - `:first-child`, `:last-child`, `:only-child`, `:nth-child()`, `:nth-last-child()`
    - `:first-of-type`, `:last-of-type`, `:only-of-type`, `:nth-of-type()`, `:nth-last-of-type()`
    - `:root`, `:target`, `:empty`
    - `:lang()`, `:not()` (with single nested selector)
- Combinators: 
    - Descendent combinator: (space)
    - Child combinator: `>`
    - Adjacent sibling combinator:  `+`
    - General sibling combinator: `~`

The following pseudo classes — which are related to input state and validation — also enjoy widespread support, but compatibility gets patchier and buggier in older and more niche browsers. Use these selectors cautiously. [Check browser compatibility](https://caniuse.com/) and use them only to implement optional progressive enhancements such as animations.

- `:invalid`
- `:valid`
- `:required`
- `:optional` (non-standard)
- `:default`

Avoid using the universal selector (`*`). It works, but overuse of this type of DOM query will have performance implications when busy documents are rendered on resource-starved devices.

You cannot use pseudo-elements — `::before`, `::after`, `::first-line`, etc. — as DOM selectors from JavaScript. These are generated and used internally within the CSS engine only.

Best practice is to use `data-*` attributes as the exclusive binding mechanism between HTML and JavaScript (and classes as the exclusive binding mechanism between HTML and CSS). So, ideally, all the CSS selectors throughout your JavaScript should look something like this:

```js
new $('[data-popup]')
new $('[data-bind=user.username]')
new $('[data-onclick=togglePanel]')
```
