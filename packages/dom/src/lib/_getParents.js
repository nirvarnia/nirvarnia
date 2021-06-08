// //import xxx from './xxx.js'

// /**
//  * Generates an array of DOM element nodes that are parents of a given node.
//  * The first is the most immediate parent, then the grandparent, etc. An
//  * empty array is returned if the reference node has no parents.
//  *
//  *     array = getParents(node)
//  *
//  * ***
//  *
//  * Generates an array that represents all of the HTML elements that are the
//  * parent of another, all the way up to the root ``<html>`` element.
//  *
//  * Careful. The <body> element does have one parent element, but for
//  * the most part this is the uppermost element that we work with in
//  * the DOM. The <html> element does not have any parents. And elements
//  * that have been created but not yet injected into the DOM tree don't
//  * have parents either.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * getParents('Foo Bar')
//  * // → 'fooBar'
//  */
// const getParents = (val) => (
//   'TODO'
// )

// export default getParents





    //     /*
    //     array getParents( node )
    //     ------------------------
    //     Descriptios
    //         Generates an array of elements that are parents of a given DOM node.
    //     Arguments
    //         DOM element reference.
    //     Returns
    //         Array, starting with nearest parent. Empty array if no parents.
    //     Notes
    //         el.parentNode always references element nodes, so no need to filter
    //         by nodeType.
    //     */
    //     getParents: function( target ) {
    //         var _a_found = [];
    //         var _parent = target.parentNode;
    //         while ( _parent ) {
    //             _a_found.push( _parent );
    //             _parent = _parent.parentNode;
    //         }
    //         return _a_found;
    //     },


// // this = __(HTMLElements).Xxxx()

// //__.fn.getParents = function() {

// //    if ( this._targets.length > 1 ) {
// //        throw new Error( 'Interface.Elements.getParents() requires a single element.' )
// //    }

// //    if ( __.isDocument( this._targets[0] ) ) {
// //        throw new Error( 'Document does not have parent elements.' )
// //    }

// //    var found = []
// //    var parent = this._targets[0].parentNode

// //    while ( parent ) {
// //        found.push( parent )
// //        parent = parent.parentNode
// //    }

// //    return new Interface.Elements( found )
