(function(b){function c(d,e,k,i){var l,f,g,h,j=d;if(b.byteLength(i?i(e):e)<=k){return{newVal:e,trimmed:false}}l=0;f=0;g=Math.min(e.length,j.length);while(l<g&&j.charAt(l)===e.charAt(l)){l+=1}while(f<(g-l)&&j.charAt(j.length-1-f)===e.charAt(e.length-1-f)){f+=1}h=[e.substring(0,l),e.substring(l,e.length-f),e.substring(e.length-f)];if(i){while(b.byteLength(i(h.join("")))>k){h[1]=h[1].slice(0,-1)}}else{while(b.byteLength(h.join(""))>k){h[1]=h[1].slice(0,-1)}}e=h.join("");return{newVal:e,trimmed:true}}var a=["keyup.byteLimit","keydown.byteLimit","change.byteLimit","mouseup.byteLimit","cut.byteLimit","paste.byteLimit","focus.byteLimit","blur.byteLimit"].join(" ");b.fn.byteLimit=function(d,e){if(b.isFunction(d)){e=d;d=undefined}else{if(!e||!b.isFunction(e)){e=undefined}}return this.each(function(j,k){var h,f,g;h=b(k);f=Number(d===undefined?h.attr("maxlength"):d);if(!f||f<0){return}if(e){h.data("byteLimit.callback",e)}h.off(".byteLimit");if(e){h.removeAttr("maxlength")}else{h.attr("maxlength",f)}g="";h.on(a,function(){var i=c(g,this.value,f,e);if(i.trimmed===true){this.value=i.newVal}g=i.newVal})})}}(jQuery));