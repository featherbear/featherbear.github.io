import{_ as n,a as t,b as e,c as r,i,s as o,d as c,U as u,S as a,f,r as l,g as s,h,x as v,j as p,k as d,l as m,m as g,I as $,p as y,v as C,n as S,G as E,E as w,T as b,t as R,q as x,w as T,y as P,V as A,W as N,o as B,z as V,M as I,N as D,D as L,L as W,X as O,Y as k,C as F}from"./client.c717b989.js";import{N as U}from"./NameBlock.961afddb.js";import{P as z,a as M}from"./aboutText.52d56463.js";import{B as j}from"./Button.ec7fdbb3.js";function K(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function H(n,t,e){var r=n.slice();return r[4]=t[e],r}function G(n){var t,e;return{c:function(){t=f("subtitle"),e=l(n[1]),this.h()},l:function(r){t=s(r,"SUBTITLE",{class:!0});var i=h(t);e=v(i,n[1]),i.forEach(p),this.h()},h:function(){d(t,"class","svelte-1sywzgu")},m:function(n,r){m(n,t,r),g(t,e)},p:function(n,t){2&t&&$(e,n[1])},d:function(n){n&&p(t)}}}function q(n){var t,e;function r(n,t){return(null==e||4&t)&&(e=!!Array.isArray(n[2])),e?X:Y}var i=r(n,-1),o=i(n);return{c:function(){t=f("p"),o.c(),this.h()},l:function(n){t=s(n,"P",{class:!0});var e=h(t);o.l(e),e.forEach(p),this.h()},h:function(){d(t,"class","svelte-1sywzgu")},m:function(n,e){m(n,t,e),o.m(t,null)},p:function(n,e){i===(i=r(n,e))&&o?o.p(n,e):(o.d(1),(o=i(n))&&(o.c(),o.m(t,null)))},d:function(n){n&&p(t),o.d()}}}function Y(n){var t;return{c:function(){t=l(n[2])},l:function(e){t=v(e,n[2])},m:function(n,e){m(n,t,e)},p:function(n,e){4&e&&$(t,n[2])},d:function(n){n&&p(t)}}}function X(n){for(var t,e=n[2],r=[],i=0;i<e.length;i+=1)r[i]=_(H(n,e,i));return{c:function(){t=f("ul");for(var n=0;n<r.length;n+=1)r[n].c();this.h()},l:function(n){t=s(n,"UL",{class:!0});for(var e=h(t),i=0;i<r.length;i+=1)r[i].l(e);e.forEach(p),this.h()},h:function(){d(t,"class","svelte-1sywzgu")},m:function(n,e){m(n,t,e);for(var i=0;i<r.length;i+=1)r[i].m(t,null)},p:function(n,i){if(4&i){var o;for(e=n[2],o=0;o<e.length;o+=1){var c=H(n,e,o);r[o]?r[o].p(c,i):(r[o]=_(c),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=e.length}},d:function(n){n&&p(t),w(r,n)}}}function _(n){var t,e,r=n[4]+"";return{c:function(){t=f("li"),e=l(r)},l:function(n){t=s(n,"LI",{});var i=h(t);e=v(i,r),i.forEach(p)},m:function(n,r){m(n,t,r),g(t,e)},p:function(n,t){4&t&&r!==(r=n[4]+"")&&$(e,r)},d:function(n){n&&p(t)}}}function J(n){var t,e,r,i,o,c=n[1]&&G(n),u=n[2]&&q(n);return{c:function(){t=f("article"),e=f("h1"),r=l(n[0]),i=y(),c&&c.c(),o=y(),u&&u.c(),this.h()},l:function(a){t=s(a,"ARTICLE",{class:!0});var f=h(t);e=s(f,"H1",{class:!0});var l=h(e);r=v(l,n[0]),l.forEach(p),i=C(f),c&&c.l(f),o=C(f),u&&u.l(f),f.forEach(p),this.h()},h:function(){d(e,"class","svelte-1sywzgu"),d(t,"class","svelte-1sywzgu")},m:function(n,a){m(n,t,a),g(t,e),g(e,r),g(t,i),c&&c.m(t,null),g(t,o),u&&u.m(t,null)},p:function(n,e){var i=S(e,1)[0];1&i&&$(r,n[0]),n[1]?c?c.p(n,i):((c=G(n)).c(),c.m(t,o)):c&&(c.d(1),c=null),n[2]?u?u.p(n,i):((u=q(n)).c(),u.m(t,null)):u&&(u.d(1),u=null)},i:E,o:E,d:function(n){n&&p(t),c&&c.d(),u&&u.d()}}}function Q(n,t,e){var r=t.title,i=void 0===r?"":r,o=t.subtitle,c=void 0===o?null:o,u=t.description,a=void 0===u?null:u;return n.$$set=function(n){"title"in n&&e(0,i=n.title),"subtitle"in n&&e(1,c=n.subtitle),"description"in n&&e(2,a=n.description)},[i,c,a,[]]}var Z=function(t){n(f,a);var e=K(f);function f(n){var t;return r(this,f),t=e.call(this),i(c(t),n,Q,J,o,{title:0,subtitle:1,categories:3,description:2}),t}return u(f,[{key:"categories",get:function(){return this.$$.ctx[3]}}]),f}();function nn(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function tn(n){var t,e;return{c:function(){t=f("article"),e=l(n[0]),this.h()},l:function(r){t=s(r,"ARTICLE",{class:!0});var i=h(t);e=v(i,n[0]),i.forEach(p),this.h()},h:function(){d(t,"class","svelte-xwwqs0")},m:function(n,r){m(n,t,r),g(t,e)},p:function(n,t){1&S(t,1)[0]&&$(e,n[0])},i:E,o:E,d:function(n){n&&p(t)}}}function en(n,t,e){var r=t.text,i=void 0===r?"":r;return n.$$set=function(n){"text"in n&&e(0,i=n.text)},[i]}var rn=function(t){n(u,a);var e=nn(u);function u(n){var t;return r(this,u),t=e.call(this),i(c(t),n,en,tn,o,{text:0}),t}return u}();function on(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function cn(n,t,e){var r=n.slice();return r[5]=t[e],r}function un(n,t,e){var r=n.slice();return r[8]=t[e],r}function an(n,t,e){var r=n.slice();return r[11]=t[e],r}function fn(n){var t,e;return{c:function(){t=f("div"),e=l(n[1]),this.h()},l:function(r){t=s(r,"DIV",{class:!0});var i=h(t);e=v(i,n[1]),i.forEach(p),this.h()},h:function(){d(t,"class","preContent svelte-1bgk3we")},m:function(n,r){m(n,t,r),g(t,e)},p:function(n,t){2&t&&$(e,n[1])},d:function(n){n&&p(t)}}}function ln(n){var t,e,r,i;t=new rn({props:{text:n[8].title||">UNKNOWN TITLE<"}});for(var o=n[8].contents,c=[],u=0;u<o.length;u+=1)c[u]=hn(an(n,o,u));var a=function(n){return B(c[n],1,1,(function(){c[n]=null}))};return{c:function(){x(t.$$.fragment),e=y();for(var n=0;n<c.length;n+=1)c[n].c();r=b()},l:function(n){T(t.$$.fragment,n),e=C(n);for(var i=0;i<c.length;i+=1)c[i].l(n);r=b()},m:function(n,o){P(t,n,o),m(n,e,o);for(var u=0;u<c.length;u+=1)c[u].m(n,o);m(n,r,o),i=!0},p:function(n,e){var i={};if(1&e&&(i.text=n[8].title||">UNKNOWN TITLE<"),t.$set(i),9&e){var u;for(o=n[8].contents,u=0;u<o.length;u+=1){var f=an(n,o,u);c[u]?(c[u].p(f,e),R(c[u],1)):(c[u]=hn(f),c[u].c(),R(c[u],1),c[u].m(r.parentNode,r))}for(I(),u=o.length;u<c.length;u+=1)a(u);D()}},i:function(n){if(!i){R(t.$$.fragment,n);for(var e=0;e<o.length;e+=1)R(c[e]);i=!0}},o:function(n){B(t.$$.fragment,n),c=c.filter(Boolean);for(var e=0;e<c.length;e+=1)B(c[e]);i=!1},d:function(n){V(t,n),n&&p(e),w(c,n),n&&p(r)}}}function sn(n){for(var t,e,r=[n[11]],i={},o=0;o<r.length;o+=1)i=k(i,r[o]);return t=new Z({props:i}),{c:function(){x(t.$$.fragment)},l:function(n){T(t.$$.fragment,n)},m:function(n,r){P(t,n,r),e=!0},p:function(n,e){var i=1&e?A(r,[N(n[11])]):{};t.$set(i)},i:function(n){e||(R(t.$$.fragment,n),e=!0)},o:function(n){B(t.$$.fragment,n),e=!1},d:function(n){V(t,n)}}}function hn(n){var t,e,r=!n[3]||n[11].categories.includes(n[3]),i=r&&sn(n);return{c:function(){i&&i.c(),t=b()},l:function(n){i&&i.l(n),t=b()},m:function(n,r){i&&i.m(n,r),m(n,t,r),e=!0},p:function(n,e){9&e&&(r=!n[3]||n[11].categories.includes(n[3])),r?i?(i.p(n,e),9&e&&R(i,1)):((i=sn(n)).c(),R(i,1),i.m(t.parentNode,t)):i&&(I(),B(i,1,1,(function(){i=null})),D())},i:function(n){e||(R(i),e=!0)},o:function(n){B(i),e=!1},d:function(n){i&&i.d(n),n&&p(t)}}}function vn(n){var t,e,r=!n[3]||n[8].contents.map(mn).flat().includes(n[3]),i=r&&ln(n);return{c:function(){i&&i.c(),t=b()},l:function(n){i&&i.l(n),t=b()},m:function(n,r){i&&i.m(n,r),m(n,t,r),e=!0},p:function(n,e){9&e&&(r=!n[3]||n[8].contents.map(mn).flat().includes(n[3])),r?i?(i.p(n,e),9&e&&R(i,1)):((i=ln(n)).c(),R(i,1),i.m(t.parentNode,t)):i&&(I(),B(i,1,1,(function(){i=null})),D())},i:function(n){e||(R(i),e=!0)},o:function(n){B(i),e=!1},d:function(n){i&&i.d(n),n&&p(t)}}}function pn(n){var t,e,r,i,o=n[5]+"";function c(){return n[4](n[5])}return{c:function(){t=f("button"),e=l(o),this.h()},l:function(n){t=s(n,"BUTTON",{class:!0});var r=h(t);e=v(r,o),r.forEach(p),this.h()},h:function(){d(t,"class","categorySelect svelte-1bgk3we"),L(t,"isActiveCategory",n[3]==n[5]||!n[3])},m:function(n,o){m(n,t,o),g(t,e),r||(i=W(t,"click",c),r=!0)},p:function(r,i){n=r,4&i&&o!==(o=n[5]+"")&&$(e,o),12&i&&L(t,"isActiveCategory",n[3]==n[5]||!n[3])},d:function(n){n&&p(t),r=!1,i()}}}function dn(n){for(var t,e,r,i,o,c,u,a,$=n[1]&&fn(n),E=n[0],b=[],x=0;x<E.length;x+=1)b[x]=vn(un(n,E,x));for(var T=function(n){return B(b[n],1,1,(function(){b[n]=null}))},P=n[2],A=[],N=0;N<P.length;N+=1)A[N]=pn(cn(n,P,N));return{c:function(){t=f("div"),$&&$.c(),e=y();for(var n=0;n<b.length;n+=1)b[n].c();r=y(),i=f("div"),o=f("span"),c=l("Filter Categories"),u=y();for(var a=0;a<A.length;a+=1)A[a].c();this.h()},l:function(n){t=s(n,"DIV",{class:!0});var a=h(t);$&&$.l(a),e=C(a);for(var f=0;f<b.length;f+=1)b[f].l(a);a.forEach(p),r=C(n),i=s(n,"DIV",{class:!0});var l=h(i);o=s(l,"SPAN",{});var d=h(o);c=v(d,"Filter Categories"),d.forEach(p),u=C(l);for(var m=0;m<A.length;m+=1)A[m].l(l);l.forEach(p),this.h()},h:function(){d(t,"class","line svelte-1bgk3we"),d(i,"class","noprint")},m:function(n,f){m(n,t,f),$&&$.m(t,null),g(t,e);for(var l=0;l<b.length;l+=1)b[l].m(t,null);m(n,r,f),m(n,i,f),g(i,o),g(o,c),g(i,u);for(var s=0;s<A.length;s+=1)A[s].m(i,null);a=!0},p:function(n,r){var o=S(r,1)[0];if(n[1]?$?$.p(n,o):(($=fn(n)).c(),$.m(t,e)):$&&($.d(1),$=null),9&o){var c;for(E=n[0],c=0;c<E.length;c+=1){var u=un(n,E,c);b[c]?(b[c].p(u,o),R(b[c],1)):(b[c]=vn(u),b[c].c(),R(b[c],1),b[c].m(t,null))}for(I(),c=E.length;c<b.length;c+=1)T(c);D()}if(12&o){var a;for(P=n[2],a=0;a<P.length;a+=1){var f=cn(n,P,a);A[a]?A[a].p(f,o):(A[a]=pn(f),A[a].c(),A[a].m(i,null))}for(;a<A.length;a+=1)A[a].d(1);A.length=P.length}},i:function(n){if(!a){for(var t=0;t<E.length;t+=1)R(b[t]);a=!0}},o:function(n){b=b.filter(Boolean);for(var t=0;t<b.length;t+=1)B(b[t]);a=!1},d:function(n){n&&p(t),$&&$.d(),w(b,n),n&&p(r),n&&p(i),w(A,n)}}}var mn=function(n){return n.categories};function gn(n,t,e){var r=t.data,i=void 0===r?[]:r,o=t.preContent,c=[],u=null;return n.$$set=function(n){"data"in n&&e(0,i=n.data),"preContent"in n&&e(1,o=n.preContent)},n.$$.update=function(){1&n.$$.dirty&&e(2,c=O(new Set(i.map((function(n){return n.contents.map((function(n){return n.categories||null}))})).flat().flat())).filter((function(n){return n})))},[i,o,c,u,function(n){return e(3,u=u==n?null:n)}]}var $n=function(t){n(u,a);var e=on(u);function u(n){var t;return r(this,u),t=e.call(this),i(c(t),n,gn,dn,o,{data:0,preContent:1}),t}return u}();function yn(n,t){return{title:n,contents:t}}function Cn(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{title:n,subtitle:t,categories:e,description:r}}var Sn=[yn("2021",[Cn("CommBank Cyber Prize",null,["Security"],"Received an award in recognition for SECedu course excellence "),Cn("Broadcast Engineer @ UNSW Sydney",null,["Audio/Visual"],"Livestreaming of university course lectures"),Cn("IMAG Camera Operator @ KCC KYCK",null,["Audio/Visual"])]),yn("2020",[Cn("First in COMP6[84]43 Course",null,["Security","Computing"],"Web Application Security and Testing"),Cn("First in CSE x SecSoc CTF Competition",null,["Security","Computing"]),Cn("Two Hands Lifted","2020 - present",["Audio/Visual"],"Wedding Videography and Livestreaming")]),yn("2019",[Cn("Volunteer @ Sculpture by the Sea","2015, 2019",[]),Cn("Computer Science Tutor @ UNSW Sydney","2019 - present",["Computing","Security"],"Courses tutored in 2021:\nCOMP6[84]41 - [Extended] Security Engineering and Cyber Security\nCOMP6[84]43 - [Extended] Web Application Security Testing\nCOMP6447 - System and Software Security Assessment"),Cn("Workshop Content Writer @ CSE CompClub 2019 Summer",null,["Security","Computing"],"Created workshop content about information security and security engineering."),Cn("Ryndeum","2019 - present",["Computing"],"Software Solutions")]),yn("2018",[Cn("Mentor @ CSE CompClub 2018 Winter",null,["Security","Computing"]),Cn("Event Technician @ UNSW Hospitality","2018 - 2020",["Audio/Visual","Computing"]),Cn("Started Electrical Engineering / Computer Science at UNSW Sydney",null,["Computing"])]),yn("2017",[Cn("Graduated from Sydney Technical High School","2012 - 2017",["Computing","Audio/Visual"],["School Prefect","First in Information Processes & Technology","First in Software Design & Development","First in Electronics","Deputy Principals’ Prize for Senior Contribution to School Life","Sound and Lighting Crew Director"]),Cn("AV Technician @ RICE Movement","2017 - present",["Audio/Visual"])])];function En(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function wn(n){var t;return{c:function(){t=l("Download as PDF")},l:function(n){t=v(n,"Download as PDF")},m:function(n,e){m(n,t,e)},d:function(n){n&&p(t)}}}function bn(n){var t;return{c:function(){t=l("View complete resume")},l:function(n){t=v(n,"View complete resume")},m:function(n,e){m(n,t,e)},d:function(n){n&&p(t)}}}function Rn(n){var t,e,r,i,o,c,u,a,l,v,$,E,w,b,A;return e=new z({}),i=new $n({props:{data:Sn,preContent:M}}),u=new j({props:{href:"resume/pdf",openInNewTab:!0,$$slots:{default:[wn]},$$scope:{ctx:n}}}),l=new j({props:{href:"resume/full",$$slots:{default:[bn]},$$scope:{ctx:n}}}),E=new U({props:{rightAlign:!0}}),{c:function(){t=f("div"),x(e.$$.fragment),r=y(),x(i.$$.fragment),o=y(),c=f("p"),x(u.$$.fragment),a=y(),x(l.$$.fragment),v=y(),$=f("div"),x(E.$$.fragment),w=y(),b=f("div"),this.h()},l:function(n){t=s(n,"DIV",{id:!0,class:!0});var f=h(t);T(e.$$.fragment,f),r=C(f),T(i.$$.fragment,f),o=C(f),c=s(f,"P",{class:!0,style:!0});var d=h(c);T(u.$$.fragment,d),a=C(d),T(l.$$.fragment,d),d.forEach(p),f.forEach(p),v=C(n),$=s(n,"DIV",{class:!0});var m=h($);T(E.$$.fragment,m),m.forEach(p),w=C(n),b=s(n,"DIV",{class:!0}),h(b).forEach(p),this.h()},h:function(){d(c,"class","noprint"),F(c,"text-align","center"),d(t,"id","container"),d(t,"class","svelte-1tcl2l3"),d($,"class","nameBlockContainer svelte-1tcl2l3"),d(b,"class","randomPrintLine svelte-1tcl2l3")},m:function(n,f){m(n,t,f),P(e,t,null),g(t,r),P(i,t,null),g(t,o),g(t,c),P(u,c,null),g(c,a),P(l,c,null),m(n,v,f),m(n,$,f),P(E,$,null),m(n,w,f),m(n,b,f),A=!0},p:function(n,t){var e=S(t,1)[0],r={};1&e&&(r.$$scope={dirty:e,ctx:n}),u.$set(r);var i={};1&e&&(i.$$scope={dirty:e,ctx:n}),l.$set(i)},i:function(n){A||(R(e.$$.fragment,n),R(i.$$.fragment,n),R(u.$$.fragment,n),R(l.$$.fragment,n),R(E.$$.fragment,n),A=!0)},o:function(n){B(e.$$.fragment,n),B(i.$$.fragment,n),B(u.$$.fragment,n),B(l.$$.fragment,n),B(E.$$.fragment,n),A=!1},d:function(n){n&&p(t),V(e),V(i),V(u),V(l),n&&p(v),n&&p($),V(E),n&&p(w),n&&p(b)}}}var xn=function(t){n(u,a);var e=En(u);function u(n){var t;return r(this,u),t=e.call(this),i(c(t),n,null,Rn,o,{}),t}return u}();export default xn;
