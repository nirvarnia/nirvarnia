export function hasClass(el, cn) {
  return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1
}


//__.fn.hasClass = function (cn) {
//  if (this._targets.length === 0) {
//    return false
//  }
//
//  var out = true,
//    pos,
//    full,
//    i, l
//
//  for (i = 0, l = this._targets.length; i < l; i++) {
//    if (this._targets[i].classList) {
//      if (!this._targets[i].classList.contains(cn)) {
//        out = false
//        break
//      }
//    } else {
//      if (this._targets[i].nodeName.toUpperCase() === 'SVG') {
//        full = this._targets[i].getAttribute('class').trim()
//        pos = (' ' + full + ' ').indexOf(' ' + cn + ' ')
//        if (pos < 0) {
//          out = false
//          break
//        }
//      } else {
//        full = this._targets[i].className.trim()
//        pos = (' ' + full + ' ').indexOf(' ' + cn + ' ')
//        if (pos < 0) {
//          out = false
//          break
//        }
//      }
//    }
//  }
//
//  return out
//}


// //import xxx from './xxx.js'

// /**
//  * Check if one or more HTML elements have a particular class name.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * hasClass('Foo Bar')
//  * // → 'fooBar'
//  */
// const hasClass = (val) => (
//   'TODO'
// )

// export default hasClass


//     // $.hasClass
//     // Check if an element has a certain class

//     $.hasClass = function (el, cn) {
//         if (el.nodeName.toUpperCase() === 'SVG') {
//             return (' ' + el.getAttribute('class') + ' ').indexOf(' ' + cn + ' ') !== -1;
//         } else {
//             return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
//         }
//     };


    //     /*
    //     boolean hasClass( node, string )
    //     --------------------------------
    //     Description
    //         Checks if a given DOM element has a certain CSS class.
    //     Arguments
    //         DOM node.
    //         Class to search.
    //     Returns
    //         True or false.
    //     */
    //     hasClass: function( target, s_class ) {
    //         var _return = false;
    //         var regexp = new RegExp( '(^| )' + s_class + '( |$)' );
    //         if ( regexp.test( target.className ) ) {
    //             _return = true;
    //         }
    //         return _return;
    //     },




// // Boolean = __(HTMLElements).hasClass(String)
// // Returns true if all elements in the collection have a specified class.
// // See notes for __.fn.addClass.

// __.fn.hasClass = function (cn) {
//   if (this._targets.length === 0) {
//     return false
//   }
//   var out = true,
//     pos,
//     full,
//     i, l
//   for (i = 0, l = this._targets.length; i < l; i++) {
//     if (this._targets[i].classList) {
//       if (!this._targets[i].classList.contains(cn)) {
//         out = false
//         break
//       }
//     } else {
//       if (this._targets[i].nodeName.toUpperCase() === 'SVG') {
//         full = this._targets[i].getAttribute('class').trim()
//         pos = (' ' + full + ' ').indexOf(' ' + cn + ' ')
//         if (pos < 0) {
//           out = false
//           break
//         }
//       } else {
//         full = this._targets[i].className.trim()
//         pos = (' ' + full + ' ').indexOf(' ' + cn + ' ')
//         if (pos < 0) {
//           out = false
//           break
//         }
//       }
//     }
//   }
//   return out
// }



/**
//  * Returns true if all elements in the collection have the specified class.
//  *
//  * @param {string} cn Class name.
//  * @return {Boolean}
//  */

// __.fn.hasClass = function (cn) {

//     if (this._targets.length === 0) {

//         return false;

//     }

//     var out = true,
//         pos,
//         full,
//         i, l;

//     for (i = 0, l = this._targets.length; i < l; i++) {
//         if (this._targets[i].classList) {
//             if (!this._targets[i].classList.contains(cn)) {
//                 out = false;
//                 break
//             }
//         } else {
//             if (this._targets[i].nodeName.toUpperCase() === 'SVG') {
//                 full = this._targets[i].getAttribute('class').trim();
//                 pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
//                 if (pos < 0) {
//                     out = false;
//                     break;
//                 }
//             } else {
//                 full = this._targets[i].className.trim();
//                 pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
//                 if (pos < 0) {
//                     out = false;
//                     break;
//                 }
//             }
//         }
//     }

//     return out;

// };
