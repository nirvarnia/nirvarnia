/**
 * Toggle the visibility of any DOM element node. Demands the `hidden` attribute
 * be implemented in the web client, or polyfilled using CSS.
 *
 * @param {Object} el - Target DOM element node.
 * @returns {undefined}
 * @example
 *
 * toggleVis($('#menu'))
 */
const toggleVis = (el) => {
  el.hidden = !el.hidden
}

export { toggleVis }



// //import xxx from './xxx.js'

// /**
//  * Show something if it is currently hidden, otherwise hide it.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * toggleVisibility('Foo Bar')
//  * // → 'fooBar'
//  */
// const toggleVisibility = (val) => (
//   'TODO'
// )

// export default toggleVisibility



    //     /*
    //     boolean toggleVisibility( node )
    //     --------------------------------
    //     Description
    //         Shows or hides an element.
    //     Arguments
    //         DOM node reference.
    //     Returns
    //         True on completion.
    //     */
    //     toggleVisibility: function( target ) {
    //         var _sn_visible = I.Doc.getAttribute( target, 'hidden' );
    //         if ( _sn_visible === null ) {
    //             I.Doc.hide( target );
    //         } else {
    //             I.Doc.show( target );
    //         }
    //         return true;
    //     },


// //__.fn.toggleVisibility = function() {
// //    var _sn_visible = I.Doc.getAttribute( target, 'hidden' )
// //    if ( _sn_visible === null ) {
// //        I.Doc.hide( target )
// //    } else {
// //        I.Doc.show( target )
// //    }
// //    return true
// //}
