import{H as e,S as t,i as r,s as o,e as s,m as a,a as i,b as c,p as n,d as l,g as p,h,I as g,f as b,u,t as m,J as f,K as d,j as v,k as y,n as S,y as k,L as w,F as P,G as C,c as $,l as I,o as N,r as A,v as T,B as W,q as x,E as M,A as j,C as _,z as D}from"./client.5a0d7082.js";function E(t,{delay:r=0,duration:o=400,easing:s=e}={}){const a=+getComputedStyle(t).opacity;return{delay:r,duration:o,easing:s,css:e=>"opacity: "+e*a}}function U(e){let t,r;return{c(){t=s("p"),r=a(e[2])},l(o){t=i(o,"P",{});var s=c(t);r=n(s,e[2]),s.forEach(l)},m(e,o){p(e,t,o),h(t,r)},p(e,t){4&t&&g(r,e[2])},d(e){e&&l(t)}}}function O(e){let t,r,o;const a=e[5].default,n=$(a,e,e[4],null);return{c(){t=s("div"),n&&n.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var r=c(t);n&&n.l(r),r.forEach(l),this.h()},h(){b(t,"class","svelte-11sfw7x")},m(e,r){p(e,t,r),n&&n.m(t,null),o=!0},p(e,t){n&&n.p&&(!o||16&t)&&u(n,a,e,e[4],t,null,null)},i(e){o||(m(n,e),e&&f(()=>{r||(r=d(t,E,{},!0)),r.run(1)}),o=!0)},o(e){v(n,e),e&&(r||(r=d(t,E,{},!1)),r.run(0)),o=!1},d(e){e&&l(t),n&&n.d(e),e&&r&&r.end()}}}function L(e){let t,r,o,u,f,d,$,I,N=e[2]&&U(e),A=e[0]&&O(e);return{c(){t=s("section"),r=s("h2"),o=a(e[1]),u=y(),N&&N.c(),f=y(),A&&A.c(),this.h()},l(s){t=i(s,"SECTION",{class:!0});var a=c(t);r=i(a,"H2",{class:!0});var p=c(r);o=n(p,e[1]),p.forEach(l),u=S(a),N&&N.l(a),f=S(a),A&&A.l(a),a.forEach(l),this.h()},h(){b(r,"class","svelte-11sfw7x"),k(r,"collapsible",e[3]),b(t,"class","svelte-11sfw7x")},m(s,a){p(s,t,a),h(t,r),h(r,o),h(t,u),N&&N.m(t,null),h(t,f),A&&A.m(t,null),d=!0,$||(I=w(r,"click",e[6]),$=!0)},p(e,[s]){(!d||2&s)&&g(o,e[1]),8&s&&k(r,"collapsible",e[3]),e[2]?N?N.p(e,s):(N=U(e),N.c(),N.m(t,f)):N&&(N.d(1),N=null),e[0]?A?(A.p(e,s),1&s&&m(A,1)):(A=O(e),A.c(),m(A,1),A.m(t,null)):A&&(P(),v(A,1,1,()=>{A=null}),C())},i(e){d||(m(A),d=!0)},o(e){v(A),d=!1},d(e){e&&l(t),N&&N.d(),A&&A.d(),$=!1,I()}}}function F(e,t,r){let{$$slots:o={},$$scope:s}=t,{title:a=""}=t,{description:i}=t,{collapsible:c=!0}=t,{opened:n=!0}=t;return e.$$set=e=>{"title"in e&&r(1,a=e.title),"description"in e&&r(2,i=e.description),"collapsible"in e&&r(3,c=e.collapsible),"opened"in e&&r(0,n=e.opened),"$$scope"in e&&r(4,s=e.$$scope)},[n,a,i,c,s,o,()=>{c&&r(0,n=!n)}]}class B extends t{constructor(e){super(),r(this,e,F,L,o,{title:1,description:2,collapsible:3,opened:0})}}function H(e){let t,r,o;const a=e[2].default,n=$(a,e,e[1],null);return{c(){t=s("a"),r=s("div"),n&&n.c(),this.h()},l(e){t=i(e,"A",{href:!0,rel:!0,class:!0});var o=c(t);r=i(o,"DIV",{class:!0});var s=c(r);n&&n.l(s),s.forEach(l),o.forEach(l),this.h()},h(){b(r,"class","svelte-312hfm"),b(t,"href",e[0]),b(t,"rel","prefetch"),b(t,"class","svelte-312hfm")},m(e,s){p(e,t,s),h(t,r),n&&n.m(r,null),o=!0},p(e,[r]){n&&n.p&&(!o||2&r)&&u(n,a,e,e[1],r,null,null),(!o||1&r)&&b(t,"href",e[0])},i(e){o||(m(n,e),o=!0)},o(e){v(n,e),o=!1},d(e){e&&l(t),n&&n.d(e)}}}function R(e,t,r){let{$$slots:o={},$$scope:s}=t,{href:a="#"}=t;return e.$$set=e=>{"href"in e&&r(0,a=e.href),"$$scope"in e&&r(1,s=e.$$scope)},[a,s,o]}class G extends t{constructor(e){super(),r(this,e,R,H,o,{href:0})}}function J(e){let t,r,o=e[4]&&q(e);return{c(){t=s("div"),o&&o.c(),this.h()},l(e){t=i(e,"DIV",{class:!0,style:!0});var r=c(t);o&&o.l(r),r.forEach(l),this.h()},h(){b(t,"class","preview svelte-10bbby6"),b(t,"style",r=e[3]?`background-image: url(${e[3]});`:"")},m(e,r){p(e,t,r),o&&o.m(t,null)},p(e,s){e[4]?o?o.p(e,s):(o=q(e),o.c(),o.m(t,null)):o&&(o.d(1),o=null),8&s&&r!==(r=e[3]?`background-image: url(${e[3]});`:"")&&b(t,"style",r)},d(e){e&&l(t),o&&o.d()}}}function q(e){let t,r;return{c(){t=s("iframe"),this.h()},l(e){t=i(e,"IFRAME",{src:!0,scrolling:!0,title:!0,sandbox:!0,class:!0}),c(t).forEach(l),this.h()},h(){t.src!==(r=e[4])&&b(t,"src",r),b(t,"scrolling","no"),b(t,"title","preview"),b(t,"sandbox","allow-scripts allow-same-origin"),b(t,"class","svelte-10bbby6")},m(e,r){p(e,t,r)},p(e,o){16&o&&t.src!==(r=e[4])&&b(t,"src",r)},d(e){e&&l(t)}}}function V(e){let t,r,o,u=e[0].join(", ")+"";return{c(){t=s("span"),r=a("Technology stack: "),o=a(u),this.h()},l(e){t=i(e,"SPAN",{class:!0});var s=c(t);r=n(s,"Technology stack: "),o=n(s,u),s.forEach(l),this.h()},h(){b(t,"class","svelte-10bbby6")},m(e,s){p(e,t,s),h(t,r),h(t,o)},p(e,t){1&t&&u!==(u=e[0].join(", ")+"")&&g(o,u)},d(e){e&&l(t)}}}function z(e){let t,r;return{c(){t=s("p"),r=a(e[2]),this.h()},l(o){t=i(o,"P",{class:!0});var s=c(t);r=n(s,e[2]),s.forEach(l),this.h()},h(){b(t,"class","svelte-10bbby6")},m(e,o){p(e,t,o),h(t,r)},p(e,t){4&t&&g(r,e[2])},d(e){e&&l(t)}}}function Q(e){let t,r,o,a,n=e[5]&&Y(e),g=e[6]&&K(e),u=e[7]&&ee(e);return{c(){t=s("div"),n&&n.c(),r=y(),g&&g.c(),o=y(),u&&u.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var s=c(t);n&&n.l(s),r=S(s),g&&g.l(s),o=S(s),u&&u.l(s),s.forEach(l),this.h()},h(){b(t,"class","buttons svelte-10bbby6")},m(e,s){p(e,t,s),n&&n.m(t,null),h(t,r),g&&g.m(t,null),h(t,o),u&&u.m(t,null),a=!0},p(e,s){e[5]?n?(n.p(e,s),32&s&&m(n,1)):(n=Y(e),n.c(),m(n,1),n.m(t,r)):n&&(P(),v(n,1,1,()=>{n=null}),C()),e[6]?g?(g.p(e,s),64&s&&m(g,1)):(g=K(e),g.c(),m(g,1),g.m(t,o)):g&&(P(),v(g,1,1,()=>{g=null}),C()),e[7]?u?(u.p(e,s),128&s&&m(u,1)):(u=ee(e),u.c(),m(u,1),u.m(t,null)):u&&(P(),v(u,1,1,()=>{u=null}),C())},i(e){a||(m(n),m(g),m(u),a=!0)},o(e){v(n),v(g),v(u),a=!1},d(e){e&&l(t),n&&n.d(),g&&g.d(),u&&u.d()}}}function Y(e){let t,r;return t=new G({props:{href:e[5],$$slots:{default:[Z]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){A(t,e,o),r=!0},p(e,r){const o={};32&r&&(o.href=e[5]),256&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function Z(e){let t;return{c(){t=a("GitHub")},l(e){t=n(e,"GitHub")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function K(e){let t,r;return t=new G({props:{href:e[6],$$slots:{default:[X]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){A(t,e,o),r=!0},p(e,r){const o={};64&r&&(o.href=e[6]),256&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function X(e){let t;return{c(){t=a("Site")},l(e){t=n(e,"Site")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function ee(e){let t,r;return t=new G({props:{href:e[7],$$slots:{default:[te]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){A(t,e,o),r=!0},p(e,r){const o={};128&r&&(o.href=e[7]),256&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function te(e){let t;return{c(){t=a("Blog")},l(e){t=n(e,"Blog")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function re(e){let t,r,o,u,f,d,k,w,$,I=(e[4]||e[3])&&J(e),N=e[0]&&V(e),A=e[2]&&z(e),T=(e[5]||e[6]||e[7])&&Q(e);return{c(){t=s("article"),I&&I.c(),r=y(),o=s("div"),u=s("h4"),f=a(e[1]),d=y(),N&&N.c(),k=y(),A&&A.c(),w=y(),T&&T.c(),this.h()},l(s){t=i(s,"ARTICLE",{class:!0});var a=c(t);I&&I.l(a),r=S(a),o=i(a,"DIV",{class:!0});var p=c(o);u=i(p,"H4",{class:!0});var h=c(u);f=n(h,e[1]),h.forEach(l),d=S(p),N&&N.l(p),k=S(p),A&&A.l(p),p.forEach(l),w=S(a),T&&T.l(a),a.forEach(l),this.h()},h(){b(u,"class","svelte-10bbby6"),b(o,"class","content svelte-10bbby6"),b(t,"class","svelte-10bbby6")},m(e,s){p(e,t,s),I&&I.m(t,null),h(t,r),h(t,o),h(o,u),h(u,f),h(o,d),N&&N.m(o,null),h(o,k),A&&A.m(o,null),h(t,w),T&&T.m(t,null),$=!0},p(e,[s]){e[4]||e[3]?I?I.p(e,s):(I=J(e),I.c(),I.m(t,r)):I&&(I.d(1),I=null),(!$||2&s)&&g(f,e[1]),e[0]?N?N.p(e,s):(N=V(e),N.c(),N.m(o,k)):N&&(N.d(1),N=null),e[2]?A?A.p(e,s):(A=z(e),A.c(),A.m(o,null)):A&&(A.d(1),A=null),e[5]||e[6]||e[7]?T?(T.p(e,s),224&s&&m(T,1)):(T=Q(e),T.c(),m(T,1),T.m(t,null)):T&&(P(),v(T,1,1,()=>{T=null}),C())},i(e){$||(m(T),$=!0)},o(e){v(T),$=!1},d(e){e&&l(t),I&&I.d(),N&&N.d(),A&&A.d(),T&&T.d()}}}function oe(e,t,r){let{title:o}=t,{description:s}=t,{image:a}=t,{preview:i}=t,{repo:c}=t,{site:n}=t,{blog:l}=t,{stack:p}=t;return"string"==typeof p&&(p=[p]),e.$$set=e=>{"title"in e&&r(1,o=e.title),"description"in e&&r(2,s=e.description),"image"in e&&r(3,a=e.image),"preview"in e&&r(4,i=e.preview),"repo"in e&&r(5,c=e.repo),"site"in e&&r(6,n=e.site),"blog"in e&&r(7,l=e.blog),"stack"in e&&r(0,p=e.stack)},[p,o,s,a,i,c,n,l]}class se extends t{constructor(e){super(),r(this,e,oe,re,o,{title:1,description:2,image:3,preview:4,repo:5,site:6,blog:7,stack:0})}}var ae=[{title:"Libraries / APIs",items:[{title:"facebook-messenger-puppeteer",stack:["Node.js","Puppeteer"],description:"A Node.js Puppeteer API for user-mode interaction on Facebook Messenger Chat",repo:"https://github.com/featherbear/facebook-messenger-puppeteer",blog:"https://featherbear.cc/blog/post/facebook-messenger-puppeteer/"},{title:"react-native-mifare-classic-wrapper",repo:"https://github.com/featherbear/react-native-mifare-classic-wrapper/",description:"A wrapper over the react-native-nfc-manager package to provide streamlined Mifare Classic functionality"},{title:"PreSonus StudioLive API",stack:["Node.js","Python"],repo:"https://github.com/featherbear/PreSonus-StudioLive-API",blog:"https://featherbear.cc/blog/post/presonus-studiolive-api/",description:"Reverse engineered PreSonus network control protocol for the StudioLive Series III product family",image:"https://featherbear.cc/blog/post/presonus-studiolive-api/20190513_174229.jpg"},{title:"fastify-slate",stack:["Node.js"],repo:"https://github.com/featherbear/fastify-slate",description:"Slate API document generator for Fastify framework routes"},{title:"node-ltc",repo:"https://github.com/featherbear/node-ltc",description:"Node.js Foreign Function Interface for the libltc package",stack:["Node.js","ffi"]},{title:"flutter-ndi",repo:"https://github.com/featherbear/flutter-ndi",blog:"https://featherbear.cc/blog/post/andi-ndi-tools-for-android/",description:"Flutter Foreign Function Interface bindings for the NewTek NDI SDK",stack:["Dart","ffi"]}]},{title:"Security",items:[{title:"Project RATtata",repo:"https://github.com/featherbear/UNSW-COMP6441-RATtata",site:"https://featherbear.cc/UNSW-COMP6441-RATtata/",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/job-application/something_awesome/",preview:"https://featherbear.cc/UNSW-COMP6441-RATtata/",stack:["Node.js","Vue","Electron"],description:"A remote administration tool project for the UNSW COMP6441 course."},{title:"Project Securitears",stack:["Python"],repo:"https://github.com/featherbear/UNSW-COMP6447-ass",site:"https://featherbear.github.io/UNSW-COMP6447-ass",preview:"https://featherbear.cc/UNSW-COMP6447-ass/",description:"A blackbox binary application input fuzzer for the UNSW COMP6447 course."},{title:"CSE x SecSoc CTF 2020",blog:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/",image:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/team.png",description:"Not actually a project, but an honourable mention. I came first in this CTF!"},{title:"CSE x SecSoc CTF 2021",blog:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2021/",image:"https://featherbear.cc/blog/uploads/screely-1627038994988.png",description:"Did another CTF and (unofficially) came first!"},{title:"UNSW COMP6443",site:"https://featherbear.cc/UNSW-COMP6443/",description:"Another honourable mention - I placed first in my university's Web Application Security and Testing course! I was additionally a recipient of the CommBank Cyber Prize",image:"https://featherbear.cc/blog/uploads/1625470416790.jpg"},{title:"UNSW CompClub 2019 CTF Server",stack:["Python","SQLite","JavaScript"],image:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/title_small.gif",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-CTF",site:"https://featherbear.cc/UNSW-CompClub2019Summer-CTF/",description:"A custom Capture The Flag server written for UNSW CompClub.\nAdopted by CSESoc, and has also been used externally"},{title:"Project CTF² (WIP)",stack:["Node.js","Svelte","SQLite","MongoDB","NeutralinoJS"],image:"https://github.com/featherbear/CTF2-server-slate/raw/master/images/logo.png",repo:"https://github.com/featherbear/CTF2",description:"A remake of my original Capture The Flag server"}]},{title:"Teaching Resources",items:[{title:"Learn C",description:"A primer to the C programming language",repo:"https://github.com/featherbear/learn-c/",site:"https://featherbear.cc/learn-c/"},{title:"Learn System Internals",description:"A primer to how CPUs and Operating Systems work",repo:"https://github.com/featherbear/learn-system-internals/",site:"https://featherbear.cc/learn-system-internals/"},{title:"Python Proficiency",description:"Snippets of knowledge about Python",repo:"https://github.com/featherbear/learn-python-proficiency/",site:"https://featherbear.cc/learn-python-proficiency/"},{title:"Learn CSS - Hover Buttons",description:"Demonstration on the effects of the placement of the transition style attribute",image:"https://featherbear.cc/blog/post/hover-buttons/preview.png",blog:"https://featherbear.cc/blog/post/hover-buttons/",repo:"https://github.com/featherbear/hover-buttons",site:"https://featherbear.cc/hover-buttons/"},{title:"Image Steganography",description:"Workshop for secondary school students about LSB Image Steganography.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/steganography_preview.png",site:"https://docs.google.com/presentation/d/1kyRsC1-PMJu4UndE6psUHJHuTHX7W6cuYRod1jq3QJY/edit?usp=sharing",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/image_steganography"},{title:"HTTP(S) Security",description:"Presentation for secondary school students about the importance of HTTPS.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/https_preview.png",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/http_mitm",site:"https://docs.google.com/presentation/d/1ykIUm1xAKMforvTPeqvXMdC4DZlnWOg604ekaybhiOs/edit?usp=sharing"},{title:"Establishing P2P Connections over TCP",description:"An explanation of how a Peer to Peer connection is set up with a broker server and NAT Holepunching",repo:"https://github.com/featherbear/Python-P2P-TCP-Example",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/something-awesome-research-connection/"},{title:"Learn Binary Security Assessment",description:"An introduction to software vulnerabilities, exploits and mitigations",repo:"https://github.com/featherbear/tutoring-unsw-21t2-cs6447",site:"https://featherbear.cc/tutoring-unsw-21t2-cs6447/"},{title:"Learn Web Security Assessment",description:"An introduction to web-related vulnerabilities, exploits and mitigations",repo:"https://github.com/featherbear/tutoring-unsw-21t2-cs6443-cs6843",site:"https://featherbear.cc/tutoring-unsw-21t2-cs6443-cs6843/"}]},{title:"Client Work",items:[{title:"UNSW Scientia Signage",stack:["JavaScript"],image:"https://featherbear.cc/blog/post/unsw-scientia-signage/Snipaste_2019-12-09_19-33-07.png",blog:"https://featherbear.cc/blog/post/unsw-scientia-signage/",description:"An SPA to easily manage and control multiple PiSignage devices"},{title:"South-West Evangelical Church",preview:"https://swec.org.au",description:"Website and internal software development",site:"https://www.swec.org.au/"},{title:"RICE Movement",preview:"https://ricemovement.org",description:"Website and internal software development",site:"https://ricemovement.org/"}]},{title:"Sandbox",items:[{title:"Trello e-Paper Display",stack:["Python"],image:"https://featherbear.cc/blog/post/e-paper/20191211_221809.jpg",repo:"https://github.com/featherbear/trello-epd",blog:"https://featherbear.cc/blog/post/e-paper/",description:"A physical todo list on an e-Paper display"},{title:"Filmstrip Messages",stack:["Svelte"],image:"https://featherbear.cc/blog/post/filmstrip-messages/preview.png",blog:"https://featherbear.cc/blog/post/filmstrip-messages/",site:"https://featherbear.cc/filmstrip-messages/",repo:"https://github.com/featherbear/filmstrip-messages",description:"Photostrip project to house a collection of photos, videos and text notes"},{title:"DeliveryTrack",stack:["JavaScript"],repo:"https://github.com/featherbear/deliverytrack",site:"https://featherbear.cc/deliverytrack/",image:"https://featherbear.cc/blog/post/delivery-track/preview.png",description:"Postal delivery tracking web application with synchronisation between devices"},{title:"Wardrobe",stack:["Svelte"],repo:"https://github.com/featherbear/wardrobe",site:"https://featherbear.cc/wardrobe/",preview:"https://featherbear.cc/wardrobe/",description:"A clothing-oriented photo organisation web application"},{title:"Twinkle Tiles",stack:["p5.js"],image:"https://featherbear.cc/blog/post/processing-twinkle/preview.apng",site:"https://featherbear.github.io/processing-twinkle/",repo:"https://github.com/featherbear/processing-twinkle",blog:"https://featherbear.cc/blog/post/processing-twinkle/"},{title:"Spit",stack:["TypeScript","Svelte"],site:"https://featherbear.cc/spit/",repo:"https://github.com/featherbear/spit",description:"A data massaging tool to convert between various formats"},{title:"Wakey",stack:["Node.js","Svelte"],image:"https://featherbear.cc/blog/post/wakey/Snipaste_2020-11-16_22-37-12.png",blog:"https://featherbear.cc/blog/post/wakey/",repo:"https://github.com/featherbear/wakey",description:"A Wake On LAN web interface"},{title:"Go Links",stack:["JavaScript","Python"],blog:"https://featherbear.cc/blog/post/featherbear.cc-go/",repo:"https://github.com/featherbear/go-links",description:"Self-hosted static link shortener service via GitHub Pages",image:"https://featherbear.cc/blog/uploads/screely-1612249310864.png"},{title:"Templables (WIP)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/templables",description:"Reusable form creation and collection framework"},{title:"Monosodium (WIP)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/monosodium",description:"A Facebook Messenger client wrapper with useful features"},{title:"BlueClick BLE",stack:["Arduino"],image:"https://featherbear.cc/blog/post/blueclick/logic-board/20201205_180608.jpg",blog:"https://featherbear.cc/blog/post/blueclick/",repo:"https://github.com/featherbear/BlueClick_BLE",description:"Page turner for OnSong, through sending MIDI notes over Bluetooth Low Energy"},{title:"Moone (WIP)",stack:["TypeScript","Svelte"],repo:"https://github.com/featherbear/moone",description:"Morning noticeboard for my bedroom TV"},{title:"Zifon YT-1000 WiFi ACU",stack:["C++","Arduino","Svelte"],image:"https://featherbear.cc/blog/uploads/20210820_052448.jpg",repo:"https://github.com/featherbear/zifon-yt1000-wifi-acu",blog:"https://featherbear.cc/blog/post/zifon-yt-1000-wifi-acu/",description:"WiFi Auxiliary Control Unit for the Zifon YT-1000 Pan-Tilt Head"}]},{title:"Multimedia",items:[{title:"Sound Mixer Simulator (WIP)",site:"https://featherbear.cc/mixer/",repo:"https://github.com/featherbear/mixer/",stack:["React"],description:"Interactive teaching tool for the PreSonus StudioLive 16 Series III sound console"},{title:"ProPresenter Stage Display Messages",stack:["JavaScript"],site:"http://pp6sdm.apps.navhaxs.au.eu.org/",image:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/screenshot.png",blog:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/",repo:"https://github.com/featherbear/propresenter-stagemessages",description:"Remote stage message client for ProPresenter 6/7"},{title:"ProPresenter 6/7 OBS Scene Switcher",stack:["Node.js"],repo:"https://github.com/featherbear/propresenter-obs-scene-switcher",description:"Switch OBS scenes depending on the current ProPresenter content"},{title:"ProPresenter 6 Local Sync Tool",stack:["C#",".NET"],repo:"https://github.com/featherbear/propresenter-local-sync-tool",image:"https://raw.githubusercontent.com/featherbear/propresenter-local-sync-tool/master/logo.ico",description:"A buggy file synchronisation tool that's still less buggy than ProPresenter 6's inbuilt one"},{title:"OnCue Projector",stack:["Python","Qt"],repo:"https://github.com/featherbear/OnCue",description:"Multimedia presentation software for seamless playback of content\nHSC Major Project"},{title:"NDI Streamer",stack:["C++"],blog:"https://featherbear.cc/blog/post/ndi-streamer/",repo:"https://github.com/featherbear/ndi-streamer",description:"Cross-platform display sharing over NDI.\nIntended for Linux, since Windows and Mac have official software"},{title:"Talyte",stack:["C++","Arduino","Svelte"],blog:"https://featherbear.cc/blog/post/talyte/",image:"https://featherbear.cc/blog/uploads/20210510_234112.jpg",repo:"https://github.com/featherbear/talyte/",description:"Tally light library / software for OBS"},{title:"Splitify",stack:["React","TypeScript"],image:"https://splitify.github.io/branding/banner/banner@72.png",site:"https://splitify.github.io",blog:"https://featherbear.cc/blog/post/splitify/",repo:"https://github.com/Splitify/",description:"Spotify playlist manager and creator.\nUNSW SENG4920 group project"},{title:"Bitfocus Companion: PreSonus StudioLive III Module",stack:["TypeScript"],blog:"https://featherbear.cc/blog/post/presonus-studiolive-api-ii/",repo:"https://github.com/featherbear/bitfocus-companion-module-presonus-studiolive-iii",description:"Integration of my PreSonus StudioLive III API for the Bitfocus Companion (for the Elgato Streamdeck)"},{title:"PreSonus StudioLive III Console Advertisement",stack:["C"],repo:"https://github.com/featherbear/presonus-studiolive-console-advertisement",description:"UDP discovery packet spoofer for notifying clients of networked StudioLive III consoles over challenging network configurations"},{title:"aNDI",stack:["Flutter","Dart"],repo:"https://github.com/featherbear/aNDI",blog:"https://featherbear.cc/blog/post/andi-ndi-tools-for-android/",image:"https://featherbear.cc/blog/uploads/img_0047.JPG",description:"NDI tool application for Android"},{title:"NDI Telestrator",description:"Whiteboard annotation tool using NDI",stack:["C#"],repo:"https://github.com/featherbear/NDI-Telestrator",blog:"https://featherbear.cc/blog/post/ndi-telestrator/",image:"https://featherbear.cc/blog/uploads/snipaste_2021-06-25_22-32-19.png"},{title:"Vix",stack:["Flutter","Dart"],repo:"https://github.com/featherbear/obs-vix",blog:"https://featherbear.cc/blog/post/obs-vix/",image:"https://featherbear.cc/blog/uploads/20210904-snipaste_2021-09-05_01-43-46.png",description:"An opinionated vision mixer and switcher client for OBS"}]},{title:"Games",items:[{title:"Stacker Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_stack.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-stacker-game/",repo:"https://github.com/featherbear/p5-stacker-game/"},{title:"Queuer Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_queue.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-queuer-game/",repo:"https://github.com/featherbear/p5-queuer-game/"},{title:"Platformer Game",stack:["p5.js"],description:"A platformer 'game'\n(that I never really started)",repo:"https://github.com/featherbear/processing-platformer",site:"https://featherbear.cc/processing-platformer/"},{title:"Dungeon Game",stack:["Java","JavaFX"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2",blog:"https://featherbear.cc/UNSW-COMP2511/post/assign2/",image:"https://featherbear.cc/UNSW-COMP2511/post/assign2/demo.gif",description:"UNSW COMP2511 group project"},{title:"Dungeon Game (Text Edition)",stack:["Java","JNA"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/",blog:"https://featherbear.cc/blog/post/dungeon-console/",image:"https://raw.githubusercontent.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/master/demo_advanced.gif",description:"Alternative text-based client for my UNSW COMP2511 group project"},{title:"Balloon Shooting Game",stack:["SmallBasic"],blog:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/",repo:"https://github.com/featherbear/smallbasic-balloon-shooting-game",image:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/animation.gif",description:"A game I made in Small Basic for some educational course. Oh boy."},{title:"Whoops! There Goes My AI",stack:["Python","wxPython","OpenCV"],blog:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/",image:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/preview.apng",repo:"https://github.com/featherbear/Whoops-There-Goes-My-AI/",description:"An attempt at computer vision, to automate a mobile phone game"}]},{title:"Scripts and Misc",items:[{title:"zt.py",stack:["Python"],repo:"https://github.com/featherbear/zt.py",description:"Linux CLI wrapper for managing ZeroTier networks"},{title:"Netlify DDNS Updater",stack:["Python"],repo:"https://github.com/featherbear/netlify-ddns-updater",description:"Yet another dynamic DNS updater for Netlify DNS"},{title:"Threes",stack:["Python"],repo:"https://github.com/featherbear/threes",blog:"https://featherbear.cc/blog/post/instagram-layouts-offsets-grids-code/",description:"A content spacer tool for Instagram to maintain 3 x n layouts",image:"https://featherbear.cc/blog/uploads/sxs.gif"},{title:"Facebook Marketplace Helper",stack:["JavaScript"],repo:"https://github.com/featherbear/facebook-marketplace-helper",blog:"https://featherbear.cc/blog/post/facebook-marketplace-helper-script",description:"Remove sponsored ads and mark previously viewed classified listings",image:"https://featherbear.cc/blog/uploads/snipaste_2021-07-10_00-05-39.png"}]}];function ie(e,t,r){const o=e.slice();return o[2]=t[r],o}function ce(e,t,r){const o=e.slice();return o[5]=t[r],o}function ne(e){return{c:j,l:j,m:j,p:j,i:j,o:j,d:j}}function le(e){let t,r,o=e[1],s=[];for(let t=0;t<o.length;t+=1)s[t]=ge(ie(e,o,t));const a=e=>v(s[e],1,1,()=>{s[e]=null});return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=_()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=_()},m(e,o){for(let t=0;t<s.length;t+=1)s[t].m(e,o);p(e,t,o),r=!0},p(e,r){if(1&r){let i;for(o=e[1],i=0;i<o.length;i+=1){const a=ie(e,o,i);s[i]?(s[i].p(a,r),m(s[i],1)):(s[i]=ge(a),s[i].c(),m(s[i],1),s[i].m(t.parentNode,t))}for(P(),i=o.length;i<s.length;i+=1)a(i);C()}},i(e){if(!r){for(let e=0;e<o.length;e+=1)m(s[e]);r=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)v(s[e]);r=!1},d(e){D(s,e),e&&l(t)}}}function pe(e){let t,r;return t=new se({props:{title:e[5].title,description:e[5].description,image:e[5].image,preview:e[5].preview,repo:e[5].repo,site:e[5].site,blog:e[5].blog,stack:e[5].stack}}),{c(){I(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){A(t,e,o),r=!0},p:j,i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function he(e){let t,r,o=e[2].items&&function(e){let t,r,o=e[2].items,s=[];for(let t=0;t<o.length;t+=1)s[t]=pe(ce(e,o,t));const a=e=>v(s[e],1,1,()=>{s[e]=null});return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=_()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=_()},m(e,o){for(let t=0;t<s.length;t+=1)s[t].m(e,o);p(e,t,o),r=!0},p(e,r){if(1&r){let i;for(o=e[2].items,i=0;i<o.length;i+=1){const a=ce(e,o,i);s[i]?(s[i].p(a,r),m(s[i],1)):(s[i]=pe(a),s[i].c(),m(s[i],1),s[i].m(t.parentNode,t))}for(P(),i=o.length;i<s.length;i+=1)a(i);C()}},i(e){if(!r){for(let e=0;e<o.length;e+=1)m(s[e]);r=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)v(s[e]);r=!1},d(e){D(s,e),e&&l(t)}}}(e);return{c(){o&&o.c(),t=y()},l(e){o&&o.l(e),t=S(e)},m(e,s){o&&o.m(e,s),p(e,t,s),r=!0},p(e,t){e[2].items&&o.p(e,t)},i(e){r||(m(o),r=!0)},o(e){v(o),r=!1},d(e){o&&o.d(e),e&&l(t)}}}function ge(e){let t,r;return t=new B({props:{title:e[2].title,$$slots:{default:[he]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){A(t,e,o),r=!0},p(e,r){const o={};256&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function be(e){return{c:j,l:j,m:j,p:j,i:j,o:j,d:j}}function ue(e){let t,r,o,g,u,f,d,k,w,P,C,$,I,N,A,T={ctx:e,current:null,token:null,hasCatch:!1,pending:be,then:le,catch:ne,value:1,blocks:[,,,]};return W(e[0](),T),{c(){t=s("h4"),r=a("TL;DR"),o=y(),g=s("p"),u=a("My interest in programming lies in things related to security, multimedia, and\n  communication."),f=y(),d=s("hr"),k=y(),T.block.c(),w=y(),P=s("h4"),C=a("An invalid metric of my programming life"),$=y(),I=s("img"),this.h()},l(e){t=i(e,"H4",{});var s=c(t);r=n(s,"TL;DR"),s.forEach(l),o=S(e),g=i(e,"P",{});var a=c(g);u=n(a,"My interest in programming lies in things related to security, multimedia, and\n  communication."),a.forEach(l),f=S(e),d=i(e,"HR",{}),k=S(e),T.block.l(e),w=S(e),P=i(e,"H4",{});var p=c(P);C=n(p,"An invalid metric of my programming life"),p.forEach(l),$=S(e),I=i(e,"IMG",{alt:!0,style:!0,src:!0}),this.h()},h(){b(I,"alt","github stats"),x(I,"width","100%"),x(I,"max-width","400px"),I.src!==(N="https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")&&b(I,"src","https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")},m(e,s){p(e,t,s),h(t,r),p(e,o,s),p(e,g,s),h(g,u),p(e,f,s),p(e,d,s),p(e,k,s),T.block.m(e,T.anchor=s),T.mount=()=>w.parentNode,T.anchor=w,p(e,w,s),p(e,P,s),h(P,C),p(e,$,s),p(e,I,s),A=!0},p(t,[r]){M(T,e=t,r)},i(e){A||(m(T.block),A=!0)},o(e){for(let e=0;e<3;e+=1){const t=T.blocks[e];v(t)}A=!1},d(e){e&&l(t),e&&l(o),e&&l(g),e&&l(f),e&&l(d),e&&l(k),T.block.d(e),T.token=null,T=null,e&&l(w),e&&l(P),e&&l($),e&&l(I)}}}function me(e){return[async function(){for(let e of ae)e.items&&e.items.sort((e,t)=>{let r=!(!t.image&&!t.preview),o=!(!e.image&&!e.preview);return o!=r?r-o:t.title<e.title});return ae}]}export default class extends t{constructor(e){super(),r(this,e,me,ue,o,{})}}
