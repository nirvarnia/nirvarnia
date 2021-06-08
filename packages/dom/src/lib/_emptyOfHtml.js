// //import xxx from './xxx.js'

// /**
//  * Remove all inner HTML tags, leaving only the text behind.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * emptyOfHtml('Foo Bar')
//  * // → 'fooBar'
//  */
// const emptyOfHtml = (val) => (
//   'TODO'
// )

// export default emptyOfHtml



// // this = __(HTMLElements).emptyOfElements()
// // Remove all inner elements, leaving only the raw content.

// __.fn.emptyOfElements = function () {
//   var text
//   this._targets.forEach(function (el) {
//     if (el.textContent) { // Not SVGs
//       text = el.textContent
//       el.textContent = text
//     } else if (el.childNodes) {
//       for (var i = 0, l = el.childNodes.length; i < l; i++) {
//         el.removeChild(el.childNodes[i])
//       }
//     }
//   })
//   return this
// }



    //     /*
    //     boolean empty( node )
    //     ---------------------
    //     Description
    //         Empties a DOM element of all its contents (child DOM nodes and text).
    //     Arguments
    //         DOM element.
    //     Returns
    //         True on completion.
    //     */
    //     empty: function( target ) {
    //         var _a_children = I.Doc.getAllChildren( target );
    //         for ( var i = 0; i < _a_children.length; i++ ) {
    //             I.Doc.eject( _a_children[ i ] );
    //         }
    //         I.Doc.setText( target, '' );
    //         return true;
    //     },
