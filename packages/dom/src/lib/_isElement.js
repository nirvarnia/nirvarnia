/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright 2020+ Kieran Potts Consultancy Ltd.
 * @license   MIT
 */

/**
 * Test for a reference to a DOM element node.
 *
 * References to text nodes and comment nodes will evaluate to `false` - as will
 * `NodeList` instances.
 *
 * @param   {*} [test=undefined] Test variable.
 * @returns {boolean}
 * @example
 *
 * TODO
 */
const isElement = (test) => {
  return !! (test && test.nodeType === 1)
}

export { isElement }
