/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright 2020+ Kieran Potts Consultancy Ltd.
 * @license   MIT
 */

/**
 * Ejects any HTMLElements that can be ejected from their parent container.
 *
 * @param   {HTMLELement|NodeList|Array} els - References to one or more DOM nodes.
 * @returns {undefined}
 */
const eject = (els) => {
  // TODO: Check type of `els`.
  els.forEach(el => {
    parent = el.parentNode
    if (parent) parent.removeChild(el)
  })
}

export { eject }


// //import xxx from './xxx.js'

// /**
//  * Removes a node from the current document.
//  *
//  * Returns ``true`` on successful removal. This function will return
//  * ``false`` if the node could not be removed from the document, which will
//  * be the case if the node is the document itself or if it does not exist in
//  * the document.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * eject('Foo Bar')
//  * // → 'fooBar'
//  */
// const eject = (val) => (
//   'TODO'
// )

// export default eject




//     // $.eject
//     // Remove an element from the DOM or a DocumentFragment

//     $.eject = function (el) {
//         el.parentNode.removeChild(el);
//     };

// // this = __(HTMLElements).eject([Function])
// // Eject any HTMLElements that can be ejected from their parent container.

// __.fn.eject = function () {
//   var parent
//   this._targets.forEach(function (el) {
//     parent = el.parentNode
//     if (parent) {
//       parent.removeChild(el)
//     }
//   })
//   return this
// }


    //     /*
    //     boolean eject( node )
    //     ---------------------
    //     Description
    //         Removes an element from the DOM.
    //     Arguments
    //         DOM node to remove.
    //     Returns
    //         True on successful removal, else false.
    //     */
    //     eject: function( target ) {
    //         var _parent = I.Doc.getParent( target );
    //         var _result = false;
    //         if ( _parent ) {
    //             _parent.removeChild( target );
    //             _result = true;
    //         }
    //         return _result;
    //     },


    // /**
//  * Ejects any HTMLElements that can be ejected from their parent container.
//  *
//  * @return {this}
//  */

// __.fn.eject = function () {

//     var parent;

//     this._targets.forEach(function(el) {
//         parent = el.parentNode;
//         if (parent) {
//             parent.removeChild(el);
//         }
//     });

//     return this;

// };
