/* ==========================================
   SPM TOP AGENCY
   Service Worker
========================================== */

const CACHE_NAME = "spm-top-agency-v1.0.0";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./404.html",

  "./assets/logo.png",
  "./assets/favicon.png",

  "./assets/icons/icon-72.png",
  "./assets/icons/icon-96.png",
  "./assets/icons/icon-128.png",
  "./assets/icons/icon-144.png",
  "./assets/icons/icon-152.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-384.png",
  "./assets/icons/icon-512.png"
];

/* ==========================
   INSTALL
========================== */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))

  );

  self.skipWaiting();

});

/* ==========================
   ACTIVATE
========================== */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys.map(key => {

          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }

        })

      );

    })

  );

  self.clients.claim();

});

/* ==========================
   FETCH
========================== */

self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") return;

  event.respondWith(

    caches.match(event.request)

      .then(response => {

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

            caches.open(CACHE_NAME)

              .then(cache => {

                cache.put(event.request, responseClone);

              });

            return networkResponse;

          })

          .catch(() => {

            if (event.request.mode === "navigate") {

              return caches.match("./404.html");

            }

          });

      })

  );

});

/* ==========================
   MESSAGE
========================== */

self.addEventListener("message", event => {

  if (event.data === "SKIP_WAITING") {

    self.skipWaiting();

  }

});

console.log("✅ Service Worker Loaded");
