!function(){"use strict";const s=1677423313120,e=`cache${s}`,g=["/client/client.4d47b72d.js","/client/inject_styles.5607aec6.js","/client/index.75ca9136.js","/client/NameBlock.951ed8ad.js","/client/Button.8bdb5cf7.js","/client/programming.ec8d36e3.js","/client/index.649d6b4c.js","/client/aboutText.712621a0.js","/client/index.8539d80e.js","/client/pdf.99a7ee41.js","/client/pdf.bd5313bd.js","/client/about.2cc957e1.js"].concat(["/service-worker-index.html","/.nojekyll","/404.html","/Andrew Jin-Meng Wong - Resume (Complete).pdf","/Andrew Jin-Meng Wong - Resume.pdf","/Andrew Jin-Meng Wong - School Reference.pdf","/assets/fonts/coves_bold-webfont.woff","/assets/fonts/coves_bold-webfont.woff2","/assets/fonts/coves_light-webfont.woff","/assets/fonts/coves_light-webfont.woff2","/assets/icons/code-squircle.svg","/assets/icons/facebook-squircle.svg","/assets/icons/instagram.svg","/assets/icons/linkedin-squircle.svg","/assets/icons/mail-squircle.svg","/assets/images/bg/2022/0T4A9896.jpg","/assets/images/bg/2022/0T4A9920.jpg","/assets/images/bg/2022/20220413-0t4a9037_exp.jpg","/assets/images/bg/2022/IMG_4060_exp.jpg","/assets/images/bg/bg01-min.jpg","/assets/images/bg/bg02-min.jpg","/assets/images/bg/bg03-min.jpg","/assets/images/bg/bg04-min.jpg","/assets/images/bg/bg05-min.jpg","/assets/images/bg/bg06-min.jpg","/assets/images/bg/bg07-min.jpg","/assets/images/bg/bg08-min.jpg","/assets/images/bg/bg09-min.jpg","/assets/images/bg/bg10-min.jpg","/assets/images/bg/bg11-min.jpg","/assets/images/bg/bg12-min.jpg","/assets/images/bg/bg13-min.jpg","/assets/images/bg/bg14-min.jpg","/assets/images/bg/bg15-min.jpg","/assets/images/bg/bg16-min.jpg","/assets/images/bg/bg17-min.jpg","/assets/images/bg/bg18-min.jpg","/assets/images/bg/bg19-min.jpg","/assets/images/bg/old/bg01.jpg","/assets/images/bg/old/bg02.jpg","/assets/images/bg/old/bg03.jpg","/assets/images/bg/old/bg04.jpg","/assets/images/bg/old/bg05.jpg","/assets/images/bg/old/bg06.jpg","/assets/images/bg/old/bg07.jpg","/assets/images/bg/old/bg08.jpg","/assets/images/bg/old/bg09.jpg","/assets/images/bg/old/bg10.jpg","/assets/images/bg/old/bg11.jpg","/assets/images/bg/old/bg12.jpg","/assets/images/bg/old/bg13.jpg","/assets/images/bg/old/bg14.JPG","/assets/images/bg/old/bg15.JPG","/assets/images/bg/old/bg16.JPG","/assets/images/bg/old/bg17.JPG","/assets/images/bg/old/bg18.JPG","/assets/images/bg/old/bg19.jpg","/assets/images/bg/other/IMG_0082_DxO.jpg","/assets/images/bg/other/IMG_1328.jpg","/assets/images/bg/other/IMG_8914.jpg","/assets/images/cover.jpg","/assets/images/profilepic.jpg","/favicon-16.png","/favicon-32.png","/favicon.ico","/manifest.json","/old.2018.Andrew Jin-Meng Wong - Resume (Complete).pdf","/old.2018.Andrew Jin-Meng Wong - Resume.pdf"]),a=new Set(g);self.addEventListener("install",(s=>{s.waitUntil(caches.open(e).then((s=>s.addAll(g))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const g of s)g!==e&&await caches.delete(g);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const g=new URL(e.request.url),t=g.protocol.startsWith("http"),i=g.hostname===self.location.hostname&&g.port!==self.location.port,n=g.host===self.location.host&&a.has(g.pathname),o="only-if-cached"===e.request.cache&&!n;!t||i||o||e.respondWith((async()=>n&&await caches.match(e.request)||async function(e){const g=await caches.open(`offline${s}`);try{const s=await fetch(e);return g.put(e,s.clone()),s}catch(s){const a=await g.match(e);if(a)return a;throw s}}(e.request))())}))}();
