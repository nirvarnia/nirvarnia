// //import xxx from './xxx.js'

// /**
//  * Get the last element nested inside another.
//  *
//  * A cross-browser implementation of ``Node.lastChild``. Returns a reference
//  * to a DOM element node, or ``null`` if the provided parent node does not
//  * have any nested element nodes.
//  *
//  *     node|null = getLastChild(node)
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getLastChild('Foo Bar')
//  * // → 'fooBar'
//  */
// const getLastChild = (val) => (
//   'TODO'
// )

// export default getLastChild


// // HTMLElement|null = __(HTMLElements).lastChild([Function])
// // Get the last immediate child element of the first element in the collection.

// __.fn.lastChild = function (fn) {
//   var found = null
//   if (this._targets[0]) {
//     found = this._targets[0].lastChild // May be null
//     if (found) {
//       // Element nodes only:
//       while (found.nodeType !== 1) {
//         found = found.previousSibling
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
    //     node|null getLastChild( node )
    //     ------------------------------
    //     Description
    //         A cross-browser implementation of Node.lastChild.
    //     Argument
    //         DOM element reference.
    //     Returns
    //         DOM element reference.
    //         Null if no children.
    //     */
    //     getLastChild: function( target ) {
    //         var _found = target.lastChild;
    //         if ( _found ) {
    //             /* Element nodes only: */
    //             while ( _found.nodeType !== 1 ) {
    //                 _found = _found.previousSibling;
    //             }
    //         }
    //         return _found;
    //     },
