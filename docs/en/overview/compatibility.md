# Compatibility

Nirvarnia adopts a progressive enhancement technique known as **cutting the mustard**. This technique was [originally developed for the BBC News website](https://responsivenews.co.uk/post/18948466399/cutting-the-mustard). It works like this:

A minimal, static, mobile-friendly experience is delivered in whole by the server. Once this _baseline experience_ is rendered in the browser, a small piece of JavaScript code — embedded directly in the webpage — runs some feature checks on the host system, for example checking what web APIs it supports. If the host passes the tests, an _enhanced experience_ is initialised by dynamically loading additional scripts, style sheets and other assets.

Thus, Nirvarnia puts web clients in two buckets:

1. All clients get served a **baseline experience**. This provides a very basic visual design, but it is fast and works everywhere: on mobiles, over low-bandwidth connections, and in legacy browsers back to IE9 and probably beyond. It is expected this experience will be entirely generated server-side. The baseline experience consists of:

  - A static, server-generated HTML document.
  - A single CSS style sheet that implements a minimal, backwards-compatible, mobile-optimised design.
  - Small, low-resolution images linked directly from the HTML document.
  - Low-definition video and audio linked directly from the HTML document.
  - Text transcriptions for all multimedia.

2. An **enhanced experience** is dynamically applied over the top of the baseline experience, but only in modern web browsers that support a richer, more interactive user experience. The enhanced experience features:

  - Scripted behaviours.
  - Smoother and faster interactions, some of which don't require a full page refresh.
  - Ways to validate user input before submission to the server.
  - Interactive charts, etc.

We are not aiming for a perfectly _consistent_ user experience across all supported clients. The aim is to provide an _error-free_ experience across the widest range of clients that is reasonably practical and economical to achieve. Because styles and behaviours are applied progressively, based on the capabilities of the host system, there will be variation in the user experience from one client to another. Even within the enhanced experience there will be differences.

The particular web browsers that are supported by the baseline and enhanced experience are defined in [Browserslist](https://github.com/browserslist/browserslist) configurations.

The browserslist rules for the **baseline experience** are currently:

```txt
>= 0.05%
OR last 2 major versions
OR Firefox ESR
OR unreleased versions
OR not dead
OR ie 9-11
```

These rules capture the long tail of web browsers:

- Support all versions of web browsers that have at least a 0.05% share of the global market
- Support all minor and patch releases of the last two major versions of each browser
- Support all Firefox Extended Support Releases that are currently maintained
- Support unreleased (alpha and beta) versions of each browser
- Support browsers that are still officially maintained or have been updated at least once in the last 24 months ("not dead")
- Support Internet Explorer 9, 10 and 11, even if they have reached end of support

A browser needs to match only one of these rules to support the baseline user experience. Broadly, the following browsers match these rules:

- Android Browser (stock) >= 4
- Baidu Browser 7.12
- Chrome >= 29
- Chrome for Android >= 74
- Edge >= 16
- Firefox >= 47
- Firefox for Android >= 66
- IE 9-11
- IE Mobile 11
- KaiOS Browser 2.5
- Opera >= 57
- Opera Mini
- Opera for Android >= 46
- QQ Browser 1.2
- Safari >= 5.1
- Safari for iOS >= 8
- Samsung Internet >= 4
- UC Browser for Android >= 11.8

Go to [browserl.ist](https://browserl.ist/?q=%3E%3D+0.05%25+OR+last+2+major+versions+OR+Firefox+ESR+OR+unreleased+versions+OR+not+dead+OR+ie+9-11) to see exactly which browsers _currently_ match these rules.

For the **enhanced experience** the browserslist rules are:

```txt
>= 0.1%
AND last 2 major versions
AND not ie 9-11
```

These rules capture mainstream web browsers:

- Support all versions of web browsers that have at least a 0.1% share of the global market
- And only the last two major versions of each browser
- And exclude IE 9-11

Broadly, the following browsers match these rules: 

- Chrome >= 73
- Chrome for Android >= 74
- Edge >= 17
- Firefox >= 65
- Firefox for Android >= 66
- KaiOS Browser 2.5
- Opera >= 58
- QQ Browser 1.2
- Safari >= 11.1
- Safari for iOS >= 11.0
- Samsung Internet >= 8.2
- UC Browser for Android >= 11.8

Go to [browserl.ist](https://browserl.ist/?q=%3E%3D+0.2%25+OR+last+2+major+versions+OR+Firefox+ESR+OR+unreleased+versions+OR+not+dead) to see exactly which browsers _currently_ match these rules.

Opera Mini is captured, but the enhanced user experience will not be enabled in this browser.

Even within the enhanced layer there will still be some variation in the user experience from one browser to another. For example, some layouts will make use of [the CSS grid layout module](https://www.w3.org/TR/css3-grid-layout/), but the handful of browsers that do not support this newish CSS feature will fallback on an historical layout methodology (e.g. using floats). The renderings will be similar, not identical.
