import{K as t,_ as e,a as r,b as o,c as n,i,s as a,d as c,S as s,g as l,x as p,h as u,j as f,z as h,k as m,n as g,o as b,L as d,l as v,u as y,r as S,M as k,N as w,v as P,w as $,y as C,t as I,O as N,p as T,P as M,Q as W,e as A,F as j,H as R,I as x,J as D,R as E,D as U,T as O,U as _,A as L,V as B,E as F}from"./client.a87de1aa.js";function H(e,r){var o=r.delay,n=void 0===o?0:o,i=r.duration,a=void 0===i?400:i,c=r.easing,s=void 0===c?t:c,l=+getComputedStyle(e).opacity;return{delay:n,duration:a,easing:s,css:function(t){return"opacity: ".concat(t*l)}}}function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o(this,n)}}function G(t){var e,r;return{c:function(){e=l("p"),r=p(t[2])},l:function(o){e=u(o,"P",{});var n=f(e);r=h(n,t[2]),n.forEach(m)},m:function(t,o){g(t,e,o),b(e,r)},p:function(t,e){4&e&&d(r,t[2])},d:function(t){t&&m(e)}}}function q(t){var e,r,o,n=t[5].default,i=A(n,t,t[4],null);return{c:function(){e=l("div"),i&&i.c(),this.h()},l:function(t){e=u(t,"DIV",{class:!0});var r=f(e);i&&i.l(r),r.forEach(m),this.h()},h:function(){v(e,"class","svelte-13hjb2l")},m:function(t,r){g(t,e,r),i&&i.m(e,null),o=!0},p:function(t,e){i&&i.p&&16&e&&y(i,n,t,t[4],e,null,null)},i:function(t){o||(S(i,t),t&&k((function(){r||(r=w(e,H,{},!0)),r.run(1)})),o=!0)},o:function(t){P(i,t),t&&(r||(r=w(e,H,{},!1)),r.run(0)),o=!1},d:function(t){t&&m(e),i&&i.d(t),t&&r&&r.end()}}}function V(t){var e,r,o,n,i,a,c,s,y=t[2]&&G(t),k=t[0]&&q(t);return{c:function(){e=l("section"),r=l("h2"),o=p(t[1]),n=$(),y&&y.c(),i=$(),k&&k.c(),this.h()},l:function(a){e=u(a,"SECTION",{class:!0});var c=f(e);r=u(c,"H2",{class:!0});var s=f(r);o=h(s,t[1]),s.forEach(m),n=C(c),y&&y.l(c),i=C(c),k&&k.l(c),c.forEach(m),this.h()},h:function(){v(r,"class","svelte-13hjb2l"),I(r,"collapsible",t[3]),v(e,"class","svelte-13hjb2l")},m:function(l,p){g(l,e,p),b(e,r),b(r,o),b(e,n),y&&y.m(e,null),b(e,i),k&&k.m(e,null),a=!0,c||(s=N(r,"click",t[6]),c=!0)},p:function(t,n){var c=T(n,1)[0];(!a||2&c)&&d(o,t[1]),8&c&&I(r,"collapsible",t[3]),t[2]?y?y.p(t,c):((y=G(t)).c(),y.m(e,i)):y&&(y.d(1),y=null),t[0]?k?(k.p(t,c),1&c&&S(k,1)):((k=q(t)).c(),S(k,1),k.m(e,null)):k&&(M(),P(k,1,1,(function(){k=null})),W())},i:function(t){a||(S(k),a=!0)},o:function(t){P(k),a=!1},d:function(t){t&&m(e),y&&y.d(),k&&k.d(),c=!1,s()}}}function Q(t,e,r){var o=e.title,n=void 0===o?"":o,i=e.description,a=e.collapsible,c=void 0===a||a,s=e.opened,l=void 0===s||s,p=e.$$slots,u=void 0===p?{}:p,f=e.$$scope;return t.$set=function(t){"title"in t&&r(1,n=t.title),"description"in t&&r(2,i=t.description),"collapsible"in t&&r(3,c=t.collapsible),"opened"in t&&r(0,l=t.opened),"$$scope"in t&&r(4,f=t.$$scope)},[l,n,i,c,f,u,function(){c&&r(0,l=!l)}]}var z=function(t){e(o,s);var r=J(o);function o(t){var e;return n(this,o),e=r.call(this),i(c(e),t,Q,V,a,{title:1,description:2,collapsible:3,opened:0}),e}return o}();function X(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o(this,n)}}function Y(t){var e,r,o,n=t[2].default,i=A(n,t,t[1],null);return{c:function(){e=l("a"),r=l("div"),i&&i.c(),this.h()},l:function(t){e=u(t,"A",{href:!0,rel:!0,class:!0});var o=f(e);r=u(o,"DIV",{class:!0});var n=f(r);i&&i.l(n),n.forEach(m),o.forEach(m),this.h()},h:function(){v(r,"class","svelte-312hfm"),v(e,"href",t[0]),v(e,"rel","prefetch"),v(e,"class","svelte-312hfm")},m:function(t,n){g(t,e,n),b(e,r),i&&i.m(r,null),o=!0},p:function(t,r){var a=T(r,1)[0];i&&i.p&&2&a&&y(i,n,t,t[1],a,null,null),(!o||1&a)&&v(e,"href",t[0])},i:function(t){o||(S(i,t),o=!0)},o:function(t){P(i,t),o=!1},d:function(t){t&&m(e),i&&i.d(t)}}}function K(t,e,r){var o=e.href,n=void 0===o?"#":o,i=e.$$slots,a=void 0===i?{}:i,c=e.$$scope;return t.$set=function(t){"href"in t&&r(0,n=t.href),"$$scope"in t&&r(1,c=t.$$scope)},[n,c,a]}var Z=function(t){e(o,s);var r=X(o);function o(t){var e;return n(this,o),e=r.call(this),i(c(e),t,K,Y,a,{href:0}),e}return o}();function tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o(this,n)}}function et(t){var e,r,o=t[4]&&rt(t);return{c:function(){e=l("div"),o&&o.c(),this.h()},l:function(t){e=u(t,"DIV",{class:!0,style:!0});var r=f(e);o&&o.l(r),r.forEach(m),this.h()},h:function(){v(e,"class","preview svelte-10bbby6"),v(e,"style",r=t[3]?"background-image: url(".concat(t[3],");"):"")},m:function(t,r){g(t,e,r),o&&o.m(e,null)},p:function(t,n){t[4]?o?o.p(t,n):((o=rt(t)).c(),o.m(e,null)):o&&(o.d(1),o=null),8&n&&r!==(r=t[3]?"background-image: url(".concat(t[3],");"):"")&&v(e,"style",r)},d:function(t){t&&m(e),o&&o.d()}}}function rt(t){var e,r;return{c:function(){e=l("iframe"),this.h()},l:function(t){e=u(t,"IFRAME",{src:!0,scrolling:!0,title:!0,sandbox:!0,class:!0}),f(e).forEach(m),this.h()},h:function(){e.src!==(r=t[4])&&v(e,"src",r),v(e,"scrolling","no"),v(e,"title","preview"),v(e,"sandbox","allow-scripts allow-same-origin"),v(e,"class","svelte-10bbby6")},m:function(t,r){g(t,e,r)},p:function(t,o){16&o&&e.src!==(r=t[4])&&v(e,"src",r)},d:function(t){t&&m(e)}}}function ot(t){var e,r,o,n=t[0].join(", ")+"";return{c:function(){e=l("span"),r=p("Technology stack: "),o=p(n),this.h()},l:function(t){e=u(t,"SPAN",{class:!0});var i=f(e);r=h(i,"Technology stack: "),o=h(i,n),i.forEach(m),this.h()},h:function(){v(e,"class","svelte-10bbby6")},m:function(t,n){g(t,e,n),b(e,r),b(e,o)},p:function(t,e){1&e&&n!==(n=t[0].join(", ")+"")&&d(o,n)},d:function(t){t&&m(e)}}}function nt(t){var e,r;return{c:function(){e=l("p"),r=p(t[2]),this.h()},l:function(o){e=u(o,"P",{class:!0});var n=f(e);r=h(n,t[2]),n.forEach(m),this.h()},h:function(){v(e,"class","svelte-10bbby6")},m:function(t,o){g(t,e,o),b(e,r)},p:function(t,e){4&e&&d(r,t[2])},d:function(t){t&&m(e)}}}function it(t){var e,r,o,n,i=t[5]&&at(t),a=t[6]&&st(t),c=t[7]&&pt(t);return{c:function(){e=l("div"),i&&i.c(),r=$(),a&&a.c(),o=$(),c&&c.c(),this.h()},l:function(t){e=u(t,"DIV",{class:!0});var n=f(e);i&&i.l(n),r=C(n),a&&a.l(n),o=C(n),c&&c.l(n),n.forEach(m),this.h()},h:function(){v(e,"class","buttons svelte-10bbby6")},m:function(t,s){g(t,e,s),i&&i.m(e,null),b(e,r),a&&a.m(e,null),b(e,o),c&&c.m(e,null),n=!0},p:function(t,n){t[5]?i?(i.p(t,n),32&n&&S(i,1)):((i=at(t)).c(),S(i,1),i.m(e,r)):i&&(M(),P(i,1,1,(function(){i=null})),W()),t[6]?a?(a.p(t,n),64&n&&S(a,1)):((a=st(t)).c(),S(a,1),a.m(e,o)):a&&(M(),P(a,1,1,(function(){a=null})),W()),t[7]?c?(c.p(t,n),128&n&&S(c,1)):((c=pt(t)).c(),S(c,1),c.m(e,null)):c&&(M(),P(c,1,1,(function(){c=null})),W())},i:function(t){n||(S(i),S(a),S(c),n=!0)},o:function(t){P(i),P(a),P(c),n=!1},d:function(t){t&&m(e),i&&i.d(),a&&a.d(),c&&c.d()}}}function at(t){var e,r=new Z({props:{href:t[5],$$slots:{default:[ct]},$$scope:{ctx:t}}});return{c:function(){j(r.$$.fragment)},l:function(t){R(r.$$.fragment,t)},m:function(t,o){x(r,t,o),e=!0},p:function(t,e){var o={};32&e&&(o.href=t[5]),256&e&&(o.$$scope={dirty:e,ctx:t}),r.$set(o)},i:function(t){e||(S(r.$$.fragment,t),e=!0)},o:function(t){P(r.$$.fragment,t),e=!1},d:function(t){D(r,t)}}}function ct(t){var e;return{c:function(){e=p("GitHub")},l:function(t){e=h(t,"GitHub")},m:function(t,r){g(t,e,r)},d:function(t){t&&m(e)}}}function st(t){var e,r=new Z({props:{href:t[6],$$slots:{default:[lt]},$$scope:{ctx:t}}});return{c:function(){j(r.$$.fragment)},l:function(t){R(r.$$.fragment,t)},m:function(t,o){x(r,t,o),e=!0},p:function(t,e){var o={};64&e&&(o.href=t[6]),256&e&&(o.$$scope={dirty:e,ctx:t}),r.$set(o)},i:function(t){e||(S(r.$$.fragment,t),e=!0)},o:function(t){P(r.$$.fragment,t),e=!1},d:function(t){D(r,t)}}}function lt(t){var e;return{c:function(){e=p("Site")},l:function(t){e=h(t,"Site")},m:function(t,r){g(t,e,r)},d:function(t){t&&m(e)}}}function pt(t){var e,r=new Z({props:{href:t[7],$$slots:{default:[ut]},$$scope:{ctx:t}}});return{c:function(){j(r.$$.fragment)},l:function(t){R(r.$$.fragment,t)},m:function(t,o){x(r,t,o),e=!0},p:function(t,e){var o={};128&e&&(o.href=t[7]),256&e&&(o.$$scope={dirty:e,ctx:t}),r.$set(o)},i:function(t){e||(S(r.$$.fragment,t),e=!0)},o:function(t){P(r.$$.fragment,t),e=!1},d:function(t){D(r,t)}}}function ut(t){var e;return{c:function(){e=p("Blog")},l:function(t){e=h(t,"Blog")},m:function(t,r){g(t,e,r)},d:function(t){t&&m(e)}}}function ft(t){var e,r,o,n,i,a,c,s,y,k=(t[4]||t[3])&&et(t),w=t[0]&&ot(t),I=t[2]&&nt(t),N=(t[5]||t[6]||t[7])&&it(t);return{c:function(){e=l("article"),k&&k.c(),r=$(),o=l("div"),n=l("h4"),i=p(t[1]),a=$(),w&&w.c(),c=$(),I&&I.c(),s=$(),N&&N.c(),this.h()},l:function(l){e=u(l,"ARTICLE",{class:!0});var p=f(e);k&&k.l(p),r=C(p),o=u(p,"DIV",{class:!0});var g=f(o);n=u(g,"H4",{class:!0});var b=f(n);i=h(b,t[1]),b.forEach(m),a=C(g),w&&w.l(g),c=C(g),I&&I.l(g),g.forEach(m),s=C(p),N&&N.l(p),p.forEach(m),this.h()},h:function(){v(n,"class","svelte-10bbby6"),v(o,"class","content svelte-10bbby6"),v(e,"class","svelte-10bbby6")},m:function(t,l){g(t,e,l),k&&k.m(e,null),b(e,r),b(e,o),b(o,n),b(n,i),b(o,a),w&&w.m(o,null),b(o,c),I&&I.m(o,null),b(e,s),N&&N.m(e,null),y=!0},p:function(t,n){var a=T(n,1)[0];t[4]||t[3]?k?k.p(t,a):((k=et(t)).c(),k.m(e,r)):k&&(k.d(1),k=null),(!y||2&a)&&d(i,t[1]),t[0]?w?w.p(t,a):((w=ot(t)).c(),w.m(o,c)):w&&(w.d(1),w=null),t[2]?I?I.p(t,a):((I=nt(t)).c(),I.m(o,null)):I&&(I.d(1),I=null),t[5]||t[6]||t[7]?N?(N.p(t,a),224&a&&S(N,1)):((N=it(t)).c(),S(N,1),N.m(e,null)):N&&(M(),P(N,1,1,(function(){N=null})),W())},i:function(t){y||(S(N),y=!0)},o:function(t){P(N),y=!1},d:function(t){t&&m(e),k&&k.d(),w&&w.d(),I&&I.d(),N&&N.d()}}}function ht(t,e,r){var o=e.title,n=e.description,i=e.image,a=e.preview,c=e.repo,s=e.site,l=e.blog,p=e.stack;return"string"==typeof p&&(p=[p]),t.$set=function(t){"title"in t&&r(1,o=t.title),"description"in t&&r(2,n=t.description),"image"in t&&r(3,i=t.image),"preview"in t&&r(4,a=t.preview),"repo"in t&&r(5,c=t.repo),"site"in t&&r(6,s=t.site),"blog"in t&&r(7,l=t.blog),"stack"in t&&r(0,p=t.stack)},[p,o,n,i,a,c,s,l]}var mt=function(t){e(o,s);var r=tt(o);function o(t){var e;return n(this,o),e=r.call(this),i(c(e),t,ht,ft,a,{title:1,description:2,image:3,preview:4,repo:5,site:6,blog:7,stack:0}),e}return o}(),gt=[{title:"Libraries / APIs",items:[{title:"facebook-messenger-puppeteer",stack:["Node.js","Puppeteer"],description:"API for Messenger Chat via Puppeteer",repo:"https://github.com/featherbear/facebook-messenger-puppeteer",blog:"https://featherbear.cc/blog/post/facebook-messenger-puppeteer/"},{title:"react-native-mifare-classic-wrapper",repo:"https://github.com/featherbear/react-native-mifare-classic-wrapper/",description:"Wrapper over the react-native-nfc-manager package to provide streamlined Mifare Classic functionality"},{title:"PreSonus StudioLive API",stack:["Node.js","Python"],repo:"https://github.com/featherbear/PreSonus-StudioLive-API",blog:"https://featherbear.cc/blog/post/presonus-studiolive-api/",description:"Exploring the PreSonus network control protocol from a StudioLive Series III"},{title:"fastify-slate",stack:"Node.js",repo:"https://github.com/featherbear/fastify-slate",description:"Slate documentation generator for Fastify"},{title:"node-ltc",repo:"https://github.com/featherbear/node-ltc",description:"Node.js Foreign Function Interface for libltc"}]},{title:"Security",items:[{title:"Project RATtata",repo:"https://github.com/featherbear/UNSW-COMP6441-RATtata",site:"https://featherbear.cc/UNSW-COMP6441-RATtata/",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/job-application/something_awesome/",preview:"https://featherbear.cc/UNSW-COMP6441-RATtata/",stack:["Node.js","Vue","Electron"],description:"Remote administration tool project for COMP6441"},{title:"Project Securitears",stack:["Python"],repo:"https://github.com/featherbear/UNSW-COMP6447-ass",site:"https://featherbear.github.io/UNSW-COMP6447-ass",preview:"https://featherbear.cc/UNSW-COMP6447-ass/",description:"Blackbox input fuzzer for COMP6447"},{title:"CSE x SecSoc CTF 2020",blog:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/",image:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/team.png",description:"Not actually a project, but an honourable mention. I came first in this CTF!"},{title:"UNSW COMP6443",site:"https://featherbear.cc/UNSW-COMP6443/",description:"Another honourable mention - I placed first in my university's Web Application Security and Testing course!"},{title:"UNSW CompClub 2019 CTF Server",stack:["Python","SQLite","JavaScript"],image:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/title_small.gif",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-CTF",site:"https://featherbear.cc/UNSW-CompClub2019Summer-CTF/",description:"Custom CTF server for UNSW CompClub"},{title:"Project CTF² (dev)",stack:["Node.js","Svelte","SQLite","MongoDB","NeutralinoJS"],image:"https://github.com/featherbear/CTF2-server-slate/raw/master/images/logo.png",repo:"https://github.com/featherbear/CTF2",description:"Custom Capture The Flag competition server"}]},{title:"Teaching Resources",items:[{title:"Learn C",description:"A primer to the C programming language",repo:"https://github.com/featherbear/learn-c/",site:"https://featherbear.cc/learn-c/"},{title:"Learn Data Structures and Algorithms",description:"A primer to common computer data structures and algorithms",repo:"https://github.com/featherbear/learn-data-structures-algorithms/",site:"https://featherbear.cc/learn-data-structures-algorithms/"},{title:"Learn System Internals",description:"A primer to how CPUs and Operating Systems work",repo:"https://github.com/featherbear/learn-system-internals/",site:"https://featherbear.cc/learn-system-internals/"},{title:"Python Proficiency",description:"Snippets of knowledge about Python",repo:"https://github.com/featherbear/learn-python-proficiency/",site:"https://featherbear.cc/learn-python-proficiency/"},{title:"JavaScript Proficiency",description:"Snippets of knowledge about JavaScript ",repo:"https://github.com/featherbear/learn-javascript-proficiency/",site:"https://featherbear.cc/learn-javascript-proficiency/"},{title:"Learn CSS - Hover Buttons",description:"Demonstration on the effects of the placement of the transition style attribute",image:"https://featherbear.cc/blog/post/hover-buttons/preview.png",blog:"https://featherbear.cc/blog/post/hover-buttons/",repo:"https://github.com/featherbear/hover-buttons",site:"https://featherbear.cc/hover-buttons/"},{title:"Image Steganography",description:"Workshop for secondary school students about LSB Image Steganography.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/steganography_preview.png",site:"https://docs.google.com/presentation/d/1kyRsC1-PMJu4UndE6psUHJHuTHX7W6cuYRod1jq3QJY/edit?usp=sharing",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/image_steganography"},{title:"HTTP(S) Security",description:"Presentation for secondary school students about the importance of HTTPS.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/https_preview.png",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/http_mitm",site:"https://docs.google.com/presentation/d/1ykIUm1xAKMforvTPeqvXMdC4DZlnWOg604ekaybhiOs/edit?usp=sharing"},{title:"Establishing P2P Connections over TCP",description:"An explanation of how a Peer to Peer connection is set up with a broker server and NAT Holepunching",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/http_mitm",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/something-awesome-research-connection/"}]},{title:"Client Work",items:[{title:"UNSW Scientia Signage",stack:["JavaScript"],image:"https://featherbear.cc/blog/post/unsw-scientia-signage/Snipaste_2019-12-09_19-33-07.png",blog:"https://featherbear.cc/blog/post/unsw-scientia-signage/",description:"SPA page to control PiSignage devices"},{title:"South-West Evangelical Church",preview:"https://swec.org.au",description:"Website and internal software development",site:"https://www.swec.org.au/"},{title:"RICE Movement",preview:"https://ricemovement.org",description:"Website and internal software development",site:"https://ricemovement.org/"}]},{title:"Sandbox",items:[{title:"Trello e-Paper Display",stack:["Python"],image:"https://featherbear.cc/blog/post/e-paper/20191211_221809.jpg",repo:"https://github.com/featherbear/trello-epd",blog:"https://featherbear.cc/blog/post/e-paper/",description:"Physical to-do list on an e-Paper display"},{title:"Filmstrip Messages",stack:["Svelte"],image:"https://featherbear.cc/blog/post/filmstrip-messages/preview.png",blog:"https://featherbear.cc/blog/post/filmstrip-messages/",site:"https://featherbear.cc/filmstrip-messages/",repo:"https://github.com/featherbear/filmstrip-messages",description:"Photostrip project to house a collection of photos, videos and text notes"},{title:"DeliveryTrack",stack:["JavaScript"],repo:"https://github.com/featherbear/deliverytrack",site:"https://featherbear.cc/deliverytrack/",image:"https://featherbear.cc/blog/post/delivery-track/preview.png",description:"Postal delivery tracking web application with synchronisation between devices"},{title:"Wardrobe",stack:["Svelte"],repo:"https://github.com/featherbear/wardrobe",site:"https://featherbear.cc/wardrobe/",preview:"https://featherbear.cc/wardrobe/",description:"A clothing-oriented photo organisation web application"},{title:"Twinkle Tiles",stack:["p5.js"],image:"https://featherbear.cc/blog/post/processing-twinkle/preview.apng",site:"https://featherbear.github.io/processing-twinkle/",repo:"https://github.com/featherbear/processing-twinkle",blog:"https://featherbear.cc/blog/post/processing-twinkle/"},{title:"Spit",stack:["TypeScript","Svelte"],site:"https://featherbear.cc/spit/",repo:"https://github.com/featherbear/spit",description:"Data massaging tool"},{title:"Wakey",stack:["Node.js","Svelte"],image:"https://featherbear.cc/blog/post/wakey/Snipaste_2020-11-16_22-37-12.png",blog:"https://featherbear.cc/blog/post/wakey/",repo:"https://github.com/featherbear/wakey",description:"Wake On LAN web application"},{title:"Go Links",stack:["JavaScript","Python"],blog:"https://featherbear.cc/blog/post/featherbear.cc-go/",repo:"https://github.com/featherbear/go-links",description:"Static link shortener service via GitHub Pages"},{title:"Templables (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/templables",description:"Form creation and collection framework"},{title:"Wyd? (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/wyd",description:"Public daily agenda"},{title:"Monosodium (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/monosodium",description:"Facebook Messenger client"}]},{title:"Multimedia",items:[{title:"Sound Mixer Simulator (dev)",site:"https://featherbear.cc/mixer/",repo:"https://github.com/featherbear/mixer/",stack:["React"],description:"Interactive teaching tool for the PreSonus StudioLive 16 Series III sound console"},{title:"ProPresenter Stage Display Messages",stack:["JavaScript"],site:"http://pp6sdm.apps.navhaxs.au.eu.org/",image:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/screenshot.png",blog:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/",repo:"https://github.com/featherbear/propresenter-stagemessages",description:"Remote stage message client for ProPresenter 6/7"},{title:"ProPresenter 6/7 OBS Scene Switcher",stack:["Node.js"],repo:"https://github.com/featherbear/propresenter-obs-scene-switcher",description:"Switch OBS scenes depending on the current ProPresenter content"},{title:"ProPresenter 6 Local Sync Tool",stack:["C#",".NET"],repo:"https://github.com/featherbear/propresenter-local-sync-tool",image:"https://raw.githubusercontent.com/featherbear/propresenter-local-sync-tool/master/logo.ico",description:"A buggy file synchronisation tool that's less buggy than ProPresenter 6's inbuilt one"},{title:"OnCue Projector",stack:["Python","Qt"],repo:"https://github.com/featherbear/OnCue",description:"Multimedia presentation software for seamless playback of content\nHSC Major Project"},{title:"BlueClick BLE",stack:["Arduino"],image:"https://featherbear.cc/blog/post/blueclick/logic-board/20201205_180608.jpg",blog:"https://featherbear.cc/blog/post/blueclick/",repo:"https://github.com/featherbear/BlueClick_BLE",description:"Page turner for OnSong, through sending MIDI notes over Bluetooth Low Energy"},{title:"NDI Streamer",stack:["C++"],blog:"https://featherbear.cc/blog/post/ndi-streamer/",repo:"https://github.com/featherbear/ndi-streamer",description:"Cross-platform display sharing over NDI. Intended for Linux, since Windows and Mac have the free official Scan Converter"},{title:"Talyte",stack:["C++","Arduino"],blog:"https://featherbear.cc/blog/post/talyte/",image:"https://featherbear.cc/blog/uploads/20210510_234112.jpg",repo:"https://github.com/featherbear/talyte/",description:"OBS tally light library / software"},{title:"Splitify",stack:["React","TypeScript"],image:"https://splitify.github.io/branding/banner/banner@72.png",site:"https://splitify.github.io",blog:"https://featherbear.cc/blog/post/splitify/",repo:"https://github.com/Splitify/",description:"Spotify playlist manager and creator. UNSW SENG4920 group project"},{title:"Bitfocus Companion: PreSonus StudioLive III Module",stack:["TypeScript"],blog:"https://featherbear.cc/blog/post/presonus-studiolive-api-ii/",repo:"https://github.com/featherbear/bitfocus-companion-module-presonus-studiolive-iii",description:"Integration of my PreSonus StudioLive III API for the Elgato Streamdeck, with the Bitfocus Companion software"},{title:"PreSonus StudioLive III Console Advertisement",stack:["C"],repo:"https://github.com/featherbear/presonus-studiolive-console-advertisement",description:"UDP discovery packet spoofer for communication between remote StudioLive III consoles"},{title:"Moone (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/moone",description:"Morning noticeboard for my bedroom TV"}]},{title:"Games",items:[{title:"Stacker Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_stack.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-stacker-game/",repo:"https://github.com/featherbear/p5-stacker-game/"},{title:"Queuer Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_queue.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-queuer-game/",repo:"https://github.com/featherbear/p5-queuer-game/"},{title:"Platformer Game",stack:["p5.js"],description:"A platformer 'game'\n(that I never really started)",repo:"https://github.com/featherbear/processing-platformer",site:"https://featherbear.cc/processing-platformer/"},{title:"Dungeon Game",stack:["Java","JavaFX"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2",blog:"https://featherbear.cc/UNSW-COMP2511/post/assign2/",image:"https://featherbear.cc/UNSW-COMP2511/post/assign2/demo.gif",description:"UNSW COMP2511 group project"},{title:"Dungeon Game (Text Edition)",stack:["Java","JNA"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/",blog:"https://featherbear.cc/blog/post/dungeon-console/",image:"https://raw.githubusercontent.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/master/demo_advanced.gif",description:"Alternative client for my UNSW COMP2511 group project"},{title:"Balloon Shooting Game",stack:["SmallBasic"],blog:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/",repo:"https://github.com/featherbear/smallbasic-balloon-shooting-game",image:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/animation.gif",description:"Making a game in Small Basic. Oh boy."},{title:"Whoops! There Goes My AI",stack:["Python","wxPython","OpenCV"],blog:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/",image:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/preview.apng",repo:"https://github.com/featherbear/Whoops-There-Goes-My-AI/",description:"Computer vision game automator"}]},{title:"Scripts and Misc",items:[{title:"zt.py",stack:["Python"],repo:"https://github.com/featherbear/zt.py",description:"CLI wrapper for ZeroTier Linux"},{title:"Netlify DDNS Updater",stack:["Python"],repo:"https://github.com/featherbear/netlify-ddns-updater",description:"Yet another DDNS updater for Netlify DNS"},{title:"Threes",stack:["Python"],repo:"https://github.com/featherbear/threes",blog:"https://featherbear.cc/blog/post/instagram-layouts-offsets-grids-code/",description:"Instagram 3 x n content spacer"}]}];function bt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o(this,n)}}function dt(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return vt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return vt(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function vt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function yt(t,e,r){var o=t.slice();return o[5]=e[r],o}function St(t,e,r){var o=t.slice();return o[2]=e[r],o}function kt(t){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function wt(t){for(var e,r,o=t[1],n=[],i=0;i<o.length;i+=1)n[i]=Ct(St(t,o,i));var a=function(t){return P(n[t],1,1,(function(){n[t]=null}))};return{c:function(){for(var t=0;t<n.length;t+=1)n[t].c();e=B()},l:function(t){for(var r=0;r<n.length;r+=1)n[r].l(t);e=B()},m:function(t,o){for(var i=0;i<n.length;i+=1)n[i].m(t,o);g(t,e,o),r=!0},p:function(t,r){if(1&r){var i;for(o=t[1],i=0;i<o.length;i+=1){var c=St(t,o,i);n[i]?(n[i].p(c,r),S(n[i],1)):(n[i]=Ct(c),n[i].c(),S(n[i],1),n[i].m(e.parentNode,e))}for(M(),i=o.length;i<n.length;i+=1)a(i);W()}},i:function(t){if(!r){for(var e=0;e<o.length;e+=1)S(n[e]);r=!0}},o:function(t){n=n.filter(Boolean);for(var e=0;e<n.length;e+=1)P(n[e]);r=!1},d:function(t){F(n,t),t&&m(e)}}}function Pt(t){var e,r=new mt({props:{title:t[5].title,description:t[5].description,image:t[5].image,preview:t[5].preview,repo:t[5].repo,site:t[5].site,blog:t[5].blog,stack:t[5].stack}});return{c:function(){j(r.$$.fragment)},l:function(t){R(r.$$.fragment,t)},m:function(t,o){x(r,t,o),e=!0},p:L,i:function(t){e||(S(r.$$.fragment,t),e=!0)},o:function(t){P(r.$$.fragment,t),e=!1},d:function(t){D(r,t)}}}function $t(t){var e,r,o=t[2].items&&function(t){for(var e,r,o=t[2].items,n=[],i=0;i<o.length;i+=1)n[i]=Pt(yt(t,o,i));var a=function(t){return P(n[t],1,1,(function(){n[t]=null}))};return{c:function(){for(var t=0;t<n.length;t+=1)n[t].c();e=B()},l:function(t){for(var r=0;r<n.length;r+=1)n[r].l(t);e=B()},m:function(t,o){for(var i=0;i<n.length;i+=1)n[i].m(t,o);g(t,e,o),r=!0},p:function(t,r){if(1&r){var i;for(o=t[2].items,i=0;i<o.length;i+=1){var c=yt(t,o,i);n[i]?(n[i].p(c,r),S(n[i],1)):(n[i]=Pt(c),n[i].c(),S(n[i],1),n[i].m(e.parentNode,e))}for(M(),i=o.length;i<n.length;i+=1)a(i);W()}},i:function(t){if(!r){for(var e=0;e<o.length;e+=1)S(n[e]);r=!0}},o:function(t){n=n.filter(Boolean);for(var e=0;e<n.length;e+=1)P(n[e]);r=!1},d:function(t){F(n,t),t&&m(e)}}}(t);return{c:function(){o&&o.c(),e=$()},l:function(t){o&&o.l(t),e=C(t)},m:function(t,n){o&&o.m(t,n),g(t,e,n),r=!0},p:function(t,e){t[2].items&&o.p(t,e)},i:function(t){r||(S(o),r=!0)},o:function(t){P(o),r=!1},d:function(t){o&&o.d(t),t&&m(e)}}}function Ct(t){var e,r=new z({props:{title:t[2].title,$$slots:{default:[$t]},$$scope:{ctx:t}}});return{c:function(){j(r.$$.fragment)},l:function(t){R(r.$$.fragment,t)},m:function(t,o){x(r,t,o),e=!0},p:function(t,e){var o={};256&e&&(o.$$scope={dirty:e,ctx:t}),r.$set(o)},i:function(t){e||(S(r.$$.fragment,t),e=!0)},o:function(t){P(r.$$.fragment,t),e=!1},d:function(t){D(r,t)}}}function It(t){return{c:L,l:L,m:L,p:L,i:L,o:L,d:L}}function Nt(t){var e,r,o,n,i,a,c,s,d,y,k,w,I,N,M={ctx:t,current:null,token:null,pending:It,then:wt,catch:kt,value:1,blocks:[,,,]};return E(t[0](),M),{c:function(){e=l("h4"),r=p("TL;DR"),o=$(),n=l("p"),i=p("My interest in programming lies in things related to security, multimedia, and\n  communication."),a=$(),c=l("hr"),s=$(),M.block.c(),d=$(),y=l("h4"),k=p("An invalid metric of my programming life"),w=$(),I=l("img"),this.h()},l:function(t){e=u(t,"H4",{});var l=f(e);r=h(l,"TL;DR"),l.forEach(m),o=C(t),n=u(t,"P",{});var p=f(n);i=h(p,"My interest in programming lies in things related to security, multimedia, and\n  communication."),p.forEach(m),a=C(t),c=u(t,"HR",{}),s=C(t),M.block.l(t),d=C(t),y=u(t,"H4",{});var g=f(y);k=h(g,"An invalid metric of my programming life"),g.forEach(m),w=C(t),I=u(t,"IMG",{alt:!0,style:!0,src:!0}),this.h()},h:function(){v(I,"alt","github stats"),U(I,"width","100%"),U(I,"max-width","400px"),I.src!=="https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord"&&v(I,"src","https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")},m:function(t,l){g(t,e,l),b(e,r),g(t,o,l),g(t,n,l),b(n,i),g(t,a,l),g(t,c,l),g(t,s,l),M.block.m(t,M.anchor=l),M.mount=function(){return d.parentNode},M.anchor=d,g(t,d,l),g(t,y,l),b(y,k),g(t,w,l),g(t,I,l),N=!0},p:function(e,r){var o=T(r,1)[0],n=(t=e).slice();n[1]=M.resolved,M.block.p(n,o)},i:function(t){N||(S(M.block),N=!0)},o:function(t){for(var e=0;e<3;e+=1){var r=M.blocks[e];P(r)}N=!1},d:function(t){t&&m(e),t&&m(o),t&&m(n),t&&m(a),t&&m(c),t&&m(s),M.block.d(t),M.token=null,M=null,t&&m(d),t&&m(y),t&&m(w),t&&m(I)}}}function Tt(t){function e(){return(e=O(_.mark((function t(){var e,r,o;return _.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=dt(gt);try{for(e.s();!(r=e.n()).done;)(o=r.value).items&&o.items.sort((function(t,e){var r=!(!e.image&&!e.preview),o=!(!t.image&&!t.preview);return o!=r?r-o:e.title<t.title}))}catch(t){e.e(t)}finally{e.f()}return t.abrupt("return",gt);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return[function(){return e.apply(this,arguments)}]}var Mt=function(t){e(o,s);var r=bt(o);function o(t){var e;return n(this,o),e=r.call(this),i(c(e),t,Tt,Nt,a,{}),e}return o}();export default Mt;
