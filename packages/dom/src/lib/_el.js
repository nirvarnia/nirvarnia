/**
 * Makes a DOM element node of any type, including SVGs.
 *
 * @param {String} name - Name of the DOM node to create.
 * @returns {Object} - The generated DOM node instance.
 * @example
 *
 * el('p')
 * // → HTMLElement
 */
const el = (name) =>
  name === 'svg'
    ? document.createElementNS('http://www.w3.org/2000/svg', name)
    : document.createElement(name)

export { el }
