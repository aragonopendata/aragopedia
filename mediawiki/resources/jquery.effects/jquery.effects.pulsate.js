/*!
 * jQuery UI Effects Pulsate 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(a,b){a.effects.pulsate=function(c){return this.queue(function(){var g=a(this),k=a.effects.setMode(g,c.options.mode||"show"),j=((c.options.times||5)*2)-1,h=c.duration?c.duration/2:a.fx.speeds._default/2,d=g.is(":visible"),e=0;if(!d){g.css("opacity",0).show();e=1}if((k=="hide"&&d)||(k=="show"&&!d)){j--}for(var f=0;f<j;f++){g.animate({opacity:e},h,c.options.easing);e=(e+1)%2}g.animate({opacity:e},h,c.options.easing,function(){if(e==0){g.hide()}(c.callback&&c.callback.apply(this,arguments))});g.queue("fx",function(){g.dequeue()}).dequeue()})}})(jQuery);