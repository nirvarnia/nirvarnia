/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright 2020+ Kieran Potts Consultancy Ltd.
 * @license   MIT
 */

/**
 * Adds one or more class names to a collection of HTML elements.
 *
 * @param     {string|Array}  classname  - Class name, or a list of class names.
 * @param     {Array}         targets    - A collection of DOM element nodes.
 * @returns   {undefined}
 */
const addClass = (classname, targets) => {
  let classnames, existing, future, pos
  classnames = Array.isArray(classname) ? classname : [classname]

  targets.forEach((target) => {
    if (target.classList) {
      classnames.map(classname => target.classList.add(classname))
      return
    }

    // The classList API is supported by all modern browsers, with this fallback
    // required only for IE9.  While the classList property is available on both
    // HTML nodes and embedded SVGs, the className attribute is not available on
    // SVG elements. In this scenario we can use the setAttribute method.

    existing = target.className !== undefined
      ? target.className.trim()
      : target.getAttribute('class').trim()

    classnames.map(classname => {
      pos = (' ' + existing + ' ').indexOf(' ' + classname + ' ')
      if (pos < 0) {
        future = (existing + ' ' + classname).trim()
        target.className !== undefined
          ? target.className = future
          : target.setAttribute('class', future)
      }
    })

  })
}

export { addClass }

// import { hasClass } from './hasClass'

// export function addClass (el, cn) {
//   if (!hasClass(el, cn)) {
//     el.className = (el.className === '') ? cn : el.className + ' ' + cn
//   }
// }



// //import xxx from './xxx.js'

// /**
//  * Add one or more classes to an element or group of elements.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * addClass('Foo Bar')
//  * // → 'fooBar'
//  */
// const addClass = (val) => (
//   'TODO'
// )

// export default addClass



// // this = __(HTMLElements).addClass(String)
// // Add a class to one or more HTML elements. The classList API is well support,
// // with a fallback required only for IE9. The classList API works for both HTML
// // and embedded SVGs. The className attribute is not available on SVG elements,
// // but we can fallback on the setAttribute method.

// __.fn.addClass = function (cn) {
//   var pos,
//     full
//   this._targets.forEach(function (target) {
//     if (target.classList) {
//       target.classList.add(cn)
//     } else {
//       if (target.nodeName.toUpperCase() === 'SVG') {
//         full = target.getAttribute('class').trim()
//         pos = (' ' + full + ' ').indexOf(' ' + cn + ' ')
//         if (pos < 0) { // !hasClass
//           target.setAttribute('class', (full === '') ? cn : full + ' ' + cn)
//         }
//       } else {
//         full = target.className.trim()
//         pos = (' ' + full + ' ').indexOf(' ' + cn + ' ')
//         if (pos < 0) { // !hasClass
//           target.className = (full === '') ? cn : full + ' ' + cn
//         }
//       }
//     }
//   })
//   return this
// }


//     /*
//     boolean addClass( node, string )
//     --------------------------------
//     Description
//         Adds a CSS class to a DOM element.
//     Arguments
//         DOM node.
//         CSS class string to add.
//     Returns
//         True.
//     */
//     addClass: function( target, s_class ) {
//         if ( I.Doc.hasClass( target, s_class ) !== true ) {
//             if ( target.className === '' ) {
//                 target.className = s_class;
//             } else {
//                 target.className = s_class + ' ' + target.className;
//             }
//         }
//         target.className.trim();
//         return true;
//     },

//     // $.addClass
//     // Add a class to one or more DOM elements

//     $.addClass = function (els, cn) {
//         if (!Array.isArray(els)) {
//             if (Object.prototype.toString.call(els) === '[object NodeList]') {
//                 els = Array.prototype.slice.call(els, 0);
//             } else {
//                 els = [els];
//             }
//         }
//         els.forEach(function (el) {
//             if (!$.hasClass(el, cn)) {
//                 if (el.nodeName.toUpperCase() === 'SVG') {
//                     var old_cn = el.getAttribute('class');
//                     el.setAttribute('class', (old_cn === '') ? cn : old_cn + ' ' + cn);
//                 } else {
//                     el.className = (el.className === '') ? cn : el.className + ' ' + cn;
//                 }
//             }
//         });
//     };



/**
//  * Adds a class name to one or more HTML elements.
//  *
//  * The classList API is well supported by modern browsers, with a fallback
//  * required only for IE9. The classList API works for both HTML and embedded
//  * SVGs. The className attribute is not available on SVG elements, but we can
//  * fallback on the setAttribute method.
//  *
//  * @param {string} cn Class name.
//  * @return {this}
//  */

// __.fn.addClass = function (cn) {

//     var pos,
//         full;

//     this._targets.forEach(function (target) {
//         if (target.classList) {
//             target.classList.add(cn);
//         } else {
//             if (target.nodeName.toUpperCase() === 'SVG') {
//                 full = target.getAttribute('class').trim();
//                 pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
//                 if (pos < 0) { // !hasClass
//                     target.setAttribute('class', (full === '') ? cn : full + ' ' + cn);
//                 }
//             } else {
//                 full = target.className.trim();
//                 pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
//                 if (pos < 0) { // !hasClass
//                     target.className = (full === '') ? cn : full + ' ' + cn;
//                 }
//             }
//         }
//     });

//     return this;

// };
