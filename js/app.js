/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransitions-webp-prefixed !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],n=y[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function s(e,n){return!!~(""+e).indexOf(n)}function a(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?a(o,t||n):o);return!1}function A(e){var n=Q.className,t=Modernizr._config.classPrefix||"";if(U&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),U?Q.className.baseVal=n:Q.className=n)}function f(e,n){if("object"==typeof e)for(var t in e)_(e,t)&&f(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),A([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):U?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=u(U?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,a,l,A="modernizr",f=u("div"),p=d();if(parseInt(r,10))for(;r--;)a=u("div"),a.id=o?o[r]:A+(r+1),f.appendChild(a);return i=u("style"),i.type="text/css",i.id="s"+A,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),f.id=A,p.fake&&(p.style.background="",p.style.overflow="hidden",l=Q.style.overflow,Q.style.overflow="hidden",Q.appendChild(p)),s=t(f,e),p.fake?(p.parentNode.removeChild(p),Q.style.overflow=l,Q.offsetHeight):f.parentNode.removeChild(f),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,o,a){function l(){f&&(delete E.style,delete E.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var A=m(e,o);if(!r(A,"undefined"))return A}for(var f,p,d,c,h,g=["modernizr","tspan","samp"];!E.style&&g.length;)f=!0,E.modElem=u(g.shift()),E.style=E.modElem.style;for(d=e.length,p=0;d>p;p++)if(c=e[p],h=E.style[c],s(c,"-")&&(c=i(c)),E.style[c]!==t){if(a||r(o,"undefined"))return l(),"pfx"==n?c:!0;try{E.style[c]=o}catch(v){}if(E.style[c]!=h)return l(),"pfx"==n?c:!0}return l(),!1}function g(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+x.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,i):(a=(e+" "+S.join(s+" ")+s).split(" "),l(a,n,t))}function v(e,n,r){return g(e,t,t,n,r)}var y=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _,C=[];!function(){var e={}.hasOwnProperty;_=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}();var b="Moz O ms Webkit",x=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=x;var B=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+n}return!1};w.atRule=B;var S=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=S;var Q=n.documentElement,U="svg"===Q.nodeName.toLowerCase();w._l={},w.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=f}),Modernizr.addAsyncTest(function(){function e(e,n,t){function r(n){var r=n&&"load"===n.type?1==o.width:!1,i="webp"===e;f(e,i?new Boolean(r):r),t&&t(n)}var o=new Image;o.onerror=r,o.onload=r,o.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var r=0;r<n.length;r++)e(n[r].name,n[r].uri)})});var R={elem:u("modernizr")};Modernizr._q.push(function(){delete R.elem});var E={style:R.elem.style};Modernizr._q.unshift(function(){delete E.style}),w.testAllProps=g;w.prefixed=function(e,n,t){return 0===e.indexOf("@")?B(e):(-1!=e.indexOf("-")&&(e=i(e)),n?g(e,n,t):g(e,"pfx"))};w.testAllProps=v,Modernizr.addTest("csstransitions",v("transition","all",!0)),o(),delete w.addTest,delete w.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);