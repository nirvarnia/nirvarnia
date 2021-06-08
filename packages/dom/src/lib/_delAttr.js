/**
 * Removes an HTML attribute from a DOM element node.
 *
 * @param {Object} el - Target DOM element node.
 * @param {String} attr - Name of the DOM property to remove.
 * @returns {undefined}
 * @example
 *
 * delAttr(el, 'data-attr')
 */
const delAttr = (el, attr) =>
  el.removeAttribute(attr)

export { delAttr }
