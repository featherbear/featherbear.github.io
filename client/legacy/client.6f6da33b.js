function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return e}}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=function(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}((function(n){var e=function(n){var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e,r){var o=n&&n.prototype instanceof l?n:l,a=Object.create(o.prototype),i=new _(r||[]);return a._invoke=function(t,n,e){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return S()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=w(i,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=s(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=u;var f={};function l(){}function p(){}function h(){}var v={};v[a]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(E([])));m&&m!==e&&r.call(m,a)&&(v=m);var g=h.prototype=l.prototype=Object.create(v);function y(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function b(n,e){var o;this._invoke=function(a,i){function c(){return new e((function(o,c){!function o(a,i,c,u){var f=s(n[a],n,i);if("throw"!==f.type){var l=f.arg,p=l.value;return p&&"object"===t(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(f.arg)}(a,i,o,c)}))}return o=o?o.then(c,c):c()}}function w(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function $(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=g.constructor=h,h.constructor=p,h[c]=p.displayName="GeneratorFunction",n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},n.awrap=function(t){return{__await:t}},y(b.prototype),b.prototype[i]=function(){return this},n.AsyncIterator=b,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new b(u(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(g),g[c]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),$(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;$(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},n}(n.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function a(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,n){return(u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?f(n):e}function p(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function v(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(){}var m=function(t){return t};function g(t,n){for(var e in n)t[e]=n[e];return t}function y(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(y)}function x(t){return"function"==typeof t}function $(n,e){return n!=n?e==e:n!==e||n&&"object"===t(n)||"function"==typeof n}function _(t,n,e,r){if(t){var o=E(t,n,e,r);return t[0](o)}}function E(t,n,e,r){return t[1]&&r?g(e.ctx.slice(),t[1](r(n))):e.ctx}function S(n,e,r,o,a,i,c){var u=function(n,e,r,o){if(n[2]&&o){var a=n[2](o(r));if(void 0===e.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(e.dirty.length,a.length),u=0;u<c;u+=1)i[u]=e.dirty[u]|a[u];return i}return e.dirty|a}return e.dirty}(e,o,a,i);if(u){var s=E(e,r,o,c);n.p(s,u)}}var k="undefined"!=typeof window,R=k?function(){return window.performance.now()}:function(){return Date.now()},L=k?function(t){return requestAnimationFrame(t)}:d,P=new Set;function A(t){P.forEach((function(n){n.c(t)||(P.delete(n),n.f())})),0!==P.size&&L(A)}function j(t,n){t.appendChild(n)}function O(t,n,e){t.insertBefore(n,e||null)}function q(t){t.parentNode.removeChild(t)}function N(t,n){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function C(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function I(){return D(" ")}function T(){return D("")}function U(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}function G(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t,n){var e=Object.getOwnPropertyDescriptors(t.__proto__);for(var r in n)null==n[r]?t.removeAttribute(r):"style"===r?t.style.cssText=n[r]:"__value"===r?t.value=t[r]=n[r]:e[r]&&e[r].set?t[r]=n[r]:G(t,r,n[r])}function F(t){return Array.from(t.childNodes)}function B(t,n,e,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===n){for(var i=0;i<a.attributes.length;){var c=a.attributes[i];e[c.name]?i++:a.removeAttribute(c.name)}return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):C(n)}function H(t,n){for(var e=0;e<t.length;e+=1){var r=t[e];if(3===r.nodeType)return r.data=""+n,t.splice(e,1)[0]}return D(n)}function z(t){return H(t," ")}function J(t,n){n=""+n,t.data!==n&&(t.data=n)}function M(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}function K(t,n,e){t.classList[e?"add":"remove"](n)}function Y(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(n.querySelectorAll(t))}var Q,W=new Set,X=0;function Z(t){for(var n=5381,e=t.length;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}function tt(t,n,e,r,o,a,i){for(var c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,u=16.666/r,s="{\n",f=0;f<=1;f+=u){var l=n+(e-n)*a(f);s+=100*f+"%{".concat(i(l,1-l),"}\n")}var p=s+"100% {".concat(i(e,1-e),"}\n}"),h="__svelte_".concat(Z(p),"_").concat(c),v=t.ownerDocument;W.add(v);var d=v.__svelte_stylesheet||(v.__svelte_stylesheet=v.head.appendChild(C("style")).sheet),m=v.__svelte_rules||(v.__svelte_rules={});m[h]||(m[h]=!0,d.insertRule("@keyframes ".concat(h," ").concat(p),d.cssRules.length));var g=t.style.animation||"";return t.style.animation="".concat(g?"".concat(g,", "):"").concat(h," ").concat(r,"ms linear ").concat(o,"ms 1 both"),X+=1,h}function nt(t,n){var e=(t.style.animation||"").split(", "),r=e.filter(n?function(t){return t.indexOf(n)<0}:function(t){return-1===t.indexOf("__svelte")}),o=e.length-r.length;o&&(t.style.animation=r.join(", "),(X-=o)||L((function(){X||(W.forEach((function(t){for(var n=t.__svelte_stylesheet,e=n.cssRules.length;e--;)n.deleteRule(e);t.__svelte_rules={}})),W.clear())})))}function et(t){Q=t}function rt(){if(!Q)throw new Error("Function called outside component initialization");return Q}function ot(t){rt().$$.on_mount.push(t)}var at=[],it=[],ct=[],ut=[],st=Promise.resolve(),ft=!1;function lt(t){ct.push(t)}var pt,ht=!1,vt=new Set;function dt(){if(!ht){ht=!0;do{for(var t=0;t<at.length;t+=1){var n=at[t];et(n),mt(n.$$)}for(at.length=0;it.length;)it.pop()();for(var e=0;e<ct.length;e+=1){var r=ct[e];vt.has(r)||(vt.add(r),r())}ct.length=0}while(at.length);for(;ut.length;)ut.pop()();ft=!1,ht=!1,vt.clear()}}function mt(t){if(null!==t.fragment){t.update(),w(t.before_update);var n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(lt)}}function gt(t,n,e){var r,o,a;t.dispatchEvent((r="".concat(n?"intro":"outro").concat(e),(a=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,o),a))}var yt,bt=new Set;function wt(){yt={r:0,c:[],p:yt}}function xt(){yt.r||w(yt.c),yt=yt.p}function $t(t,n){t&&t.i&&(bt.delete(t),t.i(n))}function _t(t,n,e,r){if(t&&t.o){if(bt.has(t))return;bt.add(t),yt.c.push((function(){bt.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}var Et={duration:0};function St(t,n,e,r){var o=n(t,e),a=r?0:1,i=null,c=null,u=null;function s(){u&&nt(t,u)}function f(t,n){var e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function l(n){var e,r=o||Et,l=r.delay,p=void 0===l?0:l,h=r.duration,v=void 0===h?300:h,g=r.easing,y=void 0===g?m:g,b=r.tick,x=void 0===b?d:b,$=r.css,_={start:R()+p,b:n};n||(_.group=yt,yt.r+=1),i?c=_:($&&(s(),u=tt(t,a,n,v,p,y,$)),n&&x(0,1),i=f(_,v),lt((function(){return gt(t,n,"start")})),e=function(n){if(c&&n>c.start&&(i=f(c,v),c=null,gt(t,i.b,"start"),$&&(s(),u=tt(t,a,i.b,i.duration,0,y,o.css))),i)if(n>=i.end)x(a=i.b,1-a),gt(t,i.b,"end"),c||(i.b?s():--i.group.r||w(i.group.c)),i=null;else if(n>=i.start){var e=n-i.start;a=i.a+i.d*y(e/i.duration),x(a,1-a)}return!(!i&&!c)},0===P.size&&L(A),new Promise((function(t){P.add({c:e,f:t})})))}return{run:function(t){x(o)?(pt||(pt=Promise.resolve()).then((function(){pt=null})),pt).then((function(){o=o(),l(t)})):l(t)},end:function(){s(),i=c=null}}}function kt(n,e){var r,o=e.token={};function a(t,n,r,a){if(e.token===o){e.resolved=a;var i=e.ctx;void 0!==r&&((i=i.slice())[r]=a);var c=t&&(e.current=t)(i),u=!1;e.block&&(e.blocks?e.blocks.forEach((function(t,r){r!==n&&t&&(wt(),_t(t,1,1,(function(){e.blocks[r]=null})),xt())})):e.block.d(1),c.c(),$t(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[n]=c),u&&dt()}}if((r=n)&&"object"===t(r)&&"function"==typeof r.then){var i=rt();if(n.then((function(t){et(i),a(e.then,1,e.value,t),et(null)}),(function(t){et(i),a(e.catch,2,e.error,t),et(null)})),e.current!==e.pending)return a(e.pending,0),!0}else{if(e.current!==e.then)return a(e.then,1,e.value,n),!0;e.resolved=n}}function Rt(t,n){for(var e={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=n[a];if(c){for(var u in i)u in c||(r[u]=1);for(var s in c)o[s]||(e[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in r)l in e||(e[l]=void 0);return e}function Lt(n){return"object"===t(n)&&null!==n?n:{}}function Pt(t){t&&t.c()}function At(t,n){t&&t.l(n)}function jt(t,n,e){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,c=r.after_update;o&&o.m(n,e),lt((function(){var n=a.map(y).filter(x);i?i.push.apply(i,p(n)):w(n),t.$$.on_mount=[]})),c.forEach(lt)}function Ot(t,n){var e=t.$$;null!==e.fragment&&(w(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function qt(t,n){-1===t.$$.dirty[0]&&(at.push(t),ft||(ft=!0,st.then(dt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Nt(t,n,e,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=Q;et(t);var u=n.props||{},s=t.$$={fragment:null,ctx:null,props:a,update:d,not_equal:o,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:b(),dirty:i},f=!1;if(s.ctx=e?e(t,u,(function(n,e){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:e;return s.ctx&&o(s.ctx[n],s.ctx[n]=r)&&(s.bound[n]&&s.bound[n](r),f&&qt(t,n)),e})):[],s.update(),f=!0,w(s.before_update),s.fragment=!!r&&r(s.ctx),n.target){if(n.hydrate){var l=F(n.target);s.fragment&&s.fragment.l(l),l.forEach(q)}else s.fragment&&s.fragment.c();n.intro&&$t(t.$$.fragment),jt(t,n.target,n.anchor),dt()}et(c)}var Ct=function(){function t(){h(this,t)}var n,e,r;return n=t,(e=[{key:"$destroy",value:function(){Ot(this,1),this.$destroy=d}},{key:"$on",value:function(t,n){var e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1)}}},{key:"$set",value:function(){}}])&&v(n.prototype,e),r&&v(n,r),t}(),Dt=[];function It(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,r=[];function o(e){if($(t,e)&&(t=e,n)){for(var o=!Dt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),Dt.push(i,t)}if(o){for(var c=0;c<Dt.length;c+=2)Dt[c][0](Dt[c+1]);Dt.length=0}}}function a(n){o(n(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,c=[a,i];return r.push(c),1===r.length&&(n=e(o)||d),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}return{set:o,update:a,subscribe:i}}var Tt={},Ut=function(){return{}};function Gt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function Vt(t){var n,e,o,a,i,c,u,s,f,l,p,h,v,m,g,y,b,w,x,$,_,E,S,k,R,L,P,A;return{c:function(){n=C("nav"),e=C("div"),o=C("div"),a=C("a"),i=D("andrew wong"),c=I(),u=C("span"),s=C("span"),f=I(),l=C("span"),p=I(),h=C("span"),v=I(),m=C("div"),g=C("div"),y=C("a"),b=D("blog"),w=I(),x=C("a"),$=D("about me"),_=I(),E=C("a"),S=D("photography"),k=I(),R=C("a"),L=D("programming"),this.h()},l:function(t){var r=F(n=B(t,"NAV",{class:!0,role:!0,"aria-label":!0})),d=F(e=B(r,"DIV",{class:!0})),P=F(o=B(d,"DIV",{class:!0})),A=F(a=B(P,"A",{class:!0,href:!0}));i=H(A,"andrew wong"),A.forEach(q),c=z(P);var j=F(u=B(P,"SPAN",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,"data-target":!0}));F(s=B(j,"SPAN",{"aria-hidden":!0,class:!0})).forEach(q),f=z(j),F(l=B(j,"SPAN",{"aria-hidden":!0,class:!0})).forEach(q),p=z(j),F(h=B(j,"SPAN",{"aria-hidden":!0,class:!0})).forEach(q),j.forEach(q),P.forEach(q),v=z(d);var O=F(m=B(d,"DIV",{class:!0})),N=F(g=B(O,"DIV",{class:!0})),C=F(y=B(N,"A",{class:!0,href:!0}));b=H(C,"blog"),C.forEach(q),w=z(N);var D=F(x=B(N,"A",{class:!0,href:!0}));$=H(D,"about me"),D.forEach(q),_=z(N);var I=F(E=B(N,"A",{class:!0,href:!0}));S=H(I,"photography"),I.forEach(q),k=z(N);var T=F(R=B(N,"A",{class:!0,href:!0}));L=H(T,"programming"),T.forEach(q),N.forEach(q),O.forEach(q),d.forEach(q),r.forEach(q),this.h()},h:function(){G(a,"class","navbar-item is-size-3 title svelte-1g0qt6t"),G(a,"href","/"),G(s,"aria-hidden","true"),G(s,"class","svelte-1g0qt6t"),G(l,"aria-hidden","true"),G(l,"class","svelte-1g0qt6t"),G(h,"aria-hidden","true"),G(h,"class","svelte-1g0qt6t"),G(u,"role","button"),G(u,"class","navbar-burger burger svelte-1g0qt6t"),G(u,"aria-label","menu"),G(u,"aria-expanded","false"),G(u,"data-target","navmenu"),K(u,"is-active",t[1]),G(o,"class","navbar-brand svelte-1g0qt6t"),G(y,"class","navbar-item svelte-1g0qt6t"),G(y,"href","/blog"),K(y,"active","blog"===t[0]),G(x,"class","navbar-item svelte-1g0qt6t"),G(x,"href","/about"),K(x,"active","about"===t[0]),G(E,"class","navbar-item svelte-1g0qt6t"),G(E,"href","/photos"),K(E,"active","photos"===t[0]),G(R,"class","navbar-item svelte-1g0qt6t"),G(R,"href","/programming"),K(R,"active","programming"===t[0]),G(g,"class","navbar-end svelte-1g0qt6t"),G(m,"class","navbar-menu svelte-1g0qt6t"),K(m,"is-active",t[1]),G(e,"class","container svelte-1g0qt6t"),G(n,"class","navbar is-unselectable svelte-1g0qt6t"),G(n,"role","navigation"),G(n,"aria-label","main navigation")},m:function(r,d){O(r,n,d),j(n,e),j(e,o),j(o,a),j(a,i),j(o,c),j(o,u),j(u,s),j(u,f),j(u,l),j(u,p),j(u,h),j(e,v),j(e,m),j(m,g),j(g,y),j(y,b),j(g,w),j(g,x),j(x,$),j(g,_),j(g,E),j(E,S),j(g,k),j(g,R),j(R,L),P||(A=U(u,"click",t[2]),P=!0)},p:function(t,n){var e=r(n,1)[0];2&e&&K(u,"is-active",t[1]),1&e&&K(y,"active","blog"===t[0]),1&e&&K(x,"active","about"===t[0]),1&e&&K(E,"active","photos"===t[0]),1&e&&K(R,"active","programming"===t[0]),2&e&&K(m,"is-active",t[1])},i:d,o:d,d:function(t){t&&q(n),P=!1,A()}}}function Ft(t,n,e){var r=n.segment,o=!1;return t.$set=function(t){"segment"in t&&e(0,r=t.segment)},[r,o,function(){return e(1,o=!o)}]}var Bt=function(t){s(e,Ct);var n=Gt(e);function e(t){var r;return h(this,e),Nt(f(r=n.call(this)),t,Ft,Vt,$,{segment:0}),r}return e}(),Ht=function(){return localStorage.getItem("site-theme")||""},zt=function(){return document.body.dataset.theme=Ht()};function Jt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function Mt(t){var n,e=t[2].default,r=_(e,t,t[1],null);return{c:function(){r&&r.c()},l:function(t){r&&r.l(t)},m:function(t,e){r&&r.m(t,e),n=!0},p:function(t,n){r&&r.p&&2&n&&S(r,e,t,t[1],n,null,null)},i:function(t){n||($t(r,t),n=!0)},o:function(t){_t(r,t),n=!1},d:function(t){r&&r.d(t)}}}function Kt(t){var n,e,r,o=new Bt({props:{segment:t[0]}}),a=t[2].default,i=_(a,t,t[1],null);return{c:function(){Pt(o.$$.fragment),n=I(),e=C("div"),i&&i.c(),this.h()},l:function(t){At(o.$$.fragment,t),n=z(t);var r=F(e=B(t,"DIV",{class:!0}));i&&i.l(r),r.forEach(q),this.h()},h:function(){G(e,"class","container siteContent")},m:function(t,a){jt(o,t,a),O(t,n,a),O(t,e,a),i&&i.m(e,null),r=!0},p:function(t,n){var e={};1&n&&(e.segment=t[0]),o.$set(e),i&&i.p&&2&n&&S(i,a,t,t[1],n,null,null)},i:function(t){r||($t(o.$$.fragment,t),$t(i,t),r=!0)},o:function(t){_t(o.$$.fragment,t),_t(i,t),r=!1},d:function(t){Ot(o,t),t&&q(n),t&&q(e),i&&i.d(t)}}}function Yt(t){var n,e,o,a,i=[Kt,Mt],c=[];function u(t,n){return void 0!==t[0]?0:1}return n=u(t),e=c[n]=i[n](t),{c:function(){e.c(),o=T()},l:function(t){e.l(t),o=T()},m:function(t,e){c[n].m(t,e),O(t,o,e),a=!0},p:function(t,a){var s=r(a,1)[0],f=n;(n=u(t))===f?c[n].p(t,s):(wt(),_t(c[f],1,1,(function(){c[f]=null})),xt(),(e=c[n])||(e=c[n]=i[n](t)).c(),$t(e,1),e.m(o.parentNode,o))},i:function(t){a||($t(e),a=!0)},o:function(t){_t(e),a=!1},d:function(t){c[n].d(t),t&&q(o)}}}function Qt(t,n,e){var r=n.segment;ot((function(){zt()}));var o=n.$$slots,a=void 0===o?{}:o,i=n.$$scope;return t.$set=function(t){"segment"in t&&e(0,r=t.segment),"$$scope"in t&&e(1,i=t.$$scope)},[r,i,a]}var Wt=function(t){s(e,Ct);var n=Jt(e);function e(t){var r;return h(this,e),Nt(f(r=n.call(this)),t,Qt,Yt,$,{segment:0}),r}return e}();function Xt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function Zt(t){var n,e,r=t[1].stack+"";return{c:function(){n=C("pre"),e=D(r)},l:function(t){var o=F(n=B(t,"PRE",{}));e=H(o,r),o.forEach(q)},m:function(t,r){O(t,n,r),j(n,e)},p:function(t,n){2&n&&r!==(r=t[1].stack+"")&&J(e,r)},d:function(t){t&&q(n)}}}function tn(t){var n,e,o,a,i,c,u,s,f,l=t[1].message+"";document.title=n=t[0];var p=t[2]&&t[1].stack&&Zt(t);return{c:function(){e=I(),o=C("h1"),a=D(t[0]),i=I(),c=C("p"),u=D(l),s=I(),p&&p.c(),f=T(),this.h()},l:function(n){Y('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(q),e=z(n);var r=F(o=B(n,"H1",{class:!0}));a=H(r,t[0]),r.forEach(q),i=z(n);var h=F(c=B(n,"P",{class:!0}));u=H(h,l),h.forEach(q),s=z(n),p&&p.l(n),f=T(),this.h()},h:function(){G(o,"class","svelte-ibl7am"),G(c,"class","svelte-ibl7am")},m:function(t,n){O(t,e,n),O(t,o,n),j(o,a),O(t,i,n),O(t,c,n),j(c,u),O(t,s,n),p&&p.m(t,n),O(t,f,n)},p:function(t,e){var o=r(e,1)[0];1&o&&n!==(n=t[0])&&(document.title=n),1&o&&J(a,t[0]),2&o&&l!==(l=t[1].message+"")&&J(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Zt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:d,o:d,d:function(t){t&&q(e),t&&q(o),t&&q(i),t&&q(c),t&&q(s),p&&p.d(t),t&&q(f)}}}function nn(t,n,e){var r=n.status,o=n.error;return t.$set=function(t){"status"in t&&e(0,r=t.status),"error"in t&&e(1,o=t.error)},[r,o,!1]}var en=function(t){s(e,Ct);var n=Xt(e);function e(t){var r;return h(this,e),Nt(f(r=n.call(this)),t,nn,tn,$,{status:0,error:1}),r}return e}();function rn(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function on(t){var n,e,r=[t[4].props],o=t[4].component;function a(t){for(var n={},e=0;e<r.length;e+=1)n=g(n,r[e]);return{props:n}}if(o)var i=new o(a());return{c:function(){i&&Pt(i.$$.fragment),n=T()},l:function(t){i&&At(i.$$.fragment,t),n=T()},m:function(t,r){i&&jt(i,t,r),O(t,n,r),e=!0},p:function(t,e){var c=16&e?Rt(r,[Lt(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){wt();var u=i;_t(u.$$.fragment,1,0,(function(){Ot(u,1)})),xt()}o?(Pt((i=new o(a())).$$.fragment),$t(i.$$.fragment,1),jt(i,n.parentNode,n)):i=null}else o&&i.$set(c)},i:function(t){e||(i&&$t(i.$$.fragment,t),e=!0)},o:function(t){i&&_t(i.$$.fragment,t),e=!1},d:function(t){t&&q(n),i&&Ot(i,t)}}}function an(t){var n,e=new en({props:{error:t[0],status:t[1]}});return{c:function(){Pt(e.$$.fragment)},l:function(t){At(e.$$.fragment,t)},m:function(t,r){jt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||($t(e.$$.fragment,t),n=!0)},o:function(t){_t(e.$$.fragment,t),n=!1},d:function(t){Ot(e,t)}}}function cn(t){var n,e,r,o,a=[an,on],i=[];function c(t,n){return t[0]?0:1}return n=c(t),e=i[n]=a[n](t),{c:function(){e.c(),r=T()},l:function(t){e.l(t),r=T()},m:function(t,e){i[n].m(t,e),O(t,r,e),o=!0},p:function(t,o){var u=n;(n=c(t))===u?i[n].p(t,o):(wt(),_t(i[u],1,1,(function(){i[u]=null})),xt(),(e=i[n])||(e=i[n]=a[n](t)).c(),$t(e,1),e.m(r.parentNode,r))},i:function(t){o||($t(e),o=!0)},o:function(t){_t(e),o=!1},d:function(t){i[n].d(t),t&&q(r)}}}function un(t){for(var n,e=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[cn]},$$scope:{ctx:t}},a=0;a<e.length;a+=1)o=g(o,e[a]);var i=new Wt({props:o});return{c:function(){Pt(i.$$.fragment)},l:function(t){At(i.$$.fragment,t)},m:function(t,e){jt(i,t,e),n=!0},p:function(t,n){var o=r(n,1)[0],a=12&o?Rt(e,[4&o&&{segment:t[2][0]},8&o&&Lt(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),i.$set(a)},i:function(t){n||($t(i.$$.fragment,t),n=!0)},o:function(t){_t(i.$$.fragment,t),n=!1},d:function(t){Ot(i,t)}}}function sn(t,n,e){var r,o,a,i=n.stores,c=n.error,u=n.status,s=n.segments,f=n.level0,l=n.level1,p=void 0===l?null:l,h=n.notify;return r=h,rt().$$.after_update.push(r),o=Tt,a=i,rt().$$.context.set(o,a),t.$set=function(t){"stores"in t&&e(5,i=t.stores),"error"in t&&e(0,c=t.error),"status"in t&&e(1,u=t.status),"segments"in t&&e(2,s=t.segments),"level0"in t&&e(3,f=t.level0),"level1"in t&&e(4,p=t.level1),"notify"in t&&e(6,h=t.notify)},[c,u,s,f,p,i,h]}var fn=function(t){s(e,Ct);var n=rn(e);function e(t){var r;return h(this,e),Nt(f(r=n.call(this)),t,sn,un,$,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return e}(),ln=[],pn=[{js:function(){return import("./index.2eaec6bb.js")},css:[]},{js:function(){return import("./programming.40a69990.js")},css:[]},{js:function(){return import("./index.3f068d39.js")},css:[]},{js:function(){return import("./about.7ddca708.js")},css:[]}],hn=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/programming\/?$/,parts:[{i:1}]},{pattern:/^\/photos\/?$/,parts:[{i:2}]},{pattern:/^\/about\/?$/,parts:[{i:3}]}];function vn(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},e=Nn(new URL(t,document.baseURI));return e?(jn[n.replaceState?"replaceState":"pushState"]({id:Rn},"",t),Dn(e,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var dn,mn,gn,yn,bn,wn="undefined"!=typeof __SAPPER__&&__SAPPER__,xn=!1,$n=[],_n="{}",En={page:function(t){var n=It(t),e=!0;return{notify:function(){e=!0,n.update((function(t){return t}))},set:function(t){e=!1,n.set(t)},subscribe:function(t){var r;return n.subscribe((function(n){(void 0===r||e&&n!==r)&&t(r=n)}))}}}({}),preloading:It(null),session:It(wn&&wn.session)};En.session.subscribe(function(){var t=i(o.mark((function t(n){var e,r,a,i,c,u;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(yn=n,xn){t.next=3;break}return t.abrupt("return");case 3:return bn=!0,e=Nn(new URL(location.href)),r=mn={},t.next=8,Vn(e);case 8:if(a=t.sent,i=a.redirect,c=a.props,u=a.branch,r===mn){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Tn(i,u,c,e.page);case 16:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());var Sn,kn=null;var Rn,Ln=1;var Pn,An,jn="undefined"!=typeof history?history:{pushState:function(t,n,e){},replaceState:function(t,n,e){},scrollRestoration:""},On={};function qn(n){var e=Object.create(null);return n.length>0&&n.slice(1).split("&").forEach((function(n){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(n.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof e[a]&&(e[a]=[e[a]]),"object"===t(e[a])?e[a].push(c):e[a]=c})),e}function Nn(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(wn.baseUrl))return null;var n=t.pathname.slice(wn.baseUrl.length);if(""===n&&(n="/"),!ln.some((function(t){return t.test(n)})))for(var e=0;e<hn.length;e+=1){var r=hn[e],o=r.pattern.exec(n);if(o){var a=qn(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:n,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function Cn(){return{x:pageXOffset,y:pageYOffset}}function Dn(t,n,e,r){return In.apply(this,arguments)}function In(){return(In=i(o.mark((function t(n,e,r,a){var i,c,u,s,f,l,p,h,v;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e?Rn=e:(i=Cn(),On[Rn]=i,e=Rn=++Ln,On[Rn]=r?i:{x:0,y:0}),Rn=e,dn&&En.preloading.set(!0),c=kn&&kn.href===n.href?kn.promise:Vn(n),kn=null,u=mn={},t.next=8,c;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,u===mn){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Tn(f,p,l,n.page);case 16:document.activeElement&&document.activeElement.blur(),r||(h=On[e],a&&(v=document.getElementById(a.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),On[Rn]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Tn(t,n,e,r){return Un.apply(this,arguments)}function Un(){return(Un=i(o.mark((function t(n,e,r,a){var i,c;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",vn(n.location,{replaceState:!0}));case 2:if(En.page.set(a),En.preloading.set(!1),!dn){t.next=8;break}dn.$set(r),t.next=18;break;case 8:return r.stores={page:{subscribe:En.page.subscribe},preloading:{subscribe:En.preloading.subscribe},session:En.session},t.next=11,gn;case 11:if(t.t0=t.sent,r.level0={props:t.t0},r.notify=En.page.notify,i=document.querySelector("#sapper-head-start"),c=document.querySelector("#sapper-head-end"),i&&c){for(;i.nextSibling!==c;)zn(i.nextSibling);zn(i),zn(c)}dn=new fn({target:Sn,props:r,hydrate:!0});case 18:$n=e,_n=JSON.stringify(a.query),xn=!0,bn=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Gn(t,n,e,r){if(r!==_n)return!0;var o=$n[t];return!!o&&(n!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(e.slice(1,t+2)))||void 0))}function Vn(t){return Fn.apply(this,arguments)}function Fn(){return(Fn=i(o.mark((function t(n){var e,r,a,c,u,s,f,l,p,h,v;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.route,r=n.page,a=r.path.split("/").filter(Boolean),c=null,u={error:null,status:200,segments:[a[0]]},s={fetch:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){return fetch(t,n)})),redirect:function(t,n){if(c&&(c.statusCode!==t||c.location!==n))throw new Error("Conflicting redirects");c={statusCode:t,location:n}},error:function(t,n){u.error="string"==typeof n?new Error(n):n,u.status=t}},gn||(gn=wn.preloaded[0]||Ut.call(s,{host:r.host,path:r.path,query:r.query,params:{}},yn)),l=1,t.prev=7,p=JSON.stringify(r.query),h=e.pattern.exec(r.path),v=!1,t.next=13,Promise.all(e.parts.map(function(){var t=i(o.mark((function t(e,i){var c,f,d,m,g,y;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a[i],Gn(i,c,h,p)&&(v=!0),u.segments[l]=a[i+1],e){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(f=l++,bn||v||!$n[i]||$n[i].part!==e.i){t.next=8;break}return t.abrupt("return",$n[i]);case 8:return v=!1,t.next=11,Hn(pn[e.i]);case 11:if(d=t.sent,m=d.default,g=d.preload,!xn&&wn.preloaded[i+1]){t.next=25;break}if(!g){t.next=21;break}return t.next=18,g.call(s,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(n.match):{}},yn);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:y=t.t0,t.next=26;break;case 25:y=wn.preloaded[i+1];case 26:return t.abrupt("return",u["level".concat(f)]={component:m,props:y,segment:c,match:h,part:e.i});case 27:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),u.error=t.t0,u.status=500,f=[];case 21:return t.abrupt("return",{redirect:c,props:u,branch:f});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function Bn(t){var n="client/".concat(t);if(!document.querySelector('link[href="'.concat(n,'"]')))return new Promise((function(t,e){var r=document.createElement("link");r.rel="stylesheet",r.href=n,r.onload=function(){return t()},r.onerror=e,document.head.appendChild(r)}))}function Hn(t){var n="string"==typeof t.css?[]:t.css.map(Bn);return n.unshift(t.js()),Promise.all(n).then((function(t){return t[0]}))}function zn(t){t.parentNode.removeChild(t)}function Jn(t){var n=Nn(new URL(t,document.baseURI));if(n)return kn&&t===kn.href||function(t,n){kn={href:t,promise:n}}(t,Vn(n)),kn.promise}function Mn(t){clearTimeout(Pn),Pn=setTimeout((function(){Kn(t)}),20)}function Kn(t){var n=Qn(t.target);n&&"prefetch"===n.rel&&Jn(n.href)}function Yn(n){if(1===function(t){return null===t.which?t.button:t.which}(n)&&!(n.metaKey||n.ctrlKey||n.shiftKey||n.defaultPrevented)){var e=Qn(n.target);if(e&&e.href){var r="object"===t(e.href)&&"SVGAnimatedString"===e.href.constructor.name,o=String(r?e.href.baseVal:e.href);if(o!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&!(r?e.target.baseVal:e.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Nn(a);if(i)Dn(i,null,e.hasAttribute("sapper-noscroll"),a.hash),n.preventDefault(),jn.pushState({id:Rn},"",a.href)}}}else location.hash||n.preventDefault()}}}function Qn(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Wn(t){if(On[Rn]=Cn(),t.state){var n=Nn(new URL(location.href));n?Dn(n,t.state.id):location.href=location.href}else(function(t){Rn=t})(Ln=Ln+1),jn.replaceState({id:Rn},"",location.href)}An={target:document.getElementById("app")},"scrollRestoration"in jn&&(jn.scrollRestoration="manual"),addEventListener("beforeunload",(function(){jn.scrollRestoration="auto"})),addEventListener("load",(function(){jn.scrollRestoration="manual"})),function(t){Sn=t}(An.target),addEventListener("click",Yn),addEventListener("popstate",Wn),addEventListener("touchstart",Kn),addEventListener("mousemove",Mn),Promise.resolve().then((function(){var t=location,n=t.hash,e=t.href;jn.replaceState({id:Ln},"",e);var r,o,a,i,c,u,s,f,l=new URL(location.href);if(wn.error)return r=location,o=r.host,a=r.pathname,i=r.search,c=wn.session,u=wn.preloaded,s=wn.status,f=wn.error,gn||(gn=u&&u[0]),void Tn(null,[],{error:f,status:s,session:c,level0:{props:gn},level1:{props:{status:s,error:f},component:en},segments:u},{host:o,path:a,query:qn(i),params:{}});var p=Nn(l);return p?Dn(p,Ln,!0,n):void 0}));export{d as A,ot as B,it as C,M as D,N as E,Pt as F,Y as G,At as H,jt as I,Ot as J,m as K,J as L,lt as M,St as N,U as O,wt as P,xt as Q,kt as R,Ct as S,i as T,o as U,T as V,s as _,c as a,l as b,h as c,f as d,_ as e,g as f,C as g,B as h,Nt as i,F as j,q as k,G as l,V as m,O as n,j as o,r as p,Rt as q,$t as r,$ as s,K as t,S as u,_t as v,I as w,D as x,z as y,H as z};
