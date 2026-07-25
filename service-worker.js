/* ==========================================
   SPM AI - Service Worker
========================================== */

const CACHE_NAME = "spm-ai-v1";

const STATIC_CACHE = [

    "/",

    "/index.html",

    "/style.css",

    "/manifest.json",

    "/js/app.js",

    "/js/firebase.js",

    "/js/auth.js",

    "/js/support.js",

    "/assets/icons/icon-192.png",

    "/assets/icons/icon-512.png"

];

/* ==========================================
   Install
========================================== */

self.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then((cache) => {

                return cache.addAll(STATIC_CACHE);

            })

    );

    self.skipWaiting();

});

/* ==========================================
   Activate
========================================== */

self.addEventListener("activate", (event) => {

    event.waitUntil(

        caches.keys()

            .then((keys) => {

                return Promise.all(

                    keys.map((key) => {

                        if (key !== CACHE_NAME) {

                            return caches.delete(key);

                        }

                    })

                );

            })

    );

    self.clients.claim();

});

/* ==========================================
   Fetch
========================================== */

self.addEventListener("fetch", (event) => {

    if (event.request.method !== "GET") return;

    event.respondWith(

        caches.match(event.request)

            .then((cachedResponse) => {

                if (cachedResponse) {

                    return cachedResponse;

                }

                return fetch(event.request)

                    .then((networkResponse) => {

                        const responseClone =

                            networkResponse.clone();

                        caches.open(CACHE_NAME)

                            .then((cache) => {

                                cache.put(

                                    event.request,

                                    responseClone

                                );

                            });

                        return networkResponse;

                    })

                    .catch(() => {

                        return caches.match("/index.html");

                    });

            })

    );

});

/* ==========================================
   Push Notification
========================================== */

self.addEventListener("push", (event) => {

    const data = event.data

        ? event.data.json()

        : {

            title: "SPM AI",

            body: "New Notification"

        };

    event.waitUntil(

        self.registration.showNotification(

            data.title,

            {

                body: data.body,

                icon: "/assets/icons/icon-192.png",

                badge: "/assets/icons/icon-192.png"

            }

        )

    );

});

/* ==========================================
   Notification Click
========================================== */

self.addEventListener("notificationclick", (event) => {

    event.notification.close();

    event.waitUntil(

        clients.openWindow("/")

    );

});

/* ==========================================
   Background Sync
========================================== */

self.addEventListener("sync", (event) => {

    if (event.tag === "sync-data") {

        event.waitUntil(

            Promise.resolve()

        );

    }

});

console.log("SPM AI Service Worker Loaded");
