/**
 * TODO xxxxx.
 *
 * @see       {@link https://nirvarnia.com/|Nirvarnia}
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

/**
 * Checks if a given object is a DOM node that represents an SVG tag, or part of
 * an SVG graphic.
 *
 * @param {*} test - Any value to test.
 * @returns {Boolean}
 * @example
 *
 * isSvg('<svg>...</svg>')
 * // → false
 */
const isSvg = (test) => {
  var owner = test.ownerSVGElement
  return !!owner || owner === null
}

export { isSvg }
