export function find (query) {
  return document.querySelectorAll(query)
}

// /**
//  * Finds the first matching element in a document, or partial document, based on
//  * the given CSS selector query.
//  *
//  * @param {String} qry - CSS selector query.
//  * @param {Object} ctx - Context: a document, DocumentFragment, or HTMLElement.
//  * @returns {Object|null} - Matching HTMLElement instance or null if none found.
//  * @example
//  *
//  * $('#target')
//  * => HTMLElement|null
//  *
//  * $('.target', el)
//  * => HTMLElement|null
//  *
//  * $('.target', frag)
//  * => HTMLElement|null
//  */
// const $ = (qry, ctx) =>
//   (ctx || document).querySelector(qry)

// export { $ }


// /**
//  * Finds all elements within a document, or partial document, that match the CSS
//  * selector query.
//  *
//  * @param {String} qry - CSS selector query.
//  * @param {Object} ctx - Context: a document, DocumentFragment, or HTMLElement.
//  * @returns {Array} - A list of references to the matching element nodes.
//  * @example
//  *
//  * $$('#target')
//  * => [...HTMLElement]
//  *
//  * $$('.target', el)
//  * => [...HTMLElement]
//  *
//  * $$('.target', frag)
//  * => [...HTMLElement]
//  */
// const $$ = (qry, ctx) =>
//   [].slice.call((ctx || document).querySelectorAll(qry))

// export { $$ }



// //import xxx from './xxx.js'

// /**
//  * Retrieves one or more element nodes from the DOM using a CSS-like query.
//  *
//  * Normally this function returns an array of DOM element references, which
//  * may be empty if there are no matches. (The returned data is an array rather
//  * than a NodeList object, so you can apply all the usual native array
//  * functions to it.)
//  *
//  * But if the query string starts with a hash ``#`` character — e.g.
//  * ``#my-id`` — then a single DOM node reference is returned or ``null`` if
//  * there is no match.
//  *
//  * This method is essentially a wrapper for the native selector APIs found in
//  * modern browsers: ``getElementById()``, ``getElementsByTagName()``,
//  * ``getElementsByClassName()``, ``querySelector()``, and
//  * ``querySelectorAll()``.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * find('Foo Bar')
//  * // → 'fooBar'
//  */
// const find = (val) => (
//   'TODO'
// )

// export default find



// // this = __(HTMLElements).find(String)
// // Select descendant nodes within all our current selection of HTMLElements.
// // Invoke a new __ instance representing all of the found child nodes.

// __.find = function (selector) {
//   var targets = []
//   this._targets.forEach(function (el) {
//     var nodes = el.querySelectorAll(selector)
//     var rgx = new RegExp('^#[a-zA-Z][a-zA-Z0-9-_]+$') // e.g. '#this-id_01'
//     if (!rgx.test(selector)) {
//       for (var i = 0, l = nodes.length; i < l; i++) {
//         if (nodes[i].nodeType === 1) { // Element nodes only
//           targets.push(nodes[i])
//         }
//       }
//     } else {
//       if (nodes[0] && nodes[0].nodeType === 1) {
//         targets.push(nodes[0])
//       }
//     }
//   }.bind(this))
//   return new __(targets)
// }


//     // $.find
//     // Apply a CSS selector query to the document or a part of it

//     $.find = function (parent, selector) {
//         var nodes = parent.querySelectorAll(selector);
//         var rgx = new RegExp( '^#[a-zA-Z][a-zA-Z0-9-_]+$' ); // e.g. '#this-id_01'
//         if (!regexp.test(selector)) {
//             return nodes;
//         } else {
//             return nodes[0] || null;
//         }
//     };



    //     /*
    //     node|array|null query( string )
    //     -------------------------------
    //     Description
    //         Retrieve one or more elements from DOM using CSS-like query.
    //     Arguments
    //         Query string.
    //     Returns
    //         Single DOM element reference if just one match.
    //         Array of DOM element references.
    //         For '#id' queries, null if no matches.
    //     Throws
    //         TypeError
    //     */
    //     query: function( s_qry ) {
    //         if ( typeof s_qry !== 'string' ) {
    //             new TypeError( 'I.Doc.query(): Expect string.' );
    //         }
    //         var _nodes = document.querySelectorAll( s_qry );
    //         var _a_found = Array.prototype.slice.call( _nodes );
    //         var _return = _a_found;
    //         if ( _a_found.length === 0 ) {
    //             //_return = null;
    //         }
    //         var regexp = new RegExp( '^#[a-zA-Z-_]+$' ); /* e.g. '#this-id' */
    //         if ( regexp.test( s_qry ) ) {
    //             if ( _a_found[ 0 ] ) {
    //                 _return = _a_found[ 0 ];
    //             } else {
    //                 _return = null;
    //             }
    //         }
    //         return _return;
    //     },
