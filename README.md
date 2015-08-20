# sAniScroll-js
A jquery plugin to show DOM element in viewport with css animation.  
Demo: 
- http://salipropham.github.io
- http://shop.suga.vn/sgbox

### Required
* `Animate.css` by *[Daniel Eden](http://daneden.github.io/animate.css/)*.
* `Waypoint` jquery lib by *[imakewebthings](http://imakewebthings.com/waypoints/)*
* `Imageloaded` js lib by *[desandro](http://desandro.github.io/imagesloaded/)* (option)

Thank all!
### Install
Embed all required libs in `head` tag.
```html
<link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" />
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js"></script>
<script type="text/javascript" src="jquery.aniscroll.min.js"></script>
```

If you use config `useDetector = true` (default), `.cssanimations` class will be added in DOM:


### Usage
Simple without config:
```js
jQuery(function($){
  $().aniscroll();
});
```
With configs
```javascript
$().anihere({
    useImageloaded: false, /*use combine ImageLoaded plugin */
    useDetector: true, /*detect whether browser is support css animation or not */
    aniClass: 'animated', /* belong to animate.css */
    loop: false, /* animation every scroll or first times */
    mobile: false, /* allow aniscroll working on mobile */
    offset: '95%' /*offset option of Waypoint plugin*/
});
```
HTML code
```html
<div data-as="fadeIn">...</div>
```

Custom duration, delay animation with HTML5
```html
<div data-as="fadeIn" data-as-duration="1.2s" data-as-delay=".2s" data-as-iteration="3"></div>
```
