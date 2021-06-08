// //import xxx from './xxx.js'

// /**
//  * Generates an array of elements that are the immediate children of one or
//  * more given HTML elements.
//  *
//  * Other DOM node types, such as comment nodes and text nodes, are not
//  * included in the return data. An empty array is returned if the reference
//  * node has no child elements.
//  *
//  *     array = getChildren(node)
//  *
//  * To fetch all top-level elements in the document:
//  *
//  *     getChildren(document)
//  *
//  * If the DOM changes, you will need to query it again to get an up-to-date
//  * element list. That's because this function returns a standard array, not
//  * a dynamic NodeList collection.
//  *
//  * This function returns only immediate children. To fetch nested descendents
//  * too, use ``getAllChildren()``.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getChildren('Foo Bar')
//  * // → 'fooBar'
//  */
// const getChildren = (val) => (
//   'TODO'
// )

// export default getChildren



// // Array = __(HTMLElements).children([Function])
// // Get all immediate children from all elements in the collection of HTMLElements.

// __.fn.children = function (fn) {
//   var found = []
//   this._targets.forEach(function (el) {
//     if (el.childNodes) {
//       for (var i = 0, l = el.childNodes.length; i < l; i++) {
//         // Element nodes only:
//         if (el.childNodes[i].nodeType === 1) {
//           found.push(el.childNodes[i])
//         }
//       }
//     }
//   })
//   if (fn) {
//     fn.call(this, new __(found || []))
//   }
//   return found
// }


    //     /*
    //     array getChildren( node )
    //     -------------------------
    //     Description
    //         Get immediate child nodes of an element or the whole document.
    //     Arguments
    //         DOM element reference.
    //     Returns
    //         Array of DOM nodes. Empty array if no children.
    //     */
    //     getChildren: function( target ) {
    //         var _a_found = [];
    //         if ( target.childNodes ) {
    //             for ( var i = 0; i < target.childNodes.length; i++ ) {
    //                 /* Element nodes only: */
    //                 if ( target.childNodes[ i ].nodeType === 1 ) {
    //                     _a_found.push( target.childNodes[ i ] );
    //                 }
    //             }
    //         }
    //         return _a_found;
    //     },
