/**
 * Hides a DOM element node.
 *
 * @param {Object} el - Target DOM element node.
 * @returns {undefined}
 * @example
 *
 * hide($('#menu'))
 */
const hide = (el) => {
  el.hidden = true
}

export { hide }


// //import xxx from './xxx.js'

// /**
//  * Hide one or more HTML elements.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * hide('Foo Bar')
//  * // → 'fooBar'
//  */
// const hide = (val) => (
//   'TODO'
// )

// export default hide


// // this = __(HTMLElements).Xxxx()

// //__.fn.hide = function() {
// //    this._targets.forEach(function (el) {
// //        el.hidden = true // IE9?
// //    })
// //    return this
// //}


    //     /*
    //     boolean hide( node )
    //     --------------------
    //     Description
    //         Hides an element.
    //     Arguments
    //         DOM node reference.
    //     Returns
    //         True.
    //     */
    //     hide: function( target ) {
    //         I.Doc.setAttribute( target, 'hidden', true );
    //         return true;
    //     },
