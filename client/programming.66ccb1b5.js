import{C as e,S as t,i as r,s as o,e as s,l as a,a as i,b as c,n,d as l,g as p,h,D as m,f as g,u,t as b,E as f,F as d,j as v,k as S,m as y,v as k,G as w,H as P,I as $,c as C,x as N,z as I,A as T,B as M,J as W,r as j,o as A,K as x,w as E}from"./client.b524a9f9.js";function U(t,{delay:r=0,duration:o=400,easing:s=e}){const a=+getComputedStyle(t).opacity;return{delay:r,duration:o,easing:s,css:e=>"opacity: "+e*a}}function O(e){let t,r;return{c(){t=s("p"),r=a(e[2])},l(o){t=i(o,"P",{});var s=c(t);r=n(s,e[2]),s.forEach(l)},m(e,o){p(e,t,o),h(t,r)},p(e,t){4&t&&m(r,e[2])},d(e){e&&l(t)}}}function _(e){let t,r,o;const a=e[5].default,n=C(a,e,e[4],null);return{c(){t=s("div"),n&&n.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var r=c(t);n&&n.l(r),r.forEach(l),this.h()},h(){g(t,"class","svelte-13hjb2l")},m(e,r){p(e,t,r),n&&n.m(t,null),o=!0},p(e,t){n&&n.p&&16&t&&u(n,a,e,e[4],t,null,null)},i(e){o||(b(n,e),e&&f(()=>{r||(r=d(t,U,{},!0)),r.run(1)}),o=!0)},o(e){v(n,e),e&&(r||(r=d(t,U,{},!1)),r.run(0)),o=!1},d(e){e&&l(t),n&&n.d(e),e&&r&&r.end()}}}function D(e){let t,r,o,u,f,d,C,N,I=e[2]&&O(e),T=e[0]&&_(e);return{c(){t=s("section"),r=s("h2"),o=a(e[1]),u=S(),I&&I.c(),f=S(),T&&T.c(),this.h()},l(s){t=i(s,"SECTION",{class:!0});var a=c(t);r=i(a,"H2",{class:!0});var p=c(r);o=n(p,e[1]),p.forEach(l),u=y(a),I&&I.l(a),f=y(a),T&&T.l(a),a.forEach(l),this.h()},h(){g(r,"class","svelte-13hjb2l"),k(r,"collapsible",e[3]),g(t,"class","svelte-13hjb2l")},m(s,a){p(s,t,a),h(t,r),h(r,o),h(t,u),I&&I.m(t,null),h(t,f),T&&T.m(t,null),d=!0,C||(N=w(r,"click",e[6]),C=!0)},p(e,[s]){(!d||2&s)&&m(o,e[1]),8&s&&k(r,"collapsible",e[3]),e[2]?I?I.p(e,s):(I=O(e),I.c(),I.m(t,f)):I&&(I.d(1),I=null),e[0]?T?(T.p(e,s),1&s&&b(T,1)):(T=_(e),T.c(),b(T,1),T.m(t,null)):T&&(P(),v(T,1,1,()=>{T=null}),$())},i(e){d||(b(T),d=!0)},o(e){v(T),d=!1},d(e){e&&l(t),I&&I.d(),T&&T.d(),C=!1,N()}}}function L(e,t,r){let{title:o=""}=t,{description:s}=t,{collapsible:a=!0}=t,{opened:i=!0}=t,{$$slots:c={},$$scope:n}=t;return e.$set=e=>{"title"in e&&r(1,o=e.title),"description"in e&&r(2,s=e.description),"collapsible"in e&&r(3,a=e.collapsible),"opened"in e&&r(0,i=e.opened),"$$scope"in e&&r(4,n=e.$$scope)},[i,o,s,a,n,c,()=>{a&&r(0,i=!i)}]}class B extends t{constructor(e){super(),r(this,e,L,D,o,{title:1,description:2,collapsible:3,opened:0})}}function F(e){let t,r,o;const a=e[2].default,n=C(a,e,e[1],null);return{c(){t=s("a"),r=s("div"),n&&n.c(),this.h()},l(e){t=i(e,"A",{href:!0,rel:!0,class:!0});var o=c(t);r=i(o,"DIV",{class:!0});var s=c(r);n&&n.l(s),s.forEach(l),o.forEach(l),this.h()},h(){g(r,"class","svelte-312hfm"),g(t,"href",e[0]),g(t,"rel","prefetch"),g(t,"class","svelte-312hfm")},m(e,s){p(e,t,s),h(t,r),n&&n.m(r,null),o=!0},p(e,[r]){n&&n.p&&2&r&&u(n,a,e,e[1],r,null,null),(!o||1&r)&&g(t,"href",e[0])},i(e){o||(b(n,e),o=!0)},o(e){v(n,e),o=!1},d(e){e&&l(t),n&&n.d(e)}}}function H(e,t,r){let{href:o="#"}=t,{$$slots:s={},$$scope:a}=t;return e.$set=e=>{"href"in e&&r(0,o=e.href),"$$scope"in e&&r(1,a=e.$$scope)},[o,a,s]}class R extends t{constructor(e){super(),r(this,e,H,F,o,{href:0})}}function G(e){let t,r,o=e[4]&&J(e);return{c(){t=s("div"),o&&o.c(),this.h()},l(e){t=i(e,"DIV",{class:!0,style:!0});var r=c(t);o&&o.l(r),r.forEach(l),this.h()},h(){g(t,"class","preview svelte-10bbby6"),g(t,"style",r=e[3]?`background-image: url(${e[3]});`:"")},m(e,r){p(e,t,r),o&&o.m(t,null)},p(e,s){e[4]?o?o.p(e,s):(o=J(e),o.c(),o.m(t,null)):o&&(o.d(1),o=null),8&s&&r!==(r=e[3]?`background-image: url(${e[3]});`:"")&&g(t,"style",r)},d(e){e&&l(t),o&&o.d()}}}function J(e){let t,r;return{c(){t=s("iframe"),this.h()},l(e){t=i(e,"IFRAME",{src:!0,scrolling:!0,title:!0,sandbox:!0,class:!0}),c(t).forEach(l),this.h()},h(){t.src!==(r=e[4])&&g(t,"src",r),g(t,"scrolling","no"),g(t,"title","preview"),g(t,"sandbox","allow-scripts allow-same-origin"),g(t,"class","svelte-10bbby6")},m(e,r){p(e,t,r)},p(e,o){16&o&&t.src!==(r=e[4])&&g(t,"src",r)},d(e){e&&l(t)}}}function q(e){let t,r,o,u=e[0].join(", ")+"";return{c(){t=s("span"),r=a("Technology stack: "),o=a(u),this.h()},l(e){t=i(e,"SPAN",{class:!0});var s=c(t);r=n(s,"Technology stack: "),o=n(s,u),s.forEach(l),this.h()},h(){g(t,"class","svelte-10bbby6")},m(e,s){p(e,t,s),h(t,r),h(t,o)},p(e,t){1&t&&u!==(u=e[0].join(", ")+"")&&m(o,u)},d(e){e&&l(t)}}}function V(e){let t,r;return{c(){t=s("p"),r=a(e[2]),this.h()},l(o){t=i(o,"P",{class:!0});var s=c(t);r=n(s,e[2]),s.forEach(l),this.h()},h(){g(t,"class","svelte-10bbby6")},m(e,o){p(e,t,o),h(t,r)},p(e,t){4&t&&m(r,e[2])},d(e){e&&l(t)}}}function z(e){let t,r,o,a,n=e[5]&&Q(e),m=e[6]&&Y(e),u=e[7]&&Z(e);return{c(){t=s("div"),n&&n.c(),r=S(),m&&m.c(),o=S(),u&&u.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var s=c(t);n&&n.l(s),r=y(s),m&&m.l(s),o=y(s),u&&u.l(s),s.forEach(l),this.h()},h(){g(t,"class","buttons svelte-10bbby6")},m(e,s){p(e,t,s),n&&n.m(t,null),h(t,r),m&&m.m(t,null),h(t,o),u&&u.m(t,null),a=!0},p(e,s){e[5]?n?(n.p(e,s),32&s&&b(n,1)):(n=Q(e),n.c(),b(n,1),n.m(t,r)):n&&(P(),v(n,1,1,()=>{n=null}),$()),e[6]?m?(m.p(e,s),64&s&&b(m,1)):(m=Y(e),m.c(),b(m,1),m.m(t,o)):m&&(P(),v(m,1,1,()=>{m=null}),$()),e[7]?u?(u.p(e,s),128&s&&b(u,1)):(u=Z(e),u.c(),b(u,1),u.m(t,null)):u&&(P(),v(u,1,1,()=>{u=null}),$())},i(e){a||(b(n),b(m),b(u),a=!0)},o(e){v(n),v(m),v(u),a=!1},d(e){e&&l(t),n&&n.d(),m&&m.d(),u&&u.d()}}}function Q(e){let t;const r=new R({props:{href:e[5],$$slots:{default:[X]},$$scope:{ctx:e}}});return{c(){N(r.$$.fragment)},l(e){I(r.$$.fragment,e)},m(e,o){T(r,e,o),t=!0},p(e,t){const o={};32&t&&(o.href=e[5]),256&t&&(o.$$scope={dirty:t,ctx:e}),r.$set(o)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){M(r,e)}}}function X(e){let t;return{c(){t=a("GitHub")},l(e){t=n(e,"GitHub")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function Y(e){let t;const r=new R({props:{href:e[6],$$slots:{default:[K]},$$scope:{ctx:e}}});return{c(){N(r.$$.fragment)},l(e){I(r.$$.fragment,e)},m(e,o){T(r,e,o),t=!0},p(e,t){const o={};64&t&&(o.href=e[6]),256&t&&(o.$$scope={dirty:t,ctx:e}),r.$set(o)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){M(r,e)}}}function K(e){let t;return{c(){t=a("Site")},l(e){t=n(e,"Site")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function Z(e){let t;const r=new R({props:{href:e[7],$$slots:{default:[ee]},$$scope:{ctx:e}}});return{c(){N(r.$$.fragment)},l(e){I(r.$$.fragment,e)},m(e,o){T(r,e,o),t=!0},p(e,t){const o={};128&t&&(o.href=e[7]),256&t&&(o.$$scope={dirty:t,ctx:e}),r.$set(o)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){M(r,e)}}}function ee(e){let t;return{c(){t=a("Blog")},l(e){t=n(e,"Blog")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function te(e){let t,r,o,u,f,d,k,w,C,N=(e[4]||e[3])&&G(e),I=e[0]&&q(e),T=e[2]&&V(e),M=(e[5]||e[6]||e[7])&&z(e);return{c(){t=s("article"),N&&N.c(),r=S(),o=s("div"),u=s("h4"),f=a(e[1]),d=S(),I&&I.c(),k=S(),T&&T.c(),w=S(),M&&M.c(),this.h()},l(s){t=i(s,"ARTICLE",{class:!0});var a=c(t);N&&N.l(a),r=y(a),o=i(a,"DIV",{class:!0});var p=c(o);u=i(p,"H4",{class:!0});var h=c(u);f=n(h,e[1]),h.forEach(l),d=y(p),I&&I.l(p),k=y(p),T&&T.l(p),p.forEach(l),w=y(a),M&&M.l(a),a.forEach(l),this.h()},h(){g(u,"class","svelte-10bbby6"),g(o,"class","content svelte-10bbby6"),g(t,"class","svelte-10bbby6")},m(e,s){p(e,t,s),N&&N.m(t,null),h(t,r),h(t,o),h(o,u),h(u,f),h(o,d),I&&I.m(o,null),h(o,k),T&&T.m(o,null),h(t,w),M&&M.m(t,null),C=!0},p(e,[s]){e[4]||e[3]?N?N.p(e,s):(N=G(e),N.c(),N.m(t,r)):N&&(N.d(1),N=null),(!C||2&s)&&m(f,e[1]),e[0]?I?I.p(e,s):(I=q(e),I.c(),I.m(o,k)):I&&(I.d(1),I=null),e[2]?T?T.p(e,s):(T=V(e),T.c(),T.m(o,null)):T&&(T.d(1),T=null),e[5]||e[6]||e[7]?M?(M.p(e,s),224&s&&b(M,1)):(M=z(e),M.c(),b(M,1),M.m(t,null)):M&&(P(),v(M,1,1,()=>{M=null}),$())},i(e){C||(b(M),C=!0)},o(e){v(M),C=!1},d(e){e&&l(t),N&&N.d(),I&&I.d(),T&&T.d(),M&&M.d()}}}function re(e,t,r){let{title:o}=t,{description:s}=t,{image:a}=t,{preview:i}=t,{repo:c}=t,{site:n}=t,{blog:l}=t,{stack:p}=t;return"string"==typeof p&&(p=[p]),e.$set=e=>{"title"in e&&r(1,o=e.title),"description"in e&&r(2,s=e.description),"image"in e&&r(3,a=e.image),"preview"in e&&r(4,i=e.preview),"repo"in e&&r(5,c=e.repo),"site"in e&&r(6,n=e.site),"blog"in e&&r(7,l=e.blog),"stack"in e&&r(0,p=e.stack)},[p,o,s,a,i,c,n,l]}class oe extends t{constructor(e){super(),r(this,e,re,te,o,{title:1,description:2,image:3,preview:4,repo:5,site:6,blog:7,stack:0})}}var se=[{title:"Libraries / APIs",items:[{title:"facebook-messenger-puppeteer",stack:["Node.js","Puppeteer"],description:"API for Messenger Chat via Puppeteer",repo:"https://github.com/featherbear/facebook-messenger-puppeteer",blog:"https://featherbear.cc/blog/post/facebook-messenger-puppeteer/"},{title:"react-native-mifare-classic-wrapper",repo:"https://github.com/featherbear/react-native-mifare-classic-wrapper/",description:"Wrapper over the react-native-nfc-manager package to provide streamlined Mifare Classic functionality"},{title:"PreSonus StudioLive API",stack:["Node.js","Python"],repo:"https://github.com/featherbear/PreSonus-StudioLive-API",blog:"https://featherbear.cc/blog/post/presonus-studiolive-api/",description:"Exploring the PreSonus network control protocol from a StudioLive Series III"},{title:"fastify-slate",stack:"Node.js",repo:"https://github.com/featherbear/fastify-slate",description:"Slate documentation generator for Fastify"},{title:"node-ltc",repo:"https://github.com/featherbear/node-ltc",description:"Node.js Foreign Function Interface for libltc"}]},{title:"Security",items:[{title:"Project RATtata",repo:"https://github.com/featherbear/UNSW-COMP6441-RATtata",site:"https://featherbear.cc/UNSW-COMP6441-RATtata/",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/job-application/something_awesome/",preview:"https://featherbear.cc/UNSW-COMP6441-RATtata/",stack:["Node.js","Vue","Electron"],description:"Remote administration tool project for COMP6441"},{title:"Project Securitears",stack:["Python"],repo:"https://github.com/featherbear/UNSW-COMP6447-ass",site:"https://featherbear.github.io/UNSW-COMP6447-ass",preview:"https://featherbear.cc/UNSW-COMP6447-ass/",description:"Blackbox input fuzzer for COMP6447"},{title:"CSE x SecSoc CTF 2020",blog:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/",image:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/team.png",description:"Not actually a project, but an honourable mention. I came first in this CTF!"},{title:"UNSW COMP6443",site:"https://featherbear.cc/UNSW-COMP6443/",description:"Another honourable mention - I placed first in my university's Web Application Security and Testing course!"},{title:"UNSW CompClub 2019 CTF Server",stack:["Python","SQLite","JavaScript"],image:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/title_small.gif",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-CTF",site:"https://featherbear.cc/UNSW-CompClub2019Summer-CTF/",description:"Custom CTF server for UNSW CompClub"},{title:"Project CTF² (dev)",stack:["Node.js","Svelte","SQLite","MongoDB","NeutralinoJS"],image:"https://github.com/featherbear/CTF2-server-slate/raw/master/images/logo.png",repo:"https://github.com/featherbear/CTF2",description:"Custom Capture The Flag competition server"}]},{title:"Teaching Resources",items:[{title:"Learn C",description:"A primer to the C programming language",repo:"https://github.com/featherbear/learn-c/",site:"https://featherbear.cc/learn-c/"},{title:"Learn Data Structures and Algorithms",description:"A primer to common computer data structures and algorithms",repo:"https://github.com/featherbear/learn-data-structures-algorithms/",site:"https://featherbear.cc/learn-data-structures-algorithms/"},{title:"Learn System Internals",description:"A primer to how CPUs and Operating Systems work",repo:"https://github.com/featherbear/learn-system-internals/",site:"https://featherbear.cc/learn-system-internals/"},{title:"Python Proficiency",description:"Snippets of knowledge about Python",repo:"https://github.com/featherbear/learn-python-proficiency/",site:"https://featherbear.cc/learn-python-proficiency/"},{title:"JavaScript Proficiency",description:"Snippets of knowledge about JavaScript ",repo:"https://github.com/featherbear/learn-javascript-proficiency/",site:"https://featherbear.cc/learn-javascript-proficiency/"},{title:"Learn CSS - Hover Buttons",description:"Demonstration on the effects of the placement of the transition style attribute",image:"https://featherbear.cc/blog/post/hover-buttons/preview.png",blog:"https://featherbear.cc/blog/post/hover-buttons/",repo:"https://github.com/featherbear/hover-buttons",site:"https://featherbear.cc/hover-buttons/"},{title:"Image Steganography",description:"Workshop for secondary school students about LSB Image Steganography.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/steganography_preview.png",site:"https://docs.google.com/presentation/d/1kyRsC1-PMJu4UndE6psUHJHuTHX7W6cuYRod1jq3QJY/edit?usp=sharing",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/image_steganography"},{title:"HTTP(S) Security",description:"Presentation for secondary school students about the importance of HTTPS.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/https_preview.png",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/http_mitm",site:"https://docs.google.com/presentation/d/1ykIUm1xAKMforvTPeqvXMdC4DZlnWOg604ekaybhiOs/edit?usp=sharing"},{title:"Establishing P2P Connections over TCP",description:"An explanation of how a Peer to Peer connection is set up with a broker server and NAT Holepunching",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/http_mitm",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/something-awesome-research-connection/"}]},{title:"Client Work",items:[{title:"UNSW Scientia Signage",stack:["JavaScript"],image:"https://featherbear.cc/blog/post/unsw-scientia-signage/Snipaste_2019-12-09_19-33-07.png",blog:"https://featherbear.cc/blog/post/unsw-scientia-signage/",description:"SPA page to control PiSignage devices"},{title:"South-West Evangelical Church",preview:"https://swec.org.au",description:"Website and internal software development",site:"https://www.swec.org.au/"},{title:"RICE Movement",preview:"https://ricemovement.org",description:"Website and internal software development",site:"https://ricemovement.org/"}]},{title:"Sandbox",items:[{title:"Trello e-Paper Display",stack:["Python"],image:"https://featherbear.cc/blog/post/e-paper/20191211_221809.jpg",repo:"https://github.com/featherbear/trello-epd",blog:"https://featherbear.cc/blog/post/e-paper/",description:"Physical to-do list on an e-Paper display"},{title:"Filmstrip Messages",stack:["Svelte"],image:"https://featherbear.cc/blog/post/filmstrip-messages/preview.png",blog:"https://featherbear.cc/blog/post/filmstrip-messages/",site:"https://featherbear.cc/filmstrip-messages/",repo:"https://github.com/featherbear/filmstrip-messages",description:"Photostrip project to house a collection of photos, videos and text notes"},{title:"DeliveryTrack",stack:["JavaScript"],repo:"https://github.com/featherbear/deliverytrack",site:"https://featherbear.cc/deliverytrack/",image:"https://featherbear.cc/blog/post/delivery-track/preview.png",description:"Postal delivery tracking web application with synchronisation between devices"},{title:"Wardrobe",stack:["Svelte"],repo:"https://github.com/featherbear/wardrobe",site:"https://featherbear.cc/wardrobe/",preview:"https://featherbear.cc/wardrobe/",description:"A clothing-oriented photo organisation web application"},{title:"Twinkle Tiles",stack:["p5.js"],image:"https://featherbear.cc/blog/post/processing-twinkle/preview.apng",site:"https://featherbear.github.io/processing-twinkle/",repo:"https://github.com/featherbear/processing-twinkle",blog:"https://featherbear.cc/blog/post/processing-twinkle/"},{title:"Spit",stack:["TypeScript","Svelte"],site:"https://featherbear.cc/spit/",repo:"https://github.com/featherbear/spit",description:"Data massaging tool"},{title:"Wakey",stack:["Node.js","Svelte"],image:"https://featherbear.cc/blog/post/wakey/Snipaste_2020-11-16_22-37-12.png",blog:"https://featherbear.cc/blog/post/wakey/",repo:"https://github.com/featherbear/wakey",description:"Wake On LAN web application"},{title:"Go Links",stack:["JavaScript","Python"],blog:"https://featherbear.cc/blog/post/featherbear.cc-go/",repo:"https://github.com/featherbear/go-links",description:"Static link shortener service via GitHub Pages"},{title:"Templables (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/templables",description:"Form creation and collection framework"},{title:"Wyd? (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/wyd",description:"Public daily agenda"},{title:"Monosodium (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/monosodium",description:"Facebook Messenger client"}]},{title:"Multimedia",items:[{title:"Sound Mixer Simulator (dev)",site:"https://featherbear.cc/mixer/",repo:"https://github.com/featherbear/mixer/",stack:["React"],description:"Interactive teaching tool for the PreSonus StudioLive 16 Series III sound console"},{title:"ProPresenter Stage Display Messages",stack:["JavaScript"],site:"http://pp6sdm.apps.navhaxs.au.eu.org/",image:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/screenshot.png",blog:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/",repo:"https://github.com/featherbear/propresenter-stagemessages",description:"Remote stage message client for ProPresenter 6/7"},{title:"ProPresenter 6/7 OBS Scene Switcher",stack:["Node.js"],repo:"https://github.com/featherbear/propresenter-obs-scene-switcher",description:"Switch OBS scenes depending on the current ProPresenter content"},{title:"ProPresenter 6 Local Sync Tool",stack:["C#",".NET"],repo:"https://github.com/featherbear/propresenter-local-sync-tool",image:"https://raw.githubusercontent.com/featherbear/propresenter-local-sync-tool/master/logo.ico",description:"A buggy file synchronisation tool that's less buggy than ProPresenter 6's inbuilt one"},{title:"OnCue Projector",stack:["Python","Qt"],repo:"https://github.com/featherbear/OnCue",description:"Multimedia presentation software for seamless playback of content\nHSC Major Project"},{title:"BlueClick BLE",stack:["Arduino"],image:"https://featherbear.cc/blog/post/blueclick/logic-board/20201205_180608.jpg",blog:"https://featherbear.cc/blog/post/blueclick/",repo:"https://github.com/featherbear/BlueClick_BLE",description:"Page turner for OnSong, through sending MIDI notes over Bluetooth Low Energy"},{title:"NDI Streamer",stack:["C++"],blog:"https://featherbear.cc/blog/post/ndi-streamer/",repo:"https://github.com/featherbear/ndi-streamer",description:"Cross-platform display sharing over NDI. Intended for Linux, since Windows and Mac have the free official Scan Converter"},{title:"Talyte",stack:["C++","Arduino"],blog:"https://featherbear.cc/blog/post/talyte/",image:"https://featherbear.cc/blog/uploads/20210510_234112.jpg",repo:"https://github.com/featherbear/talyte/",description:"OBS tally light library / software"},{title:"Splitify",stack:["React","TypeScript"],image:"https://splitify.github.io/branding/banner/banner@72.png",site:"https://splitify.github.io",blog:"https://featherbear.cc/blog/post/splitify/",repo:"https://github.com/Splitify/",description:"Spotify playlist manager and creator. UNSW SENG4920 group project"},{title:"Bitfocus Companion: PreSonus StudioLive III Module",stack:["TypeScript"],blog:"https://featherbear.cc/blog/post/presonus-studiolive-api-ii/",repo:"https://github.com/featherbear/bitfocus-companion-module-presonus-studiolive-iii",description:"Integration of my PreSonus StudioLive III API for the Elgato Streamdeck, with the Bitfocus Companion software"},{title:"PreSonus StudioLive III Console Advertisement",stack:["C"],repo:"https://github.com/featherbear/presonus-studiolive-console-advertisement",description:"UDP discovery packet spoofer for communication between remote StudioLive III consoles"},{title:"Moone (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/moone",description:"Morning noticeboard for my bedroom TV"}]},{title:"Games",items:[{title:"Stacker Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_stack.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-stacker-game/",repo:"https://github.com/featherbear/p5-stacker-game/"},{title:"Queuer Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_queue.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-queuer-game/",repo:"https://github.com/featherbear/p5-queuer-game/"},{title:"Platformer Game",stack:["p5.js"],description:"A platformer 'game'\n(that I never really started)",repo:"https://github.com/featherbear/processing-platformer",site:"https://featherbear.cc/processing-platformer/"},{title:"Dungeon Game",stack:["Java","JavaFX"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2",blog:"https://featherbear.cc/UNSW-COMP2511/post/assign2/",image:"https://featherbear.cc/UNSW-COMP2511/post/assign2/demo.gif",description:"UNSW COMP2511 group project"},{title:"Dungeon Game (Text Edition)",stack:["Java","JNA"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/",blog:"https://featherbear.cc/blog/post/dungeon-console/",image:"https://raw.githubusercontent.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/master/demo_advanced.gif",description:"Alternative client for my UNSW COMP2511 group project"},{title:"Balloon Shooting Game",stack:["SmallBasic"],blog:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/",repo:"https://github.com/featherbear/smallbasic-balloon-shooting-game",image:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/animation.gif",description:"Making a game in Small Basic. Oh boy."},{title:"Whoops! There Goes My AI",stack:["Python","wxPython","OpenCV"],blog:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/",image:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/preview.apng",repo:"https://github.com/featherbear/Whoops-There-Goes-My-AI/",description:"Computer vision game automator"}]},{title:"Scripts and Misc",items:[{title:"zt.py",stack:["Python"],repo:"https://github.com/featherbear/zt.py",description:"CLI wrapper for ZeroTier Linux"},{title:"Netlify DDNS Updater",stack:["Python"],repo:"https://github.com/featherbear/netlify-ddns-updater",description:"Yet another DDNS updater for Netlify DNS"},{title:"Threes",stack:["Python"],repo:"https://github.com/featherbear/threes",blog:"https://featherbear.cc/blog/post/instagram-layouts-offsets-grids-code/",description:"Instagram 3 x n content spacer"}]}];function ae(e,t,r){const o=e.slice();return o[5]=t[r],o}function ie(e,t,r){const o=e.slice();return o[2]=t[r],o}function ce(e){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function ne(e){let t,r,o=e[1],s=[];for(let t=0;t<o.length;t+=1)s[t]=he(ie(e,o,t));const a=e=>v(s[e],1,1,()=>{s[e]=null});return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,o){for(let t=0;t<s.length;t+=1)s[t].m(e,o);p(e,t,o),r=!0},p(e,r){if(1&r){let i;for(o=e[1],i=0;i<o.length;i+=1){const a=ie(e,o,i);s[i]?(s[i].p(a,r),b(s[i],1)):(s[i]=he(a),s[i].c(),b(s[i],1),s[i].m(t.parentNode,t))}for(P(),i=o.length;i<s.length;i+=1)a(i);$()}},i(e){if(!r){for(let e=0;e<o.length;e+=1)b(s[e]);r=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)v(s[e]);r=!1},d(e){E(s,e),e&&l(t)}}}function le(e){let t;const r=new oe({props:{title:e[5].title,description:e[5].description,image:e[5].image,preview:e[5].preview,repo:e[5].repo,site:e[5].site,blog:e[5].blog,stack:e[5].stack}});return{c(){N(r.$$.fragment)},l(e){I(r.$$.fragment,e)},m(e,o){T(r,e,o),t=!0},p:A,i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){M(r,e)}}}function pe(e){let t,r,o=e[2].items&&function(e){let t,r,o=e[2].items,s=[];for(let t=0;t<o.length;t+=1)s[t]=le(ae(e,o,t));const a=e=>v(s[e],1,1,()=>{s[e]=null});return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,o){for(let t=0;t<s.length;t+=1)s[t].m(e,o);p(e,t,o),r=!0},p(e,r){if(1&r){let i;for(o=e[2].items,i=0;i<o.length;i+=1){const a=ae(e,o,i);s[i]?(s[i].p(a,r),b(s[i],1)):(s[i]=le(a),s[i].c(),b(s[i],1),s[i].m(t.parentNode,t))}for(P(),i=o.length;i<s.length;i+=1)a(i);$()}},i(e){if(!r){for(let e=0;e<o.length;e+=1)b(s[e]);r=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)v(s[e]);r=!1},d(e){E(s,e),e&&l(t)}}}(e);return{c(){o&&o.c(),t=S()},l(e){o&&o.l(e),t=y(e)},m(e,s){o&&o.m(e,s),p(e,t,s),r=!0},p(e,t){e[2].items&&o.p(e,t)},i(e){r||(b(o),r=!0)},o(e){v(o),r=!1},d(e){o&&o.d(e),e&&l(t)}}}function he(e){let t;const r=new B({props:{title:e[2].title,$$slots:{default:[pe]},$$scope:{ctx:e}}});return{c(){N(r.$$.fragment)},l(e){I(r.$$.fragment,e)},m(e,o){T(r,e,o),t=!0},p(e,t){const o={};256&t&&(o.$$scope={dirty:t,ctx:e}),r.$set(o)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){M(r,e)}}}function me(e){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function ge(e){let t,r,o,m,u,f,d,k,w,P,$,C,N,I,T,M,A={ctx:e,current:null,token:null,pending:me,then:ne,catch:ce,value:1,blocks:[,,,]};return W(w=e[0](),A),{c(){t=s("h4"),r=a("TL;DR"),o=S(),m=s("p"),u=a("My interest in programming lies in things related to security, multimedia, and\n  communication."),f=S(),d=s("hr"),k=S(),A.block.c(),P=S(),$=s("h4"),C=a("An invalid metric of my programming life"),N=S(),I=s("img"),this.h()},l(e){t=i(e,"H4",{});var s=c(t);r=n(s,"TL;DR"),s.forEach(l),o=y(e),m=i(e,"P",{});var a=c(m);u=n(a,"My interest in programming lies in things related to security, multimedia, and\n  communication."),a.forEach(l),f=y(e),d=i(e,"HR",{}),k=y(e),A.block.l(e),P=y(e),$=i(e,"H4",{});var p=c($);C=n(p,"An invalid metric of my programming life"),p.forEach(l),N=y(e),I=i(e,"IMG",{alt:!0,style:!0,src:!0}),this.h()},h(){g(I,"alt","github stats"),j(I,"width","100%"),j(I,"max-width","400px"),I.src!==(T="https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")&&g(I,"src","https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")},m(e,s){p(e,t,s),h(t,r),p(e,o,s),p(e,m,s),h(m,u),p(e,f,s),p(e,d,s),p(e,k,s),A.block.m(e,A.anchor=s),A.mount=()=>P.parentNode,A.anchor=P,p(e,P,s),p(e,$,s),h($,C),p(e,N,s),p(e,I,s),M=!0},p(t,[r]){{const o=(e=t).slice();o[1]=A.resolved,A.block.p(o,r)}},i(e){M||(b(A.block),M=!0)},o(e){for(let e=0;e<3;e+=1){const t=A.blocks[e];v(t)}M=!1},d(e){e&&l(t),e&&l(o),e&&l(m),e&&l(f),e&&l(d),e&&l(k),A.block.d(e),A.token=null,A=null,e&&l(P),e&&l($),e&&l(N),e&&l(I)}}}function ue(e){return[async function(){for(let e of se)e.items&&e.items.sort((e,t)=>{let r=!(!t.image&&!t.preview),o=!(!e.image&&!e.preview);return o!=r?r-o:t.title<e.title});return se}]}export default class extends t{constructor(e){super(),r(this,e,ue,ge,o,{})}}
