// //import xxx from './xxx.js'

// /**
//  * Description.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getFormValues('Foo Bar')
//  * // → 'fooBar'
//  */

// // This method combined with $.makeQueryString() is the equivalent
// // of jQuery's form serialize() function, which is handy for submitting
// // forms by Ajax.

// // Input controls that do not have a valid name attribute are skipped.
// // That's how it works with standard HTML form submissions. Input
// // controls with no name do not get included.

// // The values of disabled input controls are not submitted.

// // The values of file inputs cannot be fetched by JavaScript for
// // security reasons; for this reason, forms with file inputs cannot be
// // submitted via Ajax.

// // Normally, if a button has a value attribute and is used to submit
// // the form, its value will be included in the submitted form data.
// // But our value() function does not know which button, if any,
// // was used to submit the form, so all buttons are skipped. If you
// // need to submit the value of a button, you will need to add that
// // to the array returned by this function.

// // <select multiple> elements are handled correctly.

// // ***

// // Disabled input controls will return undefined for their value.

// // The values of file inputs cannot be fetched by JavaScript for
// // security reasons.

// // The values of <button> elements CAN be retrieved.

// // <select multiple> elements are handled correctly.

// // This function can't be called `value` - that's a JavaScript
// // reserved word.

// const getFormValues = (val) => (
//   'TODO'
// )

// export default getFormValues



//     // $.getFormData
//     // Capture all data from a <form> element

//     // Note: This function combined with makeQueryString() will serialize
//     // form data, ready for submission via Ajax. This function does not
//     // quite mimic standard behaviour; it adds support for array inputs
//     // by appending [] to input names. As such this function closely mimics
//     // how some server-side languages such as PHP and Rails behave.

//     ;(function () {
//         var q = {}, multipart = false;
//         function addFormData(name, value) {
//             if (name.match(/\[(.+?)\]/g)) { // Associative array
//                 if (multipart) {
//                     throw new Error('FormData fields cannot be associative arrays like "' + name + '".');
//                 }
//                 var array_name = name.match(/\w+[^\[]/g)[0];
//                 var property_name = name.match(/\[(.+?)\]/g)[0];
//                 property_name = property_name.replace(/(\[|\])/g, '');
//                 if (!q.hasOwnProperty(array_name)) {
//                    q[array_name] = {};
//                 }
//                 q[array_name][property_name] = value;
//             } else if (name.indexOf('[]') > 0) { // Indexed array
//                 name = name.split('[]')[0];
//                 if (multipart) {
//                     q.append(name + '[]', value); // q = FormData instance
//                 } else {
//                     if (q.hasOwnProperty(name)) {
//                         q[name].push(value); // Add value to existing array
//                     } else {
//                         q[name] = [value]; // Start a new array of values
//                     }
//                 }
//             } else {
//                 if (multipart) {
//                     q.append(name, value); // q = FormData instance
//                 } else {
//                     q[name] = value;
//                 }
//             }
//         }
//         $.getFormData = function (form) {
//             if (!form || form.nodeName !== 'FORM') {
//                 return;
//             }
//             q = {}; // Reset
//             multipart = false; // Reset
//             if (form.enctype === 'multipart/form-data' && FormData) {
//                 multipart = true;
//                 q = new FormData();
//             }
//             var l = form.elements.length - 1;
//             var el, name;
//             for (var i = l; i >= 0; i--) {
//                 el = form.elements[i];
//                 name = el.name;
//                 if (name === '') {
//                     continue;
//                 }
//                 if (el.disabled === true) {
//                     continue;
//                 }
//                 switch (el.nodeName.toUpperCase()) {
//                     case 'INPUT':
//                         switch (el.type) {
//                             case 'button':
//                             case 'email':
//                             case 'hidden':
//                             case 'number':
//                             case 'password':
//                             case 'reset':
//                             case 'submit':
//                             case 'tel':
//                             case 'text':
//                             case 'url':
//                                 addFormData(name, el.value);
//                                 break;
//                             case 'checkbox':
//                             case 'radio':
//                                 if (el.checked) {
//                                     addFormData(name, (el.value || true));
//                                 }
//                                 break;
//                             case 'file':
//                                 if (multipart) {
//                                     // Remove [] suffix from file name, if applicable
//                                     if (name.indexOf('[]') > 0) {
//                                         name = name.split('[]')[0];
//                                     }
//                                     // Iterate through files list:
//                                     for (var j = (el.files.length - 1); j >= 0; j--) {
//                                         addFormData(name, el.files[j]);
//                                     }
//                                 }
//                                 break;
//                             default:
//                                 // Do not support future/unknown control types
//                                 //break;
//                         }
//                         break;
//                     case 'TEXTAREA':
//                         addFormData(name, el.value);
//                         break;
//                     case 'SELECT':
//                         switch (el.type) {
//                             case 'select-one':
//                                 addFormData(name, el.value);
//                                 break;
//                             case 'select-multiple':
//                                 // Remove [] suffix from file name, if applicable
//                                 if (name.indexOf('[]') > 0) {
//                                     name = name.split('[]')[0];
//                                 }
//                                 // Compile selected values
//                                 var selval = [];
//                                 for (var j = (el.options.length - 1); j >= 0; j--) {
//                                     if (el.options[j].selected) {
//                                         selval.push(el.options[j].value);
//                                     }
//                                 }
//                                 addFormData(name, selval);
//                                 break;
//                         }
//                         break;
//                     case 'BUTTON':
//                         switch (el.type) {
//                             case 'button':
//                             case 'reset':
//                             case 'submit':
//                                 addFormData(name, el.value);
//                                 break;
//                         }
//                         break;
//                 }
//             }
//             return q;
//         };
//     }());



// // Object = __(HTMLElements).formData()
// // Capture all values from a <form> element. Returns an object, which can
// // passed to __.makeQueryString() to serialize to a URL-encoded string, ready
// // for posting via Ajax. This function does not quite mimic stanard behaviour.
// // It adds support for array input by appending '[]' to the names of input
// // controls. As such this function closely mimics how some server-side
// // languages such as PHP and Rails behave.
// // #TODO: Support nested attributes and arrays, like this library:
// // https://github.com/marioizquierdo/jquery.serializeJSON

// __.fn.formData = (function () {
//   var q = {},
//     multipart = false

//   function push(name, value) {
//     var arr_name, prop_name
//     // Associative array:
//     if (name.match(/\[(.+?)\]/g)) {
//       if (multipart) {
//         throw new Error('FormData fields cannot be associative arrays like "' + name + '".')
//       }
//       arr_name = name.match(/\w+[^\[]/g)[0]
//       prop_name = name.match(/\[(.+?)\]/g)[0]
//       prop_name = prop_name.replace(/(\[|\])/g, '')
//       if (!q.hasOwnProperty(arr_name)) {
//         q[arr_name] = {}
//       }
//       q[arr_name][prop_name] = value
//     }
//     // Indexed array:
//     else if (name.indexOf('[]') > 0) {
//       name = name.split('[]')[0]
//       if (multipart) {
//         q.append(name + '[]', value) // q = FormData instance
//       } else {
//         if (q.hasOwnProperty(name)) {
//           q[name].push(value)
//         } else {
//           q[name] = [value]
//         }
//       }
//     }
//     // Standard input:
//     else {
//       if (multipart) {
//         q.append(name, value) // q = FormData instance
//       } else {
//         q[name] = value
//       }
//     }
//   }

//   return function (form) {
//     var i, l, ctrl, name
//     if (!form || form.nodeName !== 'FORM') {
//       return
//     }
//     // Resets:
//     q = {}
//     multipart = false
//     // FormData API is not supported by Internet Explorer 9, so we cannot get
//     // information on files selected for upload in that browser.
//     if (form.enctype === 'multipart/form-data' && FormData) {
//       if (window.FormData) {
//         multipart = true
//         q = new FormData()
//       }
//     }
//     l = form.elements.length - 1
//     for (i = l; i >= 0; i--) {
//       ctrl = form.elements[i]
//       name = ctrl.name
//       if (name === '') {
//         continue
//       }
//       if (ctrl.disabled === true) {
//         continue
//       }
//       switch (ctrl.nodeName.toUpperCase()) {
//         case 'INPUT':
//           switch (ctrl.type) {
//             case 'button':
//             case 'email':
//             case 'hidden':
//             case 'number':
//             case 'password':
//             case 'reset':
//             case 'submit':
//             case 'tel':
//             case 'text':
//             case 'url':
//               push(name, ctrl.value)
//               break
//             case 'checkbox':
//             case 'radio':
//               if (ctrl.checked) {
//                 push(name, (ctrl.value || true))
//               }
//               break
//             case 'file':
//               if (multipart) {
//                 // Remove [] suffix from file name, if applicable:
//                 if (name.indexOf('[]') > 0) {
//                   name = name.split('[]')[0]
//                 }
//                 // Iterate through files list:
//                 for (var j = (ctrl.files.length - 1); j >= 0; j--) {
//                   push(name, ctrl.files[j])
//                 }
//               }
//               break
//             default:
//               // #TODO: Allow for future control types?
//               //push(name, ctrl.value)
//               break
//           }
//           break
//         case 'TEXTAREA':
//           push(name, ctrl.value)
//           break
//         case 'SELECT':
//           switch (ctrl.type) {
//             case 'select-one':
//               push(name, ctrl.value)
//               break
//             case 'select-multiple':
//               // Remove [] suffix from file name, if applicable:
//               if (name.indexOf('[]') > 0) {
//                 name = name.split('[]')[0]
//               }
//               // Compile selected values:
//               var selected = []
//               for (var jj = (ctrl.options.length - 1); jj >= 0; jj--) {
//                 if (ctrl.options[jj].selected) {
//                   selected.push(ctrl.options[jj].value);
//                 }
//               }
//               push(name, selected)
//               break
//           }
//           break
//         case 'BUTTON':
//           switch (ctrl.type) {
//             case 'button':
//             case 'reset':
//             case 'submit':
//               push(name, ctrl.value)
//               break
//           }
//           break
//       }
//     }
//     return q
//   }
// }())

// //__.fn.toObject = function() {

// //    if ( this.isForm() !== true ) {
// //        throw new TypeError( 'Expect a <form> element node' )
// //    }
// //    var _return = {}
// //    var _addInput = function ( name, value ) {
// //        var _tmp
// //        if ( _return.name ) {
// //            if ( __( _return.name ).isArray() ) {
// //                _return.name.push( value )
// //            } else {
// //                _tmp = _return.name
// //                _return.name = [ _tmp, value ]
// //            }
// //        } else {
// //            _return.name = value
// //        }
// //    }
// //    var _inputs = this._targets.elements
// //    var _input, _tag, _type
// //    for ( var _i = 0, _length = _inputs.length; _i < _length; _i++ ) {
// //        _input = _inputs[ _i ]
// //        if ( _input.disabled ) {
// //            continue
// //        }
// //        if ( ! _input.name  ||  _input.name.length < 1 ) {
// //            continue
// //        }
// //        _tag  = _input.nodeName.toLowerCase()
// //        _type = _input.type.toLowerCase()
// //        switch( _tag ) {
// //            case 'input':
// //                switch ( _type ) {
// //                    case 'checkbox': /* #TODO: handling checkboxes with "name[]"? */
// //                    case 'radio':
// //                        if ( _input.checked ) {
// //                            _addInput( _input.name, _input.value )
// //                        }
// //                        break
// //                    case 'submit':
// //                    case 'reset':
// //                    case 'button':
// //                    case 'image':
// //                    case 'file':
// //                        break
// //                    default:
// //                        _addInput( _input.name, _input.value )
// //                        break
// //                }
// //                break
// //            case 'select':
// //                if ( _input.selectedIndex > -1 ) {
// //                    for ( var _j = 0; _j < _input.options.length; _j++ ) {
// //                        if ( _input.options[ _j ].selected === true ) {
// //                            _addInput( _input.name, _input.options[ _j ].value )
// //                        }
// //                    }
// //                }
// //                break
// //            case 'textarea':
// //                _addInput( _input.name, _input.value )
// //                break
// //        }
// //    }
// //    return _return

// // ***

// //if ( this.isInput() !== true  &&  this.isButton() !== true ) {
// //    throw new TypeError( 'Expect an input or button element' )
// //}
// //if ( this._targets.disabled ) {
// //    return __( undefined )
// //}
// //var _return = undefined
// //var _input = this._targets
// //var _tag  = _input.nodeName.toLowerCase()
// //var _type = _input.type.toLowerCase()
// //switch( _tag ) {
// //    case 'input':
// //        switch ( _type ) {
// //            case 'checkbox': /* @todo: handling checkboxes with "name[]"? */
// //            case 'radio':
// //                if ( _input.checked ) {
// //                    _return = _input.value
// //                }
// //                break
// //            case 'submit':
// //            case 'reset':
// //            case 'button':
// //            case 'image':
// //            case 'file':
// //                break
// //            default:
// //                _return = _input.value
// //                break
// //        }
// //        break
// //    case 'select':
// //        if ( _input.selectedIndex > -1 ) {
// //            for ( var _j = 0; _j < _input.options.length; _j++ ) {
// //                _return = []
// //                if ( _input.options[ _j ].selected === true ) {
// //                    _return.push( _input.options[ _j ].value )
// //                }
// //            }
// //        }
// //        break
// //    case 'textarea':
// //        _return = _input.value
// //        break
// //}
// //return __( _return )

// // ***

// // Source: https://code.google.com/p/form-serialize/
// // See my version below...

// //function serialize(form) {
// //    if (!form || form.nodeName !== "FORM") {
// //            return
// //    }
// //    var i, j, q = []
// //    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
// //            // Only controls with a name get posted:
// //            if (form.elements[i].name === "") {
// //                    continue
// //            }
// //            // Disabled controls don't get posted:
// //            if (form.elements[i].disabled === true) {
// //                continue
// //            }
// //            switch (form.elements[i].nodeName) {
// //            case 'INPUT':
// //                    switch (form.elements[i].type) {
// //                    case 'text':
// //                    case 'hidden':
// //                    case 'password':
// //                    case 'button':
// //                    case 'reset':
// //                    case 'submit':
// //                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value))
// //                            break
// //                    case 'checkbox':
// //                    case 'radio':
// //                            if (form.elements[i].checked) {
// //                                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value))
// //                            }
// //                            break
// //                    case 'file':
// //                            break
// //                    }
// //                    break
// //            case 'TEXTAREA':
// //                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value))
// //                    break
// //            case 'SELECT':
// //                    switch (form.elements[i].type) {
// //                    case 'select-one':
// //                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value))
// //                            break
// //                    case 'select-multiple':
// //                            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
// //                                    if (form.elements[i].options[j].selected) {
// //                                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value))
// //                                    }
// //                            }
// //                            break
// //                    }
// //                    break
// //            case 'BUTTON':
// //                    switch (form.elements[i].type) {
// //                    case 'reset':
// //                    case 'submit':
// //                    case 'button':
// //                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value))
// //                            break
// //                    }
// //                    break
// //            }
// //    }
// //    return q.join("&")
// //}

// // ****

// // My version:

// //function serialize(form) {
// //    if (!form || form.nodeName !== "FORM") {
// //        return
// //    }
// //    var i, j, name, q = {}
// //    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
// //        name = form.elements[i].name
// //        if (name === "") {
// //            continue
// //        }
// //        switch (form.elements[i].nodeName) {
// //            case 'INPUT':
// //                switch (form.elements[i].type) {
// //                    case 'text':
// //                    case 'email':
// //                    case 'url':
// //                    case 'tel':
// //                    case 'hidden':
// //                    case 'password':
// //                    case 'button':
// //                    case 'reset':
// //                    case 'submit':
// //                        q[name] = encodeURIComponent(form.elements[i].value)
// //                        break
// //                    case 'checkbox':
// //                    case 'radio':
// //                        if (form.elements[i].checked) {
// //                            q[name] = encodeURIComponent(form.elements[i].value)
// //                        }
// //                        break
// //                    case 'file':
// //                        break
// //                }
// //                break
// //            case 'TEXTAREA':
// //                q[name] = encodeURIComponent(form.elements[i].value)
// //                break
// //            case 'SELECT':
// //                switch (form.elements[i].type) {
// //                    case 'select-one':
// //                        q[name] = encodeURIComponent(form.elements[i].value)
// //                        break
// //                    case 'select-multiple':
// //                        q[name] = []
// //                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
// //                            if (form.elements[i].options[j].selected) {
// //                                q[name].push(encodeURIComponent(form.elements[i].options[j].value))
// //                            }
// //                        }
// //                        break
// //                }
// //                break
// //            case 'BUTTON':
// //                switch (form.elements[i].type) {
// //                    case 'reset':
// //                    case 'submit':
// //                    case 'button':
// //                        q[name] = encodeURIComponent(form.elements[i].value)
// //                        break
// //                }
// //                break
// //        }
// //    }
// //    //return q.join('&')
// //    return q
// //}

// //}

// //__.fn.toQueryString = function() {

// //var post_data = serialize(this._form)

// //var post = []
// //for (var name in post_data) {
// //    if (post_data.hasOwnProperty(name)) {
// //        if (Array.isArray(post_data[name])) {
// //            post_data[name].forEach(function (item) {
// //                post.push(name + "=" + item)
// //            })
// //        } else {
// //            post.push(name + "=" + post_data[name])
// //        }
// //    }
// //}

// //xhr.send(post.join('&'))

// //}
