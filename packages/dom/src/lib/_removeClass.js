// import { trim } from '../str/trim'

// export function removeClass(el, cn) {
//   el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '))
// }



//import xxxx from './_xxxx.js'

/**
 * Removes a class name from all elements in the collection.
 * @param {String} cn Class name.
 * @return {this}
 * @copyright 2020+ Kieran Potts Consultancy Ltd.
 * @license   MIT
 */

//const xxx = (augend, addend) => {
//  return augend + addend
//}

//export default xxx





//__.fn.removeClass = function (cn) {
//  var pos,
//    full
//
//  this._targets.forEach(function (target) {
//    if (target.classList) {
//      target.classList.remove(cn)
//    } else {
//      if (target.nodeName.toUpperCase() === 'SVG') {
//        full = target.getAttribute('class').trim()
//        pos = (' ' + full + ' ').indexOf(' ' + cn + ' ')
//        if (pos > -1) { // hasClass
//          target.setAttribute('class', (' ' + full + ' ').replace(' ' + cn + ' ', ' ').trim())
//        }
//      } else {
//        full = target.className.trim()
//        pos = (' ' + full + ' ').indexOf(' ' + cn + ' ')
//        if (pos > -1) { // hasClass
//          target.className = (' ' + full + ' ').replace(' ' + cn + ' ', ' ').trim()
//        }
//      }
//    }
//  })
//
//  return this
//}


// //import xxx from './xxx.js'

// /**
//  * Remove a class from one or more HTML elements.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * removeClass('Foo Bar')
//  * // → 'fooBar'
//  */
// const removeClass = (val) => (
//   'TODO'
// )

// export default removeClass



    //     /*
    //     boolean removeClass( node, string )
    //     -----------------------------------
    //     Description
    //         Removes a CSS class from a given DOM element.
    //     Arguments
    //         DOM node reference.
    //         CSS class to remove.
    //     Returns
    //         True on successful completion.
    //     */
    //     removeClass: function( target, s_class ) {
    //         var regexp = new RegExp( '(^| )' + s_class + '( |$)' );
    //         target.className = target.className.replace( regexp, '$1' );
    //         target.className = target.className.replace( / $/, '' );
    //         return true;
    //     },





//     // $.removeClass
//     // Remove a specific class from one or more elements

//     $.removeClass = function (els, cn) {
//         if (!Array.isArray(els)) {
//             if (Object.prototype.toString.call(els) === '[object NodeList]') {
//                 els = Array.prototype.slice.call(els, 0);
//             } else {
//                 els = [els];
//             }
//         }
//         els.forEach(function (el) {
//             if (el.nodeName.toUpperCase() === 'SVG') {
//                 var old_cn = el.getAttribute('class');
//                 el.setAttribute('class', (' ' + old_cn + ' ').replace(' ' + cn + ' ', ' ').trim());
//             } else {
//                 el.className = (' ' + el.className + ' ').replace(' ' + cn + ' ', ' ').trim();
//             }
//         });
//     };


// // this = __(HTMLElements).removeClass(String)
// // Remove a class name from all elements in the collection.
// // See notes for __.fn.addClass.

// __.fn.removeClass = function (cn) {
//   var pos,
//     full
//   this._targets.forEach(function (target) {
//     if (target.classList) {
//       target.classList.remove(cn)
//     } else {
//       if (target.nodeName.toUpperCase() === 'SVG') {
//         full = target.getAttribute('class').trim()
//         pos = (' ' + full + ' ').indexOf(' ' + cn + ' ')
//         if (pos > -1) { // hasClass
//           target.setAttribute('class', (' ' + full + ' ').replace(' ' + cn + ' ', ' ').trim())
//         }
//       } else {
//         full = target.className.trim()
//         pos = (' ' + full + ' ').indexOf(' ' + cn + ' ')
//         if (pos > -1) { // hasClass
//           target.className = (' ' + full + ' ').replace(' ' + cn + ' ', ' ').trim()
//         }
//       }
//     }
//   })
//   return this
// }



/**
//  * Removes a class name from all elements in the collection.
//  *
//  * @param {string} cn Class name.
//  * @return {this}
//  */

// __.fn.removeClass = function (cn) {

//     var pos,
//         full;

//     this._targets.forEach(function (target) {
//         if (target.classList) {
//             target.classList.remove(cn);
//         } else {
//             if (target.nodeName.toUpperCase() === 'SVG') {
//                 full = target.getAttribute('class').trim();
//                 pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
//                 if (pos > -1) { // hasClass
//                     target.setAttribute('class', (' ' + full + ' ').replace(' ' + cn + ' ', ' ').trim());
//                 }
//             } else {
//                 full = target.className.trim();
//                 pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
//                 if (pos > -1) { // hasClass
//                     target.className = (' ' + full + ' ').replace(' ' + cn + ' ', ' ').trim();
//                 }
//             }
//         }
//     });

//     return this;

// };

