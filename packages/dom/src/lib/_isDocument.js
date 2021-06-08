/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright 2020+ Kieran Potts Consultancy Ltd.
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
