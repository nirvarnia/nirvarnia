/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright 2020+ Kieran Potts Consultancy Ltd.
 * @license   MIT
 */

/**
 * Test for a reference to a `<form>` element.
 *
 * @param   {*} [test=undefined] Test variable.
 * @returns {boolean}
 * @example
 *
 * TODO
 */
const isForm = (test) => {
  if (!(test && test.nodeType === 1)) return false
  if (test.nodeName.toUpperCase() === 'FORM') return true
  return false
}

export { isForm }
