// //import xxx from './xxx.js'

// /**
//  * Get the number of pixels that the window is scrolled vertically and horizontally.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getScroll('Foo Bar')
//  * // → 'fooBar'
//  */
// const getScroll = (val) => (
//   'TODO'
// )

// export default getScroll



//     // $.getScroll
//     // Calculate the scroll depth of an element

//     $.getScroll = function (target) {
//         var result = { top: 0, left: 0 };
//         if (target === window || target === window.document) {
//             result.top = window.scrollY || window.pageYOffset || 0;
//             result.left = window.scrollX || window.pageXOffset || 0;
//         } else {
//             // Assume a DOM element node
//             result.top = target.scrollTop || 0;
//             result.left = target.scrollLeft || 0;
//         }
//         return result;
//     };



// // this = __(HTMLElements).Xxxx()

// //__.fn.getScroll = function() {}

// //*
// //**  I.Elements.getScroll()
// //**  Works out how far an element has been scrolled in either direction
// //**  @param - object|string - DOM object or HTML tag id attribute
// //**  @return - object|boolean - { x: 0, y: 0 }, false on fail
// //*/

// //getScroll: function(ao_target) {

// //  if (!ao_target || I.Elements.isBody(ao_target)) {

// //    var x = 0, y = 0

// //    if (typeof(window.top.pageYOffset) === 'number') {
// //      /* Netscape compliant: */
// //      x = window.top.pageXOffset
// //      y = window.top.pageYOffset
// //    } else if (window.top.document.body && window.top.document.body.scrollLeft  && window.top.document.body.scrollTop) {
// //      /* DOM compliant: */
// //      x = window.top.document.body.scrollLeft
// //      y = window.top.document.body.scrollTop
// //    } else if (document.documentElement
// //    && window.top.document.documentElement.scrollLeft && window.top.document.documentElement.scrollTop) {
// //      /* IE6 standards compliant mode: */
// //      x = window.top.document.documentElement.scrollLeft
// //      y = window.top.document.documentElement.scrollTop
// //    }

// //    return { x: x, y: y }

// //  }

// //  /* For all other elements: */

// //  ao_target = __(ao_target)
// //  if (ao_target === null) {
// //    return false
// //  }

// //  return { x: ao_target.scrollLeft, y: ao_target.scrollTop }

// //},

// // Calculate the scroll depth of an element:
// //__.getScroll = function (target) {
// //    var result = { top: 0, left: 0 }
// //    if (target === window || target === window.document) {
// //        result.top = window.scrollY || window.pageYOffset || 0
// //        result.left = window.scrollX || window.pageXOffset || 0
// //    } else {
// //        // Assume a DOM element node
// //        result.top = target.scrollTop || 0
// //        result.left = target.scrollLeft || 0
// //    }
// //    return result
// //}
