!function(){"use strict";const s=["client/client.b4f79d51.js","client/index.ec59b65f.js","client/programming.35856b95.js","client/index.71315218.js","client/about.6eab0cb6.js"].concat(["service-worker-index.html","404.html","Andrew Jin-Meng Wong - Resume (Complete).pdf","Andrew Jin-Meng Wong - Resume.pdf","Andrew Jin-Meng Wong - School Reference.pdf","assets/fonts/coves_bold-webfont.woff","assets/fonts/coves_bold-webfont.woff2","assets/fonts/coves_light-webfont.woff","assets/fonts/coves_light-webfont.woff2","assets/icons/code-squircle.svg","assets/icons/facebook-squircle.svg","assets/icons/instagram.svg","assets/icons/linkedin-squircle.svg","assets/icons/mail-squircle.svg","assets/icons/skype.svg","assets/images/bg/bg01.jpg","assets/images/bg/bg02.jpg","assets/images/bg/bg03.jpg","assets/images/bg/bg04.jpg","assets/images/bg/bg05.jpg","assets/images/bg/bg06.jpg","assets/images/bg/bg07.jpg","assets/images/bg/bg08.jpg","assets/images/bg/bg09.jpg","assets/images/bg/bg10.jpg","assets/images/bg/bg11.jpg","assets/images/bg/bg12.jpg","assets/images/bg/bg13.jpg","assets/images/bg/bg14.JPG","assets/images/bg/bg15.JPG","assets/images/bg/bg16.JPG","assets/images/bg/bg17.JPG","assets/images/bg/bg18.JPG","assets/images/bg/bg19.jpg","assets/images/cover.jpg","assets/images/profilepic.jpg","favicon-16.png","favicon-32.png","favicon.ico","manifest.json"]),e=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1622827954686").then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const e of s)"cache1622827954686"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const t=new URL(s.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&e.has(t.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1622827954686").then(async e=>{try{const t=await fetch(s.request);return e.put(s.request,t.clone()),t}catch(t){const a=await e.match(s.request);if(a)return a;throw t}}))))})}();
