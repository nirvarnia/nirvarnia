[![Nirvarnia](https://raw.githubusercontent.com/nirvarnia/brand/v1.0.0/dist/banner/nirvarnia-banner.svg?sanitize=true)](https://nirvarnia.com/)

# @nirvarnia/doc

**A minimal abstraction layer over the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) and its [Events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events), exposing a terse jQuery-inspired API but with better modularity, greater defensiveness, and support for a functional programming style.**

[![Version](https://img.shields.io/static/v1.svg?style=for-the-badge&label=Version&message=0.0.0&labelColor=222&color=FA0&maxAge=3600)](https://github.com/nirvarnia/doc/releases)
[![License](https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=Blue%20Oak&labelColor=222&color=FA0&maxAge=3600)](LICENSE.md) 

> DOM objects are the objects that the web browser is using to render elements on the web page whereas jQuery objects are basically wrapper objects around a set of DOM elements. 
>
> DOM objects are used by browser directly to render the webpage in browser window. The browser receives an HTML document from a web server, which is just text. The browser proceeds to parse this text into an internal structure that it can actually use to render the page visually. The DOM represents that internal structure a browser has of an HTML document. A DOM object represents a visual or functional object on the page which was created from the original HTML document.
>
> Even when browser has fully rendered the webpage, you can use JavaScript to change the DOM objects, it’s attributes and values. Any change done in such way automatically refreshes the visual representation shown in browser window.
>
> The advantage with working with DOM objects is that you have direct access to everything you need to manipulate the HTML element. The disadvantage of DOM objects is that most of the attached functions and attributes are things that the browser needs and are not necessarily useful when you’re working with JavaScript. It makes working with them a little slower, at least for less-experienced developers.
>
> e.g. to change content of a paragraph or label, you can use javascript like this:
>
> document.getElementById("label_firstname").innerHTML = "First Name";
>
> jQuery objects are wrapper objects around single or multiple DOM elements. The jQuery objects (though technically still JavaScript objects) provide access to the wrapped DOM elements — however, in a much different, much easier, and often much more effective way.
Remember that a jQuery object may represent a single DOM object, or it may represent a set of many DOM objects. So if you apply an operation on the jQuery object, it may apply to many DOM objects.
>
> Using jquery objects has it’s own advantages. For example, jQuery provides a lot of useful library methods to search elements inside DOM element it represent, and perform bulk operation on searched elements without iterating them in code.
>
> e.g. to change content of a paragraph or label, you can use jQuery like this:
("#label_firstname").html("First Name");

We no longer need large libraries like jQuery to iron out inconsistencies in the implementation of the Document Object Model (DOM) and DOM Events between browsers. Implementations of these APIs are now highly consistent and have a high degree of conformance to well-documented open standards.

However, ECMAScript + browser APIs is still a pretty low-level programming environment. As application developers, we find we need to write a lot of boilerplate code to write robust programs for running in web browsers.

So, there is still strong case for using a lightweight abstraction layer over the standard DOM APIs. A good abstraction will support terser and more expressive application code, and help to reduce brittleness in our applications by building in type checking and failing earlier and harder.


## Get Started

- [Requirements](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/requirements.md)
- [Installation](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/installation.md)
- [Usage](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/usage.md)


## API Documentation

#### Constructor

- [`new $()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/dollar.md)

#### Selection, Traversal and Filtering

- [CSS Selectors](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/selectors.md)
- [`add()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/add.md)
- [`children()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/children.md)
- [`contains()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/contains.md)
- [`count()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/count.md)
- [`closest()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/closest.md)
- [`contents()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/contents.md)
- [`each()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/each.md)
- [`eq()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/eq.md)
- [`filter()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/filter.md)
- [`find()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/find.md)
- [`first()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/first.md)
- [`forEach()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/forEach.md)
- [`get()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/get.md)
- [`has()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/has.md)
- [`index()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/index.md)
- [`is()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/is.md)
- [`last()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/last.md)
- [`map()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/map.md)
- [`next()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/next.md)
- [`not()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/not.md)
- [`offsetParent()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/offsetParent.md)
- [`parent()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/parent.md)
- [`parents()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/parents.md)
- [`prev()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/prev.md)
- [`siblings()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/siblings.md)

#### Type Assertions

- [`isWindow()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/isWindow.md)

#### Element Attributes and Style

- [`addClass()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/addClass.md)
- [`animate()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/animate.md)
- [`attr()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/attr.md)
- [`css()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/css.md)
- [`data()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/data.md)
- [`hasClass()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/hasClass.md)
- [`height()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/height.md)
- [`offset()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/offset.md)
- [`position()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/position.md)
- [`prop()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/prop.md)
- [`removeAttr()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/removeAttr.md)
- [`removeClass()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/removeClass.md)
- [`removeProp()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/removeProp.md)
- [`scrollLeft()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/scrollLeft.md)
- [`scrollTop()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/scrollTop.md)
- [`serialize()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/serialize.md)
- [`toggleClass()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/toggleClass.md)
- [`value()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/value.md)
- [`width()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/width.md)

#### Document Tree Manipulation

- [`after()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/after.md)
- [`append()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/append.md)
- [`appendTo()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/appendTo.md)
- [`before()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/before.md)
- [`copying()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/copying.md)
- [`concat()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/concat.md)
- [`empty()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/empty.md)
- [`html()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/html.md)
- [`insertAfter()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/insertAfter.md)
- [`insertBefore()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/insertBefore.md)
- [`prepend()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/prepend.md)
- [`prependTo()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/prependTo.md)
- [`push()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/push.md)
- [`remove()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/remove.md)
- [`replaceWith()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/replaceWith.md)
- [`text()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/text.md)
- [`unwrap()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/unwrap.md)
- [`wrap()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/wrap.md)
- [`wrapAll()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/wrapAll.md)
- [`wrapInner()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/wrapInner.md)

#### Animations and Visibility

- [`hide()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/hide.md)
- [`show()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/show.md)
- [`toggle()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/toggle.md)

#### Events

- [`ready()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/ready.md)
- [`off()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/off.md)
- [`on()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/on.md)
- [`one()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/one.md)
- [`submit()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/submit.md)
- [`trigger()`](https://github.com/nirvarnia/doc/tree/v0.0.0/src/docs/en/api/trigger.md)

See the [website](https://nirvarnia.com/) for even more documentation.


## Contribute

You can improve this free and open source software project by:

- Reporting bugs
- Suggesting features
- Contributing source code
- Sponsoring our work

Go to the [Nirvarnia Development](https://github.com/nirvarnia/dev) content repository to find out more.

----

Copyright © 2020-2021 Kieran Potts and contributors \
Distributed under the [MIT License](./LICENSE.txt)
