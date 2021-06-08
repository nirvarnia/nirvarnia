//import xxx from './xxx.js'

/**
 * Check if an element is visible within the viewport.
 *
 * @param {HTMLElement} el DOM element node.
 * @returns {boolean}
 * @example
 *
 * // TODO
 */
const isInViewport = (el) => {
  const distance = el.getBoundingClientRect()
  return {
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  }
}

export default isInViewport