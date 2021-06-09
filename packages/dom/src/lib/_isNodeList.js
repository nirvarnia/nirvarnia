/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

/**
 * Test for a `NodeList` instance.
 *
 * @param   {*} [test=undefined] Test variable.
 * @returns {boolean}
 * @example
 *
 * TODO
 */
const isNodeList = (test) => {
  return (Object.prototype.toString.call(test) === '[object NodeList]')
}

export { isNodeList }
