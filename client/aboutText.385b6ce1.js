import{S as t,i as e,s as n,e as a,a as r,b as l,d as i,f as s,g as c,B as o,P as f,h,L as m,l as p,o as u,r as d,t as $,j as y,v as g,k as v,m as b,n as x,p as w,H as z,I as C,D as V,q as M,w as k,z as E}from"./client.0c7866b1.js";function O(t){let e;return{c(){e=a("div"),this.h()},l(t){e=r(t,"DIV",{class:!0}),l(e).forEach(i),this.h()},h(){s(e,"class","profilePicture svelte-520otx")},m(t,n){c(t,e,n)},p:o,i:o,o:o,d(t){t&&i(e)}}}class N extends t{constructor(t){super(),e(this,t,null,O,n,{})}}function H(t){let e,n,a,o;function m(t,e){return"string"==typeof t[8][4]?A:S}let p=m(t),u=p(t);return{c(){e=f("svg"),n=f("g"),a=f("g"),u.c(),this.h()},l(t){e=r(t,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0},1);var s=l(e);n=r(s,"g",{transform:!0},1);var c=l(n);a=r(c,"g",{transform:!0},1);var o=l(a);u.l(o),o.forEach(i),c.forEach(i),s.forEach(i),this.h()},h(){s(a,"transform",t[10]),s(n,"transform","translate(256 256)"),s(e,"id",t[1]),s(e,"class",t[0]),s(e,"style",t[9]),s(e,"viewBox",o=`0 0 ${t[8][0]} ${t[8][1]}`),s(e,"aria-hidden","true"),s(e,"role","img"),s(e,"xmlns","http://www.w3.org/2000/svg")},m(t,r){c(t,e,r),h(e,n),h(n,a),u.m(a,null)},p(t,n){p===(p=m(t))&&u?u.p(t,n):(u.d(1),u=p(t),u&&(u.c(),u.m(a,null))),1024&n&&s(a,"transform",t[10]),2&n&&s(e,"id",t[1]),1&n&&s(e,"class",t[0]),512&n&&s(e,"style",t[9]),256&n&&o!==(o=`0 0 ${t[8][0]} ${t[8][1]}`)&&s(e,"viewBox",o)},d(t){t&&i(e),u.d()}}}function S(t){let e,n,a,o,h,m,p,u;return{c(){e=f("path"),h=f("path"),this.h()},l(t){e=r(t,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0},1),l(e).forEach(i),h=r(t,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0},1),l(h).forEach(i),this.h()},h(){s(e,"d",n=t[8][4][0]),s(e,"fill",a=t[4]||t[2]||"currentColor"),s(e,"fill-opacity",o=0!=t[7]?t[5]:t[6]),s(e,"transform","translate(-256 -256)"),s(h,"d",m=t[8][4][1]),s(h,"fill",p=t[3]||t[2]||"currentColor"),s(h,"fill-opacity",u=0!=t[7]?t[6]:t[5]),s(h,"transform","translate(-256 -256)")},m(t,n){c(t,e,n),c(t,h,n)},p(t,r){256&r&&n!==(n=t[8][4][0])&&s(e,"d",n),20&r&&a!==(a=t[4]||t[2]||"currentColor")&&s(e,"fill",a),224&r&&o!==(o=0!=t[7]?t[5]:t[6])&&s(e,"fill-opacity",o),256&r&&m!==(m=t[8][4][1])&&s(h,"d",m),12&r&&p!==(p=t[3]||t[2]||"currentColor")&&s(h,"fill",p),224&r&&u!==(u=0!=t[7]?t[6]:t[5])&&s(h,"fill-opacity",u)},d(t){t&&i(e),t&&i(h)}}}function A(t){let e,n,a;return{c(){e=f("path"),this.h()},l(t){e=r(t,"path",{d:!0,fill:!0,transform:!0},1),l(e).forEach(i),this.h()},h(){s(e,"d",n=t[8][4]),s(e,"fill",a=t[2]||t[3]||"currentColor"),s(e,"transform","translate(-256 -256)")},m(t,n){c(t,e,n)},p(t,r){256&r&&n!==(n=t[8][4])&&s(e,"d",n),12&r&&a!==(a=t[2]||t[3]||"currentColor")&&s(e,"fill",a)},d(t){t&&i(e)}}}function B(t){let e,n=t[8][4]&&H(t);return{c(){n&&n.c(),e=m()},l(t){n&&n.l(t),e=m()},m(t,a){n&&n.m(t,a),c(t,e,a)},p(t,[a]){t[8][4]?n?n.p(t,a):(n=H(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:o,o:o,d(t){n&&n.d(t),t&&i(e)}}}function I(t,e,n){let a,r,l,{class:i=""}=e,{id:s=""}=e,{style:c=""}=e,{icon:o}=e,{fw:f=!1}=e,{flip:h=!1}=e,{pull:m=!1}=e,{rotate:p=!1}=e,{size:u=!1}=e,{color:d=""}=e,{primaryColor:$=""}=e,{secondaryColor:y=""}=e,{primaryOpacity:g=1}=e,{secondaryOpacity:v=.4}=e,{swapOpacity:b=!1}=e;return t.$$set=t=>{"class"in t&&n(0,i=t.class),"id"in t&&n(1,s=t.id),"style"in t&&n(11,c=t.style),"icon"in t&&n(12,o=t.icon),"fw"in t&&n(13,f=t.fw),"flip"in t&&n(14,h=t.flip),"pull"in t&&n(15,m=t.pull),"rotate"in t&&n(16,p=t.rotate),"size"in t&&n(17,u=t.size),"color"in t&&n(2,d=t.color),"primaryColor"in t&&n(3,$=t.primaryColor),"secondaryColor"in t&&n(4,y=t.secondaryColor),"primaryOpacity"in t&&n(5,g=t.primaryOpacity),"secondaryOpacity"in t&&n(6,v=t.secondaryOpacity),"swapOpacity"in t&&n(7,b=t.swapOpacity)},t.$$.update=()=>{if(4096&t.$$.dirty&&n(8,a=o&&o.icon||[0,0,"",[],""]),174080&t.$$.dirty){let t,e;const a="1em";let l,i,s,o="-.125em";const h="visible";f&&(s="center",e="1.25em"),m&&(t=m),u&&("lg"==u?(i="1.33333em",l=".75em",o="-.225em"):i="xs"==u?".75em":"sm"==u?".875em":u.replace("x","em"));const p={float:t,width:e,height:a,"line-height":l,"font-size":i,"text-align":s,"vertical-align":o,overflow:h};let d="";for(const t in p)p[t]&&(d+=`${t}:${p[t]};`);n(9,r=d+c)}if(81920&t.$$.dirty){let t="";if(h){let e=1,n=1;"horizontal"==h?e=-1:"vertical"==h?n=-1:e=n=-1,t+=` scale(${e} ${n})`}p&&(t+=` rotate(${p} 0 0)`),n(10,l=t)}},[i,s,d,$,y,g,v,b,a,r,l,c,o,f,h,m,p,u]}class P extends t{constructor(t){super(),e(this,t,I,B,n,{class:0,id:1,style:11,icon:12,fw:13,flip:14,pull:15,rotate:16,size:17,color:2,primaryColor:3,secondaryColor:4,primaryOpacity:5,secondaryOpacity:6,swapOpacity:7})}}function j(t){let e,n;return e=new P({props:{icon:t[0].icon,size:"lg"}}),{c(){p(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,a){d(e,t,a),n=!0},p(t,n){const a={};1&n&&(a.icon=t[0].icon),e.$set(a)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function q(t){let e,n,o,f,m,p=(t[0].text||"")+"",u=t[0].icon&&j(t);return{c(){e=a("span"),u&&u.c(),n=v(),o=a("span"),f=b(p),this.h()},l(t){e=r(t,"SPAN",{class:!0});var a=l(e);u&&u.l(a),n=x(a),o=r(a,"SPAN",{class:!0});var s=l(o);f=w(s,p),s.forEach(i),a.forEach(i),this.h()},h(){s(o,"class","text svelte-85680b"),s(e,"class","entryContent svelte-85680b")},m(t,a){c(t,e,a),u&&u.m(e,null),h(e,n),h(e,o),h(o,f),m=!0},p(t,[a]){t[0].icon?u?(u.p(t,a),1&a&&$(u,1)):(u=j(t),u.c(),$(u,1),u.m(e,n)):u&&(z(),y(u,1,1,()=>{u=null}),C()),(!m||1&a)&&p!==(p=(t[0].text||"")+"")&&V(f,p)},i(t){m||($(u),m=!0)},o(t){y(u),m=!1},d(t){t&&i(e),u&&u.d()}}}function D(t,e,n){let{data:a={}}=e;return t.$$set=t=>{"data"in t&&n(0,a=t.data)},[a]}class G extends t{constructor(t){super(),e(this,t,D,q,n,{data:0})}}function L(t){let e,n;return e=new G({props:{data:t[0]}}),{c(){p(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,a){d(e,t,a),n=!0},p(t,n){const a={};1&n&&(a.data=t[0]),e.$set(a)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Y(t){let e,n,o,f;return n=new G({props:{data:t[0]}}),{c(){e=a("a"),p(n.$$.fragment),this.h()},l(t){e=r(t,"A",{href:!0});var a=l(e);u(n.$$.fragment,a),a.forEach(i),this.h()},h(){s(e,"href",o=t[0].link)},m(t,a){c(t,e,a),d(n,e,null),f=!0},p(t,a){const r={};1&a&&(r.data=t[0]),n.$set(r),(!f||1&a&&o!==(o=t[0].link))&&s(e,"href",o)},i(t){f||($(n.$$.fragment,t),f=!0)},o(t){y(n.$$.fragment,t),f=!1},d(t){t&&i(e),g(n)}}}function W(t){let e,n,o,f;const h=[Y,L],m=[];function p(t,e){return t[0].link?0:1}return n=p(t),o=m[n]=h[n](t),{c(){e=a("div"),o.c(),this.h()},l(t){e=r(t,"DIV",{class:!0,style:!0});var n=l(e);o.l(n),n.forEach(i),this.h()},h(){s(e,"class","profileEntry svelte-1ctx6x"),M(e,"top",t[1]+"%"),M(e,"left",t[2]+"%")},m(t,a){c(t,e,a),m[n].m(e,null),f=!0},p(t,[a]){let r=n;n=p(t),n===r?m[n].p(t,a):(z(),y(m[r],1,1,()=>{m[r]=null}),C(),o=m[n],o?o.p(t,a):(o=m[n]=h[n](t),o.c()),$(o,1),o.m(e,null)),(!f||2&a)&&M(e,"top",t[1]+"%"),(!f||4&a)&&M(e,"left",t[2]+"%")},i(t){f||($(o),f=!0)},o(t){y(o),f=!1},d(t){t&&i(e),m[n].d()}}}function Z(t,e,n){let a,r,{x:l}=e,{y:i}=e,{theta:s}=e,{span:c}=e,o=l/2,f=i/2,{data:h={}}=e;return k(()=>{h.b64link&&n(0,h.link=atob(h.b64link),h),h.b64text&&n(0,h.text=atob(h.b64text),h),n(0,h={...h})}),t.$$set=t=>{"x"in t&&n(3,l=t.x),"y"in t&&n(4,i=t.y),"theta"in t&&n(5,s=t.theta),"span"in t&&n(6,c=t.span),"data"in t&&n(0,h=t.data)},t.$$.update=()=>{96&t.$$.dirty&&(n(2,r=Number(o/2+10+(c+o)*Math.sin(s))),n(1,a=Number(f/2+10+(c+f)*Math.cos(s))))},[h,a,r,l,i,s,c]}class F extends t{constructor(t){super(),e(this,t,Z,W,n,{x:3,y:4,theta:5,span:6,data:0})}}function*J(t,e=0){const n=Math.PI/(t+1+2*e);for(let a=1;a<=t;a++)yield(a+e)*n}
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var R=[{icon:{prefix:"fas",iconName:"envelope-square",icon:[448,512,[],"f199","M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"]},b64text:"YW5kcmV3Lmoud29uZ0BvdXRsb29rLmNvbQ",b64link:"bWFpbHRvOmFuZHJldy5qLndvbmdAb3V0bG9vay5jb20/Y2M9aGVsbG9AZmVhdGhlcmJlYXIuY2M"},{icon:{prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},text:"andrewjinmengwong",link:"https://www.linkedin.com/in/andrewjinmengwong"},{icon:{prefix:"fab",iconName:"dribbble-square",icon:[448,512,[],"f397","M90.2 228.2c8.9-42.4 37.4-77.7 75.7-95.7 3.6 4.9 28 38.8 50.7 79-64 17-120.3 16.8-126.4 16.7zM314.6 154c-33.6-29.8-79.3-41.1-122.6-30.6 3.8 5.1 28.6 38.9 51 80 48.6-18.3 69.1-45.9 71.6-49.4zM140.1 364c40.5 31.6 93.3 36.7 137.3 18-2-12-10-53.8-29.2-103.6-55.1 18.8-93.8 56.4-108.1 85.6zm98.8-108.2c-3.4-7.8-7.2-15.5-11.1-23.2C159.6 253 93.4 252.2 87.4 252c0 1.4-.1 2.8-.1 4.2 0 35.1 13.3 67.1 35.1 91.4 22.2-37.9 67.1-77.9 116.5-91.8zm34.9 16.3c17.9 49.1 25.1 89.1 26.5 97.4 30.7-20.7 52.5-53.6 58.6-91.6-4.6-1.5-42.3-12.7-85.1-5.8zm-20.3-48.4c4.8 9.8 8.3 17.8 12 26.8 45.5-5.7 90.7 3.4 95.2 4.4-.3-32.3-11.8-61.9-30.9-85.1-2.9 3.9-25.8 33.2-76.3 53.9zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-64 176c0-88.2-71.8-160-160-160S64 167.8 64 256s71.8 160 160 160 160-71.8 160-160z"]},text:"featherbear.cc",link:"https://featherbear.cc"},{icon:{prefix:"fab",iconName:"github-square",icon:[448,512,[],"f092","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"]},text:"github.com/featherbear",link:"https://github.com/featherbear"}].reverse();
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function X(t,e,n){const a=t.slice();return a[1]=e[n],a[3]=n,a}function Q(t){let e,n;return e=new F({props:{x:K,y:T,theta:t[1],span:t[0],data:R[t[3]]}}),{c(){p(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,a){d(e,t,a),n=!0},p:o,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function U(t){let e,n,o,f;n=new N({});let m=[...J(R.length,1)],b=[];for(let e=0;e<m.length;e+=1)b[e]=Q(X(t,m,e));const w=t=>y(b[t],1,1,()=>{b[t]=null});return{c(){e=a("div"),p(n.$$.fragment),o=v();for(let t=0;t<b.length;t+=1)b[t].c();this.h()},l(t){e=r(t,"DIV",{class:!0,style:!0});var a=l(e);u(n.$$.fragment,a),o=x(a);for(let t=0;t<b.length;t+=1)b[t].l(a);a.forEach(i),this.h()},h(){s(e,"class","profileContainer svelte-15o2bza"),M(e,"width",K+"px"),M(e,"height",T+"px")},m(t,a){c(t,e,a),d(n,e,null),h(e,o);for(let t=0;t<b.length;t+=1)b[t].m(e,null);f=!0},p(t,[n]){if(1&n){let a;for(m=[...J(R.length,1)],a=0;a<m.length;a+=1){const r=X(t,m,a);b[a]?(b[a].p(r,n),$(b[a],1)):(b[a]=Q(r),b[a].c(),$(b[a],1),b[a].m(e,null))}for(z(),a=m.length;a<b.length;a+=1)w(a);C()}},i(t){if(!f){$(n.$$.fragment,t);for(let t=0;t<m.length;t+=1)$(b[t]);f=!0}},o(t){y(n.$$.fragment,t),b=b.filter(Boolean);for(let t=0;t<b.length;t+=1)y(b[t]);f=!1},d(t){t&&i(e),g(n),E(b,t)}}}let K=150,T=150;function _(t){return[-5]}class tt extends t{constructor(t){super(),e(this,t,_,U,n,{})}}var et="Code monkey, hardware enthusiast, photographer and wannabe musician.  \nAlso really interested in audio/visual production, flashing lights and all that bass 🔊\n\nCurrently a Computer Engineering student at the University of New South Wales.";export{tt as P,et as a};