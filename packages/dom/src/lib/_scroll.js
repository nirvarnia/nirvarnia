

// // this = __(HTMLElements).Xxxx()

// //function scrollToElement(el) {
// //    var scrollYMax = getElementPosition(el).top - 40
// //    var scrollY = window.scrollY || window.pageYOffset
// //    console.log('scrollY: ' + scrollY + ' scrollYMax: ' + scrollYMax)
// //    //window.scroll(0, (pos.top-40))
// //    if (scrollY < scrollYMax) {
// //        var timerID = setInterval(function () {
// //            window.scrollBy(0, 10)
// //            scrollY = scrollY + 10
// //            if (scrollY >= scrollYMax)
// //                clearInterval(timerID)
// //        }, 10)
// //    }
// //    else if (scrollY > scrollYMax) {
// //        var timerID = setInterval(function () {
// //            window.scrollBy(0, -10)
// //            scrollY = scrollY - 10
// //            console.log('scrollY: ' + scrollY + ' scrollYMax: ' + scrollYMax)
// //            if (scrollY <= scrollYMax)
// //                clearInterval(timerID)
// //        }, 10)
// //    }
// //}

// //function scrollToElement(el) {
// //    var inc = 20
// //    var ms = 10
// //    offset = offset || 40
// //    var scrollYMax = getElementPosition(el).top - offset
// //    var scrollY = window.scrollY || window.pageYOffset
// //    if (scrollY < scrollYMax) {
// //        var timerID = setInterval(function () {
// //            window.scrollBy(0, inc)
// //            scrollY = scrollY + inc
// //            if (scrollY >= scrollYMax)
// //                clearInterval(timerID)
// //        }, ms)
// //    }
// //    else if (scrollY > scrollYMax) {
// //        var timerID = setInterval(function () {
// //            window.scrollBy(0, (0 - inc))
// //            scrollY = scrollY - inc
// //            if (scrollY <= scrollYMax)
// //                clearInterval(timerID)
// //        }, ms)
// //    }
// //}

// //*
// //**  I.Elements.scrollTo()
// //**  Scrolls an element to given coordinates (if it has an overflow)
// //**  @param - number - x coordinate
// //**  @param - number - y coordinate
// //**  @param - object|string - DOM object or HTML tag id attribute
// //**  @param - boolean - whether to apply a smooth animation
// //**  @param - boolean - set to true to disable scroll if coords within viewport
// //**  @return - boolean - true on completion, false on fail
// //*/

// //scrollTo: function(x, y, ao_target, ab_smooth, ab_viewport) {

// //  if (!ao_target) {

// //    if (ab_viewport === true) {
// //      var to_viewport = I.Helpers.getViewportSize()
// //      var to_scroll = I.Elements.getScroll()
// //      if (x > to_scroll.x && x < (to_scroll.x + to_viewport.height)
// //      && y > to_scroll.y && y < (to_scroll.y + to_viewport.width)) {
// //        /* Target position is withing current viewport. Exit. */
// //        return true
// //      }
// //    }

// //    if (!ab_smooth) {

// //      window.scrollTo(x, y)
// //      return true

// //    } else {

// //      /* Animation: */
// //      var to_scroll2 = I.Elements.getScroll()
// //      var tf_effect = function(value) {
// //        window.scrollTo(
// //          to_scroll2.x + (x - to_scroll2.x) * value,
// //          to_scroll2.y + (y - to_scroll2.y) * value
// //        )
// //      }
// //      var to_anim = new I.Fx.Animation({
// //        duration: 500,
// //        transition: I.Fx.Transitions.easeOut(2)
// //      })
// //      to_anim.addEffect(tf_effect)
// //      to_anim.play()
// //      return true

// //    }

// //  }

// //  /* For all other DOM elements: */

// //  ao_target = __(ao_target)
// //  if (ao_target === null) {
// //    return false
// //  }

// //  if (ab_viewport === true) {
// //    var to_viewport2 = I.Helpers.getScrollSize()
// //    var to_scroll3 = I.Elements.getScroll()
// //    if (x > to_scroll3.x && x < (to_scroll3.x + to_viewport2.height)
// //    && y > to_scroll3.y && y < (to_scroll3.y + to_viewport2.width)) {
// //      /* Target position is withing current visible area. Exit. */
// //      return true
// //    }
// //  }

// //  if (!ab_smooth) {

// //    ao_target.scrollLeft = x
// //    ao_target.scrollTop = y
// //    return true

// //  } else {

// //    /* Animation: */
// //    var to_scroll4 = I.Elements.getScroll(ao_target)
// //    var tf_effect2 = function(value) {
// //      ao_target.scrollLeft = to_scroll4.x + (x - to_scroll4.x) * value
// //      ao_target.scrollTop = to_scroll4.y + (y - to_scroll4.y) * value
// //    }
// //    var to_anim2 = new I.Fx.Animation({
// //      duration: 500,
// //      transition: I.Fx.Transitions.easeOut(2)
// //    })
// //    to_anim2.addEffect(tf_effect2)
// //    to_anim2.play()
// //    return true

// //  }

// //},
