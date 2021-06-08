// //import xxx from './xxx.js'

// /**
//  * Gets every child element node of a given DOM node. Returns an array of DOM
//  * elements in a flattened hierarchy. Other DOM node types are not included.
//  * Elements are listed in the order in which they appear in the document. An
//  * empty array is returned if the reference node has no child elements.
//  *
//  *     array = getAllChildren(node)
//  *
//  * The returned array is not live. If the DOM changes, you will need to query it
//  * again to get an up-to-date element list.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getAllChildren('Foo Bar')
//  * // → 'fooBar'
//  */
// const getAllChildren = (val) => (
//   'TODO'
// )

// export default getAllChildren




    //     /*
    //     array getAllChildren( node )
    //     ----------------------------
    //     Description
    //         Get every child node of an element or the whole document.
    //     Arguments
    //         DOM element reference.
    //     Returns
    //         Array of DOM nodes. Empty array if no children.
    //     Notes
    //         el.getElementsByTagName() returns a live NodeList collection. We can
    //         iterate through collection with ``for`` just like an array, but
    //         NodeLists do not have native array methods like ``forEach`` and
    //         ``filter``. So we use ``Array.prototype.slice.call`` to convert
    //         to a normal array.
    //     */
    //     getAllChildren: function( target ) {
    //         var _a_found = Array.prototype.slice.call(
    //             target.getElementsByTagName( '*' )
    //         );
    //         return _a_found;
    //     },

