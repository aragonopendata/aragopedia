jQuery.fn.getAttrs=function(e){var f=this[0].attributes,c={},a=f.length,d,b;for(d=0;d<a;d++){b=f[d].nodeValue;if(e||(b&&b!=="inherit")){c[f[d].nodeName]=b}}return c};