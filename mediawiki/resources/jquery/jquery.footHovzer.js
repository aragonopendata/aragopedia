(function(d){var f,b,e,a;function c(){if(f===undefined){f=d('<div id="jquery-foot-hovzer"></div>').appendTo("body")}return f}b={update:function(){var g;g=d("body");if(e===undefined){e=c().outerHeight(true);g.css("paddingBottom","+="+e+"px")}else{a=c().outerHeight(true);g.css("paddingBottom",(parseFloat(g.css("paddingBottom"))-e)+a);e=a}}};d.getFootHovzer=function(){b.$=c();return b}}(jQuery));