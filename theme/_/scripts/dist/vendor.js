/*!
 * jQuery JavaScript Library v2.2.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-04-05T19:26Z
 */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=oe.type(e);return"function"===n||oe.isWindow(e)?!1:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(oe.isFunction(t))return oe.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return oe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(he.test(t))return oe.filter(t,e,n);t=oe.filter(t,e)}return oe.grep(e,function(e){return $.call(t,e)>-1!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t={};return oe.each(e.match(Ee)||[],function(e,n){t[n]=!0}),t}function A(){Y.removeEventListener("DOMContentLoaded",A),e.removeEventListener("load",A),oe.ready()}function a(){this.expando=oe.expando+a.uid++}function s(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Be,"-$&").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:Me.test(n)?oe.parseJSON(n):n}catch(i){}Pe.set(e,t,n)}else n=void 0;return n}function d(e,t,n,r){var i,o=1,A=20,a=r?function(){return r.cur()}:function(){return oe.css(e,t,"")},s=a(),d=n&&n[3]||(oe.cssNumber[t]?"":"px"),l=(oe.cssNumber[t]||"px"!==d&&+s)&&ze.exec(oe.css(e,t));if(l&&l[3]!==d){d=d||l[3],n=n||[],l=+s||1;do o=o||".5",l/=o,oe.style(e,t,l+d);while(o!==(o=a()/s)&&1!==o&&--A)}return n&&(l=+l||+s||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=d,r.start=l,r.end=i)),i}function l(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&oe.nodeName(e,t)?oe.merge([e],n):n}function u(e,t){for(var n=0,r=e.length;r>n;n++)Te.set(e[n],"globalEval",!t||Te.get(t[n],"globalEval"))}function c(e,t,n,r,i){for(var o,A,a,s,d,c,p=t.createDocumentFragment(),f=[],h=0,m=e.length;m>h;h++)if(o=e[h],o||0===o)if("object"===oe.type(o))oe.merge(f,o.nodeType?[o]:o);else if(Ne.test(o)){for(A=A||p.appendChild(t.createElement("div")),a=(Ie.exec(o)||["",""])[1].toLowerCase(),s=qe[a]||qe._default,A.innerHTML=s[1]+oe.htmlPrefilter(o)+s[2],c=s[0];c--;)A=A.lastChild;oe.merge(f,A.childNodes),A=p.firstChild,A.textContent=""}else f.push(t.createTextNode(o));for(p.textContent="",h=0;o=f[h++];)if(r&&oe.inArray(o,r)>-1)i&&i.push(o);else if(d=oe.contains(o.ownerDocument,o),A=l(p.appendChild(o),"script"),d&&u(A),n)for(c=0;o=A[c++];)Re.test(o.type||"")&&n.push(o);return p}function p(){return!0}function f(){return!1}function h(){try{return Y.activeElement}catch(e){}}function m(e,t,n,r,i,o){var A,a;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(a in t)m(e,a,n,r,t[a],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=f;else if(!i)return e;return 1===o&&(A=i,i=function(e){return oe().off(e),A.apply(this,arguments)},i.guid=A.guid||(A.guid=oe.guid++)),e.each(function(){oe.event.add(this,t,i,r,n)})}function g(e,t){return oe.nodeName(e,"table")&&oe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function w(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function v(e){var t=He.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function y(e,t){var n,r,i,o,A,a,s,d;if(1===t.nodeType){if(Te.hasData(e)&&(o=Te.access(e),A=Te.set(t,o),d=o.events)){delete A.handle,A.events={};for(i in d)for(n=0,r=d[i].length;r>n;n++)oe.event.add(t,i,d[i][n])}Pe.hasData(e)&&(a=Pe.access(e),s=oe.extend({},a),Pe.set(t,s))}}function E(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ke.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function b(e,t,n,r){t=K.apply([],t);var i,o,A,a,s,d,u=0,p=e.length,f=p-1,h=t[0],m=oe.isFunction(h);if(m||p>1&&"string"==typeof h&&!re.checkClone&&Le.test(h))return e.each(function(i){var o=e.eq(i);m&&(t[0]=h.call(this,i,o.html())),b(o,t,n,r)});if(p&&(i=c(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(A=oe.map(l(i,"script"),w),a=A.length;p>u;u++)s=i,u!==f&&(s=oe.clone(s,!0,!0),a&&oe.merge(A,l(s,"script"))),n.call(e[u],s,u);if(a)for(d=A[A.length-1].ownerDocument,oe.map(A,v),u=0;a>u;u++)s=A[u],Re.test(s.type||"")&&!Te.access(s,"globalEval")&&oe.contains(d,s)&&(s.src?oe._evalUrl&&oe._evalUrl(s.src):oe.globalEval(s.textContent.replace(Oe,"")))}return e}function x(e,t,n){for(var r,i=t?oe.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||oe.cleanData(l(r)),r.parentNode&&(n&&oe.contains(r.ownerDocument,r)&&u(l(r,"script")),r.parentNode.removeChild(r));return e}function D(e,t){var n=oe(t.createElement(e)).appendTo(t.body),r=oe.css(n[0],"display");return n.detach(),r}function T(e){var t=Y,n=Ze[e];return n||(n=D(e,t),"none"!==n&&n||(Ge=(Ge||oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Ge[0].contentDocument,t.write(),t.close(),n=D(e,t),Ge.detach()),Ze[e]=n),n}function P(e,t,n){var r,i,o,A,a=e.style;return n=n||Xe(e),A=n?n.getPropertyValue(t)||n[t]:void 0,""!==A&&void 0!==A||oe.contains(e.ownerDocument,e)||(A=oe.style(e,t)),n&&!re.pixelMarginRight()&&Ye.test(A)&&Je.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=A,A=n.width,a.width=r,a.minWidth=i,a.maxWidth=o),void 0!==A?A+"":A}function M(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function B(e){if(e in rt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=nt.length;n--;)if(e=nt[n]+t,e in rt)return e}function C(e,t,n){var r=ze.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function z(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,A=0;4>o;o+=2)"margin"===n&&(A+=oe.css(e,n+Se[o],!0,i)),r?("content"===n&&(A-=oe.css(e,"padding"+Se[o],!0,i)),"margin"!==n&&(A-=oe.css(e,"border"+Se[o]+"Width",!0,i))):(A+=oe.css(e,"padding"+Se[o],!0,i),"padding"!==n&&(A+=oe.css(e,"border"+Se[o]+"Width",!0,i)));return A}function S(t,n,r){var i=!0,o="width"===n?t.offsetWidth:t.offsetHeight,A=Xe(t),a="border-box"===oe.css(t,"boxSizing",!1,A);if(Y.msFullscreenElement&&e.top!==e&&t.getClientRects().length&&(o=Math.round(100*t.getBoundingClientRect()[n])),0>=o||null==o){if(o=P(t,n,A),(0>o||null==o)&&(o=t.style[n]),Ye.test(o))return o;i=a&&(re.boxSizingReliable()||o===t.style[n]),o=parseFloat(o)||0}return o+z(t,n,r||(a?"border":"content"),i,A)+"px"}function Q(e,t){for(var n,r,i,o=[],A=0,a=e.length;a>A;A++)r=e[A],r.style&&(o[A]=Te.get(r,"olddisplay"),n=r.style.display,t?(o[A]||"none"!==n||(r.style.display=""),""===r.style.display&&Qe(r)&&(o[A]=Te.access(r,"olddisplay",T(r.nodeName)))):(i=Qe(r),"none"===n&&i||Te.set(r,"olddisplay",i?n:oe.css(r,"display"))));for(A=0;a>A;A++)r=e[A],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[A]||"":"none"));return e}function k(e,t,n,r,i){return new k.prototype.init(e,t,n,r,i)}function I(){return e.setTimeout(function(){it=void 0}),it=oe.now()}function R(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=Se[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function q(e,t,n){for(var r,i=(F.tweeners[t]||[]).concat(F.tweeners["*"]),o=0,A=i.length;A>o;o++)if(r=i[o].call(n,t,e))return r}function N(e,t,n){var r,i,o,A,a,s,d,l,u=this,c={},p=e.style,f=e.nodeType&&Qe(e),h=Te.get(e,"fxshow");n.queue||(a=oe._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,oe.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],d=oe.css(e,"display"),l="none"===d?Te.get(e,"olddisplay")||T(e.nodeName):d,"inline"===l&&"none"===oe.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],At.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||void 0===h[r])continue;f=!0}c[r]=h&&h[r]||oe.style(e,r)}else d=void 0;if(oe.isEmptyObject(c))"inline"===("none"===d?T(e.nodeName):d)&&(p.display=d);else{h?"hidden"in h&&(f=h.hidden):h=Te.access(e,"fxshow",{}),o&&(h.hidden=!f),f?oe(e).show():u.done(function(){oe(e).hide()}),u.done(function(){var t;Te.remove(e,"fxshow");for(t in c)oe.style(e,t,c[t])});for(r in c)A=q(f?h[r]:0,r,u),r in h||(h[r]=A.start,f&&(A.end=A.start,A.start="width"===r||"height"===r?1:0))}}function j(e,t){var n,r,i,o,A;for(n in e)if(r=oe.camelCase(n),i=t[r],o=e[n],oe.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),A=oe.cssHooks[r],A&&"expand"in A){o=A.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function F(e,t,n){var r,i,o=0,A=F.prefilters.length,a=oe.Deferred().always(function(){delete s.elem}),s=function(){if(i)return!1;for(var t=it||I(),n=Math.max(0,d.startTime+d.duration-t),r=n/d.duration||0,o=1-r,A=0,s=d.tweens.length;s>A;A++)d.tweens[A].run(o);return a.notifyWith(e,[d,o,n]),1>o&&s?n:(a.resolveWith(e,[d]),!1)},d=a.promise({elem:e,props:oe.extend({},t),opts:oe.extend(!0,{specialEasing:{},easing:oe.easing._default},n),originalProperties:t,originalOptions:n,startTime:it||I(),duration:n.duration,tweens:[],createTween:function(t,n){var r=oe.Tween(e,d.opts,t,n,d.opts.specialEasing[t]||d.opts.easing);return d.tweens.push(r),r},stop:function(t){var n=0,r=t?d.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)d.tweens[n].run(1);return t?(a.notifyWith(e,[d,1,0]),a.resolveWith(e,[d,t])):a.rejectWith(e,[d,t]),this}}),l=d.props;for(j(l,d.opts.specialEasing);A>o;o++)if(r=F.prefilters[o].call(d,e,l,d.opts))return oe.isFunction(r.stop)&&(oe._queueHooks(d.elem,d.opts.queue).stop=oe.proxy(r.stop,r)),r;return oe.map(l,q,d),oe.isFunction(d.opts.start)&&d.opts.start.call(e,d),oe.fx.timer(oe.extend(s,{elem:e,anim:d,queue:d.opts.queue})),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always)}function V(e){return e.getAttribute&&e.getAttribute("class")||""}function U(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Ee)||[];if(oe.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function W(e,t,n,r){function i(a){var s;return o[a]=!0,oe.each(e[a]||[],function(e,a){var d=a(t,n,r);return"string"!=typeof d||A||o[d]?A?!(s=d):void 0:(t.dataTypes.unshift(d),i(d),!1)}),s}var o={},A=e===Pt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function L(e,t){var n,r,i=oe.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&oe.extend(!0,e,r),e}function H(e,t,n){for(var r,i,o,A,a=e.contents,s=e.dataTypes;"*"===s[0];)s.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){s.unshift(i);break}if(s[0]in n)o=s[0];else{for(i in n){if(!s[0]||e.converters[i+" "+s[0]]){o=i;break}A||(A=i)}o=o||A}return o?(o!==s[0]&&s.unshift(o),n[o]):void 0}function O(e,t,n,r){var i,o,A,a,s,d={},l=e.dataTypes.slice();if(l[1])for(A in e.converters)d[A.toLowerCase()]=e.converters[A];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!s&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),s=o,o=l.shift())if("*"===o)o=s;else if("*"!==s&&s!==o){if(A=d[s+" "+o]||d["* "+o],!A)for(i in d)if(a=i.split(" "),a[1]===o&&(A=d[s+" "+a[0]]||d["* "+a[0]])){A===!0?A=d[i]:d[i]!==!0&&(o=a[0],l.unshift(a[1]));break}if(A!==!0)if(A&&e["throws"])t=A(t);else try{t=A(t)}catch(u){return{state:"parsererror",error:A?u:"No conversion from "+s+" to "+o}}}return{state:"success",data:t}}function G(e,t,n,r){var i;if(oe.isArray(t))oe.each(t,function(t,i){n||zt.test(e)?r(e,i):G(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==oe.type(t))r(e,t);else for(i in t)G(e+"["+i+"]",t[i],n,r)}function Z(e){return oe.isWindow(e)?e:9===e.nodeType&&e.defaultView}var J=[],Y=e.document,X=J.slice,K=J.concat,_=J.push,$=J.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,re={},ie="2.2.3",oe=function(e,t){return new oe.fn.init(e,t)},Ae=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,se=/-([\da-z])/gi,de=function(e,t){return t.toUpperCase()};oe.fn=oe.prototype={jquery:ie,constructor:oe,selector:"",length:0,toArray:function(){return X.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:X.call(this)},pushStack:function(e){var t=oe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return oe.each(this,e)},map:function(e){return this.pushStack(oe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(X.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:_,sort:J.sort,splice:J.splice},oe.extend=oe.fn.extend=function(){var e,t,n,r,i,o,A=arguments[0]||{},a=1,s=arguments.length,d=!1;for("boolean"==typeof A&&(d=A,A=arguments[a]||{},a++),"object"==typeof A||oe.isFunction(A)||(A={}),a===s&&(A=this,a--);s>a;a++)if(null!=(e=arguments[a]))for(t in e)n=A[t],r=e[t],A!==r&&(d&&r&&(oe.isPlainObject(r)||(i=oe.isArray(r)))?(i?(i=!1,o=n&&oe.isArray(n)?n:[]):o=n&&oe.isPlainObject(n)?n:{},A[t]=oe.extend(d,o,r)):void 0!==r&&(A[t]=r));return A},oe.extend({expando:"jQuery"+(ie+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===oe.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString();return!oe.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t;if("object"!==oe.type(e)||e.nodeType||oe.isWindow(e))return!1;if(e.constructor&&!ne.call(e,"constructor")&&!ne.call(e.constructor.prototype||{},"isPrototypeOf"))return!1;for(t in e);return void 0===t||ne.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=oe.trim(e),e&&(1===e.indexOf("use strict")?(t=Y.createElement("script"),t.text=e,Y.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(se,de)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var r,i=0;if(n(e))for(r=e.length;r>i&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(Ae,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?oe.merge(r,"string"==typeof e?[e]:e):_.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:$.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,A=e.length,a=!n;A>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o,A=0,a=[];if(n(e))for(i=e.length;i>A;A++)o=t(e[A],A,r),null!=o&&a.push(o);else for(A in e)o=t(e[A],A,r),null!=o&&a.push(o);return K.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),oe.isFunction(e)?(r=X.call(arguments,2),i=function(){return e.apply(t||this,r.concat(X.call(arguments)))},i.guid=e.guid=e.guid||oe.guid++,i):void 0},now:Date.now,support:re}),"function"==typeof Symbol&&(oe.fn[Symbol.iterator]=J[Symbol.iterator]),oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ee["[object "+t+"]"]=t.toLowerCase()});var le=/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
function(e){function t(e,t,n,r){var i,o,A,a,s,d,u,p,f=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!r&&((t?t.ownerDocument||t:V)!==Q&&S(t),t=t||Q,I)){if(11!==h&&(d=ge.exec(e)))if(i=d[1]){if(9===h){if(!(A=t.getElementById(i)))return n;if(A.id===i)return n.push(A),n}else if(f&&(A=f.getElementById(i))&&j(t,A)&&A.id===i)return n.push(A),n}else{if(d[2])return _.apply(n,t.getElementsByTagName(e)),n;if((i=d[3])&&E.getElementsByClassName&&t.getElementsByClassName)return _.apply(n,t.getElementsByClassName(i)),n}if(E.qsa&&!O[e+" "]&&(!R||!R.test(e))){if(1!==h)f=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(ve,"\\$&"):t.setAttribute("id",a=F),u=T(e),o=u.length,s=ce.test(a)?"#"+a:"[id='"+a+"']";o--;)u[o]=s+" "+c(u[o]);p=u.join(","),f=we.test(e)&&l(t.parentNode)||t}if(p)try{return _.apply(n,f.querySelectorAll(p)),n}catch(m){}finally{a===F&&t.removeAttribute("id")}}}return M(e.replace(ae,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>b.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[F]=!0,e}function i(e){var t=Q.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)b.attrHandle[n[r]]=t}function A(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Z)-(~e.sourceIndex||Z);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function s(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function d(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),A=o.length;A--;)n[i=o[A]]&&(n[i]=!(r[i]=n[i]))})})}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function u(){}function c(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=W++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,A){var a,s,d,l=[U,o];if(A){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,A))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(d=t[F]||(t[F]={}),s=d[t.uniqueID]||(d[t.uniqueID]={}),(a=s[r])&&a[0]===U&&a[1]===o)return l[2]=a[2];if(s[r]=l,l[2]=e(t,n,A))return!0}}}function f(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function h(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,A=[],a=0,s=e.length,d=null!=t;s>a;a++)(o=e[a])&&(n&&!n(o,r,i)||(A.push(o),d&&t.push(a)));return A}function g(e,t,n,i,o,A){return i&&!i[F]&&(i=g(i)),o&&!o[F]&&(o=g(o,A)),r(function(r,A,a,s){var d,l,u,c=[],p=[],f=A.length,g=r||h(t||"*",a.nodeType?[a]:a,[]),w=!e||!r&&t?g:m(g,c,e,a,s),v=n?o||(r?e:f||i)?[]:A:w;if(n&&n(w,v,a,s),i)for(d=m(v,p),i(d,[],a,s),l=d.length;l--;)(u=d[l])&&(v[p[l]]=!(w[p[l]]=u));if(r){if(o||e){if(o){for(d=[],l=v.length;l--;)(u=v[l])&&d.push(w[l]=u);o(null,v=[],d,s)}for(l=v.length;l--;)(u=v[l])&&(d=o?ee(r,u):c[l])>-1&&(r[d]=!(A[d]=u))}}else v=m(v===A?v.splice(f,v.length):v),o?o(null,A,v,s):_.apply(A,v)})}function w(e){for(var t,n,r,i=e.length,o=b.relative[e[0].type],A=o||b.relative[" "],a=o?1:0,s=p(function(e){return e===t},A,!0),d=p(function(e){return ee(t,e)>-1},A,!0),l=[function(e,n,r){var i=!o&&(r||n!==B)||((t=n).nodeType?s(e,n,r):d(e,n,r));return t=null,i}];i>a;a++)if(n=b.relative[e[a].type])l=[p(f(l),n)];else{if(n=b.filter[e[a].type].apply(null,e[a].matches),n[F]){for(r=++a;i>r&&!b.relative[e[r].type];r++);return g(a>1&&f(l),a>1&&c(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,r>a&&w(e.slice(a,r)),i>r&&w(e=e.slice(r)),i>r&&c(e))}l.push(n)}return f(l)}function v(e,n){var i=n.length>0,o=e.length>0,A=function(r,A,a,s,d){var l,u,c,p=0,f="0",h=r&&[],g=[],w=B,v=r||o&&b.find.TAG("*",d),y=U+=null==w?1:Math.random()||.1,E=v.length;for(d&&(B=A===Q||A||d);f!==E&&null!=(l=v[f]);f++){if(o&&l){for(u=0,A||l.ownerDocument===Q||(S(l),a=!I);c=e[u++];)if(c(l,A||Q,a)){s.push(l);break}d&&(U=y)}i&&((l=!c&&l)&&p--,r&&h.push(l))}if(p+=f,i&&f!==p){for(u=0;c=n[u++];)c(h,g,A,a);if(r){if(p>0)for(;f--;)h[f]||g[f]||(g[f]=X.call(s));g=m(g)}_.apply(s,g),d&&!r&&g.length>0&&p+n.length>1&&t.uniqueSort(s)}return d&&(U=y,B=w),h};return i?r(A):A}var y,E,b,x,D,T,P,M,B,C,z,S,Q,k,I,R,q,N,j,F="sizzle"+1*new Date,V=e.document,U=0,W=0,L=n(),H=n(),O=n(),G=function(e,t){return e===t&&(z=!0),0},Z=1<<31,J={}.hasOwnProperty,Y=[],X=Y.pop,K=Y.push,_=Y.push,$=Y.slice,ee=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",Ae=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),se=new RegExp("^"+ne+"*,"+ne+"*"),de=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),le=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),ue=new RegExp(oe),ce=new RegExp("^"+re+"$"),pe={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},fe=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,we=/[+~]/,ve=/'|\\/g,ye=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},be=function(){S()};try{_.apply(Y=$.call(V.childNodes),V.childNodes),Y[V.childNodes.length].nodeType}catch(xe){_={apply:Y.length?function(e,t){K.apply(e,$.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}E=t.support={},D=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},S=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:V;return r!==Q&&9===r.nodeType&&r.documentElement?(Q=r,k=Q.documentElement,I=!D(Q),(n=Q.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",be,!1):n.attachEvent&&n.attachEvent("onunload",be)),E.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),E.getElementsByTagName=i(function(e){return e.appendChild(Q.createComment("")),!e.getElementsByTagName("*").length}),E.getElementsByClassName=me.test(Q.getElementsByClassName),E.getById=i(function(e){return k.appendChild(e).id=F,!Q.getElementsByName||!Q.getElementsByName(F).length}),E.getById?(b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&I){var n=t.getElementById(e);return n?[n]:[]}},b.filter.ID=function(e){var t=e.replace(ye,Ee);return function(e){return e.getAttribute("id")===t}}):(delete b.find.ID,b.filter.ID=function(e){var t=e.replace(ye,Ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),b.find.TAG=E.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):E.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=E.getElementsByClassName&&function(e,t){return"undefined"!=typeof t.getElementsByClassName&&I?t.getElementsByClassName(e):void 0},q=[],R=[],(E.qsa=me.test(Q.querySelectorAll))&&(i(function(e){k.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&R.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||R.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+F+"-]").length||R.push("~="),e.querySelectorAll(":checked").length||R.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||R.push(".#.+[+~]")}),i(function(e){var t=Q.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&R.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||R.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),R.push(",.*:")})),(E.matchesSelector=me.test(N=k.matches||k.webkitMatchesSelector||k.mozMatchesSelector||k.oMatchesSelector||k.msMatchesSelector))&&i(function(e){E.disconnectedMatch=N.call(e,"div"),N.call(e,"[s!='']:x"),q.push("!=",oe)}),R=R.length&&new RegExp(R.join("|")),q=q.length&&new RegExp(q.join("|")),t=me.test(k.compareDocumentPosition),j=t||me.test(k.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},G=t?function(e,t){if(e===t)return z=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!E.sortDetached&&t.compareDocumentPosition(e)===n?e===Q||e.ownerDocument===V&&j(V,e)?-1:t===Q||t.ownerDocument===V&&j(V,t)?1:C?ee(C,e)-ee(C,t):0:4&n?-1:1)}:function(e,t){if(e===t)return z=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===Q?-1:t===Q?1:i?-1:o?1:C?ee(C,e)-ee(C,t):0;if(i===o)return A(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?A(a[r],s[r]):a[r]===V?-1:s[r]===V?1:0},Q):Q},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==Q&&S(e),n=n.replace(le,"='$1']"),E.matchesSelector&&I&&!O[n+" "]&&(!q||!q.test(n))&&(!R||!R.test(n)))try{var r=N.call(e,n);if(r||E.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,Q,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==Q&&S(e),j(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==Q&&S(e);var n=b.attrHandle[t.toLowerCase()],r=n&&J.call(b.attrHandle,t.toLowerCase())?n(e,t,!I):void 0;return void 0!==r?r:E.attributes||!I?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(z=!E.detectDuplicates,C=!E.sortStable&&e.slice(0),e.sort(G),z){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return C=null,e},x=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=x(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=x(t);return n},b=t.selectors={cacheLength:50,createPseudo:r,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ye,Ee),e[3]=(e[3]||e[4]||e[5]||"").replace(ye,Ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ue.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ye,Ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=L[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&L(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(Ae," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),A="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,s){var d,l,u,c,p,f,h=o!==A?"nextSibling":"previousSibling",m=t.parentNode,g=a&&t.nodeName.toLowerCase(),w=!s&&!a,v=!1;if(m){if(o){for(;h;){for(c=t;c=c[h];)if(a?c.nodeName.toLowerCase()===g:1===c.nodeType)return!1;f=h="only"===e&&!f&&"nextSibling"}return!0}if(f=[A?m.firstChild:m.lastChild],A&&w){for(c=m,u=c[F]||(c[F]={}),l=u[c.uniqueID]||(u[c.uniqueID]={}),d=l[e]||[],p=d[0]===U&&d[1],v=p&&d[2],c=p&&m.childNodes[p];c=++p&&c&&c[h]||(v=p=0)||f.pop();)if(1===c.nodeType&&++v&&c===t){l[e]=[U,p,v];break}}else if(w&&(c=t,u=c[F]||(c[F]={}),l=u[c.uniqueID]||(u[c.uniqueID]={}),d=l[e]||[],p=d[0]===U&&d[1],v=p),v===!1)for(;(c=++p&&c&&c[h]||(v=p=0)||f.pop())&&((a?c.nodeName.toLowerCase()!==g:1!==c.nodeType)||!++v||(w&&(u=c[F]||(c[F]={}),l=u[c.uniqueID]||(u[c.uniqueID]={}),l[e]=[U,v]),c!==t)););return v-=i,v===r||v%r===0&&v/r>=0}}},PSEUDO:function(e,n){var i,o=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[F]?o(n):o.length>1?(i=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),A=i.length;A--;)r=ee(e,i[A]),e[r]=!(t[r]=i[A])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=P(e.replace(ae,"$1"));return i[F]?r(function(e,t,n,r){for(var o,A=i(e,null,r,[]),a=e.length;a--;)(o=A[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(ye,Ee),function(t){return(t.textContent||t.innerText||x(t)).indexOf(e)>-1}}),lang:r(function(e){return ce.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ye,Ee).toLowerCase(),function(t){var n;do if(n=I?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===k},focus:function(e){return e===Q.activeElement&&(!Q.hasFocus||Q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return he.test(e.nodeName)},input:function(e){return fe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:d(function(){return[0]}),last:d(function(e,t){return[t-1]}),eq:d(function(e,t,n){return[0>n?n+t:n]}),even:d(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:d(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:d(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:d(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},b.pseudos.nth=b.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[y]=a(y);for(y in{submit:!0,reset:!0})b.pseudos[y]=s(y);return u.prototype=b.filters=b.pseudos,b.setFilters=new u,T=t.tokenize=function(e,n){var r,i,o,A,a,s,d,l=H[e+" "];if(l)return n?0:l.slice(0);for(a=e,s=[],d=b.preFilter;a;){r&&!(i=se.exec(a))||(i&&(a=a.slice(i[0].length)||a),s.push(o=[])),r=!1,(i=de.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ae," ")}),a=a.slice(r.length));for(A in b.filter)!(i=pe[A].exec(a))||d[A]&&!(i=d[A](i))||(r=i.shift(),o.push({value:r,type:A,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):H(e,s).slice(0)},P=t.compile=function(e,t){var n,r=[],i=[],o=O[e+" "];if(!o){for(t||(t=T(e)),n=t.length;n--;)o=w(t[n]),o[F]?r.push(o):i.push(o);o=O(e,v(i,r)),o.selector=e}return o},M=t.select=function(e,t,n,r){var i,o,A,a,s,d="function"==typeof e&&e,u=!r&&T(e=d.selector||e);if(n=n||[],1===u.length){if(o=u[0]=u[0].slice(0),o.length>2&&"ID"===(A=o[0]).type&&E.getById&&9===t.nodeType&&I&&b.relative[o[1].type]){if(t=(b.find.ID(A.matches[0].replace(ye,Ee),t)||[])[0],!t)return n;d&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=pe.needsContext.test(e)?0:o.length;i--&&(A=o[i],!b.relative[a=A.type]);)if((s=b.find[a])&&(r=s(A.matches[0].replace(ye,Ee),we.test(o[0].type)&&l(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&c(o),!e)return _.apply(n,r),n;break}}return(d||P(e,u))(r,t,!I,n,!t||we.test(e)&&l(t.parentNode)||t),n},E.sortStable=F.split("").sort(G).join("")===F,E.detectDuplicates=!!z,S(),E.sortDetached=i(function(e){return 1&e.compareDocumentPosition(Q.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),E.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);oe.find=le,oe.expr=le.selectors,oe.expr[":"]=oe.expr.pseudos,oe.uniqueSort=oe.unique=le.uniqueSort,oe.text=le.getText,oe.isXMLDoc=le.isXML,oe.contains=le.contains;var ue=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&oe(e).is(n))break;r.push(e)}return r},ce=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},pe=oe.expr.match.needsContext,fe=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,he=/^.[^:#\[\.,]*$/;oe.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?oe.find.matchesSelector(r,e)?[r]:[]:oe.find.matches(e,oe.grep(t,function(e){return 1===e.nodeType}))},oe.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(oe(e).filter(function(){for(t=0;n>t;t++)if(oe.contains(i[t],this))return!0}));for(t=0;n>t;t++)oe.find(e,i[t],r);return r=this.pushStack(n>1?oe.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&pe.test(e)?oe(e):e||[],!1).length}});var me,ge=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,we=oe.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||me,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ge.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof oe?t[0]:t,oe.merge(this,oe.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:Y,!0)),fe.test(r[1])&&oe.isPlainObject(t))for(r in t)oe.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=Y.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=Y,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):oe.isFunction(e)?void 0!==n.ready?n.ready(e):e(oe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),oe.makeArray(e,this))};we.prototype=oe.fn,me=oe(Y);var ve=/^(?:parents|prev(?:Until|All))/,ye={children:!0,contents:!0,next:!0,prev:!0};oe.fn.extend({has:function(e){var t=oe(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(oe.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],A=pe.test(e)||"string"!=typeof e?oe(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(A?A.index(n)>-1:1===n.nodeType&&oe.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?oe.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?$.call(oe(e),this[0]):$.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(oe.uniqueSort(oe.merge(this.get(),oe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),oe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ue(e,"parentNode")},parentsUntil:function(e,t,n){return ue(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return ue(e,"nextSibling")},prevAll:function(e){return ue(e,"previousSibling")},nextUntil:function(e,t,n){return ue(e,"nextSibling",n)},prevUntil:function(e,t,n){return ue(e,"previousSibling",n)},siblings:function(e){return ce((e.parentNode||{}).firstChild,e)},children:function(e){return ce(e.firstChild)},contents:function(e){return e.contentDocument||oe.merge([],e.childNodes)}},function(e,t){oe.fn[e]=function(n,r){var i=oe.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=oe.filter(r,i)),this.length>1&&(ye[e]||oe.uniqueSort(i),ve.test(e)&&i.reverse()),this.pushStack(i)}});var Ee=/\S+/g;oe.Callbacks=function(e){e="string"==typeof e?o(e):oe.extend({},e);var t,n,r,i,A=[],a=[],s=-1,d=function(){for(i=e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<A.length;)A[s].apply(n[0],n[1])===!1&&e.stopOnFalse&&(s=A.length,n=!1);e.memory||(n=!1),t=!1,i&&(A=n?[]:"")},l={add:function(){return A&&(n&&!t&&(s=A.length-1,a.push(n)),function r(t){oe.each(t,function(t,n){oe.isFunction(n)?e.unique&&l.has(n)||A.push(n):n&&n.length&&"string"!==oe.type(n)&&r(n)})}(arguments),n&&!t&&d()),this},remove:function(){return oe.each(arguments,function(e,t){for(var n;(n=oe.inArray(t,A,n))>-1;)A.splice(n,1),s>=n&&s--}),this},has:function(e){return e?oe.inArray(e,A)>-1:A.length>0},empty:function(){return A&&(A=[]),this},disable:function(){return i=a=[],A=n="",this},disabled:function(){return!A},lock:function(){return i=a=[],n||(A=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||d()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},oe.extend({Deferred:function(e){var t=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return oe.Deferred(function(n){oe.each(t,function(t,o){var A=oe.isFunction(e[t])&&e[t];i[o[1]](function(){var e=A&&A.apply(this,arguments);e&&oe.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,A?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?oe.extend(e,r):r}},i={};return r.pipe=r.then,oe.each(t,function(e,o){var A=o[2],a=o[3];r[o[1]]=A.add,a&&A.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=A.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=X.call(arguments),A=o.length,a=1!==A||e&&oe.isFunction(e.promise)?A:0,s=1===a?e:oe.Deferred(),d=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?X.call(arguments):i,r===t?s.notifyWith(n,r):--a||s.resolveWith(n,r)}};if(A>1)for(t=new Array(A),n=new Array(A),r=new Array(A);A>i;i++)o[i]&&oe.isFunction(o[i].promise)?o[i].promise().progress(d(i,n,t)).done(d(i,r,o)).fail(s.reject):--a;return a||s.resolveWith(r,o),s.promise()}});var be;oe.fn.ready=function(e){return oe.ready.promise().done(e),this},oe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?oe.readyWait++:oe.ready(!0)},ready:function(e){(e===!0?--oe.readyWait:oe.isReady)||(oe.isReady=!0,e!==!0&&--oe.readyWait>0||(be.resolveWith(Y,[oe]),oe.fn.triggerHandler&&(oe(Y).triggerHandler("ready"),oe(Y).off("ready"))))}}),oe.ready.promise=function(t){return be||(be=oe.Deferred(),"complete"===Y.readyState||"loading"!==Y.readyState&&!Y.documentElement.doScroll?e.setTimeout(oe.ready):(Y.addEventListener("DOMContentLoaded",A),e.addEventListener("load",A))),be.promise(t)},oe.ready.promise();var xe=function(e,t,n,r,i,o,A){var a=0,s=e.length,d=null==n;if("object"===oe.type(n)){i=!0;for(a in n)xe(e,t,a,n[a],!0,o,A)}else if(void 0!==r&&(i=!0,oe.isFunction(r)||(A=!0),d&&(A?(t.call(e,r),t=null):(d=t,t=function(e,t,n){return d.call(oe(e),n)})),t))for(;s>a;a++)t(e[a],n,A?r:r.call(e[a],a,t(e[a],n)));return i?e:d?t.call(e):s?t(e[0],n):o},De=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};a.uid=1,a.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!De(e))return{};var t=e[this.expando];return t||(t={},De(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[t]=n;else for(r in t)i[r]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,oe.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=e[this.expando];if(void 0!==o){if(void 0===t)this.register(e);else{oe.isArray(t)?r=t.concat(t.map(oe.camelCase)):(i=oe.camelCase(t),t in o?r=[t,i]:(r=i,r=r in o?[r]:r.match(Ee)||[])),n=r.length;for(;n--;)delete o[r[n]]}(void 0===t||oe.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!oe.isEmptyObject(t)}};var Te=new a,Pe=new a,Me=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Be=/[A-Z]/g;oe.extend({hasData:function(e){return Pe.hasData(e)||Te.hasData(e)},data:function(e,t,n){return Pe.access(e,t,n)},removeData:function(e,t){Pe.remove(e,t)},_data:function(e,t,n){return Te.access(e,t,n)},_removeData:function(e,t){Te.remove(e,t)}}),oe.fn.extend({data:function(e,t){var n,r,i,o=this[0],A=o&&o.attributes;if(void 0===e){if(this.length&&(i=Pe.get(o),1===o.nodeType&&!Te.get(o,"hasDataAttrs"))){for(n=A.length;n--;)A[n]&&(r=A[n].name,0===r.indexOf("data-")&&(r=oe.camelCase(r.slice(5)),s(o,r,i[r])));Te.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Pe.set(this,e)}):xe(this,function(t){var n,r;if(o&&void 0===t){if(n=Pe.get(o,e)||Pe.get(o,e.replace(Be,"-$&").toLowerCase()),void 0!==n)return n;if(r=oe.camelCase(e),n=Pe.get(o,r),void 0!==n)return n;if(n=s(o,r,void 0),void 0!==n)return n}else r=oe.camelCase(e),this.each(function(){var n=Pe.get(this,r);Pe.set(this,r,t),e.indexOf("-")>-1&&void 0!==n&&Pe.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Pe.remove(this,e)})}}),oe.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=Te.get(e,t),n&&(!r||oe.isArray(n)?r=Te.access(e,t,oe.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=oe.queue(e,t),r=n.length,i=n.shift(),o=oe._queueHooks(e,t),A=function(){oe.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,A,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Te.get(e,n)||Te.access(e,n,{empty:oe.Callbacks("once memory").add(function(){Te.remove(e,[t+"queue",n])})})}}),oe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?oe.queue(this[0],e):void 0===t?this:this.each(function(){var n=oe.queue(this,e,t);oe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&oe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){oe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=oe.Deferred(),o=this,A=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";A--;)n=Te.get(o[A],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var Ce=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ze=new RegExp("^(?:([+-])=|)("+Ce+")([a-z%]*)$","i"),Se=["Top","Right","Bottom","Left"],Qe=function(e,t){return e=t||e,"none"===oe.css(e,"display")||!oe.contains(e.ownerDocument,e)},ke=/^(?:checkbox|radio)$/i,Ie=/<([\w:-]+)/,Re=/^$|\/(?:java|ecma)script/i,qe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qe.optgroup=qe.option,qe.tbody=qe.tfoot=qe.colgroup=qe.caption=qe.thead,qe.th=qe.td;var Ne=/<|&#?\w+;/;!function(){var e=Y.createDocumentFragment(),t=e.appendChild(Y.createElement("div")),n=Y.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),re.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",re.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var je=/^key/,Fe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ve=/^([^.]*)(?:\.(.+)|)/;oe.event={global:{},add:function(e,t,n,r,i){var o,A,a,s,d,l,u,c,p,f,h,m=Te.get(e);if(m)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=oe.guid++),(s=m.events)||(s=m.events={}),(A=m.handle)||(A=m.handle=function(t){return"undefined"!=typeof oe&&oe.event.triggered!==t.type?oe.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Ee)||[""],d=t.length;d--;)a=Ve.exec(t[d])||[],p=h=a[1],f=(a[2]||"").split(".").sort(),p&&(u=oe.event.special[p]||{},p=(i?u.delegateType:u.bindType)||p,u=oe.event.special[p]||{},l=oe.extend({type:p,origType:h,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&oe.expr.match.needsContext.test(i),namespace:f.join(".")},o),(c=s[p])||(c=s[p]=[],c.delegateCount=0,u.setup&&u.setup.call(e,r,f,A)!==!1||e.addEventListener&&e.addEventListener(p,A)),u.add&&(u.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?c.splice(c.delegateCount++,0,l):c.push(l),oe.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,A,a,s,d,l,u,c,p,f,h,m=Te.hasData(e)&&Te.get(e);if(m&&(s=m.events)){for(t=(t||"").match(Ee)||[""],d=t.length;d--;)if(a=Ve.exec(t[d])||[],p=h=a[1],f=(a[2]||"").split(".").sort(),p){for(u=oe.event.special[p]||{},p=(r?u.delegateType:u.bindType)||p,c=s[p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),A=o=c.length;o--;)l=c[o],!i&&h!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(c.splice(o,1),
l.selector&&c.delegateCount--,u.remove&&u.remove.call(e,l));A&&!c.length&&(u.teardown&&u.teardown.call(e,f,m.handle)!==!1||oe.removeEvent(e,p,m.handle),delete s[p])}else for(p in s)oe.event.remove(e,p+t[d],n,r,!0);oe.isEmptyObject(s)&&Te.remove(e,"handle events")}},dispatch:function(e){e=oe.event.fix(e);var t,n,r,i,o,A=[],a=X.call(arguments),s=(Te.get(this,"events")||{})[e.type]||[],d=oe.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!d.preDispatch||d.preDispatch.call(this,e)!==!1){for(A=oe.event.handlers.call(this,e,s),t=0;(i=A[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,r=((oe.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,A=[],a=t.delegateCount,s=e.target;if(a&&s.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;s!==this;s=s.parentNode||this)if(1===s.nodeType&&(s.disabled!==!0||"click"!==e.type)){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?oe(i,this).index(s)>-1:oe.find(i,this,null,[s]).length),r[i]&&r.push(o);r.length&&A.push({elem:s,handlers:r})}return a<t.length&&A.push({elem:this,handlers:t.slice(a)}),A},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||Y,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[oe.expando])return e;var t,n,r,i=e.type,o=e,A=this.fixHooks[i];for(A||(this.fixHooks[i]=A=Fe.test(i)?this.mouseHooks:je.test(i)?this.keyHooks:{}),r=A.props?this.props.concat(A.props):this.props,e=new oe.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=Y),3===e.target.nodeType&&(e.target=e.target.parentNode),A.filter?A.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==h()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&oe.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return oe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},oe.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},oe.Event=function(e,t){return this instanceof oe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?p:f):this.type=e,t&&oe.extend(this,t),this.timeStamp=e&&e.timeStamp||oe.now(),void(this[oe.expando]=!0)):new oe.Event(e,t)},oe.Event.prototype={constructor:oe.Event,isDefaultPrevented:f,isPropagationStopped:f,isImmediatePropagationStopped:f,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=p,e&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=p,e&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=p,e&&e.stopImmediatePropagation(),this.stopPropagation()}},oe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){oe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||oe.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),oe.fn.extend({on:function(e,t,n,r){return m(this,e,t,n,r)},one:function(e,t,n,r){return m(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,oe(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=f),this.each(function(){oe.event.remove(this,e,n,t)})}});var Ue=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,We=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^true\/(.*)/,Oe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;oe.extend({htmlPrefilter:function(e){return e.replace(Ue,"<$1></$2>")},clone:function(e,t,n){var r,i,o,A,a=e.cloneNode(!0),s=oe.contains(e.ownerDocument,e);if(!(re.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||oe.isXMLDoc(e)))for(A=l(a),o=l(e),r=0,i=o.length;i>r;r++)E(o[r],A[r]);if(t)if(n)for(o=o||l(e),A=A||l(a),r=0,i=o.length;i>r;r++)y(o[r],A[r]);else y(e,a);return A=l(a,"script"),A.length>0&&u(A,!s&&l(e,"script")),a},cleanData:function(e){for(var t,n,r,i=oe.event.special,o=0;void 0!==(n=e[o]);o++)if(De(n)){if(t=n[Te.expando]){if(t.events)for(r in t.events)i[r]?oe.event.remove(n,r):oe.removeEvent(n,r,t.handle);n[Te.expando]=void 0}n[Pe.expando]&&(n[Pe.expando]=void 0)}}}),oe.fn.extend({domManip:b,detach:function(e){return x(this,e,!0)},remove:function(e){return x(this,e)},text:function(e){return xe(this,function(e){return void 0===e?oe.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return b(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=g(this,e);t.appendChild(e)}})},prepend:function(){return b(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=g(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return b(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return b(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(oe.cleanData(l(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return oe.clone(this,e,t)})},html:function(e){return xe(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!We.test(e)&&!qe[(Ie.exec(e)||["",""])[1].toLowerCase()]){e=oe.htmlPrefilter(e);try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(oe.cleanData(l(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return b(this,arguments,function(t){var n=this.parentNode;oe.inArray(this,e)<0&&(oe.cleanData(l(this)),n&&n.replaceChild(t,this))},e)}}),oe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){oe.fn[e]=function(e){for(var n,r=[],i=oe(e),o=i.length-1,A=0;o>=A;A++)n=A===o?this:this.clone(!0),oe(i[A])[t](n),_.apply(r,n.get());return this.pushStack(r)}});var Ge,Ze={HTML:"block",BODY:"block"},Je=/^margin/,Ye=new RegExp("^("+Ce+")(?!px)[a-z%]+$","i"),Xe=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Ke=function(e,t,n,r){var i,o,A={};for(o in t)A[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=A[o];return i},_e=Y.documentElement;!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",_e.appendChild(A);var t=e.getComputedStyle(a);n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,a.style.marginRight="50%",i="4px"===t.marginRight,_e.removeChild(A)}var n,r,i,o,A=Y.createElement("div"),a=Y.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",re.clearCloneStyle="content-box"===a.style.backgroundClip,A.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",A.appendChild(a),oe.extend(re,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},pixelMarginRight:function(){return null==r&&t(),i},reliableMarginLeft:function(){return null==r&&t(),o},reliableMarginRight:function(){var t,n=a.appendChild(Y.createElement("div"));return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",_e.appendChild(A),t=!parseFloat(e.getComputedStyle(n).marginRight),_e.removeChild(A),a.removeChild(n),t}}))}();var $e=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"},nt=["Webkit","O","Moz","ms"],rt=Y.createElement("div").style;oe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=P(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,A,a=oe.camelCase(t),s=e.style;return t=oe.cssProps[a]||(oe.cssProps[a]=B(a)||a),A=oe.cssHooks[t]||oe.cssHooks[a],void 0===n?A&&"get"in A&&void 0!==(i=A.get(e,!1,r))?i:s[t]:(o=typeof n,"string"===o&&(i=ze.exec(n))&&i[1]&&(n=d(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(oe.cssNumber[a]?"":"px")),re.clearCloneStyle||""!==n||0!==t.indexOf("background")||(s[t]="inherit"),A&&"set"in A&&void 0===(n=A.set(e,n,r))||(s[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,A,a=oe.camelCase(t);return t=oe.cssProps[a]||(oe.cssProps[a]=B(a)||a),A=oe.cssHooks[t]||oe.cssHooks[a],A&&"get"in A&&(i=A.get(e,!0,n)),void 0===i&&(i=P(e,t,r)),"normal"===i&&t in tt&&(i=tt[t]),""===n||n?(o=parseFloat(i),n===!0||isFinite(o)?o||0:i):i}}),oe.each(["height","width"],function(e,t){oe.cssHooks[t]={get:function(e,n,r){return n?$e.test(oe.css(e,"display"))&&0===e.offsetWidth?Ke(e,et,function(){return S(e,t,r)}):S(e,t,r):void 0},set:function(e,n,r){var i,o=r&&Xe(e),A=r&&z(e,t,r,"border-box"===oe.css(e,"boxSizing",!1,o),o);return A&&(i=ze.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=oe.css(e,t)),C(e,n,A)}}}),oe.cssHooks.marginLeft=M(re.reliableMarginLeft,function(e,t){return t?(parseFloat(P(e,"marginLeft"))||e.getBoundingClientRect().left-Ke(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px":void 0}),oe.cssHooks.marginRight=M(re.reliableMarginRight,function(e,t){return t?Ke(e,{display:"inline-block"},P,[e,"marginRight"]):void 0}),oe.each({margin:"",padding:"",border:"Width"},function(e,t){oe.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Se[r]+t]=o[r]||o[r-2]||o[0];return i}},Je.test(e)||(oe.cssHooks[e+t].set=C)}),oe.fn.extend({css:function(e,t){return xe(this,function(e,t,n){var r,i,o={},A=0;if(oe.isArray(t)){for(r=Xe(e),i=t.length;i>A;A++)o[t[A]]=oe.css(e,t[A],!1,r);return o}return void 0!==n?oe.style(e,t,n):oe.css(e,t)},e,t,arguments.length>1)},show:function(){return Q(this,!0)},hide:function(){return Q(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Qe(this)?oe(this).show():oe(this).hide()})}}),oe.Tween=k,k.prototype={constructor:k,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||oe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(oe.cssNumber[n]?"":"px")},cur:function(){var e=k.propHooks[this.prop];return e&&e.get?e.get(this):k.propHooks._default.get(this)},run:function(e){var t,n=k.propHooks[this.prop];return this.options.duration?this.pos=t=oe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):k.propHooks._default.set(this),this}},k.prototype.init.prototype=k.prototype,k.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=oe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){oe.fx.step[e.prop]?oe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[oe.cssProps[e.prop]]&&!oe.cssHooks[e.prop]?e.elem[e.prop]=e.now:oe.style(e.elem,e.prop,e.now+e.unit)}}},k.propHooks.scrollTop=k.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},oe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},oe.fx=k.prototype.init,oe.fx.step={};var it,ot,At=/^(?:toggle|show|hide)$/,at=/queueHooks$/;oe.Animation=oe.extend(F,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return d(n.elem,e,ze.exec(t),n),n}]},tweener:function(e,t){oe.isFunction(e)?(t=e,e=["*"]):e=e.match(Ee);for(var n,r=0,i=e.length;i>r;r++)n=e[r],F.tweeners[n]=F.tweeners[n]||[],F.tweeners[n].unshift(t)},prefilters:[N],prefilter:function(e,t){t?F.prefilters.unshift(e):F.prefilters.push(e)}}),oe.speed=function(e,t,n){var r=e&&"object"==typeof e?oe.extend({},e):{complete:n||!n&&t||oe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!oe.isFunction(t)&&t};return r.duration=oe.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in oe.fx.speeds?oe.fx.speeds[r.duration]:oe.fx.speeds._default,null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){oe.isFunction(r.old)&&r.old.call(this),r.queue&&oe.dequeue(this,r.queue)},r},oe.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Qe).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=oe.isEmptyObject(e),o=oe.speed(t,n,r),A=function(){var t=F(this,oe.extend({},e),o);(i||Te.get(this,"finish"))&&t.stop(!0)};return A.finish=A,i||o.queue===!1?this.each(A):this.queue(o.queue,A)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=oe.timers,A=Te.get(this);if(i)A[i]&&A[i].stop&&r(A[i]);else for(i in A)A[i]&&A[i].stop&&at.test(i)&&r(A[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||oe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Te.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=oe.timers,A=r?r.length:0;for(n.finish=!0,oe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;A>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),oe.each(["toggle","show","hide"],function(e,t){var n=oe.fn[t];oe.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(R(t,!0),e,r,i)}}),oe.each({slideDown:R("show"),slideUp:R("hide"),slideToggle:R("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){oe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),oe.timers=[],oe.fx.tick=function(){var e,t=0,n=oe.timers;for(it=oe.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||oe.fx.stop(),it=void 0},oe.fx.timer=function(e){oe.timers.push(e),e()?oe.fx.start():oe.timers.pop()},oe.fx.interval=13,oe.fx.start=function(){ot||(ot=e.setInterval(oe.fx.tick,oe.fx.interval))},oe.fx.stop=function(){e.clearInterval(ot),ot=null},oe.fx.speeds={slow:600,fast:200,_default:400},oe.fn.delay=function(t,n){return t=oe.fx?oe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=Y.createElement("input"),t=Y.createElement("select"),n=t.appendChild(Y.createElement("option"));e.type="checkbox",re.checkOn=""!==e.value,re.optSelected=n.selected,t.disabled=!0,re.optDisabled=!n.disabled,e=Y.createElement("input"),e.value="t",e.type="radio",re.radioValue="t"===e.value}();var st,dt=oe.expr.attrHandle;oe.fn.extend({attr:function(e,t){return xe(this,oe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){oe.removeAttr(this,e)})}}),oe.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?oe.prop(e,t,n):(1===o&&oe.isXMLDoc(e)||(t=t.toLowerCase(),i=oe.attrHooks[t]||(oe.expr.match.bool.test(t)?st:void 0)),void 0!==n?null===n?void oe.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=oe.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!re.radioValue&&"radio"===t&&oe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(Ee);if(o&&1===e.nodeType)for(;n=o[i++];)r=oe.propFix[n]||n,oe.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)}}),st={set:function(e,t,n){return t===!1?oe.removeAttr(e,n):e.setAttribute(n,n),n}},oe.each(oe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=dt[t]||oe.find.attr;dt[t]=function(e,t,r){var i,o;return r||(o=dt[t],dt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,dt[t]=o),i}});var lt=/^(?:input|select|textarea|button)$/i,ut=/^(?:a|area)$/i;oe.fn.extend({prop:function(e,t){return xe(this,oe.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[oe.propFix[e]||e]})}}),oe.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&oe.isXMLDoc(e)||(t=oe.propFix[t]||t,i=oe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=oe.find.attr(e,"tabindex");return t?parseInt(t,10):lt.test(e.nodeName)||ut.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),re.optSelected||(oe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),oe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oe.propFix[this.toLowerCase()]=this});var ct=/[\t\r\n\f]/g;oe.fn.extend({addClass:function(e){var t,n,r,i,o,A,a,s=0;if(oe.isFunction(e))return this.each(function(t){oe(this).addClass(e.call(this,t,V(this)))});if("string"==typeof e&&e)for(t=e.match(Ee)||[];n=this[s++];)if(i=V(n),r=1===n.nodeType&&(" "+i+" ").replace(ct," ")){for(A=0;o=t[A++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");a=oe.trim(r),i!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,r,i,o,A,a,s=0;if(oe.isFunction(e))return this.each(function(t){oe(this).removeClass(e.call(this,t,V(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(Ee)||[];n=this[s++];)if(i=V(n),r=1===n.nodeType&&(" "+i+" ").replace(ct," ")){for(A=0;o=t[A++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");a=oe.trim(r),i!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):oe.isFunction(e)?this.each(function(n){oe(this).toggleClass(e.call(this,n,V(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=oe(this),o=e.match(Ee)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||(t=V(this),t&&Te.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Te.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+V(n)+" ").replace(ct," ").indexOf(t)>-1)return!0;return!1}});var pt=/\r/g,ft=/[\x20\t\r\n\f]+/g;oe.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=oe.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,oe(this).val()):e,null==i?i="":"number"==typeof i?i+="":oe.isArray(i)&&(i=oe.map(i,function(e){return null==e?"":e+""})),t=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=oe.valHooks[i.type]||oe.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(pt,""):null==n?"":n)}}}),oe.extend({valHooks:{option:{get:function(e){var t=oe.find.attr(e,"value");return null!=t?t:oe.trim(oe.text(e)).replace(ft," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,A=o?null:[],a=o?i+1:r.length,s=0>i?a:o?i:0;a>s;s++)if(n=r[s],(n.selected||s===i)&&(re.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!oe.nodeName(n.parentNode,"optgroup"))){if(t=oe(n).val(),o)return t;A.push(t)}return A},set:function(e,t){for(var n,r,i=e.options,o=oe.makeArray(t),A=i.length;A--;)r=i[A],(r.selected=oe.inArray(oe.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),oe.each(["radio","checkbox"],function(){oe.valHooks[this]={set:function(e,t){return oe.isArray(t)?e.checked=oe.inArray(oe(e).val(),t)>-1:void 0}},re.checkOn||(oe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var ht=/^(?:focusinfocus|focusoutblur)$/;oe.extend(oe.event,{trigger:function(t,n,r,i){var o,A,a,s,d,l,u,c=[r||Y],p=ne.call(t,"type")?t.type:t,f=ne.call(t,"namespace")?t.namespace.split("."):[];if(A=a=r=r||Y,3!==r.nodeType&&8!==r.nodeType&&!ht.test(p+oe.event.triggered)&&(p.indexOf(".")>-1&&(f=p.split("."),p=f.shift(),f.sort()),d=p.indexOf(":")<0&&"on"+p,t=t[oe.expando]?t:new oe.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=f.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:oe.makeArray(n,[t]),u=oe.event.special[p]||{},i||!u.trigger||u.trigger.apply(r,n)!==!1)){if(!i&&!u.noBubble&&!oe.isWindow(r)){for(s=u.delegateType||p,ht.test(s+p)||(A=A.parentNode);A;A=A.parentNode)c.push(A),a=A;a===(r.ownerDocument||Y)&&c.push(a.defaultView||a.parentWindow||e)}for(o=0;(A=c[o++])&&!t.isPropagationStopped();)t.type=o>1?s:u.bindType||p,l=(Te.get(A,"events")||{})[t.type]&&Te.get(A,"handle"),l&&l.apply(A,n),l=d&&A[d],l&&l.apply&&De(A)&&(t.result=l.apply(A,n),t.result===!1&&t.preventDefault());return t.type=p,i||t.isDefaultPrevented()||u._default&&u._default.apply(c.pop(),n)!==!1||!De(r)||d&&oe.isFunction(r[p])&&!oe.isWindow(r)&&(a=r[d],a&&(r[d]=null),oe.event.triggered=p,r[p](),oe.event.triggered=void 0,a&&(r[d]=a)),t.result}},simulate:function(e,t,n){var r=oe.extend(new oe.Event,n,{type:e,isSimulated:!0});oe.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}}),oe.fn.extend({trigger:function(e,t){return this.each(function(){oe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?oe.event.trigger(e,t,n,!0):void 0}}),oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){oe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),oe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),re.focusin="onfocusin"in e,re.focusin||oe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){oe.event.simulate(t,e.target,oe.event.fix(e))};oe.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Te.access(r,t);i||r.addEventListener(e,n,!0),Te.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Te.access(r,t)-1;i?Te.access(r,t,i):(r.removeEventListener(e,n,!0),Te.remove(r,t))}}});var mt=e.location,gt=oe.now(),wt=/\?/;oe.parseJSON=function(e){return JSON.parse(e+"")},oe.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(r){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||oe.error("Invalid XML: "+t),n};var vt=/#.*$/,yt=/([?&])_=[^&]*/,Et=/^(.*?):[ \t]*([^\r\n]*)$/gm,bt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,xt=/^(?:GET|HEAD)$/,Dt=/^\/\//,Tt={},Pt={},Mt="*/".concat("*"),Bt=Y.createElement("a");Bt.href=mt.href,oe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:mt.href,type:"GET",isLocal:bt.test(mt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Mt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?L(L(e,oe.ajaxSettings),t):L(oe.ajaxSettings,e)},ajaxPrefilter:U(Tt),ajaxTransport:U(Pt),ajax:function(t,n){function r(t,n,r,a){var d,u,w,v,E,x=n;2!==y&&(y=2,s&&e.clearTimeout(s),i=void 0,A=a||"",b.readyState=t>0?4:0,d=t>=200&&300>t||304===t,r&&(v=H(c,b,r)),v=O(c,v,b,d),d?(c.ifModified&&(E=b.getResponseHeader("Last-Modified"),E&&(oe.lastModified[o]=E),E=b.getResponseHeader("etag"),E&&(oe.etag[o]=E)),204===t||"HEAD"===c.type?x="nocontent":304===t?x="notmodified":(x=v.state,u=v.data,w=v.error,d=!w)):(w=x,!t&&x||(x="error",0>t&&(t=0))),b.status=t,b.statusText=(n||x)+"",d?h.resolveWith(p,[u,x,b]):h.rejectWith(p,[b,x,w]),b.statusCode(g),g=void 0,l&&f.trigger(d?"ajaxSuccess":"ajaxError",[b,c,d?u:w]),m.fireWith(p,[b,x]),l&&(f.trigger("ajaxComplete",[b,c]),--oe.active||oe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,A,a,s,d,l,u,c=oe.ajaxSetup({},n),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?oe(p):oe.event,h=oe.Deferred(),m=oe.Callbacks("once memory"),g=c.statusCode||{},w={},v={},y=0,E="canceled",b={readyState:0,getResponseHeader:function(e){var t;if(2===y){if(!a)for(a={};t=Et.exec(A);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===y?A:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return y||(e=v[n]=v[n]||e,w[e]=t),this},overrideMimeType:function(e){return y||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>y)for(t in e)g[t]=[g[t],e[t]];else b.always(e[b.status]);return this},abort:function(e){var t=e||E;return i&&i.abort(t),r(0,t),this}};if(h.promise(b).complete=m.add,b.success=b.done,b.error=b.fail,c.url=((t||c.url||mt.href)+"").replace(vt,"").replace(Dt,mt.protocol+"//"),c.type=n.method||n.type||c.method||c.type,c.dataTypes=oe.trim(c.dataType||"*").toLowerCase().match(Ee)||[""],null==c.crossDomain){d=Y.createElement("a");try{d.href=c.url,d.href=d.href,c.crossDomain=Bt.protocol+"//"+Bt.host!=d.protocol+"//"+d.host}catch(x){c.crossDomain=!0}}if(c.data&&c.processData&&"string"!=typeof c.data&&(c.data=oe.param(c.data,c.traditional)),W(Tt,c,n,b),2===y)return b;l=oe.event&&c.global,l&&0===oe.active++&&oe.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!xt.test(c.type),o=c.url,c.hasContent||(c.data&&(o=c.url+=(wt.test(o)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=yt.test(o)?o.replace(yt,"$1_="+gt++):o+(wt.test(o)?"&":"?")+"_="+gt++)),c.ifModified&&(oe.lastModified[o]&&b.setRequestHeader("If-Modified-Since",oe.lastModified[o]),oe.etag[o]&&b.setRequestHeader("If-None-Match",oe.etag[o])),(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&b.setRequestHeader("Content-Type",c.contentType),b.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+Mt+"; q=0.01":""):c.accepts["*"]);for(u in c.headers)b.setRequestHeader(u,c.headers[u]);if(c.beforeSend&&(c.beforeSend.call(p,b,c)===!1||2===y))return b.abort();E="abort";for(u in{success:1,error:1,complete:1})b[u](c[u]);if(i=W(Pt,c,n,b)){if(b.readyState=1,l&&f.trigger("ajaxSend",[b,c]),2===y)return b;c.async&&c.timeout>0&&(s=e.setTimeout(function(){b.abort("timeout")},c.timeout));try{y=1,i.send(w,r)}catch(x){if(!(2>y))throw x;r(-1,x)}}else r(-1,"No Transport");return b},getJSON:function(e,t,n){return oe.get(e,t,n,"json")},getScript:function(e,t){return oe.get(e,void 0,t,"script")}}),oe.each(["get","post"],function(e,t){oe[t]=function(e,n,r,i){return oe.isFunction(n)&&(i=i||r,r=n,n=void 0),oe.ajax(oe.extend({url:e,type:t,dataType:i,data:n,success:r},oe.isPlainObject(e)&&e))}}),oe._evalUrl=function(e){return oe.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},oe.fn.extend({wrapAll:function(e){var t;return oe.isFunction(e)?this.each(function(t){oe(this).wrapAll(e.call(this,t))}):(this[0]&&(t=oe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return oe.isFunction(e)?this.each(function(t){oe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=oe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=oe.isFunction(e);return this.each(function(n){oe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)}).end()}}),oe.expr.filters.hidden=function(e){return!oe.expr.filters.visible(e)},oe.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var Ct=/%20/g,zt=/\[\]$/,St=/\r?\n/g,Qt=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;oe.param=function(e,t){var n,r=[],i=function(e,t){t=oe.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(e)||e.jquery&&!oe.isPlainObject(e))oe.each(e,function(){i(this.name,this.value)});else for(n in e)G(n,e[n],t,i);return r.join("&").replace(Ct,"+")},oe.fn.extend({serialize:function(){return oe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=oe.prop(this,"elements");return e?oe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!oe(this).is(":disabled")&&kt.test(this.nodeName)&&!Qt.test(e)&&(this.checked||!ke.test(e))}).map(function(e,t){var n=oe(this).val();return null==n?null:oe.isArray(n)?oe.map(n,function(e){return{name:t.name,value:e.replace(St,"\r\n")}}):{name:t.name,value:n.replace(St,"\r\n")}}).get()}}),oe.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}};var It={0:200,1223:204},Rt=oe.ajaxSettings.xhr();re.cors=!!Rt&&"withCredentials"in Rt,re.ajax=Rt=!!Rt,oe.ajaxTransport(function(t){var n,r;return re.cors||Rt&&!t.crossDomain?{send:function(i,o){var A,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(A in t.xhrFields)a[A]=t.xhrFields[A];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
for(A in i)a.setRequestHeader(A,i[A]);n=function(e){return function(){n&&(n=r=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(It[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),r=a.onerror=n("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(s){if(n)throw s}},abort:function(){n&&n()}}:void 0}),oe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return oe.globalEval(e),e}}}),oe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),oe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=oe("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Y.head.appendChild(t[0])},abort:function(){n&&n()}}}});var qt=[],Nt=/(=)\?(?=&|$)|\?\?/;oe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=qt.pop()||oe.expando+"_"+gt++;return this[e]=!0,e}}),oe.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,A,a=t.jsonp!==!1&&(Nt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Nt.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=oe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Nt,"$1"+i):t.jsonp!==!1&&(t.url+=(wt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return A||oe.error(i+" was not called"),A[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){A=arguments},r.always(function(){void 0===o?oe(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,qt.push(i)),A&&oe.isFunction(o)&&o(A[0]),A=o=void 0}),"script"):void 0}),oe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||Y;var r=fe.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=c([e],t,i),i&&i.length&&oe(i).remove(),oe.merge([],r.childNodes))};var jt=oe.fn.load;oe.fn.load=function(e,t,n){if("string"!=typeof e&&jt)return jt.apply(this,arguments);var r,i,o,A=this,a=e.indexOf(" ");return a>-1&&(r=oe.trim(e.slice(a)),e=e.slice(0,a)),oe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),A.length>0&&oe.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,A.html(r?oe("<div>").append(oe.parseHTML(e)).find(r):e)}).always(n&&function(e,t){A.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){oe.fn[t]=function(e){return this.on(t,e)}}),oe.expr.filters.animated=function(e){return oe.grep(oe.timers,function(t){return e===t.elem}).length},oe.offset={setOffset:function(e,t,n){var r,i,o,A,a,s,d,l=oe.css(e,"position"),u=oe(e),c={};"static"===l&&(e.style.position="relative"),a=u.offset(),o=oe.css(e,"top"),s=oe.css(e,"left"),d=("absolute"===l||"fixed"===l)&&(o+s).indexOf("auto")>-1,d?(r=u.position(),A=r.top,i=r.left):(A=parseFloat(o)||0,i=parseFloat(s)||0),oe.isFunction(t)&&(t=t.call(e,n,oe.extend({},a))),null!=t.top&&(c.top=t.top-a.top+A),null!=t.left&&(c.left=t.left-a.left+i),"using"in t?t.using.call(e,c):u.css(c)}},oe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){oe.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;if(o)return t=o.documentElement,oe.contains(t,r)?(i=r.getBoundingClientRect(),n=Z(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===oe.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),oe.nodeName(e[0],"html")||(r=e.offset()),r.top+=oe.css(e[0],"borderTopWidth",!0),r.left+=oe.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-oe.css(n,"marginTop",!0),left:t.left-r.left-oe.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===oe.css(e,"position");)e=e.offsetParent;return e||_e})}}),oe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;oe.fn[e]=function(r){return xe(this,function(e,r,i){var o=Z(e);return void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length)}}),oe.each(["top","left"],function(e,t){oe.cssHooks[t]=M(re.pixelPosition,function(e,n){return n?(n=P(e,t),Ye.test(n)?oe(e).position()[t]+"px":n):void 0})}),oe.each({Height:"height",Width:"width"},function(e,t){oe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){oe.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),A=n||(r===!0||i===!0?"margin":"border");return xe(this,function(t,n,r){var i;return oe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?oe.css(t,n,A):oe.style(t,n,r,A)},t,o?r:void 0,o,null)}})}),oe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),oe.fn.andSelf=oe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return oe});var Ft=e.jQuery,Vt=e.$;return oe.noConflict=function(t){return e.$===oe&&(e.$=Vt),t&&e.jQuery===oe&&(e.jQuery=Ft),oe},t||(e.jQuery=e.$=oe),oe}),/**
 * EvEmitter v1.0.2
 * Lil' event emitter
 * MIT License
 */
function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}(this,function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},r=n[e]=n[e]||[];return-1==r.indexOf(t)&&r.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{},r=n[e]=n[e]||{};return r[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var r=n.indexOf(t);return-1!=r&&n.splice(r,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var r=0,i=n[r];t=t||[];for(var o=this._onceEvents&&this._onceEvents[e];i;){var A=o&&o[i];A&&(this.off(e,i),delete o[i]),i.apply(this,t),r+=A?0:1,i=n[r]}return this}},e}),function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,n,r,i,o,A;for(var a in tests)if(tests.hasOwnProperty(a)){if(e=[],t=tests[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=is(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],A=o.split("."),1===A.length?Modernizr[A[0]]=r:(!Modernizr[A[0]]||Modernizr[A[0]]instanceof Boolean||(Modernizr[A[0]]=new Boolean(Modernizr[A[0]])),Modernizr[A[0]][A[1]]=r),classes.push((r?"":"no-")+A.join("-"))}}function setClasses(e){var t=docElement.className,n=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),isSVG?docElement.className.baseVal=t:docElement.className=t)}function addTest(e,t){if("object"==typeof e)for(var n in e)hasOwnProp(e,n)&&addTest(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),setClasses([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,n,r){var i,o,A,a,s="modernizr",d=createElement("div"),l=getBody();if(parseInt(n,10))for(;n--;)A=createElement("div"),A.id=r?r[n]:s+(n+1),d.appendChild(A);return i=createElement("style"),i.type="text/css",i.id="s"+s,(l.fake?l:d).appendChild(i),l.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e)),d.id=s,l.fake&&(l.style.background="",l.style.overflow="hidden",a=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(l)),o=t(d,e),l.fake?(l.parentNode.removeChild(l),docElement.style.overflow=a,docElement.offsetHeight):d.parentNode.removeChild(d),!!o}function contains(e,t){return!!~(""+e).indexOf(t)}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function nativeTestProps(e,t){var n=e.length;if("CSS"in window&&"supports"in window.CSS){for(;n--;)if(window.CSS.supports(domToCSS(e[n]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var r=[];n--;)r.push("("+domToCSS(e[n])+":"+t+")");return r=r.join(" or "),injectElementWithStyles("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return undefined}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function testProps(e,t,n,r){function i(){A&&(delete mStyle.style,delete mStyle.modElem)}if(r=is(r,"undefined")?!1:r,!is(n,"undefined")){var o=nativeTestProps(e,n);if(!is(o,"undefined"))return o}for(var A,a,s,d,l,u=["modernizr","tspan"];!mStyle.style;)A=!0,mStyle.modElem=createElement(u.shift()),mStyle.style=mStyle.modElem.style;for(s=e.length,a=0;s>a;a++)if(d=e[a],l=mStyle.style[d],contains(d,"-")&&(d=cssToDOM(d)),mStyle.style[d]!==undefined){if(r||is(n,"undefined"))return i(),"pfx"==t?d:!0;try{mStyle.style[d]=n}catch(c){}if(mStyle.style[d]!=l)return i(),"pfx"==t?d:!0}return i(),!1}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],is(r,"function")?fnBind(r,n||t):r);return!1}function testPropsAll(e,t,n,r,i){var o=e.charAt(0).toUpperCase()+e.slice(1),A=(e+" "+cssomPrefixes.join(o+" ")+o).split(" ");return is(t,"string")||is(t,"undefined")?testProps(A,t,r,i):(A=(e+" "+domPrefixes.join(o+" ")+o).split(" "),testDOMProps(A,t,n))}function testAllProps(e,t,n){return testPropsAll(e,undefined,undefined,t,n)}function roundedEquals(e,t){return e-1===t||e===t||e+1===t}var tests=[],ModernizrProto={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){tests.push({name:e,fn:t,options:n})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var classes=[],docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),hasOwnProp;!function(){var e={}.hasOwnProperty;hasOwnProp=is(e,"undefined")||is(e.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest});var omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(e){var t,n=prefixes.length,r=window.CSSRule;if("undefined"==typeof r)return undefined;if(!e)return!1;if(e=e.replace(/^@/,""),t=e.replace(/-/g,"_").toUpperCase()+"_RULE",t in r)return"@"+e;for(var i=0;n>i;i++){var o=prefixes[i],A=o.toUpperCase()+"_"+t;if(A in r)return"@-"+o.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var hasEvent=function(){function e(e,n){var r;return e?(n&&"string"!=typeof n||(n=createElement(n||"div")),e="on"+e,r=e in n,!r&&t&&(n.setAttribute||(n=createElement("div")),n.setAttribute(e,""),r="function"==typeof n[e],n[e]!==undefined&&(n[e]=undefined),n.removeAttribute(e)),r):!1}var t=!("onblur"in document.documentElement);return e}();ModernizrProto.hasEvent=hasEvent;var html5;isSVG||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=D.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=D.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),D.elements=n+" "+e,d(t)}function o(e){var t=x[e[E]];return t||(t={},b++,e[E]=b,x[b]=t),t}function A(e,n,r){if(n||(n=t),m)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():y.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||v.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),m)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),A=0,a=r(),s=a.length;s>A;A++)i.createElement(a[A]);return i}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return D.shivMethods?A(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(D,t.frag)}function d(e){e||(e=t);var r=o(e);return!D.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),m||s(e,r),e}function l(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,o=RegExp("^(?:"+r().join("|")+")$","i"),A=[];i--;)t=n[i],o.test(t.nodeName)&&A.push(t.applyElement(u(t)));return A}function u(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(P+":"+e.nodeName);r--;)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function c(e){for(var t,n=e.split("{"),i=n.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),A="$1"+P+"\\:$2";i--;)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(o,A),n[i]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function f(e){function t(){clearTimeout(A._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,A=o(e),a=e.namespaces,s=e.parentWindow;return!M||e.printShived?e:("undefined"==typeof a[P]&&a.add(P),s.attachEvent("onbeforeprint",function(){t();for(var o,A,a,s=e.styleSheets,d=[],u=s.length,p=Array(u);u--;)p[u]=s[u];for(;a=p.pop();)if(!a.disabled&&T.test(a.media)){try{o=a.imports,A=o.length}catch(f){A=0}for(u=0;A>u;u++)p.push(o[u]);try{d.push(a.cssText)}catch(f){}}d=c(d.reverse().join("")),i=l(e),r=n(e,d)}),s.attachEvent("onafterprint",function(){p(i),clearTimeout(A._removeSheetTimer),A._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,m,g="3.7.3",w=e.html5||{},v=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,E="_html5shiv",b=0,x={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,m=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,m=!0}}();var D={elements:w.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:w.shivCSS!==!1,supportsUnknownElements:m,shivMethods:w.shivMethods!==!1,type:"default",shivDocument:d,createElement:A,createDocumentFragment:a,addElements:i};e.html5=D,d(t);var T=/^$|\b(?:all|print)\b/,P="html5shiv",M=!m&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();D.type+=" print",D.shivPrint=f,f(t),"object"==typeof module&&module.exports&&(module.exports=D)}("undefined"!=typeof window?window:this,document);var err=function(){},warn=function(){};window.console&&(err=function(){var e=console.error?"error":"log";window.console[e].apply(window.console,Array.prototype.slice.call(arguments))},warn=function(){var e=console.warn?"warn":"log";window.console[e].apply(window.console,Array.prototype.slice.call(arguments))}),ModernizrProto.load=function(){"yepnope"in window?(warn("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we’ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),window.yepnope.apply(window,[].slice.call(arguments,0))):err("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var mq=function(){var e=window.matchMedia||window.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var t=!1;return injectElementWithStyles("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle).position}),t}}();ModernizrProto.mq=mq;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style}),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(e,t,n){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,n):testPropsAll(e,"pfx"))},prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];ModernizrProto._prefixes=prefixes;var prefixedCSS=ModernizrProto.prefixedCSS=function(e){var t=prefixed(e);return t&&domToCSS(t)};ModernizrProto.testAllProps=testAllProps;var testProp=ModernizrProto.testProp=function(e,t,n){return testProps([e],undefined,t,n)},testStyles=ModernizrProto.testStyles=injectElementWithStyles;/*!
{
  "name": "a[download] Attribute",
  "property": "adownload",
  "caniuse" : "download",
  "tags": ["media", "attribute"],
  "builderAliases": ["a_download"],
  "notes": [{
    "name": "WhatWG Reference",
    "href": "https://developers.whatwg.org/links.html#downloading-resources"
  }]
}
!*/
Modernizr.addTest("adownload",!window.externalHost&&"download"in createElement("a")),/*!
{
  "name": "Ambient Light Events",
  "property": "ambientlight",
  "notes": [{
    "name": "W3C Ambient Light Events",
    "href": "https://www.w3.org/TR/ambient-light/"
  }]
}
!*/
Modernizr.addTest("ambientlight",hasEvent("devicelight",window)),/*!
{
  "name": "Application Cache",
  "property": "applicationcache",
  "caniuse": "offline-apps",
  "tags": ["storage", "offline"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
  }],
  "polyfills": ["html5gears"]
}
!*/
Modernizr.addTest("applicationcache","applicationCache"in window),/*!
{
  "name" : "HTML5 Audio Element",
  "property": "audio",
  "tags" : ["html5", "audio", "media"]
}
!*/
Modernizr.addTest("audio",function(){var e=createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/
Modernizr.addTest("audioloop","loop"in createElement("audio")),/*!
{
  "name": "Audio Preload",
  "property": "audiopreload",
  "tags": ["audio", "media"],
  "async" : true,
  "warnings": ["This test is very large – only include it if you absolutely need it"]
}
!*/
Modernizr.addAsyncTest(function(){function e(n){clearTimeout(t);var i=n!==undefined&&"loadeddata"===n.type;r.removeEventListener("loadeddata",e,!1),addTest("audiopreload",i),r.parentNode.removeChild(r)}var t,n=300,r=createElement("audio"),i=r.style;if(!(Modernizr.audio&&"preload"in r))return void addTest("audiopreload",!1);i.position="absolute",i.height=0,i.width=0;try{if(Modernizr.audio.mp3)r.src="data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";else if(Modernizr.audio.m4a)r.src="data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";else if(Modernizr.audio.ogg)r.src="data:audio/ogg;base64,T2dnUwACAAAAAAAAAAD/QwAAAAAAAM2LVKsBHgF2b3JiaXMAAAAAAUSsAAAAAAAAgLsAAAAAAAC4AU9nZ1MAAAAAAAAAAAAA/0MAAAEAAADmvOe6Dy3/////////////////MgN2b3JiaXMdAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAwNzA2MjIAAAAAAQV2b3JiaXMfQkNWAQAAAQAYY1QpRplS0kqJGXOUMUaZYpJKiaWEFkJInXMUU6k515xrrLm1IIQQGlNQKQWZUo5SaRljkCkFmVIQS0kldBI6J51jEFtJwdaYa4tBthyEDZpSTCnElFKKQggZU4wpxZRSSkIHJXQOOuYcU45KKEG4nHOrtZaWY4updJJK5yRkTEJIKYWSSgelU05CSDWW1lIpHXNSUmpB6CCEEEK2IIQNgtCQVQAAAQDAQBAasgoAUAAAEIqhGIoChIasAgAyAAAEoCiO4iiOIzmSY0kWEBqyCgAAAgAQAADAcBRJkRTJsSRL0ixL00RRVX3VNlVV9nVd13Vd13UgNGQVAAABAEBIp5mlGiDCDGQYCA1ZBQAgAAAARijCEANCQ1YBAAABAABiKDmIJrTmfHOOg2Y5aCrF5nRwItXmSW4q5uacc845J5tzxjjnnHOKcmYxaCa05pxzEoNmKWgmtOacc57E5kFrqrTmnHPGOaeDcUYY55xzmrTmQWo21uaccxa0pjlqLsXmnHMi5eZJbS7V5pxzzjnnnHPOOeecc6oXp3NwTjjnnHOi9uZabkIX55xzPhmne3NCOOecc84555xzzjnnnHOC0JBVAAAQAABBGDaGcacgSJ+jgRhFiGnIpAfdo8MkaAxyCqlHo6ORUuoglFTGSSmdIDRkFQAACAAAIYQUUkghhRRSSCGFFFKIIYYYYsgpp5yCCiqppKKKMsoss8wyyyyzzDLrsLPOOuwwxBBDDK20EktNtdVYY62555xrDtJaaa211koppZRSSikIDVkFAIAAABAIGWSQQUYhhRRSiCGmnHLKKaigAkJDVgEAgAAAAgAAADzJc0RHdERHdERHdERHdETHczxHlERJlERJtEzL1ExPFVXVlV1b1mXd9m1hF3bd93Xf93Xj14VhWZZlWZZlWZZlWZZlWZZlWYLQkFUAAAgAAIAQQgghhRRSSCGlGGPMMeegk1BCIDRkFQAACAAgAAAAwFEcxXEkR3IkyZIsSZM0S7M8zdM8TfREURRN01RFV3RF3bRF2ZRN13RN2XRVWbVdWbZt2dZtX5Zt3/d93/d93/d93/d93/d1HQgNWQUASAAA6EiOpEiKpEiO4ziSJAGhIasAABkAAAEAKIqjOI7jSJIkSZakSZ7lWaJmaqZneqqoAqEhqwAAQAAAAQAAAAAAKJriKabiKaLiOaIjSqJlWqKmaq4om7Lruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7rui4QGrIKAJAAANCRHMmRHEmRFEmRHMkBQkNWAQAyAAACAHAMx5AUybEsS9M8zdM8TfRET/RMTxVd0QVCQ1YBAIAAAAIAAAAAADAkw1IsR3M0SZRUS7VUTbVUSxVVT1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTVN0zRNIDRkJQAABADAYo3B5SAhJSXl3hDCEJOeMSYhtV4hBJGS3jEGFYOeMqIMct5C4xCDHggNWREARAEAAMYgxxBzyDlHqZMSOeeodJQa5xyljlJnKcWYYs0oldhSrI1zjlJHraOUYiwtdpRSjanGAgAAAhwAAAIshEJDVgQAUQAAhDFIKaQUYow5p5xDjCnnmHOGMeYcc44556B0UirnnHROSsQYc445p5xzUjonlXNOSiehAACAAAcAgAALodCQFQFAnACAQZI8T/I0UZQ0TxRFU3RdUTRd1/I81fRMU1U90VRVU1Vt2VRVWZY8zzQ901RVzzRV1VRVWTZVVZZFVdVt03V123RV3ZZt2/ddWxZ2UVVt3VRd2zdV1/Zd2fZ9WdZ1Y/I8VfVM03U903Rl1XVtW3VdXfdMU5ZN15Vl03Vt25VlXXdl2fc103Rd01Vl2XRd2XZlV7ddWfZ903WF35VlX1dlWRh2XfeFW9eV5XRd3VdlVzdWWfZ9W9eF4dZ1YZk8T1U903RdzzRdV3VdX1dd19Y105Rl03Vt2VRdWXZl2fddV9Z1zzRl2XRd2zZdV5ZdWfZ9V5Z13XRdX1dlWfhVV/Z1WdeV4dZt4Tdd1/dVWfaFV5Z14dZ1Ybl1XRg+VfV9U3aF4XRl39eF31luXTiW0XV9YZVt4VhlWTl+4ViW3feVZXRdX1ht2RhWWRaGX/id5fZ943h1XRlu3efMuu8Mx++k+8rT1W1jmX3dWWZfd47hGDq/8OOpqq+brisMpywLv+3rxrP7vrKMruv7qiwLvyrbwrHrvvP8vrAso+z6wmrLwrDatjHcvm4sv3Acy2vryjHrvlG2dXxfeArD83R1XXlmXcf2dXTjRzh+ygAAgAEHAIAAE8pAoSErAoA4AQCPJImiZFmiKFmWKIqm6LqiaLqupGmmqWmeaVqaZ5qmaaqyKZquLGmaaVqeZpqap5mmaJqua5qmrIqmKcumasqyaZqy7LqybbuubNuiacqyaZqybJqmLLuyq9uu7Oq6pFmmqXmeaWqeZ5qmasqyaZquq3meanqeaKqeKKqqaqqqraqqLFueZ5qa6KmmJ4qqaqqmrZqqKsumqtqyaaq2bKqqbbuq7Pqybeu6aaqybaqmLZuqatuu7OqyLNu6L2maaWqeZ5qa55mmaZqybJqqK1uep5qeKKqq5ommaqqqLJumqsqW55mqJ4qq6omea5qqKsumatqqaZq2bKqqLZumKsuubfu+68qybqqqbJuqauumasqybMu+78qq7oqmKcumqtqyaaqyLduy78uyrPuiacqyaaqybaqqLsuybRuzbPu6aJqybaqmLZuqKtuyLfu6LNu678qub6uqrOuyLfu67vqucOu6MLyybPuqrPq6K9u6b+sy2/Z9RNOUZVM1bdtUVVl2Zdn2Zdv2fdE0bVtVVVs2TdW2ZVn2fVm2bWE0Tdk2VVXWTdW0bVmWbWG2ZeF2Zdm3ZVv2ddeVdV/XfePXZd3murLty7Kt+6qr+rbu+8Jw667wCgAAGHAAAAgwoQwUGrISAIgCAACMYYwxCI1SzjkHoVHKOecgZM5BCCGVzDkIIZSSOQehlJQy5yCUklIIoZSUWgshlJRSawUAABQ4AAAE2KApsThAoSErAYBUAACD41iW55miatqyY0meJ4qqqaq27UiW54miaaqqbVueJ4qmqaqu6+ua54miaaqq6+q6aJqmqaqu67q6Lpqiqaqq67qyrpumqqquK7uy7Oumqqqq68quLPvCqrquK8uybevCsKqu68qybNu2b9y6ruu+7/vCka3rui78wjEMRwEA4AkOAEAFNqyOcFI0FlhoyEoAIAMAgDAGIYMQQgYhhJBSSiGllBIAADDgAAAQYEIZKDRkRQAQJwAAGEMppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkgppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";else{if(!Modernizr.audio.wav)return void addTest("audiopreload",!1);r.src="data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA"}}catch(o){return void addTest("audiopreload",!1)}r.setAttribute("preload","auto"),r.style.cssText="display:none",docElement.appendChild(r),setTimeout(function(){r.addEventListener("loadeddata",e,!1),t=setTimeout(e,n)},0)}),/*!
{
  "name": "Web Audio API",
  "property": "webaudio",
  "caniuse": "audio-api",
  "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
  "tags": ["audio", "media"],
  "builderAliases": ["audio_webaudio_api"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3 Specification",
    "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
  }]
}
!*/
Modernizr.addTest("webaudio",function(){var e="webkitAudioContext"in window,t="AudioContext"in window;return Modernizr._config.usePrefixes?e||t:t}),/*!
{
  "name": "Battery API",
  "property": "batteryapi",
  "aliases": ["battery-api"],
  "builderAliases": ["battery_api"],
  "tags": ["device", "media"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
  }]
}
!*/
Modernizr.addTest("batteryapi",!!prefixed("battery",navigator),{aliases:["battery-api"]}),/*!
{
  "name": "Low Battery Level",
  "property": "lowbattery",
  "tags": ["hardware", "mobile"],
  "builderAliases": ["battery_level"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/battery"
  }]
}
!*/
Modernizr.addTest("lowbattery",function(){var e=.2,t=prefixed("battery",navigator);return!!(t&&!t.charging&&t.level<=e)}),/*!
{
  "name": "Blob constructor",
  "property": "blobconstructor",
  "aliases": ["blob-constructor"],
  "builderAliases": ["blob_constructor"],
  "caniuse": "blobbuilder",
  "notes": [{
    "name": "W3C spec",
    "href": "https://w3c.github.io/FileAPI/#constructorBlob"
  }],
  "polyfills": ["blobjs"]
}
!*/
Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),/*!
{
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
!*/
Modernizr.addTest("canvas",function(){var e=createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}),/*!
{
  "name": "canvas blending support",
  "property": "canvasblending",
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
      "name": "HTML5 Spec",
      "href": "https://dvcs.w3.org/hg/FXTF/rawfile/tip/compositing/index.html#blending"
    },
    {
      "name": "Article",
      "href": "https://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas"
    }]
}
!*/
Modernizr.addTest("canvasblending",function(){if(Modernizr.canvas===!1)return!1;var e=createElement("canvas").getContext("2d");try{e.globalCompositeOperation="screen"}catch(t){}return"screen"===e.globalCompositeOperation});/*!
{
  "name": "canvas.toDataURL type support",
  "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
  "tags": ["canvas"],
  "builderAliases": ["canvas_todataurl_type"],
  "async" : false,
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
  }]
}
!*/
var canvas=createElement("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===canvas.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===canvas.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var e=!1;try{e=!!Modernizr.canvas&&0===canvas.toDataURL("image/webp").indexOf("data:image/webp")}catch(t){}return e}),/*!
{
  "name": "canvas winding support",
  "property": ["canvaswinding"],
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
    "name": "Article",
    "href": "https://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/"
  }]
}
!*/
Modernizr.addTest("canvaswinding",function(){if(Modernizr.canvas===!1)return!1;var e=createElement("canvas").getContext("2d");return e.rect(0,0,10,10),e.rect(2,2,6,6),e.isPointInPath(5,5,"evenodd")===!1}),/*!
{
  "name": "Canvas text",
  "property": "canvastext",
  "caniuse": "canvas-text",
  "tags": ["canvas", "graphics"],
  "polyfills": ["canvastext"]
}
!*/
Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof createElement("canvas").getContext("2d").fillText}),/*!
{
  "name": "Content Editable",
  "property": "contenteditable",
  "caniuse": "contenteditable",
  "notes": [{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/interaction.html#contenteditable"
  }]
}
!*/
Modernizr.addTest("contenteditable",function(){if("contentEditable"in docElement){var e=createElement("div");return e.contentEditable=!0,"true"===e.contentEditable}}),/*!
{
  "name": "Context menus",
  "property": "contextmenu",
  "caniuse": "menu",
  "notes": [{
    "name": "W3C spec",
    "href": "http://www.w3.org/TR/html5/interactive-elements.html#context-menus"
  },{
    "name": "thewebrocks.com Demo",
    "href": "http://thewebrocks.com/demos/context-menu/"
  }],
  "polyfills": ["jquery-contextmenu"]
}
!*/
Modernizr.addTest("contextmenu","contextMenu"in docElement&&"HTMLMenuItemElement"in window),/*!
{
  "name": "Cookies",
  "property": "cookies",
  "tags": ["storage"],
  "authors": ["tauren"]
}
!*/
Modernizr.addTest("cookies",function(){try{document.cookie="cookietest=1";var e=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),/*!
{
  "name": "Cross-Origin Resource Sharing",
  "property": "cors",
  "caniuse": "cors",
  "authors": ["Theodoor van Donge"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS"
  }],
  "polyfills": ["pmxdr", "ppx", "flxhr"]
}
!*/
Modernizr.addTest("cors","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest);/*!
{
  "name": "Web Cryptography",
  "property": "cryptography",
  "caniuse": "cryptography",
  "tags": ["crypto"],
  "authors": ["roblarsen"],
  "notes": [{
    "name": "W3C Editor's Draft",
    "href": "https://www.w3.org/TR/WebCryptoAPI/"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
var crypto=prefixed("crypto",window);Modernizr.addTest("crypto",!!prefixed("subtle",crypto));/*!
{
  "name": "getRandomValues",
  "property": "getrandomvalues",
  "caniuse": "window.crypto.getRandomValues",
  "tags": ["crypto"],
  "authors": ["komachi"],
  "notes": [{
    "name": "W3C Editor’s Draft",
    "href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
var crypto=prefixed("crypto",window),supportsGetRandomValues;if(crypto&&"getRandomValues"in crypto&&"Uint32Array"in window){var array=new Uint32Array(10),values=crypto.getRandomValues(array);supportsGetRandomValues=values&&is(values[0],"number")}Modernizr.addTest("getrandomvalues",!!supportsGetRandomValues),/*!
{
  "name": "cssall",
  "property": "cssall",
  "notes": [{
    "name": "Spec",
    "href": "https://drafts.csswg.org/css-cascade/#all-shorthand"
  }]
}
!*/
Modernizr.addTest("cssall","all"in docElement.style),/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),/*!
{
  "name": "Appearance",
  "property": "appearance",
  "caniuse": "css-appearance",
  "tags": ["css"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance"
  },{
    "name": "CSS-Tricks CSS Almanac: appearance",
    "href": "https://css-tricks.com/almanac/properties/a/appearance/"
  }]
}
!*/
Modernizr.addTest("appearance",testAllProps("appearance")),/*!
{
  "name": "Backdrop Filter",
  "property": "backdropfilter",
  "authors": ["Brian Seward"],
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Editor’s Draft specification",
      "href": "https://drafts.fxtf.org/filters-2/#BackdropFilterProperty"
    },
    {
      "name": "Caniuse for CSS Backdrop Filter",
      "href": "http://caniuse.com/#feat=css-backdrop-filter"
    },
    {
      "name": "WebKit Blog introduction + Demo",
      "href": "https://www.webkit.org/blog/3632/introducing-backdrop-filters/"
    }
  ]
}
!*/
Modernizr.addTest("backdropfilter",testAllProps("backdropFilter")),/*!
{
  "name": "CSS Background Blend Mode",
  "property": "backgroundblendmode",
  "caniuse": "css-backgroundblendmode",
  "tags": ["css"],
  "notes": [
    {
      "name": "CSS Blend Modes could be the next big thing in Web Design",
      "href": " https://medium.com/@bennettfeely/css-blend-modes-could-be-the-next-big-thing-in-web-design-6b51bf53743a"
    }, {
      "name": "Demo",
      "href": "http://bennettfeely.com/gradients/"
    }
  ]
}
!*/
Modernizr.addTest("backgroundblendmode",prefixed("backgroundBlendMode","text")),/*!
{
  "name": "CSS Background Clip Text",
  "property": "backgroundcliptext",
  "authors": ["ausi"],
  "tags": ["css"],
  "notes": [
    {
      "name": "CSS Tricks Article",
      "href": "https://css-tricks.com/image-under-text/"
    },
    {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"
    },
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/199"
    }
  ]
}
!*/
Modernizr.addTest("backgroundcliptext",function(){return testAllProps("backgroundClip","text")}),/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
Modernizr.addTest("bgpositionshorthand",function(){var e=createElement("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),/*!
{
  "name": "Background Position XY",
  "property": "bgpositionxy",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_xy"],
  "authors": ["Allan Lei", "Brandom Aaron"],
  "notes": [{
    "name": "Demo",
    "href": "https://jsfiddle.net/allanlei/R8AYS/"
  }, {
    "name": "Adapted From",
    "href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
  }]
}
!*/
Modernizr.addTest("bgpositionxy",function(){return testAllProps("backgroundPositionX","3px",!0)&&testAllProps("backgroundPositionY","5px",!0)}),/*!
{
  "name": "Background Repeat",
  "property": ["bgrepeatspace", "bgrepeatround"],
  "tags": ["css"],
  "builderAliases": ["css_backgroundrepeat"],
  "authors": ["Ryan Seddon"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"
  }, {
    "name": "Test Page",
    "href": "https://jsbin.com/uzesun/"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/ryanseddon/yMLTQ/6/"
  }]
}
!*/
Modernizr.addTest("bgrepeatround",testAllProps("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",testAllProps("backgroundRepeat","space")),/*!
{
  "name": "Background Size",
  "property": "backgroundsize",
  "tags": ["css"],
  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/396"
  }]
}
!*/
Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",!0)),/*!
{
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "builderAliases": ["css_backgroundsizecover"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-size"
  }]
}
!*/
Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),/*!
{
  "name": "Border Image",
  "property": "borderimage",
  "caniuse": "border-image",
  "polyfills": ["css3pie"],
   "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
  "tags": ["css"]
}
!*/
Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",!0)),/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",!0)),/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/
Modernizr.addTest("boxshadow",testAllProps("boxShadow","1px 1px",!0)),/*!
{
  "name": "Box Sizing",
  "property": "boxsizing",
  "caniuse": "css3-boxsizing",
  "polyfills": ["borderboxmodel", "boxsizingpolyfill", "borderbox"],
  "tags": ["css"],
  "builderAliases": ["css_boxsizing"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/248"
  }]
}
!*/
Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=createElement("a");return n.style.cssText=e+prefixes.join(t+e),!!n.style.length}),/*!
{
  "name": "CSS :checked pseudo-selector",
  "caniuse": "css-sel3",
  "property": "checked",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/879"
  }]
}
!*/
Modernizr.addTest("checked",function(){return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),/*!
{
  "name": "CSS Font ch Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "csschunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
Modernizr.addTest("csschunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e}),/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=testAllProps("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=testAllProps("column"+n[r]),"breakbefore"!==e&&"breakafter"!==e&&"breakinside"!=e||(t=t||testAllProps(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),/*!
{
  "name": "CSS Cubic Bezier Range",
  "property": "cubicbezierrange",
  "tags": ["css"],
  "builderAliases": ["css_cubicbezierrange"],
  "doc" : null,
  "authors": ["@calvein"],
  "warnings": ["cubic-bezier values can't be > 1 for Webkit until [bug #45761](https://bugs.webkit.org/show_bug.cgi?id=45761) is fixed"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "http://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
Modernizr.addTest("cubicbezierrange",function(){var e=createElement("a");return e.style.cssText=prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),/*!
{
  "name": "CSS Display run-in",
  "property": "display-runin",
  "authors": ["alanhogan"],
  "tags": ["css"],
  "builderAliases": ["css_displayrunin"],
  "notes": [{
    "name": "CSS Tricks Article",
    "href": "https://css-tricks.com/596-run-in/"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/198"
  }]
}
!*/
Modernizr.addTest("displayrunin",testAllProps("display","run-in"),{aliases:["display-runin"]}),/*!
{
  "name": "CSS Display table",
  "property": "displaytable",
  "caniuse": "css-table",
  "authors": ["scottjehl"],
  "tags": ["css"],
  "builderAliases": ["css_displaytable"],
  "notes": [{
    "name": "Detects for all additional table display values",
    "href": "http://pastebin.com/Gk9PeVaQ"
  }]
}
!*/
testStyles("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2),/*!
{
  "name": "CSS text-overflow ellipsis",
  "property": "ellipsis",
  "caniuse": "text-overflow",
  "polyfills": [
    "text-overflow"
  ],
  "tags": ["css"]
}
!*/
Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis"));/*!
{
  "name": "CSS.escape()",
  "property": "cssescape",
  "polyfills": [
    "css-escape"
  ],
  "tags": [
    "css",
    "cssom"
  ]
}
!*/
var CSS=window.CSS;Modernizr.addTest("cssescape",CSS?"function"==typeof CSS.escape:!1),/*!
{
  "name": "CSS Font ex Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "cssexunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/
Modernizr.addTest("cssexunit",function(){var e,t=modElem.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e});/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/
var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/
Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var e=createElement("a");return e.style.cssText=prefixes.join("filter:blur(2px); "),!!e.style.length&&(document.documentMode===undefined||document.documentMode>9)}),/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),/*!
{
  "name": "Flexbox (legacy)",
  "property": "flexboxlegacy",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _old_ flexbox",
    "href": "https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
  }]
}
!*/
Modernizr.addTest("flexboxlegacy",testAllProps("boxDirection","reverse",!0)),/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/
Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",!0)),/*!
{
  "name": "Flex Line Wrapping",
  "property": "flexwrap",
  "tags": ["css", "flexbox"],
  "notes": [{
    "name": "W3C Flexible Box Layout spec",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "Does not imply a modern implementation – see documentation."
  ]
}
!*/
Modernizr.addTest("flexwrap",testAllProps("flexWrap","wrap",!0));/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/
var blacklist=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,i=533>t&&e.match(/android/gi);return n||i||r}();blacklist?Modernizr.addTest("fontface",!1):testStyles('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=document.getElementById("smodernizr"),r=n.sheet||n.styleSheet,i=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",o=/src/i.test(i)&&0===i.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",o)}),/*!
{
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"],
  "notes": [{
    "name": "W3C CSS Selectors Level 3 spec",
    "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
  },{
    "name": "MDN article on :before",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  },{
    "name": "MDN article on :after",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  }]
}
!*/
testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
  },{
    "name": "Linear Gradient Syntax",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
  },{
    "name": "W3C Gradient Spec",
    "href": "https://drafts.csswg.org/css-images-3/#gradients"
  }]
}
!*/
Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,o=prefixes.length-1;o>i;i++)e=0===i?"to ":"",r+=t+prefixes[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var A=createElement("a"),a=A.style;return a.cssText=r,(""+a.backgroundImage).indexOf("gradient")>-1}),/*! {
  "name": "hairline",
  "property": "csshairline",
  "tags": ["css"],
  "authors": ["strarsis"],
  "notes": [{
    "name": "Blog post about CSS retina hairlines",
    "href": "http://dieulot.net/css-retina-hairline"
  },{
    "name": "Derived from",
    "href": "https://gist.github.com/dieulot/520a49463f6058fbc8d1"
  }]
}
!*/
Modernizr.addTest("hairline",function(){return testStyles("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
Modernizr.addTest("hsla",function(){var e=createElement("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",contains(e.backgroundColor,"rgba")||contains(e.backgroundColor,"hsla")}),/*!
{
  "name": "CSS Hyphens",
  "caniuse": "css-hyphens",
  "property": ["csshyphens", "softhyphens", "softhyphensfind"],
  "tags": ["css"],
  "builderAliases": ["css_hyphens"],
  "async" : true,
  "authors": ["David Newton"],
  "warnings": [
    "These tests currently require document.body to be present",
    "If loading Hyphenator.js via yepnope, be cautious of issue 158: http://code.google.com/p/hyphenator/issues/detail?id=158",
    "This is very large – only include it if you absolutely need it"
    ],
  "notes": [{
    "name": "The Current State of Hyphenation on the Web.",
    "href": "http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web"
  },{
    "name": "Hyphenation Test Page",
    "href": "http://davidnewton.ca/demos/hyphenation/test.html"
  },{
    "name": "Hyphenation is Language Specific",
    "href": " http://code.google.com/p/hyphenator/source/diff?spec=svn975&r=975&format=side&path=/trunk/Hyphenator.js#sc_svn975_313"
  },{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/312"
  }]
}
!*/
Modernizr.addAsyncTest(function(){function e(){function n(){try{var e=createElement("div"),t=createElement("span"),n=e.style,r=0,i=0,o=!1,A=document.body.firstElementChild||document.body.firstChild;return e.appendChild(t),t.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(e,A),n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=t.offsetHeight,i=t.offsetWidth,n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+prefixes.join("hyphens:auto; "),o=t.offsetHeight!=r||t.offsetWidth!=i,document.body.removeChild(e),e.removeChild(t),o}catch(a){return!1}}function r(e,t){try{var n=createElement("div"),r=createElement("span"),i=n.style,o=0,A=!1,a=!1,s=!1,d=document.body.firstElementChild||document.body.firstChild;return i.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(r),document.body.insertBefore(n,d),r.innerHTML="mm",o=r.offsetHeight,r.innerHTML="m"+e+"m",a=r.offsetHeight>o,t?(r.innerHTML="m<br />m",o=r.offsetWidth,r.innerHTML="m"+e+"m",s=r.offsetWidth>o):s=!0,a===!0&&s===!0&&(A=!0),document.body.removeChild(n),n.removeChild(r),A}catch(l){return!1}}function i(e){try{var t,n=createElement("input"),r=createElement("div"),i="lebowski",o=!1,A=document.body.firstElementChild||document.body.firstChild;r.innerHTML=i+e+i,document.body.insertBefore(r,A),document.body.insertBefore(n,r),n.setSelectionRange?(n.focus(),n.setSelectionRange(0,0)):n.createTextRange&&(t=n.createTextRange(),t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select());try{window.find?o=window.find(i+i):(t=window.self.document.body.createTextRange(),o=t.findText(i+i))}catch(a){o=!1}return document.body.removeChild(r),document.body.removeChild(n),o}catch(a){return!1}}return document.body||document.getElementsByTagName("body")[0]?(addTest("csshyphens",function(){if(!testAllProps("hyphens","auto",!0))return!1;try{return n()}catch(e){return!1}}),addTest("softhyphens",function(){try{return r("&#173;",!0)&&r("&#8203;",!1)}catch(e){return!1}}),void addTest("softhyphensfind",function(){try{return i("&#173;")&&i("&#8203;")}catch(e){return!1}})):void setTimeout(e,t)}var t=300;setTimeout(e,t)}),/*!
{
  "name": "CSS :invalid pseudo-class",
  "property": "cssinvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
  }]
}
!*/
Modernizr.addTest("cssinvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=createElement("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),/*!
{
  "name": "CSS :last-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "lastchild",
  "tags": ["css"],
  "builderAliases": ["css_lastchild"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/304"
  }]
}
!*/
testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),/*!
{
  "name": "CSS Mask",
  "caniuse": "css-masks",
  "property": "cssmask",
  "tags": ["css"],
  "builderAliases": ["css_mask"],
  "notes": [
    {
      "name": "Webkit blog on CSS Masks",
      "href": "https://webkit.org/blog/181/css-masks/"
    },
    {
      "name": "Safari Docs",
      "href": "https://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html"
    },
    {
      "name": "CSS SVG mask",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/mask"
    },
    {
      "name": "Combine with clippaths for awesomeness",
      "href": "https://generic.cx/for/webkit/test.html"
    }
  ]
}
!*/
Modernizr.addTest("cssmask",testAllProps("maskRepeat","repeat-x",!0)),/*!
{
  "name": "CSS Media Queries",
  "caniuse": "css-mediaqueries",
  "property": "mediaqueries",
  "tags": ["css"],
  "builderAliases": ["css_mediaqueries"]
}
!*/
Modernizr.addTest("mediaqueries",mq("only all")),/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/
Modernizr.addTest("multiplebgs",function(){var e=createElement("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),/*!
{
  "name": "CSS :nth-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "nthchild",
  "tags": ["css"],
  "notes": [
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/pull/685"
    },
    {
      "name": "Sitepoint :nth-child documentation",
      "href": "http://reference.sitepoint.com/css/pseudoclass-nthchild"
    }
  ],
  "authors": ["@emilchristensen"],
  "warnings": ["Known false negative in Safari 3.1 and Safari 3.2.2"]
}
!*/
testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),/*!
{
  "name": "CSS Object Fit",
  "caniuse": "object-fit",
  "property": "objectfit",
  "tags": ["css"],
  "builderAliases": ["css_objectfit"],
  "notes": [{
    "name": "Opera Article on Object Fit",
    "href": "https://dev.opera.com/articles/css3-object-fit-object-position/"
  }]
}
!*/
Modernizr.addTest("objectfit",!!prefixed("objectFit"),{aliases:["object-fit"]}),/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
Modernizr.addTest("opacity",function(){var e=createElement("a").style;return e.cssText=prefixes.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),/*!
{
  "name": "CSS Overflow Scrolling",
  "property": "overflowscrolling",
  "tags": ["css"],
  "builderAliases": ["css_overflow_scrolling"],
  "warnings": ["Introduced in iOS5b2. API is subject to change."],
  "notes": [{
    "name": "Article on iOS overflow scrolling",
    "href": "https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/"
  }]
}
!*/
Modernizr.addTest("overflowscrolling",testAllProps("overflowScrolling","touch",!0)),/*!
{
  "name": "CSS Pointer Events",
  "caniuse": "pointer-events",
  "property": "csspointerevents",
  "authors": ["ausi"],
  "tags": ["css"],
  "builderAliases": ["css_pointerevents"],
  "notes": [
    {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"
    },{
      "name": "Test Project Page",
      "href": "https://ausi.github.com/Feature-detection-technique-for-pointer-events/"
    },{
      "name": "Test Project Wiki",
      "href": "https://github.com/ausi/Feature-detection-technique-for-pointer-events/wiki"
    },
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/80"
    }
  ]
}
!*/
Modernizr.addTest("csspointerevents",function(){var e=createElement("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),/*!
{
  "name": "CSS position: sticky",
  "property": "csspositionsticky",
  "tags": ["css"],
  "builderAliases": ["css_positionsticky"],
  "notes": [{
    "name": "Chrome bug report",
    "href":"https://code.google.com/p/chromium/issues/detail?id=322972"
  }],
  "warnings": [ "using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+" ]
}
!*/
Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=createElement("a"),r=n.style;return r.cssText=e+prefixes.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)}),/*!
{
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csspseudoanimations",function(){var e=!1;if(!Modernizr.cssanimations||!window.getComputedStyle)return e;var t=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(t,function(t){e="10px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),/*!
{
  "name": "CSS Generated Content Transitions",
  "property": "csspseudotransitions",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csspseudotransitions",function(){var e=!1;if(!Modernizr.csstransitions||!window.getComputedStyle)return e;var t='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(t,function(t){window.getComputedStyle(t,":before").getPropertyValue("font-size"),t.className+="trigger",e="5px"===window.getComputedStyle(t,":before").getPropertyValue("font-size")}),e}),/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/
Modernizr.addTest("cssreflections",testAllProps("boxReflect","above",!0)),/*!
{
  "name": "CSS Regions",
  "caniuse": "css-regions",
  "authors": ["Mihai Balan"],
  "property": "regions",
  "tags": ["css"],
  "builderAliases": ["css_regions"],
  "notes": [{
    "name": "W3C Specification",
    "href": "https://www.w3.org/TR/css3-regions/"
  }]
}
!*/
Modernizr.addTest("regions",function(){if(isSVG)return!1;var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto"),n=!1;if(!e||!t)return n;var r=createElement("iframe"),i=createElement("div"),o=createElement("div"),A=createElement("div"),a="modernizr_flow_for_regions_check";o.innerText="M",i.style.cssText="top: 150px; left: 150px; padding: 0px;",A.style.cssText="width: 50px; height: 50px; padding: 42px;",A.style[e]=a,i.appendChild(o),i.appendChild(A),docElement.appendChild(i);var s,d,l=o.getBoundingClientRect();return o.style[t]=a,s=o.getBoundingClientRect(),d=parseInt(s.left-l.left,10),docElement.removeChild(i),42==d?n=!0:(docElement.appendChild(r),l=r.getBoundingClientRect(),r.style[t]=a,s=r.getBoundingClientRect(),l.height>0&&l.height!==s.height&&0===s.height&&(n=!0)),o=A=i=r=undefined,n}),/*!
{
  "name": "CSS Font rem Units",
  "caniuse": "rem",
  "authors": ["nsfmc"],
  "property": "cssremunit",
  "tags": ["css"],
  "builderAliases": ["css_remunit"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-values/#relative0"
  },{
    "name": "Font Size with rem by Jonathan Snook",
    "href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
  }]
}
!*/
Modernizr.addTest("cssremunit",function(){var e=createElement("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),/*!
{
  "name": "CSS UI Resize",
  "property": "cssresize",
  "caniuse": "css-resize",
  "tags": ["css"],
  "builderAliases": ["css_resize"],
  "notes": [{
    "name": "W3C Specification",
    "href": "https://www.w3.org/TR/css3-ui/#resize"
  },{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/resize"
  }]
}
!*/
Modernizr.addTest("cssresize",testAllProps("resize","both",!0)),/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "https://css-tricks.com/rgba-browser-support/"
  }]
}
!*/
Modernizr.addTest("rgba",function(){var e=createElement("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),/*!
{
  "name": "CSS Stylable Scrollbars",
  "property": "cssscrollbar",
  "tags": ["css"],
  "builderAliases": ["css_scrollbars"]
}
!*/
testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)}),/*!
{
  "name": "CSS Shapes",
  "property": "shapes",
  "tags": ["css"],
  "notes": [{
    "name": "CSS Shapes W3C specification",
    "href": "https://www.w3.org/TR/css-shapes"
  },{
    "name": "Examples from Adobe",
    "href": "http://webplatform.adobe.com/shapes/"
  }, {
    "name": "Samples showcasing uses of Shapes",
    "href": "http://codepen.io/collection/qFesk"
  }]
}
!*/
Modernizr.addTest("shapes",testAllProps("shapeOutside","content-box",!0)),/*!
{
  "name": "CSS general sibling selector",
  "caniuse": "css-sel3",
  "property": "siblinggeneral",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/889"
  }]
}
!*/
Modernizr.addTest("siblinggeneral",function(){return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),/*!
{
  "name": "CSS Subpixel Fonts",
  "property": "subpixelfont",
  "tags": ["css"],
  "builderAliases": ["css_subpixelfont"],
  "authors": [
    "@derSchepp",
    "@gerritvanaaken",
    "@rodneyrehm",
    "@yatil",
    "@ryanseddon"
  ],
  "notes": [{
    "name": "Origin Test",
    "href": "https://github.com/gerritvanaaken/subpixeldetect"
  }]
}
!*/
testStyles("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(e){var t=e.firstChild;t.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",window.getComputedStyle?"44px"!==window.getComputedStyle(t,null).getPropertyValue("width"):!1)},1,["subpixel"]),/*!
{
  "name": "CSS :target pseudo-class",
  "caniuse": "css-sel3",
  "property": "target",
  "tags": ["css"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
  }],
  "authors": ["@zachleat"],
  "warnings": ["Opera Mini supports :target but doesn't update the hash for anchor links."]
}
!*/
Modernizr.addTest("target",function(){var e=window.document;if(!("querySelectorAll"in e))return!1;try{return e.querySelectorAll(":target"),!0}catch(t){return!1}}),/*!
{
  "name": "CSS text-align-last",
  "property": "textalignlast",
  "tags": ["css"],
  "knownBugs": ["IE does not support the 'start' or 'end' values."],
  "notes": [{
      "name": "Quicksmode",
      "href": "http://www.quirksmode.org/css/text/textalignlast.html"
    },{
      "name": "MDN",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last"
    }]
}
!*/
Modernizr.addTest("textalignlast",testAllProps("textAlignLast")),/*!
{
  "name": "CSS textshadow",
  "property": "textshadow",
  "caniuse": "css-textshadow",
  "tags": ["css"],
  "knownBugs": ["FF3.0 will false positive on this test"]
}
!*/
Modernizr.addTest("textshadow",testProp("textShadow","1px 1px")),/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&testAllProps("transform","scale(1)",!0)}),/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
Modernizr.addTest("csstransforms3d",function(){var e=!!testAllProps("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in docElement.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",testStyles(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),/*!
{
  "name": "CSS Transform Style preserve-3d",
  "property": "preserve3d",
  "authors": ["edmellum"],
  "tags": ["css"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/762"
  }]
}
!*/
Modernizr.addTest("preserve3d",testAllProps("transformStyle","preserve-3d")),/*!
{
  "name": "CSS user-select",
  "property": "userselect",
  "caniuse": "user-select-none",
  "authors": ["ryan seddon"],
  "tags": ["css"],
  "builderAliases": ["css_userselect"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/250"
  }]
}
!*/
Modernizr.addTest("userselect",testAllProps("userSelect","none",!0)),/*!
{
  "name": "CSS :valid pseudo-class",
  "property": "cssvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid"
  }]
}
!*/
Modernizr.addTest("cssvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=createElement("input");return e.appendChild(t),t.clientWidth>10})}),/*!
{
  "name": "CSS vh unit",
  "property": "cssvhunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vhunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "Similar JSFiddle",
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
testStyles("#modernizr { height: 50vh; }",function(e){var t=parseInt(window.innerHeight/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);Modernizr.addTest("cssvhunit",n==t)}),/*!
{
  "name": "CSS vmax unit",
  "property": "cssvmaxunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vmaxunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/
testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,A=r.clientHeight/100,a=parseInt(50*Math.max(o,A),10),s=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",roundedEquals(a,s)||roundedEquals(a,s-i))},3),/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vminunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/
testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,A=r.clientHeight/100,a=parseInt(50*Math.min(o,A),10),s=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvminunit",roundedEquals(a,s)||roundedEquals(a,s-i))},3),/*!
{
  "name": "CSS vw unit",
  "property": "cssvwunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vwunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
testStyles("#modernizr { width: 50vw; }",function(e){var t=parseInt(window.innerWidth/2,10),n=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);Modernizr.addTest("cssvwunit",n==t)}),/*!
{
  "name": "will-change",
  "property": "willchange",
  "notes": [{
    "name": "Spec",
    "href": "https://drafts.csswg.org/css-will-change/"
  }]
}
!*/
Modernizr.addTest("willchange","willChange"in docElement.style),/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Exclusions spec",
      "href": "https://www.w3.org/TR/css3-exclusions"
    },
    {
      "name": "Example by Adobe",
      "href": "http://html.adobe.com/webstandards/cssexclusions"
    }
  ]
}
!*/
Modernizr.addTest("wrapflow",function(){var e=prefixed("wrapFlow");if(!e||isSVG)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),n=createElement("div"),r=createElement("div"),i=createElement("span");r.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",i.innerText="X",n.appendChild(r),n.appendChild(i),docElement.appendChild(n);var o=i.offsetLeft;return docElement.removeChild(n),r=i=n=undefined,150==o}),/*!
{
  "name": "Custom protocol handler",
  "property": "customprotocolhandler",
  "authors": ["Ben Schwarz"],
  "builderAliases": ["custom_protocol_handler"],
  "notes": [{
    "name": "WHATWG overview",
    "href": "https://developers.whatwg.org/timers.html#custom-handlers"
  },{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.registerProtocolHandler"
  }],
  "warnings": [],
  "polyfills": []
}
!*/
Modernizr.addTest("customprotocolhandler",function(){if(!navigator.registerProtocolHandler)return!1;try{navigator.registerProtocolHandler("thisShouldFail")}catch(e){return e instanceof TypeError}return!1}),/*!
{
  "name": "CustomEvent",
  "property": "customevent",
  "tags": ["customevent"],
  "authors": ["Alberto Elias"],
  "notes": [{
    "name": "W3C DOM reference",
    "href": "https://www.w3.org/TR/DOM-Level-3-Events/#interface-CustomEvent"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/docs/Web/API/CustomEvent"
  }],
  "polyfills": ["eventlistener"]
}
!*/
Modernizr.addTest("customevent","CustomEvent"in window&&"function"==typeof window.CustomEvent),/*!
{
  "name": "Dart",
  "property": "dart",
  "authors": ["Theodoor van Donge"],
  "notes": [{
    "name": "Language website",
    "href": "https://www.dartlang.org/"
  }]
}
!*/
Modernizr.addTest("dart",!!prefixed("startDart",navigator)),/*!
{
  "name": "DataView",
  "property": "dataview",
  "authors": ["Addy Osmani"],
  "builderAliases": ["dataview_api"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/JavaScript_typed_arrays/DataView"
  }],
  "polyfills": ["jdataview"]
}
!*/
Modernizr.addTest("dataview","undefined"!=typeof DataView&&"getFloat64"in DataView.prototype),/*!
{
  "name": "classList",
  "caniuse": "classlist",
  "property": "classlist",
  "tags": ["dom"],
  "builderAliases": ["dataview_api"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/DOM/element.classList"
  }]
}
!*/
Modernizr.addTest("classlist","classList"in docElement),/*!
{
  "name": "createElement with Attributes",
  "property": ["createelementattrs", "createelement-attrs"],
  "tags": ["dom"],
  "builderAliases": ["dom_createElement_attrs"],
  "authors": ["James A. Rosen"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/258"
  }]
}
!*/
Modernizr.addTest("createelementattrs",function(){try{return"test"==createElement('<input name="test" />').getAttribute("name")}catch(e){return!1}},{aliases:["createelement-attrs"]}),/*!
{
  "name": "dataset API",
  "caniuse": "dataset",
  "property": "dataset",
  "tags": ["dom"],
  "builderAliases": ["dom_dataset"],
  "authors": ["@phiggins42"]
}
!*/
Modernizr.addTest("dataset",function(){var e=createElement("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)}),/*!
{
  "name": "Document Fragment",
  "property": "documentfragment",
  "notes": [{
    "name": "W3C DOM Level 1 Reference",
    "href": "https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-B63ED1A3"
  }, {
    "name": "SitePoint Reference",
    "href": "http://reference.sitepoint.com/javascript/DocumentFragment"
  }, {
    "name": "QuirksMode Compatibility Tables",
    "href": "http://www.quirksmode.org/m/w3c_core.html#t112"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "knownBugs": ["false-positive on Blackberry 9500, see QuirksMode note"],
  "tags": []
}
!*/
Modernizr.addTest("documentfragment",function(){return"createDocumentFragment"in document&&"appendChild"in docElement}),/*!
{
  "name": "[hidden] Attribute",
  "property": "hidden",
  "tags": ["dom"],
  "notes": [{
    "name": "WHATWG: The hidden attribute",
    "href": "https://developers.whatwg.org/editing.html#the-hidden-attribute"
  }, {
    "name": "original implementation of detect code",
    "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L38"
  }],
  "polyfills": ["html5shiv"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
Modernizr.addTest("hidden","hidden"in createElement("a")),/*!
{
  "name": "microdata",
  "property": "microdata",
  "tags": ["dom"],
  "builderAliases": ["dom_microdata"],
  "notes": [{
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/microdata/"
  }]
}
!*/
Modernizr.addTest("microdata","getItems"in document),/*!
{
  "name": "DOM4 MutationObserver",
  "property": "mutationobserver",
  "caniuse": "mutationobserver",
  "tags": ["dom"],
  "authors": ["Karel Sedláček (@ksdlck)"],
  "polyfills": ["mutationobservers"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"
  }]
}
!*/
Modernizr.addTest("mutationobserver",!!window.MutationObserver||!!window.WebKitMutationObserver);var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};Modernizr.input=function(e){for(var t=0,n=e.length;n>t;t++)attrs[e[t]]=!!(e[t]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs),/*!
{
  "name": "datalist Element",
  "caniuse": "datalist",
  "property": "datalistelem",
  "tags": ["elem"],
  "builderAliases": ["elem_datalist"],
  "warnings": ["This test is a dupe of Modernizr.input.list. Only around for legacy reasons."],
  "notes": [{
    "name": "CSS Tricks Article",
    "href": "https://css-tricks.com/15346-relevant-dropdowns-polyfill-for-datalist/"
  },{
    "name": "Mike Taylor Code",
    "href": "https://miketaylr.com/code/datalist.html"
  }]
}
!*/
Modernizr.addTest("datalistelem",Modernizr.input.list),/*!
{
  "name": "details Element",
  "caniuse": "details",
  "property": "details",
  "tags": ["elem"],
  "builderAliases": ["elem_details"],
  "authors": ["@mathias"],
  "notes": [{
    "name": "Mathias' Original",
    "href": "https://mathiasbynens.be/notes/html5-details-jquery#comment-35"
  }]
}
!*/
Modernizr.addTest("details",function(){var e,t=createElement("details");return"open"in t?(testStyles("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e):!1}),/*!
{
  "name": "output Element",
  "property": "outputelem",
  "tags": ["elem"],
  "builderAliases": ["elem_output"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#the-output-element"
  }]
}
!*/
Modernizr.addTest("outputelem","value"in createElement("output")),/*!
{
  "name": "picture Element",
  "property": "picture",
  "tags": ["elem"],
  "authors": ["Scott Jehl", "Mat Marquis"],
  "notes": [{
    "name": "Specification",
    "href": "http://picture.responsiveimages.org"
  },{
    "name": "Relevant spec issue",
    "href": "https://github.com/ResponsiveImagesCG/picture-element/issues/87"
  }]
}
!*/
Modernizr.addTest("picture","HTMLPictureElement"in window),/*!
{
  "name": "progress Element",
  "caniuse": "progress",
  "property": ["progressbar", "meter"],
  "tags": ["elem"],
  "builderAliases": ["elem_progress_meter"],
  "authors": ["Stefan Wallin"]
}
!*/
Modernizr.addTest("progressbar",createElement("progress").max!==undefined),Modernizr.addTest("meter",createElement("meter").max!==undefined),/*!
{
  "name": "ruby, rp, rt Elements",
  "caniuse": "ruby",
  "property": "ruby",
  "tags": ["elem"],
  "builderAliases": ["elem_ruby"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-ruby-element"
  }]
}
!*/
Modernizr.addTest("ruby",function(){function e(e,t){var n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function t(){docElement.removeChild(n),n=null,r=null,i=null}var n=createElement("ruby"),r=createElement("rt"),i=createElement("rp"),o="display",A="fontSize";return n.appendChild(i),n.appendChild(r),docElement.appendChild(n),"none"==e(i,o)||"ruby"==e(n,o)&&"ruby-text"==e(r,o)||"6pt"==e(i,A)&&"6pt"==e(r,A)?(t(),!0):(t(),!1)}),/*!
{
  "name": "Template Tag",
  "property": "template",
  "tags": ["elem"],
  "notes": [{
    "name": "HTML5Rocks Article",
    "href": "http://www.html5rocks.com/en/tutorials/webcomponents/template/"
  },{
    "name": "W3 Spec",
    "href": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html"
  }]
}
!*/
Modernizr.addTest("template","content"in createElement("template")),/*!
{
  "name": "time Element",
  "property": "time",
  "tags": ["elem"],
  "builderAliases": ["elem_time"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-time-element"
  }]
}
!*/
Modernizr.addTest("time","valueAsDate"in createElement("time")),/*!
{
  "name": "Track element and Timed Text Track",
  "property": ["texttrackapi", "track"],
  "tags": ["elem"],
  "builderAliases": ["elem_track"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3 track Element Spec",
    "href": "http://www.w3.org/TR/html5/video.html#the-track-element"
  },{
    "name": "W3 track API Spec",
    "href": "http://www.w3.org/TR/html5/media-elements.html#text-track-api"
  }],
  "warnings": ["While IE10 has implemented the track element, IE10 does not expose the underlying APIs to create timed text tracks by JS (really sad)"]
}
!*/
Modernizr.addTest("texttrackapi","function"==typeof createElement("video").addTextTrack),Modernizr.addTest("track","kind"in createElement("track")),/*!
{
  "name": "Unknown Elements",
  "property": "unknownelements",
  "tags": ["elem"],
  "notes": [{
    "name": "The Story of the HTML5 Shiv",
    "href": "https://www.paulirish.com/2011/the-history-of-the-html5-shiv/"
  }, {
    "name": "original implementation of detect code",
    "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L36"
  }],
  "polyfills": ["html5shiv"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
Modernizr.addTest("unknownelements",function(){var e=createElement("a");return e.innerHTML="<xyz></xyz>",1===e.childNodes.length}),/*!
{
  "name": "Emoji",
  "property": "emoji"
}
!*/
Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var e=window.devicePixelRatio||1,t=12*e,n=createElement("canvas"),r=n.getContext("2d");return r.fillStyle="#f00",r.textBaseline="top",r.font="32px Arial",r.fillText("🐨",0,0),0!==r.getImageData(t,t,1,1).data[0]}),/*!
{
  "name": "ES5 Array",
  "property": "es5array",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),/*!
{
  "name": "ES5 Date",
  "property": "es5date",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5date",function(){var e="2013-04-12T06:06:37.307Z",t=!1;try{t=!!Date.parse(e)}catch(n){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&t)}),/*!
{
  "name": "ES5 Function",
  "property": "es5function",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5function",function(){return!(!Function.prototype||!Function.prototype.bind)}),/*!
{
  "name": "ES5 Object",
  "property": "es5object",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim", "es5sham"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),/*!
{
  "name": "ES5 Strict Mode",
  "property": "strictmode",
  "caniuse": "sctrict-mode",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "authors": ["@kangax"],
  "tags": ["es5"],
  "builderAliases": ["es5_strictmode"]
}
!*/
Modernizr.addTest("strictmode",function(){"use strict";return!this}()),/*!
{
  "name": "ES5 String",
  "property": "es5string",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),/*!
{
  "name": "JSON",
  "property": "json",
  "caniuse": "json",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Glossary/JSON"
  }],
  "polyfills": ["json2"]
}
!*/
Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),/*!
{
  "name": "ES5 Syntax",
  "property": "es5syntax",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }, {
    "name": "original implementation of detect code",
    "href": "http://kangax.github.io/es5-compat-table/"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["This detect uses `eval()`, so CSP may be a problem."],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5syntax",function(){var value,obj,stringAccess,getter,setter,reservedWords,zeroWidthChars;try{return stringAccess=eval('"foobar"[3] === "b"'),getter=eval("({ get x(){ return 1 } }).x === 1"),eval("({ set x(v){ value = v; } }).x = 1"),setter=1===value,eval("obj = ({ if: 1 })"),reservedWords=1===obj["if"],zeroWidthChars=eval("_‌‍ = true"),stringAccess&&getter&&setter&&reservedWords&&zeroWidthChars}catch(ignore){return!1}}),/*!
{
  "name": "ES5 Immutable Undefined",
  "property": "es5undefined",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }, {
    "name": "original implementation of detect code",
    "href": "http://kangax.github.io/es5-compat-table/"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5undefined",function(){var e,t;try{t=window.undefined,window.undefined=12345,e="undefined"==typeof window.undefined,window.undefined=t}catch(n){return!1}return e}),/*!
{
  "name": "ES5",
  "property": "es5",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim", "es5sham"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
Modernizr.addTest("es5",function(){return!!(Modernizr.es5array&&Modernizr.es5date&&Modernizr.es5function&&Modernizr.es5object&&Modernizr.strictmode&&Modernizr.es5string&&Modernizr.json&&Modernizr.es5syntax&&Modernizr.es5undefined)}),/*!
{
  "name": "ES6 Array",
  "property": "es6array",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6array",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&Array.from&&Array.of)),/*!
{
  "name": "ES6 Collections",
  "property": "es6collections",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim", "weakmap"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6collections",!!(window.Map&&window.Set&&window.WeakMap&&window.WeakSet)),/*!
{
  "name": "ES5 String.prototype.contains",
  "property": "contains",
  "authors": ["Robert Kowalski"],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("contains",is(String.prototype.contains,"function")),/*!
{
  "name": "ES6 Generators",
  "property": "generators",
  "authors": ["Michael Kachanovskyi"],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("generators",function(){try{new Function("function* test() {}")()}catch(e){return!1}return!0}),/*!
{
  "name": "ES6 Math",
  "property": "es6math",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6math",!!(Math&&Math.clz32&&Math.cbrt&&Math.imul&&Math.sign&&Math.log10&&Math.log2&&Math.log1p&&Math.expm1&&Math.cosh&&Math.sinh&&Math.tanh&&Math.acosh&&Math.asinh&&Math.atanh&&Math.hypot&&Math.trunc&&Math.fround)),/*!
{
  "name": "ES6 Number",
  "property": "es6number",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6number",!!(Number.isFinite&&Number.isInteger&&Number.isSafeInteger&&Number.isNaN&&Number.parseInt&&Number.parseFloat&&Number.isInteger(Number.MAX_SAFE_INTEGER)&&Number.isInteger(Number.MIN_SAFE_INTEGER)&&Number.isFinite(Number.EPSILON))),/*!
{
  "name": "ES6 Object",
  "property": "es6object",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6object",!!(Object.assign&&Object.is&&Object.setPrototypeOf)),/*!
{
  "name": "ES6 Promises",
  "property": "promises",
  "caniuse": "promises",
  "polyfills": ["es6promises"],
  "authors": ["Krister Kari", "Jake Archibald"],
  "tags": ["es6"],
  "notes": [{
    "name": "The ES6 promises spec",
    "href": "https://github.com/domenic/promises-unwrapping"
  },{
    "name": "Chromium dashboard - ES6 Promises",
    "href": "https://www.chromestatus.com/features/5681726336532480"
  },{
    "name": "JavaScript Promises: There and back again - HTML5 Rocks",
    "href": "http://www.html5rocks.com/en/tutorials/es6/promises/"
  }]
}
!*/
Modernizr.addTest("promises",function(){return"Promise"in window&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var e;return new window.Promise(function(t){e=t}),"function"==typeof e}()}),/*!
{
  "name": "ES6 String",
  "property": "es6string",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
Modernizr.addTest("es6string",!!(String.fromCodePoint&&String.raw&&String.prototype.codePointAt&&String.prototype.repeat&&String.prototype.startsWith&&String.prototype.endsWith&&String.prototype.contains)),/*!
{
  "name": "Orientation and Motion Events",
  "property": ["devicemotion", "deviceorientation"],
  "caniuse": "deviceorientation",
  "notes": [{
    "name": "W3C Editor's Draft",
    "href": "http://w3c.github.io/deviceorientation/spec-source-orientation.html"
  },{
    "name": "Implementation by iOS Safari (Orientation)",
    "href": "http://goo.gl/fhce3"
  },{
    "name": "Implementation by iOS Safari (Motion)",
    "href": "http://goo.gl/rLKz8"
  }],
  "authors": ["Shi Chuan"],
  "tags": ["event"],
  "builderAliases": ["event_deviceorientation_motion"]
}
!*/
Modernizr.addTest("devicemotion","DeviceMotionEvent"in window),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in window),/*!
{
  "name": "onInput Event",
  "property": "oninput",
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
  },{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#common-input-element-attributes"
  },{
    "name": "Detecting onInput support",
    "href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
  }],
  "authors": ["Patrick Kettner"],
  "tags": ["event"]
}
!*/
Modernizr.addTest("oninput",function(){var e,t=createElement("input");if(t.setAttribute("oninput","return"),hasEvent("oninput",docElement)||"function"==typeof t.oninput)return!0;try{var n=document.createEvent("KeyboardEvent");e=!1;var r=function(t){e=!0,t.preventDefault(),t.stopPropagation()};n.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),docElement.appendChild(t),t.addEventListener("input",r,!1),t.focus(),t.dispatchEvent(n),t.removeEventListener("input",r,!1),docElement.removeChild(t)}catch(i){e=!1}return e}),/*!
{
  "name": "Event Listener",
  "property": "eventlistener",
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
  }],
  "polyfills": ["eventlistener"]
}
!*/
Modernizr.addTest("eventlistener","addEventListener"in window),/*!
{
  "name": "EXIF Orientation",
  "property": "exiforientation",
  "tags": ["image"],
  "builderAliases": ["exif_orientation"],
  "async": true,
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "Article by Dave Perrett",
    "href": "http://recursive-design.com/blog/2012/07/28/exif-orientation-handling-is-a-ghetto/"
  },{
    "name": "Article by Calvin Hass",
    "href": "http://www.impulseadventure.com/photo/exif-orientation.html"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("exiforientation",!1,{aliases:["exif-orientation"]})},e.onload=function(){addTest("exiforientation",2!==e.width,{aliases:["exif-orientation"]})},e.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="}),/*!
{
  "name": "File API",
  "property": "filereader",
  "caniuse": "fileapi",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "https://www.w3.org/TR/FileAPI/"
  }],
  "tags": ["file"],
  "builderAliases": ["file_api"],
  "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
}
!*/
Modernizr.addTest("filereader",!!(window.File&&window.FileList&&window.FileReader)),/*!
{
  "name": "Filesystem API",
  "property": "filesystem",
  "caniuse": "filesystem",
  "notes": [{
    "name": "W3 Draft",
    "href": "http://dev.w3.org/2009/dap/file-system/file-dir-sys.html"
  }],
  "authors": ["Eric Bidelman (@ebidel)"],
  "tags": ["file"],
  "builderAliases": ["file_filesystem"],
  "knownBugs": ["The API will be present in Chrome incognito, but will throw an exception. See crbug.com/93417"]
}
!*/
Modernizr.addTest("filesystem",!!prefixed("requestFileSystem",window)),/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
Modernizr.addAsyncTest(function(){var e,t,n=function(e){docElement.contains(e)||docElement.appendChild(e)},r=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},i=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),addTest("flash",function(){return n}),t&&d.contains(t)){for(;t.parentNode!==d;)t=t.parentNode;d.removeChild(t)}};try{t="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(o){}if(e=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||t),e||isSVG)i(!1);else{var A,a,s=createElement("embed"),d=getBody();if(s.type="application/x-shockwave-flash",d.appendChild(s),!("Pan"in s||t))return n(d),i("blocked",s),void r(d);A=function(){return n(d),docElement.contains(d)?(docElement.contains(s)?(a=s.style.cssText,""!==a?i("blocked",s):i(!0,s)):i("blocked"),void r(d)):(d=document.body||d,s=createElement("embed"),s.type="application/x-shockwave-flash",d.appendChild(s),setTimeout(A,1e3))},setTimeout(A,10)}}),/*!
{
  "name": "input[capture] Attribute",
  "property": "capture",
  "tags": ["video", "image", "audio", "media", "attribute"],
  "notes": [{
    "name": "W3C draft: HTML Media Capture",
    "href": "https://www.w3.org/TR/html-media-capture/"
  }]
}
!*/
Modernizr.addTest("capture","capture"in createElement("input")),/*!
{
  "name": "input[file] Attribute",
  "property": "fileinput",
  "caniuse" : "forms",
  "tags": ["file", "forms", "input"],
  "builderAliases": ["forms_fileinput"]
}
!*/
Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=createElement("input");return e.type="file",!e.disabled}),/*!
{
  "name": "input[directory] Attribute",
  "property": "directory",
  "authors": ["silverwind"],
  "tags": ["file", "input", "attribute"]
}
!*/
Modernizr.addTest("fileinputdirectory",function(){var e=createElement("input"),t="directory";if(e.type="file",t in e)return!0;for(var n=0,r=domPrefixes.length;r>n;n++)if(domPrefixes[n]+t in e)return!0;return!1}),/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/
Modernizr.addTest("formattribute",function(){var e,t=createElement("form"),n=createElement("input"),r=createElement("div"),i="formtest"+(new Date).getTime(),o=!1;t.id=i;try{n.setAttribute("form",i)}catch(A){document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=i,n.setAttributeNode(e))}return r.appendChild(t),r.appendChild(n),docElement.appendChild(r),o=t.elements&&1===t.elements.length&&n.form==t,r.parentNode.removeChild(r),o});/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(e){for(var t,n,r,i=e.length,o="1)",A=0;i>A;A++)inputElem.setAttribute("type",t=e[A]),r="text"!==inputElem.type&&"style"in inputElem,r&&(inputElem.value=o,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(t)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),n=document.defaultView,r=n.getComputedStyle&&"textfield"!==n.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(t)||(r=/^(url|email)$/.test(t)?inputElem.checkValidity&&inputElem.checkValidity()===!1:inputElem.value!=o)),inputs[e[A]]=!!r;return inputs}(inputtypes),/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/
Modernizr.addTest("formvalidation",function(){var e=createElement("form");if(!("checkValidity"in e&&"addEventListener"in e))return!1;if("reportValidity"in e)return!0;var t,n=!1;return Modernizr.formvalidationapi=!0,e.addEventListener("submit",function(e){window.opera&&!window.operamini||e.preventDefault(),e.stopPropagation()},!1),e.innerHTML='<input name="modTest" required="required" /><button></button>',testStyles("#modernizr form{position:absolute;top:-99999em}",function(r){r.appendChild(e),t=e.getElementsByTagName("input")[0],t.addEventListener("invalid",function(e){n=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,e.getElementsByTagName("button")[0].click()}),n}),/*!
{
  "name": "input[type=\"number\"] Localization",
  "property": "localizednumber",
  "tags": ["forms", "localization", "attribute"],
  "authors": ["Peter Janes"],
  "notes": [{
    "name": "Webkit Bug Tracker Listing",
    "href": "https://bugs.webkit.org/show_bug.cgi?id=42484"
  },{
    "name": "Based on This",
    "href": "https://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
  }],
  "knownBugs": ["Only ever returns true if the browser/OS is configured to use comma as a decimal separator. This is probably fine for most use cases."]
}
!*/
Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,t=createElement("div"),n=getBody(),r=function(){return docElement.insertBefore(n,docElement.firstElementChild||docElement.firstChild)}();t.innerHTML='<input type="number" value="1.0" step="0.1"/>';var i=t.childNodes[0];r.appendChild(t),i.focus();try{document.execCommand("InsertText",!1,"1,1")}catch(o){}return e="number"===i.type&&1.1===i.valueAsNumber&&i.checkValidity(),r.removeChild(t),n.fake&&r.parentNode.removeChild(r),e}),/*!
{
  "name": "placeholder attribute",
  "property": "placeholder",
  "tags": ["forms", "attribute"],
  "builderAliases": ["forms_placeholder"]
}
!*/
Modernizr.addTest("placeholder","placeholder"in createElement("input")&&"placeholder"in createElement("textarea")),/*!
{
  "name": "form#requestAutocomplete()",
  "property": "requestautocomplete",
  "tags": ["form", "forms", "requestAutocomplete", "payments"],
  "notes": [{
    "name": "WHATWG proposed spec",
    "href": "https://wiki.whatwg.org/wiki/RequestAutocomplete"
  }]
}
!*/
Modernizr.addTest("requestautocomplete",!!prefixed("requestAutocomplete",createElement("form"))),/*!
{
  "name": "Fullscreen API",
  "property": "fullscreen",
  "caniuse": "fullscreen",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/API/Fullscreen"
  }],
  "polyfills": ["screenfulljs"],
  "builderAliases": ["fullscreen_api"]
}
!*/
Modernizr.addTest("fullscreen",!(!prefixed("exitFullscreen",document,!1)&&!prefixed("cancelFullScreen",document,!1))),/*!
{
  "name": "GamePad API",
  "property": "gamepads",
  "authors": ["Eric Bidelman"],
  "tags": ["media"],
  "notes": [{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/gamepad/"
  },{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/doodles/gamepad/#toc-featuredetect"
  }],
  "warnings": [],
  "polyfills": []
}
!*/
Modernizr.addTest("gamepads",!!prefixed("getGamepads",navigator)),/*!
{
  "name": "Geolocation API",
  "property": "geolocation",
  "caniuse": "geolocation",
  "tags": ["media"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
  }],
  "polyfills": [
    "joshuabell-polyfill",
    "webshims",
    "geo-location-javascript",
    "geolocation-api-polyfill"
  ]
}
!*/
Modernizr.addTest("geolocation","geolocation"in navigator),/*!
{
  "name": "Hashchange event",
  "property": "hashchange",
  "caniuse": "hashchange",
  "tags": ["history"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
  }],
  "polyfills": [
    "jquery-hashchange",
    "moo-historymanager",
    "jquery-ajaxy",
    "hasher",
    "shistory"
  ]
}
!*/
Modernizr.addTest("hashchange",function(){return hasEvent("hashchange",window)===!1?!1:document.documentMode===undefined||document.documentMode>7}),/*!
{
  "name": "Hidden Scrollbar",
  "property": "hiddenscroll",
  "authors": ["Oleg Korsunsky"],
  "tags": ["overlay"],
  "notes": [{
    "name": "Overlay Scrollbar description",
    "href": "https://developer.apple.com/library/mac/releasenotes/MacOSX/WhatsNewInOSX/Articles/MacOSX10_7.html#//apple_ref/doc/uid/TP40010355-SW39"
  },{
    "name": "Video example of overlay scrollbars",
    "href": "https://gfycat.com/FoolishMeaslyAtlanticsharpnosepuffer"
  }]
}
!*/
Modernizr.addTest("hiddenscroll",function(){return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),/*!
{
  "name": "History API",
  "property": "history",
  "caniuse": "history",
  "tags": ["history"],
  "authors": ["Hay Kranen", "Alexander Farkas"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
  }],
  "polyfills": ["historyjs", "html5historyapi"]
}
!*/
Modernizr.addTest("history",function(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")?window.history&&"pushState"in window.history:!1}),/*!
{
  "name": "HTML Imports",
  "notes": [
    {
      "name": "W3C HTML Imports Specification",
      "href": "https://w3c.github.io/webcomponents/spec/imports/"
    },
    {
      "name": "HTML Imports - #include for the web",
      "href": "http://www.html5rocks.com/en/tutorials/webcomponents/imports/"
    }
  ],
  "polyfills": ["polymer-htmlimports"],
  "property": "htmlimports",
  "tags": ["html", "import"]
}
!*/
addTest("htmlimports","import"in createElement("link")),/*!
{
  "name": "IE8 compat mode",
  "property": "ie8compat",
  "authors": ["Erich Ocean"]
}
!*/
Modernizr.addTest("ie8compat",!window.addEventListener&&!!document.documentMode&&7===document.documentMode),/*!
{
  "name": "iframe[sandbox] Attribute",
  "property": "sandbox",
  "tags": ["iframe"],
  "builderAliases": ["iframe_sandbox"],
  "notes": [
  {
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-sandbox"
  }],
  "knownBugs": [ "False-positive on Firefox < 29" ]
}
!*/
Modernizr.addTest("sandbox","sandbox"in createElement("iframe")),/*!
{
  "name": "iframe[seamless] Attribute",
  "property": "seamless",
  "tags": ["iframe"],
  "builderAliases": ["iframe_seamless"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-seamless"
  }]
}
!*/
Modernizr.addTest("seamless","seamless"in createElement("iframe")),/*!
{
  "name": "iframe[srcdoc] Attribute",
  "property": "srcdoc",
  "tags": ["iframe"],
  "builderAliases": ["iframe_srcdoc"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-srcdoc"
  }]
}
!*/
Modernizr.addTest("srcdoc","srcdoc"in createElement("iframe")),/*!
{
  "name": "Animated PNG",
  "async": true,
  "property": "apng",
  "tags": ["image"],
  "builderAliases": ["img_apng"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/APNG"
  }]
}
!*/
Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var e=new Image,t=createElement("canvas"),n=t.getContext("2d");e.onload=function(){addTest("apng",function(){return"undefined"==typeof t.getContext?!1:(n.drawImage(e,0,0),0===n.getImageData(0,0,1,1).data[3])})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),/*!
{
  "name": "JPEG 2000",
  "async": true,
  "aliases": ["jpeg-2000", "jpg2"],
  "property": "jpeg2000",
  "tags": ["image"],
  "authors": ["@eric_wvgg"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/JPEG_2000"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onload=e.onerror=function(){addTest("jpeg2000",1==e.width)},e.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="}),/*!
{
  "name": "JPEG XR (extended range)",
  "async": true,
  "aliases": ["jpeg-xr"],
  "property": "jpegxr",
  "tags": ["image"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/JPEG_XR"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onload=e.onerror=function(){addTest("jpegxr",1==e.width,{aliases:["jpeg-xr"]})},e.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="}),/*!
{
  "name": "sizes attribute",
  "async": true,
  "property": "sizes",
  "tags": ["image"],
  "authors": ["Mat Marquis"],
  "notes": [{
    "name": "Spec",
    "href": "http://picture.responsiveimages.org/#parse-sizes-attr"
    },{
    "name": "Usage Details",
    "href": "http://ericportis.com/posts/2014/srcset-sizes/"
    }]
}
!*/
Modernizr.addAsyncTest(function(){var e,t,n,r=createElement("img"),i="sizes"in r;!i&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){addTest("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):addTest("sizes",i)}),/*!
{
  "name": "srcset attribute",
  "property": "srcset",
  "tags": ["image"],
  "notes": [{
    "name": "Smashing Magazine Article",
    "href": "https://en.wikipedia.org/wiki/APNG"
    },{
    "name": "Generate multi-resolution images for srcset with Grunt",
    "href": "https://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/"
    }]
}
!*/
Modernizr.addTest("srcset","srcset"in createElement("img")),/*!
{
  "name": "Webp",
  "async": true,
  "property": "webp",
  "tags": ["image"],
  "builderAliases": ["img_webp"],
  "authors": ["Krister Kari", "@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "Webp Info",
    "href": "https://developers.google.com/speed/webp/"
  }, {
    "name": "Chormium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
  }, {
    "name": "Webp Lossless Spec",
    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
  }, {
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  }, {
    "name": "Chormium WebP announcement",
    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
  }]
}
!*/
Modernizr.addAsyncTest(function(){function e(e,t,n){function r(t){var r=t&&"load"===t.type?1==i.width:!1,o="webp"===e;addTest(e,o?new Boolean(r):r),n&&n(t)}var i=new Image;i.onerror=r,i.onload=r,i.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var r=0;r<t.length;r++)e(t[r].name,t[r].uri)})}),/*!
{
  "name": "Webp Alpha",
  "async": true,
  "property": "webpalpha",
  "aliases": ["webp-alpha"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
    "href": "https://developers.google.com/speed/webp/"
  },{
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  },{
    "name": "Chromium WebP announcement",
    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("webpalpha",!1,{aliases:["webp-alpha"]})},e.onload=function(){addTest("webpalpha",1==e.width,{aliases:["webp-alpha"]})},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),/*!
{
  "name": "Webp Animation",
  "async": true,
  "property": "webpanimation",
  "aliases": ["webp-animation"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
    "href": "https://developers.google.com/speed/webp/"
  },{
    "name": "Chromium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("webpanimation",!1,{aliases:["webp-animation"]})},e.onload=function(){addTest("webpanimation",1==e.width,{aliases:["webp-animation"]})},e.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),/*!
{
  "name": "Webp Lossless",
  "async": true,
  "property": ["webplossless", "webp-lossless"],
  "tags": ["image"],
  "authors": ["@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "Webp Info",
    "href": "https://developers.google.com/speed/webp/"
  },{
    "name": "Webp Lossless Spec",
    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
  }]
}
!*/
Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){addTest("webplossless",!1,{aliases:["webp-lossless"]})},e.onload=function(){addTest("webplossless",1==e.width,{aliases:["webp-lossless"]})},e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="});/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"]
}
!*/
var indexeddb;try{indexeddb=prefixed("indexedDB",window)}catch(e){}Modernizr.addTest("indexeddb",!!indexeddb),indexeddb&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in indexeddb),/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
Modernizr.addAsyncTest(function(){var e,t,n,r="detect-blob-support",i=!1;try{e=prefixed("indexedDB",window)}catch(o){}if(!Modernizr.indexeddb||!Modernizr.indexeddb.deletedatabase)return!1;try{e.deleteDatabase(r).onsuccess=function(){t=e.open(r,1),t.onupgradeneeded=function(){t.result.createObjectStore("store")},t.onsuccess=function(){n=t.result;try{n.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),i=!0}catch(o){i=!1}finally{addTest("indexeddbblob",i),n.close(),e.deleteDatabase(r)}}}}catch(o){addTest("indexeddbblob",!1)}}),/*!
{
  "name": "input formaction",
  "property": "inputformaction",
  "aliases": ["input-formaction"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formaction"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/13-formaction.html"
  }],
  "polyfills": [
    "webshims"
  ]
}
!*/
Modernizr.addTest("inputformaction",!!("formAction"in createElement("input")),{aliases:["input-formaction"]}),/*!
{
  "name": "input formenctype",
  "property": "inputformenctype",
  "aliases": ["input-formenctype"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formenctype"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/16-formenctype.html"
  }],
  "polyfills": [
    "html5formshim"
  ]
}
!*/
Modernizr.addTest("inputformenctype",!!("formEnctype"in createElement("input")),{aliases:["input-formenctype"]}),/*!
{
  "name": "input formmethod",
  "property": "inputformmethod",
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formmethod"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/14-formmethod.html"
  }],
  "polyfills": [
    "webshims"
  ]
}
!*/
Modernizr.addTest("inputformmethod",!!("formMethod"in createElement("input"))),/*!
{
  "name": "input formtarget",
  "property": "inputformtarget",
  "aliases": ["input-formtarget"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formtarget"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/15-formtarget.html"
  }],
  "polyfills": [
    "html5formshim"
  ]
}
!*/
Modernizr.addTest("inputformtarget",!!("formtarget"in createElement("input")),{aliases:["input-formtarget"]}),/*!
{
  "name": "input[search] search event",
  "property": "search",
  "tags": ["input","search"],
  "authors": ["Calvin Webster"],
  "notes": [{
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/types/5-search.html?"
  }, {
    "name": "CSS Tricks",
    "href": "https://css-tricks.com/webkit-html5-search-inputs/"
  }]
}
!*/
Modernizr.addTest("inputsearchevent",hasEvent("search")),/*!
 {
 "name": "Internationalization API",
 "property": "intl",
 "notes": [{
 "name": "MDN documentation",
 "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"
 },{
 "name": "ECMAScript spec",
 "href": "http://www.ecma-international.org/ecma-402/1.0/"
 }]
 }
 !*/
Modernizr.addTest("intl",!!prefixed("Intl",window)),/*!
{
  "name": "Reverse Ordered Lists",
  "property": "olreversed",
  "notes": [{
    "name": "Impressive Webs article",
    "href": "http://impressivewebs.com/reverse-ordered-lists-html5"
  }],
  "builderAliases": ["lists_reversed"]
}
!*/
Modernizr.addTest("olreversed","reversed"in createElement("ol")),/*!
{
  "name": "MathML",
  "property": "mathml",
  "caniuse": "mathml",
  "authors": ["Addy Osmani", "Davide P. Cervone", "David Carlisle"],
  "knownBugs": ["Firefox < 4 will likely return a false, however it does support MathML inside XHTML documents"],
  "notes": [{
    "name": "W3C spec",
    "href": "https://www.w3.org/Math/"
  }],
  "polyfills": ["mathjax"]
}
!*/
Modernizr.addTest("mathml",function(){var e;return testStyles("#modernizr{position:absolute;display:inline-block}",function(t){t.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>",e=t.offsetHeight>t.offsetWidth}),e}),/*!
{
  "name": "Beacon API",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon"
  },{
    "name": "W3C specification",
    "href": "https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/Beacon/Overview.html"
  }],
  "property": "beacon",
  "tags": ["beacon", "network"],
  "authors": ["Cătălin Mariș"]
}
!*/
Modernizr.addTest("beacon","sendBeacon"in navigator),/*!
{
  "name": "Low Bandwidth Connection",
  "property": "lowbandwidth",
  "tags": ["network"],
  "builderAliases": ["network_connection"]
}
!*/
Modernizr.addTest("lowbandwidth",function(){var e=navigator.connection||{type:0};return 3==e.type||4==e.type||/^[23]g$/.test(e.type)}),/*!
{
  "name": "Server Sent Events",
  "property": "eventsource",
  "tags": ["network"],
  "builderAliases": ["network_eventsource"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/comms.html#server-sent-events"
  }]
}
!*/
Modernizr.addTest("eventsource","EventSource"in window),/*!
{
  "name": "Fetch API",
  "property": "fetch",
  "tags": ["network"],
  "caniuse": "fetch",
  "notes": [{
    "name": "Fetch Living Standard",
    "href": "https://fetch.spec.whatwg.org/"
  }],
  "polyfills": ["fetch"]
}
!*/
Modernizr.addTest("fetch","fetch"in window),/*!
{
  "name": "XHR responseType",
  "property": "xhrresponsetype",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;return e.open("get","/",!0),"response"in e}());var testXhrType=function(e){if("undefined"==typeof XMLHttpRequest)return!1;var t=new XMLHttpRequest;t.open("get","/",!0);try{t.responseType=e}catch(n){return!1}return"response"in t&&t.responseType==e};/*!
{
  "name": "XHR responseType='arraybuffer'",
  "property": "xhrresponsetypearraybuffer",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypearraybuffer",testXhrType("arraybuffer")),/*!
{
  "name": "XHR responseType='blob'",
  "property": "xhrresponsetypeblob",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypeblob",testXhrType("blob")),/*!
{
  "name": "XHR responseType='document'",
  "property": "xhrresponsetypedocument",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypedocument",testXhrType("document")),/*!
{
  "name": "XHR responseType='json'",
  "property": "xhrresponsetypejson",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  },{
    "name": "Explanation of xhr.responseType='json'",
    "href": "https://mathiasbynens.be/notes/xhr-responsetype-json"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypejson",testXhrType("json")),/*!
{
  "name": "XHR responseType='text'",
  "property": "xhrresponsetypetext",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
Modernizr.addTest("xhrresponsetypetext",testXhrType("text")),/*!
{
  "name": "XML HTTP Request Level 2 XHR2",
  "property": "xhr2",
  "tags": ["network"],
  "builderAliases": ["network_xhr2"],
  "notes": [{
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/XMLHttpRequest2/"
  },{
    "name": "Details on Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/385"
  }]
}
!*/
Modernizr.addTest("xhr2","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest),/*!
{
  "name": "Notification",
  "property": "notification",
  "caniuse": "notifications",
  "authors": ["Theodoor van Donge", "Hendrik Beskow"],
  "notes": [{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/notifications/quick/"
  },{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/notifications/"
  }, {
    "name": "Changes in Chrome to Notifications API due to Service Worker Push Notifications",
    "href": "https://developers.google.com/web/updates/2015/05/Notifying-you-of-notificiation-changes"
  }],
  "knownBugs": [
    "Possibility of false-positive on Chrome for Android if permissions we're granted for a website prior to Chrome 44."
  ],
  "polyfills": ["desktop-notify", "html5-notifications"]
}
!*/
Modernizr.addTest("notification",function(){if(!window.Notification||!window.Notification.requestPermission)return!1;if("granted"===window.Notification.permission)return!0;try{new window.Notification("")}catch(e){if("TypeError"===e.name)return!1}return!0}),/*!
{
  "name": "Page Visibility API",
  "property": "pagevisibility",
  "caniuse": "pagevisibility",
  "tags": ["performance"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/DOM/Using_the_Page_Visibility_API"
  },{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/2011/WD-page-visibility-20110602/"
  },{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/pagevisibility/intro/"
  }],
  "polyfills": ["visibilityjs", "visiblyjs", "jquery-visibility"]
}
!*/
Modernizr.addTest("pagevisibility",!!prefixed("hidden",document,!1)),/*!
{
  "name": "Navigation Timing API",
  "property": "performance",
  "caniuse": "nav-timing",
  "tags": ["performance"],
  "authors": ["Scott Murphy (@uxder)"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/navigation-timing/"
  },{
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/webperformance/basics/"
  }],
  "polyfills": ["perfnow"]
}
!*/
Modernizr.addTest("performance",!!prefixed("performance",window)),/*!
{
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/pointerevents/"
    }
  ],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["handjs"]
}
!*/
Modernizr.addTest("pointerevents",function(){var e=!1,t=domPrefixes.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)hasEvent(domPrefixes[t]+"pointerdown")&&(e=!0);return e}),/*!
{
  "name": "Pointer Lock API",
  "property": "pointerlock",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/API/Pointer_Lock_API"
  }],
  "builderAliases": ["pointerlock_api"]
}
!*/
Modernizr.addTest("pointerlock",!!prefixed("exitPointerLock",document)),/*!
{
  "name": "postMessage",
  "property": "postmessage",
  "caniuse": "x-doc-messaging",
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/html5/comms.html#posting-messages"
  }],
  "polyfills": ["easyxdm", "postmessage-jquery"]
}
!*/
Modernizr.addTest("postmessage","postMessage"in window),/*!
{
  "authors": ["Cătălin Mariș"],
  "caniuse": "proximity",
  "name": "Proximity API",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events"
  },{
    "name": "W3C specification",
    "href": "https://www.w3.org/TR/proximity/"
  }],
  "property": "proximity",
  "tags": ["events", "proximity"]
}
!*/
Modernizr.addAsyncTest(function(){function e(){clearTimeout(t),window.removeEventListener("deviceproximity",e),addTest("proximity",!0)}var t,n=300;"ondeviceproximity"in window&&"onuserproximity"in window?(window.addEventListener("deviceproximity",e),t=setTimeout(function(){window.removeEventListener("deviceproximity",e),addTest("proximity",!1)},n)):addTest("proximity",!1)}),/*!
{
  "name": "QuerySelector",
  "property": "queryselector",
  "caniuse": "queryselector",
  "tags": ["queryselector"],
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name" : "W3C Selectors reference",
    "href": "https://www.w3.org/TR/selectors-api/#queryselectorall"
  }],
  "polyfills": ["css-selector-engine"]
}
!*/
Modernizr.addTest("queryselector","querySelector"in document&&"querySelectorAll"in document),/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/quota-api/"
  }]
}
!*/
Modernizr.addTest("quotamanagement",function(){var e=prefixed("temporaryStorage",navigator),t=prefixed("persistentStorage",navigator);return!(!e||!t)}),/*!
{
  "name": "requestAnimationFrame",
  "property": "requestanimationframe",
  "aliases": ["raf"],
  "caniuse": "requestanimationframe",
  "tags": ["animation"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/animation-timing/"
  }],
  "polyfills": ["raf"]
}
!*/
Modernizr.addTest("requestanimationframe",!!prefixed("requestAnimationFrame",window),{aliases:["raf"]}),/*!
{
  "name": "script[async]",
  "property": "scriptasync",
  "caniuse": "script-async",
  "tags": ["script"],
  "builderAliases": ["script_async"],
  "authors": ["Theodoor van Donge"]
}
!*/
Modernizr.addTest("scriptasync","async"in createElement("script")),/*!
{
  "name": "script[defer]",
  "property": "scriptdefer",
  "caniuse": "script-defer",
  "tags": ["script"],
  "builderAliases": ["script_defer"],
  "authors": ["Theodoor van Donge"],
  "warnings": ["Browser implementation of the `defer` attribute vary: https://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"],
  "knownBugs": ["False positive in Opera 12"]
}
!*/
Modernizr.addTest("scriptdefer","defer"in createElement("script")),/*!
{
  "name": "ServiceWorker API",
  "property": "serviceworker",
  "notes": [{
    "name": "ServiceWorkers Explained",
    "href": "https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md"
  }]
}
!*/
Modernizr.addTest("serviceworker","serviceWorker"in navigator),/*!
{
  "authors": ["Cătălin Mariș"],
  "name": "Speech Recognition API",
  "notes": [
    {
      "name": "W3C Web Speech API Specification - The SpeechRecognition Interface",
      "href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#speechreco-section"
    },
    {
      "name": "Introduction to the Web Speech API",
      "href": "http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API"
    }
  ],
  "property": "speechrecognition",
  "tags": ["input", "speech"]
}
!*/
Modernizr.addTest("speechrecognition",!!prefixed("SpeechRecognition",window)),/*!
{
  "authors": ["Cătălin Mariș"],
  "name": "Speech Synthesis API",
  "notes": [
    {
      "name": "W3C Web Speech API Specification - The SpeechSynthesis Interface",
      "href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#tts-section"
    }
  ],
  "property": "speechsynthesis",
  "tags": ["input", "speech"]
}
!*/
Modernizr.addTest("speechsynthesis","SpeechSynthesisUtterance"in window),/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/
Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/
Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/
Modernizr.addTest("websqldatabase","openDatabase"in window),/*!
{
  "name": "style[scoped]",
  "property": "stylescoped",
  "caniuse": "style-scoped",
  "tags": ["dom"],
  "builderAliases": ["style_scoped"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#attr-style-scoped"
  }],
  "polyfills": ["scoped-styles"]
}
!*/
Modernizr.addTest("stylescoped","scoped"in createElement("style")),/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),/*!
{
  "name": "SVG as an <img> tag source",
  "property": "svgasimg",
  "caniuse" : "svg-img",
  "tags": ["svg"],
  "authors": ["Chris Coyier"],
  "notes": [{
    "name": "HTML5 Spec",
    "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
  }]
}
!*/
Modernizr.addTest("svgasimg",document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var toStringFn={}.toString;/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/
Modernizr.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),/*!
{
  "name": "SVG filters",
  "property": "svgfilters",
  "caniuse": "svg-filters",
  "tags": ["svg"],
  "builderAliases": ["svg_filters"],
  "authors": ["Erik Dahlstrom"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/filters.html"
  }]
}
!*/
Modernizr.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in window&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return e}),/*!
{
  "name": "SVG foreignObject",
  "property": "svgforeignobject",
  "tags": ["svg"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/extend.html"
  }]
}
!*/
Modernizr.addTest("svgforeignobject",function(){return!!document.createElementNS&&/SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
Modernizr.addTest("inlinesvg",function(){var e=createElement("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Synchronised Multimedia spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
!*/
Modernizr.addTest("smil",function(){return!!document.createElementNS&&/SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","animate")))}),/*!
{
  "name": "Template strings",
  "property": "templatestrings",
  "notes": [{
    "name": "MDN Reference",
    "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Browser_compatibility"
  }]
}
!*/
Modernizr.addTest("templatestrings",function(){var supports;try{eval("``"),supports=!0}catch(e){}return!!supports}),/*!
{
  "name": "Scroll Snap Points",
  "property": "scrollsnappoints",
  "notes": [{
    "name": "Setting native-like scrolling offsets in CSS with Scrolling Snap Points",
    "href": "http://generatedcontent.org/post/66817675443/setting-native-like-scrolling-offsets-in-css-with"
  },{
    "name": "MDN Article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap_Points"
  }],
  "polyfills": ["scrollsnap"]
}
!*/
Modernizr.addTest("scrollsnappoints",testAllProps("scrollSnapType")),/*!
{
  "name": "bdi Element",
  "property": "bdi",
  "notes": [{
    "name": "MDN Overview",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
  }]
}
!*/
Modernizr.addTest("bdi",function(){var e=createElement("div"),t=createElement("bdi");t.innerHTML="&#1573;",e.appendChild(t),docElement.appendChild(e);var n="rtl"===(window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).direction;return docElement.removeChild(e),n}),/*!
{
  "name": "Image crossOrigin",
  "property": "imgcrossorigin",
  "notes": [{
    "name": "Cross Domain Images and the Tainted Canvas",
    "href": "https://blog.codepen.io/2013/10/08/cross-domain-images-tainted-canvas/"
  }]
}
!*/
Modernizr.addTest("imgcrossorigin","crossOrigin"in createElement("img")),/*!
{
  "name": "Font Ligatures",
  "property": "ligatures",
  "caniuse": "font-feature",
  "notes": [{
    "name": "Cross-browser Web Fonts",
    "href": "http://www.sitepoint.com/cross-browser-web-fonts-part-3/"
  }]
}
!*/
Modernizr.addTest("ligatures",testAllProps("fontFeatureSettings",'"liga" 1')),/*!
{
  "name": "textarea maxlength",
  "property": "textareamaxlength",
  "aliases": ["textarea-maxlength"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
  }],
  "polyfills": [
    "maxlength"
  ]
}
!*/
Modernizr.addTest("textareamaxlength",!!("maxLength"in createElement("textarea"))),/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
Modernizr.addTest("touchevents",function(){var e;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)e=!0;else{var t=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(t,function(t){e=9===t.offsetTop})}return e}),/*!
{
  "name": "Typed arrays",
  "property": "typedarrays",
  "caniuse": "typedarrays",
  "tags": ["js"],
  "authors": ["Stanley Stuart (@fivetanley)"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
  },{
    "name": "Kronos spec",
    "href": "https://www.khronos.org/registry/typedarray/specs/latest/"
  }],
  "polyfills": ["joshuabell-polyfill"]
}
!*/
Modernizr.addTest("typedarrays","ArrayBuffer"in window),/*!
{
  "name": "Unicode characters",
  "property": "unicode",
  "tags": ["encoding"],
  "warnings": [
    "positive Unicode support doesn't mean you can use it inside <title>, this seems more related to OS & Language packs"
  ]
}
!*/
Modernizr.addTest("unicode",function(){var e,t=createElement("span"),n=createElement("span");return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}",function(r){t.innerHTML=isSVG?"妇":"&#5987",n.innerHTML=isSVG?"☆":"&#9734",r.appendChild(t),r.appendChild(n),e="offsetWidth"in t&&t.offsetWidth!==n.offsetWidth}),e}),/*!
{
  "name": "Unicode Range",
  "property": "unicoderange",
  "notes": [{
    "name" : "W3C reference",
    "href": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
  }, {
    "name" : "24 Way article",
    "href": "https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
  }]
}
!*/
Modernizr.addTest("unicoderange",function(){return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(e){for(var t=[".",".","m","m"],n=0;n<t.length;n++){var r=createElement("span");r.innerHTML=t[n],r.className=n%2?"mono":"",e.appendChild(r),t[n]=r.clientWidth}return t[0]!==t[1]&&t[2]===t[3]})});/*!
{
  "name": "Blob URLs",
  "property": "bloburls",
  "caniuse": "bloburls",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "https://www.w3.org/TR/FileAPI/#creating-revoking"
  }],
  "tags": ["file", "url"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
var url=prefixed("URL",window,!1);url=url&&window[url],Modernizr.addTest("bloburls",url&&"revokeObjectURL"in url&&"createObjectURL"in url),Modernizr.addAsyncTest(function(){function e(){var e=new Image;e.onerror=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=!1},e.onload=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=1==e.width&&1==e.height};for(var t="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.length<33e3;)t="\r\n"+t;e.src="data:image/gif;base64,"+t}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){addTest("datauri",!1)},10);var t=new Image;t.onerror=function(){addTest("datauri",!1)},t.onload=function(){1==t.width&&1==t.height?e():addTest("datauri",!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}),Modernizr.addTest("urlparser",function(){var e;try{return e=new URL("http://modernizr.com/"),"http://modernizr.com/"===e.href}catch(t){return!1}}),Modernizr.addTest("userdata",!!createElement("div").addBehavior),Modernizr.addTest("vibrate",!!prefixed("vibrate",navigator)),Modernizr.addTest("video",function(){var e=createElement("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addAsyncTest(function(){function e(n){clearTimeout(t),r.removeEventListener("playing",e,!1),addTest("videoautoplay",n&&"playing"===n.type||0!==r.currentTime),r.parentNode.removeChild(r)}var t,n=300,r=createElement("video"),i=r.style;if(!(Modernizr.video&&"autoplay"in r))return void addTest("videoautoplay",!1);i.position="absolute",i.height=0,i.width=0;try{if(Modernizr.video.ogg)r.src="data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";else{if(!Modernizr.video.h264)return void addTest("videoautoplay",!1);r.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(o){return void addTest("videoautoplay",!1)}r.setAttribute("autoplay",""),r.style.cssText="display:none",docElement.appendChild(r),setTimeout(function(){r.addEventListener("playing",e,!1),t=setTimeout(e,n)},0)}),Modernizr.addTest("videoloop","loop"in createElement("video")),Modernizr.addTest("videopreload","preload"in createElement("video")),Modernizr.addTest("vml",function(){var e,t=createElement("div"),n=!1;return isSVG||(t.innerHTML='<v:shape id="vml_flag1" adj="1" />',e=t.firstChild,e.style.behavior="url(#default#VML)",n=e?"object"==typeof e.adj:!0),n}),Modernizr.addTest("webintents",!!prefixed("startActivity",navigator)),Modernizr.addTest("webanimations","animate"in createElement("div")),Modernizr.addTest("webgl",function(){var e=createElement("canvas"),t="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return t in e?e[t]("webgl")||e[t]("experimental-webgl"):"WebGLRenderingContext"in window}),Modernizr.addAsyncTest(function(){if(Modernizr.webglextensions=new Boolean(!1),Modernizr.webgl){var e,t,n;try{e=createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl"),n=t.getSupportedExtensions()}catch(r){return}t!==undefined&&(Modernizr.webglextensions=new Boolean(!0));for(var i=-1,o=n.length;++i<o;)Modernizr.webglextensions[n[i]]=!0;e=undefined}}),Modernizr.addTest("peerconnection",!!prefixed("RTCPeerConnection",window)),Modernizr.addTest("datachannel",function(){if(!Modernizr.peerconnection)return!1;for(var e=0,t=domPrefixes.length;t>e;e++){var n=window[domPrefixes[e]+"RTCPeerConnection"];if(n){var r=new n({iceServers:[{url:"stun:0"}]});return"createDataChannel"in r}}return!1}),Modernizr.addTest("getusermedia",!!prefixed("getUserMedia",navigator)),Modernizr.addTest("websockets","WebSocket"in window&&2===window.WebSocket.CLOSING),Modernizr.addTest("websocketsbinary",function(){var e,t="https:"==location.protocol?"wss":"ws";if("WebSocket"in window){if(e="binaryType"in WebSocket.prototype)return e;try{return!!new WebSocket(t+"://.").binaryType}catch(n){}}return!1}),Modernizr.addTest("framed",window.location!=top.location),Modernizr.addAsyncTest(function(){function e(){addTest("blobworkers",!1),t()}function t(){a&&r.revokeObjectURL(a),A&&A.terminate(),s&&clearTimeout(s)}try{var n=window.BlobBuilder,r=window.URL;Modernizr._config.usePrefix&&(n=n||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,r=r||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var i,o,A,a,s,d="Modernizr",l="this.onmessage=function(e){postMessage(e.data)}";try{i=new Blob([l],{type:"text/javascript"})}catch(u){}i||(o=new n,o.append(l),i=o.getBlob()),a=r.createObjectURL(i),A=new Worker(a),A.onmessage=function(e){addTest("blobworkers",d===e.data),t()},A.onerror=e,s=setTimeout(e,200),A.postMessage(d)}catch(u){e()}}),Modernizr.addAsyncTest(function(){try{var e="Modernizr",t=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");t.onmessage=function(n){t.terminate(),addTest("dataworkers",e===n.data),t=null},t.onerror=function(){addTest("dataworkers",!1),t=null},setTimeout(function(){addTest("dataworkers",!1)},200),t.postMessage(e)}catch(n){setTimeout(function(){addTest("dataworkers",!1)},0)}}),Modernizr.addTest("sharedworkers","SharedWorker"in window),Modernizr.addTest("webworkers","Worker"in window),Modernizr.addAsyncTest(function(){function e(){addTest("transferables",!1),t()}function t(){a&&URL.revokeObjectURL(a),s&&s.terminate(),i&&clearTimeout(i)}var n=!!(Modernizr.blobconstructor&&Modernizr.bloburls&&Modernizr.webworkers&&Modernizr.typedarrays);if(!n)return addTest("transferables",!1);try{var r,i,o='var hello = "world"',A=new Blob([o],{type:"text/javascript"}),a=URL.createObjectURL(A),s=new Worker(a);s.onerror=e,i=setTimeout(e,200),r=new ArrayBuffer(1),s.postMessage(r,[r]),addTest("transferables",0===r.byteLength),t()}catch(d){e()}}),Modernizr.addTest("xdomainrequest","XDomainRequest"in window),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document),/*!
 * imagesLoaded v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(n){return t(e,n)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}(window,function(e,t){"use strict";function n(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e);return t}function i(e,t,o){return this instanceof i?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=r(e),this.options=n({},this.options),"function"==typeof t?o=t:n(this.options,t),o&&this.on("always",o),this.getImages(),a&&(this.jqDeferred=new a.Deferred),void setTimeout(function(){this.check()}.bind(this))):new i(e,t,o)}function o(e){this.img=e}function A(e,t){this.url=e,this.element=t,this.img=new Image}var a=e.jQuery,s=e.console;i.prototype=Object.create(t.prototype),i.prototype.options={},i.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},i.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var n=e.querySelectorAll("img"),r=0;r<n.length;r++){var i=n[r];this.addImage(i)}if("string"==typeof this.options.background){var o=e.querySelectorAll(this.options.background);for(r=0;r<o.length;r++){var A=o[r];this.addElementBackgroundImages(A)}}}};var d={1:!0,9:!0,11:!0};return i.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,r=n.exec(t.backgroundImage);null!==r;){var i=r&&r[2];i&&this.addBackground(i,e),r=n.exec(t.backgroundImage)}},i.prototype.addImage=function(e){var t=new o(e);this.images.push(t)},i.prototype.addBackground=function(e,t){var n=new A(e,t);this.images.push(n)},i.prototype.check=function(){function e(e,n,r){setTimeout(function(){t.progress(e,n,r)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},i.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&s&&s.log("progress: "+n,e,t)},i.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},o.prototype=Object.create(t.prototype),o.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},o.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},o.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},o.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},o.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},o.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},o.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},A.prototype=Object.create(o.prototype),A.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},A.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},A.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},i.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(a=t,a.fn.imagesLoaded=function(e,t){var n=new i(this,e,t);return n.jqDeferred.promise(a(this))})},i.makeJQueryPlugin(),i});