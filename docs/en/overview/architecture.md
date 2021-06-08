# Architecture

#### Progressive enhancement

Nirvarnia is intended for the progressive enhancement of web interfaces that are already rendered in the web browser. Single page interfaces are possible, but the server is expected to — at the very least — render an application shell, to which dynamic behaviours are plugged in via unobtrusive hooks in the HTML itself. Standard `data-*` attributes are used to bind data and events to the DOM.

```html
<a href="./" data-plugin="tooltip" title="Tooltip text here">Home</a>
```

Nirvarnia provides a streamlined interface to native JavaScript and web platform APIs. It abstracts away tiresome details and dramatically reduces the amount of boilerplate code that you need to write to get your applications to work.
