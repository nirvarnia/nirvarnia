// //import xxx from './xxx.js'

// /**
//  * Change the value of a CSS property on or more HTML elements.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * setStyle('Foo Bar')
//  * // → 'fooBar'
//  */
// const setStyle = (val) => (
//   'TODO'
// )

// export default setStyle


// //;(function() {

// //    function makeCssProperty(name) {
// //        // Converts DOM-style property (fontSize) to CSS (font-size)
// //        var rtn = name.replace(
// //            /[A-Z]/g,
// //            function(word) {
// //                return '-' + word.toLowerCase()
// //            }
// //        )
// //        return rtn
// //    }

// //    __.fn.setStyle = function(property, value) {
// //        if (property === 'float') {
// //            if (property.style.styleFloat !== undefined) {
// //                property = 'styleFloat'
// //            } else {
// //                property = 'cssFloat'
// //            }
// //        } else {
// //            property = makeCssProperty(property)
// //        }
// //        this._targets.forEach(function(el) {
// //            el.style[property] = value
// //        })
// //        return this
// //    }

// //}())



    //     /*
    //     boolean setStyle( node, string, string )
    //     ----------------------------------------
    //     Description
    //         Updates the style of a CSS property on a given DOM element.
    //     Arguments
    //         DOM node reference.
    //         CSS style. 'font-size' and 'fontSize' styles both OK.
    //         Property value.
    //     Returns
    //         True.
    //     */
    //     setStyle: function( target, s_property, s_value ) {
    //         if ( s_property === 'float' ) {
    //             if ( s_property.style.styleFloat !== undefined ) {
    //                 s_property = 'styleFloat';
    //             } else {
    //                 s_property = 'cssFloat';
    //             }
    //         } else {
    //             s_property = I.Doc.makeCssProperty( s_property );
    //         }
    //         target.style[ s_property ] = s_value;
    //         return true;
    //     },


// //import xxx from './xxx.js'

// /**
//  * Get the value of one or more CSS properties, as applied to an HTML element.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getStyle('Foo Bar')
//  * // → 'fooBar'
//  */
// const getStyle = (val) => (
//   'TODO'
// )

// export default getStyle



    //     /*
    //     string getStyle( node, string )
    //     -------------------------------
    //     Description
    //         Retrieves rendered value of a single style property of an HTML element.
    //     Arguments
    //         DOM node reference.
    //         CSS style. 'font-size' or 'fontSize' styles both OK.
    //     Returns
    //         Value as string.
    //     Notes
    //         ``currentStyle`` fallback for IE < 9 deprecated.
    //         ``float`` is a reserved word in JavaScript, so the ``float`` property
    //         is called ``cssFloat`` except in some versions of Internet Explorer
    //         and Opera where it is called ``styleFloat``.
    //     */
    //     getStyle: function( target, s_property ) {
    //         var _s_return = '';
    //         if ( s_property === 'float' ) {
    //             if ( s_property.style.styleFloat !== undefined ) {
    //                 s_property = 'styleFloat';
    //             } else {
    //                 s_property = 'cssFloat';
    //             }
    //         } else {
    //             s_property = I.Doc.makeCssProperty( s_property );
    //         }
    //         if ( target.style[ s_property ] ) {
    //             _s_return = target.style[ s_property ]
    //         } else {
    //             var _style = window.getComputedStyle( target, null );
    //             _s_return = _style.getPropertyValue( s_property )
    //         }
    //         return _s_return;
    //     },




// // this = __(HTMLElements).Xxxx()

// //__.fn.getStyle = function() {

// //    ``currentStyle`` fallback for IE < 9 deprecated.
// //    ``float`` is a reserved word in JavaScript, so the ``float`` property
// //    is called ``cssFloat`` except in some versions of Internet Explorer
// //    and Opera where it is called ``styleFloat``.

// //    var _s_return = ''
// //    if ( s_property === 'float' ) {
// //        if ( s_property.style.styleFloat !== undefined ) {
// //            s_property = 'styleFloat'
// //        } else {
// //            s_property = 'cssFloat'
// //        }
// //    } else {
// //        s_property = I.Doc.makeCssProperty( s_property )
// //    }
// //    if ( target.style[ s_property ] ) {
// //        _s_return = target.style[ s_property ]
// //    } else {
// //        var _style = window.getComputedStyle( target, null )
// //        _s_return = _style.getPropertyValue( s_property )
// //    }
// //    return _s_return

// //    ***

// //makeDomProperty: function( s_name ) {
// //    Converts a CSS property (e.g. font-size) to DOM-style (fontSize).
// //    var _return = s_name.replace(
// //          /\-[a-z]/g,
// //          function( s_word ) {
// //              return s_word.charAt( 1 ).toUpperCase()
// //          }
// //    )
// //    return _return
// //}

// //    if ( this.isElement() !== true ) {
// //        throw new TypeError( 'Expect DOM element node' )
// //    }
// //    property = __( property )
// //    if ( property.isString() !== true ) {
// //        throw new TypeError( 'Expect a CSS property name' )
// //    }
// //    if ( property.value === 'float' ) {
// //        if ( property.value.style.styleFloat !== undefined ) {
// //            property.value = 'styleFloat'
// //        } else {
// //            property.value = 'cssFloat'
// //        }
// //    } else {
// //        property.dashDelimited()
// //    }
// //    value = __( value )
// //    if ( value.isString() !== true  &&  value.isUndefined() !== true ) {
// //        throw new TypeError( 'Expect string or undefined' )
// //    }
// //    var _return = this
// //    if ( value.isString() ) {
// //        this._targets.style[ property.value ] = value.value
// //    } else {
// //        if ( this._targets.style[ property.value ] ) {
// //            _return = this._targets.style[ property.value ]
// //        }
// //        else {
// //            var _style = window.getComputedStyle( this._targets, null )
// //            _return = _style.getPropertyValue( property.value )
// //        }
// //    }
// //    return _return

// //}
