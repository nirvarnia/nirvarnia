// //import xxx from './xxx.js'

// /**
//  * Set callback functions to run whenever the mouse pointer is hovered over some
//  * HTML elements.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * onHover('Foo Bar')
//  * // → 'fooBar'
//  */
// const onHover = (val) => (
//   'TODO'
// )

// export default onHover




// // this = __(HTMLElements).Xxxx()

// //__.fn.onHover = function() {

// /* If each element has no children, use mouseover. But if each
// element does have children, simulate IE's mouseenter, which is not
// standardised but has only recently been added to other browsers,
// and still doesn't work in Safari. */

// //function doSomething(e) {
// //    if (!e) var e = window.event
// //    var tg = (window.event) ? e.srcElement : e.target
// //    if (tg.nodeName != 'DIV') return
// //    var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement
// //    while (reltg != tg && reltg.nodeName != 'BODY')
// //        reltg= reltg.parentNode
// //    if (reltg== tg) return
// //    // Mouseout took place when mouse actually left layer
// //    // Handle event
// //}

// /*

// Explanation:

// First get the event target, ie. the element the mouse moved out of. If the
// target is not the DIV (layer), end the function immediately, since the mouse
// has certainly not left the layer.

// If the target is the layer, we're still not sure if the mouse left the layer
// or entered a link within the layer. Therefore we're going to check the
// relatedTarget/toElement of the event, ie. the element the mouse moved to.

// We read out this element, and then we're going to move upwards through the
// DOM tree until we either encounter the target of the event (ie. the DIV),
// or the body element.

// If we encounter the target the mouse moves towards a child element of the
// layer, so the mouse has not actually left the layer. We stop the function.

// When the function has survived all these checks we're certain that the mouse
// has actually left the layer and we can take appropriate action (usually
// making the layer invisible).

// */

// //}

// // this = __(HTMLElements).Xxxx()

// //__.fn.onHoverOut = function() {}


