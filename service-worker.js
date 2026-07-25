/*==========================================================
  SPM AI 2050
  Service Worker
  Powered by SPM TOP AGENCY
==========================================================*/

const CACHE_NAME = "spm-ai-v1.0.0";

const STATIC_CACHE = [

  "./",

  "./index.html",

  "./style.css",

  "./app.js",

  "./manifest.json"

];

/*==========================================================
INSTALL
==========================================================*/

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(STATIC_CACHE))

      .then(() => self.skipWaiting())

  );

});

/*==========================================================
ACTIVATE
==========================================================*/

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

    ).then(() => self.clients.claim())

  );

});

/*==========================================================
FETCH
==========================================================*/

self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") return;

  event.respondWith(

    caches.match(event.request)

      .then(cacheResponse => {

        if (cacheResponse) {

          return cacheResponse;

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

          });

      })

      .catch(() => {

        if (event.request.destination === "document") {

          return caches.match("./index.html");

        }

      })

  );

});

/*==========================================================
MESSAGES
==========================================================*/

self.addEventListener("message", event => {

  if (event.data === "SKIP_WAITING") {

    self.skipWaiting();

  }

});

/*==========================================================
ONLINE / OFFLINE
==========================================================*/

self.addEventListener("sync", event => {

  console.log("Background Sync:", event.tag);

});

self.addEventListener("notificationclick", event => {

  event.notification.close();

  event.waitUntil(

    clients.openWindow("./")

  );

});
