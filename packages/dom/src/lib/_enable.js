// //import xxx from './xxx.js'

// /**
//  * Enable one or more input controls, which might be currently disabled.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * enable('Foo Bar')
//  * // → 'fooBar'
//  */
// const enable = (val) => (
//   'TODO'
// )

// export default enable



// // this = __(HTMLElements).enable([Function])
// // Enable all controls that can be enable. Optionally, generate a new __ instance the
// // represents all controls that were successfully toggled to a non-disabled state.

// __.fn.enable = function (fn) {
//   var enabled = []
//   this._targets.forEach(function (el) {
//     if (el.disabled === true) { // Skip elements where disabled = undefined
//       el.disabled = false
//       enabled.push(el)
//     }
//   })
//   if (fn && enabled.length > 0) {
//     //fn.call(new __(enabled))
//     fn.call(this, new __(enabled))
//   }
//   return this
// }


    //     /*
    //     boolean enable( node )
    //     ----------------------
    //     Description
    //         Enable a DOM element - usually a button or input.
    //     Arguments
    //         DOM node reference.
    //     Returns
    //         True.
    //     */
    //     enable: function( target ) {
    //         target.disabled = false;
    //         return true;
    //     },
