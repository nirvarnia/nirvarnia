/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

/**
 * Test for a reference to the main `document` for the current web page.
 *
 * @param   {*} [test=undefined] Test variable.
 * @returns {boolean}
 * @example
 *
 * isDocument(window.document)
 * // → true
 */
const isDocument = (test) => {
  return (test === window.document)
}

export { isDocument }
