import{Q as t,_ as e,a as r,b as o,c as n,i,s as a,d as s,S as c,f as l,r as p,g as u,h,x as f,j as b,l as g,m,R as d,k as v,u as y,t as S,T as k,U as w,o as P,p as C,v as $,D as I,V as T,n as N,O as A,P as W,e as x,q as M,w as E,z as R,A as j,K as U,y as O,N as _,F as D,G as L,I as B,L as F,E as G}from"./client.4d1a06a5.js";function H(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.delay,n=void 0===o?0:o,i=r.duration,a=void 0===i?400:i,s=r.easing,c=void 0===s?t:s,l=+getComputedStyle(e).opacity;return{delay:n,duration:a,easing:c,css:function(t){return"opacity: ".concat(t*l)}}}function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o(this,n)}}function V(t){var e,r;return{c:function(){e=l("p"),r=p(t[2])},l:function(o){e=u(o,"P",{});var n=h(e);r=f(n,t[2]),n.forEach(b)},m:function(t,o){g(t,e,o),m(e,r)},p:function(t,e){4&e&&d(r,t[2])},d:function(t){t&&b(e)}}}function q(t){var e,r,o,n=t[5].default,i=x(n,t,t[4],null);return{c:function(){e=l("div"),i&&i.c(),this.h()},l:function(t){e=u(t,"DIV",{class:!0});var r=h(e);i&&i.l(r),r.forEach(b),this.h()},h:function(){v(e,"class","svelte-11sfw7x")},m:function(t,r){g(t,e,r),i&&i.m(e,null),o=!0},p:function(t,e){i&&i.p&&(!o||16&e)&&y(i,n,t,t[4],e,null,null)},i:function(t){o||(S(i,t),t&&k((function(){r||(r=w(e,H,{},!0)),r.run(1)})),o=!0)},o:function(t){P(i,t),t&&(r||(r=w(e,H,{},!1)),r.run(0)),o=!1},d:function(t){t&&b(e),i&&i.d(t),t&&r&&r.end()}}}function z(t){var e,r,o,n,i,a,s,c,y=t[2]&&V(t),k=t[0]&&q(t);return{c:function(){e=l("section"),r=l("h2"),o=p(t[1]),n=C(),y&&y.c(),i=C(),k&&k.c(),this.h()},l:function(a){e=u(a,"SECTION",{class:!0});var s=h(e);r=u(s,"H2",{class:!0});var c=h(r);o=f(c,t[1]),c.forEach(b),n=$(s),y&&y.l(s),i=$(s),k&&k.l(s),s.forEach(b),this.h()},h:function(){v(r,"class","svelte-11sfw7x"),I(r,"collapsible",t[3]),v(e,"class","svelte-11sfw7x")},m:function(l,p){g(l,e,p),m(e,r),m(r,o),m(e,n),y&&y.m(e,null),m(e,i),k&&k.m(e,null),a=!0,s||(c=T(r,"click",t[6]),s=!0)},p:function(t,n){var s=N(n,1)[0];(!a||2&s)&&d(o,t[1]),8&s&&I(r,"collapsible",t[3]),t[2]?y?y.p(t,s):((y=V(t)).c(),y.m(e,i)):y&&(y.d(1),y=null),t[0]?k?(k.p(t,s),1&s&&S(k,1)):((k=q(t)).c(),S(k,1),k.m(e,null)):k&&(A(),P(k,1,1,(function(){k=null})),W())},i:function(t){a||(S(k),a=!0)},o:function(t){P(k),a=!1},d:function(t){t&&b(e),y&&y.d(),k&&k.d(),s=!1,c()}}}function Y(t,e,r){var o=e.$$slots,n=void 0===o?{}:o,i=e.$$scope,a=e.title,s=void 0===a?"":a,c=e.description,l=e.collapsible,p=void 0===l||l,u=e.opened,h=void 0===u||u;return t.$$set=function(t){"title"in t&&r(1,s=t.title),"description"in t&&r(2,c=t.description),"collapsible"in t&&r(3,p=t.collapsible),"opened"in t&&r(0,h=t.opened),"$$scope"in t&&r(4,i=t.$$scope)},[h,s,c,p,i,n,function(){p&&r(0,h=!h)}]}var Q=function(t){e(o,c);var r=J(o);function o(t){var e;return n(this,o),e=r.call(this),i(s(e),t,Y,z,a,{title:1,description:2,collapsible:3,opened:0}),e}return o}();function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o(this,n)}}function K(t){var e,r,o,n=t[2].default,i=x(n,t,t[1],null);return{c:function(){e=l("a"),r=l("div"),i&&i.c(),this.h()},l:function(t){e=u(t,"A",{href:!0,rel:!0,class:!0});var o=h(e);r=u(o,"DIV",{class:!0});var n=h(r);i&&i.l(n),n.forEach(b),o.forEach(b),this.h()},h:function(){v(r,"class","svelte-312hfm"),v(e,"href",t[0]),v(e,"rel","prefetch"),v(e,"class","svelte-312hfm")},m:function(t,n){g(t,e,n),m(e,r),i&&i.m(r,null),o=!0},p:function(t,r){var a=N(r,1)[0];i&&i.p&&(!o||2&a)&&y(i,n,t,t[1],a,null,null),(!o||1&a)&&v(e,"href",t[0])},i:function(t){o||(S(i,t),o=!0)},o:function(t){P(i,t),o=!1},d:function(t){t&&b(e),i&&i.d(t)}}}function X(t,e,r){var o=e.$$slots,n=void 0===o?{}:o,i=e.$$scope,a=e.href,s=void 0===a?"#":a;return t.$$set=function(t){"href"in t&&r(0,s=t.href),"$$scope"in t&&r(1,i=t.$$scope)},[s,i,n]}var tt=function(t){e(o,c);var r=Z(o);function o(t){var e;return n(this,o),e=r.call(this),i(s(e),t,X,K,a,{href:0}),e}return o}();function et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o(this,n)}}function rt(t){var e,r,o=t[4]&&ot(t);return{c:function(){e=l("div"),o&&o.c(),this.h()},l:function(t){e=u(t,"DIV",{class:!0,style:!0});var r=h(e);o&&o.l(r),r.forEach(b),this.h()},h:function(){v(e,"class","preview svelte-10bbby6"),v(e,"style",r=t[3]?"background-image: url(".concat(t[3],");"):"")},m:function(t,r){g(t,e,r),o&&o.m(e,null)},p:function(t,n){t[4]?o?o.p(t,n):((o=ot(t)).c(),o.m(e,null)):o&&(o.d(1),o=null),8&n&&r!==(r=t[3]?"background-image: url(".concat(t[3],");"):"")&&v(e,"style",r)},d:function(t){t&&b(e),o&&o.d()}}}function ot(t){var e,r;return{c:function(){e=l("iframe"),this.h()},l:function(t){e=u(t,"IFRAME",{src:!0,scrolling:!0,title:!0,sandbox:!0,class:!0}),h(e).forEach(b),this.h()},h:function(){e.src!==(r=t[4])&&v(e,"src",r),v(e,"scrolling","no"),v(e,"title","preview"),v(e,"sandbox","allow-scripts allow-same-origin"),v(e,"class","svelte-10bbby6")},m:function(t,r){g(t,e,r)},p:function(t,o){16&o&&e.src!==(r=t[4])&&v(e,"src",r)},d:function(t){t&&b(e)}}}function nt(t){var e,r,o,n=t[0].join(", ")+"";return{c:function(){e=l("span"),r=p("Technology stack: "),o=p(n),this.h()},l:function(t){e=u(t,"SPAN",{class:!0});var i=h(e);r=f(i,"Technology stack: "),o=f(i,n),i.forEach(b),this.h()},h:function(){v(e,"class","svelte-10bbby6")},m:function(t,n){g(t,e,n),m(e,r),m(e,o)},p:function(t,e){1&e&&n!==(n=t[0].join(", ")+"")&&d(o,n)},d:function(t){t&&b(e)}}}function it(t){var e,r;return{c:function(){e=l("p"),r=p(t[2]),this.h()},l:function(o){e=u(o,"P",{class:!0});var n=h(e);r=f(n,t[2]),n.forEach(b),this.h()},h:function(){v(e,"class","svelte-10bbby6")},m:function(t,o){g(t,e,o),m(e,r)},p:function(t,e){4&e&&d(r,t[2])},d:function(t){t&&b(e)}}}function at(t){var e,r,o,n,i=t[5]&&st(t),a=t[6]&&lt(t),s=t[7]&&ut(t);return{c:function(){e=l("div"),i&&i.c(),r=C(),a&&a.c(),o=C(),s&&s.c(),this.h()},l:function(t){e=u(t,"DIV",{class:!0});var n=h(e);i&&i.l(n),r=$(n),a&&a.l(n),o=$(n),s&&s.l(n),n.forEach(b),this.h()},h:function(){v(e,"class","buttons svelte-10bbby6")},m:function(t,c){g(t,e,c),i&&i.m(e,null),m(e,r),a&&a.m(e,null),m(e,o),s&&s.m(e,null),n=!0},p:function(t,n){t[5]?i?(i.p(t,n),32&n&&S(i,1)):((i=st(t)).c(),S(i,1),i.m(e,r)):i&&(A(),P(i,1,1,(function(){i=null})),W()),t[6]?a?(a.p(t,n),64&n&&S(a,1)):((a=lt(t)).c(),S(a,1),a.m(e,o)):a&&(A(),P(a,1,1,(function(){a=null})),W()),t[7]?s?(s.p(t,n),128&n&&S(s,1)):((s=ut(t)).c(),S(s,1),s.m(e,null)):s&&(A(),P(s,1,1,(function(){s=null})),W())},i:function(t){n||(S(i),S(a),S(s),n=!0)},o:function(t){P(i),P(a),P(s),n=!1},d:function(t){t&&b(e),i&&i.d(),a&&a.d(),s&&s.d()}}}function st(t){var e,r;return e=new tt({props:{href:t[5],$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c:function(){M(e.$$.fragment)},l:function(t){E(e.$$.fragment,t)},m:function(t,o){R(e,t,o),r=!0},p:function(t,r){var o={};32&r&&(o.href=t[5]),256&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i:function(t){r||(S(e.$$.fragment,t),r=!0)},o:function(t){P(e.$$.fragment,t),r=!1},d:function(t){j(e,t)}}}function ct(t){var e;return{c:function(){e=p("GitHub")},l:function(t){e=f(t,"GitHub")},m:function(t,r){g(t,e,r)},d:function(t){t&&b(e)}}}function lt(t){var e,r;return e=new tt({props:{href:t[6],$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c:function(){M(e.$$.fragment)},l:function(t){E(e.$$.fragment,t)},m:function(t,o){R(e,t,o),r=!0},p:function(t,r){var o={};64&r&&(o.href=t[6]),256&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i:function(t){r||(S(e.$$.fragment,t),r=!0)},o:function(t){P(e.$$.fragment,t),r=!1},d:function(t){j(e,t)}}}function pt(t){var e;return{c:function(){e=p("Site")},l:function(t){e=f(t,"Site")},m:function(t,r){g(t,e,r)},d:function(t){t&&b(e)}}}function ut(t){var e,r;return e=new tt({props:{href:t[7],$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c:function(){M(e.$$.fragment)},l:function(t){E(e.$$.fragment,t)},m:function(t,o){R(e,t,o),r=!0},p:function(t,r){var o={};128&r&&(o.href=t[7]),256&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i:function(t){r||(S(e.$$.fragment,t),r=!0)},o:function(t){P(e.$$.fragment,t),r=!1},d:function(t){j(e,t)}}}function ht(t){var e;return{c:function(){e=p("Blog")},l:function(t){e=f(t,"Blog")},m:function(t,r){g(t,e,r)},d:function(t){t&&b(e)}}}function ft(t){var e,r,o,n,i,a,s,c,y,k=(t[4]||t[3])&&rt(t),w=t[0]&&nt(t),I=t[2]&&it(t),T=(t[5]||t[6]||t[7])&&at(t);return{c:function(){e=l("article"),k&&k.c(),r=C(),o=l("div"),n=l("h4"),i=p(t[1]),a=C(),w&&w.c(),s=C(),I&&I.c(),c=C(),T&&T.c(),this.h()},l:function(l){e=u(l,"ARTICLE",{class:!0});var p=h(e);k&&k.l(p),r=$(p),o=u(p,"DIV",{class:!0});var g=h(o);n=u(g,"H4",{class:!0});var m=h(n);i=f(m,t[1]),m.forEach(b),a=$(g),w&&w.l(g),s=$(g),I&&I.l(g),g.forEach(b),c=$(p),T&&T.l(p),p.forEach(b),this.h()},h:function(){v(n,"class","svelte-10bbby6"),v(o,"class","content svelte-10bbby6"),v(e,"class","svelte-10bbby6")},m:function(t,l){g(t,e,l),k&&k.m(e,null),m(e,r),m(e,o),m(o,n),m(n,i),m(o,a),w&&w.m(o,null),m(o,s),I&&I.m(o,null),m(e,c),T&&T.m(e,null),y=!0},p:function(t,n){var a=N(n,1)[0];t[4]||t[3]?k?k.p(t,a):((k=rt(t)).c(),k.m(e,r)):k&&(k.d(1),k=null),(!y||2&a)&&d(i,t[1]),t[0]?w?w.p(t,a):((w=nt(t)).c(),w.m(o,s)):w&&(w.d(1),w=null),t[2]?I?I.p(t,a):((I=it(t)).c(),I.m(o,null)):I&&(I.d(1),I=null),t[5]||t[6]||t[7]?T?(T.p(t,a),224&a&&S(T,1)):((T=at(t)).c(),S(T,1),T.m(e,null)):T&&(A(),P(T,1,1,(function(){T=null})),W())},i:function(t){y||(S(T),y=!0)},o:function(t){P(T),y=!1},d:function(t){t&&b(e),k&&k.d(),w&&w.d(),I&&I.d(),T&&T.d()}}}function bt(t,e,r){var o=e.title,n=e.description,i=e.image,a=e.preview,s=e.repo,c=e.site,l=e.blog,p=e.stack;return"string"==typeof p&&(p=[p]),t.$$set=function(t){"title"in t&&r(1,o=t.title),"description"in t&&r(2,n=t.description),"image"in t&&r(3,i=t.image),"preview"in t&&r(4,a=t.preview),"repo"in t&&r(5,s=t.repo),"site"in t&&r(6,c=t.site),"blog"in t&&r(7,l=t.blog),"stack"in t&&r(0,p=t.stack)},[p,o,n,i,a,s,c,l]}var gt=function(t){e(o,c);var r=et(o);function o(t){var e;return n(this,o),e=r.call(this),i(s(e),t,bt,ft,a,{title:1,description:2,image:3,preview:4,repo:5,site:6,blog:7,stack:0}),e}return o}(),mt=[{title:"Libraries / APIs",items:[{title:"facebook-messenger-puppeteer",stack:["Node.js","Puppeteer"],description:"A Node.js Puppeteer API for user-mode interaction on Facebook Messenger Chat",repo:"https://github.com/featherbear/facebook-messenger-puppeteer",blog:"https://blog.featherbear.cc/post/facebook-messenger-puppeteer/"},{title:"react-native-mifare-classic-wrapper",repo:"https://github.com/featherbear/react-native-mifare-classic-wrapper/",description:"A wrapper over the react-native-nfc-manager package to provide streamlined Mifare Classic functionality"},{title:"PreSonus StudioLive API",stack:["Node.js","Python"],repo:"https://github.com/featherbear/PreSonus-StudioLive-API",blog:"https://blog.featherbear.cc/post/presonus-studiolive-api-iii-jan22/",description:"Reverse engineered PreSonus network control protocol for the StudioLive Series III product family",image:"https://blog.featherbear.cc/post/presonus-studiolive-api/20190513_174229.jpg"},{title:"EOS PTP",stack:["Node.js"],repo:"https://github.com/featherbear/eos-ptp",description:"Reverse engineered Wi-Fi protocol to control multiple Canon EOS R cameras"},{title:"Niimbot D101 Proto",repo:"https://github.com/featherbear/niimbot-d101-proto",description:"Reverse engineered BLE protocol to control the Niimbot D101 label printer, because the company said it wasn't possible."},{title:"fastify-slate",stack:["Node.js"],repo:"https://github.com/featherbear/fastify-slate",description:"Slate API document generator for Fastify framework routes"},{title:"node-ltc",repo:"https://github.com/featherbear/node-ltc",description:"Node.js Foreign Function Interface for the libltc package",stack:["Node.js","ffi"]},{title:"flutter-ndi",repo:"https://github.com/featherbear/flutter-ndi",blog:"https://blog.featherbear.cc/post/andi-ndi-tools-for-android/",description:"Flutter Foreign Function Interface bindings for the NewTek NDI SDK",stack:["Dart","ffi"]}]},{title:"Security",items:[{title:"Project RATtata",repo:"https://github.com/featherbear/UNSW-COMP6441-RATtata",site:"https://featherbear.cc/UNSW-COMP6441-RATtata/",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/job-application/something_awesome/",preview:"https://featherbear.cc/UNSW-COMP6441-RATtata/",stack:["Node.js","Vue","Electron"],description:"A remote administration tool project for the UNSW COMP6441 course."},{title:"Project Securitears",stack:["Python"],repo:"https://github.com/featherbear/UNSW-COMP6447-ass",site:"https://featherbear.github.io/UNSW-COMP6447-ass",preview:"https://featherbear.cc/UNSW-COMP6447-ass/",description:"A blackbox binary application input fuzzer for the UNSW COMP6447 course."},{title:"CSE x SecSoc CTF 2020",blog:"https://blog.featherbear.cc/post/csesoc-secsoc-ctf-2020/",image:"https://blog.featherbear.cc/post/csesoc-secsoc-ctf-2020/team.png",description:"Not actually a project, but an honourable mention. I came first in this CTF!"},{title:"CSE x SecSoc CTF 2021",blog:"https://blog.featherbear.cc/post/csesoc-secsoc-ctf-2021/",image:"https://blog.featherbear.cc/uploads/screely-1627038994988.png",description:"Did another CTF and (unofficially) came first!"},{title:"UNSW COMP6443",site:"https://featherbear.cc/UNSW-COMP6443/",description:"Another honourable mention - I placed first in my university's Web Application Security and Testing course! I was additionally a recipient of the CommBank Cyber Prize",image:"https://blog.featherbear.cc/uploads/1625470416790.jpg"},{title:"UNSW CompClub 2019 CTF Server",stack:["Python","SQLite","JavaScript"],image:"https://blog.featherbear.cc/post/unsw-compclub2019summer-ctf/title_small.gif",blog:"https://blog.featherbear.cc/post/unsw-compclub2019summer-ctf/",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-CTF",site:"https://featherbear.cc/UNSW-CompClub2019Summer-CTF/",description:"A custom Capture The Flag server written for UNSW CompClub.\nAdopted by CSESoc, and has also been used externally"},{title:"Project CTF² (WIP)",stack:["Node.js","Svelte","SQLite","MongoDB","NeutralinoJS"],image:"https://github.com/featherbear/CTF2-server-slate/raw/master/images/logo.png",repo:"https://github.com/featherbear/CTF2",description:"A remake of my original Capture The Flag server"},{title:"Thesis - “Smart” Vacuum Cleaners",site:"https://featherbear.cc/UNSW-CSE-Thesis/",image:"https://featherbear.cc/UNSW-CSE-Thesis/uploads/covers/0T4A9791.JPG",description:"A security and privacy audit of the Roborock S6 robot vacuum cleaner"}]},{title:"Teaching Resources",items:[{title:"Learn C",description:"A primer to the C programming language",repo:"https://github.com/featherbear/learn-c/",site:"https://featherbear.cc/learn-c/"},{title:"Learn System Internals",description:"A primer to how CPUs and Operating Systems work",repo:"https://github.com/featherbear/learn-system-internals/",site:"https://featherbear.cc/learn-system-internals/"},{title:"Python Proficiency",description:"Snippets of knowledge about Python",repo:"https://github.com/featherbear/learn-python-proficiency/",site:"https://featherbear.cc/learn-python-proficiency/"},{title:"Learn CSS - Hover Buttons",description:"Demonstration on the effects of the placement of the transition style attribute",image:"https://blog.featherbear.cc/post/hover-buttons/preview.png",blog:"https://blog.featherbear.cc/post/hover-buttons/",repo:"https://github.com/featherbear/hover-buttons",site:"https://featherbear.cc/hover-buttons/"},{title:"Image Steganography",description:"Workshop for secondary school students about LSB Image Steganography.\nUNSW CompClub 2019 Summer",blog:"https://blog.featherbear.cc/post/unsw-compclub2019summer/",image:"https://blog.featherbear.cc/post/unsw-compclub2019summer/steganography_preview.png",site:"https://docs.google.com/presentation/d/1kyRsC1-PMJu4UndE6psUHJHuTHX7W6cuYRod1jq3QJY/edit?usp=sharing",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/image_steganography"},{title:"HTTP(S) Security",description:"Presentation for secondary school students about the importance of HTTPS.\nUNSW CompClub 2019 Summer",blog:"https://blog.featherbear.cc/post/unsw-compclub2019summer/",image:"https://blog.featherbear.cc/post/unsw-compclub2019summer/https_preview.png",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/http_mitm",site:"https://docs.google.com/presentation/d/1ykIUm1xAKMforvTPeqvXMdC4DZlnWOg604ekaybhiOs/edit?usp=sharing"},{title:"Establishing P2P Connections over TCP",description:"An explanation of how a Peer to Peer connection is set up with a broker server and NAT Holepunching",repo:"https://github.com/featherbear/Python-P2P-TCP-Example",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/something-awesome-research-connection/"},{title:"Learn Binary Security Assessment",description:"An introduction to software vulnerabilities, exploits and mitigations",repo:"https://github.com/featherbear/tutoring-unsw-21t2-cs6447",site:"https://featherbear.cc/tutoring-unsw-21t2-cs6447/"},{title:"Learn Web Security Assessment",description:"An introduction to web-related vulnerabilities, exploits and mitigations",repo:"https://github.com/featherbear/tutoring-unsw-21t2-cs6443-cs6843",site:"https://featherbear.cc/tutoring-unsw-21t2-cs6443-cs6843/"}]},{title:"Client Work",items:[{title:"UNSW Scientia Signage",stack:["JavaScript"],image:"https://blog.featherbear.cc/post/unsw-scientia-signage/Snipaste_2019-12-09_19-33-07.png",blog:"https://blog.featherbear.cc/post/unsw-scientia-signage/",description:"An SPA to easily manage and control multiple PiSignage devices"},{title:"South-West Evangelical Church",preview:"https://swec.org.au",description:"Website and internal software development",site:"https://www.swec.org.au/"},{title:"RICE Movement",preview:"https://ricemovement.org",description:"Website and internal software development",site:"https://ricemovement.org/"}]},{title:"Sandbox",items:[{title:"Trello e-Paper Display",stack:["Python"],image:"https://blog.featherbear.cc/post/e-paper/20191211_221809.jpg",repo:"https://github.com/featherbear/trello-epd",blog:"https://blog.featherbear.cc/post/e-paper/",description:"A physical todo list on an e-Paper display"},{title:"Commentree",description:"Plain-text file documentation tool",repo:"https://github.com/featherbear/commentree"},{title:"Filmstrip Messages",stack:["Svelte"],image:"https://blog.featherbear.cc/post/filmstrip-messages/preview.png",blog:"https://blog.featherbear.cc/post/filmstrip-messages/",site:"https://featherbear.cc/filmstrip-messages/",repo:"https://github.com/featherbear/filmstrip-messages",description:"Photostrip project to house a collection of photos, videos and text notes"},{title:"DeliveryTrack",stack:["JavaScript"],repo:"https://github.com/featherbear/deliverytrack",site:"https://featherbear.cc/deliverytrack/",image:"https://blog.featherbear.cc/post/delivery-track/preview.png",description:"Postal delivery tracking web application with synchronisation between devices"},{title:"Wardrobe",stack:["Svelte"],repo:"https://github.com/featherbear/wardrobe",site:"https://featherbear.cc/wardrobe/",preview:"https://featherbear.cc/wardrobe/",description:"A clothing-oriented photo organisation web application"},{title:"Twinkle Tiles",stack:["p5.js"],image:"https://blog.featherbear.cc/post/processing-twinkle/preview.apng",site:"https://featherbear.github.io/processing-twinkle/",repo:"https://github.com/featherbear/processing-twinkle",blog:"https://blog.featherbear.cc/post/processing-twinkle/"},{title:"Spit",stack:["TypeScript","Svelte"],site:"https://featherbear.cc/spit/",repo:"https://github.com/featherbear/spit",description:"A data massaging tool to convert between various formats"},{title:"getopt generator",stack:["TypeScript","Svelte"],site:"https://featherbear.cc/getopt-generator/",repo:"https://github.com/featherbear/getopt-generator",description:"getopt function utility helper"},{title:"Wakey",stack:["Node.js","Svelte"],image:"https://blog.featherbear.cc/post/wakey/Snipaste_2020-11-16_22-37-12.png",blog:"https://blog.featherbear.cc/post/wakey/",repo:"https://github.com/featherbear/wakey",description:"A Wake On LAN web interface"},{title:"Go Links",stack:["JavaScript","Python"],blog:"https://blog.featherbear.cc/post/featherbear.cc-go/",repo:"https://github.com/featherbear/go-links",description:"Self-hosted static link shortener service via GitHub Pages",image:"https://blog.featherbear.cc/uploads/screely-1612249310864.png"},{title:"Templables (WIP)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/templables",description:"Reusable form creation and collection framework"},{title:"Monosodium (WIP)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/monosodium",description:"A Facebook Messenger client wrapper with useful features"},{title:"BlueClick BLE",stack:["Arduino"],image:"https://blog.featherbear.cc/post/blueclick/logic-board/20201205_180608.jpg",blog:"https://blog.featherbear.cc/post/blueclick/",repo:"https://github.com/featherbear/BlueClick_BLE",description:"Page turner for OnSong, through sending MIDI notes over Bluetooth Low Energy"},{title:"Moone (WIP)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/moone",description:"Morning noticeboard for my bedroom TV"},{title:"Zifon YT-1000 WiFi ACU",stack:["C++","Arduino","Svelte"],image:"https://blog.featherbear.cc/uploads/20210820_052448.jpg",repo:"https://github.com/featherbear/zifon-yt1000-wifi-acu",blog:"https://blog.featherbear.cc/post/zifon-yt-1000-wifi-acu/",description:"WiFi Auxiliary Control Unit for the Zifon YT-1000 Pan-Tilt Head"}]},{title:"Multimedia",items:[{title:"SL Edit (WIP)",description:"Remote interface for the PreSonus StudioLive III series consoles",repo:"https://github.com/featherbear/SL-Edit",stack:["Svelte","TypeScript"]},{title:"You Up",description:"YouTube video uploader with templating support",repo:"https://github.com/featherbear/YouUp",image:"https://blog.featherbear.cc/uploads/20211228-snipaste_2021-12-28_17-20-45.jpg",blog:"https://blog.featherbear.cc/post/youup-youtube-video-uploader/",stack:["TypeScript","Svelte","Neutralino.js","Google APIs"]},{title:"Sound Mixer Simulator (WIP)",site:"https://featherbear.cc/mixer/",repo:"https://github.com/featherbear/mixer/",stack:["React"],description:"Interactive teaching tool for the PreSonus StudioLive 16 Series III sound console"},{title:"ProPresenter Stage Display Messages",stack:["JavaScript"],site:"http://pp6sdm.apps.navhaxs.au.eu.org/",image:"https://blog.featherbear.cc/post/propresenter6-stage-display-messages-client/screenshot.png",blog:"https://blog.featherbear.cc/post/propresenter6-stage-display-messages-client/",repo:"https://github.com/featherbear/propresenter-stagemessages",description:"Remote stage message client for ProPresenter 6/7"},{title:"ProPresenter 6/7 OBS Scene Switcher",stack:["Node.js"],repo:"https://github.com/featherbear/propresenter-obs-scene-switcher",description:"Switch OBS scenes depending on the current ProPresenter content"},{title:"ProPresenter 6 Local Sync Tool",stack:["C#",".NET"],repo:"https://github.com/featherbear/propresenter-local-sync-tool",image:"https://raw.githubusercontent.com/featherbear/propresenter-local-sync-tool/master/logo.ico",description:"A buggy file synchronisation tool that's still less buggy than ProPresenter 6's inbuilt one"},{title:"OnCue Projector",stack:["Python","Qt"],repo:"https://github.com/featherbear/OnCue",description:"Multimedia presentation software for seamless playback of content\nHSC Major Project"},{title:"NDI Streamer",stack:["C++"],blog:"https://blog.featherbear.cc/post/ndi-streamer/",repo:"https://github.com/featherbear/ndi-streamer",description:"Cross-platform display sharing over NDI.\nIntended for Linux, since Windows and Mac have official software"},{title:"Talyte",stack:["C++","Arduino","Svelte"],blog:"https://blog.featherbear.cc/post/talyte/",image:"https://blog.featherbear.cc/uploads/20210510_234112.jpg",repo:"https://github.com/featherbear/talyte/",description:"Tally light library / software for OBS"},{title:"Splitify",stack:["React","TypeScript"],image:"https://splitify.github.io/branding/banner/banner@72.png",site:"https://splitify.github.io",blog:"https://blog.featherbear.cc/post/splitify/",repo:"https://github.com/Splitify/",description:"Spotify playlist manager and creator.\nUNSW SENG4920 group project"},{title:"Bitfocus Companion: PreSonus StudioLive III Module",stack:["TypeScript"],blog:"https://blog.featherbear.cc/post/presonus-studiolive-api-ii/",repo:"https://github.com/featherbear/bitfocus-companion-module-presonus-studiolive-iii",description:"Integration of my PreSonus StudioLive III API for the Bitfocus Companion (for the Elgato Streamdeck)"},{title:"PreSonus StudioLive III Console Advertisement",stack:["C"],repo:"https://github.com/featherbear/presonus-studiolive-console-advertisement",description:"UDP discovery packet spoofer for notifying clients of networked StudioLive III consoles over challenging network configurations"},{title:"aNDI",stack:["Flutter","Dart"],repo:"https://github.com/featherbear/aNDI",blog:"https://blog.featherbear.cc/post/andi-ndi-tools-for-android/",image:"https://blog.featherbear.cc/uploads/img_0047.JPG",description:"NDI tool application for Android"},{title:"NDI Telestrator",description:"Whiteboard annotation tool using NDI",stack:["C#"],repo:"https://github.com/featherbear/NDI-Telestrator",blog:"https://blog.featherbear.cc/post/ndi-telestrator/",image:"https://blog.featherbear.cc/uploads/snipaste_2021-06-25_22-32-19.png"},{title:"Vix",stack:["Flutter","Dart"],repo:"https://github.com/featherbear/obs-vix",blog:"https://blog.featherbear.cc/post/obs-vix/",image:"https://blog.featherbear.cc/uploads/20210904-snipaste_2021-09-05_01-43-46.png",description:"An opinionated vision mixer and switcher client for OBS"}]},{title:"Games",items:[{title:"Stacker Game",stack:["p5.js"],image:"https://blog.featherbear.cc/post/p5-stack-queue-games/preview_stack.apng",blog:"https://blog.featherbear.cc/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-stacker-game/",repo:"https://github.com/featherbear/p5-stacker-game/"},{title:"Queuer Game",stack:["p5.js"],image:"https://blog.featherbear.cc/post/p5-stack-queue-games/preview_queue.apng",blog:"https://blog.featherbear.cc/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-queuer-game/",repo:"https://github.com/featherbear/p5-queuer-game/"},{title:"Platformer Game",stack:["p5.js"],description:"A platformer 'game'\n(that I never really started)",repo:"https://github.com/featherbear/processing-platformer",site:"https://featherbear.cc/processing-platformer/"},{title:"Dungeon Game",stack:["Java","JavaFX"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2",blog:"https://featherbear.cc/UNSW-COMP2511/post/assign2/",image:"https://featherbear.cc/UNSW-COMP2511/post/assign2/demo.gif",description:"UNSW COMP2511 group project"},{title:"Dungeon Game (Text Edition)",stack:["Java","JNA"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/",blog:"https://blog.featherbear.cc/post/dungeon-console/",image:"https://raw.githubusercontent.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/master/demo_advanced.gif",description:"Alternative text-based client for my UNSW COMP2511 group project"},{title:"Balloon Shooting Game",stack:["SmallBasic"],blog:"https://blog.featherbear.cc/post/smallbasic-balloon-shooting-game/",repo:"https://github.com/featherbear/smallbasic-balloon-shooting-game",image:"https://blog.featherbear.cc/post/smallbasic-balloon-shooting-game/animation.gif",description:"A game I made in Small Basic for some educational course. Oh boy."},{title:"Whoops! There Goes My AI",stack:["Python","wxPython","OpenCV"],blog:"https://blog.featherbear.cc/post/whoops-there-goes-my-ai/",image:"https://blog.featherbear.cc/post/whoops-there-goes-my-ai/preview.apng",repo:"https://github.com/featherbear/Whoops-There-Goes-My-AI/",description:"An attempt at computer vision, to automate a mobile phone game"}]},{title:"Scripts and Misc",items:[{title:"Thesis - “Smart” Vacuum Cleaners",site:"https://featherbear.cc/UNSW-CSE-Thesis/",image:"https://featherbear.cc/UNSW-CSE-Thesis/uploads/covers/0T4A9791.JPG",description:"A security and privacy audit of the Roborock S6 robot vacuum cleaner"},{title:"zt.py",stack:["Python"],repo:"https://github.com/featherbear/zt.py",description:"Linux CLI wrapper for managing ZeroTier networks"},{title:"Netlify DDNS Updater",stack:["Python"],repo:"https://github.com/featherbear/netlify-ddns-updater",description:"Yet another dynamic DNS updater for Netlify DNS"},{title:"Threes",stack:["Python"],repo:"https://github.com/featherbear/threes",blog:"https://blog.featherbear.cc/post/instagram-layouts-offsets-grids-code/",description:"A content spacer tool for Instagram to maintain 3 x n layouts",image:"https://blog.featherbear.cc/uploads/sxs.gif"},{title:"Facebook Marketplace Helper",stack:["JavaScript"],repo:"https://github.com/featherbear/facebook-marketplace-helper",blog:"https://blog.featherbear.cc/post/facebook-marketplace-helper-script",description:"Remove sponsored ads and mark previously viewed classified listings",image:"https://blog.featherbear.cc/uploads/snipaste_2021-07-10_00-05-39.png"},{title:"Raincheck",stack:["TypeScript","Svelte"],site:"https://featherbear.cc/raincheck/",repo:"https://github.com/featherbear/raincheck",description:"Quick rain checker - Plans cancelled? Or is it raining? Or both 🤷‍♂️"}]}];function dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o(this,n)}}function vt(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return yt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return yt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function yt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function St(t,e,r){var o=t.slice();return o[2]=e[r],o}function kt(t,e,r){var o=t.slice();return o[5]=e[r],o}function wt(t){return{c:B,l:B,m:B,p:B,i:B,o:B,d:B}}function Pt(t){for(var e,r,o=t[1],n=[],i=0;i<o.length;i+=1)n[i]=It(St(t,o,i));var a=function(t){return P(n[t],1,1,(function(){n[t]=null}))};return{c:function(){for(var t=0;t<n.length;t+=1)n[t].c();e=F()},l:function(t){for(var r=0;r<n.length;r+=1)n[r].l(t);e=F()},m:function(t,o){for(var i=0;i<n.length;i+=1)n[i].m(t,o);g(t,e,o),r=!0},p:function(t,r){if(1&r){var i;for(o=t[1],i=0;i<o.length;i+=1){var s=St(t,o,i);n[i]?(n[i].p(s,r),S(n[i],1)):(n[i]=It(s),n[i].c(),S(n[i],1),n[i].m(e.parentNode,e))}for(A(),i=o.length;i<n.length;i+=1)a(i);W()}},i:function(t){if(!r){for(var e=0;e<o.length;e+=1)S(n[e]);r=!0}},o:function(t){n=n.filter(Boolean);for(var e=0;e<n.length;e+=1)P(n[e]);r=!1},d:function(t){G(n,t),t&&b(e)}}}function Ct(t){var e,r;return e=new gt({props:{title:t[5].title,description:t[5].description,image:t[5].image,preview:t[5].preview,repo:t[5].repo,site:t[5].site,blog:t[5].blog,stack:t[5].stack}}),{c:function(){M(e.$$.fragment)},l:function(t){E(e.$$.fragment,t)},m:function(t,o){R(e,t,o),r=!0},p:B,i:function(t){r||(S(e.$$.fragment,t),r=!0)},o:function(t){P(e.$$.fragment,t),r=!1},d:function(t){j(e,t)}}}function $t(t){var e,r,o=t[2].items&&function(t){for(var e,r,o=t[2].items,n=[],i=0;i<o.length;i+=1)n[i]=Ct(kt(t,o,i));var a=function(t){return P(n[t],1,1,(function(){n[t]=null}))};return{c:function(){for(var t=0;t<n.length;t+=1)n[t].c();e=F()},l:function(t){for(var r=0;r<n.length;r+=1)n[r].l(t);e=F()},m:function(t,o){for(var i=0;i<n.length;i+=1)n[i].m(t,o);g(t,e,o),r=!0},p:function(t,r){if(1&r){var i;for(o=t[2].items,i=0;i<o.length;i+=1){var s=kt(t,o,i);n[i]?(n[i].p(s,r),S(n[i],1)):(n[i]=Ct(s),n[i].c(),S(n[i],1),n[i].m(e.parentNode,e))}for(A(),i=o.length;i<n.length;i+=1)a(i);W()}},i:function(t){if(!r){for(var e=0;e<o.length;e+=1)S(n[e]);r=!0}},o:function(t){n=n.filter(Boolean);for(var e=0;e<n.length;e+=1)P(n[e]);r=!1},d:function(t){G(n,t),t&&b(e)}}}(t);return{c:function(){o&&o.c(),e=C()},l:function(t){o&&o.l(t),e=$(t)},m:function(t,n){o&&o.m(t,n),g(t,e,n),r=!0},p:function(t,e){t[2].items&&o.p(t,e)},i:function(t){r||(S(o),r=!0)},o:function(t){P(o),r=!1},d:function(t){o&&o.d(t),t&&b(e)}}}function It(t){var e,r;return e=new Q({props:{title:t[2].title,$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c:function(){M(e.$$.fragment)},l:function(t){E(e.$$.fragment,t)},m:function(t,o){R(e,t,o),r=!0},p:function(t,r){var o={};256&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i:function(t){r||(S(e.$$.fragment,t),r=!0)},o:function(t){P(e.$$.fragment,t),r=!1},d:function(t){j(e,t)}}}function Tt(t){return{c:B,l:B,m:B,p:B,i:B,o:B,d:B}}function Nt(t){var e,r,o,n,i,a,s,c,d,y,k,w,I,T,A={ctx:t,current:null,token:null,hasCatch:!1,pending:Tt,then:Pt,catch:wt,value:1,blocks:[,,,]};return U(t[0](),A),{c:function(){e=l("h4"),r=p("TL;DR"),o=C(),n=l("p"),i=p("My interest in programming lies in things related to security, multimedia, and\n  communication."),a=C(),s=l("hr"),c=C(),A.block.c(),d=C(),y=l("h4"),k=p("An invalid metric of my programming life"),w=C(),I=l("img"),this.h()},l:function(t){e=u(t,"H4",{});var l=h(e);r=f(l,"TL;DR"),l.forEach(b),o=$(t),n=u(t,"P",{});var p=h(n);i=f(p,"My interest in programming lies in things related to security, multimedia, and\n  communication."),p.forEach(b),a=$(t),s=u(t,"HR",{}),c=$(t),A.block.l(t),d=$(t),y=u(t,"H4",{});var g=h(y);k=f(g,"An invalid metric of my programming life"),g.forEach(b),w=$(t),I=u(t,"IMG",{alt:!0,style:!0,src:!0}),this.h()},h:function(){v(I,"alt","github stats"),O(I,"width","100%"),O(I,"max-width","400px"),I.src!=="https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord"&&v(I,"src","https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")},m:function(t,l){g(t,e,l),m(e,r),g(t,o,l),g(t,n,l),m(n,i),g(t,a,l),g(t,s,l),g(t,c,l),A.block.m(t,A.anchor=l),A.mount=function(){return d.parentNode},A.anchor=d,g(t,d,l),g(t,y,l),m(y,k),g(t,w,l),g(t,I,l),T=!0},p:function(e,r){var o=N(r,1)[0];_(A,t=e,o)},i:function(t){T||(S(A.block),T=!0)},o:function(t){for(var e=0;e<3;e+=1){var r=A.blocks[e];P(r)}T=!1},d:function(t){t&&b(e),t&&b(o),t&&b(n),t&&b(a),t&&b(s),t&&b(c),A.block.d(t),A.token=null,A=null,t&&b(d),t&&b(y),t&&b(w),t&&b(I)}}}function At(t){function e(){return(e=D(L.mark((function t(){var e,r,o;return L.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=vt(mt);try{for(e.s();!(r=e.n()).done;)(o=r.value).items&&o.items.sort((function(t,e){var r=!(!e.image&&!e.preview),o=!(!t.image&&!t.preview);return o!=r?r-o:e.title<t.title}))}catch(t){e.e(t)}finally{e.f()}return t.abrupt("return",mt);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return[function(){return e.apply(this,arguments)}]}var Wt=function(t){e(o,c);var r=dt(o);function o(t){var e;return n(this,o),e=r.call(this),i(s(e),t,At,Nt,a,{}),e}return o}();export default Wt;
