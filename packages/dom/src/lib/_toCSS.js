/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright 2020+ Kieran Potts Consultancy Ltd.
 * @license   MIT
 */

/**
 * Converts the properties of an object to a CSS string ready for injection into
 * any element's `style` attribute.
 *
 * @param {Object} obj - A plain object.
 * @returns {string} - CSS-compatible string.
 * @example
 *
 * toCSS({ color: 'red', background: 'yellow'})
 * // → "color: red; background: yellow"
 */
const toCSS = (obj) =>
  Object.keys(obj).reduce(
    (acc, prop) => acc + ' ' + prop + ': ' + obj[prop] + ';', ''
  )

export { toCSS }
