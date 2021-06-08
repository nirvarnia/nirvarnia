// //import xxx from './xxx.js'

// /**
//  * Set callback functions to run whenever some HTML elements are clicked or
//  * tapped.
//  *
//  * @param {string} [val=''] Description.
//  * @returns {string} Description.
//  * @example
//  *
//  * onClick('Foo Bar')
//  * // → 'fooBar'
//  */
// const onClick = (val) => (
//   'TODO'
// )

// export default onClick




// // this = __(HTMLElements).Xxxx()

// //__.fn.onClick = function(fn, fn_args) {
// //   /* Remove all existing onClick events: */
// //    //if ( fn === null ) {
// //    //    this._targets.forEach( function ( element ) {
// //    //        if ( ! element._events ) { element._events = {} }
// //    //        if ( ! element._events.onclick ) { element._events.onclick = [] }
// //    //        element._events.onclick.forEach( function ( onclick ) {
// //    //            element.removeEventListener( 'click', onclick, false )
// //    //        } )
// //    //    } )
// //    //}
// //    /* Add a new onClick event: */
// //    //else {
// //        //var fn_args = Array.prototype.slice.call( arguments, 1 )
// //        var onclick
// //        var fn_args = fn_args || []
// //        this._targets.forEach( function ( element ) {
// //            onclick = function ( event ) {
// //                event.stopPropagation()
// //                var rtn = fn.apply( this, fn_args )
// //                if ( rtn === false ) {
// //                    event.preventDefault()
// //                }
// //                return rtn
// //            }
// //            element.addEventListener( 'click', onclick.bind(this), false )
// //            /* Register the event so we can remove it later if necessary: */
// //            //if ( ! element._events ) { element._events = {} }
// //            //if ( ! element._events.onclick ) { element._events.onclick = [] }
// //            //element._events.onclick.push( onclick )
// //        }.bind(this) )
// //    //}
// //    return this
// //}

