/* ==========================================
SPM AI Service Worker v1.0
Powered by SPM TOP AGENCY
========================================== */

const CACHE_NAME = "spm-ai-v1.0";

const FILES_TO_CACHE = [

"/",

"/index.html",

"/css/style.css",
"/css/responsive.css",
"/css/animations.css",

"/js/script.js",
"/js/chatbot.js",
"/js/calculator.js",
"/js/firebase.js",

"/manifest.json",

"/assets/logo/logo.png",
"/assets/icons/icon-192.png",
"/assets/icons/icon-512.png"

];

/* ==========================================
INSTALL
========================================== */

self.addEventListener("install",(event)=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>cache.addAll(FILES_TO_CACHE))

);

self.skipWaiting();

});

/* ==========================================
ACTIVATE
========================================== */

self.addEventListener("activate",(event)=>{

event.waitUntil(

caches.keys().then(keys=>{

return Promise.all(

keys.map(key=>{

if(key!==CACHE_NAME){

return caches.delete(key);

}

})

);

})

);

self.clients.claim();

});

/* ==========================================
FETCH
Network First
========================================== */

self.addEventListener("fetch",(event)=>{

event.respondWith(

fetch(event.request)

.then(response=>{

const clone=response.clone();

caches.open(CACHE_NAME)

.then(cache=>{

cache.put(event.request,clone);

});

return response;

})

.catch(()=>{

return caches.match(event.request);

})

);

});

/* ==========================================
MESSAGE
========================================== */

self.addEventListener("message",(event)=>{

if(event.data==="SKIP_WAITING"){

self.skipWaiting();

}

});
