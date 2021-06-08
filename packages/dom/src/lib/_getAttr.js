/**
 * Fetches the value of any DOM attribute on the given DOM element node. Returns
 * an empty string if the attribute does not exist or otherwise has no value.
 *
 * @param {Object} el - Target DOM element node.
 * @param {String} attr - Attribute name.
 * @returns {String}
 * @example
 *
 * getAttr(el, 'data-attr')
 */
const getAttr = (el, attr) =>
  el.getAttribute(attr) || ''

export { getAttr }
