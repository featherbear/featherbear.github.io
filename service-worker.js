!function(){"use strict";const s=["client/client.1e803714.js","client/index.89be1390.js","client/NameBlock.5191257f.js","client/Button.5c8ad125.js","client/programming.d359ce24.js","client/index.0fee7a07.js","client/aboutText.be188a7a.js","client/index.6034fbff.js","client/pdf.2968860e.js","client/pdf.f6bd665d.js","client/about.6f2b115f.js"].concat(["service-worker-index.html",".nojekyll","404.html","Andrew Jin-Meng Wong - Resume (Complete).pdf","Andrew Jin-Meng Wong - Resume.pdf","Andrew Jin-Meng Wong - School Reference.pdf","assets/fonts/coves_bold-webfont.woff","assets/fonts/coves_bold-webfont.woff2","assets/fonts/coves_light-webfont.woff","assets/fonts/coves_light-webfont.woff2","assets/icons/code-squircle.svg","assets/icons/facebook-squircle.svg","assets/icons/instagram.svg","assets/icons/linkedin-squircle.svg","assets/icons/mail-squircle.svg","assets/images/bg/2022/0T4A9896.jpg","assets/images/bg/2022/0T4A9920.jpg","assets/images/bg/2022/20220413-0t4a9037_exp.jpg","assets/images/bg/2022/IMG_4060_exp.jpg","assets/images/bg/bg01-min.jpg","assets/images/bg/bg02-min.jpg","assets/images/bg/bg03-min.jpg","assets/images/bg/bg04-min.jpg","assets/images/bg/bg05-min.jpg","assets/images/bg/bg06-min.jpg","assets/images/bg/bg07-min.jpg","assets/images/bg/bg08-min.jpg","assets/images/bg/bg09-min.jpg","assets/images/bg/bg10-min.jpg","assets/images/bg/bg11-min.jpg","assets/images/bg/bg12-min.jpg","assets/images/bg/bg13-min.jpg","assets/images/bg/bg14-min.jpg","assets/images/bg/bg15-min.jpg","assets/images/bg/bg16-min.jpg","assets/images/bg/bg17-min.jpg","assets/images/bg/bg18-min.jpg","assets/images/bg/bg19-min.jpg","assets/images/bg/old/bg01.jpg","assets/images/bg/old/bg02.jpg","assets/images/bg/old/bg03.jpg","assets/images/bg/old/bg04.jpg","assets/images/bg/old/bg05.jpg","assets/images/bg/old/bg06.jpg","assets/images/bg/old/bg07.jpg","assets/images/bg/old/bg08.jpg","assets/images/bg/old/bg09.jpg","assets/images/bg/old/bg10.jpg","assets/images/bg/old/bg11.jpg","assets/images/bg/old/bg12.jpg","assets/images/bg/old/bg13.jpg","assets/images/bg/old/bg14.JPG","assets/images/bg/old/bg15.JPG","assets/images/bg/old/bg16.JPG","assets/images/bg/old/bg17.JPG","assets/images/bg/old/bg18.JPG","assets/images/bg/old/bg19.jpg","assets/images/bg/other/IMG_0082_DxO.jpg","assets/images/bg/other/IMG_1328.jpg","assets/images/bg/other/IMG_8914.jpg","assets/images/cover.jpg","assets/images/profilepic.jpg","favicon-16.png","favicon-32.png","favicon.ico","manifest.json","old.2018.Andrew Jin-Meng Wong - Resume (Complete).pdf","old.2018.Andrew Jin-Meng Wong - Resume.pdf"]),e=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1661853499953").then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const e of s)"cache1661853499953"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const g=new URL(s.request.url);g.protocol.startsWith("http")&&(g.hostname===self.location.hostname&&g.port!==self.location.port||(g.host===self.location.host&&e.has(g.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1661853499953").then(async e=>{try{const g=await fetch(s.request);return e.put(s.request,g.clone()),g}catch(g){const a=await e.match(s.request);if(a)return a;throw g}}))))})}();
