


/**
 * Initial script for the Interface Framework JavaScript library.
 *
 * Defines the "__" function which also acts as a global namespace for all
 * other custom JavaScript functions and constructors.
 *
 * @package     Interface Framework
 * @author      Kieran Potts <hello@kieranpotts.com>
 * @copyright   Kieran Potts et al.
 * @license     http://mit-license.org/ The MIT License
 * @link        http://www.interfaceframework.org/
 */
;(function (global) {
  'use strict';

  // Framework namespace. Change the value of "global_namespace" to a different
  // variable name to avoid conflicts with jQuery and any other third-party code
  // that already adds to the global space a variable called '$'.
  var global_namespace = '__';

  // Does this browser "cut the mustard"? Exit if not.
  if (!('addEventListener' in document) || !('querySelector' in document)) {
      return;
  }

  // new __(String|HTMLElement|NodeList)
  // Constructor function for DOM utilities. We use a named function here, not
  // an anonymous function, so that constructor.name returns '__'. All of the
  // framework's static properties and functions will also be attached to this
  // Function instance.
  function __(target) {

      // jshint validthis:true
      if (target instanceof __)  { return target; }
      if (!(this instanceof __)) { return new __(target); }

      var targets = [],
          i, l;

      // CSS selectors?
      if (__.isString(arguments[0])) {
          var selector = arguments[0];
          var nodes = document.querySelectorAll(target);
          var rgx = new RegExp( '^#[a-zA-Z][a-zA-Z0-9-_]+$' ); // e.g. '#this-id_01'
          if (!rgx.test(selector)) {
              for (i = 0, l = nodes.length; i < l; i++) {
                  if (nodes[i].nodeType === 1) { // Element nodes only
                      targets.push(nodes[i]);
                  }
              }
          } else {
              if (nodes[0] && nodes[0].nodeType === 1) {
                  targets.push(nodes[0]);
              }
          }
      } else {
          for (i = 0, l = arguments.length; i < l; i++) {

              // DocumentFragment instance?
              if (Object.prototype.toString.call(arguments[i]) === '[object DocumentFragment]') {
                  targets.push(arguments[i]);
              }

              // NodeList? If so, convert to a static array and enable this[i] access
              // to individual elements.
              else if (Object.prototype.toString.call(arguments[i]) === '[object NodeList]') {
                  for (var ii = 0, ll = arguments[i].length; ii < ll; ii++) {
                      if (arguments[i][ii].nodeType === 1) { // Element nodes only
                          targets.push(arguments[i][ii]);
                      }
                  }
              }

              // Array of HTMLElements?
              else if (Array.isArray(arguments[i])) {
                  arguments[i].forEach(function (arg, i) { // #TODO: Don't make functions within a loop
                      if (arg && arg.nodeType === 1) { // Element nodes only
                          targets.push(arg);
                      }
                  });
              }

              // Single HTMLElement?
              else if (arguments[i] && arguments[i].nodeType === 1) {
                  targets.push(arguments[i]);
              }
          }
      }

      // Enable this[i] access to individual HTML elements.
      targets.forEach(function(el, i) {
          this[i] = el;
      }.bind(this));

      // Store references in internal this._targets property.
      Object.defineProperty(
          this, '_targets', {
              value:        targets,
              configurable: false,
              enumerable:   false,
              writable:     true
          }
      );
  }

  // Expose the Interface Framework globally via the global variable name
  // configured above. For convenience, create a shortcut to the prototype.
  global[global_namespace] = __;
  __.fn = __.prototype;

  // __.VERSION: Framework version number, a constant.
  Object.defineProperty(
      __, 'VERSION', {
          value:        0.1,
          configurable: false,
          enumerable:   false,
          writable:     false
      }
  );

}(window));

/**
* Adds a class name to one or more HTML elements.
*
* The classList API is well supported by modern browsers, with a fallback
* required only for IE9. The classList API works for both HTML and embedded
* SVGs. The className attribute is not available on SVG elements, but we can
* fallback on the setAttribute method.
*
* @param {string} cn Class name.
* @return {this}
*/
__.fn.addClass = function (cn) {

  var pos,
      full;

  this._targets.forEach(function (target) {
      if (target.classList) {
          target.classList.add(cn);
      } else {
          if (target.nodeName.toUpperCase() === 'SVG') {
              full = target.getAttribute('class').trim();
              pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
              if (pos < 0) { // !hasClass
                  target.setAttribute('class', (full === '') ? cn : full + ' ' + cn);
              }
          } else {
              full = target.className.trim();
              pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
              if (pos < 0) { // !hasClass
                  target.className = (full === '') ? cn : full + ' ' + cn;
              }
          }
      }
  });

  return this;

};

/**
* Ejects any HTMLElements that can be ejected from their parent container.
*
* @return {this}
*/
__.fn.eject = function () {

  var parent;

  this._targets.forEach(function(el) {
      parent = el.parentNode;
      if (parent) {
          parent.removeChild(el);
      }
  });

  return this;

};

/**
* Returns the HTMlElement from the collection.
*
* @param  {Function} fn Optional callback function
* @return {this}
*/
__.fn.first = function(fn) {
  if (fn) {
      fn.call(this, new __(this._targets[0]));
  }
  return this._targets[0];
};

/**
* Returns true if all elements in the collection have the specified class.
*
* @param {string} cn Class name.
* @return {Boolean}
*/
__.fn.hasClass = function (cn) {

  if (this._targets.length === 0) {
      return false;
  }

  var out = true,
      pos,
      full,
      i, l;

  for (i = 0, l = this._targets.length; i < l; i++) {
      if (this._targets[i].classList) {
          if (!this._targets[i].classList.contains(cn)) {
              out = false;
              break
          }
      } else {
          if (this._targets[i].nodeName.toUpperCase() === 'SVG') {
              full = this._targets[i].getAttribute('class').trim();
              pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
              if (pos < 0) {
                  out = false;
                  break;
              }
          } else {
              full = this._targets[i].className.trim();
              pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
              if (pos < 0) {
                  out = false;
                  break;
              }
          }
      }
  }

  return out;

};

/**
* Injects one or more HTMLElements into the DOM immediately before another.
*
* @param {HTMLElement} ref Reference DOM node.
* @return {this}.
*/
__.fn.injectBefore = function(ref) {

  var parent;

  this._targets.forEach(function (el) {
      //if (Object.prototype.toString.call(el) === '[object DocumentFragment]') {
      //    //
      //} else {
          parent = ref.parentNode;
          if (parent) {
              parent.insertBefore(el, ref); // #TODO: What if no parent element?
          }
      //}
  });

  return this;

};

/**
* Removes a class name from all elements in the collection.
*
* @param {string} cn Class name.
* @return {this}
*/
__.fn.removeClass = function (cn) {

  var pos,
      full;

  this._targets.forEach(function (target) {
      if (target.classList) {
          target.classList.remove(cn);
      } else {
          if (target.nodeName.toUpperCase() === 'SVG') {
              full = target.getAttribute('class').trim();
              pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
              if (pos > -1) { // hasClass
                  target.setAttribute('class', (' ' + full + ' ').replace(' ' + cn + ' ', ' ').trim());
              }
          } else {
              full = target.className.trim();
              pos = (' ' + full + ' ').indexOf(' ' + cn + ' ');
              if (pos > -1) { // hasClass
                  target.className = (' ' + full + ' ').replace(' ' + cn + ' ', ' ').trim();
              }
          }
      }
  });

  return this;

};













/**
 * Minimal standalone JS library for DOM manipulation.
 * It uses familiar jQuery like syntax, and works in IE9 and later.
 * ```javascript
 * $(".someClass").css("background-color:green;").html("Hello World");
 * $('#c').animate('2.3', '1.2','0','1','1','0','0', '0','0','1').css('background-color:red').text('Hello');
 * $("#a").on("click", function(){
 *   $("#someDiv").css("background-color:green;color:#fff;");
 * });
 * ```
 * @copyright Kieran Potts et al.
 * @license   MIT
 */

```

It works in IE9 and later.} s
 */
var _ = function(s){
  this.value = Array.prototype.slice.call(document.querySelectorAll(s));
  return this;
};

_.prototype = {
  each: function(fn) {
    [].forEach.call(this.value, fn);
    return this;
  },
  css: function (v) {
    return this.each(function (i) {
      i.style.cssText = i.style.cssText + v;
    });
  },
  att: function (a, v) {
    return this.each(function (i) {
      i.setAttribute(a, v);
    });
  },
  getAtt: function (v) {
    return this.each(function (i) {
      i.getAttribute(v);
    });
  },
  animate: function (time, scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY, opacity) {
    return this.each(function (i) {
      i.style.cssText = i.style.cssText + 'transition: all ' + time + 's ease-in-out; transform: scale(' + scale + ') rotate(' + rotate + 'deg) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate(' + translateX + 'px, ' + translateY + 'px) skew(' + skewX + 'deg, ' + skewY + 'deg); opacity:'+opacity+';)'
    });
  },
  on: function (type, fn) {
    return this.each(function (i) {
      i.addEventListener(type, fn, false);
    });
  },
  addClass: function (v) {
    return this.each(function (i) {
      if (i.classList) {
        i.classList.add(v)
      }
      else {
        i.className += ' ' + v;
      }
    });
  },
  toggleClass: function (v) {
    return this.each(function (i) {
      i.classList.toggle(v);
    });
  },
  removeClass: function (v) {
    return this.each(function (i) {
      i.classList.remove(v);
    });
  },
  html: function (v) {
    return this.each(function (i) {
      i.innerHTML = v;
    });
  },
  text: function (v) {
    return this.each(function (i) {
      i.innerText = v;
    });
  },
  insertBefore: function (v) {
    return this.each(function (i) {
      i.insertAdjacentHTML("beforeBegin",v);
    });
  },
  insertAfter: function (v) {
    return this.each(function (i) {
      i.insertAdjacentHTML("afterEnd",v);
    });
  },
  insertFirst: function (v) {
    return this.each(function (i) {
      i.insertAdjacentHTML("afterBegin",v);
    });
  },
  insertLast: function (v) {
    return this.each(function (i) {
      i.insertAdjacentHTML("beforeEnd",v);
    });
  },
  empty: function () {
    return this.each(function (i) {
      i.innerHTML = "";
    });
  },
  // offset: function () {
  //    return this.each(function (i) {
  //   offset = i.getBoundingClientRect();
  //   });
  // },
};

var $ = function (selector) {
  return new _(selector);
}

export { $ }




//; (function (global) {
//  'use strict'
//
//  // Does this browser "cut the mustard"? Exit if not.
//
//  if (!('addEventListener' in document) || !('querySelector' in document)) {
//    return
//  }
//
//  // new __(String|HTMLElement|NodeList)
//  // Constructor function for DOM utilities. We use a named function here, not
//  // an anonymous function, so that constructor.name returns '__'. All of the
//  // framework's static properties and functions will also be attached to this
//  // Function instance.
//
//  function __(target) {
//    // jshint validthis:true
//
//    if (target instanceof __) { return target }
//    if (!(this instanceof __)) { return new __(target) }
//
//    var targets = [],
//      i, l
//
//    // CSS selectors?
//
//    if (__.isString(arguments[0])) {
//      var selector = arguments[0]
//      var nodes = document.querySelectorAll(target)
//      var rgx = new RegExp('^#[a-zA-Z][a-zA-Z0-9-_]+$') // e.g. '#this-id_01'
//      if (!rgx.test(selector)) {
//        for (i = 0, l = nodes.length; i < l; i++) {
//          if (nodes[i].nodeType === 1) { // Element nodes only
//            targets.push(nodes[i])
//          }
//        }
//      } else {
//        if (nodes[0] && nodes[0].nodeType === 1) {
//          targets.push(nodes[0])
//        }
//      }
//    } else {
//      for (i = 0, l = arguments.length; i < l; i++) {
//        // DocumentFragment instance?
//
//        if (Object.prototype.toString.call(arguments[i]) === '[object DocumentFragment]') {
//          targets.push(arguments[i])
//        }
//
//        // NodeList? If so, convert to a static array and enable this[i] access
//        // to individual elements.
//
//        else if (Object.prototype.toString.call(arguments[i]) === '[object NodeList]') {
//          for (var ii = 0, ll = arguments[i].length; ii < ll; ii++) {
//            if (arguments[i][ii].nodeType === 1) { // Element nodes only
//              targets.push(arguments[i][ii])
//            }
//          }
//        }
//
//        // Array of HTMLElements?
//
//        else if (Array.isArray(arguments[i])) {
//          arguments[i].forEach(function (arg, i) { // #TODO: Don't make functions within a loop
//            if (arg && arg.nodeType === 1) { // Element nodes only
//              targets.push(arg)
//            }
//          })
//        }
//
//        // Single HTMLElement?
//
//        else if (arguments[i] && arguments[i].nodeType === 1) {
//          targets.push(arguments[i])
//        }
//      }
//    }
//
//    // Enable this[i] access to individual HTML elements.
//
//    targets.forEach(function (el, i) {
//      this[i] = el
//    }.bind(this))
//
//    // Store references in internal this._targets property.
//
//    Object.defineProperty(
//      this, '_targets', {
//        value: targets,
//        configurable: false,
//        enumerable: false,
//        writable: true
//      }
//    )
//  }
//
//  // Expose the Interface Framework globally via the global variable name
//  // configured above. For convenience, create a shortcut to the prototype.
//
//  global[global_namespace] = __
//  __.fn = __.prototype
//
//  // __.VERSION: Framework version number, a constant.
//
//  Object.defineProperty(
//    __, 'VERSION', {
//      value: 0.1,
//      configurable: false,
//      enumerable: false,
//      writable: false
//    }
//  )
//}(window))
