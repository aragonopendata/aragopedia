(function(b){function a(N,O){var x=0;var u=A(/^\s+/);var K=A(/^\d+/);var d=y("n");var i=y("is");var h=y("mod");var p=y("not");var L=y("in");var D=y("within");var B=y("..");var l=y(",");var M=y("or");var o=y("and");function q(){}q("pluralRuleParser",N,O);function z(n){return function(){for(var Q=0;Q<n.length;Q++){var P=n[Q]();if(P!==null){return P}}return null}}function J(S){var P=x;var n=[];for(var R=0;R<S.length;R++){var Q=S[R]();if(Q===null){x=P;return null}n.push(Q)}return n}function j(Q,P){return function(){var R=x;var n=[];var S=P();while(S!==null){n.push(S);S=P()}if(n.length<Q){x=R;return null}return n}}function y(P){var n=P.length;return function(){var Q=null;if(N.substr(x,n)===P){Q=P;x+=n}return Q}}function A(n){return function(){var P=N.substr(x).match(n);if(P===null){return null}x+=P[0].length;return P[0]}}function H(){var n=d();if(n===null){q(" -- failed n");return n}n=parseInt(O,10);q(" -- passed n ",n);return n}var r=z([e,H]);function e(){var n=J([H,u,h,u,K]);if(n===null){q(" -- failed mod");return null}q(" -- passed mod");return parseInt(n[0],10)%parseInt(n[4],10)}function F(){var n=J([u,p]);if(n===null){q(" -- failed not");return null}else{return n[1]}}function t(){var n=J([r,u,i,j(0,F),u,K]);if(n!==null){q(" -- passed is");if(n[3][0]==="not"){return n[0]!==parseInt(n[5],10)}else{return n[0]===parseInt(n[5],10)}}q(" -- failed is");return null}function g(){var n=J([z([f,K]),j(0,C)]);var P=[];if(n!==null){P=P.concat(n[0],n[1][0]);return P}q(" -- failed rangeList");return null}function C(){var n=J([l,g]);if(n!==null){return n[1]}q(" -- failed rangeTail");return null}function f(){var Q;var n=J([K,B,K]);if(n!==null){q(" -- passed range");var S=[];var R=parseInt(n[0],10);var P=parseInt(n[2],10);for(Q=R;Q<=P;Q++){S.push(Q)}return S}q(" -- failed range");return null}function v(){var n=J([r,j(0,F),u,L,u,g]);if(n!==null){q(" -- passed _in");var Q=n[5];for(var P=0;P<Q.length;P++){if(parseInt(Q[P],10)===n[0]){return(n[1][0]!=="not")}}return(n[1][0]==="not")}q(" -- failed _in ");return null}function G(){var n=J([r,u,D,u,g]);if(n!==null){q(" -- passed within ");var P=n[4];return(parseInt(P[0],10)<=n[0]&&n[0]<=parseInt(P[1],10))}q(" -- failed within ");return null}var m=z([t,v,G]);function E(){var n=J([m,u,o,u,c]);if(n){q(" -- passed and");return n[0]&&n[4]}q(" -- failed and");return null}function w(){var n=J([m,u,M,u,c]);if(n){q(" -- passed or");return n[0]||n[4]}q(" -- failed or");return null}var c=z([E,w,m]);function I(P){return parseFloat(P)%1===0}function s(){if(!I(O)){return false}var n=c();return n}var k=s();if(k===null||x!==N.length){}return k}if(typeof module!=="undefined"&&module.exports){module.exports=a}b.libs.pluralRuleParser=a})(mediaWiki);