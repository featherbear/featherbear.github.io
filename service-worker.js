!function(){"use strict";const s=["client/client.bce35994.js","client/index.38707d2e.js","client/NameBlock.631ec73c.js","client/Button.3ab0f9a9.js","client/programming.da0e988f.js","client/index.30059095.js","client/aboutText.1e1c3012.js","client/index.8f9c62ee.js","client/pdf.d04f4c02.js","client/pdf.20601b12.js","client/about.298f7436.js"].concat(["service-worker-index.html",".nojekyll","404.html","Andrew Jin-Meng Wong - Resume (Complete).pdf","Andrew Jin-Meng Wong - Resume.pdf","Andrew Jin-Meng Wong - School Reference.pdf","assets/fonts/coves_bold-webfont.woff","assets/fonts/coves_bold-webfont.woff2","assets/fonts/coves_light-webfont.woff","assets/fonts/coves_light-webfont.woff2","assets/icons/code-squircle.svg","assets/icons/facebook-squircle.svg","assets/icons/instagram.svg","assets/icons/linkedin-squircle.svg","assets/icons/mail-squircle.svg","assets/images/bg/bg01-min.jpg","assets/images/bg/bg02-min.jpg","assets/images/bg/bg03-min.jpg","assets/images/bg/bg04-min.jpg","assets/images/bg/bg05-min.jpg","assets/images/bg/bg06-min.jpg","assets/images/bg/bg07-min.jpg","assets/images/bg/bg08-min.jpg","assets/images/bg/bg09-min.jpg","assets/images/bg/bg10-min.jpg","assets/images/bg/bg11-min.jpg","assets/images/bg/bg12-min.jpg","assets/images/bg/bg13-min.jpg","assets/images/bg/bg14-min.jpg","assets/images/bg/bg15-min.jpg","assets/images/bg/bg16-min.jpg","assets/images/bg/bg17-min.jpg","assets/images/bg/bg18-min.jpg","assets/images/bg/bg19-min.jpg","assets/images/bg/old/bg01.jpg","assets/images/bg/old/bg02.jpg","assets/images/bg/old/bg03.jpg","assets/images/bg/old/bg04.jpg","assets/images/bg/old/bg05.jpg","assets/images/bg/old/bg06.jpg","assets/images/bg/old/bg07.jpg","assets/images/bg/old/bg08.jpg","assets/images/bg/old/bg09.jpg","assets/images/bg/old/bg10.jpg","assets/images/bg/old/bg11.jpg","assets/images/bg/old/bg12.jpg","assets/images/bg/old/bg13.jpg","assets/images/bg/old/bg14.JPG","assets/images/bg/old/bg15.JPG","assets/images/bg/old/bg16.JPG","assets/images/bg/old/bg17.JPG","assets/images/bg/old/bg18.JPG","assets/images/bg/old/bg19.jpg","assets/images/cover.jpg","assets/images/profilepic.jpg","favicon-16.png","favicon-32.png","favicon.ico","manifest.json","old.2018.Andrew Jin-Meng Wong - Resume (Complete).pdf","old.2018.Andrew Jin-Meng Wong - Resume.pdf"]),e=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1627202222323").then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const e of s)"cache1627202222323"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const g=new URL(s.request.url);g.protocol.startsWith("http")&&(g.hostname===self.location.hostname&&g.port!==self.location.port||(g.host===self.location.host&&e.has(g.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1627202222323").then(async e=>{try{const g=await fetch(s.request);return e.put(s.request,g.clone()),g}catch(g){const t=await e.match(s.request);if(t)return t;throw g}}))))})}();
