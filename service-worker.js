/* ===========================
   SPM TOP AGENCY
   Powered By SPM AI
=========================== */

const CACHE_NAME = "spm-ai-v1.0.0";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./404.html",
  "./assets/logo.png",
  "./assets/favicon.png",
  "./assets/coin.webp",
  "./assets/icon-72.png",
  "./assets/icon-96.png",
  "./assets/icon-128.png",
  "./assets/icon-144.png",
  "./assets/icon-152.png",
  "./assets/icon-192.png",
  "./assets/icon-384.png",
  "./assets/icon-512.png"
];

/* Install */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))

  );

  self.skipWaiting();

});

/* Activate */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys =>

      Promise.all(

        keys.map(key => {

          if (key !== CACHE_NAME) {

            return caches.delete(key);

          }

        })

      )

    )

  );

  self.clients.claim();

});

/* Fetch */

self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") return;

  event.respondWith(

    caches.match(event.request).then(response => {

      if (response) {

        return response;

      }

      return fetch(event.request)
        .then(networkResponse => {

          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== "basic"
          ) {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();

          caches.open(CACHE_NAME).then(cache => {

            cache.put(event.request, responseClone);

          });

          return networkResponse;

        })
        .catch(() => caches.match("./404.html"));

    })

  );

});
