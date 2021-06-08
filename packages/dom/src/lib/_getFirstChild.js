// //import xxx from './xxx.js'

// /**
//  * Get the first element nested inside another.
//  *
//  *     node|null = getFirstChild(node)
//  *
//  * A cross-browser implementation of ``Node.firstChild``. Returns a reference
//  * to a DOM element node, or ``null`` if the provided parent node does not
//  * have any nested element nodes.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getFirstChild('Foo Bar')
//  * // → 'fooBar'
//  */
// const getFirstChild = (val) => (
//   'TODO'
// )

// export default getFirstChild


// // HTMLElement = __(HTMLElements).last([Function])
// // Get a reference to the first HTMLElement in the collection.

// __.fn.first = function (fn) {
//   if (fn) {
//     fn.call(this, new __(this._targets[0]))
//   }
//   return this._targets[0]
// }

// // HTMLElement|Null = __(HTMLElements).firstChild([Function])
// // Get the first immediate child element of the first element in the collection.

// __.fn.firstChild = function (fn) {
//   var found = null
//   if (this._targets[0]) {
//     found = this._targets[0].firstChild // May be null
//     if (found) {
//       // Element nodes only:
//       while (found.nodeType !== 1) {
//         found = found.nextSibling
//       }
//     }
//     if (fn) {
//       fn.call(this, new __(found || []))
//     }
//   } else {
//     if (fn) {
//       fn.call(this, new __([]))
//     }
//   }
//   return found
// }


    //     /*
    //     node|null getFirstChild( node )
    //     -------------------------------
    //     Description
    //         Cross-browser implementation of Node.firstChild.
    //     Argument
    //         DOM element reference.
    //     Returns
    //         DOM element reference.
    //         Null if no children.
    //     */
    //     getFirstChild: function( target ) {
    //         var _found = target.firstChild;
    //         if ( _found ) {
    //             /* Element nodes only: */
    //             while ( _found.nodeType !== 1 ) {
    //                 _found = _found.nextSibling;
    //             }
    //         }
    //         return _found;
    //     },


