if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-c9018aa3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0cfb6fd9ee3a351989380ab0dcce37d2"},{url:"/_next/static/chunks/1dd3208c-956d8fa0f4d1f8dc.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/49491fe1-a1c5f7d70af5d4b5.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/515-92a85942175012f1.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/618-92a79c4c5c469e1c.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/67-311939bc138b2b25.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/997-886b27fa286d9852.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/a1ec59c6-c15fe98e95434958.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/app/_not-found-3d8cc85a63a99f1a.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/app/groups/page-e0d23b1fd98575e1.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/app/layout-457c01b1c5c110c4.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/app/page-bae6dbfd17b8af4e.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/app/proofs/page-8f981df14e8bf335.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/framework-9e68550641db712d.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/main-61a165303dd7148a.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/main-app-0ee1fa742aedb1a7.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/pages/_app-22ef1381f3010e9c.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/pages/_error-2312f57de16788ac.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8593758a9224a088.js",revision:"nD323uKrfdkS3Gy0aYqtJ"},{url:"/_next/static/css/c2c97e7458a9e615.css",revision:"c2c97e7458a9e615"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/nD323uKrfdkS3Gy0aYqtJ/_buildManifest.js",revision:"dbd27fa76a50fbdf38c89f9126af90c3"},{url:"/_next/static/nD323uKrfdkS3Gy0aYqtJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/apple-icon.png",revision:"3a6daa451bb2f2dfab06f8f0b1c27aec"},{url:"/icon.svg",revision:"ef4c4deb97cd558f753105c030def25c"},{url:"/images/icons/favicon-16x16.png",revision:"a20aa776bb9fd0c500da94e8d025c97a"},{url:"/images/icons/favicon-32x32.png",revision:"8e288f06f685596d680929058dd693d2"},{url:"/images/icons/favicon.ico",revision:"6b0bd34c526c225462fd866b278472b3"},{url:"/images/icons/icon-128x128.png",revision:"1be0d7c07e6b2d3d8930468a89164d19"},{url:"/images/icons/icon-144x144.png",revision:"e8582d9a63f2b161c5efcaaf29f1dfe2"},{url:"/images/icons/icon-152x152.png",revision:"4c2106f965ccd97c70e00e5ff0521011"},{url:"/images/icons/icon-192x192.png",revision:"a20611ea28a2d565d0d0501a210f3a17"},{url:"/images/icons/icon-512x512.png",revision:"8922bf253b5bd952baf47df274b1f2e1"},{url:"/images/icons/icon-72x72.png",revision:"5b15b03bbd67d9dc17e97b7f4a008161"},{url:"/images/icons/icon-96x96.png",revision:"5d21b1bfefe123eda0ba8e04ce96c2a0"},{url:"/manifest.json",revision:"3b7c6af0e50390c13902d0be6c43c98b"},{url:"/semaphore-icon.svg",revision:"f90d862c16588f09d087532b70fd25da"},{url:"/semaphore-logo.svg",revision:"b62759114c6b544facc863cf7d7e89a0"},{url:"/social-media.png",revision:"3bd049e17b3a38a57f2768549cbd9752"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));