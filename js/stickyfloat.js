/**
 * stickyfloat - jQuery plugin for verticaly floating anything in a constrained area
 *
 * @author          Yair Even-Or (vsync)
 * @copyright       Copyright (c) 2013
 * @license         MIT and GPL licenses.
 * @link            http://dropthebit.com
 * @version         Version 7.5
 * @parameters      duration        (number, 200)    - the duration of the animation
                    startOffset     (number)         - the amount of scroll offset after the animations kicks in
                    offsetY         (number)         - the offset from the top when the object is animated
                    lockBottom      (boolean, false)  - set to false if you don't want your floating box to stop at parent's bottom
                    delay           (number, 0)      - delay in milliseconds  until the animnations starts
                    easing          (string, linear) - easing function (jQuery has by default only 'swing' & 'linear')
                    stickToBottom   (boolean, false) - to make the element stick to the bottom instead to the top
   @example         Example: jQuery('#menu').stickyfloat({duration: 400});
 *
 **/
!function(t){var o,s,e,i,n,f=window,r=document,a={duration:200,lockBottom:!1,delay:0,easing:"linear",stickToBottom:!1,cssTransition:!1},c=function(){var t,o=r.createElement("div"),s=["ms","O","Moz","Webkit"],e="transition";if(""==o[e])return!1;for(e=e.charAt(0).toUpperCase()+e.slice(1),t=s.length;t--;)if(""==o[s[t]+e])return!1;return!1}(),l=function(o,s){this.settings=o,this.obj=t(s)};function u(t){var o=t.parent(),s=parseInt(o.css("padding-bottom")),e=parseInt(o.css("padding-top"));return{startOffset:o.offset().top,offsetBottom:s,offsetY:e}}l.prototype={init:function(){if(this.obj.data("_stickyfloat"))return!1;var o=this;this.onScroll=function(){o.rePosition()},t(f).ready((function(){o.rePosition(!1),t(f).on("scroll.sticky, resize.sticky",o.onScroll)})),this.obj.data("_stickyfloat",o)},rePosition:function(t,a){var l=this.obj,u=this.settings,d=t?0:u.duration,h=f.pageYOffset||r.documentElement.scrollTop,p=f.innerHeight||r.documentElement.offsetHeight,y=l[0].clientHeight;l.stop(),u.lockBottom&&(o=l[0].parentNode.clientHeight-y-u.offsetBottom),o<0&&(o=0),s=h>u.startOffset,e=l.offset().top>u.startOffset+u.offsetY,i=y<p,((s||e)&&i||a)&&((n=u.stickToBottom?h+p-y-u.startOffset-u.offsetY:h-u.startOffset+u.offsetY)>o&&u.lockBottom&&(n=o),(n<u.offsetY||h<u.startOffset&&!u.stickToBottom)&&(n=u.offsetY),d<5||u.cssTransition&&c?l[0].style.top=n+"px":l.stop().delay(u.delay).animate({top:n},d,u.easing))},update:function(o){return"object"==typeof o&&(o.offsetY&&"auto"!=o.offsetY||(o.offsetY=u(this.obj).offsetY),o.startOffset&&"auto"!=o.startOffset||(o.startOffset=u(this.obj).startOffset),this.settings=t.extend({},this.settings,o),this.rePosition(!1,!1)),this.obj},destroy:function(){return t(window).off("scroll.sticky, resize.sticky",this.onScroll),this.obj.removeData(),this.obj}},t.fn.stickyfloat=function(o,s){return this.each((function(){var e=t(this);if(void 0===document.body.style.maxHeight)return!1;if("object"==typeof o)s=o;else if("string"==typeof o){return e.data("_stickyfloat")&&"function"==typeof e.data("_stickyfloat")[o]?e.data("_stickyfloat")[o](s):this}var i=t.extend({},a,u(e),s||{});new l(i,e).init()}))}}(jQuery);