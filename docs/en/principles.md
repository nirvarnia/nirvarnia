# Design principles

## Performance

DOM reflows and repaints — expensive operations that can adversely affect the user experience — are avoided.

## Defensive programming

Nirvarnia is programmed defensively. Exceptions are routinely thrown when functions receive input they are not prepared for, forcing you to fix minor programming mistakes before they snowball into more opaque and insoluble bugs.

## Progressive enhancement

Nirvarnia adopts a progressive enhancement technique known as **cutting the mustard**. This technique was [originally developed for the BBC News website](https://responsivenews.co.uk/post/18948466399/cutting-the-mustard). It works like this:

A minimal, static, mobile-friendly experience is delivered in whole by the server. Once this _baseline experience_ is rendered in the browser, a small piece of JavaScript code — embedded directly in the web page — runs some feature checks on the host system, for example checking what web APIs it supports. If the host passes the tests, an _enhanced experience_ is initialised by dynamically loading additional scripts, style sheets and other assets.

The aim is to provide an _error-free_ experience across the widest range of clients that is practical and economical to achieve.

For more information on the progressive enhancement strategy implemented in the Nirvarnia framework, see the [documentation on compatibility](compatibility.md).

