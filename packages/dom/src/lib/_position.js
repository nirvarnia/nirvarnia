
// ///*
// //**  setPosition()
// //**  Scrolls an element to given coordinates (if it has an overflow)
// //**  @param - object|string - DOM object or HTML tag id attribute
// //**  @param - number|string - x coordinate or 'center'
// //**  @param - number|string - y coordinate or 'center'
// //**  @param - boolean - account for window scroll?
// //**  @return - boolean - true on completion, false on fail
// //*/

// //setPosition: function(ao_target, ai_x, ai_y, ab_scroll) {

// //    /* Notes: This method will force ao_target to be absolute positioned.
// //    Provided x and y coordinates are relative to top-left corner of the
// //    document body, although the target element can be nested in relatively
// //    positioned elements. To position relative to another element, first
// //    get the position of that reference point using I.Doc.getPosition(). */

// //    ao_target = __(ao_target)
// //    if (ao_target === null) {
// //        return false
// //    }

// //    var ti_final_left = 0
// //    var ti_final_top = 0

// //    /* If either of our target positions are equal to 'center', then we need
// //    to work out the final top-left position by getting half the target
// //    element's width and deducting this from half of the window width: */
// //    if (ai_x == 'center' || ai_x == 'centre'
// //    || ai_y == 'center' || ai_y == 'centre') {

// //        /* Note: we always work with the body of the uppermost window; this is
// //        essential if we're stacking windows with iframes, for instance */
// //        //var to_doc_size
// //        //if (window.top != window.self) {
// //        var to_doc_size = I.Doc.getSize(window.top.document.body)
// //        //} else {
// //        //  to_doc_size = I.Doc.getSize(document.body)
// //        //}
// //        var to_target_size = I.Doc.getSize(ao_target)

// //        if (ai_x == 'center' || ai_x == 'centre') {
// //            ai_x = (to_doc_size.width / 2) - (to_target_size.width / 2)
// //        }

// //        if (ai_y == 'center' || ai_y ==='centre') {
// //            ai_y = (to_doc_size.height / 2) - (to_target_size.height / 2)
// //        }

// //        /* Now add scroll to these values: */
// //        ab_scroll = ab_scroll || false
// //        if (ab_scroll == true) {
// //            var to_scroll = I.Doc.getScroll()
// //            ai_x = ai_x + to_scroll.x
// //            ai_y = ai_y + to_scroll.y
// //        }

// //    }

// //    /* Get the page position of the target's parent element: */
// //    var to_parent_pos
// //    if (ao_target.offsetParent) {
// //        to_parent_pos = I.Doc.getPosition(ao_target.offsetParent)
// //    } else {
// //      /* Our target is directly inside the body tag: */
// //        to_parent_pos = { x: 0, y: 0}
// //    }

// //    /* If the parent coordinates are further out in the document then the
// //    target, our target's coordinates will be negative values: */
// //    if (to_parent_pos.x > ai_x) {
// //        ti_final_left = to_parent_pos.x - ai_x
// //    }
// //    if (to_parent_pos.y > ai_y) {
// //        ti_final_top = to_parent_pos.y - ai_y
// //    }

// //    /* However if the target position is further out into the document then
// //    the target element's parent's position, then the new coordinates for the
// //    target element will be positive: */
// //    if (to_parent_pos.x <= ai_x) {
// //        ti_final_left = ai_x - to_parent_pos.x
// //    }
// //    if (to_parent_pos.y <= ai_y) {
// //        ti_final_top = ai_y - to_parent_pos.y
// //    }

// //    ao_target.style.position = 'absolute'
// //    ao_target.style.left = ti_final_left + 'px'
// //    ao_target.style.top = ti_final_top + 'px'

// //    return true

// //},
