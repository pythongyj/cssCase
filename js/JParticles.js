/*
 * @Descripttion: 
 * @version: 
 * @Author: Yunjie Ge
 * @Date: 2020-11-12 14:17:28
 * @LastEditors: Yunjie Ge
 * @LastEditTime: 2020-11-12 14:17:36
 */
/**
 * JParticles v2.0.1 (https://github.com/Barrior/JParticles)
 * Copyright 2016-present Barrior <Barrior@qq.com>
 * Licensed under the MIT (https://opensource.org/licenses/MIT)
 */
+function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e){return parseInt(e,10)}function n(e){return e.replace(F.trimAll,"")}function i(){return"#"+M().toString(16).slice(-6)}function o(e,t){return e===t?e:M()*(e-t)+t}function r(){var e=arguments,t=e[0]||{},n=!1,i=e.length,o=1,s=void 0,a=void 0,c=void 0;for(l(t)&&(n=t,t=e[1]||{},o++);o<i;o++)for(a in e[o])if(s=e[o][a],n&&(f(s)||(c=X(s)))){var u=t[a];c?(c=!1,u=X(u)?u:[]):u=f(u)?u:{},t[a]=r(n,u,s)}else t[a]=s;return t}function s(e,t){return Object.prototype.toString.call(e)===t}function a(e){return s(e,"[object Function]")}function f(e){return s(e,"[object Object]")}function c(e){return"string"==typeof e}function l(e){return"boolean"==typeof e}function u(e){return"undefined"==typeof e}function h(e){return null===e}function p(e){return!(!e||1!==e.nodeType)}function v(e,n){var i=_.getComputedStyle(e)[n];return F.styleValue.test(i)?t(i):i}function y(e){for(var t=e.offsetLeft||0,n=e.offsetTop||0;e=e.offsetParent;)t+=e.offsetLeft,n+=e.offsetTop;return{left:t,top:n}}function d(e,t,n){e.addEventListener(t,n)}function m(e,t,n){e.removeEventListener(t,n)}function b(e){e.cw=e.c.width=v(e.container,"width")||H,e.ch=e.c.height=v(e.container,"height")||D}function g(e,t){return e>0&&e<1?t*e:e}function w(e,t){return(o(e,t)||e)*(M()>.5?1:-1)}function x(e,t){if(e.set){for(var n=arguments.length,i=Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];for(var r=0;r<i.length;r++)a(i[r])&&t.push(i[r])}return e}function O(e){var t=!!X(e)&&e.length,n=function(){return e[z(M()*t)]};return c(e)?function(){return e}:t?n:i}function k(e,t){e.canvasRemoved||!e.set||e.paused||(a(t)&&t.call(e,"pause"),e.paused=!0)}function E(e,t){!e.canvasRemoved&&e.set&&e.paused&&(a(t)&&t.call(e,"open"),e.paused=!1,e.draw())}function P(e,t){e.set.resize&&(e._resizeHandler=function(){var n=e.cw,i=e.ch;b(e);var o=e.cw/n,r=e.ch/i;X(e.dots)&&e.dots.forEach(function(e){f(e)&&(e.x*=o,e.y*=r)}),a(t)&&t.call(e,o,r),e.paused&&e.draw()},d(_,"resize",e._resizeHandler))}function T(e,t,i){n(t).split(",").forEach(function(t){e[t]=function(){I[t](this,i)}})}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:B;Object.defineProperty(n,t,{value:e,writable:!1,enumerable:!0,configurable:!1})}var L=!0,j=/msie\s8.0/i.test(navigator.userAgent);Object.defineProperty&&!j||(L=!1,Object.defineProperty=function(e,t,n){e[t]=n.value}),"function"!=typeof Object.create&&(Object.create=function(){function e(){}var t=Object.prototype.hasOwnProperty;return function(n){if("object"!=typeof n)throw TypeError("Object prototype may only be an Object or null");e.prototype=n;var i=new e;if(e.prototype=null,arguments.length>1){var o=Object(arguments[1]);for(var r in o)t.call(o,r)&&(i[r]=o[r])}return i}}());var S=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),R="2.0.1",_=window,A=document,M=Math.random,z=Math.floor,X=Array.isArray,Y=!!_.DeviceOrientationEvent,H=485,D=300,F={trimAll:/\s/g,styleValue:/^\d+(\.\d+)?[a-z]+$/i},N=function(){function t(n,i,o){e(this,t),L&&(this.container=p(i)?i:A.querySelector(i))&&(this.set=r(!0,{},B.commonConfig,n.defaultConfig,o),this.c=A.createElement("canvas"),this.cxt=this.c.getContext("2d"),this.paused=!1,b(this),this.container.innerHTML="",this.container.appendChild(this.c),this.color=O(this.set.color),this.observeCanvasRemoved(),this.init(),this.resize())}return S(t,[{key:"requestAnimationFrame",value:function(){this.canvasRemoved||this.paused||_.requestAnimationFrame(this.draw.bind(this))}},{key:"observeCanvasRemoved",value:function(){var e=this;this.destructionListeners=[],W(this.c,function(){e.canvasRemoved=!0,e._resizeHandler&&m(_,"resize",e._resizeHandler),e.destructionListeners.forEach(function(e){e()})})}},{key:"onDestroy",value:function(){return x.apply(void 0,[this,this.destructionListeners].concat(Array.prototype.slice.call(arguments)))}},{key:"pause",value:function(){k(this)}},{key:"open",value:function(){E(this)}},{key:"resize",value:function(){P(this)}}]),t}();_.requestAnimationFrame=function(e){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)}}(_);var W=function(){var e=_.MutationObserver||_.WebKitMutationObserver,t=function o(e,t){if(e===t)return!0;if(p(e))for(var n=e.children,i=n.length;i--;)if(o(n[i],t))return!0;return!1},n=function(n,i){var o=new e(function(e,o){for(var r=e.length;r--;)for(var s=e[r].removedNodes,a=s.length;a--;)if(t(s[a],n))return o.disconnect(),i()});o.observe(document,{childList:!0,subtree:!0})},i=function(e,n){var i=function o(i){t(i.target,e)&&(document.removeEventListener("DOMNodeRemoved",o),n())};document.addEventListener("DOMNodeRemoved",i)};return e?n:i}(),I={orientationSupport:Y,regExp:F,pInt:t,trimAll:n,randomColor:i,limitRandom:o,extend:r,typeChecking:s,isPlainObject:f,isFunction:a,isArray:X,isString:c,isBoolean:l,isUndefined:u,isNull:h,isElement:p,observeElementRemoved:W,getCss:v,offset:y,on:d,off:m,scaleValue:g,calcSpeed:w,pause:k,open:E,resize:P,modifyPrototype:T,defineReadOnlyProperty:C,registerListener:x},q={opacity:1,color:[],resize:!0},V={linear:function(e,t,n,i,o){return n+(i-n)*e},swing:function(){return V.easeInOutQuad.apply(V,arguments)},easeInOutQuad:function(e,t,n,i,o){return(t/=o/2)<1?i/2*t*t+n:-i/2*(--t*(t-2)-1)+n}},B={version:R,utils:I,Base:N,easing:V};!function J(e){for(var t in e){var n=e[t];C(n,t,e),f(n)&&J(n)}}(B),B.commonConfig=q,_.JParticles=B,"function"==typeof define&&define.amd?define(function(){return B}):"object"==typeof module&&module.exports&&(module.exports=B)}(),+function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){for(;e=e.offsetParent;)if(m(e,t)===n)return!0;return!1}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=JParticles,s=r.utils,a=r.Base,f=Math.random,c=Math.abs,l=Math.PI,u=Math.floor,h=2*l,p=s.pInt,v=s.limitRandom,y=s.calcSpeed,d=s.scaleValue,m=s.getCss,b=s.offset,g=s.isElement,w=(s.isFunction,s.isNull),x=s.on,O=s.off,k=s.orientationSupport,E=s.resize,P=s.defineReadOnlyProperty,T=function(r){function s(n,i){return e(this,s),t(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,n,i))}return n(s,r),o(s,[{key:"version",get:function(){return"2.0.0"}}]),o(s,[{key:"init",value:function(){this.attrNormalize(),this.set.range>0&&(this.positionX=f()*this.cw,this.positionY=f()*this.ch,this.defineLineShape(),this.positionEvent()),this.mouseX=this.mouseY=0,this.createDots(),this.draw(),this.parallaxEvent()}},{key:"attrNormalize",value:function(){var e=this.cw,t=this.set;["num","proximity","range"].forEach(function(n){t[n]=p(d(t[n],e))}),g(t.eventElem)||t.eventElem===document||(t.eventElem=this.c)}},{key:"defineLineShape",value:function(){var e=this,t=this.set,n=t.proximity,i=t.range,o=t.lineShape;switch(o){case"cube":this.lineShapeMaker=function(t,o,r,s,a){var f=e.positionX,l=e.positionY;c(t-r)<=n&&c(o-s)<=n&&c(t-f)<=i&&c(o-l)<=i&&c(r-f)<=i&&c(s-l)<=i&&a()};break;default:this.lineShapeMaker=function(t,o,r,s,a){var f=e.positionX,l=e.positionY;c(t-r)<=n&&c(o-s)<=n&&(c(t-f)<=i&&c(o-l)<=i||c(r-f)<=i&&c(s-l)<=i)&&a()}}}},{key:"createDots",value:function(){for(var e=this.cw,t=this.ch,n=this.color,i=this.set,o=i.num,r=i.maxR,s=i.minR,a=i.maxSpeed,c=i.minSpeed,l=i.parallaxLayer,h=l.length,p=this.dots=[];o--;){var d=v(r,s);p.push({r:d,x:v(e-d,d),y:v(t-d,d),vx:y(a,c),vy:y(a,c),color:n(),parallaxLayer:l[u(f()*h)],parallaxOffsetX:0,parallaxOffsetY:0})}}},{key:"draw",value:function(){var e=this.cw,t=this.ch,n=this.cxt,i=this.set,o=i.range,r=i.lineWidth,s=i.opacity;n.clearRect(0,0,e,t),n.lineWidth=r,n.globalAlpha=s,this.updateXY(),this.dots.forEach(function(e){var t=e.x,i=e.y,o=e.r,r=e.parallaxOffsetX,s=e.parallaxOffsetY;n.save(),n.beginPath(),n.arc(t+r,i+s,o,0,h),n.fillStyle=e.color,n.fill(),n.restore()}),o>0&&this.connectDots(),this.requestAnimationFrame()}},{key:"connectDots",value:function(){var e=this.dots,t=this.cxt,n=this.lineShapeMaker,i=e.length;e.forEach(function(o,r){for(var s=o.x+o.parallaxOffsetX,a=o.y+o.parallaxOffsetY,f=function(){var i=e[r],f=i.x+i.parallaxOffsetX,c=i.y+i.parallaxOffsetY;n(s,a,f,c,function(){t.save(),t.beginPath(),t.moveTo(s,a),t.lineTo(f,c),t.strokeStyle=o.color,t.stroke(),t.restore()})};++r<i;)f()})}},{key:"updateXY",value:function(){var e=this.paused,t=this.mouseX,n=this.mouseY,i=this.cw,o=this.ch,r=this.set,s=r.parallax,a=r.parallaxStrength;this.dots.forEach(function(r){if(!e){if(s){var f=a*r.parallaxLayer;r.parallaxOffsetX+=(t/f-r.parallaxOffsetX)/10,r.parallaxOffsetY+=(n/f-r.parallaxOffsetY)/10}r.x+=r.vx,r.y+=r.vy;var l=r.x,u=r.y,h=r.r,p=r.parallaxOffsetX,v=r.parallaxOffsetY;l+=p,u+=v,l+h>=i?r.vx=-c(r.vx):l-h<=0&&(r.vx=c(r.vx)),u+h>=o?r.vy=-c(r.vy):u-h<=0&&(r.vy=c(r.vy))}})}},{key:"setElemOffset",value:function(){return this.elemOffset=this.set.eventElem===document?null:b(this.set.eventElem)}},{key:"proxyEvent",value:function(e,t){var n=this,o=this.set.eventElem,r=null;k&&(r=function(e){n.paused||w(e.beta)||t(Math.min(Math.max(e.beta,-90),90),e.gamma)},x(window,"deviceorientation",r));var s=function(t){if(!n.paused){var r=t.pageX,s=t.pageY;n.setElemOffset()&&(i(o,"position","fixed")&&(r=t.clientX,s=t.clientY),r-=n.elemOffset.left,s-=n.elemOffset.top),e(r,s)}};x(o,"mousemove",s),this.onDestroy(function(){O(o,"mousemove",s),O(window,"deviceorientation",r)})}},{key:"positionEvent",value:function(){var e=this,t=this.set.range;t>this.cw&&t>this.ch||this.proxyEvent(function(t,n){e.positionX=t,e.positionY=n},function(t,n){e.positionY=-(t-90)/180*e.ch,e.positionX=-(n-90)/180*e.cw})}},{key:"parallaxEvent",value:function(){var e=this;this.set.parallax&&this.proxyEvent(function(t,n){e.mouseX=t-e.cw/2,e.mouseY=n-e.ch/2},function(t,n){e.mouseX=-n*e.cw/180,e.mouseY=-t*e.ch/180})}},{key:"resize",value:function(){var e=this;E(this,function(t,n){e.set.range>0&&(e.positionX*=t,e.positionY*=n,e.mouseX*=t,e.mouseY*=n)})}}]),s}(a);T.defaultConfig={num:.12,maxR:2.4,minR:.6,maxSpeed:1,minSpeed:.1,proximity:.2,range:.2,lineWidth:.2,lineShape:"spider",eventElem:null,parallax:!1,parallaxLayer:[1,2,3],parallaxStrength:3},P(T,"particle")}(),+function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=JParticles,r=o.utils,s=o.Base,a=Math.random,f=Math.abs,c=Math.PI,l=2*c,u=r.pInt,h=r.limitRandom,p=r.calcSpeed,v=r.defineReadOnlyProperty,y=function(o){function r(n,i){return e(this,r),t(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,n,i))}return n(r,o),i(r,[{key:"version",get:function(){return"2.0.0"}}]),i(r,[{key:"init",value:function(){this.dots=[],this.createDots(),this.draw()}},{key:"snowShape",value:function(){var e=this.set,t=e.maxR,n=e.minR,i=e.maxSpeed,o=e.minSpeed,r=h(t,n);return{r:r,x:a()*this.cw,y:-r,vx:p(i,o),vy:f(r*p(i,o)),color:this.color()}}},{key:"createDots",value:function(){for(var e=u(6*a());e--;)this.dots.push(this.snowShape())}},{key:"draw",value:function(){var e=this,t=this.cxt,n=this.cw,i=this.ch,o=this.paused,r=this.set.opacity;t.clearRect(0,0,n,i),t.globalAlpha=r,this.dots.forEach(function(r,s,f){var c=r.x,u=r.y,h=r.r;t.save(),t.beginPath(),t.arc(c,u,h,0,l),t.fillStyle=r.color,t.fill(),t.restore(),o||(r.x+=r.vx,r.y+=r.vy,a()>.99&&a()>.5&&(r.vx*=-1),c<0||c-h>n?f.splice(s,1,e.snowShape()):u-h>i&&f.splice(s,1))}),!o&&a()>.9&&this.createDots(),this.requestAnimationFrame()}}]),r}(s);y.defaultConfig={color:"#fff",maxR:6.5,minR:.4,maxSpeed:.6,minSpeed:.1},v(y,"snow")}(),+function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=JParticles,r=o.utils,s=o.Base,a=Math.random,f=(Math.abs,Math.PI),c=Math.sin,l=2*f,u=(r.pInt,r.limitRandom),h=(r.calcSpeed,r.scaleValue),p=r.randomColor,v=r.isArray,y=r.isPlainObject,d=r.isUndefined,m=r.resize,b=r.defineReadOnlyProperty,g=function(o){function r(n,i){return e(this,r),t(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,n,i))}return n(r,o),i(r,[{key:"version",get:function(){return"2.0.0"}}]),i(r,[{key:"init",value:function(){this.rippleLength=[],this.attrNormalize(),this.createDots(),this.draw()}},{key:"attrNormalize",value:function(){var e=this;["fill","fillColor","line","lineColor","lineWidth","offsetLeft","offsetTop","crestHeight","rippleNum","speed"].forEach(function(t){return e.attrProcessor(t)})}},{key:"attrProcessor",value:function(e){var t=this.set.num,n=this.set[e],i=n,o="offsetLeft"===e?this.cw:this.ch;for(v(n)||(i=this.set[e]=[]);t--;){var r=v(n)?n[t]:n;i[t]=d(r)?this.generateDefaultValue(e):this.scaleValue(e,r,o),"rippleNum"===e&&(this.rippleLength[t]=this.cw/i[t])}}},{key:"generateDefaultValue",value:function(e){var t=this.cw,n=this.ch;switch(e){case"lineColor":case"fillColor":e=p();break;case"lineWidth":e=u(2,.2);break;case"offsetLeft":e=a()*t;break;case"offsetTop":case"crestHeight":e=a()*n;break;case"rippleNum":e=u(t/2,1);break;case"speed":e=u(.4,.1);break;case"fill":e=!1;break;case"line":e=!0}return e}},{key:"scaleValue",value:function(e,t,n){return"offsetTop"===e||"offsetLeft"===e||"crestHeight"===e?h(t,n):t}},{key:"dynamicProcessor",value:function(e,t){var n=this,i="offsetLeft"===e?this.cw:this.ch,o=v(t);this.set[e].forEach(function(r,s,a){var f=o?t[s]:t;f=n.scaleValue(e,f,i),d(f)&&(f=r),a[s]=f})}},{key:"setOptions",value:function(e){if(this.set&&y(e))for(var t in e)"opacity"===t?this.set.opacity=e[t]:this.dynamicOptions.indexOf(t)!==-1&&this.dynamicProcessor(t,e[t])}},{key:"createDots",value:function(){for(var e=this.cw,t=this.rippleLength,n=this.set.num,i=this.dots=[];n--;)for(var o=i[n]=[],r=l/t[n],s=0;s<=e;s++)o.push({x:s,y:s*r})}},{key:"draw",value:function(){var e=this.cxt,t=this.cw,n=this.ch,i=this.paused,o=this.set,r=o.opacity;e.clearRect(0,0,t,n),e.globalAlpha=r,this.dots.forEach(function(r,s){var a=o.crestHeight[s],f=o.offsetLeft[s],l=o.offsetTop[s],u=o.speed[s];e.save(),e.beginPath(),r.forEach(function(t,n){e[n?"lineTo":"moveTo"](t.x,a*c(t.y+f)+l),!i&&(t.y-=u)}),o.fill[s]&&(e.lineTo(t,n),e.lineTo(0,n),e.closePath(),e.fillStyle=o.fillColor[s],e.fill()),o.line[s]&&(e.lineWidth=o.lineWidth[s],e.strokeStyle=o.lineColor[s],e.stroke()),e.restore()}),this.requestAnimationFrame()}},{key:"resize",value:function(){var e=this;m(this,function(t,n){["offsetLeft","offsetTop","crestHeight"].forEach(function(i){var o="offsetLeft"===i?t:n;e.set[i].forEach(function(e,t,n){n[t]=e*o})}),e.dots.forEach(function(e){e.forEach(function(e){e.x*=t,e.y*=n})})})}}]),r}(s);g.defaultConfig={num:3,fill:!1,fillColor:[],line:!0,lineColor:[],lineWidth:[],offsetLeft:[],offsetTop:[],crestHeight:[],rippleNum:[],speed:[]},g.prototype.dynamicOptions=["fill","fillColor","line","lineColor","lineWidth","offsetLeft","offsetTop","crestHeight","speed"],b(g,"wave")}(),+function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=JParticles,r=o.utils,s=o.Base,a=(Math.random,Math.abs,Math.PI),f=Math.sin,c=Math.ceil,l=2*a,u=(r.pInt,r.limitRandom,r.calcSpeed,r.scaleValue),h=(r.randomColor,r.isArray,r.isFunction,r.isPlainObject),p=r.isUndefined,v=r.resize,y=r.defineReadOnlyProperty,d=r.registerListener,m=function(o){function r(n,i){return e(this,r),t(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,n,i))}return n(r,o),i(r,[{key:"version",get:function(){return"2.0.0"}}]),i(r,[{key:"init",value:function(){this.c.style.borderRadius="50%",this.progress=0,this.set.offsetTop=this.ch,this.halfCH=this.ch/2,this.progressListeners=[],this.finishedListeners=[],this.attrNormalize(),this.createDots(),this.draw()}},{key:"attrNormalize",value:function(){var e=this;["offsetLeft","crestHeight"].forEach(function(t){e.set[t]=u(e.set[t],"offsetLeft"===t?e.cw:e.ch)})}},{key:"createDots",value:function(){for(var e=this.cw,t=this.dots=[],n=e/this.set.rippleNum,i=l/n,o=0;o<=e;o++)t.push({x:o,y:o*i})}},{key:"draw",value:function(){this.calcOffsetTop(),this.drawWave(),this.drawText(),this.calcProgress(),this.progress<=100?this.requestAnimationFrame():(this.progress=100,this.calcOffsetTop(),this.drawWave(),this.drawText(),this.finishedListeners.forEach(function(e){return e()}))}},{key:"drawWave",value:function(){var e=this.cxt,t=this.cw,n=this.ch,i=this.set,o=i.opacity,r=i.crestHeight,s=i.offsetLeft,a=i.offsetTop,c=i.fillColor,l=i.speed;e.clearRect(0,0,t,n),e.globalAlpha=o,e.save(),e.beginPath(),this.dots.forEach(function(t,n){e[n?"lineTo":"moveTo"](t.x,r*f(t.y+s)+a),t.y-=l}),e.lineTo(t,n),e.lineTo(0,n),e.closePath(),e.fillStyle=c,e.fill(),e.restore()}},{key:"drawText",value:function(){var e=this,t=this.cxt,n=this.cw,i=this.halfCH,o=this.progress,r=this.set,s=r.font,a=r.smallFont,f=r.color,l=r.smallFontOffsetTop,u="%",v=c(o);this.progressListeners.forEach(function(t){var n=t(e.progress);p(n)||(h(n)?(v=n.text,u=n.smallText||""):(v=n,u=""))}),t.font=s;var y=t.measureText(v).width;t.font=a;var d=t.measureText(u).width,m=(n-y-d)/2;t.textBaseline="middle",t.fillStyle=f,t.font=s,t.fillText(v,m,i),t.font=a,t.fillText(u,m+y,i+l)}},{key:"calcProgress",value:function(){if(this.immediatelyComplete)return this.progress+=this.immediatelyComplete,void(this.immediatelyComplete+=.5);if(!(this.progress>=99)){var e=this.set,t=e.easing,n=e.duration;this.startTime||(this.startTime=Date.now());var i=Date.now()-this.startTime,o=i/n;o<=1&&(this.progress=JParticles.easing[t](o,i,0,100,n),this.progress>=99&&(this.progress=99))}}},{key:"calcOffsetTop",value:function(){(this.immediatelyComplete||99!==this.progress)&&(100===this.progress?this.set.offsetTop=-this.set.crestHeight:this.set.offsetTop=c((100-this.progress)/100*this.ch+this.set.crestHeight))}},{key:"resize",value:function(){var e=this;v(this,function(t,n){["offsetLeft","offsetTop","crestHeight"].forEach(function(i){e.set[i]*="offsetLeft"===i?t:n}),e.halfCH=e.ch/2,100===e.progress&&e.draw()})}},{key:"setOptions",value:function(e){if(this.set&&h(e))for(var t in e)"offsetTop"!==t&&t in this.set&&(this.set[t]=e[t])}},{key:"done",value:function(){this.set&&!this.immediatelyComplete&&(this.immediatelyComplete=1)}},{key:"onProgress",value:function(){return d.apply(void 0,[this,this.progressListeners].concat(Array.prototype.slice.call(arguments)))}},{key:"onFinished",value:function(){return d.apply(void 0,[this,this.finishedListeners].concat(Array.prototype.slice.call(arguments)))}}]),r}(s);m.defaultConfig={font:"normal 900 20px Arial",smallFont:"normal 900 14px Arial",smallFontOffsetTop:1,color:"#333",fillColor:"#27C9E5",offsetLeft:0,crestHeight:4,rippleNum:1,speed:.3,duration:5e3,easing:"swing"},delete m.prototype.pause,delete m.prototype.open,y(m,"waveLoading")}();