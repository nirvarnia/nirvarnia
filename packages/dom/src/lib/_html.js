import isSvg from '../../is/svg'

/**
 * Sets the inner HTML content of any DOM node, including SVGs.
 *
 * @param {Object} container - The parent DOM node in which to inject the HTML.
 * @param {String} html - The HTML content to inject into `container`.
 * @returns {undefined}
 * @example
 *
 * html(container, '<p>Hello World</p>')
 */
const html = (container, html) => {
  // innerHTML is not supported on SVG tags. DOMParser is the solution, but it's
  // implemented in web browsers, not Node. Note: Standard/ESLint rules state
  // that browser globals must be prefixed `window`.
  if (isSvg(container) && window && window.DOMParser) {
    var str = '<svg xmlns="http://www.w3.org/2000/svg">' + html + '</svg>'
    var node = container.ownerDocument.importNode(
      new window.DOMParser()
        .parseFromString(str, 'application/xml')
        .documentElement,
      true
    )
    container.appendChild(node)
  } else {
    container.innerHTML = html
  }
}

export { html }


// //import xxx from './xxx.js'

// /**
//  * Change the inner HTML content of one or more HTML elements.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * setHtml('Foo Bar')
//  * // → 'fooBar'
//  */
// const setHtml = (val) => (
//   'TODO'
// )

// export default setHtml


// //import xxx from './xxx.js'

// /**
//  * Get the inner HTML string content of an element.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getHtml('Foo Bar')
//  * // → 'fooBar'
//  */
// const getHtml = (val) => (
//   'TODO'
// )

// export default getHtml



// // this = __(HTMLElements).html([String])
// // Retrieve or change the innerHTML of the elements in the collection.

// __.fn.html = function (html) {
//   if (__.isUndefined(html)) {
//     this._targets.forEach(function (el) {
//       el.innerHTML = ''
//     })
//   } else {
//     this._targets.forEach(function (el) {
//       el.innerHTML = html
//     })
//   }
// }
