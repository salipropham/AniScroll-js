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
    offset: '90%'  /*offset option of Waypoint plugin*/
});
```
