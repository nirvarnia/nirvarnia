/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

/**
 * Test for a reference to a DOM element node is either a `<button>` control, or
 * an `<input>` with a `type` attribute that matches "button", "submit", "reset"
 * or "image".
 *
 * @param   {*} [test=undefined] Test variable.
 * @returns {boolean}
 * @example
 *
 * TODO
 */
const isButton = (test) => {
  if (!(test && test.nodeType === 1)) return false

  let name = test.nodeName.toUpperCase()
  if (name === 'BUTTON') return true
  if (name === 'INPUT') {

    let type = test.type.toUpperCase()
    if (type === 'BUTTON') return true
    if (type === 'SUBMIT') return true
    if (type === 'RESET') return true
    if (type === 'IMAGE') return true
  }

  return false
}

export { isButton }
