import{S as t,i as e,s as n,e as l,o as r,a as s,b as i,r as o,d as c,f as a,g as u,h as f,O as m,m as h,p,E as g,B as d,H as $,t as C,n as S,q as v,w as y,U as E,V as T,l as x,x as A,L as b,M as w,A as V,R as I,W as N,v as j}from"./client.261ce7c7.js";import{N as D}from"./NameBlock.3c96ae89.js";import{P,a as L}from"./aboutText.c3451714.js";import{B as W}from"./Button.4b85ec2a.js";function B(t,e,n){const l=t.slice();return l[4]=e[n],l}function F(t){let e,n;return{c(){e=l("subtitle"),n=r(t[1]),this.h()},l(l){e=s(l,"SUBTITLE",{class:!0});var r=i(e);n=o(r,t[1]),r.forEach(c),this.h()},h(){a(e,"class","svelte-jjopql")},m(t,l){u(t,e,l),f(e,n)},p(t,e){2&e&&m(n,t[1])},d(t){t&&c(e)}}}function U(t){let e,n;function r(t,e){return 4&e&&(n=null),null==n&&(n=!!Array.isArray(t[2])),n?R:H}let o=r(t,-1),f=o(t);return{c(){e=l("p"),f.c(),this.h()},l(t){e=s(t,"P",{class:!0});var n=i(e);f.l(n),n.forEach(c),this.h()},h(){a(e,"class","svelte-jjopql")},m(t,n){u(t,e,n),f.m(e,null)},p(t,n){o===(o=r(t,n))&&f?f.p(t,n):(f.d(1),f=o(t),f&&(f.c(),f.m(e,null)))},d(t){t&&c(e),f.d()}}}function H(t){let e;return{c(){e=r(t[2])},l(n){e=o(n,t[2])},m(t,n){u(t,e,n)},p(t,n){4&n&&m(e,t[2])},d(t){t&&c(e)}}}function R(t){let e,n=t[2],r=[];for(let e=0;e<n.length;e+=1)r[e]=k(B(t,n,e));return{c(){e=l("ul");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=s(t,"UL",{class:!0});var n=i(e);for(let t=0;t<r.length;t+=1)r[t].l(n);n.forEach(c),this.h()},h(){a(e,"class","svelte-jjopql")},m(t,n){u(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,l){if(4&l){let s;for(n=t[2],s=0;s<n.length;s+=1){const i=B(t,n,s);r[s]?r[s].p(i,l):(r[s]=k(i),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(t){t&&c(e),d(r,t)}}}function k(t){let e,n,a=t[4]+"";return{c(){e=l("li"),n=r(a)},l(t){e=s(t,"LI",{});var l=i(e);n=o(l,a),l.forEach(c)},m(t,l){u(t,e,l),f(e,n)},p(t,e){4&e&&a!==(a=t[4]+"")&&m(n,a)},d(t){t&&c(e)}}}function q(t){let e,n,d,$,C,S=t[1]&&F(t),v=t[2]&&U(t);return{c(){e=l("article"),n=l("h1"),d=r(t[0]),$=h(),S&&S.c(),C=h(),v&&v.c(),this.h()},l(l){e=s(l,"ARTICLE",{class:!0});var r=i(e);n=s(r,"H1",{class:!0});var a=i(n);d=o(a,t[0]),a.forEach(c),$=p(r),S&&S.l(r),C=p(r),v&&v.l(r),r.forEach(c),this.h()},h(){a(n,"class","svelte-jjopql"),a(e,"class","svelte-jjopql")},m(t,l){u(t,e,l),f(e,n),f(n,d),f(e,$),S&&S.m(e,null),f(e,C),v&&v.m(e,null)},p(t,[n]){1&n&&m(d,t[0]),t[1]?S?S.p(t,n):(S=F(t),S.c(),S.m(e,C)):S&&(S.d(1),S=null),t[2]?v?v.p(t,n):(v=U(t),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},i:g,o:g,d(t){t&&c(e),S&&S.d(),v&&v.d()}}}function O(t,e,n){let{title:l=""}=e,{subtitle:r=null}=e;let{description:s=null}=e;return t.$$set=t=>{"title"in t&&n(0,l=t.title),"subtitle"in t&&n(1,r=t.subtitle),"description"in t&&n(2,s=t.description)},[l,r,s,[]]}class M extends t{constructor(t){super(),e(this,t,O,q,n,{title:0,subtitle:1,categories:3,description:2})}get categories(){return this.$$.ctx[3]}}function G(t){let e,n;return{c(){e=l("article"),n=r(t[0]),this.h()},l(l){e=s(l,"ARTICLE",{class:!0});var r=i(e);n=o(r,t[0]),r.forEach(c),this.h()},h(){a(e,"class","svelte-11l1rde")},m(t,l){u(t,e,l),f(e,n)},p(t,[e]){1&e&&m(n,t[0])},i:g,o:g,d(t){t&&c(e)}}}function z(t,e,n){let{text:l=""}=e;return t.$$set=t=>{"text"in t&&n(0,l=t.text)},[l]}class K extends t{constructor(t){super(),e(this,t,z,G,n,{text:0})}}function J(t,e,n){const l=t.slice();return l[5]=e[n],l}function Q(t,e,n){const l=t.slice();return l[8]=e[n],l}function X(t,e,n){const l=t.slice();return l[11]=e[n],l}function Y(t){let e,n;return{c(){e=l("div"),n=r(t[1]),this.h()},l(l){e=s(l,"DIV",{class:!0});var r=i(e);n=o(r,t[1]),r.forEach(c),this.h()},h(){a(e,"class","preContent svelte-1882sn8")},m(t,l){u(t,e,l),f(e,n)},p(t,e){2&e&&m(n,t[1])},d(t){t&&c(e)}}}function Z(t){let e,n,l,r;e=new K({props:{text:t[8].title||">UNKNOWN TITLE<"}});let s=t[8].contents,i=[];for(let e=0;e<s.length;e+=1)i[e]=tt(X(t,s,e));const o=t=>x(i[t],1,1,(()=>{i[t]=null}));return{c(){S(e.$$.fragment),n=h();for(let t=0;t<i.length;t+=1)i[t].c();l=$()},l(t){v(e.$$.fragment,t),n=p(t);for(let e=0;e<i.length;e+=1)i[e].l(t);l=$()},m(t,s){y(e,t,s),u(t,n,s);for(let e=0;e<i.length;e+=1)i[e].m(t,s);u(t,l,s),r=!0},p(t,n){const r={};if(1&n&&(r.text=t[8].title||">UNKNOWN TITLE<"),e.$set(r),9&n){let e;for(s=t[8].contents,e=0;e<s.length;e+=1){const r=X(t,s,e);i[e]?(i[e].p(r,n),C(i[e],1)):(i[e]=tt(r),i[e].c(),C(i[e],1),i[e].m(l.parentNode,l))}for(b(),e=s.length;e<i.length;e+=1)o(e);w()}},i(t){if(!r){C(e.$$.fragment,t);for(let t=0;t<s.length;t+=1)C(i[t]);r=!0}},o(t){x(e.$$.fragment,t),i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)x(i[t]);r=!1},d(t){A(e,t),t&&c(n),d(i,t),t&&c(l)}}}function _(t){let e,n;const l=[t[11]];let r={};for(let t=0;t<l.length;t+=1)r=N(r,l[t]);return e=new M({props:r}),{c(){S(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){y(e,t,l),n=!0},p(t,n){const r=1&n?E(l,[T(t[11])]):{};e.$set(r)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function tt(t){let e,n,l=!t[3]||t[11].categories.includes(t[3]),r=l&&_(t);return{c(){r&&r.c(),e=$()},l(t){r&&r.l(t),e=$()},m(t,l){r&&r.m(t,l),u(t,e,l),n=!0},p(t,n){9&n&&(l=!t[3]||t[11].categories.includes(t[3])),l?r?(r.p(t,n),9&n&&C(r,1)):(r=_(t),r.c(),C(r,1),r.m(e.parentNode,e)):r&&(b(),x(r,1,1,(()=>{r=null})),w())},i(t){n||(C(r),n=!0)},o(t){x(r),n=!1},d(t){r&&r.d(t),t&&c(e)}}}function et(t){let e,n,l=!t[3]||t[8].contents.map(rt).flat().includes(t[3]),r=l&&Z(t);return{c(){r&&r.c(),e=$()},l(t){r&&r.l(t),e=$()},m(t,l){r&&r.m(t,l),u(t,e,l),n=!0},p(t,n){9&n&&(l=!t[3]||t[8].contents.map(rt).flat().includes(t[3])),l?r?(r.p(t,n),9&n&&C(r,1)):(r=Z(t),r.c(),C(r,1),r.m(e.parentNode,e)):r&&(b(),x(r,1,1,(()=>{r=null})),w())},i(t){n||(C(r),n=!0)},o(t){x(r),n=!1},d(t){r&&r.d(t),t&&c(e)}}}function nt(t){let e,n,h,p,g=t[5]+"";function d(){return t[4](t[5])}return{c(){e=l("button"),n=r(g),this.h()},l(t){e=s(t,"BUTTON",{class:!0});var l=i(e);n=o(l,g),l.forEach(c),this.h()},h(){a(e,"class","svelte-1882sn8"),V(e,"isActiveCategory",t[3]==t[5]||!t[3])},m(t,l){u(t,e,l),f(e,n),h||(p=I(e,"click",d),h=!0)},p(l,r){t=l,4&r&&g!==(g=t[5]+"")&&m(n,g),12&r&&V(e,"isActiveCategory",t[3]==t[5]||!t[3])},d(t){t&&c(e),h=!1,p()}}}function lt(t){let e,n,m,g,$,S,v,y,E,T=t[1]&&Y(t),A=t[0],V=[];for(let e=0;e<A.length;e+=1)V[e]=et(Q(t,A,e));const I=t=>x(V[t],1,1,(()=>{V[t]=null}));let N=t[2],j=[];for(let e=0;e<N.length;e+=1)j[e]=nt(J(t,N,e));return{c(){e=l("div"),T&&T.c(),n=h();for(let t=0;t<V.length;t+=1)V[t].c();m=h(),g=l("div"),$=l("span"),S=r("Filter Categories"),v=h(),y=l("div");for(let t=0;t<j.length;t+=1)j[t].c();this.h()},l(t){e=s(t,"DIV",{class:!0});var l=i(e);T&&T.l(l),n=p(l);for(let t=0;t<V.length;t+=1)V[t].l(l);l.forEach(c),m=p(t),g=s(t,"DIV",{class:!0});var r=i(g);$=s(r,"SPAN",{});var a=i($);S=o(a,"Filter Categories"),a.forEach(c),v=p(r),y=s(r,"DIV",{class:!0});var u=i(y);for(let t=0;t<j.length;t+=1)j[t].l(u);u.forEach(c),r.forEach(c),this.h()},h(){a(e,"class","line svelte-1882sn8"),a(y,"class","svelte-1882sn8"),a(g,"class","noprint categorySelect svelte-1882sn8")},m(t,l){u(t,e,l),T&&T.m(e,null),f(e,n);for(let t=0;t<V.length;t+=1)V[t].m(e,null);u(t,m,l),u(t,g,l),f(g,$),f($,S),f(g,v),f(g,y);for(let t=0;t<j.length;t+=1)j[t].m(y,null);E=!0},p(t,[l]){if(t[1]?T?T.p(t,l):(T=Y(t),T.c(),T.m(e,n)):T&&(T.d(1),T=null),9&l){let n;for(A=t[0],n=0;n<A.length;n+=1){const r=Q(t,A,n);V[n]?(V[n].p(r,l),C(V[n],1)):(V[n]=et(r),V[n].c(),C(V[n],1),V[n].m(e,null))}for(b(),n=A.length;n<V.length;n+=1)I(n);w()}if(12&l){let e;for(N=t[2],e=0;e<N.length;e+=1){const n=J(t,N,e);j[e]?j[e].p(n,l):(j[e]=nt(n),j[e].c(),j[e].m(y,null))}for(;e<j.length;e+=1)j[e].d(1);j.length=N.length}},i(t){if(!E){for(let t=0;t<A.length;t+=1)C(V[t]);E=!0}},o(t){V=V.filter(Boolean);for(let t=0;t<V.length;t+=1)x(V[t]);E=!1},d(t){t&&c(e),T&&T.d(),d(V,t),t&&c(m),t&&c(g),d(j,t)}}}const rt=t=>t.categories;function st(t,e,n){let{data:l=[]}=e,{preContent:r}=e,s=[],i=null;return t.$$set=t=>{"data"in t&&n(0,l=t.data),"preContent"in t&&n(1,r=t.preContent)},t.$$.update=()=>{1&t.$$.dirty&&n(2,s=[...new Set(l.map((t=>t.contents.map((t=>t.categories||null)))).flat().flat())].filter((t=>t)))},[l,r,s,i,t=>n(3,i=i==t?null:t)]}class it extends t{constructor(t){super(),e(this,t,st,lt,n,{data:0,preContent:1})}}function ot(t,e){return{title:t,contents:e}}function ct(t,e=null,n=[],l=null){return{title:t,subtitle:e,categories:n,description:l}}var at=[ot("2023",[ct("Security Engineer @ Atlassian",null,["Security","Computing"])]),ot("2022",[ct("Graduated from UNSW","BE (Hons) Computer Engineering (Honours Class 1)",["Computing"]),ct("Thesis Publication",null,["Computing","Security"],"“Smart” Vacuum Cleaners - An Audit Into The Security and Integrity of IoT Systems"),ct("Research & Development Engineer @ Audinate",null,["Audio/Visual","Computing"])]),ot("2021",[ct("Security Engineer @ Atlassian",null,["Security","Computing"]),ct("First in CSE x SecSoc CTF Competition",null,["Security","Computing"]),ct("CommBank Cyber Prize",null,["Security"],"Received an award in recognition of excellence in COMP6843 (Extended Web Application Security)"),ct("Broadcast Engineer @ UNSW Sydney",null,["Audio/Visual"],"Livestreaming of university events and lectures")]),ot("2020",[ct("First in COMP6[84]43 Course",null,["Security","Computing"],"Web Application Security and Testing"),ct("First in CSE x SecSoc CTF Competition",null,["Security","Computing"]),ct("Two Hands Lifted","2020 - present",["Audio/Visual"],"Wedding Videography and Livestreaming")]),ot("2019",[ct("Volunteer @ Sculpture by the Sea","2015, 2019",[]),ct("Computer Science Tutor @ UNSW Sydney","2019 - present",["Computing","Security"],"Teaching of higher level Computer Science courses and extended UG/PG Cyber Security streams"),ct("Workshop Content Writer @ CSE CompClub 2019 Summer",null,["Security","Computing"],"Created workshop content about information security and security engineering."),ct("Ryndeum","2019 - present",["Computing"],"Software Solutions")]),ot("2018",[ct("Mentor @ CSE CompClub 2018 Winter",null,["Security","Computing"]),ct("Event Technician @ UNSW Hospitality","2018 - 2020",["Audio/Visual","Computing"]),ct("Started Electrical Engineering / Computer Science at UNSW Sydney",null,["Computing"])]),ot("2017",[ct("Graduated from Sydney Technical High School","2012 - 2017",["Computing","Audio/Visual"],["School Prefect","First in Information Processes & Technology","First in Software Design & Development","First in Electronics","Deputy Principals’ Prize for Senior Contribution to School Life","Sound and Lighting Crew Director"]),ct("AV Technician @ RICE Movement","2017 - 2022",["Audio/Visual"])])];function ut(t){let e;return{c(){e=r("Download as PDF")},l(t){e=o(t,"Download as PDF")},m(t,n){u(t,e,n)},d(t){t&&c(e)}}}function ft(t){let e;return{c(){e=r("View complete resume")},l(t){e=o(t,"View complete resume")},m(t,n){u(t,e,n)},d(t){t&&c(e)}}}function mt(t){let e,n,r,o,m,g,d,$,E,T,b,w,V,I,N;return n=new P({}),o=new it({props:{data:at,preContent:L}}),d=new W({props:{href:"resume/pdf",openInNewTab:!0,$$slots:{default:[ut]},$$scope:{ctx:t}}}),E=new W({props:{href:"resume/full",$$slots:{default:[ft]},$$scope:{ctx:t}}}),w=new D({props:{rightAlign:!0}}),{c(){e=l("div"),S(n.$$.fragment),r=h(),S(o.$$.fragment),m=h(),g=l("p"),S(d.$$.fragment),$=h(),S(E.$$.fragment),T=h(),b=l("div"),S(w.$$.fragment),V=h(),I=l("div"),this.h()},l(t){e=s(t,"DIV",{id:!0,class:!0});var l=i(e);v(n.$$.fragment,l),r=p(l),v(o.$$.fragment,l),m=p(l),g=s(l,"P",{class:!0,style:!0});var a=i(g);v(d.$$.fragment,a),$=p(a),v(E.$$.fragment,a),a.forEach(c),l.forEach(c),T=p(t),b=s(t,"DIV",{class:!0});var u=i(b);v(w.$$.fragment,u),u.forEach(c),V=p(t),I=s(t,"DIV",{class:!0}),i(I).forEach(c),this.h()},h(){a(g,"class","noprint"),j(g,"text-align","center"),a(e,"id","container"),a(e,"class","svelte-1fjo0p8"),a(b,"class","nameBlockContainer svelte-1fjo0p8"),a(I,"class","randomPrintLine svelte-1fjo0p8")},m(t,l){u(t,e,l),y(n,e,null),f(e,r),y(o,e,null),f(e,m),f(e,g),y(d,g,null),f(g,$),y(E,g,null),u(t,T,l),u(t,b,l),y(w,b,null),u(t,V,l),u(t,I,l),N=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),d.$set(n);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),E.$set(l)},i(t){N||(C(n.$$.fragment,t),C(o.$$.fragment,t),C(d.$$.fragment,t),C(E.$$.fragment,t),C(w.$$.fragment,t),N=!0)},o(t){x(n.$$.fragment,t),x(o.$$.fragment,t),x(d.$$.fragment,t),x(E.$$.fragment,t),x(w.$$.fragment,t),N=!1},d(t){t&&c(e),A(n),A(o),A(d),A(E),t&&c(T),t&&c(b),A(w),t&&c(V),t&&c(I)}}}export default class extends t{constructor(t){super(),e(this,t,null,mt,n,{})}}