"use strict";var precacheConfig=[["/cloud-music/index.html","9eb64d242d22050c00b1a85146316608"],["/cloud-music/static/css/main.2e756c00.css","6133301ed103e3b5e9ff66bec4b168c8"],["/cloud-music/static/js/main.0776589e.js","97097ed0fe93240cc9b02027b440c32b"],["/cloud-music/static/media/a20.9.1aa927ec.png","1aa927ec4be7cc4b07b4768a82234ed7"],["/cloud-music/static/media/acg.8dc9dbba.png","8dc9dbba7b61e3fcdb56001912a76348"],["/cloud-music/static/media/ae2.f8ee94d3.png","f8ee94d366e68fc3a3e2463d640b5201"],["/cloud-music/static/media/aea.c496a4f0.png","c496a4f09de484b35494a60640f9d917"],["/cloud-music/static/media/ff1.be022a7b.jpg","be022a7bb144858d3631a9f60892a9d2"],["/cloud-music/static/media/ff2.39ca8e9a.jpg","39ca8e9a0ef5141b94cf5d9935f3ed6d"],["/cloud-music/static/media/ff3.0a5aacd7.jpg","0a5aacd7f9141a3ec97bede5ba98fdf7"],["/cloud-music/static/media/iloveyou.5363f82b.bin","5363f82b4a680e7c11ae45937ddece08"],["/cloud-music/static/media/psb.da3de548.png","da3de5483476e8e26a4fd1f0555fb9d4"],["/cloud-music/static/media/ww.46ec2d97.jpg","46ec2d978c31d238603d86b9cd1833d2"],["/cloud-music/static/media/全部都是你.b044a156.bin","b044a156e049ecb9fe7d90a3eea2632c"],["/cloud-music/static/media/刚好遇见你.705f059a.bin","705f059adc1d88217fc62e656277098a"],["/cloud-music/static/media/小芳.b90c6ea9.bin","b90c6ea916219b507a80708a98552329"],["/cloud-music/static/media/想把我唱给你听.ad1cdf28.bin","ad1cdf2829a6564cd5276ca2d96c9afc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/cloud-music/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});