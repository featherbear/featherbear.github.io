import{C as e,S as t,i as r,s as o,e as s,m as a,a as i,b as c,p as n,d as l,g as p,h,D as g,f as b,u,t as m,E as f,F as d,j as v,k as y,n as S,y as k,G as w,H as P,I as C,c as $,l as N,o as I,r as T,v as M,J as W,q as A,K as D,B as j,L as x,z as E}from"./client.7077f2f1.js";function U(t,{delay:r=0,duration:o=400,easing:s=e}={}){const a=+getComputedStyle(t).opacity;return{delay:r,duration:o,easing:s,css:e=>"opacity: "+e*a}}function O(e){let t,r;return{c(){t=s("p"),r=a(e[2])},l(o){t=i(o,"P",{});var s=c(t);r=n(s,e[2]),s.forEach(l)},m(e,o){p(e,t,o),h(t,r)},p(e,t){4&t&&g(r,e[2])},d(e){e&&l(t)}}}function L(e){let t,r,o;const a=e[5].default,n=$(a,e,e[4],null);return{c(){t=s("div"),n&&n.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var r=c(t);n&&n.l(r),r.forEach(l),this.h()},h(){b(t,"class","svelte-13hjb2l")},m(e,r){p(e,t,r),n&&n.m(t,null),o=!0},p(e,t){n&&n.p&&(!o||16&t)&&u(n,a,e,e[4],t,null,null)},i(e){o||(m(n,e),e&&f(()=>{r||(r=d(t,U,{},!0)),r.run(1)}),o=!0)},o(e){v(n,e),e&&(r||(r=d(t,U,{},!1)),r.run(0)),o=!1},d(e){e&&l(t),n&&n.d(e),e&&r&&r.end()}}}function _(e){let t,r,o,u,f,d,$,N,I=e[2]&&O(e),T=e[0]&&L(e);return{c(){t=s("section"),r=s("h2"),o=a(e[1]),u=y(),I&&I.c(),f=y(),T&&T.c(),this.h()},l(s){t=i(s,"SECTION",{class:!0});var a=c(t);r=i(a,"H2",{class:!0});var p=c(r);o=n(p,e[1]),p.forEach(l),u=S(a),I&&I.l(a),f=S(a),T&&T.l(a),a.forEach(l),this.h()},h(){b(r,"class","svelte-13hjb2l"),k(r,"collapsible",e[3]),b(t,"class","svelte-13hjb2l")},m(s,a){p(s,t,a),h(t,r),h(r,o),h(t,u),I&&I.m(t,null),h(t,f),T&&T.m(t,null),d=!0,$||(N=w(r,"click",e[6]),$=!0)},p(e,[s]){(!d||2&s)&&g(o,e[1]),8&s&&k(r,"collapsible",e[3]),e[2]?I?I.p(e,s):(I=O(e),I.c(),I.m(t,f)):I&&(I.d(1),I=null),e[0]?T?(T.p(e,s),1&s&&m(T,1)):(T=L(e),T.c(),m(T,1),T.m(t,null)):T&&(P(),v(T,1,1,()=>{T=null}),C())},i(e){d||(m(T),d=!0)},o(e){v(T),d=!1},d(e){e&&l(t),I&&I.d(),T&&T.d(),$=!1,N()}}}function B(e,t,r){let{$$slots:o={},$$scope:s}=t,{title:a=""}=t,{description:i}=t,{collapsible:c=!0}=t,{opened:n=!0}=t;return e.$$set=e=>{"title"in e&&r(1,a=e.title),"description"in e&&r(2,i=e.description),"collapsible"in e&&r(3,c=e.collapsible),"opened"in e&&r(0,n=e.opened),"$$scope"in e&&r(4,s=e.$$scope)},[n,a,i,c,s,o,()=>{c&&r(0,n=!n)}]}class F extends t{constructor(e){super(),r(this,e,B,_,o,{title:1,description:2,collapsible:3,opened:0})}}function H(e){let t,r,o;const a=e[2].default,n=$(a,e,e[1],null);return{c(){t=s("a"),r=s("div"),n&&n.c(),this.h()},l(e){t=i(e,"A",{href:!0,rel:!0,class:!0});var o=c(t);r=i(o,"DIV",{class:!0});var s=c(r);n&&n.l(s),s.forEach(l),o.forEach(l),this.h()},h(){b(r,"class","svelte-312hfm"),b(t,"href",e[0]),b(t,"rel","prefetch"),b(t,"class","svelte-312hfm")},m(e,s){p(e,t,s),h(t,r),n&&n.m(r,null),o=!0},p(e,[r]){n&&n.p&&(!o||2&r)&&u(n,a,e,e[1],r,null,null),(!o||1&r)&&b(t,"href",e[0])},i(e){o||(m(n,e),o=!0)},o(e){v(n,e),o=!1},d(e){e&&l(t),n&&n.d(e)}}}function J(e,t,r){let{$$slots:o={},$$scope:s}=t,{href:a="#"}=t;return e.$$set=e=>{"href"in e&&r(0,a=e.href),"$$scope"in e&&r(1,s=e.$$scope)},[a,s,o]}class R extends t{constructor(e){super(),r(this,e,J,H,o,{href:0})}}function G(e){let t,r,o=e[4]&&q(e);return{c(){t=s("div"),o&&o.c(),this.h()},l(e){t=i(e,"DIV",{class:!0,style:!0});var r=c(t);o&&o.l(r),r.forEach(l),this.h()},h(){b(t,"class","preview svelte-10bbby6"),b(t,"style",r=e[3]?`background-image: url(${e[3]});`:"")},m(e,r){p(e,t,r),o&&o.m(t,null)},p(e,s){e[4]?o?o.p(e,s):(o=q(e),o.c(),o.m(t,null)):o&&(o.d(1),o=null),8&s&&r!==(r=e[3]?`background-image: url(${e[3]});`:"")&&b(t,"style",r)},d(e){e&&l(t),o&&o.d()}}}function q(e){let t,r;return{c(){t=s("iframe"),this.h()},l(e){t=i(e,"IFRAME",{src:!0,scrolling:!0,title:!0,sandbox:!0,class:!0}),c(t).forEach(l),this.h()},h(){t.src!==(r=e[4])&&b(t,"src",r),b(t,"scrolling","no"),b(t,"title","preview"),b(t,"sandbox","allow-scripts allow-same-origin"),b(t,"class","svelte-10bbby6")},m(e,r){p(e,t,r)},p(e,o){16&o&&t.src!==(r=e[4])&&b(t,"src",r)},d(e){e&&l(t)}}}function V(e){let t,r,o,u=e[0].join(", ")+"";return{c(){t=s("span"),r=a("Technology stack: "),o=a(u),this.h()},l(e){t=i(e,"SPAN",{class:!0});var s=c(t);r=n(s,"Technology stack: "),o=n(s,u),s.forEach(l),this.h()},h(){b(t,"class","svelte-10bbby6")},m(e,s){p(e,t,s),h(t,r),h(t,o)},p(e,t){1&t&&u!==(u=e[0].join(", ")+"")&&g(o,u)},d(e){e&&l(t)}}}function z(e){let t,r;return{c(){t=s("p"),r=a(e[2]),this.h()},l(o){t=i(o,"P",{class:!0});var s=c(t);r=n(s,e[2]),s.forEach(l),this.h()},h(){b(t,"class","svelte-10bbby6")},m(e,o){p(e,t,o),h(t,r)},p(e,t){4&t&&g(r,e[2])},d(e){e&&l(t)}}}function Q(e){let t,r,o,a,n=e[5]&&K(e),g=e[6]&&Y(e),u=e[7]&&ee(e);return{c(){t=s("div"),n&&n.c(),r=y(),g&&g.c(),o=y(),u&&u.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var s=c(t);n&&n.l(s),r=S(s),g&&g.l(s),o=S(s),u&&u.l(s),s.forEach(l),this.h()},h(){b(t,"class","buttons svelte-10bbby6")},m(e,s){p(e,t,s),n&&n.m(t,null),h(t,r),g&&g.m(t,null),h(t,o),u&&u.m(t,null),a=!0},p(e,s){e[5]?n?(n.p(e,s),32&s&&m(n,1)):(n=K(e),n.c(),m(n,1),n.m(t,r)):n&&(P(),v(n,1,1,()=>{n=null}),C()),e[6]?g?(g.p(e,s),64&s&&m(g,1)):(g=Y(e),g.c(),m(g,1),g.m(t,o)):g&&(P(),v(g,1,1,()=>{g=null}),C()),e[7]?u?(u.p(e,s),128&s&&m(u,1)):(u=ee(e),u.c(),m(u,1),u.m(t,null)):u&&(P(),v(u,1,1,()=>{u=null}),C())},i(e){a||(m(n),m(g),m(u),a=!0)},o(e){v(n),v(g),v(u),a=!1},d(e){e&&l(t),n&&n.d(),g&&g.d(),u&&u.d()}}}function K(e){let t,r;return t=new R({props:{href:e[5],$$slots:{default:[X]},$$scope:{ctx:e}}}),{c(){N(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){T(t,e,o),r=!0},p(e,r){const o={};32&r&&(o.href=e[5]),256&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function X(e){let t;return{c(){t=a("GitHub")},l(e){t=n(e,"GitHub")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function Y(e){let t,r;return t=new R({props:{href:e[6],$$slots:{default:[Z]},$$scope:{ctx:e}}}),{c(){N(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){T(t,e,o),r=!0},p(e,r){const o={};64&r&&(o.href=e[6]),256&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function Z(e){let t;return{c(){t=a("Site")},l(e){t=n(e,"Site")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function ee(e){let t,r;return t=new R({props:{href:e[7],$$slots:{default:[te]},$$scope:{ctx:e}}}),{c(){N(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){T(t,e,o),r=!0},p(e,r){const o={};128&r&&(o.href=e[7]),256&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function te(e){let t;return{c(){t=a("Blog")},l(e){t=n(e,"Blog")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function re(e){let t,r,o,u,f,d,k,w,$,N=(e[4]||e[3])&&G(e),I=e[0]&&V(e),T=e[2]&&z(e),M=(e[5]||e[6]||e[7])&&Q(e);return{c(){t=s("article"),N&&N.c(),r=y(),o=s("div"),u=s("h4"),f=a(e[1]),d=y(),I&&I.c(),k=y(),T&&T.c(),w=y(),M&&M.c(),this.h()},l(s){t=i(s,"ARTICLE",{class:!0});var a=c(t);N&&N.l(a),r=S(a),o=i(a,"DIV",{class:!0});var p=c(o);u=i(p,"H4",{class:!0});var h=c(u);f=n(h,e[1]),h.forEach(l),d=S(p),I&&I.l(p),k=S(p),T&&T.l(p),p.forEach(l),w=S(a),M&&M.l(a),a.forEach(l),this.h()},h(){b(u,"class","svelte-10bbby6"),b(o,"class","content svelte-10bbby6"),b(t,"class","svelte-10bbby6")},m(e,s){p(e,t,s),N&&N.m(t,null),h(t,r),h(t,o),h(o,u),h(u,f),h(o,d),I&&I.m(o,null),h(o,k),T&&T.m(o,null),h(t,w),M&&M.m(t,null),$=!0},p(e,[s]){e[4]||e[3]?N?N.p(e,s):(N=G(e),N.c(),N.m(t,r)):N&&(N.d(1),N=null),(!$||2&s)&&g(f,e[1]),e[0]?I?I.p(e,s):(I=V(e),I.c(),I.m(o,k)):I&&(I.d(1),I=null),e[2]?T?T.p(e,s):(T=z(e),T.c(),T.m(o,null)):T&&(T.d(1),T=null),e[5]||e[6]||e[7]?M?(M.p(e,s),224&s&&m(M,1)):(M=Q(e),M.c(),m(M,1),M.m(t,null)):M&&(P(),v(M,1,1,()=>{M=null}),C())},i(e){$||(m(M),$=!0)},o(e){v(M),$=!1},d(e){e&&l(t),N&&N.d(),I&&I.d(),T&&T.d(),M&&M.d()}}}function oe(e,t,r){let{title:o}=t,{description:s}=t,{image:a}=t,{preview:i}=t,{repo:c}=t,{site:n}=t,{blog:l}=t,{stack:p}=t;return"string"==typeof p&&(p=[p]),e.$$set=e=>{"title"in e&&r(1,o=e.title),"description"in e&&r(2,s=e.description),"image"in e&&r(3,a=e.image),"preview"in e&&r(4,i=e.preview),"repo"in e&&r(5,c=e.repo),"site"in e&&r(6,n=e.site),"blog"in e&&r(7,l=e.blog),"stack"in e&&r(0,p=e.stack)},[p,o,s,a,i,c,n,l]}class se extends t{constructor(e){super(),r(this,e,oe,re,o,{title:1,description:2,image:3,preview:4,repo:5,site:6,blog:7,stack:0})}}var ae=[{title:"Libraries / APIs",items:[{title:"facebook-messenger-puppeteer",stack:["Node.js","Puppeteer"],description:"API for Messenger Chat via Puppeteer",repo:"https://github.com/featherbear/facebook-messenger-puppeteer",blog:"https://featherbear.cc/blog/post/facebook-messenger-puppeteer/"},{title:"react-native-mifare-classic-wrapper",repo:"https://github.com/featherbear/react-native-mifare-classic-wrapper/",description:"Wrapper over the react-native-nfc-manager package to provide streamlined Mifare Classic functionality"},{title:"PreSonus StudioLive API",stack:["Node.js","Python"],repo:"https://github.com/featherbear/PreSonus-StudioLive-API",blog:"https://featherbear.cc/blog/post/presonus-studiolive-api/",description:"Exploring the PreSonus network control protocol from a StudioLive Series III"},{title:"fastify-slate",stack:["Node.js"],repo:"https://github.com/featherbear/fastify-slate",description:"Slate documentation generator for Fastify"},{title:"node-ltc",repo:"https://github.com/featherbear/node-ltc",description:"Node.js Foreign Function Interface for libltc",stack:["Node.js","ffi"]},{title:"flutter-ndi",repo:"https://github.com/featherbear/flutter-ndi",blog:"https://featherbear.cc/blog/post/andi-ndi-tools-for-android/",description:"Flutter bindings for the NewTek NDI SDK",stack:["Dart","ffi"]}]},{title:"Security",items:[{title:"Project RATtata",repo:"https://github.com/featherbear/UNSW-COMP6441-RATtata",site:"https://featherbear.cc/UNSW-COMP6441-RATtata/",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/job-application/something_awesome/",preview:"https://featherbear.cc/UNSW-COMP6441-RATtata/",stack:["Node.js","Vue","Electron"],description:"Remote administration tool project for COMP6441"},{title:"Project Securitears",stack:["Python"],repo:"https://github.com/featherbear/UNSW-COMP6447-ass",site:"https://featherbear.github.io/UNSW-COMP6447-ass",preview:"https://featherbear.cc/UNSW-COMP6447-ass/",description:"Blackbox input fuzzer for COMP6447"},{title:"CSE x SecSoc CTF 2021",blog:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2021/",image:"https://featherbear.cc/blog/uploads/screely-1627038994988.png",description:"Did another CTF and (unofficially) came first!"},{title:"CSE x SecSoc CTF 2020",blog:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/",image:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/team.png",description:"Not actually a project, but an honourable mention. I came first in this CTF!"},{title:"UNSW COMP6443",site:"https://featherbear.cc/UNSW-COMP6443/",description:"Another honourable mention - I placed first in my university's Web Application Security and Testing course! I was additionally a recipient of the CommBank Cyber Prize"},{title:"UNSW CompClub 2019 CTF Server",stack:["Python","SQLite","JavaScript"],image:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/title_small.gif",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-CTF",site:"https://featherbear.cc/UNSW-CompClub2019Summer-CTF/",description:"Custom CTF server for UNSW CompClub"},{title:"Project CTF² (dev)",stack:["Node.js","Svelte","SQLite","MongoDB","NeutralinoJS"],image:"https://github.com/featherbear/CTF2-server-slate/raw/master/images/logo.png",repo:"https://github.com/featherbear/CTF2",description:"Custom Capture The Flag competition server"}]},{title:"Teaching Resources",items:[{title:"Learn C",description:"A primer to the C programming language",repo:"https://github.com/featherbear/learn-c/",site:"https://featherbear.cc/learn-c/"},{title:"Learn Data Structures and Algorithms",description:"A primer to common computer data structures and algorithms",repo:"https://github.com/featherbear/learn-data-structures-algorithms/",site:"https://featherbear.cc/learn-data-structures-algorithms/"},{title:"Learn System Internals",description:"A primer to how CPUs and Operating Systems work",repo:"https://github.com/featherbear/learn-system-internals/",site:"https://featherbear.cc/learn-system-internals/"},{title:"Python Proficiency",description:"Snippets of knowledge about Python",repo:"https://github.com/featherbear/learn-python-proficiency/",site:"https://featherbear.cc/learn-python-proficiency/"},{title:"JavaScript Proficiency",description:"Snippets of knowledge about JavaScript ",repo:"https://github.com/featherbear/learn-javascript-proficiency/",site:"https://featherbear.cc/learn-javascript-proficiency/"},{title:"Learn CSS - Hover Buttons",description:"Demonstration on the effects of the placement of the transition style attribute",image:"https://featherbear.cc/blog/post/hover-buttons/preview.png",blog:"https://featherbear.cc/blog/post/hover-buttons/",repo:"https://github.com/featherbear/hover-buttons",site:"https://featherbear.cc/hover-buttons/"},{title:"Image Steganography",description:"Workshop for secondary school students about LSB Image Steganography.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/steganography_preview.png",site:"https://docs.google.com/presentation/d/1kyRsC1-PMJu4UndE6psUHJHuTHX7W6cuYRod1jq3QJY/edit?usp=sharing",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/image_steganography"},{title:"HTTP(S) Security",description:"Presentation for secondary school students about the importance of HTTPS.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/https_preview.png",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/http_mitm",site:"https://docs.google.com/presentation/d/1ykIUm1xAKMforvTPeqvXMdC4DZlnWOg604ekaybhiOs/edit?usp=sharing"},{title:"Establishing P2P Connections over TCP",description:"An explanation of how a Peer to Peer connection is set up with a broker server and NAT Holepunching",repo:"https://github.com/featherbear/Python-P2P-TCP-Example",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/something-awesome-research-connection/"},{title:"Learn Binary Security Assessment",description:"An introduction to software vulnerabilities, exploits and mitigations",repo:"https://github.com/featherbear/tutoring-unsw-21t2-cs6447",site:"https://featherbear.cc/tutoring-unsw-21t2-cs6447/"},{title:"Learn Web Security Assessment",description:"An introduction to web-related vulnerabilities, exploits and mitigations",repo:"https://github.com/featherbear/tutoring-unsw-21t2-cs6443-cs6843",site:"https://featherbear.cc/tutoring-unsw-21t2-cs6443-cs6843/"}]},{title:"Client Work",items:[{title:"UNSW Scientia Signage",stack:["JavaScript"],image:"https://featherbear.cc/blog/post/unsw-scientia-signage/Snipaste_2019-12-09_19-33-07.png",blog:"https://featherbear.cc/blog/post/unsw-scientia-signage/",description:"SPA page to control PiSignage devices"},{title:"South-West Evangelical Church",preview:"https://swec.org.au",description:"Website and internal software development",site:"https://www.swec.org.au/"},{title:"RICE Movement",preview:"https://ricemovement.org",description:"Website and internal software development",site:"https://ricemovement.org/"}]},{title:"Sandbox",items:[{title:"Trello e-Paper Display",stack:["Python"],image:"https://featherbear.cc/blog/post/e-paper/20191211_221809.jpg",repo:"https://github.com/featherbear/trello-epd",blog:"https://featherbear.cc/blog/post/e-paper/",description:"Physical to-do list on an e-Paper display"},{title:"Filmstrip Messages",stack:["Svelte"],image:"https://featherbear.cc/blog/post/filmstrip-messages/preview.png",blog:"https://featherbear.cc/blog/post/filmstrip-messages/",site:"https://featherbear.cc/filmstrip-messages/",repo:"https://github.com/featherbear/filmstrip-messages",description:"Photostrip project to house a collection of photos, videos and text notes"},{title:"DeliveryTrack",stack:["JavaScript"],repo:"https://github.com/featherbear/deliverytrack",site:"https://featherbear.cc/deliverytrack/",image:"https://featherbear.cc/blog/post/delivery-track/preview.png",description:"Postal delivery tracking web application with synchronisation between devices"},{title:"Wardrobe",stack:["Svelte"],repo:"https://github.com/featherbear/wardrobe",site:"https://featherbear.cc/wardrobe/",preview:"https://featherbear.cc/wardrobe/",description:"A clothing-oriented photo organisation web application"},{title:"Twinkle Tiles",stack:["p5.js"],image:"https://featherbear.cc/blog/post/processing-twinkle/preview.apng",site:"https://featherbear.github.io/processing-twinkle/",repo:"https://github.com/featherbear/processing-twinkle",blog:"https://featherbear.cc/blog/post/processing-twinkle/"},{title:"Spit",stack:["TypeScript","Svelte"],site:"https://featherbear.cc/spit/",repo:"https://github.com/featherbear/spit",description:"Data massaging tool"},{title:"Wakey",stack:["Node.js","Svelte"],image:"https://featherbear.cc/blog/post/wakey/Snipaste_2020-11-16_22-37-12.png",blog:"https://featherbear.cc/blog/post/wakey/",repo:"https://github.com/featherbear/wakey",description:"Wake On LAN web application"},{title:"Go Links",stack:["JavaScript","Python"],blog:"https://featherbear.cc/blog/post/featherbear.cc-go/",repo:"https://github.com/featherbear/go-links",description:"Static link shortener service via GitHub Pages"},{title:"Templables (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/templables",description:"Form creation and collection framework"},{title:"Wyd? (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/wyd",description:"Public daily agenda"},{title:"Monosodium (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/monosodium",description:"Facebook Messenger client"}]},{title:"Multimedia",items:[{title:"Sound Mixer Simulator (dev)",site:"https://featherbear.cc/mixer/",repo:"https://github.com/featherbear/mixer/",stack:["React"],description:"Interactive teaching tool for the PreSonus StudioLive 16 Series III sound console"},{title:"ProPresenter Stage Display Messages",stack:["JavaScript"],site:"http://pp6sdm.apps.navhaxs.au.eu.org/",image:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/screenshot.png",blog:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/",repo:"https://github.com/featherbear/propresenter-stagemessages",description:"Remote stage message client for ProPresenter 6/7"},{title:"ProPresenter 6/7 OBS Scene Switcher",stack:["Node.js"],repo:"https://github.com/featherbear/propresenter-obs-scene-switcher",description:"Switch OBS scenes depending on the current ProPresenter content"},{title:"ProPresenter 6 Local Sync Tool",stack:["C#",".NET"],repo:"https://github.com/featherbear/propresenter-local-sync-tool",image:"https://raw.githubusercontent.com/featherbear/propresenter-local-sync-tool/master/logo.ico",description:"A buggy file synchronisation tool that's less buggy than ProPresenter 6's inbuilt one"},{title:"OnCue Projector",stack:["Python","Qt"],repo:"https://github.com/featherbear/OnCue",description:"Multimedia presentation software for seamless playback of content\nHSC Major Project"},{title:"BlueClick BLE",stack:["Arduino"],image:"https://featherbear.cc/blog/post/blueclick/logic-board/20201205_180608.jpg",blog:"https://featherbear.cc/blog/post/blueclick/",repo:"https://github.com/featherbear/BlueClick_BLE",description:"Page turner for OnSong, through sending MIDI notes over Bluetooth Low Energy"},{title:"NDI Streamer",stack:["C++"],blog:"https://featherbear.cc/blog/post/ndi-streamer/",repo:"https://github.com/featherbear/ndi-streamer",description:"Cross-platform display sharing over NDI. Intended for Linux, since Windows and Mac have the free official Scan Converter"},{title:"Talyte",stack:["C++","Arduino"],blog:"https://featherbear.cc/blog/post/talyte/",image:"https://featherbear.cc/blog/uploads/20210510_234112.jpg",repo:"https://github.com/featherbear/talyte/",description:"OBS tally light library / software"},{title:"Splitify",stack:["React","TypeScript"],image:"https://splitify.github.io/branding/banner/banner@72.png",site:"https://splitify.github.io",blog:"https://featherbear.cc/blog/post/splitify/",repo:"https://github.com/Splitify/",description:"Spotify playlist manager and creator. UNSW SENG4920 group project"},{title:"Bitfocus Companion: PreSonus StudioLive III Module",stack:["TypeScript"],blog:"https://featherbear.cc/blog/post/presonus-studiolive-api-ii/",repo:"https://github.com/featherbear/bitfocus-companion-module-presonus-studiolive-iii",description:"Integration of my PreSonus StudioLive III API for the Elgato Streamdeck, with the Bitfocus Companion software"},{title:"PreSonus StudioLive III Console Advertisement",stack:["C"],repo:"https://github.com/featherbear/presonus-studiolive-console-advertisement",description:"UDP discovery packet spoofer for communication between remote StudioLive III consoles"},{title:"Moone (dev)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/moone",description:"Morning noticeboard for my bedroom TV"},{title:"aNDI",stack:["Flutter","Dart"],repo:"https://github.com/featherbear/aNDI",blog:"https://featherbear.cc/blog/post/andi-ndi-tools-for-android/",image:"https://featherbear.cc/blog/uploads/img_0047.JPG",description:"NDI Tools for Android"},{title:"NDI Telestrator",description:"Whiteboard annotation tool using NDI",stack:["C#"],repo:"https://github.com/featherbear/NDI-Telestrator",blog:"https://featherbear.cc/blog/post/ndi-telestrator/"}]},{title:"Games",items:[{title:"Stacker Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_stack.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-stacker-game/",repo:"https://github.com/featherbear/p5-stacker-game/"},{title:"Queuer Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_queue.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-queuer-game/",repo:"https://github.com/featherbear/p5-queuer-game/"},{title:"Platformer Game",stack:["p5.js"],description:"A platformer 'game'\n(that I never really started)",repo:"https://github.com/featherbear/processing-platformer",site:"https://featherbear.cc/processing-platformer/"},{title:"Dungeon Game",stack:["Java","JavaFX"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2",blog:"https://featherbear.cc/UNSW-COMP2511/post/assign2/",image:"https://featherbear.cc/UNSW-COMP2511/post/assign2/demo.gif",description:"UNSW COMP2511 group project"},{title:"Dungeon Game (Text Edition)",stack:["Java","JNA"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/",blog:"https://featherbear.cc/blog/post/dungeon-console/",image:"https://raw.githubusercontent.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/master/demo_advanced.gif",description:"Alternative client for my UNSW COMP2511 group project"},{title:"Balloon Shooting Game",stack:["SmallBasic"],blog:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/",repo:"https://github.com/featherbear/smallbasic-balloon-shooting-game",image:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/animation.gif",description:"Making a game in Small Basic. Oh boy."},{title:"Whoops! There Goes My AI",stack:["Python","wxPython","OpenCV"],blog:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/",image:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/preview.apng",repo:"https://github.com/featherbear/Whoops-There-Goes-My-AI/",description:"Computer vision game automator"}]},{title:"Scripts and Misc",items:[{title:"zt.py",stack:["Python"],repo:"https://github.com/featherbear/zt.py",description:"CLI wrapper for ZeroTier Linux"},{title:"Netlify DDNS Updater",stack:["Python"],repo:"https://github.com/featherbear/netlify-ddns-updater",description:"Yet another DDNS updater for Netlify DNS"},{title:"Threes",stack:["Python"],repo:"https://github.com/featherbear/threes",blog:"https://featherbear.cc/blog/post/instagram-layouts-offsets-grids-code/",description:"Instagram 3 x n content spacer"},{title:"Facebook Marketplace Helper",stack:["JavaScript"],repo:"https://github.com/featherbear/facebook-marketplace-helper",blog:"https://featherbear.cc/blog/post/facebook-marketplace-helper-script",description:"Remove sponsored ads and mark previously viewed classified listings"}]}];function ie(e,t,r){const o=e.slice();return o[2]=t[r],o}function ce(e,t,r){const o=e.slice();return o[5]=t[r],o}function ne(e){return{c:j,l:j,m:j,p:j,i:j,o:j,d:j}}function le(e){let t,r,o=e[1],s=[];for(let t=0;t<o.length;t+=1)s[t]=ge(ie(e,o,t));const a=e=>v(s[e],1,1,()=>{s[e]=null});return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,o){for(let t=0;t<s.length;t+=1)s[t].m(e,o);p(e,t,o),r=!0},p(e,r){if(1&r){let i;for(o=e[1],i=0;i<o.length;i+=1){const a=ie(e,o,i);s[i]?(s[i].p(a,r),m(s[i],1)):(s[i]=ge(a),s[i].c(),m(s[i],1),s[i].m(t.parentNode,t))}for(P(),i=o.length;i<s.length;i+=1)a(i);C()}},i(e){if(!r){for(let e=0;e<o.length;e+=1)m(s[e]);r=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)v(s[e]);r=!1},d(e){E(s,e),e&&l(t)}}}function pe(e){let t,r;return t=new se({props:{title:e[5].title,description:e[5].description,image:e[5].image,preview:e[5].preview,repo:e[5].repo,site:e[5].site,blog:e[5].blog,stack:e[5].stack}}),{c(){N(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){T(t,e,o),r=!0},p:j,i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function he(e){let t,r,o=e[2].items&&function(e){let t,r,o=e[2].items,s=[];for(let t=0;t<o.length;t+=1)s[t]=pe(ce(e,o,t));const a=e=>v(s[e],1,1,()=>{s[e]=null});return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,o){for(let t=0;t<s.length;t+=1)s[t].m(e,o);p(e,t,o),r=!0},p(e,r){if(1&r){let i;for(o=e[2].items,i=0;i<o.length;i+=1){const a=ce(e,o,i);s[i]?(s[i].p(a,r),m(s[i],1)):(s[i]=pe(a),s[i].c(),m(s[i],1),s[i].m(t.parentNode,t))}for(P(),i=o.length;i<s.length;i+=1)a(i);C()}},i(e){if(!r){for(let e=0;e<o.length;e+=1)m(s[e]);r=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)v(s[e]);r=!1},d(e){E(s,e),e&&l(t)}}}(e);return{c(){o&&o.c(),t=y()},l(e){o&&o.l(e),t=S(e)},m(e,s){o&&o.m(e,s),p(e,t,s),r=!0},p(e,t){e[2].items&&o.p(e,t)},i(e){r||(m(o),r=!0)},o(e){v(o),r=!1},d(e){o&&o.d(e),e&&l(t)}}}function ge(e){let t,r;return t=new F({props:{title:e[2].title,$$slots:{default:[he]},$$scope:{ctx:e}}}),{c(){N(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,o){T(t,e,o),r=!0},p(e,r){const o={};256&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function be(e){return{c:j,l:j,m:j,p:j,i:j,o:j,d:j}}function ue(e){let t,r,o,g,u,f,d,k,w,P,C,$,N,I,T,M={ctx:e,current:null,token:null,hasCatch:!1,pending:be,then:le,catch:ne,value:1,blocks:[,,,]};return W(e[0](),M),{c(){t=s("h4"),r=a("TL;DR"),o=y(),g=s("p"),u=a("My interest in programming lies in things related to security, multimedia, and\n  communication."),f=y(),d=s("hr"),k=y(),M.block.c(),w=y(),P=s("h4"),C=a("An invalid metric of my programming life"),$=y(),N=s("img"),this.h()},l(e){t=i(e,"H4",{});var s=c(t);r=n(s,"TL;DR"),s.forEach(l),o=S(e),g=i(e,"P",{});var a=c(g);u=n(a,"My interest in programming lies in things related to security, multimedia, and\n  communication."),a.forEach(l),f=S(e),d=i(e,"HR",{}),k=S(e),M.block.l(e),w=S(e),P=i(e,"H4",{});var p=c(P);C=n(p,"An invalid metric of my programming life"),p.forEach(l),$=S(e),N=i(e,"IMG",{alt:!0,style:!0,src:!0}),this.h()},h(){b(N,"alt","github stats"),A(N,"width","100%"),A(N,"max-width","400px"),N.src!==(I="https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")&&b(N,"src","https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")},m(e,s){p(e,t,s),h(t,r),p(e,o,s),p(e,g,s),h(g,u),p(e,f,s),p(e,d,s),p(e,k,s),M.block.m(e,M.anchor=s),M.mount=()=>w.parentNode,M.anchor=w,p(e,w,s),p(e,P,s),h(P,C),p(e,$,s),p(e,N,s),T=!0},p(t,[r]){D(M,e=t,r)},i(e){T||(m(M.block),T=!0)},o(e){for(let e=0;e<3;e+=1){const t=M.blocks[e];v(t)}T=!1},d(e){e&&l(t),e&&l(o),e&&l(g),e&&l(f),e&&l(d),e&&l(k),M.block.d(e),M.token=null,M=null,e&&l(w),e&&l(P),e&&l($),e&&l(N)}}}function me(e){return[async function(){for(let e of ae)e.items&&e.items.sort((e,t)=>{let r=!(!t.image&&!t.preview),o=!(!e.image&&!e.preview);return o!=r?r-o:t.title<e.title});return ae}]}export default class extends t{constructor(e){super(),r(this,e,me,ue,o,{})}}
