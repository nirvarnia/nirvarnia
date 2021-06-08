// //import xxx from './xxx.js'

// /**
//  * Creates a brand new HTML element from scratch.
//  *
//  * The first argument is a tag name such as 'button'. The second, optional
//  * argument is an object representing tag attributes, e.g. ``{ src: 'http...',
//  * type: 'button' }``.
//  *
//  * Returns a reference to the newly generated DOM element, which you will
//  * probably want to inject into the document somewhere.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * createElement('Foo Bar')
//  * // → 'fooBar'
//  */
// const createElement = (val) => (
//   'TODO'
// )

// export default createElement




    //     /*
    //     node createElement( string, object )
    //     ------------------------------------
    //     Description
    //         Creates a brand new DOM element.
    //     Arguments
    //         Tag name, e.g. 'button'.
    //         Object attributes: { src: '...', ... }
    //     Returns
    //         DOM element reference.
    //     */
    //     createElement: function( s_tag, attributes ) {
    //         var _el = document.createElement( s_tag );
    //         for ( var _s_attr in attributes ) {

    //             I.Doc.setAttribute( _el, _s_attr, attributes[ _s_attr ] );
    //         }
    //         return _el;
    //     },


    // // HTMLElement = __.createElement(string [, object, string])
// // Convenience method for creating new DOM elements.
// // #TODO: Does this work for embedded SVGs?

// __.createElement = function (name, attrs, html) {
//   var attr,
//     el = document.createElement(name)
//   for (attr in attrs) {
//     if (attrs.hasOwnProperty(attr)) {
//       el.setAttribute(attr, attrs[attr])
//     }
//   }
//   if (html) {
//     el.innerHTML = html
//   }
//   return el
// }
