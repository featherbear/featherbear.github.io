import{_ as n,a as t,b as e,c as r,i,s as o,d as c,W as u,S as a,f as l,r as f,g as s,h,x as v,j as p,k as d,l as m,m as g,R as $,p as y,v as C,n as S,I as E,E as x,L as R,t as T,q as b,w,z as A,X as P,Y as I,o as V,A as B,O as N,P as D,D as L,V as W,Z as k,$ as F,y as U}from"./client.18014d82.js";import{N as O}from"./NameBlock.34838e22.js";import{P as j,a as H}from"./aboutText.8722b89b.js";import{B as G}from"./Button.dfd54b51.js";function M(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function z(n,t,e){var r=n.slice();return r[4]=t[e],r}function q(n){var t,e;return{c:function(){t=l("subtitle"),e=f(n[1]),this.h()},l:function(r){t=s(r,"SUBTITLE",{class:!0});var i=h(t);e=v(i,n[1]),i.forEach(p),this.h()},h:function(){d(t,"class","svelte-1ynsxpd")},m:function(n,r){m(n,t,r),g(t,e)},p:function(n,t){2&t&&$(e,n[1])},d:function(n){n&&p(t)}}}function K(n){var t,e;function r(n,t){return(null==e||4&t)&&(e=!!Array.isArray(n[2])),e?Y:X}var i=r(n,-1),o=i(n);return{c:function(){t=l("p"),o.c(),this.h()},l:function(n){t=s(n,"P",{class:!0});var e=h(t);o.l(e),e.forEach(p),this.h()},h:function(){d(t,"class","svelte-1ynsxpd")},m:function(n,e){m(n,t,e),o.m(t,null)},p:function(n,e){i===(i=r(n,e))&&o?o.p(n,e):(o.d(1),(o=i(n))&&(o.c(),o.m(t,null)))},d:function(n){n&&p(t),o.d()}}}function X(n){var t;return{c:function(){t=f(n[2])},l:function(e){t=v(e,n[2])},m:function(n,e){m(n,t,e)},p:function(n,e){4&e&&$(t,n[2])},d:function(n){n&&p(t)}}}function Y(n){for(var t,e=n[2],r=[],i=0;i<e.length;i+=1)r[i]=Z(z(n,e,i));return{c:function(){t=l("ul");for(var n=0;n<r.length;n+=1)r[n].c();this.h()},l:function(n){t=s(n,"UL",{class:!0});for(var e=h(t),i=0;i<r.length;i+=1)r[i].l(e);e.forEach(p),this.h()},h:function(){d(t,"class","svelte-1ynsxpd")},m:function(n,e){m(n,t,e);for(var i=0;i<r.length;i+=1)r[i].m(t,null)},p:function(n,i){if(4&i){var o;for(e=n[2],o=0;o<e.length;o+=1){var c=z(n,e,o);r[o]?r[o].p(c,i):(r[o]=Z(c),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=e.length}},d:function(n){n&&p(t),x(r,n)}}}function Z(n){var t,e,r=n[4]+"";return{c:function(){t=l("li"),e=f(r)},l:function(n){t=s(n,"LI",{});var i=h(t);e=v(i,r),i.forEach(p)},m:function(n,r){m(n,t,r),g(t,e)},p:function(n,t){4&t&&r!==(r=n[4]+"")&&$(e,r)},d:function(n){n&&p(t)}}}function _(n){var t,e,r,i,o,c=n[1]&&q(n),u=n[2]&&K(n);return{c:function(){t=l("article"),e=l("h1"),r=f(n[0]),i=y(),c&&c.c(),o=y(),u&&u.c(),this.h()},l:function(a){t=s(a,"ARTICLE",{class:!0});var l=h(t);e=s(l,"H1",{class:!0});var f=h(e);r=v(f,n[0]),f.forEach(p),i=C(l),c&&c.l(l),o=C(l),u&&u.l(l),l.forEach(p),this.h()},h:function(){d(e,"class","svelte-1ynsxpd"),d(t,"class","svelte-1ynsxpd")},m:function(n,a){m(n,t,a),g(t,e),g(e,r),g(t,i),c&&c.m(t,null),g(t,o),u&&u.m(t,null)},p:function(n,e){var i=S(e,1)[0];1&i&&$(r,n[0]),n[1]?c?c.p(n,i):((c=q(n)).c(),c.m(t,o)):c&&(c.d(1),c=null),n[2]?u?u.p(n,i):((u=K(n)).c(),u.m(t,null)):u&&(u.d(1),u=null)},i:E,o:E,d:function(n){n&&p(t),c&&c.d(),u&&u.d()}}}function J(n,t,e){var r=t.title,i=void 0===r?"":r,o=t.subtitle,c=void 0===o?null:o,u=t.description,a=void 0===u?null:u;return n.$$set=function(n){"title"in n&&e(0,i=n.title),"subtitle"in n&&e(1,c=n.subtitle),"description"in n&&e(2,a=n.description)},[i,c,a,[]]}var Q=function(t){n(l,a);var e=M(l);function l(n){var t;return r(this,l),t=e.call(this),i(c(t),n,J,_,o,{title:0,subtitle:1,categories:3,description:2}),t}return u(l,[{key:"categories",get:function(){return this.$$.ctx[3]}}]),l}();function nn(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function tn(n){var t,e;return{c:function(){t=l("article"),e=f(n[0]),this.h()},l:function(r){t=s(r,"ARTICLE",{class:!0});var i=h(t);e=v(i,n[0]),i.forEach(p),this.h()},h:function(){d(t,"class","svelte-xwwqs0")},m:function(n,r){m(n,t,r),g(t,e)},p:function(n,t){1&S(t,1)[0]&&$(e,n[0])},i:E,o:E,d:function(n){n&&p(t)}}}function en(n,t,e){var r=t.text,i=void 0===r?"":r;return n.$$set=function(n){"text"in n&&e(0,i=n.text)},[i]}var rn=function(t){n(u,a);var e=nn(u);function u(n){var t;return r(this,u),t=e.call(this),i(c(t),n,en,tn,o,{text:0}),t}return u}();function on(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function cn(n,t,e){var r=n.slice();return r[5]=t[e],r}function un(n,t,e){var r=n.slice();return r[8]=t[e],r}function an(n,t,e){var r=n.slice();return r[11]=t[e],r}function ln(n){var t,e;return{c:function(){t=l("div"),e=f(n[1]),this.h()},l:function(r){t=s(r,"DIV",{class:!0});var i=h(t);e=v(i,n[1]),i.forEach(p),this.h()},h:function(){d(t,"class","preContent svelte-2da8tk")},m:function(n,r){m(n,t,r),g(t,e)},p:function(n,t){2&t&&$(e,n[1])},d:function(n){n&&p(t)}}}function fn(n){var t,e,r,i;t=new rn({props:{text:n[8].title||">UNKNOWN TITLE<"}});for(var o=n[8].contents,c=[],u=0;u<o.length;u+=1)c[u]=hn(an(n,o,u));var a=function(n){return V(c[n],1,1,(function(){c[n]=null}))};return{c:function(){b(t.$$.fragment),e=y();for(var n=0;n<c.length;n+=1)c[n].c();r=R()},l:function(n){w(t.$$.fragment,n),e=C(n);for(var i=0;i<c.length;i+=1)c[i].l(n);r=R()},m:function(n,o){A(t,n,o),m(n,e,o);for(var u=0;u<c.length;u+=1)c[u].m(n,o);m(n,r,o),i=!0},p:function(n,e){var i={};if(1&e&&(i.text=n[8].title||">UNKNOWN TITLE<"),t.$set(i),9&e){var u;for(o=n[8].contents,u=0;u<o.length;u+=1){var l=an(n,o,u);c[u]?(c[u].p(l,e),T(c[u],1)):(c[u]=hn(l),c[u].c(),T(c[u],1),c[u].m(r.parentNode,r))}for(N(),u=o.length;u<c.length;u+=1)a(u);D()}},i:function(n){if(!i){T(t.$$.fragment,n);for(var e=0;e<o.length;e+=1)T(c[e]);i=!0}},o:function(n){V(t.$$.fragment,n),c=c.filter(Boolean);for(var e=0;e<c.length;e+=1)V(c[e]);i=!1},d:function(n){B(t,n),n&&p(e),x(c,n),n&&p(r)}}}function sn(n){for(var t,e,r=[n[11]],i={},o=0;o<r.length;o+=1)i=F(i,r[o]);return t=new Q({props:i}),{c:function(){b(t.$$.fragment)},l:function(n){w(t.$$.fragment,n)},m:function(n,r){A(t,n,r),e=!0},p:function(n,e){var i=1&e?P(r,[I(n[11])]):{};t.$set(i)},i:function(n){e||(T(t.$$.fragment,n),e=!0)},o:function(n){V(t.$$.fragment,n),e=!1},d:function(n){B(t,n)}}}function hn(n){var t,e,r=!n[3]||n[11].categories.includes(n[3]),i=r&&sn(n);return{c:function(){i&&i.c(),t=R()},l:function(n){i&&i.l(n),t=R()},m:function(n,r){i&&i.m(n,r),m(n,t,r),e=!0},p:function(n,e){9&e&&(r=!n[3]||n[11].categories.includes(n[3])),r?i?(i.p(n,e),9&e&&T(i,1)):((i=sn(n)).c(),T(i,1),i.m(t.parentNode,t)):i&&(N(),V(i,1,1,(function(){i=null})),D())},i:function(n){e||(T(i),e=!0)},o:function(n){V(i),e=!1},d:function(n){i&&i.d(n),n&&p(t)}}}function vn(n){var t,e,r=!n[3]||n[8].contents.map(mn).flat().includes(n[3]),i=r&&fn(n);return{c:function(){i&&i.c(),t=R()},l:function(n){i&&i.l(n),t=R()},m:function(n,r){i&&i.m(n,r),m(n,t,r),e=!0},p:function(n,e){9&e&&(r=!n[3]||n[8].contents.map(mn).flat().includes(n[3])),r?i?(i.p(n,e),9&e&&T(i,1)):((i=fn(n)).c(),T(i,1),i.m(t.parentNode,t)):i&&(N(),V(i,1,1,(function(){i=null})),D())},i:function(n){e||(T(i),e=!0)},o:function(n){V(i),e=!1},d:function(n){i&&i.d(n),n&&p(t)}}}function pn(n){var t,e,r,i,o=n[5]+"";function c(){return n[4](n[5])}return{c:function(){t=l("button"),e=f(o),this.h()},l:function(n){t=s(n,"BUTTON",{class:!0});var r=h(t);e=v(r,o),r.forEach(p),this.h()},h:function(){d(t,"class","svelte-2da8tk"),L(t,"isActiveCategory",n[3]==n[5]||!n[3])},m:function(n,o){m(n,t,o),g(t,e),r||(i=W(t,"click",c),r=!0)},p:function(r,i){n=r,4&i&&o!==(o=n[5]+"")&&$(e,o),12&i&&L(t,"isActiveCategory",n[3]==n[5]||!n[3])},d:function(n){n&&p(t),r=!1,i()}}}function dn(n){for(var t,e,r,i,o,c,u,a,$,E=n[1]&&ln(n),R=n[0],b=[],w=0;w<R.length;w+=1)b[w]=vn(un(n,R,w));for(var A=function(n){return V(b[n],1,1,(function(){b[n]=null}))},P=n[2],I=[],B=0;B<P.length;B+=1)I[B]=pn(cn(n,P,B));return{c:function(){t=l("div"),E&&E.c(),e=y();for(var n=0;n<b.length;n+=1)b[n].c();r=y(),i=l("div"),o=l("span"),c=f("Filter Categories"),u=y(),a=l("div");for(var s=0;s<I.length;s+=1)I[s].c();this.h()},l:function(n){t=s(n,"DIV",{class:!0});var l=h(t);E&&E.l(l),e=C(l);for(var f=0;f<b.length;f+=1)b[f].l(l);l.forEach(p),r=C(n),i=s(n,"DIV",{class:!0});var d=h(i);o=s(d,"SPAN",{});var m=h(o);c=v(m,"Filter Categories"),m.forEach(p),u=C(d),a=s(d,"DIV",{class:!0});for(var g=h(a),$=0;$<I.length;$+=1)I[$].l(g);g.forEach(p),d.forEach(p),this.h()},h:function(){d(t,"class","line svelte-2da8tk"),d(a,"class","svelte-2da8tk"),d(i,"class","noprint categorySelect svelte-2da8tk")},m:function(n,l){m(n,t,l),E&&E.m(t,null),g(t,e);for(var f=0;f<b.length;f+=1)b[f].m(t,null);m(n,r,l),m(n,i,l),g(i,o),g(o,c),g(i,u),g(i,a);for(var s=0;s<I.length;s+=1)I[s].m(a,null);$=!0},p:function(n,r){var i=S(r,1)[0];if(n[1]?E?E.p(n,i):((E=ln(n)).c(),E.m(t,e)):E&&(E.d(1),E=null),9&i){var o;for(R=n[0],o=0;o<R.length;o+=1){var c=un(n,R,o);b[o]?(b[o].p(c,i),T(b[o],1)):(b[o]=vn(c),b[o].c(),T(b[o],1),b[o].m(t,null))}for(N(),o=R.length;o<b.length;o+=1)A(o);D()}if(12&i){var u;for(P=n[2],u=0;u<P.length;u+=1){var l=cn(n,P,u);I[u]?I[u].p(l,i):(I[u]=pn(l),I[u].c(),I[u].m(a,null))}for(;u<I.length;u+=1)I[u].d(1);I.length=P.length}},i:function(n){if(!$){for(var t=0;t<R.length;t+=1)T(b[t]);$=!0}},o:function(n){b=b.filter(Boolean);for(var t=0;t<b.length;t+=1)V(b[t]);$=!1},d:function(n){n&&p(t),E&&E.d(),x(b,n),n&&p(r),n&&p(i),x(I,n)}}}var mn=function(n){return n.categories};function gn(n,t,e){var r=t.data,i=void 0===r?[]:r,o=t.preContent,c=[],u=null;return n.$$set=function(n){"data"in n&&e(0,i=n.data),"preContent"in n&&e(1,o=n.preContent)},n.$$.update=function(){1&n.$$.dirty&&e(2,c=k(new Set(i.map((function(n){return n.contents.map((function(n){return n.categories||null}))})).flat().flat())).filter((function(n){return n})))},[i,o,c,u,function(n){return e(3,u=u==n?null:n)}]}var $n=function(t){n(u,a);var e=on(u);function u(n){var t;return r(this,u),t=e.call(this),i(c(t),n,gn,dn,o,{data:0,preContent:1}),t}return u}();function yn(n,t){return{title:n,contents:t}}function Cn(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{title:n,subtitle:t,categories:e,description:r}}var Sn=[yn("2022",[Cn("Software Engineer @ Audinate","Research & Development Engineer",["Audio/Visual","Computing"]),Cn("Graduated UNSW","BE (Hons) CompEng",["Computing"]),Cn("Thesis Publication",null,["Computing","Security"],"“Smart” Vacuum Cleaners - An Audit Into The Security and Integrity of IoT Systems")]),yn("2021",[Cn("Security Engineer @ Atlassian",null,["Security","Computing"]),Cn("First in CSE x SecSoc CTF Competition",null,["Security","Computing"]),Cn("CommBank Cyber Prize",null,["Security"],"Received an award in recognition of excellence in COMP6843 (Extended Web Application Security)"),Cn("Broadcast Engineer @ UNSW Sydney",null,["Audio/Visual"],"Livestreaming of university events and lectures")]),yn("2020",[Cn("First in COMP6[84]43 Course",null,["Security","Computing"],"Web Application Security and Testing"),Cn("First in CSE x SecSoc CTF Competition",null,["Security","Computing"]),Cn("Two Hands Lifted","2020 - present",["Audio/Visual"],"Wedding Videography and Livestreaming")]),yn("2019",[Cn("Volunteer @ Sculpture by the Sea","2015, 2019",[]),Cn("Computer Science Tutor @ UNSW Sydney","2019 - present",["Computing","Security"],"Teaching of higher level Computer Science courses and extended UG/PG Cyber Security streams"),Cn("Workshop Content Writer @ CSE CompClub 2019 Summer",null,["Security","Computing"],"Created workshop content about information security and security engineering."),Cn("Ryndeum","2019 - present",["Computing"],"Software Solutions")]),yn("2018",[Cn("Mentor @ CSE CompClub 2018 Winter",null,["Security","Computing"]),Cn("Event Technician @ UNSW Hospitality","2018 - 2020",["Audio/Visual","Computing"]),Cn("Started Electrical Engineering / Computer Science at UNSW Sydney",null,["Computing"])]),yn("2017",[Cn("Graduated from Sydney Technical High School","2012 - 2017",["Computing","Audio/Visual"],["School Prefect","First in Information Processes & Technology","First in Software Design & Development","First in Electronics","Deputy Principals’ Prize for Senior Contribution to School Life","Sound and Lighting Crew Director"]),Cn("AV Technician @ RICE Movement","2017 - 2022",["Audio/Visual"])])];function En(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function xn(n){var t;return{c:function(){t=f("Download as PDF")},l:function(n){t=v(n,"Download as PDF")},m:function(n,e){m(n,t,e)},d:function(n){n&&p(t)}}}function Rn(n){var t;return{c:function(){t=f("View complete resume")},l:function(n){t=v(n,"View complete resume")},m:function(n,e){m(n,t,e)},d:function(n){n&&p(t)}}}function Tn(n){var t,e,r,i,o,c,u,a,f,v,$,E,x,R,P;return e=new j({}),i=new $n({props:{data:Sn,preContent:H}}),u=new G({props:{href:"resume/pdf",openInNewTab:!0,$$slots:{default:[xn]},$$scope:{ctx:n}}}),f=new G({props:{href:"resume/full",$$slots:{default:[Rn]},$$scope:{ctx:n}}}),E=new O({props:{rightAlign:!0}}),{c:function(){t=l("div"),b(e.$$.fragment),r=y(),b(i.$$.fragment),o=y(),c=l("p"),b(u.$$.fragment),a=y(),b(f.$$.fragment),v=y(),$=l("div"),b(E.$$.fragment),x=y(),R=l("div"),this.h()},l:function(n){t=s(n,"DIV",{id:!0,class:!0});var l=h(t);w(e.$$.fragment,l),r=C(l),w(i.$$.fragment,l),o=C(l),c=s(l,"P",{class:!0,style:!0});var d=h(c);w(u.$$.fragment,d),a=C(d),w(f.$$.fragment,d),d.forEach(p),l.forEach(p),v=C(n),$=s(n,"DIV",{class:!0});var m=h($);w(E.$$.fragment,m),m.forEach(p),x=C(n),R=s(n,"DIV",{class:!0}),h(R).forEach(p),this.h()},h:function(){d(c,"class","noprint"),U(c,"text-align","center"),d(t,"id","container"),d(t,"class","svelte-1tcl2l3"),d($,"class","nameBlockContainer svelte-1tcl2l3"),d(R,"class","randomPrintLine svelte-1tcl2l3")},m:function(n,l){m(n,t,l),A(e,t,null),g(t,r),A(i,t,null),g(t,o),g(t,c),A(u,c,null),g(c,a),A(f,c,null),m(n,v,l),m(n,$,l),A(E,$,null),m(n,x,l),m(n,R,l),P=!0},p:function(n,t){var e=S(t,1)[0],r={};1&e&&(r.$$scope={dirty:e,ctx:n}),u.$set(r);var i={};1&e&&(i.$$scope={dirty:e,ctx:n}),f.$set(i)},i:function(n){P||(T(e.$$.fragment,n),T(i.$$.fragment,n),T(u.$$.fragment,n),T(f.$$.fragment,n),T(E.$$.fragment,n),P=!0)},o:function(n){V(e.$$.fragment,n),V(i.$$.fragment,n),V(u.$$.fragment,n),V(f.$$.fragment,n),V(E.$$.fragment,n),P=!1},d:function(n){n&&p(t),B(e),B(i),B(u),B(f),n&&p(v),n&&p($),B(E),n&&p(x),n&&p(R)}}}var bn=function(t){n(u,a);var e=En(u);function u(n){var t;return r(this,u),t=e.call(this),i(c(t),n,null,Tn,o,{}),t}return u}();export default bn;
