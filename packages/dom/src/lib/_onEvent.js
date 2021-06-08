

//     // $.onEvent
//     // Apply event listeners to one or more DOM elements

//     $.onEvent = function (els, type, fn) {
//         if (!Array.isArray(els)) {
//             if (Object.prototype.toString.call(els) === '[object NodeList]') {
//                 els = Array.prototype.slice.call(els, 0);
//             } else {
//                 els = [els];
//             }
//         }
//         els.forEach(function (el) {
//             el.addEventListener(type, fn, false);
//         });
//     };


// // this = __(HTMLElements).Xxxx()
// // __.onEvent
// // Apply event listeners to one or more DOM elements

// //__.onEvent = function (els, type, fn) {
// //    if (!Array.isArray(els)) {
// //        if (Object.prototype.toString.call(els) === '[object NodeList]') {
// //            els = Array.prototype.slice.call(els, 0)
// //        } else {
// //            els = [els]
// //        }
// //    }
// //    els.forEach(function (el) {
// //        el.addEventListener(type, fn, false)
// //    })
// //}
