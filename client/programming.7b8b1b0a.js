import{C as e,S as t,i as r,s,e as a,l as o,a as i,b as c,n as l,d as n,g as p,h,D as m,f as g,u,t as b,E as f,F as d,j as v,k as S,m as $,v as y,G as k,H as w,I as P,c as C,x as I,z as M,A as E,B as N,r as T,w as W,J as x,o as j}from"./client.76903ce0.js";function A(t,{delay:r=0,duration:s=400,easing:a=e}){const o=+getComputedStyle(t).opacity;return{delay:r,duration:s,easing:a,css:e=>"opacity: "+e*o}}function _(e){let t,r;return{c(){t=a("p"),r=o(e[2])},l(s){t=i(s,"P",{});var a=c(t);r=l(a,e[2]),a.forEach(n)},m(e,s){p(e,t,s),h(t,r)},p(e,t){4&t&&m(r,e[2])},d(e){e&&n(t)}}}function O(e){let t,r,s;const o=e[5].default,l=C(o,e,e[4],null);return{c(){t=a("div"),l&&l.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var r=c(t);l&&l.l(r),r.forEach(n),this.h()},h(){g(t,"class","svelte-13hjb2l")},m(e,r){p(e,t,r),l&&l.m(t,null),s=!0},p(e,t){l&&l.p&&16&t&&u(l,o,e,e[4],t,null,null)},i(e){s||(b(l,e),e&&f(()=>{r||(r=d(t,A,{},!0)),r.run(1)}),s=!0)},o(e){v(l,e),e&&(r||(r=d(t,A,{},!1)),r.run(0)),s=!1},d(e){e&&n(t),l&&l.d(e),e&&r&&r.end()}}}function U(e){let t,r,s,u,f,d,C,I,M=e[2]&&_(e),E=e[0]&&O(e);return{c(){t=a("section"),r=a("h2"),s=o(e[1]),u=S(),M&&M.c(),f=S(),E&&E.c(),this.h()},l(a){t=i(a,"SECTION",{class:!0});var o=c(t);r=i(o,"H2",{class:!0});var p=c(r);s=l(p,e[1]),p.forEach(n),u=$(o),M&&M.l(o),f=$(o),E&&E.l(o),o.forEach(n),this.h()},h(){g(r,"class","svelte-13hjb2l"),y(r,"collapsible",e[3]),g(t,"class","svelte-13hjb2l")},m(a,o){p(a,t,o),h(t,r),h(r,s),h(t,u),M&&M.m(t,null),h(t,f),E&&E.m(t,null),d=!0,C||(I=k(r,"click",e[6]),C=!0)},p(e,[a]){(!d||2&a)&&m(s,e[1]),8&a&&y(r,"collapsible",e[3]),e[2]?M?M.p(e,a):(M=_(e),M.c(),M.m(t,f)):M&&(M.d(1),M=null),e[0]?E?(E.p(e,a),1&a&&b(E,1)):(E=O(e),E.c(),b(E,1),E.m(t,null)):E&&(w(),v(E,1,1,()=>{E=null}),P())},i(e){d||(b(E),d=!0)},o(e){v(E),d=!1},d(e){e&&n(t),M&&M.d(),E&&E.d(),C=!1,I()}}}function D(e,t,r){let{title:s=""}=t,{description:a}=t,{collapsible:o=!0}=t,{opened:i=!0}=t,{$$slots:c={},$$scope:l}=t;return e.$set=e=>{"title"in e&&r(1,s=e.title),"description"in e&&r(2,a=e.description),"collapsible"in e&&r(3,o=e.collapsible),"opened"in e&&r(0,i=e.opened),"$$scope"in e&&r(4,l=e.$$scope)},[i,s,a,o,l,c,()=>{o&&r(0,i=!i)}]}class B extends t{constructor(e){super(),r(this,e,D,U,s,{title:1,description:2,collapsible:3,opened:0})}}function L(e){let t,r,s;const o=e[2].default,l=C(o,e,e[1],null);return{c(){t=a("a"),r=a("div"),l&&l.c(),this.h()},l(e){t=i(e,"A",{href:!0,rel:!0,class:!0});var s=c(t);r=i(s,"DIV",{class:!0});var a=c(r);l&&l.l(a),a.forEach(n),s.forEach(n),this.h()},h(){g(r,"class","svelte-312hfm"),g(t,"href",e[0]),g(t,"rel","prefetch"),g(t,"class","svelte-312hfm")},m(e,a){p(e,t,a),h(t,r),l&&l.m(r,null),s=!0},p(e,[r]){l&&l.p&&2&r&&u(l,o,e,e[1],r,null,null),(!s||1&r)&&g(t,"href",e[0])},i(e){s||(b(l,e),s=!0)},o(e){v(l,e),s=!1},d(e){e&&n(t),l&&l.d(e)}}}function R(e,t,r){let{href:s="#"}=t,{$$slots:a={},$$scope:o}=t;return e.$set=e=>{"href"in e&&r(0,s=e.href),"$$scope"in e&&r(1,o=e.$$scope)},[s,o,a]}class H extends t{constructor(e){super(),r(this,e,R,L,s,{href:0})}}function J(e){let t,r,s=e[4]&&G(e);return{c(){t=a("div"),s&&s.c(),this.h()},l(e){t=i(e,"DIV",{class:!0,style:!0});var r=c(t);s&&s.l(r),r.forEach(n),this.h()},h(){g(t,"class","preview svelte-10bbby6"),g(t,"style",r=e[3]?`background-image: url(${e[3]});`:"")},m(e,r){p(e,t,r),s&&s.m(t,null)},p(e,a){e[4]?s?s.p(e,a):(s=G(e),s.c(),s.m(t,null)):s&&(s.d(1),s=null),8&a&&r!==(r=e[3]?`background-image: url(${e[3]});`:"")&&g(t,"style",r)},d(e){e&&n(t),s&&s.d()}}}function G(e){let t,r;return{c(){t=a("iframe"),this.h()},l(e){t=i(e,"IFRAME",{src:!0,scrolling:!0,title:!0,sandbox:!0,class:!0}),c(t).forEach(n),this.h()},h(){t.src!==(r=e[4])&&g(t,"src",r),g(t,"scrolling","no"),g(t,"title","preview"),g(t,"sandbox","allow-scripts allow-same-origin"),g(t,"class","svelte-10bbby6")},m(e,r){p(e,t,r)},p(e,s){16&s&&t.src!==(r=e[4])&&g(t,"src",r)},d(e){e&&n(t)}}}function F(e){let t,r,s,u=e[0].join(", ")+"";return{c(){t=a("span"),r=o("Technology stack: "),s=o(u),this.h()},l(e){t=i(e,"SPAN",{class:!0});var a=c(t);r=l(a,"Technology stack: "),s=l(a,u),a.forEach(n),this.h()},h(){g(t,"class","svelte-10bbby6")},m(e,a){p(e,t,a),h(t,r),h(t,s)},p(e,t){1&t&&u!==(u=e[0].join(", ")+"")&&m(s,u)},d(e){e&&n(t)}}}function q(e){let t,r;return{c(){t=a("p"),r=o(e[2]),this.h()},l(s){t=i(s,"P",{class:!0});var a=c(t);r=l(a,e[2]),a.forEach(n),this.h()},h(){g(t,"class","svelte-10bbby6")},m(e,s){p(e,t,s),h(t,r)},p(e,t){4&t&&m(r,e[2])},d(e){e&&n(t)}}}function V(e){let t,r,s,o,l=e[5]&&Q(e),m=e[6]&&X(e),u=e[7]&&K(e);return{c(){t=a("div"),l&&l.c(),r=S(),m&&m.c(),s=S(),u&&u.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var a=c(t);l&&l.l(a),r=$(a),m&&m.l(a),s=$(a),u&&u.l(a),a.forEach(n),this.h()},h(){g(t,"class","buttons svelte-10bbby6")},m(e,a){p(e,t,a),l&&l.m(t,null),h(t,r),m&&m.m(t,null),h(t,s),u&&u.m(t,null),o=!0},p(e,a){e[5]?l?(l.p(e,a),32&a&&b(l,1)):(l=Q(e),l.c(),b(l,1),l.m(t,r)):l&&(w(),v(l,1,1,()=>{l=null}),P()),e[6]?m?(m.p(e,a),64&a&&b(m,1)):(m=X(e),m.c(),b(m,1),m.m(t,s)):m&&(w(),v(m,1,1,()=>{m=null}),P()),e[7]?u?(u.p(e,a),128&a&&b(u,1)):(u=K(e),u.c(),b(u,1),u.m(t,null)):u&&(w(),v(u,1,1,()=>{u=null}),P())},i(e){o||(b(l),b(m),b(u),o=!0)},o(e){v(l),v(m),v(u),o=!1},d(e){e&&n(t),l&&l.d(),m&&m.d(),u&&u.d()}}}function Q(e){let t;const r=new H({props:{href:e[5],$$slots:{default:[z]},$$scope:{ctx:e}}});return{c(){I(r.$$.fragment)},l(e){M(r.$$.fragment,e)},m(e,s){E(r,e,s),t=!0},p(e,t){const s={};32&t&&(s.href=e[5]),256&t&&(s.$$scope={dirty:t,ctx:e}),r.$set(s)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){N(r,e)}}}function z(e){let t;return{c(){t=o("GitHub")},l(e){t=l(e,"GitHub")},m(e,r){p(e,t,r)},d(e){e&&n(t)}}}function X(e){let t;const r=new H({props:{href:e[6],$$slots:{default:[Y]},$$scope:{ctx:e}}});return{c(){I(r.$$.fragment)},l(e){M(r.$$.fragment,e)},m(e,s){E(r,e,s),t=!0},p(e,t){const s={};64&t&&(s.href=e[6]),256&t&&(s.$$scope={dirty:t,ctx:e}),r.$set(s)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){N(r,e)}}}function Y(e){let t;return{c(){t=o("Site")},l(e){t=l(e,"Site")},m(e,r){p(e,t,r)},d(e){e&&n(t)}}}function K(e){let t;const r=new H({props:{href:e[7],$$slots:{default:[Z]},$$scope:{ctx:e}}});return{c(){I(r.$$.fragment)},l(e){M(r.$$.fragment,e)},m(e,s){E(r,e,s),t=!0},p(e,t){const s={};128&t&&(s.href=e[7]),256&t&&(s.$$scope={dirty:t,ctx:e}),r.$set(s)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){N(r,e)}}}function Z(e){let t;return{c(){t=o("Blog")},l(e){t=l(e,"Blog")},m(e,r){p(e,t,r)},d(e){e&&n(t)}}}function ee(e){let t,r,s,u,f,d,y,k,C,I=(e[4]||e[3])&&J(e),M=e[0]&&F(e),E=e[2]&&q(e),N=(e[5]||e[6]||e[7])&&V(e);return{c(){t=a("article"),I&&I.c(),r=S(),s=a("div"),u=a("h4"),f=o(e[1]),d=S(),M&&M.c(),y=S(),E&&E.c(),k=S(),N&&N.c(),this.h()},l(a){t=i(a,"ARTICLE",{class:!0});var o=c(t);I&&I.l(o),r=$(o),s=i(o,"DIV",{class:!0});var p=c(s);u=i(p,"H4",{class:!0});var h=c(u);f=l(h,e[1]),h.forEach(n),d=$(p),M&&M.l(p),y=$(p),E&&E.l(p),p.forEach(n),k=$(o),N&&N.l(o),o.forEach(n),this.h()},h(){g(u,"class","svelte-10bbby6"),g(s,"class","content svelte-10bbby6"),g(t,"class","svelte-10bbby6")},m(e,a){p(e,t,a),I&&I.m(t,null),h(t,r),h(t,s),h(s,u),h(u,f),h(s,d),M&&M.m(s,null),h(s,y),E&&E.m(s,null),h(t,k),N&&N.m(t,null),C=!0},p(e,[a]){e[4]||e[3]?I?I.p(e,a):(I=J(e),I.c(),I.m(t,r)):I&&(I.d(1),I=null),(!C||2&a)&&m(f,e[1]),e[0]?M?M.p(e,a):(M=F(e),M.c(),M.m(s,y)):M&&(M.d(1),M=null),e[2]?E?E.p(e,a):(E=q(e),E.c(),E.m(s,null)):E&&(E.d(1),E=null),e[5]||e[6]||e[7]?N?(N.p(e,a),224&a&&b(N,1)):(N=V(e),N.c(),b(N,1),N.m(t,null)):N&&(w(),v(N,1,1,()=>{N=null}),P())},i(e){C||(b(N),C=!0)},o(e){v(N),C=!1},d(e){e&&n(t),I&&I.d(),M&&M.d(),E&&E.d(),N&&N.d()}}}function te(e,t,r){let{title:s}=t,{description:a}=t,{image:o}=t,{preview:i}=t,{repo:c}=t,{site:l}=t,{blog:n}=t,{stack:p}=t;return"string"==typeof p&&(p=[p]),e.$set=e=>{"title"in e&&r(1,s=e.title),"description"in e&&r(2,a=e.description),"image"in e&&r(3,o=e.image),"preview"in e&&r(4,i=e.preview),"repo"in e&&r(5,c=e.repo),"site"in e&&r(6,l=e.site),"blog"in e&&r(7,n=e.blog),"stack"in e&&r(0,p=e.stack)},[p,s,a,o,i,c,l,n]}class re extends t{constructor(e){super(),r(this,e,te,ee,s,{title:1,description:2,image:3,preview:4,repo:5,site:6,blog:7,stack:0})}}var se=[{title:"Libraries / APIs",items:[{title:"facebook-messenger-puppeteer",stack:["Node.js","Puppeteer"],description:"API for Messenger Chat via Puppeteer",repo:"https://github.com/featherbear/facebook-messenger-puppeteer",blog:"https://featherbear.cc/blog/post/facebook-messenger-puppeteer/"},{title:"react-native-mifare-classic-wrapper",repo:"https://github.com/featherbear/react-native-mifare-classic-wrapper/",description:"Wrapper over the react-native-nfc-manager package to provide streamlined Mifare Classic functionality"},{title:"PreSonus StudioLive API",stack:["Node.js","Python"],repo:"https://github.com/featherbear/PreSonus-StudioLive-API",blog:"https://featherbear.cc/blog/post/presonus-studiolive-api/",description:"Exploring the PreSonus network control protocol from a StudioLive Series III"}]},{title:"Security",items:[{title:"Project RATtata",repo:"https://github.com/featherbear/UNSW-COMP6441-RATtata",site:"https://featherbear.cc/UNSW-COMP6441-RATtata/",blog:"https://featherbear.cc/UNSW-COMP6441/blog/post/job-application/something_awesome/",preview:"https://featherbear.cc/UNSW-COMP6441-RATtata/",stack:["Node.js","Vue","Electron"],description:"Remote administration tool project for COMP6441"},{title:"Project Securitears",stack:["Python"],repo:"https://github.com/featherbear/UNSW-COMP6447-ass",site:"https://featherbear.github.io/UNSW-COMP6447-ass",preview:"https://featherbear.cc/UNSW-COMP6447-ass/",description:" Blackbox input fuzzer for COMP6447"},{title:"CSE x SecSoc CTF 2020",blog:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/",image:"https://featherbear.cc/blog/post/csesoc-secsoc-ctf-2020/team.png",description:"Not actually a project, but an honourable mention. I came first in this CTF!"},{title:"UNSW CompClub 2019 CTF Server",stack:["Python","SQLite","JavaScript"],image:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/title_small.gif",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer-ctf/",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-CTF",site:"https://featherbear.cc/UNSW-CompClub2019Summer-CTF/",description:"Custom CTF server for UNSW CompClub"}]},{title:"Teaching Resources",items:[{title:"Learn C",description:"A primer to the C programming language",repo:"https://github.com/featherbear/learn-c/",site:"https://featherbear.cc/learn-c/"},{title:"Learn Data Structures and Algorithms",description:"A primer to common computer data structures and algorithms",repo:"https://github.com/featherbear/learn-data-structures-algorithms/",site:"https://featherbear.cc/learn-data-structures-algorithms/"},{title:"Learn CSS - Hover Buttons",description:"Demonstration on the effects of the placement of the transition style attribute",image:"https://featherbear.cc/blog/post/hover-buttons/preview.png",blog:"https://featherbear.cc/blog/post/hover-buttons/",repo:"https://github.com/featherbear/hover-buttons",site:"https://featherbear.cc/hover-buttons/"},{title:"Image Steganography",description:"Workshop for secondary school students about LSB Image Steganography.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/steganography_preview.png",site:"https://docs.google.com/presentation/d/1kyRsC1-PMJu4UndE6psUHJHuTHX7W6cuYRod1jq3QJY/edit?usp=sharing",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/image_steganography"},{title:"HTTP(S) Security",description:"Presentation for secondary school students about the importance of HTTPS.\nUNSW CompClub 2019 Summer",blog:"https://featherbear.cc/blog/post/unsw-compclub2019summer/",image:"https://featherbear.cc/blog/post/unsw-compclub2019summer/https_preview.png",repo:"https://github.com/featherbear/UNSW-CompClub2019Summer-SecurityWorkshop/tree/master/http_mitm",site:"https://docs.google.com/presentation/d/1ykIUm1xAKMforvTPeqvXMdC4DZlnWOg604ekaybhiOs/edit?usp=sharing"}]},{title:"Client Projects",items:[{title:"UNSW Scientia Signage",stack:["JavaScript"],image:"https://featherbear.cc/blog/post/unsw-scientia-signage/Snipaste_2019-12-09_19-33-07.png",blog:"https://featherbear.cc/blog/post/unsw-scientia-signage/",description:"SPA page to control PiSignage devices"}]},{title:"Sandbox",items:[{title:"Trello e-Paper Display",stack:["Python"],image:"https://featherbear.cc/blog/post/e-paper/20191211_221809.jpg",repo:"https://github.com/featherbear/trello-epd",blog:"https://featherbear.cc/blog/post/e-paper/",description:"Physical to-do list on an e-Paper display"},{title:"Filmstrip Messages",stack:["Svelte"],image:"https://featherbear.cc/blog/post/filmstrip-messages/preview.png",blog:"https://featherbear.cc/blog/post/filmstrip-messages/",site:"https://featherbear.cc/filmstrip-messages/",repo:"https://github.com/featherbear/filmstrip-messages",description:"Photostrip project to house a collection of photos, videos and text notes"},{title:"DeliveryTrack",stack:["JavaScript"],repo:"https://github.com/featherbear/deliverytrack",site:"https://featherbear.cc/deliverytrack/",image:"https://featherbear.cc/blog/post/delivery-track/preview.png",description:"Postal delivery tracking web application with synchronisation between devices"},{title:"Wardrobe",stack:["Svelte"],repo:"https://github.com/featherbear/wardrobe",site:"https://featherbear.cc/wardrobe/",preview:"https://featherbear.cc/wardrobe/",description:"A clothing-oriented photo organisation web application"},{title:"Twinkle Tiles",stack:["p5.js"],image:"https://featherbear.cc/blog/post/processing-twinkle/preview.apng",site:"https://featherbear.github.io/processing-twinkle/",repo:"https://github.com/featherbear/processing-twinkle",blog:"https://featherbear.cc/blog/post/processing-twinkle/"}]},{title:"Multimedia",items:[{title:"Sound Mixer Simulator",site:"https://featherbear.cc/mixer/",repo:"https://github.com/featherbear/mixer/",stack:["React"],description:"Interactive teaching tool for the PreSonus StudioLive 16 Series III sound console"},{title:"ProPresenter Stage Display Messages",stack:["JavaScript"],site:"http://pp6sdm.apps.navhaxs.au.eu.org/",image:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/screenshot.png",blog:"https://featherbear.cc/blog/post/propresenter6-stage-display-messages-client/",repo:"https://github.com/featherbear/propresenter-stagemessages",description:"Remote stage message client for ProPresenter 6"},{title:"ProPresenter 6/7 OBS Scene Switcher",stack:["Node.js"],repo:"https://github.com/featherbear/propresenter-obs-scene-switcher",description:"Switch OBS scenes depending on the current ProPresenter content"},{title:"ProPresenter 6 Local Sync Tool",stack:["C#",".NET"],repo:"https://github.com/featherbear/propresenter-local-sync-tool",image:"https://raw.githubusercontent.com/featherbear/propresenter-local-sync-tool/master/logo.ico",description:"A buggy file synchronisation tool that's less buggy than ProPresenter 6's inbuilt one"},{title:"OnCue Projector",stack:["Python","Qt"],repo:"https://github.com/featherbear/OnCue",description:"Multimedia presentation software for seamless playback of content\nHSC Major Project"},{title:"BlueClick BLE",stack:["Arduino"],blog:"https://featherbear.cc/blog/post/blueclick/",repo:"https://github.com/featherbear/BlueClick_BLE",description:"Page turner for OnSong, through sending MIDI notes over Bluetooth Low Energy"}]},{title:"Games",items:[{title:"Stacker Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_stack.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-stacker-game/",repo:"https://github.com/featherbear/p5-stacker-game/"},{title:"Queuer Game",stack:["p5.js"],image:"https://featherbear.cc/blog/post/p5-stack-queue-games/preview_queue.apng",blog:"https://featherbear.cc/blog/post/p5-stack-queue-games",site:"https://featherbear.cc/p5-queuer-game/",repo:"https://github.com/featherbear/p5-queuer-game/"},{title:"Platformer Game",stack:["p5.js"],description:"A platformer 'game'\n(that I never really started)",repo:"https://github.com/featherbear/processing-platformer",site:"https://featherbear.cc/processing-platformer/"},{title:"Dungeon Game",stack:["Java","JavaFX"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2",blog:"https://featherbear.cc/UNSW-COMP2511/post/assign2/",image:"https://featherbear.cc/UNSW-COMP2511/post/assign2/demo.gif"},{title:"Dungeon Game (Text Edition)",stack:["Java","JNA"],repo:"https://github.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/",blog:"https://featherbear.cc/blog/post/dungeon-console/",image:"https://raw.githubusercontent.com/featherbear/UNSW-COMP2511-ass2-DungeonConsole/master/demo_advanced.gif"},{title:"Balloon Shooting Game",stack:["SmallBasic"],blog:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/",repo:"https://github.com/featherbear/smallbasic-balloon-shooting-game",image:"https://featherbear.cc/blog/post/smallbasic-balloon-shooting-game/animation.gif",description:"Making a game in Small Basic. Oh boy."},{title:"Whoops! There Goes My AI",stack:["Python","wxPython","OpenCV"],blog:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/",image:"https://featherbear.cc/blog/post/whoops-there-goes-my-ai/preview.apng",repo:"https://github.com/featherbear/Whoops-There-Goes-My-AI/",description:"Computer vision game automator"}]}];function ae(e,t,r){const s=e.slice();return s[4]=t[r],s}function oe(e,t,r){const s=e.slice();return s[1]=t[r],s}function ie(e){let t;const r=new re({props:{title:e[4].title,description:e[4].description,image:e[4].image,preview:e[4].preview,repo:e[4].repo,site:e[4].site,blog:e[4].blog,stack:e[4].stack}});return{c(){I(r.$$.fragment)},l(e){M(r.$$.fragment,e)},m(e,s){E(r,e,s),t=!0},p:j,i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){N(r,e)}}}function ce(e){let t,r,s=e[1].items&&function(e){let t,r,s=e[1].items,a=[];for(let t=0;t<s.length;t+=1)a[t]=ie(ae(e,s,t));const o=e=>v(a[e],1,1,()=>{a[e]=null});return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=x()},l(e){for(let t=0;t<a.length;t+=1)a[t].l(e);t=x()},m(e,s){for(let t=0;t<a.length;t+=1)a[t].m(e,s);p(e,t,s),r=!0},p(e,r){if(1&r){let i;for(s=e[1].items,i=0;i<s.length;i+=1){const o=ae(e,s,i);a[i]?(a[i].p(o,r),b(a[i],1)):(a[i]=ie(o),a[i].c(),b(a[i],1),a[i].m(t.parentNode,t))}for(w(),i=s.length;i<a.length;i+=1)o(i);P()}},i(e){if(!r){for(let e=0;e<s.length;e+=1)b(a[e]);r=!0}},o(e){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)v(a[e]);r=!1},d(e){W(a,e),e&&n(t)}}}(e);return{c(){s&&s.c(),t=x()},l(e){s&&s.l(e),t=x()},m(e,a){s&&s.m(e,a),p(e,t,a),r=!0},p(e,t){e[1].items&&s.p(e,t)},i(e){r||(b(s),r=!0)},o(e){v(s),r=!1},d(e){s&&s.d(e),e&&n(t)}}}function le(e){let t;const r=new B({props:{title:e[1].title,$$slots:{default:[ce]},$$scope:{ctx:e}}});return{c(){I(r.$$.fragment)},l(e){M(r.$$.fragment,e)},m(e,s){E(r,e,s),t=!0},p(e,t){const s={};128&t&&(s.$$scope={dirty:t,ctx:e}),r.$set(s)},i(e){t||(b(r.$$.fragment,e),t=!0)},o(e){v(r.$$.fragment,e),t=!1},d(e){N(r,e)}}}function ne(e){let t,r,s,m,u,f,d,y,k,C,I,M,E,N,x,j,A,_,O,U,D,B=e[0],L=[];for(let t=0;t<B.length;t+=1)L[t]=le(oe(e,B,t));const R=e=>v(L[e],1,1,()=>{L[e]=null});return{c(){t=a("h4"),r=o("TL;DR"),s=S(),m=a("p"),u=o("I guess I've made a few things."),f=S(),d=a("p"),y=o("What's recently caught my eye is Svelte - a Javascript framework that has a\n  much lighter footprint than React."),k=S(),C=a("p"),I=o("My interest in programming lies in things related to security, multimedia, and\n  communication."),M=S(),E=a("hr"),N=S();for(let e=0;e<L.length;e+=1)L[e].c();x=S(),j=a("h4"),A=o("An invalid metric of my programming life"),_=S(),O=a("img"),this.h()},l(e){t=i(e,"H4",{});var a=c(t);r=l(a,"TL;DR"),a.forEach(n),s=$(e),m=i(e,"P",{});var o=c(m);u=l(o,"I guess I've made a few things."),o.forEach(n),f=$(e),d=i(e,"P",{});var p=c(d);y=l(p,"What's recently caught my eye is Svelte - a Javascript framework that has a\n  much lighter footprint than React."),p.forEach(n),k=$(e),C=i(e,"P",{});var h=c(C);I=l(h,"My interest in programming lies in things related to security, multimedia, and\n  communication."),h.forEach(n),M=$(e),E=i(e,"HR",{}),N=$(e);for(let t=0;t<L.length;t+=1)L[t].l(e);x=$(e),j=i(e,"H4",{});var g=c(j);A=l(g,"An invalid metric of my programming life"),g.forEach(n),_=$(e),O=i(e,"IMG",{alt:!0,style:!0,src:!0}),this.h()},h(){g(O,"alt","github stats"),T(O,"width","100%"),T(O,"max-width","500px"),O.src!==(U="https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")&&g(O,"src","https://github-readme-stats.vercel.app/api?username=featherbear&include_all_commits=true&show_icons=true&count_private=true&hide_rank=true&hide_total=true&theme=nord")},m(e,a){p(e,t,a),h(t,r),p(e,s,a),p(e,m,a),h(m,u),p(e,f,a),p(e,d,a),h(d,y),p(e,k,a),p(e,C,a),h(C,I),p(e,M,a),p(e,E,a),p(e,N,a);for(let t=0;t<L.length;t+=1)L[t].m(e,a);p(e,x,a),p(e,j,a),h(j,A),p(e,_,a),p(e,O,a),D=!0},p(e,[t]){if(1&t){let r;for(B=e[0],r=0;r<B.length;r+=1){const s=oe(e,B,r);L[r]?(L[r].p(s,t),b(L[r],1)):(L[r]=le(s),L[r].c(),b(L[r],1),L[r].m(x.parentNode,x))}for(w(),r=B.length;r<L.length;r+=1)R(r);P()}},i(e){if(!D){for(let e=0;e<B.length;e+=1)b(L[e]);D=!0}},o(e){L=L.filter(Boolean);for(let e=0;e<L.length;e+=1)v(L[e]);D=!1},d(e){e&&n(t),e&&n(s),e&&n(m),e&&n(f),e&&n(d),e&&n(k),e&&n(C),e&&n(M),e&&n(E),e&&n(N),W(L,e),e&&n(x),e&&n(j),e&&n(_),e&&n(O)}}}function pe(e){for(let e of se)e.items&&e.items.sort((e,t)=>{let r=!(!t.image&&!t.preview),s=!(!e.image&&!e.preview);return s!=r?r-s:t.title<e.title});return[se]}export default class extends t{constructor(e){super(),r(this,e,pe,ne,s,{})}}
