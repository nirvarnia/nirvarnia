/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright 2020+ Kieran Potts Consultancy Ltd.
 * @license   MIT
 */

/**
 * Test for a reference to the `<body>` element of the main document.
 *
 * @param   {*} [test=undefined] Test variable.
 * @returns {boolean}
 * @example
 *
 * isBody(window.document.body)
 * // → true
 *
 * isBody(document.createElement('body'))
 * // → false
 */
const isBody = (test) => {
  return (test === window.document.body)
}

export { isBody }
