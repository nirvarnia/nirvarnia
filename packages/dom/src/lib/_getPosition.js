// //import xxx from './xxx.js'

// /**
//  * Get the distance in pixels of an element from the top-left corner of
//  * the document.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getPosition('Foo Bar')
//  * // → 'fooBar'
//  */
// const getPosition = (val) => (
//   'TODO'
// )

// export default getPosition


//     // $.getPosition
//     // Get the coordinates of an element from top-left corner of document

//     $.getPosition = function (el) {
//         var output = { top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 };
//         var target = el;
//         output.width = target.offsetWidth;
//         output.height = target.offsetHeight;
//         while (target) {
//             output.top = output.top + target.offsetTop;
//             output.left = output.left + target.offsetLeft;
//             target = target.offsetParent;
//         }
//         output.bottom = output.top + output.height;
//         output.right = output.left + output.width;
//         return output;
//     };


// // ***

// // this = __(HTMLElements).Xxxx()

// //__.fn.getPosition = function() {
// //    /* #TODO: This method of getting the scroll coordinates of an
// //    element has been reported as producing inconsistent results from
// //    one browser to another. This needs extensive testing. Also, we
// //    might be able to do this better with HTMLElement.getBoundingClientRect.
// //    Ref: http://javascript.info/tutorial/coordinates */
// //    /* For convenience, we'll also return the dimensions -- width and
// //    height -- of the element. */
// //    var output = { top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }
// //    if ( this._targets.length > 1 ) {
// //        throw new Error( 'Interface.Elements.getPosition() requires a single element.' )
// //    }
// //    var target = this._targets[0]
// //    output.width = target.offsetWidth
// //    output.height = target.offsetHeight
// //    while ( target ) {
// //        output.top = output.top + parseInt( target.offsetTop )
// //        output.left = output.left + parseInt( target.offsetLeft )
// //        target = target.offsetParent
// //    }
// //    output.bottom = output.top + output.height
// //    output.right = output.left + output.width
// //    return output
// //}


