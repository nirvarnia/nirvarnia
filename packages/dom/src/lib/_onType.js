// //import xxx from './xxx.js'

// /**
//  * Set callback functions to run whenever something is typed into an input
//  * control, a contenteditable zone, or while an element has focus.
//  *
//  * See onKey.js.
//  *
//  * IMPORTANT! This function should NOT be used to check for control keys
//  * that do not output a printable alphanumeric character. Due to
//  * inconsistencies in how browsers report control keys via keypress events,
//  * onType is made not to report any control keys at all.
//  *
//  * There are two exceptions: Spacebar and Enter. This function CAN be used
//  * to listen to those. They will be reported as " " and "Enter" respectively.
//  * Even though these are control characters, they also produce printable
//  * output.
//  *
//  * The Tab key is another control key that produces printable output.
//  * Unfortunately this function will NOT report Tab key presses. The reason
//  * is that Internet Explorer and WebKit browsers do not fire keypress
//  * events when the Tab key is pressed (Firefox does, though it does not
//  * assign a charCode value). So, for the sake of consistency, reporting
//  * of the Tab key is disabled entirely via onType. Use onKey to listen
//  * for that key.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * onType('Foo Bar')
//  * // → 'fooBar'
//  */
// const onType = (val) => (
//   'TODO'
// )

// export default onType



// // this = __(HTMLElements).Xxxx()

// //__.fn.onType = function(fn, fn_args) {
// //    var fn_args = fn_args || []
// //    var forEach = function (element) {
// //        element.addEventListener('keypress', function(event) {
// //            /* As of March 2013, the new standard for keystroke
// //            detection, "KeyboardEvent.key", is supported only by
// //            Firefox 23+ and Internet Explorer 9+. It works great
// //            for detecting printable characters. For Chrome and Safari
// //            we could fallback to "KeyboardEvent.keyIdentifier", which
// //            was briefly defined in an old draft of DOM Level 3 Events.
// //            It returns Unicode code points (e.g. U+0041) for most
// //            alphanumeric keys. But it does not differentiate case, and
// //            sometimes it will return odd named keys, such as "Help"
// //            when "/" is typed on English language keyboards. No matter.
// //            We can fallback to the "which" and "charCode" properties
// //            for all other browsers. */
// //            var char = 'Unidentified'
// //            var char_code = event.charCode || event.charCode
// //            if (char_code > 31 || char_code === 13) {
// //                if (event.key) {
// //                    char = event.key
// //                    /* Spacebar is handled inconsistently on keypress events.
// //                    Firefox reports it as " ", while Internet Explorer
// //                    reports the key as "Spacebar". Firefox's approach is in
// //                    keeping with the specification, which states that "the
// //                    space or spacebar key is encoded as ' '"
// //                    (http://www.w3.org/TR/DOM-Level-3-Events-key/#keys-whitespace).
// //                    We'll normalise things according to the specification. */
// //                    if (char === 'Spacebar') { char = ' ' }
// //                } else {
// //                    /* Make reporting of carriage returns (\r) and
// //                    spaces consistent with output from "key" property. */
// //                    if (char_code === 13) {
// //                        char = 'Enter'
// //                    }
// //                    //else if ( char_code === 32 ) {
// //                    //    char = ' '
// //                    //}
// //                    else {
// //                        char = String.fromCharCode(char_code)
// //                    }
// //                }
// //            }
// //            /* Run the callback function. Prevent the key's default
// //            action if the callback returns false. */
// //            fn_args.unshift(char)
// //            var rtn = fn.apply(this, fn_args)
// //            if (rtn === false) {
// //                event.preventDefault()
// //            }
// //            return rtn
// //        }.bind(this), false)
// //    }
// //    this._targets.forEach(forEach.bind(this))
// //    return this
// //}

