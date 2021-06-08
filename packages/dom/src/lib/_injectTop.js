// //import xxx from './xxx.js'

// /**
//  * Injects a DOM node — of any type — inside another. The node is positioned
//  * at the very top of its container node, before any other nodes that may
//  * already exist there.
//  *
//  * The first argument is the node to inject into the document. The second
//  * argument is the reference node, which will become the parent of the new
//  * one. The reference node must itself already be positioned in the document.
//  *
//  * Returns ``true`` or ``false``, depending on whether the operation was
//  * successful.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * injectTop('Foo Bar')
//  * // → 'fooBar'
//  */
// const injectTop = (val) => (
//   'TODO'
// )

// export default injectTop




// // this = __(HTMLElements).Xxxx()

// //__.fn.injectTop = function() {

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
// //        target.insertAdjacentHTML( 'afterbegin', this._targets )
// //    }
// //    else if ( this.isElement() === true ) {

// //        var _child = target.firstChild()

// //        if ( _child.isDefined() === true ) {
// //            target.value.insertBefore( this._targets, _child )
// //        } else {
// //            target.value.appendChild( this._targets )
// //        }

// //    }

// //    return this

// // ***

// //    var _child = I.Doc.getFirstChild( target )
// //    var _result = false

// //    if ( _child ) {

// //        target.insertBefore( el, _child )
// //        _result = true

// //    } else {

// //        /* Parent element has no children, so just appendChild.
// //        appendChild() doesn't give us any feedback as to whether the
// //        operation was successful or not. So we will first check that
// //        target is an element node. */

// //        if ( target.nodeType === 1 ) {

// //            target.appendChild( el )
// //            _result = true

// //        }

// //    }


// //    return _result

// //}



    //     /*
    //     boolean injectTop( node|string, node )
    //     --------------------------------------
    //     Description
    //         Injects a DOM element inside another, before all existing children.
    //     Arguments
    //         DOM element to add, or HTML string.
    //         Reference DOM element.
    //     Returns
    //         True on completion, false on failure to complete task.
    //     */
    //     injectTop: function( el, target ) {
    //         var _result = false;
    //         if ( toString.call( el ) === '[object String]' ) {
    //             target.insertAdjacentHTML( 'afterbegin', el );
    //             _result = true;
    //         } else {
    //             var _child = I.Doc.getFirstChild( target );
    //             if ( _child ) {
    //                 target.insertBefore( el, _child );
    //                 _result = true;
    //             } else {
    //                 /* Parent element has no children, so just appendChild.
    //                 appendChild() doesn't give us any feedback as to whether the
    //                 operation was successful or not. So we will first check that
    //                 target is an element node. */
    //                 if ( target.nodeType === 1 ) {
    //                     target.appendChild( el );
    //                     _result = true;
    //                 }
    //             }
    //         }
    //         return _result;
    //     },
