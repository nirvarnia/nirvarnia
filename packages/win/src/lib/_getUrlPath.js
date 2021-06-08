// //import xxx from './xxx.js'

// /**
//  * Get the full URL path.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getUrlPath('Foo Bar')
//  * // → 'fooBar'
//  */
// const getUrlPath = (val) => (
//   'TODO'
// )

// export default getUrlPath



//     // $.getURLPath
//     // Get the full URL path, or a specific segment of it

//     $.getURLPath = function (seg) {
//         var pathname = window.location.pathname.substring(1);
//         if (!seg) {
//             return pathname;
//         }
//         var paths = pathname.split('/');
//         return paths[seg];
//     };



// // String = __.getUrlPath([Number])
// // Get the full URL path, or a specific path segment. For example, to return
// // the first path segment: __.getUrlPath(0)

// __.getUrlPath = function (seg) {
//   var out,
//     pathname,
//     paths
//   pathname = window.location.pathname.substring(1)
//   if (!seg) {
//     out = pathname
//   } else {
//     paths = pathname.split('/')
//     out = paths[seg] || ''
//   }
//   return out
// }
