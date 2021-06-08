// //import xxx from './xxx.js'

// /**
//  * Empties a DOM element of all its contents — all element nodes and text nodes.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * empty('Foo Bar')
//  * // → 'fooBar'
//  */
// const empty = (val) => (
//   'TODO'
// )

// export default empty



// // this = __(HTMLElements).empty()
// // Empty the HTMLElements of all of their contents.

// __.fn.empty = function () {
//   var i, l
//   this._targets.forEach(function (el) {
//     if (el.innerHTML) { // Not SVGs
//       el.innerHTML = ''
//     } else if (el.childNodes) {
//       for (i = 0, l = el.childNodes.length; i < l; i++) {
//         el.removeChild(el.childNodes[i])
//       }
//       if (el.textContent) { // Not SVGs
//         el.textContent = ''
//       }
//     }
//   })
//   return this
// }
