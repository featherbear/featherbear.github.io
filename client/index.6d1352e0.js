import{S as t,i as e,s as n,e as l,m as r,a as s,b as i,p as o,d as a,f as c,g as u,h as f,K as m,k as h,n as d,B as p,z as g,E as $,t as C,l as S,o as v,r as y,O as E,P as x,j as T,v as w,H as I,I as b,y as A,N as V,Q as N,q as P}from"./client.b0b84102.js";import{N as D}from"./NameBlock.25889fe9.js";import{P as L,a as k}from"./aboutText.aa0047a6.js";import{B as F}from"./Button.d3991046.js";function B(t,e,n){const l=t.slice();return l[4]=e[n],l}function W(t){let e,n;return{c(){e=l("subtitle"),n=r(t[1]),this.h()},l(l){e=s(l,"SUBTITLE",{class:!0});var r=i(e);n=o(r,t[1]),r.forEach(a),this.h()},h(){c(e,"class","svelte-1ynsxpd")},m(t,l){u(t,e,l),f(e,n)},p(t,e){2&e&&m(n,t[1])},d(t){t&&a(e)}}}function U(t){let e,n;function r(t,e){return(null==n||4&e)&&(n=!!Array.isArray(t[2])),n?H:j}let o=r(t,-1),f=o(t);return{c(){e=l("p"),f.c(),this.h()},l(t){e=s(t,"P",{class:!0});var n=i(e);f.l(n),n.forEach(a),this.h()},h(){c(e,"class","svelte-1ynsxpd")},m(t,n){u(t,e,n),f.m(e,null)},p(t,n){o===(o=r(t,n))&&f?f.p(t,n):(f.d(1),f=o(t),f&&(f.c(),f.m(e,null)))},d(t){t&&a(e),f.d()}}}function j(t){let e;return{c(){e=r(t[2])},l(n){e=o(n,t[2])},m(t,n){u(t,e,n)},p(t,n){4&n&&m(e,t[2])},d(t){t&&a(e)}}}function H(t){let e,n=t[2],r=[];for(let e=0;e<n.length;e+=1)r[e]=O(B(t,n,e));return{c(){e=l("ul");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=s(t,"UL",{class:!0});var n=i(e);for(let t=0;t<r.length;t+=1)r[t].l(n);n.forEach(a),this.h()},h(){c(e,"class","svelte-1ynsxpd")},m(t,n){u(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,l){if(4&l){let s;for(n=t[2],s=0;s<n.length;s+=1){const i=B(t,n,s);r[s]?r[s].p(i,l):(r[s]=O(i),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(t){t&&a(e),g(r,t)}}}function O(t){let e,n,c=t[4]+"";return{c(){e=l("li"),n=r(c)},l(t){e=s(t,"LI",{});var l=i(e);n=o(l,c),l.forEach(a)},m(t,l){u(t,e,l),f(e,n)},p(t,e){4&e&&c!==(c=t[4]+"")&&m(n,c)},d(t){t&&a(e)}}}function R(t){let e,n,g,$,C,S=t[1]&&W(t),v=t[2]&&U(t);return{c(){e=l("article"),n=l("h1"),g=r(t[0]),$=h(),S&&S.c(),C=h(),v&&v.c(),this.h()},l(l){e=s(l,"ARTICLE",{class:!0});var r=i(e);n=s(r,"H1",{class:!0});var c=i(n);g=o(c,t[0]),c.forEach(a),$=d(r),S&&S.l(r),C=d(r),v&&v.l(r),r.forEach(a),this.h()},h(){c(n,"class","svelte-1ynsxpd"),c(e,"class","svelte-1ynsxpd")},m(t,l){u(t,e,l),f(e,n),f(n,g),f(e,$),S&&S.m(e,null),f(e,C),v&&v.m(e,null)},p(t,[n]){1&n&&m(g,t[0]),t[1]?S?S.p(t,n):(S=W(t),S.c(),S.m(e,C)):S&&(S.d(1),S=null),t[2]?v?v.p(t,n):(v=U(t),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},i:p,o:p,d(t){t&&a(e),S&&S.d(),v&&v.d()}}}function z(t,e,n){let{title:l=""}=e,{subtitle:r=null}=e;let{description:s=null}=e;return t.$$set=t=>{"title"in t&&n(0,l=t.title),"subtitle"in t&&n(1,r=t.subtitle),"description"in t&&n(2,s=t.description)},[l,r,s,[]]}class G extends t{constructor(t){super(),e(this,t,z,R,n,{title:0,subtitle:1,categories:3,description:2})}get categories(){return this.$$.ctx[3]}}function K(t){let e,n;return{c(){e=l("article"),n=r(t[0]),this.h()},l(l){e=s(l,"ARTICLE",{class:!0});var r=i(e);n=o(r,t[0]),r.forEach(a),this.h()},h(){c(e,"class","svelte-xwwqs0")},m(t,l){u(t,e,l),f(e,n)},p(t,[e]){1&e&&m(n,t[0])},i:p,o:p,d(t){t&&a(e)}}}function M(t,e,n){let{text:l=""}=e;return t.$$set=t=>{"text"in t&&n(0,l=t.text)},[l]}class q extends t{constructor(t){super(),e(this,t,M,K,n,{text:0})}}function Q(t,e,n){const l=t.slice();return l[5]=e[n],l}function J(t,e,n){const l=t.slice();return l[8]=e[n],l}function X(t,e,n){const l=t.slice();return l[11]=e[n],l}function Y(t){let e,n;return{c(){e=l("div"),n=r(t[1]),this.h()},l(l){e=s(l,"DIV",{class:!0});var r=i(e);n=o(r,t[1]),r.forEach(a),this.h()},h(){c(e,"class","preContent svelte-2da8tk")},m(t,l){u(t,e,l),f(e,n)},p(t,e){2&e&&m(n,t[1])},d(t){t&&a(e)}}}function Z(t){let e,n,l,r;e=new q({props:{text:t[8].title||">UNKNOWN TITLE<"}});let s=t[8].contents,i=[];for(let e=0;e<s.length;e+=1)i[e]=tt(X(t,s,e));const o=t=>T(i[t],1,1,()=>{i[t]=null});return{c(){S(e.$$.fragment),n=h();for(let t=0;t<i.length;t+=1)i[t].c();l=$()},l(t){v(e.$$.fragment,t),n=d(t);for(let e=0;e<i.length;e+=1)i[e].l(t);l=$()},m(t,s){y(e,t,s),u(t,n,s);for(let e=0;e<i.length;e+=1)i[e].m(t,s);u(t,l,s),r=!0},p(t,n){const r={};if(1&n&&(r.text=t[8].title||">UNKNOWN TITLE<"),e.$set(r),9&n){let e;for(s=t[8].contents,e=0;e<s.length;e+=1){const r=X(t,s,e);i[e]?(i[e].p(r,n),C(i[e],1)):(i[e]=tt(r),i[e].c(),C(i[e],1),i[e].m(l.parentNode,l))}for(I(),e=s.length;e<i.length;e+=1)o(e);b()}},i(t){if(!r){C(e.$$.fragment,t);for(let t=0;t<s.length;t+=1)C(i[t]);r=!0}},o(t){T(e.$$.fragment,t),i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)T(i[t]);r=!1},d(t){w(e,t),t&&a(n),g(i,t),t&&a(l)}}}function _(t){let e,n;const l=[t[11]];let r={};for(let t=0;t<l.length;t+=1)r=N(r,l[t]);return e=new G({props:r}),{c(){S(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){y(e,t,l),n=!0},p(t,n){const r=1&n?E(l,[x(t[11])]):{};e.$set(r)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function tt(t){let e,n,l=!t[3]||t[11].categories.includes(t[3]),r=l&&_(t);return{c(){r&&r.c(),e=$()},l(t){r&&r.l(t),e=$()},m(t,l){r&&r.m(t,l),u(t,e,l),n=!0},p(t,n){9&n&&(l=!t[3]||t[11].categories.includes(t[3])),l?r?(r.p(t,n),9&n&&C(r,1)):(r=_(t),r.c(),C(r,1),r.m(e.parentNode,e)):r&&(I(),T(r,1,1,()=>{r=null}),b())},i(t){n||(C(r),n=!0)},o(t){T(r),n=!1},d(t){r&&r.d(t),t&&a(e)}}}function et(t){let e,n,l=!t[3]||t[8].contents.map(rt).flat().includes(t[3]),r=l&&Z(t);return{c(){r&&r.c(),e=$()},l(t){r&&r.l(t),e=$()},m(t,l){r&&r.m(t,l),u(t,e,l),n=!0},p(t,n){9&n&&(l=!t[3]||t[8].contents.map(rt).flat().includes(t[3])),l?r?(r.p(t,n),9&n&&C(r,1)):(r=Z(t),r.c(),C(r,1),r.m(e.parentNode,e)):r&&(I(),T(r,1,1,()=>{r=null}),b())},i(t){n||(C(r),n=!0)},o(t){T(r),n=!1},d(t){r&&r.d(t),t&&a(e)}}}function nt(t){let e,n,h,d,p=t[5]+"";function g(){return t[4](t[5])}return{c(){e=l("button"),n=r(p),this.h()},l(t){e=s(t,"BUTTON",{class:!0});var l=i(e);n=o(l,p),l.forEach(a),this.h()},h(){c(e,"class","svelte-2da8tk"),A(e,"isActiveCategory",t[3]==t[5]||!t[3])},m(t,l){u(t,e,l),f(e,n),h||(d=V(e,"click",g),h=!0)},p(l,r){t=l,4&r&&p!==(p=t[5]+"")&&m(n,p),12&r&&A(e,"isActiveCategory",t[3]==t[5]||!t[3])},d(t){t&&a(e),h=!1,d()}}}function lt(t){let e,n,m,p,$,S,v,y,E,x=t[1]&&Y(t),w=t[0],A=[];for(let e=0;e<w.length;e+=1)A[e]=et(J(t,w,e));const V=t=>T(A[t],1,1,()=>{A[t]=null});let N=t[2],P=[];for(let e=0;e<N.length;e+=1)P[e]=nt(Q(t,N,e));return{c(){e=l("div"),x&&x.c(),n=h();for(let t=0;t<A.length;t+=1)A[t].c();m=h(),p=l("div"),$=l("span"),S=r("Filter Categories"),v=h(),y=l("div");for(let t=0;t<P.length;t+=1)P[t].c();this.h()},l(t){e=s(t,"DIV",{class:!0});var l=i(e);x&&x.l(l),n=d(l);for(let t=0;t<A.length;t+=1)A[t].l(l);l.forEach(a),m=d(t),p=s(t,"DIV",{class:!0});var r=i(p);$=s(r,"SPAN",{});var c=i($);S=o(c,"Filter Categories"),c.forEach(a),v=d(r),y=s(r,"DIV",{class:!0});var u=i(y);for(let t=0;t<P.length;t+=1)P[t].l(u);u.forEach(a),r.forEach(a),this.h()},h(){c(e,"class","line svelte-2da8tk"),c(y,"class","svelte-2da8tk"),c(p,"class","noprint categorySelect svelte-2da8tk")},m(t,l){u(t,e,l),x&&x.m(e,null),f(e,n);for(let t=0;t<A.length;t+=1)A[t].m(e,null);u(t,m,l),u(t,p,l),f(p,$),f($,S),f(p,v),f(p,y);for(let t=0;t<P.length;t+=1)P[t].m(y,null);E=!0},p(t,[l]){if(t[1]?x?x.p(t,l):(x=Y(t),x.c(),x.m(e,n)):x&&(x.d(1),x=null),9&l){let n;for(w=t[0],n=0;n<w.length;n+=1){const r=J(t,w,n);A[n]?(A[n].p(r,l),C(A[n],1)):(A[n]=et(r),A[n].c(),C(A[n],1),A[n].m(e,null))}for(I(),n=w.length;n<A.length;n+=1)V(n);b()}if(12&l){let e;for(N=t[2],e=0;e<N.length;e+=1){const n=Q(t,N,e);P[e]?P[e].p(n,l):(P[e]=nt(n),P[e].c(),P[e].m(y,null))}for(;e<P.length;e+=1)P[e].d(1);P.length=N.length}},i(t){if(!E){for(let t=0;t<w.length;t+=1)C(A[t]);E=!0}},o(t){A=A.filter(Boolean);for(let t=0;t<A.length;t+=1)T(A[t]);E=!1},d(t){t&&a(e),x&&x.d(),g(A,t),t&&a(m),t&&a(p),g(P,t)}}}const rt=t=>t.categories;function st(t,e,n){let{data:l=[]}=e,{preContent:r}=e,s=[],i=null;return t.$$set=t=>{"data"in t&&n(0,l=t.data),"preContent"in t&&n(1,r=t.preContent)},t.$$.update=()=>{1&t.$$.dirty&&n(2,s=[...new Set(l.map(t=>t.contents.map(t=>t.categories||null)).flat().flat())].filter(t=>t))},[l,r,s,i,t=>n(3,i=i==t?null:t)]}class it extends t{constructor(t){super(),e(this,t,st,lt,n,{data:0,preContent:1})}}function ot(t,e){return{title:t,contents:e}}function at(t,e=null,n=[],l=null){return{title:t,subtitle:e,categories:n,description:l}}var ct=[ot("2022",[at("Software Engineer @ Audinate","Internship",["Audio/Visual","Computing"]),at("Vivado","± 2% success rate",["Computing"]),at("Thesis","",["Computing","Security"],"“Smart” Vacuum Cleaners - An Audit Into The Security and Integrity of IoT Systems")]),ot("2021",[at("Security Engineer @ Atlassian","2021/2022 Summer Program",["Security","Computing"]),at("First in CSE x SecSoc CTF Competition",null,["Security","Computing"]),at("CommBank Cyber Prize",null,["Security"],"Received an award in recognition for SECedu course excellence "),at("Broadcast Engineer @ UNSW Sydney",null,["Audio/Visual"],"Livestreaming of university events and lectures")]),ot("2020",[at("First in COMP6[84]43 Course",null,["Security","Computing"],"Web Application Security and Testing"),at("First in CSE x SecSoc CTF Competition",null,["Security","Computing"]),at("Two Hands Lifted","2020 - present",["Audio/Visual"],"Wedding Videography and Livestreaming")]),ot("2019",[at("Volunteer @ Sculpture by the Sea","2015, 2019",[]),at("Computer Science Tutor @ UNSW Sydney","2019 - present",["Computing","Security"],"Teaching of higher level computing courses and extended UG/PG cyber security streams"),at("Workshop Content Writer @ CSE CompClub 2019 Summer",null,["Security","Computing"],"Created workshop content about information security and security engineering."),at("Ryndeum","2019 - present",["Computing"],"Software Solutions")]),ot("2018",[at("Mentor @ CSE CompClub 2018 Winter",null,["Security","Computing"]),at("Event Technician @ UNSW Hospitality","2018 - 2020",["Audio/Visual","Computing"]),at("Started Electrical Engineering / Computer Science at UNSW Sydney",null,["Computing"])]),ot("2017",[at("Graduated from Sydney Technical High School","2012 - 2017",["Computing","Audio/Visual"],["School Prefect","First in Information Processes & Technology","First in Software Design & Development","First in Electronics","Deputy Principals’ Prize for Senior Contribution to School Life","Sound and Lighting Crew Director"]),at("AV Technician @ RICE Movement","2017 - 2022",["Audio/Visual"])])];function ut(t){let e;return{c(){e=r("Download as PDF")},l(t){e=o(t,"Download as PDF")},m(t,n){u(t,e,n)},d(t){t&&a(e)}}}function ft(t){let e;return{c(){e=r("View complete resume")},l(t){e=o(t,"View complete resume")},m(t,n){u(t,e,n)},d(t){t&&a(e)}}}function mt(t){let e,n,r,o,m,p,g,$,E,x,I,b,A,V,N;return n=new L({}),o=new it({props:{data:ct,preContent:k}}),g=new F({props:{href:"resume/pdf",openInNewTab:!0,$$slots:{default:[ut]},$$scope:{ctx:t}}}),E=new F({props:{href:"resume/full",$$slots:{default:[ft]},$$scope:{ctx:t}}}),b=new D({props:{rightAlign:!0}}),{c(){e=l("div"),S(n.$$.fragment),r=h(),S(o.$$.fragment),m=h(),p=l("p"),S(g.$$.fragment),$=h(),S(E.$$.fragment),x=h(),I=l("div"),S(b.$$.fragment),A=h(),V=l("div"),this.h()},l(t){e=s(t,"DIV",{id:!0,class:!0});var l=i(e);v(n.$$.fragment,l),r=d(l),v(o.$$.fragment,l),m=d(l),p=s(l,"P",{class:!0,style:!0});var c=i(p);v(g.$$.fragment,c),$=d(c),v(E.$$.fragment,c),c.forEach(a),l.forEach(a),x=d(t),I=s(t,"DIV",{class:!0});var u=i(I);v(b.$$.fragment,u),u.forEach(a),A=d(t),V=s(t,"DIV",{class:!0}),i(V).forEach(a),this.h()},h(){c(p,"class","noprint"),P(p,"text-align","center"),c(e,"id","container"),c(e,"class","svelte-1tcl2l3"),c(I,"class","nameBlockContainer svelte-1tcl2l3"),c(V,"class","randomPrintLine svelte-1tcl2l3")},m(t,l){u(t,e,l),y(n,e,null),f(e,r),y(o,e,null),f(e,m),f(e,p),y(g,p,null),f(p,$),y(E,p,null),u(t,x,l),u(t,I,l),y(b,I,null),u(t,A,l),u(t,V,l),N=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),g.$set(n);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),E.$set(l)},i(t){N||(C(n.$$.fragment,t),C(o.$$.fragment,t),C(g.$$.fragment,t),C(E.$$.fragment,t),C(b.$$.fragment,t),N=!0)},o(t){T(n.$$.fragment,t),T(o.$$.fragment,t),T(g.$$.fragment,t),T(E.$$.fragment,t),T(b.$$.fragment,t),N=!1},d(t){t&&a(e),w(n),w(o),w(g),w(E),t&&a(x),t&&a(I),w(b),t&&a(A),t&&a(V)}}}export default class extends t{constructor(t){super(),e(this,t,null,mt,n,{})}}
