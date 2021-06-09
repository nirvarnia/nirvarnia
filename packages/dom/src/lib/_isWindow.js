/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

/**
 * Test for a reference to the global `window` object.
 *
 * @param   {*} [test=undefined] Test variable.
 * @returns {boolean}
 * @example
 *
 * isWindow(window)
 * // → true
 */
const isWindow = (test) => {
  let name = Object.prototype.toString.call(test)

  if (name === '[object global]') return true    // Chrome
  if (name === '[object Window]') return true    // Firefox/Opera/IE9
  if (name === '[object DOMWindow]') return true // Safari

  return false
}

export { isWindow }
