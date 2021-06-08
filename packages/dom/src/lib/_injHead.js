/**
 * Injects a DOM element node into the document's `<head>` section.
 *
 * @param {Object} el - The DOM element node to move.
 * @returns {undefined}
 * @example
 *
 * var node = el('style')
 * injHead(node)
 */
const injHead = (el) =>
  document.head.appendChild(el)

export { injHead }
