/*!
 * jQuery UI Position 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(g,h){g.ui=g.ui||{};var d=/left|center|right/,e=/top|center|bottom/,a="center",f={},b=g.fn.position,c=g.fn.offset;g.fn.position=function(j){if(!j||!j.of){return b.apply(this,arguments)}j=g.extend({},j);var n=g(j.of),m=n[0],p=(j.collision||"flip").split(" "),o=j.offset?j.offset.split(" "):[0,0],l,i,k;if(m.nodeType===9){l=n.width();i=n.height();k={top:0,left:0}}else{if(m.setTimeout){l=n.width();i=n.height();k={top:n.scrollTop(),left:n.scrollLeft()}}else{if(m.preventDefault){j.at="left top";l=i=0;k={top:j.of.pageY,left:j.of.pageX}}else{l=n.outerWidth();i=n.outerHeight();k=n.offset()}}}g.each(["my","at"],function(){var q=(j[this]||"").split(" ");if(q.length===1){q=d.test(q[0])?q.concat([a]):e.test(q[0])?[a].concat(q):[a,a]}q[0]=d.test(q[0])?q[0]:a;q[1]=e.test(q[1])?q[1]:a;j[this]=q});if(p.length===1){p[1]=p[0]}o[0]=parseInt(o[0],10)||0;if(o.length===1){o[1]=o[0]}o[1]=parseInt(o[1],10)||0;if(j.at[0]==="right"){k.left+=l}else{if(j.at[0]===a){k.left+=l/2}}if(j.at[1]==="bottom"){k.top+=i}else{if(j.at[1]===a){k.top+=i/2}}k.left+=o[0];k.top+=o[1];return this.each(function(){var t=g(this),v=t.outerWidth(),s=t.outerHeight(),u=parseInt(g.curCSS(this,"marginLeft",true))||0,r=parseInt(g.curCSS(this,"marginTop",true))||0,x=v+u+(parseInt(g.curCSS(this,"marginRight",true))||0),y=s+r+(parseInt(g.curCSS(this,"marginBottom",true))||0),w=g.extend({},k),q;if(j.my[0]==="right"){w.left-=v}else{if(j.my[0]===a){w.left-=v/2}}if(j.my[1]==="bottom"){w.top-=s}else{if(j.my[1]===a){w.top-=s/2}}if(!f.fractions){w.left=Math.round(w.left);w.top=Math.round(w.top)}q={left:w.left-u,top:w.top-r};g.each(["left","top"],function(A,z){if(g.ui.position[p[A]]){g.ui.position[p[A]][z](w,{targetWidth:l,targetHeight:i,elemWidth:v,elemHeight:s,collisionPosition:q,collisionWidth:x,collisionHeight:y,offset:o,my:j.my,at:j.at})}});if(g.fn.bgiframe){t.bgiframe()}t.offset(g.extend(w,{using:j.using}))})};g.ui.position={fit:{left:function(i,j){var l=g(window),k=j.collisionPosition.left+j.collisionWidth-l.width()-l.scrollLeft();i.left=k>0?i.left-k:Math.max(i.left-j.collisionPosition.left,i.left)},top:function(i,j){var l=g(window),k=j.collisionPosition.top+j.collisionHeight-l.height()-l.scrollTop();i.top=k>0?i.top-k:Math.max(i.top-j.collisionPosition.top,i.top)}},flip:{left:function(j,l){if(l.at[0]===a){return}var n=g(window),m=l.collisionPosition.left+l.collisionWidth-n.width()-n.scrollLeft(),i=l.my[0]==="left"?-l.elemWidth:l.my[0]==="right"?l.elemWidth:0,k=l.at[0]==="left"?l.targetWidth:-l.targetWidth,o=-2*l.offset[0];j.left+=l.collisionPosition.left<0?i+k+o:m>0?i+k+o:0},top:function(j,l){if(l.at[1]===a){return}var n=g(window),m=l.collisionPosition.top+l.collisionHeight-n.height()-n.scrollTop(),i=l.my[1]==="top"?-l.elemHeight:l.my[1]==="bottom"?l.elemHeight:0,k=l.at[1]==="top"?l.targetHeight:-l.targetHeight,o=-2*l.offset[1];j.top+=l.collisionPosition.top<0?i+k+o:m>0?i+k+o:0}}};if(!g.offset.setOffset){g.offset.setOffset=function(m,j){if(/static/.test(g.curCSS(m,"position"))){m.style.position="relative"}var l=g(m),o=l.offset(),i=parseInt(g.curCSS(m,"top",true),10)||0,n=parseInt(g.curCSS(m,"left",true),10)||0,k={top:(j.top-o.top)+i,left:(j.left-o.left)+n};if("using" in j){j.using.call(m,k)}else{l.css(k)}};g.fn.offset=function(i){var j=this[0];if(!j||!j.ownerDocument){return null}if(i){if(g.isFunction(i)){return this.each(function(k){g(this).offset(i.call(this,k,g(this).offset()))})}return this.each(function(){g.offset.setOffset(this,i)})}return c.call(this)}}if(!g.curCSS){g.curCSS=g.css}(function(){var j=document.getElementsByTagName("body")[0],q=document.createElement("div"),n,p,k,o,m;n=document.createElement(j?"div":"body");k={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(j){g.extend(k,{position:"absolute",left:"-1000px",top:"-1000px"})}for(var l in k){n.style[l]=k[l]}n.appendChild(q);p=j||document.documentElement;p.insertBefore(n,p.firstChild);q.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";o=g(q).offset(function(i,r){return r}).offset();n.innerHTML="";p.removeChild(n);m=o.top+o.left+(j?2000:0);f.fractions=m>21&&m<22})()}(jQuery));