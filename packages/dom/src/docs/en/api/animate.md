# `animate()`

Smoothly transition CSS properties of elements in the current collection.

- properties: object that holds CSS values to animate to; or CSS keyframe animation name
- duration (default 400): duration in milliseconds, or a string:
    - fast (200 ms)
    - slow (600 ms)
    - any custom property of $.fx.speeds
- easing (default linear): specifies the type of animation easing to use, one of:
    - ease
    - linear
    - ease-in / ease-out
    - ease-in-out
    - cubic-bezier(...)
- complete: callback function for when the animation finishes
- delay: transition delay in milliseconds v1.1+

Zepto also supports the following CSS transform properties:

- translate(X|Y|Z|3d)
- rotate(X|Y|Z|3d)
- scale(X|Y|Z)
- matrix(3d)
- perspective
- skew(X|Y)

If the duration is 0 or $.fx.off is true (default in a browser that doesn’t support CSS transitions), animations will not be executed; instead the target values will take effect instantly. Similarly, when the target CSS properties match the current state of the element, there will be no animation and the complete function won’t be called.

If the first parameter is a string instead of object, it is taken as a CSS keyframe animation name.


## Signature

TODO: Include standalone and $ wrapper signatures:

```txt
animate(properties, [duration, [easing, [function(){ ... }]]])  ⇒ self
animate(properties, { duration: msec, easing: type, complete: fn })  ⇒ self
animate(animationName, { ... })  ⇒ self
```

#### Parameters

- **`arg1`** = `type` | `type`  \
  Description...

- **`arg2`** = `type` | `type` (default) \
  Optional. Description...

#### Throws

- `TypeError` - Missing or invalid parameters.

#### Returns

- `type` - Explanation.
- `type` - Explanation.


## Examples

```js
$("#some_element").animate({
  opacity: 0.25, left: '50px',
  color: '#abcdef',
  rotateZ: '45deg', translate3d: '0,10px,0'
}, 500, 'ease-out')
```


## Related

- [`xxxx()`](xxxx.md) - Description...
- [`xxxx()`](xxxx.md) - Description...
