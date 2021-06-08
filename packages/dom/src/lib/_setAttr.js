/**
 * Sets any attribute on any DOM element node.
 *
 * @param {Object} el - Target DOM element node.
 * @param {String} attr - Attribute name.
 * @param {String} val - New attribute value.
 * @returns {undefined}
 * @example
 *
 * var node = el('style')
 * setAttr(node, 'type', 'text/css')
 */
const setAttr = (el, attr, val) => {
  var xlink = /^xlink:(\w+)/.exec(attr)
  xlink && xlink[1]
    ? el.setAttributeNS('http://www.w3.org/1999/xlink', xlink[1], val)
    : el.setAttribute(attr, val)
}

export { setAttr }


// //import xxx from './xxx.js'

// /**
//  * Apply an attribute to one or more HTML elements and set its value.
//  *
//  * Unlike JavaScript's native Element.setAttribute() function,
//  * $( elements ).setAttribute() will not just change the default
//  * attribute value of the given elements, but also the corresponding
//  * element property — the current value — where applicable.
//  *
//  * Default attribute values such as value and checked may have been
//  * changed by the user. This function **will** override those user-inputted
//  * values, too.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * setAttribute('Foo Bar')
//  * // → 'fooBar'
//  */
// const setAttribute = (val) => (
//   'TODO'
// )

// export default setAttribute



    //     /*
    //     boolean setAttribute( node, string, string|boolean )
    //     ----------------------------------------------------
    //     Description
    //         Applies an attribute to a DOM element reference.
    //     Arguments
    //         DOM element reference.
    //         Attribute name.
    //         Attribute value.
    //     Returns
    //         True.
    //     */
    //     setAttribute: function( target, s_attr, sb_value ) {
    //         if ( sb_value === false ) {
    //             target.removeAttribute( s_attr );
    //             return true;
    //         }
    //         target.setAttribute( s_attr, sb_value );
    //         return true;
    //     },
