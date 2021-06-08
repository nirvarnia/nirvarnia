// //import xxx from './xxx.js'

// /**
//  * Generate a flat array that represents all of the elements nested inside one
//  * or more given HTML elements.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getDescendants('Foo Bar')
//  * // → 'fooBar'
//  */
// const getDescendants = (val) => (
//   'TODO'
// )

// export default getDescendants


// // Array = __(HTMLElements).descendants([Function])
// // Get all immediate children and other descendant elements from our
// // collection of HTMLElements.

// __.fn.descendants = function (fn) {
//   var found = [],
//     kids
//   this._targets.forEach(function (el) {
//     kids = el.getElementsByTagName('*')
//     for (var i = 0, l = kids.length; i < l; i++) {
//       found.push(kids[i])
//     }
//   })
//   if (fn) {
//     fn.call(this, new __(found))
//   }
//   return found
// }
