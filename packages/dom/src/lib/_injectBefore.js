//import xxxx from './_xxxx.js'

/**
 * Injects one or more HTMLElements into the DOM immediately before another.
 * @param {HTMLElement} ref Reference DOM node.
 * @return {this}.
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

//const xxx = (augend, addend) => {
//  return augend + addend
//}

//export default xxx





//__.fn.injectBefore = function (ref) {
//  var parent
//
//  this._targets.forEach(function (el) {
//    // if (Object.prototype.toString.call(el) === '[object DocumentFragment]') {
//    //    //
//    // } else {
//    parent = ref.parentNode
//    if (parent) {
//      parent.insertBefore(el, ref) // #TODO: What if no parent element?
//    }
//    // }
//  })
//
//  return this
//}


// //import xxx from './xxx.js'

// /**
//  * Injects a DOM node — of any type — into the document or a DocumentFragnent,
//  * immediately before another.
//  *
//  * The first argument is the node to add. The second argument is the
//  * reference node, which must already exist in the document.
//  *
//  * Returns ``true`` on successful completion. Returns ``false`` if the
//  * reference node is not a valid DOM object or is not part of the current
//  * document.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * injectBefore('Foo Bar')
//  * // → 'fooBar'
//  */
// const injectBefore = (val) => (
//   'TODO'
// )

// export default injectBefore


//     // $.injectBefore
//     // Inject a element into the DOM immediately before another

//     $.injectBefore = function (el, ref) {
//         ref.parentNode.insertBefore(el, ref);
//     };


    //     /*
    //     boolean injectBefore( node|string, node )
    //     -----------------------------------------
    //     Description
    //         Injects a new DOM element before another.
    //     Arguments
    //         DOM element to add, or HTML string.
    //         Reference DOM element.
    //     Returns
    //         True on successful completion, else false.
    //     */
    //     injectBefore: function( el, target ) {
    //         var _result = false;
    //         if ( toString.call( el ) === '[object String]' ) {
    //             target.insertAdjacentHTML( 'beforebegin', el );
    //             _result = true;
    //         } else {
    //             var _parent = I.Doc.getParent( target );
    //             if ( _parent ) {
    //                 _parent.insertBefore( el, target );
    //                 _result = true;
    //             }
    //         }
    //         return _result;
    //     },




// // this = __(HTMLElements).injectBefore()
// // Inject one or more HTMLElements into the DOM immediately before another.

// __.fn.injectBefore = function (ref) {
//   //console.log(this._targets)
//   var parent
//   this._targets.forEach(function (el) {
//     //if (Object.prototype.toString.call(el) === '[object DocumentFragment]') {
//     //    //
//     //} else {
//     parent = ref.parentNode
//     if (parent) {
//       parent.insertBefore(el, ref) // #TODO: What if no parent element?
//     }
//     //}
//   })
//   return this
// }



/**
//  * Injects one or more HTMLElements into the DOM immediately before another.
//  *
//  * @param {HTMLElement} ref Reference DOM node.
//  * @return {this}.
//  */

// __.fn.injectBefore = function(ref) {

//     var parent;

//     this._targets.forEach(function (el) {
//         //if (Object.prototype.toString.call(el) === '[object DocumentFragment]') {
//         //    //
//         //} else {
//             parent = ref.parentNode;
//             if (parent) {
//                 parent.insertBefore(el, ref); // #TODO: What if no parent element?
//             }
//         //}
//     });

//     return this;

// };
