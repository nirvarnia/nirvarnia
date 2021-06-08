// //import xxx from './xxx.js'

// /**
//  * Injects a DOM node into an existing element node as its last child.
//  *
//  * The first argument is the node to add. The second argument is the
//  * reference DOM element.
//  *
//  * Returns ``true`` or ``false``, depending on the outcome.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * injectBottom('Foo Bar')
//  * // → 'fooBar'
//  */
// const injectBottom = (val) => (
//   'TODO'
// )

// export default injectBottom



// // this = __(HTMLElements).Xxxx()

// //__.fn.injectBottom = function() {

// //    if ( this.isElement() !== true ) {
// //        if ( this.isString() !== true ) {
// //            throw new TypeError( 'Expect DOM element node or HTML string' )
// //        }
// //    }

// //    target = __( target )

// //    if ( target.isElement() !== true ) {
// //        throw new TypeError( 'Expect DOM element node' )
// //    }

// //    if ( this.isString() === true ) {
// //        target.insertAdjacentHTML( 'beforeend', this._targets )
// //    }
// //    else if ( this.isElement() === true ) {
// //        target.appendChild( this._targets )
// //    }

// //    return this

// // ***

// //    var _result = false

// //    /* appendChild() doesn't give us any feedback as to whether the
// //    operation was successful or not. So we will first check that
// //    target is an element node. */

// //    if ( target.nodeType === 1 ) {

// //        target.appendChild( el )
// //        _result = true

// //    }

// //    return _result

// //}



    //     /*
    //     boolean injectBottom( node|string, node )
    //     -----------------------------------------
    //     Description
    //         Injects a DOM element into another as its last child.
    //     Arguments
    //         DOM element to add, or HTML string.
    //         Reference DOM element.
    //     Returns
    //         True on completion, false on error.
    //     */
    //     injectBottom: function( el, target ) {
    //         var _result = false;
    //         if ( toString.call( el ) === '[object String]' ) {
    //             target.insertAdjacentHTML( 'beforeend', el );
    //             _result = true;
    //         } else {
    //             /* appendChild() doesn't give us any feedback as to whether the
    //             operation was successful or not. So we will first check that
    //             target is an element node. */
    //             if ( target.nodeType === 1 ) {
    //                 target.appendChild( el );
    //                 _result = true;
    //             }
    //         }
    //         return _result;
    //     },
