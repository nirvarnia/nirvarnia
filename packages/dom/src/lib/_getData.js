// //import xxx from './xxx.js'

// /**
//  * Get the value of a custom data-* attribute attached to an HTML element.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getData('Foo Bar')
//  * // → 'fooBar'
//  */
// const getData = (val) => (
//   'TODO'
// )

// export default getData


// // String|null = __(HTMLElements).getData(attr)
// // Fetch the value of a data=* attribute on the first element in the collection.
// // Note: You can't set data-* attributes, what would be the point of that?!

// __.fn.data = function (attr) {
//   var out = null
//   if (this._targets[0]) {
//     out = this._targets[0].getAttribute('data-' + attr)
//     if (out === '') { // Normalize
//       out = null
//     }
//   }
//   return out
// }


    //     /*
    //     string|null getData( node, string )
    //     -----------------------------------
    //     Description
    //         Fetches custom data- attribute value from a DOM element.
    //     Arguments
    //         DOM node.
    //         Hyphen-delimited attribute name, excluding 'data-' prefix.
    //     Returns
    //         Attribute value as string.
    //         Null, if attribute does not exist on DOM element or is empty string.
    //     */
    //     getData: function( target, s_attribute ) {
    //         return I.Doc.getAttribute( target, 'data-' + s_attribute );
    //     },
