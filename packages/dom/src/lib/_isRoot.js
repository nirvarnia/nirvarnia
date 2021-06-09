/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

/**
 * Test for a reference to the document's root `<html>` element.
 *
 * @param   {*} [test=undefined] Test variable.
 * @returns {boolean}
 * @example
 *
 * isRoot(window.document.documentElement)
 * // → true
 */
const isRoot = (test) => {
  return (test === window.document.documentElement)
}

export { isRoot }
