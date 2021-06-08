/**
 * Reveals a DOM element node if previously hidden.
 *
 * @param {Object} el - Target DOM element node.
 * @returns {undefined}
 * @example
 *
 * show($('#menu'))
 */
const show = (el) => {
  el.hidden = false
}

export { show }



// //import xxx from './xxx.js'

// /**
//  * Make visible one or more HTML elements, if they are currently hidden.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * show('Foo Bar')
//  * // → 'fooBar'
//  */
// const show = (val) => (
//   'TODO'
// )

// export default show



    //     /*
    //     boolean show( node )
    //     --------------------
    //     Description
    //         Shows a DOM element.
    //     Arguments
    //         DOM node reference.
    //     Returns
    //         True.
    //     */
    //     show: function( target ) {
    //         I.Doc.setAttribute( target, 'hidden', false );
    //         return true;
    //     },



    // //__.fn.show = function() {
// //    this._targets.forEach(function(el) {
// //        el.hidden = false // IE9 ?
// //    } )
// //    return this
// //}

