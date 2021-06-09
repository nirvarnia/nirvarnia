//import xxxx from './_xxxx.js'

/**
 * Queues a callback function to execute when the page has finished its initial
 * rendering. If the page is already loaded, the callback function is invoked
 * immediately.
 * @param {Function} fn Callback function.
 * @return void
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

//const xxx = (augend, addend) => {
//  return augend + addend
//}

//export default xxx





//__.onLoad = function (fn) {
//  if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
//    fn()
//  } else {
//    document.addEventListener('DOMContentLoaded', fn)
//  }
//}



// //import xxx from './xxx.js'

// /**
//  * Adds a callback function to execute when the DOM has finished loading. If
//  * the DOM is already loaded, the callback function is executed immediately.
//  *
//  *     boolean = onLoad(function)
//  *
//  * Queue a callback function to run when the document's static HTML has finished
//  * loading in the browser.
//  *
//  * This is a wrapper for document.addEventListener( 'DOMContentLoaded' ),
//  * which is now supported by all target browsers including IE > 8.
//  *
//  * Callback functions will execute one after the other after the DOM for
//  * the page has been constructed. But not all resources will have finished
//  * loading. External resources, including style sheets and images, will
//  * not yet be ready. If your callback functions require those, attach
//  * them to the window.onload event instead. Use $( window ).onLoad().
//  *
//  * If the DOM is already loaded, the callback function will be run
//  * immediately.
//  *
//  * No arguments are provided to the callback function, not even a
//  * reference to the Event object.
//  *
//  * ***
//  *
//  * Runs the function immediately if the DOM is already loaded. Callback
//  * function is executed in th context of $( window.document ).
//  * DOMContentLoaded now supported by all target browsers including
//  * Internet Explorer > 8.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * onLoad('Foo Bar')
//  * // → 'fooBar'
//  */
// const onLoad = (val) => (
//   'TODO'
// )

// export default onLoad


//     // $.onLoad
//     // Queue a function to load when the document is rendered

//     $.onLoad = function (fn) {
//         if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
//             fn(); // Run the function immediately if document already rendered
//         } else {
//             document.addEventListener('DOMContentLoaded', fn);
//         }
//     };



// // Void = __.onLoad(Function)
// // Queue a callback function to execute when the page has finished its initial rendering.
// // Run the function immediately if already loaded.

// __.onLoad = function (fn) {
//   if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
//     fn()
//   } else {
//     document.addEventListener('DOMContentLoaded', fn)
//   }
// }


    //     /*
    //     boolean onLoad( function )
    //     --------------------------
    //     Description
    //         Adds an event to run when the DOM has finished loading.
    //     Arguments
    //         Callback function.
    //     Returns
    //         True on completion.
    //     Notes
    //         Runs the function immediately if the DOM is already loaded.
    //         DOMContentLoaded now supported by all target browsers including
    //         Internet Explorer > 8.
    //     */
    //     onLoad: function( f_callback ) {
    //         if ( I.Doc.ready() === true ) {
    //             f_callback.call();
    //         } else {
    //             I.Events.add( document, 'DOMContentLoaded', f_callback );
    //         }
    //         return true;
    //     },



/**
//  * Queues a callback function to execute when the page has finished its initial
//  * rendering. If the page is already loaded, the callback function is invoked
//  * immediately.
//  *
//  * @param {Function} fn Callback function.
//  * @return void
//  */

// __.onLoad = function (fn) {

//     if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
//         fn();
//     } else {
//         document.addEventListener('DOMContentLoaded', fn);
//     }

// };





/**
 * Queues a callback function to execute when the page has finished its initial
 * rendering. If the page is already loaded, the callback function is invoked
 * immediately.
 *
 * @param {Function} fn Callback function.
 * @return void
 */
__.onLoad = function (fn) {
  if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
      fn();
  } else {
      document.addEventListener('DOMContentLoaded', fn);
  }
};
