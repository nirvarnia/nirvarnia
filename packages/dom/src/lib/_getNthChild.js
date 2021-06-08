// //import xxx from './xxx.js'

// /**
//  * Get a reference to a particular nested element, based on source order.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getNthChild('Foo Bar')
//  * // → 'fooBar'
//  */
// const getNthChild = (val) => (
//   'TODO'
// )

// export default getNthChild


// // HTMLElement|null = __(HTMLElements).nthChild(Number [, Function])
// // Get the nth immediate child element of the first element in the collection.

// __.fn.nthChild = function (n, fn) {
//   var found = []
//   if (this._targets[0]) {
//     if (this._targets[0].childNodes) {
//       for (var i = 0, l = this._targets[0].childNodes.length; i < l; i++) {
//         // Element nodes only:
//         if (this._targets[0].childNodes[i].nodeType === 1) {
//           found.push(this._targets[0].childNodes[i])
//         }
//       }
//     }
//   }
//   if (fn) {
//     if (found[n]) {
//       fn.call(this, new __(found[n] || []))
//     } else {
//       fn.call(this, new __([]))
//     }
//   }
//   return (found[n] ? found[n] : null)
// }
