import{C as e,S as t,i as r,s,e as o,l as a,a as i,b as c,n,d as l,g as p,h,D as m,f as u,u as g,t as b,E as f,F as d,j as v,k as S,m as y,v as k,G as $,H as P,I as w,c as C,x as N,z as T,A as W,B as M,J as I,r as E,o as x,K as A,w as j}from"./client.6a92e3c3.js";function U(t,{delay:r=0,duration:s=400,easing:o=e}){const a=+getComputedStyle(t).opacity;return{delay:r,duration:s,easing:o,css:e=>"opacity: "+e*a}}function O(e){let t,r;return{c(){t=o("p"),r=a(e[2])},l(s){t=i(s,"P",{});var o=c(t);r=n(o,e[2]),o.forEach(l)},m(e,s){p(e,t,s),h(t,r)},p(e,t){4&t&&m(r,e[2])},d(e){e&&l(t)}}}function _(e){let t,r,s;const a=e[5].default,n=C(a,e,e[4],null);return{c(){t=o("div"),n&&n.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var r=c(t);n&&n.l(r),r.forEach(l),this.h()},h(){u(t,"class","svelte-13hjb2l")},m(e,r){p(e,t,r),n&&n.m(t,null),s=!0},p(e,t){n&&n.p&&16&t&&g(n,a,e,e[4],t,null,null)},i(e){s||(b(n,e),e&&f(()=>{r||(r=d(t,U,{},!0)),r.run(1)}),s=!0)},o(e){v(n,e),e&&(r||(r=d(t,U,{},!1)),r.run(0)),s=!1},d(e){e&&l(t),n&&n.d(e),e&&r&&r.end()}}}function D(e){let t,r,s,g,f,d,C,N,T=e[2]&&O(e),W=e[0]&&_(e);return{c(){t=o("section"),r=o("h2"),s=a(e[1]),g=S(),T&&T.c(),f=S(),W&&W.c(),this.h()},l(o){t=i(o,"SECTION",{class:!0});var a=c(t);r=i(a,"H2",{class:!0});var p=c(r);s=n(p,e[1]),p.forEach(l),g=y(a),T&&T.l(a),f=y(a),W&&W.l(a),a.forEach(l),this.h()},h(){u(r,"class","svelte-13hjb2l"),k(r,"collapsible",e[3]),u(t,"class","svelte-13hjb2l")},m(o,a){p(o,t,a),h(t,r),h(r,s),h(t,g),T&&T.m(t,null),h(t,f),W&&W.m(t,null),d=!0,C||(N=$(r,"click",e[6]),C=!0)},p(e,[o]){(!d||2&o)&&m(s,e[1]),8&o&&k(r,"collapsible",e[3]),e[2]?T?T.p(e,o):(T=O(e),T.c(),T.m(t,f)):T&&(T.d(1),T=null),e[0]?W?(W.p(e,o),1&o&&b(W,1)):(W=_(e),W.c(),b(W,1),W.m(t,null)):W&&(P(),v(W,1,1,()=>{W=null}),w())},i(e){d||(b(W),d=!0)},o(e){v(W),d=!1},d(e){e&&l(t),T&&T.d(),W&&W.d(),C=!1,N()}}}function B(e,t,r){let{title:s=""}=t,{description:o}=t,{collapsible:a=!0}=t,{opened:i=!0}=t,{$$slots:c={},$$scope:n}=t;return e.$set=e=>{"title"in e&&r(1,s=e.title),"description"in e&&r(2,o=e.description),"collapsible"in e&&r(3,a=e.collapsible),"opened"in e&&r(0,i=e.opened),"$$scope"in e&&r(4,n=e.$$scope)},[i,s,o,a,n,c,()=>{a&&r(0,i=!i)}]}class L extends t{constructor(e){super(),r(this,e,B,D,s,{title:1,description:2,collapsible:3,opened:0})}}function J(e){let t,r,s;const a=e[2].default,n=C(a,e,e[1],null);return{c(){t=o("a"),r=o("div"),n&&n.c(),this.h()},l(e){t=i(e,"A",{href:!0,rel:!0,class:!0});var s=c(t);r=i(s,"DIV",{class:!0});var o=c(r);n&&n.l(o),o.forEach(l),s.forEach(l),this.h()},h(){u(r,"class","svelte-312hfm"),u(t,"href",e[0]),u(t,"rel","prefetch"),u(t,"class","svelte-312hfm")},m(e,o){p(e,t,o),h(t,r),n&&n.m(r,null),s=!0},p(e,[r]){n&&n.p&&2&r&&g(n,a,e,e[1],r,null,null),(!s||1&r)&&u(t,"href",e[0])},i(e){s||(b(n,e),s=!0)},o(e){v(n,e),s=!1},d(e){e&&l(t),n&&n.d(e)}}}function R(e,t,r){let{href:s="#"}=t,{$$slots:o={},$$scope:a}=t;return e.$set=e=>{"href"in e&&r(0,s=e.href),"$$scope"in e&&r(1,a=e.$$scope)},[s,a,o]}class H extends t{constructor(e){super(),r(this,e,R,J,s,{href:0})}}function F(e){let t,r,s=e[4]&&G(e);return{c(){t=o("div"),s&&s.c(),this.h()},l(e){t=i(e,"DIV",{class:!0,style:!0});var r=c(t);s&&s.l(r),r.forEach(l),this.h()},h(){u(t,"class","preview svelte-10bbby6"),u(t,"style",r=e[3]?`background-image: url(${e[3]});`:"")},m(e,r){p(e,t,r),s&&s.m(t,null)},p(e,o){e[4]?s?s.p(e,o):(s=G(e),s.c(),s.m(t,null)):s&&(s.d(1),s=null),8&o&&r!==(r=e[3]?`background-image: url(${e[3]});`:"")&&u(t,"style",r)},d(e){e&&l(t),s&&s.d()}}}function G(e){let t,r;return{c(){t=o("iframe"),this.h()},l(e){t=i(e,"IFRAME",{src:!0,scrolling:!0,title:!0,sandbox:!0,class:!0}),c(t).forEach(l),this.h()},h(){t.src!==(r=e[4])&&u(t,"src",r),u(t,"scrolling","no"),u(t,"title","preview"),u(t,"sandbox","allow-scripts allow-same-origin"),u(t,"class","svelte-10bbby6")},m(e,r){p(e,t,r)},p(e,s){16&s&&t.src!==(r=e[4])&&u(t,"src",r)},d(e){e&&l(t)}}}function q(e){let t,r,s,g=e[0].join(", ")+"";return{c(){t=o("span"),r=a("Technology stack: "),s=a(g),this.h()},l(e){t=i(e,"SPAN",{class:!0});var o=c(t);r=n(o,"Technology stack: "),s=n(o,g),o.forEach(l),this.h()},h(){u(t,"class","svelte-10bbby6")},m(e,o){p(e,t,o),h(t,r),h(t,s)},p(e,t){1&t&&g!==(g=e[0].join(", ")+"")&&m(s,g)},d(e){e&&l(t)}}}function V(e){let t,r;return{c(){t=o("p"),r=a(e[2]),this.h()},l(s){t=i(s,"P",{class:!0});var o=c(t);r=n(o,e[2]),o.forEach(l),this.h()},h(){u(t,"class","svelte-10bbby6")},m(e,s){p(e,t,s),h(t,r)},p(e,t){4&t&&m(r,e[2])},d(e){e&&l(t)}}}function Q(e){let t,r,s,a,n=e[5]&&z(e),m=e[6]&&K(e),g=e[7]&&Z(e);return{c(){t=o("div"),n&&n.c(),r=S(),m&&m.c(),s=S(),g&&g.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var o=c(t);n&&n.l(o),r=y(o),m&&m.l(o),s=y(o),g&&g.l(o),o.forEach(l),this.h()},h(){u(t,"class","buttons svelte-10bbby6")},m(e,o){p(e,t,o),n&&n.m(t,null),h(t,r),m&&m.m(t,null),h(t,s),g&&g.m(t,null),a=!0},p(e,o){e[5]?n?(n.p(e,o),32&o&&b(n,1)):(n=z(e),n.c(),b(n,1),n.m(t,r)):n&&(P(),v(n,1,1,()=>{n=null}),w()),e[6]?m?(m.p(e,o),64&o&&b(m,1)):(m=K(e),m.c(),b(m,1),m.m(t,s)):m&&(P(),v(m,1,1,()=>{m=null}),w()),e[7]?g?(g.p(e,o),128&o&&b(g,1)):(g=Z(e),g.c(),b(g,1),g.m(t,null)):g&&(P(),v(g,1,1,()=>{g=null}),w())},i(e){a||(b(n),b(m),b(g),a=!0)},o(e){v(n),v(m),v(g),a=!1},d(e){e&&l(t),n&&n.d(),m&&m.d(),g&&g.d()}}}function z(e){let t;const r=new H({props:{href:e[5],$$slots:{default:[X]},$$scope:{ctx:e}}});return{c(){N(r.$$.fragment)},l(e){T(r.$$.fragment,e)},m(e,s){W(r,e,s),t=!0},p(e,t){const s={};32&t&&(s.href=e[5]),256&t&&(s.$$scope={dirty:t,ctx:e}),r.$set(s)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){M(r,e)}}}function X(e){let t;return{c(){t=a("GitHub")},l(e){t=n(e,"GitHub")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function K(e){let t;const r=new H({props:{href:e[6],$$slots:{default:[Y]},$$scope:{ctx:e}}});return{c(){N(r.$$.fragment)},l(e){T(r.$$.fragment,e)},m(e,s){W(r,e,s),t=!0},p(e,t){const s={};64&t&&(s.href=e[6]),256&t&&(s.$$scope={dirty:t,ctx:e}),r.$set(s)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){M(r,e)}}}function Y(e){let t;return{c(){t=a("Site")},l(e){t=n(e,"Site")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function Z(e){let t;const r=new H({props:{href:e[7],$$slots:{default:[ee]},$$scope:{ctx:e}}});return{c(){N(r.$$.fragment)},l(e){T(r.$$.fragment,e)},m(e,s){W(r,e,s),t=!0},p(e,t){const s={};128&t&&(s.href=e[7]),256&t&&(s.$$scope={dirty:t,ctx:e}),r.$set(s)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){M(r,e)}}}function ee(e){let t;return{c(){t=a("Blog")},l(e){t=n(e,"Blog")},m(e,r){p(e,t,r)},d(e){e&&l(t)}}}function te(e){let t,r,s,g,f,d,k,$,C,N=(e[4]||e[3])&&F(e),T=e[0]&&q(e),W=e[2]&&V(e),M=(e[5]||e[6]||e[7])&&Q(e);return{c(){t=o("article"),N&&N.c(),r=S(),s=o("div"),g=o("h4"),f=a(e[1]),d=S(),T&&T.c(),k=S(),W&&W.c(),$=S(),M&&M.c(),this.h()},l(o){t=i(o,"ARTICLE",{class:!0});var a=c(t);N&&N.l(a),r=y(a),s=i(a,"DIV",{class:!0});var p=c(s);g=i(p,"H4",{class:!0});var h=c(g);f=n(h,e[1]),h.forEach(l),d=y(p),T&&T.l(p),k=y(p),W&&W.l(p),p.forEach(l),$=y(a),M&&M.l(a),a.forEach(l),this.h()},h(){u(g,"class","svelte-10bbby6"),u(s,"class","content svelte-10bbby6"),u(t,"class","svelte-10bbby6")},m(e,o){p(e,t,o),N&&N.m(t,null),h(t,r),h(t,s),h(s,g),h(g,f),h(s,d),T&&T.m(s,null),h(s,k),W&&W.m(s,null),h(t,$),M&&M.m(t,null),C=!0},p(e,[o]){e[4]||e[3]?N?N.p(e,o):(N=F(e),N.c(),N.m(t,r)):N&&(N.d(1),N=null),(!C||2&o)&&m(f,e[1]),e[0]?T?T.p(e,o):(T=q(e),T.c(),T.m(s,k)):T&&(T.d(1),T=null),e[2]?W?W.p(e,o):(W=V(e),W.c(),W.m(s,null)):W&&(W.d(1),W=null),e[5]||e[6]||e[7]?M?(M.p(e,o),224&o&&b(M,1)):(M=Q(e),M.c(),b(M,1),M.m(t,null)):M&&(P(),v(M,1,1,()=>{M=null}),w())},i(e){C||(b(M),C=!0)},o(e){v(M),C=!1},d(e){e&&l(t),N&&N.d(),T&&T.d(),W&&W.d(),M&&M.d()}}}function re(e,t,r){let{title:s}=t,{description:o}=t,{image:a}=t,{preview:i}=t,{repo:c}=t,{site:n}=t,{blog:l}=t,{stack:p}=t;return"string"==typeof p&&(p=[p]),e.$set=e=>{"title"in e&&r(1,s=e.title),"description"in e&&r(2,o=e.description),"image"in e&&r(3,a=e.image),"preview"in e&&r(4,i=e.preview),"repo"in e&&r(5,c=e.repo),"site"in e&&r(6,n=e.site),"blog"in e&&r(7,l=e.blog),"stack"in e&&r(0,p=e.stack)},[p,s,o,a,i,c,n,l]}class se extends t{constructor(e){super(),r(this,e,re,te,s,{title:1,description:2,image:3,preview:4,repo:5,site:6,blog:7,stack:0})}}var oe=[{title:"Libraries / APIs",items:[{title:"facebook-messenger-puppeteer",stack:["Node.js","Puppeteer"],description:"API for Messenger Chat via Puppeteer",repo:"https://github.com/featherbear/facebook-messenger-puppeteer",blog:"https://featherbear.cc/blog/post/facebook-messenger-puppeteer/"},{title:"react-native-mifare-classic-wrapper",repo:"https://github.com/featherbear/react-native-mifare-classic-wrapper/",description:"Wrapper over the react-native-nfc-manager package to provide streamlined Mifare Classic functionality"},{title:"PreSonus StudioLive API",stack:["Node.js","Python"],repo:"https://github.com/featherbear/PreSonus-StudioLive-API",blog:"https://featherbear.cc/blog/post/presonus-studiolive-api/",description:"Exploring the PreSonus network control protocol from a StudioLive Series III"}]},{title:"Security",items:[{title:"Project RATtata",repo:"https://github.com/featherbear/UNSW-COMP6441-RATtata",site:"https://featherbear.cc/UNSW-COMP6441-RATtata/",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/job-application/something_awesome/",preview:"https://featherbear.cc/UNSW-COMP6441-RATtata/",stack:["Node.js","Vue","Electron"],description:"Remote administration tool project for COMP6441"},{title:"Project Securitears",stack:["Python"],repo:"https://github.com/featherbear/UNSW-COMP6447-ass",site:"https://featherbear.github.io/UNSW-COMP6447-ass",preview:"https://featherbear.cc/UNSW-COMP6447-ass/",description:"Blackbox input fuzzer for COMP6447"},{title:"CSE x SecSoc CTF 2020",blog:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/",image:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/team.png",description:"Not actually a project, but an honourable mention. I came first in this CTF!"},{title:"UNSW COMP6443",site:"https://featherbear.cc/UNSW-COMP6443/",description:"Another honourable mention - I placed first in my university's Web Application Security and Testing course!"},{title:"UNSW CompClub 2019 CTF Server",stack:["Python","SQLite","JavaScript"],image:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/title_small.gif",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-CTF",site:"https://featherbear.cc/UNSW-CompClub2019Summer-CTF/",description:"Custom CTF server for UNSW CompClub"},{title:"Project CTF²",stack:["Node.js","Svelte","SQLite","MongoDB","NeutralinoJS"],image:"https://github.com/featherbear/CTF2-server-slate/raw/master/images/logo.png",repo:"https://github.com/featherbear/CTF2",description:"Custom Capture The Flag competition server"}]},{title:"Teaching Resources",items:[{title:"Learn C",description:"A primer to the C programming language",repo:"https://github.com/featherbear/learn-c/",site:"https://featherbear.cc/learn-c/"},{title:"Learn Data Structures and Algorithms",description:"A primer to common computer data structures and algorithms",repo:"https://github.com/featherbear/learn-data-structures-algorithms/",site:"https://featherbear.cc/learn-data-structures-algorithms/"},{title:"Learn System Internals",description:"A primer to how CPUs and Operating Systems work",repo:"https://github.com/featherbear/learn-system-internals/",site:"https://featherbear.cc/learn-system-internals/"},{title:"Python Proficiency",description:"Snippets of knowledge about Python",repo:"https://github.com/featherbear/learn-python-proficiency/",site:"https://featherbear.cc/learn-python-proficiency/"},{title:"JavaScript Proficiency",description:"Snippets of knowledge about JavaScript ",repo:"https://github.com/featherbear/learn-javascript-proficiency/",site:"https://featherbear.cc/learn-javascript-proficiency/"},{title:"Learn CSS - Hover Buttons",description:"Demonstration on the effects of the placement of the transition style attribute",image:"https://featherbear.cc/blog/post/hover-buttons/preview.png",blog:"https://featherbear.cc/blog/post/hover-buttons/",repo:"https://github.com/featherbear/hover-buttons",site:"https://featherbear.cc/hover-buttons/"},{title:"Image Steganography",description:"Workshop for secondary school students about LSB Image Steganography.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/steganography_preview.png",site:"https://docs.google.com/presentation/d/1kyRsC1-PMJu4UndE6psUHJHuTHX7W6cuYRod1jq3QJY/edit?usp=sharing",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/image_steganography"},{title:"HTTP(S) Security",description:"Presentation for secondary school students about the importance of HTTPS.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/https_preview.png",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/http_mitm",site:"https://docs.google.com/presentation/d/1ykIUm1xAKMforvTPeqvXMdC4DZlnWOg604ekaybhiOs/edit?usp=sharing"},{title:"Establishing P2P Connections over TCP",description:"An explanation of how a Peer to Peer connection is set up with a broker server and NAT Holepunching",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/http_mitm",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/something-awesome-research-connection/"}]},{title:"Client Projects",items:[{title:"UNSW Scientia Signage",stack:["JavaScript"],image:"https://featherbear.cc/blog/post/unsw-scientia-signage/Snipaste_2019-12-09_19-33-07.png",blog:"https://featherbear.cc/blog/post/unsw-scientia-signage/",description:"SPA page to control PiSignage devices"}]},{title:"Sandbox",items:[{title:"Trello e-Paper Display",stack:["Python"],image:"https://featherbear.cc/blog/post/e-paper/20191211_221809.jpg",repo:"https://github.com/featherbear/trello-epd",blog:"https://featherbear.cc/blog/post/e-paper/",description:"Physical to-do list on an e-Paper display"},{title:"Filmstrip Messages",stack:["Svelte"],image:"https://featherbear.cc/blog/post/filmstrip-messages/preview.png",blog:"https://featherbear.cc/blog/post/filmstrip-messages/",site:"https://featherbear.cc/filmstrip-messages/",repo:"https://github.com/featherbear/filmstrip-messages",description:"Photostrip project to house a collection of photos, videos and text notes"},{title:"DeliveryTrack",stack:["JavaScript"],repo:"https://github.com/featherbear/deliverytrack",site:"https://featherbear.cc/deliverytrack/",image:"https://featherbear.cc/blog/post/delivery-track/preview.png",description:"Postal delivery tracking web application with synchronisation between devices"},{title:"Wardrobe",stack:["Svelte"],repo:"https://github.com/featherbear/wardrobe",site:"https://featherbear.cc/wardrobe/",preview:"https://featherbear.cc/wardrobe/",description:"A clothing-oriented photo organisation web application"},{title:"Twinkle Tiles",stack:["p5.js"],image:"https://featherbear.cc/blog/post/processing-twinkle/preview.apng",site:"https://featherbear.github.io/processing-twinkle/",repo:"https://github.com/featherbear/processing-twinkle",blog:"https://featherbear.cc/blog/post/processing-twinkle/"}]},{title:"Multimedia",items:[{title:"Sound Mixer Simulator",site:"https://featherbear.cc/mixer/",repo:"https://github.com/featherbear/mixer/",stack:["React"],description:"Interactive teaching tool for the PreSonus StudioLive 16 Series III sound console"},{title:"ProPresenter Stage Display Messages",stack:["JavaScript"],site:"http://pp6sdm.apps.navhaxs.au.eu.org/",image:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/screenshot.png",blog:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/",repo:"https://github.com/featherbear/propresenter-stagemessages",description:"Remote stage message client for ProPresenter 6/7"},{title:"ProPresenter 6/7 OBS Scene Switcher",stack:["Node.js"],repo:"https://github.com/featherbear/propresenter-obs-scene-switcher",description:"Switch OBS scenes depending on the current ProPresenter content"},{title:"ProPresenter 6 Local Sync Tool",stack:["C#",".NET"],repo:"https://github.com/featherbear/propresenter-local-sync-tool",image:"https://raw.githubusercontent.com/featherbear/propresenter-local-sync-tool/master/logo.ico",description:"A buggy file synchronisation tool that's less buggy than ProPresenter 6's inbuilt one"},{title:"OnCue Projector",stack:["Python","Qt"],repo:"https://github.com/featherbear/OnCue",description:"Multimedia presentation software for seamless playback of content\nHSC Major Project"},{title:"BlueClick BLE",stack:["Arduino"],blog:"https://featherbear.cc/blog/post/blueclick/",repo:"https://github.com/featherbear/BlueClick_BLE",description:"Page turner for OnSong, through sending MIDI notes over Bluetooth Low Energy"}]},{title:"Games",items:[{title:"Stacker Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_stack.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-stacker-game/",repo:"https://github.com/featherbear/p5-stacker-game/"},{title:"Queuer Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_queue.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-queuer-game/",repo:"https://github.com/featherbear/p5-queuer-game/"},{title:"Platformer Game",stack:["p5.js"],description:"A platformer 'game'\n(that I never really started)",repo:"https://github.com/featherbear/processing-platformer",site:"https://featherbear.cc/processing-platformer/"},{title:"Dungeon Game",stack:["Java","JavaFX"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2",blog:"https://featherbear.cc/UNSW-COMP2511/post/assign2/",image:"https://featherbear.cc/UNSW-COMP2511/post/assign2/demo.gif"},{title:"Dungeon Game (Text Edition)",stack:["Java","JNA"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/",blog:"https://featherbear.cc/blog/post/dungeon-console/",image:"https://raw.githubusercontent.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/master/demo_advanced.gif"},{title:"Balloon Shooting Game",stack:["SmallBasic"],blog:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/",repo:"https://github.com/featherbear/smallbasic-balloon-shooting-game",image:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/animation.gif",description:"Making a game in Small Basic. Oh boy."},{title:"Whoops! There Goes My AI",stack:["Python","wxPython","OpenCV"],blog:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/",image:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/preview.apng",repo:"https://github.com/featherbear/Whoops-There-Goes-My-AI/",description:"Computer vision game automator"}]}];function ae(e,t,r){const s=e.slice();return s[5]=t[r],s}function ie(e,t,r){const s=e.slice();return s[2]=t[r],s}function ce(e){return{c:x,l:x,m:x,p:x,i:x,o:x,d:x}}function ne(e){let t,r,s=e[1],o=[];for(let t=0;t<s.length;t+=1)o[t]=he(ie(e,s,t));const a=e=>v(o[e],1,1,()=>{o[e]=null});return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=A()},l(e){for(let t=0;t<o.length;t+=1)o[t].l(e);t=A()},m(e,s){for(let t=0;t<o.length;t+=1)o[t].m(e,s);p(e,t,s),r=!0},p(e,r){if(1&r){let i;for(s=e[1],i=0;i<s.length;i+=1){const a=ie(e,s,i);o[i]?(o[i].p(a,r),b(o[i],1)):(o[i]=he(a),o[i].c(),b(o[i],1),o[i].m(t.parentNode,t))}for(P(),i=s.length;i<o.length;i+=1)a(i);w()}},i(e){if(!r){for(let e=0;e<s.length;e+=1)b(o[e]);r=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)v(o[e]);r=!1},d(e){j(o,e),e&&l(t)}}}function le(e){let t;const r=new se({props:{title:e[5].title,description:e[5].description,image:e[5].image,preview:e[5].preview,repo:e[5].repo,site:e[5].site,blog:e[5].blog,stack:e[5].stack}});return{c(){N(r.$$.fragment)},l(e){T(r.$$.fragment,e)},m(e,s){W(r,e,s),t=!0},p:x,i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){M(r,e)}}}function pe(e){let t,r,s=e[2].items&&function(e){let t,r,s=e[2].items,o=[];for(let t=0;t<s.length;t+=1)o[t]=le(ae(e,s,t));const a=e=>v(o[e],1,1,()=>{o[e]=null});return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=A()},l(e){for(let t=0;t<o.length;t+=1)o[t].l(e);t=A()},m(e,s){for(let t=0;t<o.length;t+=1)o[t].m(e,s);p(e,t,s),r=!0},p(e,r){if(1&r){let i;for(s=e[2].items,i=0;i<s.length;i+=1){const a=ae(e,s,i);o[i]?(o[i].p(a,r),b(o[i],1)):(o[i]=le(a),o[i].c(),b(o[i],1),o[i].m(t.parentNode,t))}for(P(),i=s.length;i<o.length;i+=1)a(i);w()}},i(e){if(!r){for(let e=0;e<s.length;e+=1)b(o[e]);r=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)v(o[e]);r=!1},d(e){j(o,e),e&&l(t)}}}(e);return{c(){s&&s.c(),t=S()},l(e){s&&s.l(e),t=y(e)},m(e,o){s&&s.m(e,o),p(e,t,o),r=!0},p(e,t){e[2].items&&s.p(e,t)},i(e){r||(b(s),r=!0)},o(e){v(s),r=!1},d(e){s&&s.d(e),e&&l(t)}}}function he(e){let t;const r=new L({props:{title:e[2].title,$$slots:{default:[pe]},$$scope:{ctx:e}}});return{c(){N(r.$$.fragment)},l(e){T(r.$$.fragment,e)},m(e,s){W(r,e,s),t=!0},p(e,t){const s={};256&t&&(s.$$scope={dirty:t,ctx:e}),r.$set(s)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){M(r,e)}}}function me(e){return{c:x,l:x,m:x,p:x,i:x,o:x,d:x}}function ue(e){let t,r,s,m,g,f,d,k,$,P,w,C,N,T,W,M,x,A,j,U,O,_,D={ctx:e,current:null,token:null,pending:me,then:ne,catch:ce,value:1,blocks:[,,,]};return I(W=e[0](),D),{c(){t=o("h4"),r=a("TL;DR"),s=S(),m=o("p"),g=a("I guess I've made a few things."),f=S(),d=o("p"),k=a("What's recently caught my eye is Svelte - a Javascript framework that has a\n  much lighter footprint than React."),$=S(),P=o("p"),w=a("My interest in programming lies in things related to security, multimedia, and\n  communication."),C=S(),N=o("hr"),T=S(),D.block.c(),M=S(),x=o("h4"),A=a("An invalid metric of my programming life"),j=S(),U=o("img"),this.h()},l(e){t=i(e,"H4",{});var o=c(t);r=n(o,"TL;DR"),o.forEach(l),s=y(e),m=i(e,"P",{});var a=c(m);g=n(a,"I guess I've made a few things."),a.forEach(l),f=y(e),d=i(e,"P",{});var p=c(d);k=n(p,"What's recently caught my eye is Svelte - a Javascript framework that has a\n  much lighter footprint than React."),p.forEach(l),$=y(e),P=i(e,"P",{});var h=c(P);w=n(h,"My interest in programming lies in things related to security, multimedia, and\n  communication."),h.forEach(l),C=y(e),N=i(e,"HR",{}),T=y(e),D.block.l(e),M=y(e),x=i(e,"H4",{});var u=c(x);A=n(u,"An invalid metric of my programming life"),u.forEach(l),j=y(e),U=i(e,"IMG",{alt:!0,style:!0,src:!0}),this.h()},h(){u(U,"alt","github stats"),E(U,"width","100%"),E(U,"max-width","400px"),U.src!==(O="https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")&&u(U,"src","https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")},m(e,o){p(e,t,o),h(t,r),p(e,s,o),p(e,m,o),h(m,g),p(e,f,o),p(e,d,o),h(d,k),p(e,$,o),p(e,P,o),h(P,w),p(e,C,o),p(e,N,o),p(e,T,o),D.block.m(e,D.anchor=o),D.mount=()=>M.parentNode,D.anchor=M,p(e,M,o),p(e,x,o),h(x,A),p(e,j,o),p(e,U,o),_=!0},p(t,[r]){{const s=(e=t).slice();s[1]=D.resolved,D.block.p(s,r)}},i(e){_||(b(D.block),_=!0)},o(e){for(let e=0;e<3;e+=1){const t=D.blocks[e];v(t)}_=!1},d(e){e&&l(t),e&&l(s),e&&l(m),e&&l(f),e&&l(d),e&&l($),e&&l(P),e&&l(C),e&&l(N),e&&l(T),D.block.d(e),D.token=null,D=null,e&&l(M),e&&l(x),e&&l(j),e&&l(U)}}}function ge(e){return[async function(){for(let e of oe)e.items&&e.items.sort((e,t)=>{let r=!(!t.image&&!t.preview),s=!(!e.image&&!e.preview);return s!=r?r-s:t.title<e.title});return oe}]}export default class extends t{constructor(e){super(),r(this,e,ge,ue,s,{})}}
