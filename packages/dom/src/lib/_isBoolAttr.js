import bools from './boolAttrs'

/**
 * Checks if an attribute, referenced by its name, is a boolean attribute.
 *
 * @param {String} attr - Name of the attribute.
 * @returns {Boolean}
 * @example
 *
 * isBoolAttr('disabled')
 * // → true
 *
 * isBoolAttr('style')
 * // → false
 */
const isBoolAttr = (attr) =>
  new RegExp('/^(?:' + bools.join('|') + ')$/').test(attr)

export { isBoolAttr }
