// //import xxx from './xxx.js'

// /**
//  * Get the value of a particular attribute on a particular element.
//  *
//  * Some browsers return an empty string instead of null if the requested
//  * attribute does not exist. This function compensates for that. It
//  * returns null if the attribute does not exist, an empty string if it
//  * does exist but has no explicit value.
//  *
//  * Numeric values are converted to integers.
//  *
//  * Boolean attributes are converted to boolean true/false values.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getAttribute('Foo Bar')
//  * // → 'fooBar'
//  */
// const getAttribute = (val) => (
//   'TODO'
// )

// export default getAttribute




//   // getAttr, setAttr, removeAttr:

//   ; (function () {

//     // Most attributes — id, style, title, spellcheck, etc. — have
//     // 1:1 mapping to their corresponding DOM properties. The 'src' attribute
//     // becomes the 'src' property, for example. This object maps attributes
//     // to their equivalent DOM properties where there is not a 1:1 mapping.

//     var map_attrs_props = {
//       'accept-charset': 'acceptCharset',
//       'accesskey': 'accessKey',
//       'allowfullscreen': 'allowFullScreen',
//       'autocomplete': 'autoComplete',
//       'autofocus': 'autoFocus',
//       'autoplay': 'autoPlay',
//       'charset': 'charSet',
//       'class': 'className',
//       'colspan': 'colSpan',
//       'contenteditable': 'contentEditable',
//       'contextmenu': 'contextMenu',
//       'crossorigin': 'crossOrigin',
//       'datetime': 'dateTime',
//       'enctype': 'encType',
//       'for': 'htmlFor',
//       'formaction': 'formAction',
//       'formenctype': 'formEncType',
//       'formmethod': 'formMethod',
//       'formnovalidate': 'formNoValidate',
//       'formtarget': 'formTarget',
//       'hreflang': 'hrefLang',
//       'httpequiv': 'httpEquiv',
//       'maxlength': 'maxLength',
//       'mediagroup': 'mediaGroup',
//       'novalidate': 'noValidate',
//       'readonly': 'readOnly',
//       'rowspan': 'rowSpan',
//       'spellcheck': 'spellCheck',
//       'srcdoc': 'srcDoc',
//       'srcset': 'srcSet',
//       'tabindex': 'tabIndex',
//       'usemap': 'useMap',
//       // Microformats:
//       'itemprop': 'itemProp',
//       'itemscope': 'itemScope',
//       'itemtype': 'itemType',
//       // Non-standard (Mobile Safari):
//       'autocapitalize': 'autoCapitalize',
//       'autocorrect': 'autoCorrect',
//       // Obsolete:
//       'allowtransparency': 'allowTransparency',
//       'cellpadding': 'cellPadding',
//       'cellspacing': 'cellSpacing',
//       'classid': 'classID',
//       'frameborder': 'frameBorder',
//       'marginheight': 'marginHeight',
//       'marginwidth': 'marginWidth',
//     }

//     // A list of true boolean attributes (standard/non-obsolete only):

//     var boolean_attrs = [
//       'allowfullscreen',
//       'async',
//       'autofocus',
//       'autoplay',
//       'checked',
//       'controls',
//       'default', // <tracK>
//       'defer',
//       'disabled',
//       'formnovalidate',
//       'hidden',
//       'ismap',
//       'itemscope',
//       'loop',
//       'mulitple',
//       'muted',
//       'noresize',
//       'novalidate',
//       'open',
//       'readonly',
//       'required',
//       'reversed',
//       'seamless',
//       'selected',
//       'sortable',
//       'typemustmatch'
//     ]

//     // String|Boolean|Null = __(HTMLElements).getAttr(String)
//     // Fetch an attribute value from the first HTMLElement in the collection.
//     // This method will actually get the element's corresponding property,
//     // if it has one, which will be more up-to-date.

//     __.fn.getAttr = function (attr) {
//       var out = null,
//         prop
//       if (this._targets[0]) {
//         prop = map_attrs_props[attr] || attr
//         if (this._targets[0][prop] !== undefined) {
//           out = this._targets[0][prop]
//         } else {
//           out = this._targets[0].getAttribute(attr)
//           // Normalize:
//           if (out === '') {
//             out = null
//           } else if (out.toLowerCase() === 'true') {
//             out = true
//           } else if (out.toLowerCase() === 'false') {
//             out = false
//           }
//         }
//       }
//       return out
//     }

//     // String|Boolean|Null = __(HTMLElements).setAttr(String, String|Boolean)
//     // Set an attribute value on all HTMLElements in the collection. Also
//     // update the elements' corresponding properties.

//     __.fn.setAttr = function (attr, val) {
//       var prop = map_attrs_props[attr] || attr,
//         is_bool = false
//       if (boolean_attrs.indexOf(attr) > -1) {
//         is_bool = true
//         if (val.toLowerCase() === 'true') {
//           val = true
//         } else if (val.toLowerCase() === 'false') {
//           val = false
//         }
//       }
//       this._targets.forEach(function (el) {
//         if (is_bool === true) {
//           if (val === false) {
//             el.removeAttribute(attr)
//           } else {
//             el.setAttribute(attr, attr)
//           }
//         } else {
//           // Special cases - don't try to correct for special cases
//           // any more. There are just too many variations, e.g. what
//           // about all those ARIA attributes, like aria-selected="true".
//           // New attributes are getting added all the time. It is up to
//           // the user to provide correct values!
//           //if (attr === 'contenteditable' || attr === 'spellcheck' || attr === 'draggable') {
//           //    if (val === true) {
//           //        val = 'true'
//           //    } else if (val === false) {
//           //        val = 'false'
//           //    }
//           //} else if (attr === 'autocomplete') {
//           //    if (val === true || val.toLowerCase() === 'true') {
//           //        val = 'on'
//           //    } else if (val === false || val.toLowerCase() === 'false') {
//           //        val = 'off'
//           //    }
//           //}
//           el.setAttribute(attr, val)
//         }
//         if (el.hasOwnProperty(prop)) {
//           el.prop = val
//         }
//       })
//       return this
//     }

//     // String|Boolean|Null = __(HTMLElements).removeAttr(String)
//     // Delete an attribute from all elements in the collection, and reset
//     // any corresponding properties.

//     __.fn.removeAttr = function (attr) {
//       var prop = map_attrs_props[attr] || attr,
//         is_bool = false
//       if (boolean_attrs.indexOf(attr) > -1) {
//         is_bool = true
//       }
//       this._targets.forEach(function (el) {
//         el.removeAttribute(attr)
//         if (el.hasOwnProperty(prop)) {
//           if (is_bool === true) {
//             el.prop = false
//           } else {
//             el.prop = undefined
//           }
//         }
//       })
//       return this
//     }

//   }())

// // this = __(HTMLElements).Xxxx()

// //__.fn.hasAttribute = function() {}




    //     /*
    //     string|null getAttribute( node, string )
    //     ----------------------------------------
    //     Description
    //         Fetches an attribute value from a DOM element.
    //     Arguments
    //         DOM node.
    //         Attribute name.
    //     Returns
    //         Attribute value as string.
    //         Null, if attribute does not exist on DOM element.
    //     Notes
    //         Some browsers return an empty string instead of null if the
    //         requested attribute does not exist.
    //     */
    //     getAttribute: function( target, s_attribute ) {
    //         var _return = target.getAttribute( s_attribute );
    //         if ( _return === '' ) {
    //             _return = null;
    //         }
    //         return _return;
    //     },
