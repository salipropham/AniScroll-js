# sAnihere-js
A jquery plugin to show DOM element in viewport with css animation.  
Demo: https://github.com/salipro4ever

### Required
* `Animate.css` by *[Daniel Eden](http://daneden.github.io/animate.css/)*.
* `Waypoint` jquery lib by *[imakewebthings](http://imakewebthings.com/waypoints/)*
* `Imageloaded` js lib by *[desandro](http://desandro.github.io/imagesloaded/)* (option)

Thank all!
### Install
Embed all required libs in `head` tag.
```html
<link type="text/css" rel="stylesheet" href="assets/css/animate.min.css" />
<script type="text/javascript" src="assets/js/noframework.waypoints.min.js"></script>
```

If you use config `useDetector = true` (default), should add following style:
```css
.cssanimations .anihere {
    opacity: 0;
    visibility: hidden;   
}
.cssanimations .anihere.animated {
    opacity: 1;
    visibility: visible;    
}
```

### Usage
Simple without config:
```js
jQuery(function($){
  $().anihere();
});
```
With configs
```javascript
$().anihere({
    useImageloaded: false,  /*use combine ImageLoaded plugin*/
    useDetector: true,  /*detect whether browser is support css animation or not*/
    loop: true,     /* animation every scroll or first times*/
    offset: '95%'  /*offset option of Waypoint plugin*/
});
```
HTML code
```html
<div class="anihere" data-anihere="fadeIn">...</div>
```

Custom duration, delay animation with HTML5
```html
<div class="anihere" data-anihere="fadeIn" data-anihere-delay="2x" data-anihere-duration="2x"></div>
```
Duration value `0x, 2x, 3x, 4x` default is `1x`, Delay `1x, 2x, 3x, 4x`.

