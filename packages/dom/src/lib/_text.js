/**
 * Creates a document text node.
 *
 * @param {String} [content=''] - Inner text content.
 * @returns {Object} - New `Text` instance.
 * @example
 *
 * text('Hello World')
 */
const text = (content) =>
  document.createTextNode(content || '')

export { text }


// //import xxx from './xxx.js'

// /**
//  * Changes the inner text value of one or more HTML elements.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * setText('Foo Bar')
//  * // → 'fooBar'
//  */
// const setText = (val) => (
//   'TODO'
// )

// export default setText



    //     /*
    //     boolean setText( node, string )
    //     -------------------------------
    //     Description
    //         Sets the text value of a given DOM element.
    //     Argument
    //         DOM node reference.
    //         Text string.
    //     Returns
    //         True on successful completion.
    //     Notes
    //         No fallback to ``innerText`` for IE < 9.
    //     */
    //     setText: function( target, a_s_text ) {
    //         target.textContent = a_s_text;
    //         return true;
    //     },


// //__.fn.setText = function(text) {
// //    if (!__.isString(text)) {
// //        throw new TypeError('Expect string')
// //    }
// //    this._targets.forEach(function(el) {
// //        el.textContent = text
// //    })
// //    return this
// //}


// //import xxx from './xxx.js'

// /**
//  * Fetches the text value of a given DOM element.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getText('Foo Bar')
//  * // → 'fooBar'
//  */
// const getText = (val) => (
//   'TODO'
// )

// export default getText



    //     /*
    //     string getText( node )
    //     ----------------------
    //     Description
    //         Gets the text value of a given DOM element.
    //     Arguments
    //         DOM element reference.
    //     Returns
    //         String.
    //     Notes
    //         No fallback to ``innerText`` for IE < 9.
    //     */
    //     getText: function( target ) {
    //         return target.textContent;
    //     },


    // // this = __(HTMLElements).Xxxx()

// //__.fn.getText = function() {
// //    if (this._targets.length > 1) {
// //        throw new Error('Expect a reference to a single DOM element node')
// //    }
// //    //return new __.String( this._targets[0].textContent )
// //    return this._targets[0].textContent
// //}


