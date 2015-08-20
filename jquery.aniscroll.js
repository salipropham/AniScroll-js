/*!
    sAniScroll - https://github.com/salipropham/sAnihere-js
    MIT license - http://opensource.org/licenses/MIT
    Copyright (c) 2014 SaliproPham
    */
   !(function(){
      "use strict";
      function AniScroll( elem, options) {
         var me = this;
         var defaults = {
            useImageloaded: false,
            useDetector: true,
            aniClass: 'animated',
            loop: false,
            mobile: false,
            offset: '95%'
         }
         this.options = $.extend( {}, defaults, options );

         //disable on mobile or not
         if(_disabled(me)){
            return false;
         }
         //check whether browser is support css animation or not
         this.options.useDetector && _detector();

         //set duration, delay, iteration if they exist
         _prepareAttr(elem, me)

         //use imagesLoaded plugin
         if(this.options.useImageloaded){
            $().imagesLoaded && $("body").imagesLoaded(function () {
               _init(elem, me);
            });
         }else{
            _init(elem, me);
         };

         return this;
      }

      function _detector(){
         var animation = false,
            animationstring = 'animation',
            keyframeprefix = '',
            domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
            pfx  = '',
            elm = document.getElementsByTagName('body')[0];

         if( elm.style.animationName !== undefined ) { animation = true; }
         if( animation === false ) {
            for( var i = 0; i < domPrefixes.length; i++ ) {
               if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
                  pfx = domPrefixes[ i ];
                  animationstring = pfx + 'Animation';
                  keyframeprefix = '-' + pfx.toLowerCase() + '-';
                  animation = true;
                  break;
               }
            }
         }
         if(animation){ document.documentElement.className=document.documentElement.className+" cssanimations"}
      }

      function _prepareAttr(elm) {
         var delay, duration, iteration;
         duration = elm.getAttribute('data-as-duration');
         delay = elm.getAttribute('data-as-delay');
         iteration = elm.getAttribute('data-as-iteration');
         elm.style.visibility = 'hidden';

         if (duration) {
            _setStyle(elm.style, {
               animationDuration: duration
            });
         }
         if (delay) {
            _setStyle(elm.style, {
               animationDelay: delay
            });
         }
         if (iteration) {
            _setStyle(elm.style, {
               animationIterationCount: iteration
            });
         }

      }

      function _disabled(obj) {
         return !obj.options.mobile && _isMobile(navigator.userAgent);
      };

      function _isMobile(agent) {
         return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
      }


      function _setStyle(elem, properties) {
         var name, results, value, vendor;
         results = [];
         for (name in properties) {
            value = properties[name];
            elem["" + name] = value;
            results.push((function() {
               var j, len, ref, results1;
               ref = ["moz", "webkit"];
               results1 = [];
               for (j = 0, len = ref.length; j < len; j++) {
                  vendor = ref[j];
                  results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
               }
               return results1;
            }).call(this));
         }

         return results;
      }

      function _init(elem, obj){
         var aniName = $(elem).data('as'), className = [];
         className.push(aniName);
         className.push(obj.options.aniClass);
         className = className.join(" ");
         $().waypoint && $(elem).waypoint(function(direction) {
               if(obj.options.loop) {
                  $(this.element).toggleClass(className);
                  this.element.style.visibility = this.element.style.visibility == "hidden"? "visible" : "hidden"
               }
               else {
                  $(this.element).addClass(className);
                  this.element.style.visibility = 'visible';
               }
            },{offset: obj.options.offset}
         );
      }

      window.jQuery && (jQuery.fn.aniscroll = function(options) {
         $('[data-as]').each(function(){
            return new AniScroll( this, options)
         });
      });


   })();
