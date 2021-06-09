/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

/**
 * Test for a reference to an input control: `<select>`, `<textarea>`, `<input>`
 * or even a `<button>` - any element that can submit a value with a `<form>`.
 *
 * @param   {*} [test=undefined] Test variable.
 * @returns {boolean}
 * @example
 *
 * TODO
 */
const isInput = (test) => {
  if (!(test && test.nodeType === 1)) return false

  let name = test.nodeName.toUpperCase()
  if (name === 'BUTTON') return true
  if (name === 'INPUT') return true
  if (name === 'SELECT') return true
  if (name === 'TEXTAREA') return true

  return false
}

export { isInput }
