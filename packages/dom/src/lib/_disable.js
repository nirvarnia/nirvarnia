// //import xxx from './xxx.js'

// /**
//  * Disable one or more input controls.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * disable('Foo Bar')
//  * // → 'fooBar'
//  */
// const disable = (val) => (
//   'TODO'
// )

// export default disable


// // this = __(HTMLElements).disable([Function])
// // Disable all controls that can be disabled. Optionally, generate a new __ instance
// // that represents all controls that were successfully toggled to a disabled state.

// __.fn.disable = function (fn) {
//   var disabled = []
//   this._targets.forEach(function (el) {
//     if (el.disabled === false) { // Skip elements where disabled = undefined
//       el.disabled = true
//       disabled.push(el)
//     }
//   })
//   if (fn && disabled.length > 0) {
//     //fn.call(new __(disabled))
//     fn.call(this, new __(disabled))
//   }
//   return this
// }


    //     /*
    //     boolean disable( node )
    //     -----------------------
    //     Description
    //         Disables a DOM element, usually a button or input control.
    //     Arguments
    //         DOM node reference.
    //     Returns
    //         True.
    //     */
    //     disable: function( target ) {
    //         target.disabled = true;
    //         return true;
    //     },
