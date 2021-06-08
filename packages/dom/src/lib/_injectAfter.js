// //import xxx from './xxx.js'

// /**
//  * Injects a DOM node — of any type — into the document or a DocumentFragment,
//  * immediately after another.
//  *
//  * The first argument is the node to add. The second argument is the
//  * reference node, which must already exist in the document.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * injectAfter('Foo Bar')
//  * // → 'fooBar'
//  */
// const injectAfter = (val) => (
//   'TODO'
// )

// export default injectAfter




    //     /*
    //     boolean injectAfter( node|string, node )
    //     ----------------------------------------
    //     Description
    //         Injects a DOM element after another.
    //     Arguments
    //         DOM element to add, or HTML string.
    //         Reference DOM element.
    //     Returns
    //         True on successful completion, else false.
    //     */
    //     injectAfter: function( el, target ) {
    //         var _result = false;
    //         if ( toString.call( el ) === '[object String]' ) {
    //             target.insertAdjacentHTML( 'afterend', el );
    //             _result = true;
    //         } else {
    //             var _parent = I.Doc.getParent( target );
    //             if ( _parent ) {
    //                 var _sibling = I.Doc.getNextSibling( target );
    //                 if ( _sibling ) {
    //                     _parent.insertBefore( el, _sibling );
    //                     _result = true;
    //                 }
    //             }
    //         }
    //         return _result;
    //     },




// // this = __(HTMLElements).Xxxx()
// //__.fn.injectAfter = function() {

// //    if ( this.isElement() !== true ) {
// //        if ( this.isString() !== true ) {
// //            throw new TypeError( 'Expect DOM element node or HTML string' )
// //        }
// //    }

// //    target = __( target )

// //    if ( target.isElement() !== true ) {
// //        throw new TypeError( 'Expect DOM element node' )
// //    }

// //    if ( target.isRoot() === true  ||  target.isBody() === true ) {
// //        throw new TypeError( 'Target element must not be <body> or <html>' )
// //    }

// //    if ( target.hasParents() !== true ) {
// //        throw new TypeError( 'Target element node is not part of the DOM' )
// //    }

// //    if ( this.isString() === true ) {
// //        target.insertAdjacentHTML( 'afterend', this._targets )
// //    }
// //    else if ( this.isElement() === true ) {

// //        var _parent = target.parent()
// //        var _sibling = target.nextSibling()

// //        _sibling.isNull( function() {
// //            throw new TypeError( '__().injectAfter() failed' )
// //            // #TODO: If no next sibling, do parentNode.appendChild()
// //        } )

// //        _parent.value.insertBefore( this._targets, _sibling.value )

// //    }

// //    return this

// // ***

// //    var _parent = I.Doc.getParent( target )
// //    var _result = false

// //    if ( _parent ) {

// //        var _sibling = I.Doc.getNextSibling( target )

// //        if ( _sibling ) {

// //            _parent.insertBefore( el, _sibling )
// //            _result = true

// //        }

// //    }

// //    return _result

// //}
